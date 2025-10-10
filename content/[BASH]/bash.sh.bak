#!/bin/bash
##############################################################################
# 🚀 MODERN BASH CHEATSHEET
##############################################################################

# =============================================================================
# ⌨️  KEYBOARD SHORTCUTS
# =============================================================================

# Navigation
Ctrl+A          # Move to beginning of line
Ctrl+E          # Move to end of line
Ctrl+B          # Move backward one character
Ctrl+F          # Move forward one character
Alt+B           # Move backward one word
Alt+F           # Move forward one word

# Editing
Ctrl+K          # Delete from cursor to end of line
Ctrl+U          # Delete from cursor to beginning of line
Ctrl+W          # Delete word before cursor
Alt+D           # Delete word after cursor
Ctrl+T          # Transpose two characters
Alt+T           # Transpose two words
Ctrl+Y          # Paste (yank) last deleted text

# History & Search
Ctrl+R          # Search command history (reverse)
Ctrl+S          # Search command history (forward)
Ctrl+P          # Previous command in history
Ctrl+N          # Next command in history
Alt+.           # Insert last argument of previous command
Alt+*           # Insert all arguments of previous command

# Process Control
Ctrl+C          # Interrupt current command
Ctrl+Z          # Suspend current command
Ctrl+D          # Exit shell or delete character
Ctrl+L          # Clear screen

# =============================================================================
# 📚 COMMAND HISTORY
# =============================================================================

history                    # Show command history
!!                         # Repeat last command
!n                         # Repeat command number n
!string                    # Repeat last command starting with 'string'
!?string                   # Repeat last command containing 'string'
!$                         # Last argument of previous command
!^                         # First argument of previous command
!*                         # All arguments of previous command
^old^new                   # Replace 'old' with 'new' in last command

# History configuration
export HISTSIZE=10000      # Number of commands to remember
export HISTFILESIZE=20000  # Number of lines in history file
export HISTCONTROL=ignoredups:erasedups  # Avoid duplicates
export HISTTIMEFORMAT='%F %T '  # Add timestamps to history


# =============================================================================
# 🐚 BASH BASICS
# =============================================================================

# Environment
env                 # Display all environment variables
printenv            # Alternative to env
set                 # Display all shell variables and functions
export VAR=value    # Set environment variable
unset VAR           # Remove environment variable

# Shell Information
echo $SHELL         # Current shell
echo $BASH_VERSION  # Bash version
echo $0             # Current script name
echo $$             # Current process ID
echo $?             # Exit status of last command

# Shell Management
bash                # Start new bash session
exit                # Exit current shell
clear               # Clear screen
reset               # Reset terminal
tput clear          # Alternative clear command

# Command Location
which command       # Find command location
whereis command     # Find binary, source, and manual
type command        # Show command type (builtin, alias, etc.)
command -v cmd      # Show command path or type


# =============================================================================
# 📁 FILE OPERATIONS
# =============================================================================

# Listing Files
ls                    # List files in current directory
ls -la               # List all files with details (including hidden)
ls -lh               # Human-readable file sizes
ls -lt               # Sort by modification time
ls -lS               # Sort by file size
ls -R                # Recursive listing
ls -1                # One file per line
tree                 # Tree view of directory structure
exa -la              # Modern ls alternative (if installed)

# File Navigation
pwd                  # Print working directory
cd                   # Go to home directory
cd -                 # Go to previous directory
cd ..                # Go to parent directory
pushd dir            # Push directory onto stack
popd                 # Pop directory from stack
dirs                 # Show directory stack

# File Creation & Editing
touch file           # Create empty file or update timestamp
mkdir -p path/to/dir # Create directory (with parents)
rmdir dir            # Remove empty directory
rm -rf dir           # Remove directory and contents
cp -r src dest       # Copy directory recursively
mv src dest          # Move/rename file or directory

# File Viewing
cat file             # Display entire file
less file            # Page through file (better than more)
head -n 20 file      # Show first 20 lines
tail -n 20 file      # Show last 20 lines
tail -f file         # Follow file changes (log monitoring)
wc -l file           # Count lines in file
wc -w file           # Count words in file
wc -c file           # Count characters in file

# File Search
find . -name "*.txt"           # Find files by name
find . -type f -name "*.log"   # Find files by type and name
find . -size +100M             # Find files larger than 100MB
find . -mtime -7               # Find files modified in last 7 days
find . -exec grep -l "pattern" {} \;  # Find files containing pattern
locate filename                # Quick file search (if updatedb is run)
fd pattern                     # Modern find alternative (if installed)

