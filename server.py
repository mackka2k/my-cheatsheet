#!/usr/bin/env python3
"""
Cheatsheet Server - Personal file editing with authentication
Allows authenticated users to edit cheatsheet files directly
"""

import os
import json
import hashlib
import secrets
import requests
import threading
import time
from datetime import datetime, timedelta
from flask import Flask, request, jsonify, send_from_directory, session
from flask_cors import CORS
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.secret_key = secrets.token_hex(32)  # Random secret key
CORS(app, supports_credentials=True)

# Configuration
ADMIN_PASSWORD = os.environ.get('CHEATSHEET_PASSWORD', 'admin123')  # Change this!
SESSION_TIMEOUT = timedelta(hours=24)
ALLOWED_EXTENSIONS = {'.md', '.txt', '.sh', '.js', '.py', '.html', '.css'}

# GitHub Sync Configuration
GITHUB_REPO = os.environ.get('GITHUB_REPO', '')  # Format: owner/repo
GITHUB_TOKEN = os.environ.get('GITHUB_TOKEN', '')  # Personal access token
GITHUB_BRANCH = os.environ.get('GITHUB_BRANCH', 'main')  # Branch to sync from
SYNC_INTERVAL = int(os.environ.get('SYNC_INTERVAL', '3600'))  # Sync every hour (3600 seconds)
AUTO_SYNC_ENABLED = os.environ.get('AUTO_SYNC_ENABLED', 'false').lower() == 'true'

# Sync status tracking
sync_status = {
    'last_sync': None,
    'last_commit': None,
    'status': 'idle',  # idle, syncing, error
    'message': '',
    'auto_sync_enabled': AUTO_SYNC_ENABLED
}

def is_authenticated():
    """Check if user is authenticated as admin"""
    if 'admin' not in session:
        return False
    
    # Check session timeout
    if 'login_time' in session:
        login_time = datetime.fromisoformat(session['login_time'])
        if datetime.now() - login_time > SESSION_TIMEOUT:
            session.clear()
            return False
    
    return session['admin'] == True

def is_safe_path(basedir, path):
    """Ensure the path is within the allowed directory"""
    try:
        # Convert both paths to absolute paths
        basedir_abs = os.path.abspath(basedir)
        path_abs = os.path.abspath(path)
        # Check if the path is within the basedir
        return os.path.commonpath([basedir_abs, path_abs]) == basedir_abs
    except (ValueError, OSError):
        # If there's any error in path handling, consider it unsafe
        return False

def get_github_headers():
    """Get headers for GitHub API requests"""
    headers = {'Accept': 'application/vnd.github.v3+json'}
    if GITHUB_TOKEN:
        headers['Authorization'] = f'token {GITHUB_TOKEN}'
    return headers

def get_latest_commit():
    """Get the latest commit from GitHub repository"""
    if not GITHUB_REPO:
        return None
    
    try:
        url = f'https://api.github.com/repos/{GITHUB_REPO}/commits/{GITHUB_BRANCH}'
        response = requests.get(url, headers=get_github_headers(), timeout=10)
        
        if response.status_code == 200:
            commit_data = response.json()
            return {
                'sha': commit_data['sha'],
                'message': commit_data['commit']['message'],
                'date': commit_data['commit']['author']['date'],
                'url': commit_data['html_url']
            }
        else:
            print(f"GitHub API error: {response.status_code} - {response.text}")
            return None
    except Exception as e:
        print(f"Error fetching latest commit: {e}")
        return None

def download_file_from_github(file_path):
    """Download a specific file from GitHub repository"""
    if not GITHUB_REPO:
        return None
    
    try:
        url = f'https://raw.githubusercontent.com/{GITHUB_REPO}/{GITHUB_BRANCH}/{file_path}'
        response = requests.get(url, timeout=10)
        
        if response.status_code == 200:
            return response.text
        else:
            print(f"Error downloading {file_path}: {response.status_code}")
            return None
    except Exception as e:
        print(f"Error downloading {file_path}: {e}")
        return None

