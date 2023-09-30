# Summary of the GIT

## Delete a git branch both locally and remotely

```
// delete branch locally
git branch -d localBranchName

// delete branch remotely
git push origin --delete remoteBranchName
```

## Reset last commit --soft HEAD~1

[https://www.git-tower.com/learn/git/faq/undo-last-commit/](https://www.git-tower.com/learn/git/faq/undo-last-commit/)

```
git reset --soft HEAD~1
```

Note the --soft flag: this makes sure that the changes in undone revisions are preserved. After running the command, you'll find the changes as uncommitted local modifications in your working copy.

## If you lost your changes


Try to find your HEAD with:
```
git reflog
```
git only garbage collects after about a month or so unless you explicitly tell it to remove newer blobs.

[https://stackoverflow.com/questions/5473/how-can-i-undo-git-reset-hard-head1](https://stackoverflow.com/questions/5473/how-can-i-undo-git-reset-hard-head1#:~:text=%2D%2Dhard%20discards%20uncommitted%20changes,to%20restore%20them%20through%20git.)

## Open global .gitconfig
```git config --list``` or ```cat ~/.gitconfig```

## Rebase & Squash

1. See git log, e.g. ```git log --graph --oneline``` or ```git log -5``` 
2. ``` git rebase -i [commit id] ```
3. Edit: 
- first commit ```pick ...```
- second commit ```s``` or ```squash```
- next commit ```s``` or ```squash```
- etc.
4. Rename final commit message and save
5. ```git push --force``` if you already pushed commits


### Check curent name & email in git config
```
// global
git config --global user.name 
git config --global user.email

// Local
git config user.name
git config user.email
```

### Update curent name & email in git config

```
// global
git config --global user.name "yourusername"
git config --global user.email "youremail@example.com"

// Local
git config user.name "yourusername"
git config user.email "youremail@example.com"
```

### Update name & email in a last commit

```
git commit --amend --author="Author Name <email@address.com>"
```

## Aliases

E.g. global, in ```~/.gitconfig``` file:
```

[alias]
        st = status
        co = checkout
        br = branch
        logg = log --graph --oneline
        rup = remote update --prune
        setanotheruserconfig = "!git config user.name \"Your Local Name\" && git config user.email \"your.local.email@example.com\""
```