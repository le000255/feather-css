# Using GitHub Website and VSCode Source Control

## Initial Setup

Create a `dev-branch` if we don't have one.

> [!NOTE]
> Team Lead will do this. Relax 🍵.

Branch you should be on: main and dev-branch

**In GitHub Web UI:**

1. Navigate to your repository.

2. Click on the **Code** button and copy the repository URL.

3. Open **VSCode**.

4. Go to View -> **Command Palette** and type Git: Clone.

5. Paste the URL and choose a local directory.

**In VSCode UI:**

1. In VSCode, click on the Source Control icon on the sidebar.

2. Click on the **ellipsis (…)** and select **Pull** from the menu.

3. Do this for both `main` and `dev-branch`.

4. Open the \***\*Command Palette\*\*** (Ctrl+Shift+P).

5. Type **Git: Create Branch**.

6 Enter the new branch name (e.g., feature-branch) and **base it** on the `dev-branch`.

## Regular Updates

Branch you should be on: `feature-branch`

If you don't have a `feature-branch`, create one from `dev-branch`:

**In VSCode:**

1. Open the **Command Palette** (Ctrl+Shift+P).

2. Type **Git: Create Branch**.

3. Enter the branch name (e.g., feature-branch) and **base it** on the `dev-branch`.

If you already have a `feature-branch`, make sure it is up to date with `dev-branch`:

**In VSCode:**

1. Open the **Command Palette** (Ctrl+Shift+P).
2. Type Git: Pull and select dev-branch.
3. Type Git: Merge Branch and select dev-branch.
4. Resolve any conflicts using VSCode’s **built-in conflict resolution tool**.

## Creating a Pull Request

To ensure a smooth development process, follow these steps to create a pull request to merge with dev-branch only during the development stage.

The following steps assume that you have your `feature-branch` up and ready for a pull request. Make sure you have done your [regular updates](#regular-updates) before this step. 

>[!NOTE]
>GitHub shows a **bold** notification as soon as you have one ready 🙂!
> ***Fun fact:*** you can actually click the button **Compare & pull request** that will do the same thing as below.  

**In GitHub Web UI:**
1. Go to your repository and navigate to the **Pull Requests** tab.

2. Click on **New pull request**.

3. Select `dev-branch` as the **base branch** and your `feature-branch` as the **compare branch** [WARNING! - Needed to be strictly follow].

4. Add a descriptive title and detailed description for your pull request.
5. Click on **Create pull request**.

By following these steps, you ensure that all changes are properly reviewed and integrated into the development branch.

## Final Merge (Team Lead Only)

Branch you should be on: `main`

Assuming that `dev-branch` has been **_carefully tested_** and the latest version has been pushed online. The _Team Lead_ is responsible for merging the `dev-branch `into main:

**In VSCode:**

1. Open the **Command Palette** (Ctrl+Shift+P).

2. Switch to the `main` branch by typing Git: Checkout to and selecting `main`.

3. **Pull** the latest changes from `dev-branch`.

4. **Merge** `dev-branch `into `main` and resolve conflicts if any.

5. **Push** the changes back to GitHub.

## Additional Resources

- Go back to 🔗[Build](build.md).
- Go back to 🔗[README.md](/README.md)