def sync_from_github():
    """Sync cheatsheet files from GitHub repository"""
    global sync_status
    
    if not GITHUB_REPO:
        sync_status['status'] = 'error'
        sync_status['message'] = 'GitHub repository not configured'
        return False
    
    sync_status['status'] = 'syncing'
    sync_status['message'] = 'Syncing from GitHub...'
    
    try:
        # Get latest commit info
        latest_commit = get_latest_commit()
        if not latest_commit:
            sync_status['status'] = 'error'
            sync_status['message'] = 'Failed to fetch latest commit'
            return False
        
        # Check if we already have this commit
        if sync_status['last_commit'] == latest_commit['sha']:
            sync_status['status'] = 'idle'
            sync_status['message'] = 'Already up to date'
            return True
        
        # List of files to sync (from manifest)
        files_to_sync = []
        try:
            with open('assets/manifest.js', 'r', encoding='utf-8') as f:
                manifest_content = f.read()
                # Extract file paths from manifest (simple regex approach)
                import re
                paths = re.findall(r"'([^']+\.(?:md|sh|txt|js|py|html|css))'", manifest_content)
                files_to_sync.extend(paths)
        except Exception as e:
            print(f"Error reading manifest: {e}")
        
        # Add common files
        common_files = ['README.md', 'LICENSE', 'index.html', 'assets/app.js', 'assets/style.css', 'assets/manifest.js']
        files_to_sync.extend(common_files)
        
        # Download and update files
        updated_files = 0
        for file_path in files_to_sync:
            if not is_safe_path('.', file_path):
                continue
                
            content = download_file_from_github(file_path)
            if content is not None:
                # Create backup if file exists
                if os.path.exists(file_path):
                    backup_path = file_path + '.bak'
                    try:
                        with open(file_path, 'r', encoding='utf-8') as original:
                            with open(backup_path, 'w', encoding='utf-8') as backup:
                                backup.write(original.read())
                    except Exception as e:
                        print(f"Error creating backup for {file_path}: {e}")
                
                # Write new content
                try:
                    os.makedirs(os.path.dirname(file_path), exist_ok=True)
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    updated_files += 1
                except Exception as e:
                    print(f"Error writing {file_path}: {e}")
        
        # Update sync status
        sync_status['last_sync'] = datetime.now().isoformat()
        sync_status['last_commit'] = latest_commit['sha']
        sync_status['status'] = 'idle'
        sync_status['message'] = f'Updated {updated_files} files from commit {latest_commit["sha"][:7]}'
        
        print(f"GitHub sync completed: {updated_files} files updated")
        return True
        
    except Exception as e:
        sync_status['status'] = 'error'
        sync_status['message'] = f'Sync failed: {str(e)}'
        print(f"GitHub sync error: {e}")
        return False

def auto_sync_worker():
    """Background worker for automatic syncing"""
    while True:
        if AUTO_SYNC_ENABLED and GITHUB_REPO:
            sync_from_github()
        time.sleep(SYNC_INTERVAL)

