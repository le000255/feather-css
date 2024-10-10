# Build Documentation
>[!NOTE]
*This document will be frequently updated during the build of the project.*
## Working with Git and Github
### Steps to help you establish your workflow
Depending on your working style, check the following links.

**Using Terminal(Bash) and VScode terminal** 
🔗[How to use Git with Terminal on VScode](workflow-terminal.md)

**Using GitHub website and VScode Source Control** 
🔗[How to use Git with GitHub website and VSCode Source Control](workflow-ui.md)


## Naming conventions

>[!IMPORTANT]
*Proposal only; team members need to approve.*
### Naming a .SCSS file

(To be updated)

### Variables and classes

Use the prefix `fe-` to define a variable or a class. `fe-` refers to the initials of the framework, as in "Feather".
#### Examples

```scss
// Variables
$fe-primary-color: #3498db;
$fe-font-size-large: 18px;
$fe-margin-small: 5px;

// Classes
.fe-button {
    padding: 10px;
}

.fe-container {
    max-width: 1200px;
}

.fe-header {
    background-color: #f8f9fa;
}
```
*End of document. Go back to **[README.md](/README.md)***