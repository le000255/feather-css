# Using Terminal (Bash) and CLI

>[!NOTE]
*As our team members are Windows users, these instructions are strictly for Windows environment.*

## 1. Pull the Latest Changes

Before starting any work, make sure your local repository is up-to-date with the latest changes from the remote repository. Open Command Prompt or Git Bash and run:
```bash
git pull origin main
```
## 2. Create a New Branch
Create a new branch for your feature or task to keep your work organized and separate from the main branch:
```bash
git checkout -b <branch-name>
```
## 3. Make Changes
Make your changes to the codebase. Ensure you test your changes locally before committing.

## 4. Commit Your Changes
Commit your changes with a descriptive message to keep track of what you’ve done:
```bash
git add .
git commit -m "Description of changes"
```
## 5. Push Your Branch
Push your branch to the remote repository to share your work with the team:
```bash
git push origin <branch-name>
```
## 6. Create a Pull Request
Go to the repository on GitHub and create a pull request from your branch to the main branch. Add a clear description of the changes and request reviews from your team members.

## 7. Review and Merge
Team members review the pull request, provide feedback, and approve the changes. Once approved, merge the pull request into the main branch.

## 8. Update Your Local Repository
After merging, update your local repository to reflect the latest changes:
```bash
git checkout main
git pull origin main
```
## 9. Delete the Branch
If the branch is no longer needed, delete it both locally and remotely:
```bash
git branch -d <branch-name>
git push origin --delete <branch-name>
```

## Additional Resources

- Go back to 🔗[Build](build.md)
- Go back to 🔗[Readme](../README.md)