# File Comparison
diff file1 file2     # Compare two files
diff -u file1 file2  # Unified diff format
cmp file1 file2      # Compare files byte by byte
md5sum file          # Calculate MD5 checksum
sha256sum file       # Calculate SHA256 checksum

# File Permissions
chmod 755 file       # Set permissions (rwxr-xr-x)
chmod +x file        # Make file executable
chmod -x file        # Remove execute permission
chown user:group file # Change ownership
chgrp group file     # Change group ownership
ls -l                # Show permissions

# File Compression
gzip file            # Compress file (creates file.gz)
gunzip file.gz       # Decompress file
tar -czf archive.tar.gz files/  # Create compressed archive
tar -xzf archive.tar.gz         # Extract compressed archive
zip -r archive.zip files/       # Create ZIP archive
unzip archive.zip               # Extract ZIP archive

# Text Processing
grep "pattern" file            # Search for pattern in file
grep -r "pattern" dir/         # Recursive search
grep -i "pattern" file         # Case-insensitive search
grep -n "pattern" file         # Show line numbers
grep -v "pattern" file         # Invert match (exclude pattern)
sed 's/old/new/g' file         # Replace text in file
sed -i 's/old/new/g' file      # Replace text in file (in-place)
awk '{print $1}' file          # Print first column
sort file                      # Sort lines alphabetically
sort -n file                   # Sort lines numerically
uniq file                      # Remove duplicate lines
cut -d',' -f1 file             # Extract first field (comma-separated)

# =============================================================================
# 🌐 NETWORK & SYSTEM
# =============================================================================

# Network Commands
ping hostname                 # Ping a host
ping -c 4 hostname           # Ping 4 times
curl -O url                  # Download file from URL
wget url                     # Download file (alternative to curl)
ssh user@host                # Connect via SSH
ssh -p 2222 user@host        # SSH on specific port
scp file user@host:/path     # Copy file via SSH
rsync -av src/ dest/         # Sync directories
netstat -tulpn               # Show network connections
ss -tulpn                    # Modern netstat alternative
lsof -i :8080                # Show processes using port 8080

# System Information
uname -a                     # System information
hostname                     # Show hostname
whoami                       # Current user
id                           # User and group IDs
uptime                       # System uptime
free -h                      # Memory usage (human-readable)
df -h                        # Disk usage (human-readable)
du -sh *                     # Directory sizes
ps aux                       # Running processes
top                          # Real-time process monitor
htop                         # Better top (if installed)
systemctl status service     # Service status (systemd)
journalctl -f                # Follow system logs

# Process Management
kill PID                     # Kill process by PID
killall process_name         # Kill all processes by name
pkill -f pattern             # Kill processes matching pattern
nohup command &              # Run command in background
jobs                         # Show background jobs
fg %1                        # Bring job 1 to foreground
bg %1                        # Send job 1 to background

# =============================================================================
# 🔧 VARIABLES & FUNCTIONS
# =============================================================================

# Variable Assignment
VAR="value"              # Set variable
echo $VAR                # Display variable
echo ${VAR}              # Alternative syntax
export VAR="value"       # Set environment variable
unset VAR                # Remove variable

# Special Variables
$0                       # Script name
$1, $2, $3...           # Command line arguments
$#                       # Number of arguments
$@                       # All arguments as separate words
$*                       # All arguments as single word
$$                       # Process ID
$?                       # Exit status of last command
$!                       # Process ID of last background command

