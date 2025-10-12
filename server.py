#!/usr/bin/env python3
"""
Cheatsheet Server - Personal file editing
Allows users to view and edit cheatsheet files directly
"""

import os
import json
from datetime import datetime
from flask import Flask, request, jsonify, send_from_directory
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()
from flask_cors import CORS
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app, supports_credentials=True)

# Configuration
ALLOWED_EXTENSIONS = {'.md', '.txt', '.sh', '.js', '.py', '.html', '.css'}



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



@app.route('/')
def serve_index():
    """Serve the main index.html"""
    return send_from_directory('.', 'index.html')

@app.route('/<path:filename>')
def serve_static(filename):
    """Serve static files"""
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
    """Write to a file"""
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


if __name__ == '__main__':
    print("🚀 Starting Cheatsheet Server...")
    print("🌐 Server will be available at: http://localhost:5000")
    print("📝 No authentication required - direct access enabled")
    
    
    app.run(debug=True, host='0.0.0.0', port=5000)