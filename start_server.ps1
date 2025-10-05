# PowerShell script to start the Cheatsheet Server with proper environment variables

Write-Host "Setting up environment variables..." -ForegroundColor Green

# Check if GITHUB_TOKEN is already set
if (-not $env:GITHUB_TOKEN) {
    Write-Host "Warning: GITHUB_TOKEN environment variable is not set!" -ForegroundColor Red
    Write-Host "Please set it with: `$env:GITHUB_TOKEN = 'your_token_here'" -ForegroundColor Yellow
    Write-Host "Or create a .env file with your token" -ForegroundColor Yellow
}

$env:GITHUB_REPO = "mackka2k/my-cheatsheet"
$env:AUTO_SYNC_ENABLED = "true"
$env:SYNC_INTERVAL = "1800"

Write-Host "Environment variables set:" -ForegroundColor Yellow
Write-Host "  GITHUB_TOKEN: $(if ($env:GITHUB_TOKEN) { 'Set' } else { 'Not Set' })" -ForegroundColor $(if ($env:GITHUB_TOKEN) { 'Green' } else { 'Red' })
Write-Host "  GITHUB_REPO: $env:GITHUB_REPO" -ForegroundColor Green
Write-Host "  AUTO_SYNC_ENABLED: $env:AUTO_SYNC_ENABLED" -ForegroundColor Green
Write-Host "  SYNC_INTERVAL: $env:SYNC_INTERVAL seconds" -ForegroundColor Green

Write-Host "`nStarting Cheatsheet Server..." -ForegroundColor Cyan
python start.py
