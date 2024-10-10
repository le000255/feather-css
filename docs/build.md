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

SCSS files should start with an underscore (`_`) and use lowercase letters with hyphens to separate words. This naming convention helps in identifying partial SCSS files that are meant to be imported into other SCSS files.

#### Example

```scss
// Correct naming
_variables.scss
_buttons.scss

// Incorrect naming
variables.scss
buttons.scss
```
### Handling Long File Names

When dealing with long file names, it's important to maintain readability and manageability. Here are some guidelines:

1. **Keep it Descriptive but Concise**: Ensure the file name is descriptive enough to understand its purpose but avoid unnecessary length.
2. **Use Hyphens for Separation**: Use hyphens (`-`) to separate words for better readability.
3. **Avoid Special Characters**: Stick to alphanumeric characters and hyphens. Avoid spaces and special characters.
4. **Consistent Naming Convention**: Follow a consistent naming convention throughout the project.

#### Example

```scss
// Correct naming
_long-file-name-example.scss
_another-example-file.scss

// Incorrect naming
longfilenameexample.scss
another_example_file.scss
```

### Variables and Classes

#### Below is the naming convention breakdown.

1. **Prefix with `fe-`**: All class names and variables should start with `fe-` to indicate they belong to the Feather framework.
2. **Use Hyphens for Separation**: Use hyphens (`-`) to separate words for better readability.
3. **Descriptive but Concise**: Ensure the name is descriptive enough to understand its purpose but avoid unnecessary length.
4. **Avoid Special Characters**: Stick to alphanumeric characters and hyphens. Avoid spaces and special characters.

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

#### Correct vs. Incorrect naming

```scss
// Correct naming for classes
.fe-navigation-bar {
    background-color: #333;
}

.fe-footer-links {
    display: flex;
    justify-content: space-between;
}

// Incorrect naming for classes
.fe_navigationbar {
    background-color: #333;
}

.fe_footer_links {
    display: flex;
    justify-content: space-between;
}

// Correct naming for variables
$fe-clr-primary: #3498db;
$fe-fs-large: 18px;

// Incorrect naming for variables
$fe_PriMary_color: #3498db;
$feFontSizeLarge: 18px;
```


*End of document. Go back to **🔗[README.md](/README.md)***