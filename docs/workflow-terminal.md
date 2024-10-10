# Using Terminal (Bash) and CLI

> [!NOTE]
> As our team members are Windows users, these instructions are strictly for Windows environments.

## Initial Setup

Create a `dev-branch` if we don't have one.

> [!NOTE]
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

### Creating a Pull Request

To ensure a smooth development process, follow these steps to create a pull request to merge with `dev-branch` only during the development stage.

The following steps assume that you have your `feature-branch` up and ready for a pull request. Make sure you have done your [regular updates](#regular-updates) before this step.

> [!NOTE]
> GitHub shows a **bold** notification as soon as you have one ready 🙂!
> **_Fun fact:_** you can actually click the button **Compare & pull request** that will do the same thing as below.

**In GitHub Web UI:**

1. Go to the repository on GitHub and navigate to the **Pull requests** tab.

2. Click on **New pull request**.

3. Select `dev-branch` as the base branch and your `feature-branch` as the compare branch.

4. Add a descriptive title and detailed description for your pull request.

5. Click on **Create pull request**.

By following these steps, you ensure that all changes are properly reviewed and integrated into the development branch.

## Final Merge (Team Lead Only)

Assuming that `dev-branch` has been **_carefully tested_** and the latest version has been pushed online.
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
