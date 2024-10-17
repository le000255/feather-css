# [Dev] User Guide

## Overview

This project aims to provide a comprehensive set of tools and utilities for web development, including typography, colours, buttons, and more, with customizable styles.

## Get started with the project

### Local installation

1. **Download the repository**

   - Clone the repository using Git:
     ```sh
     git clone https://github.com/le000255/feather-css.git
     ```
   - Or download the ZIP file from the repository page and extract it.

2. **Installing dependencies**

   - Ensure you have [Node.js](https://nodejs.org/) installed.

   - Install SASS globally if you haven't already:
     ```sh
     npm install -g sass
     ```
   - (Optional) Install Gulp globally if you plan to use it. :

     ```sh
     npm install -g gulp
     ```

   - For more information on Gulp installation and usage, refer to the [Gulp documentation](https://gulpjs.com/docs/en/getting-started/quick-start).

3. **Insert stylesheet link to desired HTML files**

   - Link the minified CSS file in your HTML files:

     ```html
     <link rel="stylesheet" href="dist/css/feather-css.css" />
     ```

### Folder structure

The project repository is organized as follows:

```
feather-css-repo/
├── css/
│   ├── style.css
│   ├── style.min.css
├── js/
│   ├── script.js
│   ├── script.min.js
├── scss/
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _utilities.scss
│   ├── _functions.scss
│   ├── main.scss
├── docs/
│   ├── userguide.md
│   ├── README.md
├── index.html
├── package.json
├── gulpfile.js
└── README.md
```

- **css/**: Contains the compiled CSS files. You will link to these files in your HTML.
- **js/**: Contains JavaScript files for additional functionality.
- **scss/**: Contains the SASS source files. You can customize these files to change the styles.
- **docs/**: Contains documentation files, including the user guide.
- **index.html**: A sample HTML file to showcase the usage of FeatherCSS.
- **package.json**: Lists the project dependencies and scripts.
- **gulpfile.js**: Contains Gulp tasks for automating development workflows.
- **README.md**: Provides an overview and instructions for the project.

> [!NOTE] > _Some files and folders, such as `style.css`, `js/`, `README.md`, and `docs/`, are primarily for showcasing or guiding purposes and may not be necessary for your development._

If you get rid of unnecessary files and folders, your project repo may look like:

```
your-repo/
├── css/
│   ├── style.css
│   ├── style.min.css
├── js/
│   ├── script.js
│   ├── script.min.js
├── scss/
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _utilities.scss
│   ├── _functions.scss
│   ├── main.scss
├── index.html
├── package.json (optional)
├── gulpfile.js (optional)
└── README.md
```

### Usage

Here are some examples of using the utilities provided by this project:

- **Heading**

  Standard headings come with pre-determined attributes to maximize readability.

  However, if you prefer not to use semantic heading elements, you can use heading classes such as `fe-h1` and `fe-h2`. These classes will render text with the same styles as the corresponding heading tags.

  ```html
  <!-- Standard heading -->
  <h2>This is a Standard Heading</h2>
  <!-- Custom heading for using without semantic tags -->
  <span class="fe-h3">This is a Custom Heading</span>
  ```

- **Table**

  ```html
  <table class="fe-simple-table">
    <thead>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
      </tr>
      <tr>
        <td>Data 4</td>
        <td>Data 5</td>
        <td>Data 6</td>
      </tr>
    </tbody>
  </table>
  ```

- **Container**

  ```html
  <div class="fe-container">
    <p>This is a container with some content.</p>
  </div>
  ```

- **Margin & Padding**

  ```html
  <div class="fe-margin">
    <p>This div has margin applied.</p>
  </div>
  <div class="fe-padding">
    <p>This div has padding applied.</p>
  </div>
  ```

> [!Note]  
> _For more details of how to use FeatherCSS, please visit our [GitHub page]() (to be updated)._

### Customization

FeatherCSS provides a set of SASS variables that you can customize to match your project's design requirements. These variables are defined in the `_variables.scss` file. Here are some common customizations you can make:

1. **Change Primary Color**

   ```scss
   // _variables.scss
   $fe-clr-primary: #3498db; // Change this to your desired primary color
   ```

2. **Adjust font sizes**

   ```scss
   // _variables.scss
   // Change the size accoridngly
   $fe-font-size-xs: 0.75rem;
   $fe-font-size-sm: 0.875rem;
   $fe-font-size-md: 1rem;
   $fe-font-size-lg: 1.125rem;
   $fe-font-size-xl: 1.25rem;
   $fe-font-size-xxl: 1.5rem;
   ```

3. **Modify breakpoints/containers using screen size variables**

   ```scss
   // _variables.scss
   /* 
    screen size variables, used to determine
    container width and grid break points
    */
   $fe-screen-xs: 576px;
   $fe-screen-sm: 768px;
   $fe-screen-md: 992px;
   $fe-screen-lg: 1200px;
   $fe-screen-xl: 1400px;
   $fe-screen-xxl: 1600px;
   $fe-screen-4k: 2560px;
   ```

4. **Modify some utilities style by looking into the comments**

- Open the `_utilities.scss` file in your preferred code editor.
- Look for comments within the file that describe various utility classes.
- Adjust the styles as needed to fit your project's requirements.
- Save the changes and recompile the SASS files to see the updates in your project.

- Below is an example of how some utility clasess are constructed

```scss
// _utilities.scss excerpt
// The follwing code generates padding
// utility classes

// Generate .p-remove-[direction] classes
@each $direction, $dir in $directions {
@if $dir == x {
  .p-remove-#{$direction} {
    padding-left: 0;
    padding-right: 0;

  }
} @else if $dir == y {
  .p-remove-#{$direction} {
    padding-top: 0;
    padding-bottom: 0;
  }

} @else {
  .p-remove-#{$direction} {
    padding-#{$dir}: 0;
  }
}
}
/* -------------- example outputs ------------- */
/*
no direction, just size
.p-xs {
padding: 0.25rem;
}
.p-sm {
padding: 0.5rem;
}
*/

/*
single direction
.pt-xs {
padding-top: 0.25rem;
}
.pr-xs {
padding-right: 0.25rem;
}
*/
// [...]

```


> [!IMPORTANT]
> For deeper customization, explore the `_mixins.scss`, `_utilities.scss`, and `_functions.scss` files. These files contain mixins, utility classes, and functions that allow you to fine-tune and extend the styles of various components.

_End of Document. [Back to README](/README.md)_
