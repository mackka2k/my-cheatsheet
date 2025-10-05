#!/usr/bin/env python3
"""
Quick start script for the Cheatsheet Server
"""

import os
import sys
import subprocess
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

def main():
    print("🚀 Starting Cheatsheet Server...")
    print("=" * 50)
    
    # Check if requirements are installed
    try:
        import flask
        import flask_cors
        print("✅ Dependencies found")
    except ImportError:
        print("❌ Missing dependencies. Installing...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "-r", "requirements.txt"])
        print("✅ Dependencies installed")
    
    # Set default password if not set
    if not os.environ.get('CHEATSHEET_PASSWORD'):
        os.environ['CHEATSHEET_PASSWORD'] = 'admin123'
        print("🔑 Using default password: admin123")
        print("   Set CHEATSHEET_PASSWORD environment variable to change it")
    
    # Set GitHub configuration
    if not os.environ.get('GITHUB_REPO'):
        os.environ['GITHUB_REPO'] = 'mackka2k/my-cheatsheet'
        print("🔄 GitHub repository configured: mackka2k/my-cheatsheet")
    
    if not os.environ.get('GITHUB_TOKEN'):
        print("⚠️  No GitHub token set - some features may be limited")
        print("   Set GITHUB_TOKEN environment variable for full functionality")
    
    if not os.environ.get('AUTO_SYNC_ENABLED'):
        os.environ['AUTO_SYNC_ENABLED'] = 'true'
        print("⏰ Auto-sync enabled by default")
    
    if not os.environ.get('SYNC_INTERVAL'):
        os.environ['SYNC_INTERVAL'] = '1800'  # 30 minutes
        print("⏱️  Sync interval set to 30 minutes")
    
    # GitHub Sync Configuration
    github_repo = os.environ.get('GITHUB_REPO', '')
    github_token = os.environ.get('GITHUB_TOKEN', '')
    auto_sync = os.environ.get('AUTO_SYNC_ENABLED', 'false').lower() == 'true'
    sync_interval = int(os.environ.get('SYNC_INTERVAL', '3600'))
    
    print("\n🌐 Server will be available at: http://localhost:5000")
    print("🔒 Website requires login - enter password to access")
    print("📝 Default password: admin123")
    
    if github_repo:
        print(f"\n🔄 GitHub Sync: {github_repo}")
        if auto_sync:
            print(f"⏰ Auto-sync enabled: every {sync_interval} seconds")
        else:
            print("🔧 Auto-sync disabled - use manual sync or enable with AUTO_SYNC_ENABLED=true")
        if not github_token:
            print("⚠️  No GitHub token set - some features may be limited")
            print("   Set GITHUB_TOKEN environment variable for full functionality")
    else:
        print("\n📝 GitHub Sync: Not configured")
        print("   Set GITHUB_REPO environment variable to enable sync")
        print("   Example: GITHUB_REPO=owner/repo")
    
    print("\n💡 Tips:")
    print("   • Enter password on login page to access cheatsheets")
    print("   • Use Ctrl+S to save changes")
    print("   • Press 'E' key to toggle edit mode")
    print("   • Hover over code blocks to copy them")
    print("   • Click sync button to sync with GitHub repository")
    print("\n" + "=" * 50)
    
    # Start the server
    from server import app
    app.run(debug=True, host='0.0.0.0', port=5000)

if __name__ == '__main__':
    main()
