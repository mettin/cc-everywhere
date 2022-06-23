"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[829],{60173:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return m},default:function(){return p}});var n=a(87462),i=a(63366),r=(a(15007),a(64983)),d=a(91515),o=["components"],m={},l={_frontmatter:m},s=d.Z;function p(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.mdx)(s,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"adobe-express-editor-component-edit-existing-adobe-express-project"},"Adobe Express Editor Component: Edit Existing Adobe Express Project"),(0,r.mdx)("p",null,"This guide will demonstrate how to launch a Express editor component. The editor will appear in an iframe, pre-loaded with a specified Adobe Express project."),(0,r.mdx)("h2",{id:"editdesign"},"editDesign()"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"../../../reference/index.md#cceverywhere"},"CCEverywhere")," object exposes the ",(0,r.mdx)("inlineCode",{parentName:"p"},"editDesign()")," method, which loads the Adobe Express editor component in an iframe, with an existing project pre-loaded."),(0,r.mdx)("h4",{id:"flow"},"Flow:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"User triggers ",(0,r.mdx)("inlineCode",{parentName:"li"},"editDesign()")," function from within the host application, and the Adobe Express editor is loaded in an iframe."),(0,r.mdx)("li",{parentName:"ul"},"To pre-load the editor with an existing project, you must pass the associated project ID to ",(0,r.mdx)("inlineCode",{parentName:"li"},"editDesignParams"),". This ID is returned in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"project")," property of ",(0,r.mdx)("inlineCode",{parentName:"li"},"publishParams")," from the ",(0,r.mdx)("inlineCode",{parentName:"li"},"onPublish")," callback. ")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'// Initialize SDK and save CCEverywhere object as ccEverywhere \nccEverywhere.editDesign(\n    {\n        inputParams: { \n            projectId: CCX_PROJECT_ID \n        },\n        callbacks: {\n            onCancel: () => {},\n            onError: (err) => {},\n            onLoadStart: () => {},\n            onLoad: () => {},\n            onPublishStart: () => {},\n            onPublish: (publishParams) => {},\n        },\n        modalParams: {},\n        outputParams: { \n            outputType: "base64"\n        },\n    }\n);\n')),(0,r.mdx)("h3",{id:"editdesignparams"},(0,r.mdx)("a",{parentName:"h3",href:"../../../reference/ccx_editor/index.md#editdesignparams"},"EditDesignParams")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"editDesign()")," takes an object of parameters, ",(0,r.mdx)("inlineCode",{parentName:"p"},"editDesignParams"),", composed of:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"modalParams"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Define size of editor modal"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"../../../reference/shared_types/index.md#modalparams"},"ModalParams"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"inputParams"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"CC Express project ID to initialize editor component"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"../../../reference/ccx_editor/index.md#editinputparams"},"EditInputParams"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"outputParams"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Configure output type"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"../../../reference/shared_types/index.md#ccxoutputparams"},"CCXOutputParams"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"callbacks"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Callback functions"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"../../../reference/shared_types/index.md#callbacks"},"Callbacks"))))),(0,r.mdx)("p",null,"The only required property is ",(0,r.mdx)("inlineCode",{parentName:"p"},"inputParams.projectId"),"."),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)("h4",{id:"step-1-user-clicks-the-edit-project-button"},'Step 1: User clicks the "Edit project" button'),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"editDesign()")," function is called and passed ",(0,r.mdx)("inlineCode",{parentName:"li"},"inputParams.projectId"),", a set of callback functions in ",(0,r.mdx)("inlineCode",{parentName:"li"},"editDesignCallback"),"."),(0,r.mdx)("li",{parentName:"ul"},"A CC Express editor component is launched in an iframe, pre-loaded with that CC Express project. ")),(0,r.mdx)("h4",{id:"step-2-user-finishes-design-and-clicks-save"},'Step 2: User finishes design and clicks "Save"'),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The project is again saved to the user's Adobe Express account in project folder ",(0,r.mdx)("inlineCode",{parentName:"li"},"appName")," as specified in the ",(0,r.mdx)("a",{parentName:"li",href:"../../../reference/index.md#initialize"},"initialize()")," function."),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"onPublish")," callback function is called. It passes the host application an object ",(0,r.mdx)("inlineCode",{parentName:"li"},"publishParams")," that includes the ",(0,r.mdx)("strong",{parentName:"li"},"Express project ID (projectId)")," and ",(0,r.mdx)("strong",{parentName:"li"},"image data representation (asset)"),". ",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"The asset is saved and displayed in the image tag ",(0,r.mdx)("inlineCode",{parentName:"li"},"image-container"),". The associated project ID is also saved in a global variable so that we can pre-load it in an editor component later again via ",(0,r.mdx)("inlineCode",{parentName:"li"},"editDesign()"),".")))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <title>Edit Project Sample</title>\n  </head>  \n  <body>\n    <button id="edit-project-button">Edit project</button>\n    <img id="image-container" height="420" width="420" />\n\n    <script type="text/javascript" src="./CCEverywhere.js"><\/script>\n    <script type="text/javascript">\n    /* Set to null until CCEverywhere object is initialized */\n    var ccEverywhere = null;\n    var projectId = <set by createDesign onPublish earlier>\n    var imageContainer = document.getElementById("image-container");\n\n    const editButton = document.getElementById("edit-project-button");\n\n    ccEverywhere = CCEverywhere.default.initialize(\n        {\n            clientId: YOUR_CLIENT_ID\n            appName: PROJECT_NAME,\n            appVersion: { major: 1, minor: 0 },\n            platformCategory: \'web\', \n            redirectUri: YOUR_REDIRECT_URI\n        }\n    );\n\n    editButton.onclick = () => {\n        const editDesignCallback = {\n            onCancel: () => {},\n            onPublish: (publishParams) => {\n            /* User clicked "Save" - done modifying project.\n            Save modified image data and projectId */\n                const localData = { \n                    project: publishParams.projectId, \n                    image: publishParams.asset.data \n                };\n                imageContainer.src = localData.image;\n                projectId = localData.project;\n            },\n            onError: (err) => {\n                console.error(\'Error received is\', err.toString());\n            },\n        };\n        ccEverywhere.editDesign(\n            {\n                inputParams: { projectId: projectId },\n                callbacks: editDesignCallback\n            }\n        );\n    }\n    <\/script>\n  </body> \n</html>\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-ccx-editor-edit-project-index-md-e335d83485a80419b0ab.js.map