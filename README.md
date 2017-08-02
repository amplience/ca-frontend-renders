<div style="width: 200px; height: 110px; margin-left:auto; margin-right:auto; display:block;"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 70 70" xml:space="preserve">
<path d="M27.9,42C14.4,42,6.1,33.5,6.1,19.9c0-0.5,0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9c0,12.6,7.7,20.4,20.1,20.4
    c0.5,0,0.9,0.4,0.9,0.9S28.4,42,27.9,42z"></path>
<polygon points="16.1,27.1 15.4,33.2 21.5,32.4 "></polygon>
<rect x="17.3" y="18.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -7.6456 25.2744)" width="18.9" height="7.5"></rect>
<path d="M31.9,11.3l5.3,5.3c0,0,1.9-2,2.5-2.5c0.5-0.5,0.5-1.4,0-1.9c-0.5-0.5-2.9-2.9-3.4-3.4c-0.5-0.5-1.5-0.5-1.9,0
    C33.9,9.3,31.9,11.3,31.9,11.3z"></path>
</svg>
</div>
</br>


# Content Authoring Frontend Renders #
This repository is intended as an accelerated starting point for implementing Amplience Content Authoring; it contains commonly used content types and the front end render templates required to display them. 
<a href="http://amplience.com/">
    <img src="http://i1.adis.ws/i/csdemo/ca-front-end-readme-banner" alt="Amplience Content Authoring" title="Amplience" style="margin-left:auto; margin-right:auto; display:block; width:1200px; height:400px;" width="1200px" height="400px" />
</a>
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
- Create a new branch (`git checkout -b improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request 

### Tests
```bash
$ npm run test
```

### Bug / Feature Request
If you find a bug, kindly open an issue [here](tc@amplience.com) by including your steps to reproduce and the expected result.
If you’d like to request a new function, feel free to do so by opening an issue [here](tc@amplience.com) 
