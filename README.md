<div align="center">
    <img src="http://i1.adis.ws/i/csdemo/ca.png" alt="Amplience Content Authoring" title="Amplience" style="margin-left:auto; margin-right:auto; display:block;" width="138px" height="137px" />
</div>
</br>


# Content Authoring Accelerators #
This repository is intended as an accelerated starting point for implementing Amplience Content Authoring; it contains commonly used content types and the front end render templates required to display them.
 
<div align="center">
    <a href="http://amplience.com/">
        <img src="http://i1.adis.ws/i/csdemo/ca-front-end-readme-banner2" alt="Amplience Content Authoring" title="Amplience" style="margin-left:auto; margin-right:auto; display:block;" width="890px" height="300px" />
    </a>
</div>


## Table of Contents
- [Quick Start](#quick-start)
- [Demo](#demo)
- [Content Packages](#content-packages)
- [Generated Builds](#generated-builds)
- [Dependencies](#dependencies)
    - [Helper scripts](#helper-scripts)
    - [3rd-party libs](#3rd-party-libs)
- [Building minified and concatenated files](#building-minified-and-concatenated-files)
- [Usage](#usage)
    - [Development](#development)
    - [Tests](#development)
    - [Bug / Feature Request](#bug-/-feature-request)
    
## Quick Start

```bash
# Install dependencies 
$ npm install

# Build project
$ gulp
```
Open page with desired render, e.g. localhost:9100/dist/renders/image/index.html
## Demo
http://demo.amplience.com/cademo/homepage/
## Content Packages
Commonly used content types have been split up into separate packages.
Individual packages can be found in `src/renders`, here you can edit any render templates or styling prior to running a build.
You will also find everything necessary to set up the content types within your Amplience account and to display the resulting content. 
Each package has its own readme which will walk you through the necessary steps.
## Generated Builds
Built renders are located in `dist/renders` folder.
Here you can find unminified and minified css, uncompiled  and precompiled handlebars templates, JSON content types for the Content Authoring app, README's, and the visualisation html page.
The `libs` folder contains js dependencies for the render. Most of the files in the `libs` folder are taken from the `dist/reusable` folder, described below.
## Dependencies
All JS dependencies for renders can be found in the `dist/reusable` folder.
JS dependencies are composed of helper scripts and 3d party libs.
### Helper scripts
Helper scripts can be found in `src/reusable/js` folder. Below is the list of scripts and their description:
- `renderTypes.js` contains ID's for all Content types, and can be found in the Content Authoring app. This file is needed when one render is composed of several others nested within it.
- `utils.js` is needed to make AJAX requests to retrieve render data. It also has several methods to troubleshoot the renders.
- `hanldebars_helpers.js` is used to declare various handlebars helpers, to solve different tasks for handlebars templates.
### 3rd-party libs
All 3d-party libs are pulled as npm dependencies and can be found in package.json
- `handlebars.min.js` is the handlebars templates library.
- `cms-javascript-sdk.min.js` is used to format the requested JSON content. Example usage: 
```javascript
amp.inlineContent(JSON.parse(data));
```
- `showdown.min.js` is used to parse text with markdown and convert it into semantic html.
- `lory.js` is a slider library and is used for slider renders.

## Building minified and concatenated files
```bash
# Install dependencies 
$ npm install

# Build minified project
$ gulp buildAllMin
```
This will build minified and concatenated files for all renders.
## Usage 
### Development
Want to contribute? Great!
To fix a bug or enhance an existing module, follow these steps:
- Fork the repo
- Create a new branch on your fork (`git checkout -b feature/improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request to the develop branch

### Tests
```bash
$ npm run test
```

### Bug / Feature Request
If you find a bug, kindly open an issue [here](tc@amplience.com) by including your steps to reproduce and the expected result.
If you’d like to request a new function, feel free to do so by opening an issue [here](tc@amplience.com) 
