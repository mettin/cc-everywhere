"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[5559],{44090:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return f}});var n,r=a(87462),d=a(63366),m=(a(15007),a(64983)),i=a(91515),o=["components"],p={},l=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),x={_frontmatter:p},s=i.Z;function f(e){var t=e.components,a=(0,d.Z)(e,o);return(0,m.mdx)(s,(0,r.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"editor"},"editor"),(0,m.mdx)("p",null,"This class contains all the APIs used to embed the full Adobe Express editor in your own application."),(0,m.mdx)("h2",{id:"editor-workflows"},"Editor workflows"),(0,m.mdx)("p",null,"The following methods belong to the ",(0,m.mdx)("inlineCode",{parentName:"p"},"editor")," class:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#create"},(0,m.mdx)("inlineCode",{parentName:"a"},"create")),": Start with an empty canvas."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#createwithasset"},(0,m.mdx)("inlineCode",{parentName:"a"},"createWithAsset")),": Start with an asset."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#edit"},(0,m.mdx)("inlineCode",{parentName:"a"},"edit")),": Continue editing an existing Express project.")),(0,m.mdx)("h2",{id:"create"},"create"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"create")," method starts the full editor workflow with an empty canvas."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-ts"},"editor.create: (docConfig?: CreateDocConfig, appConfig?: BaseEditorAppConfig, exportConfig?: ExportOptions, containerConfig?: ContainerConfig): void\n")),(0,m.mdx)("p",null,"All the properties in this object are optional."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"docConfig"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"#createdocconfig"},"CreateDocConfig")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Pass a custom canvas size")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"appConfig"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"#baseeditorappconfig"},"BaseEditorAppConfig")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Parameters to configure editor/modal UI")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"exportConfig"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../../types/index.md#exportoptions"},"ExportOptions"),"[]"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Configure export options. If no export options are specified, the editor falls back to the default layout options.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"containerConfig"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../../types/index.md#containerconfig"},"ContainerConfig")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Properties to configure the SDK container")))),(0,m.mdx)("h3",{id:"createdocconfig"},"CreateDocConfig"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"CreateDocConfig")," allows you to pass a custom canvas size."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"canvasSize"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../../types/index.md#size"},"Size"),"/",(0,m.mdx)("a",{parentName:"td",href:"../../types/index.md#canvasaspectid"},"CanvasAspectId")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Launch the editor with canvas set at this size.")))),(0,m.mdx)("h3",{id:"baseeditorappconfig"},"BaseEditorAppConfig"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"BaseEditorAppConfig")," allows you to configure the editor to be launched for the user."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"selectedCategory"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../../types/index.md#editorpanelview"},"EditorPanelView")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Determines which panel view to open by default.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"categorySearchText"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"string"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Search text to pass in the editor for selected panel.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"templateType"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../../types/index.md#templatetype"},"TemplateType")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Specify template type for canvas.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"multiPage"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"boolean"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Defaults to ",(0,m.mdx)("inlineCode",{parentName:"td"},"true"),". Set to ",(0,m.mdx)("inlineCode",{parentName:"td"},"false")," if multi-page export is not supported.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"allowedFileTypes"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../../types/index.md#filetype"},"FileType"),"[]"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Specify the list of file types that the user can publish. By default, all formats (PNG, JPEG, MP4 and PDF) are supported.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"callbacks"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../../types/index.md#callbacks"},"Callbacks")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Callback functions")))),(0,m.mdx)(l,{variant:"info",slots:"text1",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"Use ",(0,m.mdx)("inlineCode",{parentName:"p"},"allowedFileTypes")," to specify the list of filetypes that the user can download. This can be used to limit the download options as per file types for end users. This limitation is applied to both native download and custom download scenarios."),(0,m.mdx)("p",null,"View the full list of ",(0,m.mdx)("a",{parentName:"p",href:"../../types/index.md#canvasaspectid"},"canvas sizes")," and ",(0,m.mdx)("a",{parentName:"p",href:"../../types/index.md#templatetype"},"template types"),"."),(0,m.mdx)("h2",{id:"createwithasset"},"createWithAsset"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"createWithAsset")," method starts the full editor workflow with an asset."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-ts"},"editor.createWithAsset: (docConfig: CreateWithAssetDocConfig, appConfig?: BaseEditorAppConfig, exportConfig?: ExportOptions, containerConfig?: ContainerConfig): void\n")),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"docConfig"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"#createdocconfig"},"CreateWithAssetDocConfig")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Pass an image and custom canvas size")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"appConfig"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"#baseeditorappconfig"},"BaseEditorAppConfig")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Parameters to configure editor/modal UI")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"exportConfig"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../../types/index.md#exportoptions"},"ExportOptions"),"[]"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Configure export options. If no export options are specified, the editor falls back to the default layout options.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"containerConfig"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../../types/index.md#containerconfig"},"ContainerConfig")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Properties to configure the SDK container")))),(0,m.mdx)("h3",{id:"createwithassetdocconfig"},"CreateWithAssetDocConfig"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"CreateWithAssetDocConfig")," allows you to pass an image and/or a custom canvas size."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"canvasSize"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../../types/index.md#size"},"Size"),"/",(0,m.mdx)("a",{parentName:"td",href:"../../types/index.md#canvasaspectid"},"CanvasAspectId")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Launch the editor with canvas set at this size.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"asset"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../../types/index.md#asset"},"Asset")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Asset object that contains the base64-encoded image data you want the editor to open.")))),(0,m.mdx)("h2",{id:"edit"},"edit"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"edit")," method lets you continue editing an existing Express project"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-ts"},"editor.edit: (docConfig: EditDocConfig, appConfig?: BaseEditorAppConfig, exportConfig?: ExportOptions, containerConfig?: ContainerConfig): void\n")),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"docConfig"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"#editdocconfig"},"EditDocConfig")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Pass the document ID to open in the editor")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"appConfig"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"#baseeditorappconfig"},"BaseEditorAppConfig")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Parameters to configure editor/modal UI")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"exportConfig"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../../types/index.md#exportoptions"},"ExportOptions"),"[]"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Configure export options. If no export options are specified, the editor falls back to the default layout options.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"containerConfig"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../../types/index.md#containerconfig"},"ContainerConfig")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Properties to configure the SDK container")))),(0,m.mdx)("h3",{id:"editdocconfig"},"EditDocConfig"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"documentId"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"string"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Unique identifier of the asset returned from ",(0,m.mdx)("inlineCode",{parentName:"td"},"onPublish")," callback")))),(0,m.mdx)("p",null,"When a user completes their workflow in the editor, the associated ",(0,m.mdx)("strong",{parentName:"p"},"documentId")," is sent back in ",(0,m.mdx)("a",{parentName:"p",href:"../../types/index.md#publishparams"},"publishParams")," from the ",(0,m.mdx)("inlineCode",{parentName:"p"},"onPublish")," callback."))}f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-reference-cc-everywhere-editor-index-md-d0c3abef937fa52e2dd5.js.map