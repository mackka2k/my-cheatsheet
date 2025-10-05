@echo off
echo Setting up environment variables...
echo Please set your GITHUB_TOKEN environment variable before running this script
echo You can set it with: set GITHUB_TOKEN=your_token_here
set GITHUB_REPO=mackka2k/my-cheatsheet
set AUTO_SYNC_ENABLED=true
set SYNC_INTERVAL=1800

echo Starting Cheatsheet Server...
python start.py
