# Summary of the GIT

### How to Delete a Git Branch Both Locally and Remotely

```
// delete branch locally
git branch -d localBranchName

// delete branch remotely
git push origin --delete remoteBranchName
```

### How to Reset last commit

[https://www.git-tower.com/learn/git/faq/undo-last-commit/](https://www.git-tower.com/learn/git/faq/undo-last-commit/)

```
git reset --soft HEAD~1
```

Note the --soft flag: this makes sure that the changes in undone revisions are preserved. After running the command, you'll find the changes as uncommitted local modifications in your working copy.

### If you lost your changes


Try to find your HEAD with:
```
git reflog
```
git only garbage collects after about a month or so unless you explicitly tell it to remove newer blobs.

[https://stackoverflow.com/questions/5473/how-can-i-undo-git-reset-hard-head1](https://stackoverflow.com/questions/5473/how-can-i-undo-git-reset-hard-head1#:~:text=%2D%2Dhard%20discards%20uncommitted%20changes,to%20restore%20them%20through%20git.)


### How to see curent git config name & email

#### Global
```
git config --global user.name 
git config --global user.email
```

#### Local
```
git config user.name
git config user.email
```

### How to update git config (name & email) in last commit

```
git commit --amend --author="Author Name <email@address.com>"
```