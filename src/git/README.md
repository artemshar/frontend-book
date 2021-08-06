# Summary of the GIT

### How to Delete a Git Branch Both Locally and Remotely

```
// delete branch locally
git branch -d localBranchName

// delete branch remotely
git push origin --delete remoteBranchName
```

### How to Reset last commit

(https://www.git-tower.com/learn/git/faq/undo-last-commit/)[https://www.git-tower.com/learn/git/faq/undo-last-commit/]

```
git reset --soft HEAD~1
```

Note the --soft flag: this makes sure that the changes in undone revisions are preserved. After running the command, you'll find the changes as uncommitted local modifications in your working copy.