@app.route('/')
def serve_index():
    """Serve the main index.html - requires authentication"""
    if not is_authenticated():
        return """
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Login Required - Senior Dev Cheatsheet</title>
            <style>
                body { 
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                    background: #0d1117; color: #c9d1d9; margin: 0; padding: 0;
                    display: flex; align-items: center; justify-content: center; min-height: 100vh;
                }
                .login-container { 
                    background: #161b22; border: 1px solid #30363d; border-radius: 8px;
                    padding: 32px; max-width: 400px; width: 90%; box-shadow: 0 8px 24px rgba(1,4,9,0.8);
                }
                h1 { margin: 0 0 24px 0; text-align: center; color: #f0f6fc; }
                input { 
                    width: 100%; padding: 12px 16px; border: 1px solid #30363d; border-radius: 6px;
                    background: #0d1117; color: #c9d1d9; font-size: 16px; margin-bottom: 16px; box-sizing: border-box;
                }
                input:focus { outline: none; border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
                button { 
                    width: 100%; padding: 12px; background: #3b82f6; color: white; border: none;
                    border-radius: 6px; font-size: 16px; font-weight: 500; cursor: pointer; transition: background 0.2s;
                }
                button:hover { background: #2563eb; }
                .error { color: #f85149; margin-top: 8px; text-align: center; }
            </style>
        </head>
        <body>
            <div class="login-container">
                <h1>🔒 Senior Dev Cheatsheet</h1>
                <form id="loginForm">
                    <input type="password" id="password" placeholder="Enter admin password" required>
                    <button type="submit">Login</button>
                    <div id="error" class="error"></div>
                </form>
            </div>
            <script>
                document.getElementById('loginForm').addEventListener('submit', async (e) => {
                    e.preventDefault();
                    const password = document.getElementById('password').value;
                    const errorDiv = document.getElementById('error');
                    
                    try {
                        const response = await fetch('/api/auth/login', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ password })
                        });
                        
                        const data = await response.json();
                        if (data.success) {
                            window.location.reload();
                        } else {
                            errorDiv.textContent = data.message || 'Invalid password';
                        }
                    } catch (error) {
                        errorDiv.textContent = 'Login failed. Make sure the server is running.';
                    }
                });
            </script>
        </body>
        </html>
        """, 401
    return send_from_directory('.', 'index.html')

@app.route('/<path:filename>')
def serve_static(filename):
    """Serve static files - requires authentication"""
    if not is_authenticated():
        return "Authentication required", 401
    
    # Security: only serve files from current directory and subdirectories
    if not is_safe_path('.', filename):
        return "Access denied", 403
    
    try:
        if os.path.isfile(filename):
            return send_from_directory('.', filename)
        else:
            return "File not found", 404
    except Exception as e:
        print(f"Error serving file {filename}: {e}")
        return "Error serving file", 500

@app.route('/api/auth/login', methods=['POST'])
def login():
    """Authenticate admin user"""
    data = request.get_json()
    password = data.get('password', '')
    
    # Simple password check (you can make this more secure)
    if password == ADMIN_PASSWORD:
        session['admin'] = True
        session['login_time'] = datetime.now().isoformat()
        return jsonify({'success': True, 'message': 'Login successful'})
    else:
        return jsonify({'success': False, 'message': 'Invalid password'}), 401

@app.route('/api/auth/logout', methods=['POST'])
def logout():
    """Logout admin user"""
    session.clear()
    return jsonify({'success': True, 'message': 'Logged out'})

@app.route('/api/auth/status', methods=['GET'])
def auth_status():
    """Check authentication status"""
    return jsonify({'authenticated': is_authenticated()})

@app.route('/api/files/read/<path:filepath>', methods=['GET'])
def read_file(filepath):
    """Read a file (public access)"""
    if not is_safe_path('.', filepath):
        return "Access denied", 403
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        return jsonify({'success': True, 'content': content})
    except FileNotFoundError:
        return jsonify({'success': False, 'message': 'File not found'}), 404
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/api/files/write/<path:filepath>', methods=['POST'])
def write_file(filepath):
    """Write to a file (admin only)"""
    if not is_authenticated():
        return jsonify({'success': False, 'message': 'Authentication required'}), 401
    
    if not is_safe_path('.', filepath):
        return jsonify({'success': False, 'message': 'Access denied'}), 403
    
    # Check file extension
    _, ext = os.path.splitext(filepath)
    if ext not in ALLOWED_EXTENSIONS:
        return jsonify({'success': False, 'message': 'File type not allowed'}), 400
    
    data = request.get_json()
    content = data.get('content', '')
    
    try:
        # Create backup
        if os.path.exists(filepath):
            backup_path = f"{filepath}.backup.{int(datetime.now().timestamp())}"
            with open(backup_path, 'w', encoding='utf-8') as backup:
                with open(filepath, 'r', encoding='utf-8') as original:
                    backup.write(original.read())
        
        # Write new content
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return jsonify({'success': True, 'message': 'File saved successfully'})
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/api/files/list', methods=['GET'])
def list_files():
    """List all cheatsheet files"""
    files = []
    for root, dirs, filenames in os.walk('.'):
        # Skip hidden directories and common non-cheatsheet dirs
        dirs[:] = [d for d in dirs if not d.startswith('.') and d not in ['__pycache__', 'node_modules']]
        
        for filename in filenames:
            if any(filename.endswith(ext) for ext in ALLOWED_EXTENSIONS):
                filepath = os.path.join(root, filename)
                files.append({
                    'path': filepath,
                    'name': filename,
                    'size': os.path.getsize(filepath),
                    'modified': datetime.fromtimestamp(os.path.getmtime(filepath)).isoformat()
                })
    
    return jsonify({'success': True, 'files': files})

