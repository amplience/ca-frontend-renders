## Setting up the content
1. Log in to the Amplience OnDemand platform and navigate to the content authoring app
2. Navigate to the 'content type library' and select 'create'
3. Replace the contents of the content type with the contents of "section.json" located in the package and click save.
4. Repeat this process for "promobanner.json".
5. Navigate to the content library and select create content.
6. Select the name of the content type you wish to create, fill out the content form and click save.
7. Go back to the content library, find the piece of content you created and publish it.
8. You can now view the content GUID, and the JSON it will return by clicking on the icon in the top right of the content.


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
