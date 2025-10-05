# 🚀 MODERN GIT CHEATSHEET

A comprehensive guide to Git version control for senior developers. Git is a distributed version control system that helps you track changes, collaborate with teams, and manage code history efficiently.

---

## 🔧 SETUP & CONFIGURATION

### Global Configuration
```bash
# Check current configuration
git config --list
git config --global --list

# Set up your identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set default branch name (modern practice)
git config --global init.defaultBranch main

# Cache credentials (Windows/Mac)
git config --global credential.helper cache
git config --global credential.helper store

# Set up aliases for common commands
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'
```

### Editor Configuration
```bash
# Set default editor
git config --global core.editor "code --wait"  # VS Code
git config --global core.editor "vim"          # Vim
git config --global core.editor "nano"         # Nano
```

---

## 📁 REPOSITORY MANAGEMENT

### Initialize & Clone
```bash
# Initialize new repository
git init
git init <directory-name>

# Clone existing repository
git clone <repository-url>
git clone <repository-url> <local-directory-name>

# Clone specific branch
git clone -b <branch-name> <repository-url>

# Clone with depth (shallow clone)
git clone --depth 1 <repository-url>
```

### File Operations
```bash
# Add files to staging
git add <filename>
git add .                    # Add all files
git add *.js                 # Add specific file types
git add -A                   # Add all files (including deleted)
git add -u                   # Add only tracked files

# Interactive staging
git add -p                   # Patch mode - choose parts to stage
git add -i                   # Interactive mode

# Remove files
git rm <filename>            # Remove and stage deletion
git rm --cached <filename>   # Remove from index, keep in working tree
git mv <old-name> <new-name> # Rename file
```

---

## 📝 BASIC WORKFLOW

### Status & Diff
```bash
# Check repository status
git status
git status -s                # Short format
git status --porcelain       # Machine-readable format

# View changes
git diff                     # Unstaged changes
git diff --staged            # Staged changes
git diff --cached            # Same as --staged
git diff HEAD                # All changes since last commit
git diff <commit1> <commit2> # Compare two commits
```

### Commit Operations
```bash
# Commit changes
git commit -m "Your commit message"
git commit -am "Message"     # Add and commit in one step
git commit --amend           # Modify last commit
git commit --amend -m "New message"

# Empty commit (useful for CI triggers)
git commit --allow-empty -m "Trigger build"

# Sign commits
git commit -S -m "Signed commit"
```

### Undo Operations
```bash
# Unstage files
git reset HEAD <filename>
git reset HEAD -p            # Interactive unstage

# Discard changes
git checkout -- <filename>   # Discard unstaged changes
git restore <filename>       # Modern alternative (Git 2.23+)
git restore --staged <filename> # Unstage file

# Reset commits
git reset --soft HEAD~1      # Undo commit, keep changes staged
git reset --mixed HEAD~1     # Undo commit, unstage changes
git reset --hard HEAD~1      # Undo commit, discard all changes
```

---

## 🔍 INSPECTION & HISTORY

### Log & History
```bash
# View commit history
git log
git log --oneline            # Compact format
git log --graph              # Show branch graph
git log --graph --oneline --all # All branches
git log --stat               # Show file changes
git log -p                   # Show actual changes
git log --follow <filename>  # Follow file renames

# Filter commits
git log --author="John"
git log --since="2 weeks ago"
git log --until="2023-01-01"
git log --grep="bug fix"
git log <file1> <file2>      # Commits affecting specific files

# Show specific commit
git show <commit-hash>
git show HEAD                # Latest commit
git show HEAD~1              # Previous commit
```

### Blame & Find
```bash
# Find who changed what
git blame <filename>
git blame -L 10,20 <filename> # Specific lines

# Find commits
git log -S "search term"     # Find commits that added/removed text
git log -G "regex pattern"   # Find commits with regex match
```

---

## 🌿 BRANCHING & MERGING

### Branch Operations
```bash
# List branches
git branch                   # Local branches
git branch -r                # Remote branches
git branch -a                # All branches
git branch -v                # With last commit info

# Create and switch branches
git branch <branch-name>
git checkout <branch-name>
git checkout -b <branch-name> # Create and switch
git switch <branch-name>     # Modern alternative (Git 2.23+)
git switch -c <branch-name>  # Create and switch (modern)

# Delete branches
git branch -d <branch-name>  # Safe delete
git branch -D <branch-name>  # Force delete
git push origin --delete <branch-name> # Delete remote branch
```

### Merge Operations
```bash
# Merge branches
git merge <branch-name>
git merge --no-ff <branch-name> # No fast-forward merge
git merge --squash <branch-name> # Squash merge

# Abort merge
git merge --abort

# Resolve conflicts
git status                   # See conflicted files
# Edit files to resolve conflicts
git add <resolved-file>
git commit                   # Complete merge
```

### Rebase Operations
```bash
# Rebase current branch
git rebase <base-branch>
git rebase -i HEAD~3         # Interactive rebase last 3 commits

# Interactive rebase options
# p, pick = use commit
# r, reword = use commit, but edit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous
# f, fixup = like squash, but discard commit message
# d, drop = remove commit

# Abort rebase
git rebase --abort

# Continue rebase after resolving conflicts
git rebase --continue
```

---

## 🔄 REMOTE OPERATIONS

### Remote Management
```bash
# List remotes
git remote -v

# Add remote
git remote add <name> <url>
git remote add origin <repository-url>

# Remove remote
git remote remove <name>

# Update remote URL
git remote set-url <name> <new-url>

# Show remote info
git remote show origin
```

