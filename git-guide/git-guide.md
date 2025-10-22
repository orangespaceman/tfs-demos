# Git guide

> These notes are not intended as a comprehensive guide to Git. Their purpose is to guide you through the main areas you should learn about, with resources provided for further exploration. The goal is for you to learn enough to use Git confidently in collaborative projects.

---

## Introducing Git

### What is it?
- Git is a version control system that tracks changes to files over time
- It allows multiple developers to collaborate on the same project safely
- You can view history, undo mistakes, and work on features in isolation using branches

### Why do we need it?
- To track and manage changes made to code over time
- To collaborate effectively without overwriting each other’s work
- To revert or compare versions if something goes wrong

### How do we use it?
- Repositories (repos) store the project’s history
- Each change is recorded as a commit
- Git can be used locally or with remote services like GitHub, GitLab, or Bitbucket

### Further Learning
- [Git Official Documentation](https://git-scm.com/doc)
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)
- [MDN: Introduction to Git](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub)

---

## Repositories

### What is it?
- A repository is a folder tracked by Git
- It contains your files and a hidden `.git` directory that stores the history of changes

### Why do we need it?
- To keep a full record of every change
- To enable collaboration between multiple developers

### How do we use it?
1. Create a local repository:
   ```bash
   git init
   ```
2. Clone a remote repository:
   ```bash
   git clone <repository-url>
   ```
3. Add a remote (if starting locally):
   ```bash
   git remote add origin <repository-url>
   ```

### Cloning vs Forking
- **Cloning** creates a local copy of a repository you have access to. You can push directly if you have write permissions.
- **Forking** creates a copy under your own GitHub account, used mainly when contributing to someone else’s repository. You then create a pull request to suggest changes.

