# Using Terminal (Bash) and CLI
>[!NOTE]
> As our team members are Windows users, these instructions are strictly for Windows environments.

## Initial Setup 

Create a `dev-branch` if we don't have one.
>[!NOTE]
> Team Lead will do this. Relax 🍵.

Branch you should be on: `main` and `dev-branch`

```bash
git checkout main
git pull origin main
git checkout dev-branch
git pull origin dev-branch
git checkout -b feature-branch dev-branch
```

## Regular Updates

Team members when starting your code **MUST** do this.
Branch you should be on: `feature-branch`

If you don't have a `feature-branch`, create one from `dev-branch`:

```bash
git checkout dev-branch
git pull origin dev-branch
git checkout -b feature-branch
```
If you already have a `feature-branch`, make sure it is up to date with `dev-branch`:

```bash
git checkout feature-branch
git pull origin dev-branch
# Resolve conflicts if any
git commit -m "Merge dev-branch into feature-branch"
```

## Final Merge (Team Lead Only)

Assuming that `dev-branch` has been ***carefully tested*** and the latest version has been pushed online.
The Team Lead is responsible for merging the `dev-branch` into `main`:

```bash
git checkout main
git pull origin main
git merge dev-branch
# Resolve conflicts if any
git commit -m "Merge dev-branch into main"
git push origin main
```

## Additional Resources

- Go back to 🔗[Build](build.md)
- Go back to 🔗[Readme](/README.md)