# Arrays
arr=(item1 item2 item3)  # Create array
echo ${arr[0]}           # Access first element
echo ${arr[@]}           # All elements
echo ${#arr[@]}          # Array length
arr+=("new_item")        # Add element

# String Operations
${var#pattern}           # Remove shortest match from beginning
${var##pattern}          # Remove longest match from beginning
${var%pattern}           # Remove shortest match from end
${var%%pattern}          # Remove longest match from end
${var/old/new}           # Replace first occurrence
${var//old/new}          # Replace all occurrences
${var:start:length}      # Substring extraction

# Functions
function_name() {
    local var="value"    # Local variable
    echo "Hello $1"      # Use first argument
    return 0             # Return value
}

# Call function
function_name "argument"


# =============================================================================
# 🔄 CONTROL FLOW
# =============================================================================

# Conditional Statements
if [ condition ]; then
    echo "true"
elif [ another_condition ]; then
    echo "another"
else
    echo "false"
fi

# Case Statement
case $var in
    "option1")
        echo "Option 1"
        ;;
    "option2")
        echo "Option 2"
        ;;
    *)
        echo "Default"
        ;;
esac

# Loops
for item in list; do
    echo $item
done

for ((i=1; i<=10; i++)); do
    echo $i
done

while [ condition ]; do
    echo "Looping"
done

until [ condition ]; do
    echo "Until condition is met"
done

# Test Conditions
[ -f file ]                  # File exists and is regular
[ -d dir ]                   # Directory exists
[ -r file ]                  # File is readable
[ -w file ]                  # File is writable
[ -x file ]                  # File is executable
[ -s file ]                  # File is not empty
[ -z string ]                # String is empty
[ -n string ]                # String is not empty
[ str1 = str2 ]              # Strings are equal
[ str1 != str2 ]             # Strings are not equal
[ num1 -eq num2 ]            # Numbers are equal
[ num1 -lt num2 ]            # num1 less than num2
[ num1 -gt num2 ]            # num1 greater than num2

# =============================================================================
# 🔗 REDIRECTION & PIPES
# =============================================================================

# Input/Output Redirection
command > file              # Redirect stdout to file
command >> file             # Append stdout to file
command < file              # Redirect file to stdin
command 2> file             # Redirect stderr to file
command 2>&1                # Redirect stderr to stdout
command &> file             # Redirect both stdout and stderr to file
command | tee file          # Send output to both terminal and file

# Pipes
command1 | command2         # Pipe output of command1 to command2
command1 | command2 | command3  # Chain pipes
command | head -10          # Show first 10 lines
command | tail -10          # Show last 10 lines
command | grep pattern      # Filter output
command | sort              # Sort output
command | uniq              # Remove duplicates
command | wc -l             # Count lines

# Advanced Redirection
exec 3> file                # Open file descriptor 3 for writing
exec 3< file                # Open file descriptor 3 for reading
command >&3                 # Write to file descriptor 3
command <&3                 # Read from file descriptor 3
exec 3>&-                   # Close file descriptor 3


# =============================================================================
# 🎨 MODERN TOOLS & ALIASES
# =============================================================================

# Modern Command Alternatives
alias ll='ls -la'                    # List with details
alias la='ls -A'                     # List all except . and ..
alias l='ls -CF'                     # List in columns
alias ..='cd ..'                     # Go up one directory
alias ...='cd ../..'                 # Go up two directories
alias grep='grep --color=auto'       # Colorized grep
alias fgrep='fgrep --color=auto'     # Colorized fgrep
alias egrep='egrep --color=auto'     # Colorized egrep
alias df='df -h'                     # Human-readable disk usage
alias du='du -h'                     # Human-readable directory sizes
alias free='free -h'                 # Human-readable memory usage
alias ps='ps aux'                    # Better process listing
alias top='htop'                     # Better top (if htop installed)

# Git Aliases
alias gs='git status'
alias ga='git add'
alias gc='git commit'
alias gp='git push'
alias gl='git log --oneline'
alias gd='git diff'
alias gb='git branch'
alias gco='git checkout'

# Docker Aliases
alias d='docker'
alias dc='docker-compose'
alias dps='docker ps'
alias di='docker images'
alias dex='docker exec -it'

# Useful Functions
mkcd() { mkdir -p "$1" && cd "$1"; }  # Create directory and cd into it
extract() {                           # Extract various archive formats
    if [ -f $1 ] ; then
        case $1 in
            *.tar.bz2)   tar xjf $1     ;;
            *.tar.gz)    tar xzf $1     ;;
            *.bz2)       bunzip2 $1     ;;
            *.rar)       unrar e $1     ;;
            *.gz)        gunzip $1      ;;
            *.tar)       tar xf $1      ;;
            *.tbz2)      tar xjf $1     ;;
            *.tgz)       tar xzf $1     ;;
            *.zip)       unzip $1       ;;
            *.Z)         uncompress $1  ;;
            *.7z)        7z x $1        ;;
            *)           echo "'$1' cannot be extracted via extract()" ;;
        esac
    else
        echo "'$1' is not a valid file"
    fi
}

# =============================================================================
# 🚀 PERFORMANCE & MONITORING
# =============================================================================