### Further Learning
- [Git Basics: Getting a Git Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
- [GitHub: Fork a Repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo)

---

## .gitignore files

### What is it?
- `.gitignore` tells Git which files or folders to ignore
- It prevents committing files that should stay local, like build outputs or environment files

### Why do we need it?
- To avoid adding unnecessary or sensitive files to version control
- To keep repositories clean and lightweight

### How do we use it?
1. Create a `.gitignore` file at the root of your project
2. Add patterns for files or folders you want Git to ignore:
   ```
   node_modules/
   .env
   dist/
   ```
3. You can use ready-made templates for common setups:
   [GitHub gitignore templates](https://github.com/github/gitignore)

---

## Commits

### What is it?
- A commit is a snapshot of your project at a specific point in time
- Each commit has a message describing what changed and why

### Why do we need it?
- Commits let you move backward or forward through history
- They make changes traceable and reviewable

### How do we use it?
1. Stage files:
   ```bash
   git add <filename>
   ```
2. Commit changes:
   ```bash
   git commit -m "Add feature description"
   ```
3. Push to remote:
   ```bash
   git push
   ```

### Good habits
- Write clear, concise commit messages
- Keep commits small and focused on a single change

### Further Learning
- [Git Commit Documentation](https://git-scm.com/docs/git-commit)

---

## Branches

### What is it?
- Branches let you work on different features or fixes in isolation
- The main branch (often called `main` or `master`) holds stable, production-ready code

### Why do we need it?
- To safely develop new features without affecting live code
- To make it easy to experiment and test changes

### How do we use it?
1. Create a new branch:
   ```bash
   git checkout -b feature/new-feature
   ```
2. Switch between branches:
   ```bash
   git checkout main
   ```
3. Merge back when complete:
   ```bash
   git merge feature/new-feature
   ```

### Further Learning
- [Git Branching Guide](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)

---

## Merging and Rebasing

### What is merging?
- Merging combines the history of one branch into another
- It creates a new commit that ties both histories together

### What is rebasing?
- Rebasing moves or “replays” commits from one branch on top of another
- It creates a cleaner, linear history but can rewrite commits

### When to use them
- Use merge for shared branches (safe and transparent)
- Use rebase for your local feature branches (tidy history before merging)

### Commands
```bash
git merge feature/new-feature
git rebase main
```

### Further Learning
- [Merging vs Rebasing Explained](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)

---

## Undoing and Fixing Mistakes

### What is it?
- Git provides several ways to undo changes or fix mistakes without losing work

### Why do we need it?
- To recover quickly from errors
- To reduce fear of “breaking” something

### How do we use it?
- Undo changes to a file before committing:
  ```bash
  git restore <filename>
  ```
- Undo the last commit (keep changes staged):
  ```bash
  git reset --soft HEAD~1
  ```
- Revert a commit safely (makes a new commit that undoes the change):
  ```bash
  git revert <commit-hash>
  ```

### Further Learning
- [Git Tools - Reset Demystified](https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified)
- [Atlassian: Undoing Changes in Git](https://www.atlassian.com/git/tutorials/undoing-changes)

---

## Stashing Work

### What is it?
- Stashing temporarily saves uncommitted work so you can switch branches safely

### Why do we need it?
- To quickly switch context without committing incomplete code

### How do we use it?
```bash
git stash            # Save your current changes
git switch main      # Move to another branch
git stash pop        # Restore the stashed changes
```

### Further Learning
- [Git Stash Documentation](https://git-scm.com/docs/git-stash)

---

## Remotes and Syncing

### What is it?
- Remotes are versions of your repository hosted elsewhere (for example, on GitHub)
- Git uses commands to synchronise your local repository with the remote one

### Key commands
- `git fetch` downloads new data but does not merge it
- `git pull` fetches and merges the latest changes
- `git push` uploads your commits to the remote repository

### Why it matters
- Understanding these commands helps avoid merge confusion and lost changes
- Use `git fetch` to preview updates before merging them

### Further Learning
- [Git Remote Documentation](https://git-scm.com/docs/git-remote)
- [Atlassian: Syncing with Remotes](https://www.atlassian.com/git/tutorials/syncing)

---

## GitHub Flow

### What is it?
- A lightweight workflow for teams using GitHub
- Focuses on short-lived feature branches, pull requests, and continuous integration

### How it works
1. Create a new branch from `main`
2. Commit changes regularly
3. Push your branch to GitHub
4. Open a pull request to merge your changes
5. Request review and make revisions if needed
6. Merge the pull request once approved

### Further Learning
- [GitHub Flow Guide](https://docs.github.com/en/get-started/using-github/github-flow)

---

## Pull Requests and Code Reviews

### What is it?
- A pull request proposes merging one branch into another
- It provides a space for discussion and review before merging

### Why do we use it?
- To ensure code quality through peer review
- To catch issues early and maintain consistency

### How to create a good pull request
- Make small, focused changes
- Include a clear title and description
- Link to any relevant tickets
- Be open to feedback

### How to review code well
- Review carefully and constructively
- Focus on code quality, readability, and alignment with project goals
- End on a positive note, acknowledging effort

### Further Learning
- [GitHub: About Pull Requests](https://docs.github.com/en/pull-requests)
- [GitLab: Code Review Guidelines](https://docs.gitlab.com/ee/user/project/merge_requests/code_reviews.html)

---

## Avoiding and Resolving Conflicts

### What are conflicts?
- A conflict happens when Git cannot automatically merge changes between branches
- Common when two people edit the same line or file

### How to avoid them
- Pull regularly from `main` to stay up to date
- Keep feature branches short-lived
- Communicate with your team about overlapping changes

### How to resolve them
1. When a conflict occurs, Git will mark the file
2. Open it and look for conflict markers:
   ```
   <<<<<<< HEAD
   your changes
   =======
   incoming changes
   >>>>>>> feature-branch
   ```
3. Edit the file to keep the correct version
4. Mark it resolved:
   ```bash
   git add <filename>
   git commit
   ```

### Further Learning
- [Git Merge Conflicts Guide](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts)

---

## Pre-commit Hooks

### What is it?
- Pre-commit hooks run checks automatically before a commit
- They help catch errors early, such as failed tests or linting issues

### Why use them?
- To enforce code quality standards
- To avoid committing broken or inconsistent code

### Example
Using the `pre-commit` tool:
```bash
pip install pre-commit
pre-commit install
```

### Further Learning
- [pre-commit.com User Guide](https://pre-commit.com/)
- [Git Hooks Documentation](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)

---

## GitHub Actions

### What is it?
- GitHub Actions allow you to automate workflows like running tests or deploying code
- They run automatically when you push code or open a pull request

### Why use them?
- To automate testing and deployment
- To ensure consistent CI/CD practices

### Example
A simple workflow file `.github/workflows/test.yml`:
```yaml
name: Run tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
```

### Further Learning
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

## Common Git Tips

- Pull from the remote repository regularly
- Commit frequently with meaningful messages
- Avoid large or unnecessary commits
- Use feature branches for each new task
- Never force-push to shared branches unless agreed by the team
- Test code locally before pushing
- Keep documentation up to date

### Further Learning
- [Git Best Practices](https://www.atlassian.com/git/tutorials/comparing-workflows)
- [Pro Git Book](https://git-scm.com/book/en/v2)
