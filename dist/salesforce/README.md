<div align="center">
    <img src="http://i1.adis.ws/i/csdemo/ca.png" alt="Amplience Content Authoring" title="Amplience" style="margin-left:auto; margin-right:auto; display:block;" width="138px" height="137px" />
</div>
</br>


# Content Authoring Accelerators build for Salesforce #
In this directory you will find files needed to set up accelerators on Salesforce platform.

    
## Quick Start

```bash
# Install dependencies 
$ npm install

# Build project
$ gulp salesforce
```

## Content types Schema Json files
Content Type Schemas for Content Authoring App can be found in `dist/salesforce/renders/RENDER_NAME/RENDER_NAME.json` 
e.g. `dist/salesforce/renders/image/image.json`. 
Note that some renders have multiple schemas, which have to be populated, for a render to work.
e.g. inside `dist/salesforce/renders/banner/` there are `banner.json` and `link.json`.

## Handlebars templates
Built Handlebars templates can be found in `dist/salesforce/renders/RENDER_NAME/RENDER_NAME.hbs` 
e.g. `dist/salesforce/renders/image/image.hbs`.

Note: for complex renders to work (those that have other renders integrated), you need to change content types inside handlebars templates.

E.g. go to `src/salesforce/templates/slider.hbs` and open it in editor.
Find the following line:
```
{{#iff [@type] '==' 'http://schema.cms.amplience.com/f0b1f9c8-9fbd-4470-aeb2-543c3cb01f19'}}
```
Replace `f0b1f9c8-9fbd-4470-aeb2-543c3cb01f19` with your type. Type can be found in renders json. 

## JS Dependencies
All JS dependencies for renders are included in one minified file: `dist/salesforce/libs.min.js`.
JS dependencies are composed of helper scripts and 3d party libs. These dependencies are to be included.
This file is to be included in the header of the page.

## JS Initialization
To properly display any render, it is needed to include initialization js file `dist/salesforce/initAll.js` at the bottom of html page (before renders html is included).

## CSS Dependencies
All CSS dependencies for renders are included in one minified file: `dist/salesforce/styles.min.css` in the header of the page.