# System Monitoring
alias cpu='top -o cpu'                # Sort by CPU usage
alias mem='top -o rsize'              # Sort by memory usage
alias ports='netstat -tulpn'          # Show listening ports
alias connections='ss -tulpn'         # Modern netstat alternative

# Performance Testing
time command                          # Time command execution
/usr/bin/time -v command             # Detailed timing information
strace command                        # Trace system calls
ltrace command                        # Trace library calls

# =============================================================================
# 🛠️ DEBUGGING & SCRIPTING
# =============================================================================

# Script Debugging
set -x                                # Debug mode (show commands)
set -e                                # Exit on error
set -u                                # Exit on undefined variable
set -o pipefail                       # Exit on pipe failure

# Error Handling
trap 'echo "Error on line $LINENO"' ERR  # Catch errors
trap 'echo "Script interrupted"' INT     # Catch Ctrl+C
trap 'echo "Script exiting"' EXIT        # Catch exit

# Logging
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a script.log
}

# =============================================================================
# 🎨 TERMINAL COLORS & FORMATTING
# =============================================================================

# Color Codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
WHITE='\033[0;37m'
BOLD='\033[1m'
RESET='\033[0m'

# Usage Examples
echo -e "${GREEN}Success message${RESET}"
echo -e "${RED}Error message${RESET}"
echo -e "${YELLOW}Warning message${RESET}"
echo -e "${BLUE}Info message${RESET}"
echo -e "${BOLD}${CYAN}Important message${RESET}"

# =============================================================================
# 💡 PRO TIPS & BEST PRACTICES
# =============================================================================

# 1. Always quote variables to prevent word splitting
echo "$HOME"                    # Good
echo $HOME                      # Bad (can break with spaces)

# 2. Use double brackets for tests (more features)
[[ $var == "value" ]]           # Good
[ $var = "value" ]              # Bad

# 3. Use set -euo pipefail in scripts
set -e                          # Exit on error
set -u                          # Exit on undefined variable
set -o pipefail                 # Exit on pipe failure

# 4. Use printf instead of echo for complex output
printf "Hello %s\n" "$USER"     # Good
echo "Hello $USER"              # Also good, but printf is more portable

# 5. Use here documents for multi-line strings
cat << EOF
This is a multi-line
string that can contain
variables like $HOME
EOF

# 6. Use command substitution with $() instead of backticks
current_date=$(date)            # Good
current_date=`date`             # Bad (deprecated)

# 7. Use arrays for multiple values
files=("file1" "file2" "file3")
for file in "${files[@]}"; do
    echo "Processing $file"
done

# 8. Use read -r to preserve backslashes
read -r line                    # Good
read line                       # Bad (strips backslashes)

# 9. Use find instead of ls for complex file operations
find . -name "*.txt" -type f    # Good
ls *.txt                        # Bad (can break with many files)

# 10. Use proper error handling
if ! command -v git >/dev/null 2>&1; then
    echo "Error: git is not installed" >&2
    exit 1
fi

# =============================================================================
# 🔧 USEFUL ONE-LINERS
# =============================================================================

# Find and delete files older than 7 days
find . -type f -mtime +7 -delete

# Count files in directory
find . -type f | wc -l

# Find largest files
find . -type f -exec ls -la {} \; | sort -k5 -rn | head -10

# Monitor log files in real-time
tail -f /var/log/syslog | grep ERROR

# Create backup with timestamp
cp file.txt file.txt.backup.$(date +%Y%m%d_%H%M%S)

# Find processes using specific port
lsof -i :8080

# Kill all processes matching pattern
pkill -f "python.*script.py"

# Extract IP addresses from log file
grep -oE "\b([0-9]{1,3}\.){3}[0-9]{1,3}\b" access.log

# Convert line endings from Windows to Unix
sed -i 's/\r$//' file.txt

# Remove empty lines from file
sed '/^$/d' file.txt

# Sort and remove duplicates
sort file.txt | uniq

# =============================================================================
# 🎯 CONCLUSION
# =============================================================================

# This cheatsheet covers the most commonly used Bash commands and techniques.
# For more advanced topics, refer to:
# - Bash manual: man bash
# - Advanced Bash Scripting Guide
# - GNU Coreutils documentation
# - Modern alternatives: exa, fd, ripgrep, bat, etc.

echo "🚀 Happy scripting with Bash!"