@app.route('/api/sync/status', methods=['GET'])
def sync_status_endpoint():
    """Get GitHub sync status"""
    if not is_authenticated():
        return jsonify({'success': False, 'message': 'Authentication required'}), 401
    
    return jsonify({
        'success': True,
        'status': sync_status,
        'config': {
            'repo': GITHUB_REPO,
            'branch': GITHUB_BRANCH,
            'auto_sync_enabled': AUTO_SYNC_ENABLED,
            'sync_interval': SYNC_INTERVAL
        }
    })

@app.route('/api/sync/manual', methods=['POST'])
def manual_sync():
    """Trigger manual GitHub sync"""
    if not is_authenticated():
        return jsonify({'success': False, 'message': 'Authentication required'}), 401
    
    if not GITHUB_REPO:
        return jsonify({'success': False, 'message': 'GitHub repository not configured'}), 400
    
    # Run sync in background thread
    def run_sync():
        sync_from_github()
    
    thread = threading.Thread(target=run_sync)
    thread.daemon = True
    thread.start()
    
    return jsonify({'success': True, 'message': 'Sync started'})

@app.route('/api/sync/config', methods=['POST'])
def update_sync_config():
    """Update GitHub sync configuration (admin only)"""
    if not is_authenticated():
        return jsonify({'success': False, 'message': 'Authentication required'}), 401
    
    data = request.get_json()
    global GITHUB_REPO, GITHUB_TOKEN, GITHUB_BRANCH, AUTO_SYNC_ENABLED, SYNC_INTERVAL
    
    if 'repo' in data:
        GITHUB_REPO = data['repo']
    if 'token' in data:
        GITHUB_TOKEN = data['token']
    if 'branch' in data:
        GITHUB_BRANCH = data['branch']
    if 'auto_sync_enabled' in data:
        AUTO_SYNC_ENABLED = data['auto_sync_enabled']
    if 'sync_interval' in data:
        SYNC_INTERVAL = int(data['sync_interval'])
    
    sync_status['auto_sync_enabled'] = AUTO_SYNC_ENABLED
    
    return jsonify({'success': True, 'message': 'Configuration updated'})

if __name__ == '__main__':
    print("🚀 Starting Cheatsheet Server...")
    print(f"📝 Admin password: {ADMIN_PASSWORD}")
    print("🔒 Change the password by setting CHEATSHEET_PASSWORD environment variable")
    print("🌐 Server will be available at: http://localhost:5000")
    
    # GitHub Sync Configuration
    if GITHUB_REPO:
        print(f"🔄 GitHub Sync: {GITHUB_REPO} (branch: {GITHUB_BRANCH})")
        if AUTO_SYNC_ENABLED:
            print(f"⏰ Auto-sync enabled: every {SYNC_INTERVAL} seconds")
            # Start auto-sync worker thread
            sync_thread = threading.Thread(target=auto_sync_worker)
            sync_thread.daemon = True
            sync_thread.start()
        else:
            print("🔧 Auto-sync disabled - use manual sync or enable with AUTO_SYNC_ENABLED=true")
    else:
        print("📝 GitHub Sync: Not configured")
        print("   Set GITHUB_REPO environment variable to enable sync")
    
    app.run(debug=True, host='0.0.0.0', port=5000)