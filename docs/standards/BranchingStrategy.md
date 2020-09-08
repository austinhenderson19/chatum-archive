# Branching Strategy

This document defines a `git` flow and branching strategy to be used throughout all
source-controlled aspects of the project.

## Flow Summary

1. Create A Topic Branch
2. Open A PR
3. Code Review
4. Rebase (If Needed)
5. Squash Merge

### Create A Topic Branch

- Always use descriptive branch names
- Where applicable favour creation of topic branches from the active development branch

```bash
git checkout master
git checkout -b MyTopic
```

### Open A PR

- Always use pull requests on Github for topic branches.

### Code Review

- Always use code review
- Always use approval requirement before merge

#### Example Review Flow

1. Add commits
2. In Github, [request a review](https://help.github.com/en/articles/requesting-a-pull-request-review).
3. As a **reviewer**, accept or request changes.
4. Repeat steps 1-3 _until_ PR is accepted.

### Rebase

- Where applicable favour `rebase`:
  - when:
    - After review there are conflicts
    - The branch is _significantly_ behind the active development branch

```bash
# Update master
git checkout master
git pull

# Rebase Topic and Force Push
git checkout MyTopic
git rebase master

# if there are conflicts to be resolved
git rebase --continue # after staging resolved files

git push -f origin MyTopic
```

### Squash Merging

- Always use squash merge option in Github
- Always edit the commit message to be meaningful
