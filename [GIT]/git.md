# ---- GIT ----
A distributed version control system helps you keep track of changes you've made to files in your project. This change history lives on your local machine, making it easy to revert to a previous version if needed. Git also simplifies collaboration, enabling teams to store full backups locally and use external servers like GitHub or GitLab for centralized repository storage.

## ______ Git Commands ______

### [ Check your Git configuration ]
```bash
git config -l
```

### [ Setup your Git username ] 
```bash
git config --global user.name "Fabio"
```

### [ Setup your Git user email ]
```bash
git config --global user.email "signups@fabiopacifici.com"
```

### [ Cache your login credentials ]
```bash
git config --global credential.helper cache
```

### [ Initialize a Git repo ]
```bash
git init
```

### [ Add a file to the staging area ]
```bash
git add filename_here
```

### [ Add all files to the staging area ]
```bash
git add .
```

### [ Add certain files to the staging area ]
```bash
git add fil*
```

### [ Check the repository status ]
```bash
git status
```

### [ Commit changes in the editor ]
```bash
git commit
```

### [ Commit changes with a message ]
```bash
git commit -m "your commit message here"
```

### [ Commit changes and skip the staging area ]
```bash
git commit -a -m "your commit message here"
```

### [ See your commit history ]
```bash
git log
```

### [ See commit history including changes ]
```bash
git log -p
```

### [ See a specific commit ]
```bash
git show commit-id
```

### [ See log stats ]
```bash
git log --stat
```

### [ View unstaged changes using `diff` ]
```bash
git diff
git diff filename
git diff --staged
```

### [ Use `git add -p` ]
```bash
git add -p
```

### [ Remove tracked files ]
```bash
git rm filename
```

### [ Rename files ]
```bash
git mv oldfile newfile
```

### [ Ignore files ]
Create a `.gitignore` file and commit it.

### [ Revert unstaged changes ]
```bash
git checkout filename
```

### [ Revert staged changes ]
```bash
git reset HEAD filename
git reset HEAD -p
```

### [ Amend the most recent commit ]
```bash
git commit --amend
```

### [ Rollback the last commit ]
```bash
git revert HEAD
```

### [ Rollback an old commit ]
```bash
git revert commit_id_here
```

### [ Create a new branch ]
```bash
git branch branch_name
```

### [ Switch to a branch ]
```bash
git checkout branch_name
```

### [ List branches ]
```bash
git branch
```

### [ Create and switch to a new branch ]
```bash
git checkout -b branch_name
```

### [ Delete a branch ]
```bash
git branch -d branch_name
```

### [ Merge two branches ]
```bash
git merge branch_name
```

### [ Show commit log as a graph ]
```bash
git log --graph --oneline
```

### [ Show log as a graph for all branches ]
```bash
git log --graph --oneline --all
```

### [ Abort a conflicting merge ]
```bash
git merge --abort
```

### [ Add a remote repository ]
```bash
git add remote https://repo_here
```

### [ See remote URLs ]
```bash
git remote -v
```

### [ Get more info about a remote repo ]
```bash
git remote show origin
```

### [ Push changes to a remote repo ]
```bash
git push
```

### [ Pull changes from a remote repo ]
```bash
git pull
```

### [ Check remote branches ]
```bash
git branch -r
```

### [ Fetch changes from a remote repo ]
```bash
git fetch
```

### [ Check the commit log of a remote repo ]
```bash
git log origin/main
```

### [ Merge a remote repo with your local repo ]
```bash
git merge origin/main
```

### [ Update remote branches without merging ]
```bash
git remote update
```

### [ Push a new branch to a remote repo ]
```bash
git push -u origin branch_name
```

### [ Remove a remote branch ]
```bash
git push --delete origin branch_name_here
```

### [ Use `git rebase` ]
```bash
git rebase branch_name_here
```

### [ Run `git rebase` interactively ] 
```bash
git rebase -i master
```
**Rebase options:**
- `p` = pick commit
- `r` = reword commit
- `e` = edit commit
- `s` = squash commit
- `f` = fixup commit
- `d` = drop commit

### [ Force a push request ]
```bash
git push -f
```

---