### Push & Pull
```bash
# Push to remote
git push
git push origin <branch-name>
git push -u origin <branch-name> # Set upstream
git push --all                   # Push all branches
git push --tags                  # Push tags
git push --force                 # Force push (dangerous!)

# Pull from remote
git pull
git pull origin <branch-name>
git pull --rebase               # Pull with rebase instead of merge

# Fetch without merging
git fetch
git fetch origin
git fetch --all
```

### Working with Forks
```bash
# Add upstream remote
git remote add upstream <original-repo-url>

# Sync with upstream
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

---

## ⚡ ADVANCED TECHNIQUES

### Stashing
```bash
# Stash changes
git stash
git stash push -m "Work in progress"
git stash push <filename>    # Stash specific file

# List stashes
git stash list

# Apply stashes
git stash apply              # Apply latest stash
git stash apply stash@{2}    # Apply specific stash
git stash pop                # Apply and remove latest stash

# Drop stashes
git stash drop               # Drop latest stash
git stash drop stash@{2}     # Drop specific stash
git stash clear              # Clear all stashes
```

### Tags
```bash
# Create tags
git tag <tag-name>
git tag -a <tag-name> -m "Tag message"
git tag -a <tag-name> <commit-hash>

# List tags
git tag
git tag -l "v1.*"            # Filter tags

# Push tags
git push origin <tag-name>
git push origin --tags       # Push all tags

# Delete tags
git tag -d <tag-name>
git push origin --delete <tag-name>
```

### Submodules
```bash
# Add submodule
git submodule add <repository-url> <path>

# Initialize submodules
git submodule init
git submodule update
git submodule update --init --recursive

# Update submodules
git submodule update --remote
```

### Cherry-picking
```bash
# Cherry-pick commits
git cherry-pick <commit-hash>
git cherry-pick <commit1> <commit2> <commit3>
git cherry-pick --continue
git cherry-pick --abort
```

---

## 🛠️ TROUBLESHOOTING

### Common Issues
```bash
# Recover lost commits
git reflog                   # Show reference log
git checkout <commit-hash>   # Go to specific commit
git checkout -b <new-branch> # Create branch from commit

# Clean working directory
git clean -f                 # Remove untracked files
git clean -fd                # Remove untracked files and directories
git clean -n                 # Dry run

# Fix commit messages
git commit --amend -m "New message"

# Split commits
git rebase -i HEAD~2
# Change 'pick' to 'edit' for commit to split
git reset HEAD~1
git add <files>
git commit -m "First part"
git add <remaining-files>
git commit -m "Second part"
git rebase --continue
```

### Reset Strategies
```bash
# Soft reset (keep changes staged)
git reset --soft HEAD~1

# Mixed reset (keep changes unstaged)
git reset --mixed HEAD~1
git reset HEAD~1             # Same as mixed

# Hard reset (discard all changes)
git reset --hard HEAD~1

# Reset to specific commit
git reset --hard <commit-hash>
```

---

## 💡 BEST PRACTICES

### Commit Messages
```bash
# Use conventional commits format
feat: add user authentication
fix: resolve memory leak in parser
docs: update API documentation
style: format code according to style guide
refactor: extract user validation logic
test: add unit tests for payment module
chore: update dependencies

# Good commit message structure
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Branch Naming
```bash
# Feature branches
feature/user-authentication
feature/payment-integration

# Bug fixes
bugfix/login-validation
hotfix/security-patch

# Releases
release/v1.2.0
```

### .gitignore Best Practices
```bash
# Common .gitignore patterns
# Dependencies
node_modules/
vendor/

# Build outputs
dist/
build/
*.o
*.exe

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db

# Environment files
.env
.env.local
.env.production

# Logs
*.log
logs/
```

---

## 🎯 WORKFLOW STRATEGIES

### Git Flow
```bash
# Main branches
main                        # Production-ready code
develop                     # Integration branch

# Supporting branches
feature/user-auth          # New features
release/v1.2.0             # Release preparation
hotfix/critical-bug        # Emergency fixes
```

### GitHub Flow
```bash
# Simple workflow
main                        # Always deployable
feature-branch              # Feature development
# Create PR → Review → Merge → Deploy
```

### GitLab Flow
```bash
# Environment branches
main                        # Production
staging                     # Staging environment
pre-production              # Pre-production testing
```

---

## 🔧 USEFUL ALIASES

```bash
# Add these to your ~/.gitconfig
[alias]
    st = status
    co = checkout
    br = branch
    ci = commit
    unstage = reset HEAD --
    last = log -1 HEAD
    visual = !gitk
    lg = log --oneline --graph --decorate --all
    ll = log --oneline --graph --decorate
    amend = commit --amend
    undo = reset HEAD~1
    wip = commit -am "WIP"
    unwip = reset HEAD~1
    aliases = config --get-regexp alias
```

---

## 🚀 PRO TIPS

1. **Use `git add -p`** for granular staging
2. **Always review with `git diff --staged`** before committing
3. **Use meaningful commit messages** following conventional commits
4. **Keep commits small and focused** on single changes
5. **Use branches liberally** for feature development
6. **Regularly sync with remote** using `git fetch` and `git pull`
7. **Use `git stash`** to temporarily save work
8. **Review history with `git log --oneline --graph`**
9. **Use `git rebase -i`** to clean up commit history
10. **Never force push to shared branches**

---

## 📚 ADDITIONAL RESOURCES

- [Official Git Documentation](https://git-scm.com/doc)
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)
- [GitHub Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

*Happy version controlling! 🎉*