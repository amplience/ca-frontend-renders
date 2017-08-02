## Setting up the content
1. Log in to the Amplience OnDemand platform and navigate to the content authoring app
2. Navigate to the 'content type library' and select 'create'
3. Replace the contents of the content type with the contents of "roundel.json" located in the package and click save.
4. Repeat this process for the following json files in order:
      - "image.json"
      - "link.json"
      - "banner.json"
      - "video.json"
      - "slider.json"
5. Navigate to the content library and select create content.
6. Select the name of the content type you wish to create, fill out the content form and click save.
7. Go back to the content library, find the piece of content you created and publish it.
8. You can now view the content GUID, and the JSON it will return by clicking on the icon in the top right of the content.

## Setting up transformation templates

To display image content correctly with roundels, the handlebars template makes use of a transformation template.
This needs to be set up within your Amplience account before the renders will work properly.

1. Log into Amplience and open up the 'tools' menu
2. Select the 'Transformation Templates' option in the tools menu
3. Click the 'new' button in the top right of the screen
4. Set both the 'Friendly Name' and 'Template Name' to be 'roundel'
5. In the 'Additional Parameters' box copy and paste the following set of parameters:
```
myasset=empty&p1_img=empty&p2_img=empty&p3_img=empty&p4_img=empty&qlt=90&roundelRatio=1&layer0=[src=/i//{$prod_img}&w=1350]&layer1=[src=/i//{$p1_img}&w={376*$roundelRatio}&right=10&bottom=10&anchor=BR&visible={$p1_img!=$myasset}&img404=roundel_fallback]&layer2=[src=/i//{$p2_img}&w={376*$roundelRatio}&left=10&bottom=10&anchor=BL&visible={$p2_img!=$myasset}]&layer3=[src=/i//{$p3_img}&w={376*$roundelRatio}&left=10&top=10&anchor=TL&visible={$p3_img!=$myasset}]&layer4=[src=/i//{$p4_img}&w={376*$roundelRatio}&right=10&top=10&anchor=TR&visible={$p4_img!=$myasset}]  
```
6. Click 'create and publish'


## Site Integration
The accelerator packages use handlebars templates but you can use any templating engine you wish.

Requesting content via a GUID from Amplience will return JSONLD which must be interpreted into JSON before rendering
  - Amplience has a javascript library available for this task at "dist/reusable/cms-javascript-sdk.min.js"

Once standard JSON has been produced it can be combined with a template to produce HTML.
  - This task can be done in the browser on page load or as part of a backend integration and combined server side.

Amplience has a javascript utility which can be used for requesting and combining content with a handlebars template which can
be found here: "dist/reusable/utils.js"

## Contacts
If you have any problems, questions or comments please email tc@amplience.com
