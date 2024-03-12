"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[7662],{15930:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return s}});var a=n(87462),i=n(63366),r=(n(15007),n(64983)),d=n(91515),o=["components"],m={},p={_frontmatter:m},l=d.Z;function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.mdx)(l,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"launching-existing-projects-in-the-full-editor"},"Launching existing projects in the full editor"),(0,r.mdx)("p",null,"This guide will demonstrate how to load a specific Adobe Express project in a full editor component."),(0,r.mdx)("h2",{id:"edit"},"edit()"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"edit")," method lets you continue editing existing Express projects in the editor."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"// Initialize the SDK first\nconst { editor } = await ccEverywhere.initialize(); \neditor.edit(docConfig, appConfig, exportConfig, containerConfig); \n")),(0,r.mdx)("h3",{id:"editdesignparams"},"EditDesignParams"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"edit()")," takes an object of parameters, ",(0,r.mdx)("inlineCode",{parentName:"p"},"EditDesignParams"),", composed of:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"docConfig"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"../../../reference/CCEverywhere/editor/index.md#editdocconfig"},"EditDocConfig")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Pass the ID of the document to open")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"appConfig"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"../../../reference/CCEverywhere/editor/index.md#baseeditorappconfig"},"BaseEditorAppConfig")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Parameters to configure editor/modal UI")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"exportConfig"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"../../../reference/types/index.md#exportoptions"},"ExportOptions"),"[]"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Configure export options. If no export options are specified, the editor falls back to the default layout options.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"containerConfig"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"../../../reference/types/index.md#containerconfig"},"ContainerConfig")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Properties to configure the SDK container")))),(0,r.mdx)("p",null,"When a user completes their workflow in the editor, the associated ",(0,r.mdx)("strong",{parentName:"p"},"projectId")," is sent back in ",(0,r.mdx)("a",{parentName:"p",href:"../../../reference/types/index.md#publishparams"},"publishParams")," from the ",(0,r.mdx)("inlineCode",{parentName:"p"},"onPublish")," callback. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"edit()")," method lets you use that identifier to revisit ongoing designs in the full editor."),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"edit")," API takes a saved ",(0,r.mdx)("inlineCode",{parentName:"p"},"projectId")," as input and launches an ",(0,r.mdx)("strong",{parentName:"p"},"existing")," project in the editor. When the user finishes in the editor and saves/publishes their design, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"onPublish")," callback is invoked. Resulting project data is sent in ",(0,r.mdx)("inlineCode",{parentName:"p"},"publishParams"),". In this example, we save the project info (",(0,r.mdx)("inlineCode",{parentName:"p"},"project_id"),") and display the image data (of the first page of the user's design) in some image container ",(0,r.mdx)("inlineCode",{parentName:"p"},"image_data"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts",metastring:'title="edit-project.js" hl_lines="15"',title:'"edit-project.js"',hl_lines:'"15"'},'const project_id = "your_project_id" // saved from publishParams callback\n\nlet docConfig = {\n    documentId: project_id\n};\nlet appConfig = {\n    selectedCategory: "media"\n}\neditor.edit(docConfig, appConfig);\n')))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-full-editor-edit-project-index-md-16ae1ecbfbeed2cf95d9.js.map