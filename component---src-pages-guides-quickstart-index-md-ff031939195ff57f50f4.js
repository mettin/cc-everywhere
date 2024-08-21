"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[4451],{88431:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return p}});var n=a(58168),i=a(80045),r=(a(88763),a(15680)),d=a(83407);const o=["components"],s={},l={_frontmatter:s},m=d.A;function p(e){let{components:t}=e,a=(0,i.A)(e,o);return(0,r.mdx)(m,(0,n.A)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"quickstart-guide"},"Quickstart Guide"),(0,r.mdx)("p",null,"This guide explains how to start using the Adobe Express Embed SDK in your own application."),(0,r.mdx)("h2",{id:"step-1-get-an-api-key"},"Step 1: Get an API Key"),(0,r.mdx)("p",null,"Create a new project in the ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/console"},"Developer Console"),'. Select "Add an API" > "Adobe Express Embed SDK".'),(0,r.mdx)("p",null,'Then, choose "Single-Page App" and register your domain in the "Allowed Domains" fields.'),(0,r.mdx)("h2",{id:"step-2-embed-the-sdk"},"Step 2: Embed the SDK"),(0,r.mdx)("p",null,"The latest ",(0,r.mdx)("a",{parentName:"p",href:"https://cc-embed.adobe.com/sdk/v4/version.json"},"version")," of the SDK is available on Adobe's CDN:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'var CDN_URL = "https://cc-embed.adobe.com/sdk/v4/CCEverywhere.js"";\n')),(0,r.mdx)("p",null,"You can read the ",(0,r.mdx)("a",{parentName:"p",href:"/cc-everywhere/src/pages/guides/changelog/index.md"},"changelog")," to understand known issues as well as what changes have been made."),(0,r.mdx)("h3",{id:"load-via-script-tag"},"Load via script tag"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-html"},'<script src="https://cc-embed.adobe.com/sdk/v4/CCEverywhere.js""><\/script>\n<script>\n  (async () => {\n    const ccEverywhere = await window.CCEverywhere.initialize(initializeParams, configParams);\n  })();\n<\/script>\n')),(0,r.mdx)("h3",{id:"using-import"},"Using import"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"await import(CDN_URL);\nconst ccEverywhere = await window.CCEverywhere.initialize(initializeParams, configParams);\n")),(0,r.mdx)("h3",{id:"dynamic-script"},"Dynamic script"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'((document, url) => {\n    const script = document.createElement("script");\n    script.src = url;\n    script.onload = async () => {\n      if (!window.CCEverywhere) {\n          return;\n        }\n        const ccEverywhere = await window.CCEverywhere.initialize(initializeParams, configParams);\n    };\n    document.body.appendChild(script);\n  })(document, CDN_URL);\n')),(0,r.mdx)("h2",{id:"step-3-initialize-the-sdk"},"Step 3: Initialize the SDK"),(0,r.mdx)("p",null,"The SDK should only be initialized once each page. To initialize the SDK, pass the following objects: ",(0,r.mdx)("inlineCode",{parentName:"p"},"HostInfo")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"ConfigParams"),"."),(0,r.mdx)("h3",{id:"hostinfo"},"HostInfo"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"CLIENT_ID")," (string): API key from Developer Console"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"APP_NAME")," (string): Name of your integration/app. This name corresponds with the project folder created for your end users in Adobe Express.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"(async () => {\n    const ccEverywhere = await window.CCEverywhere.initialize({\n      clientId: <CLIENT_ID>,\n      appName: <APP_NAME>,\n    });\n})();\n")),(0,r.mdx)("p",null,"The SDK can be launched delayed login, meaning users won't be asked to sign in until they export. Read more about the initialize API ",(0,r.mdx)("a",{parentName:"p",href:"../../reference/initialize/index.md"},"here"),"."),(0,r.mdx)("p",null,"Successful initialization returns a ",(0,r.mdx)("inlineCode",{parentName:"p"},"CCEverywhere")," Class object, with three properties:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"editor")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"module")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"quickAction"))),(0,r.mdx)("h2",{id:"next-steps-explore-the-sdk"},"Next Steps: Explore the SDK"),(0,r.mdx)("p",null,"Our guides along with the ",(0,r.mdx)("a",{parentName:"p",href:"../../reference/index.md"},"SDK references")," can help you start working with the SDK in a way that best suits your needs."),(0,r.mdx)("h3",{id:"full-editor"},(0,r.mdx)("a",{parentName:"h3",href:"../guides/full_editor/index.md"},"Full editor")),(0,r.mdx)("p",null,"With the full editor component, your users are able to:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"How to ",(0,r.mdx)("a",{parentName:"li",href:"../guides/full_editor/create_project/"},"create new projects")),(0,r.mdx)("li",{parentName:"ul"},"How to ",(0,r.mdx)("a",{parentName:"li",href:"../guides/full_editor/edit_project/"},"edit existing projects"))),(0,r.mdx)("p",null,"Users can access Adobe Express's huge template and asset library when starting with a blank new project in the editor. Pre-selected images can also be loaded into the editor for further designing. The editor can also load previous projects (created using your integration) by taking an existing project ID as input."),(0,r.mdx)("h3",{id:"quick-actions"},(0,r.mdx)("a",{parentName:"h3",href:"../guides/quick_actions/index.md"},"Quick actions")),(0,r.mdx)("p",null,"Once the selected quick action loads in the iframe, users can browse their filesystem for an asset. At this time, only image quick actions can pass a pre-selected asset as input. After the quick action is completed, a download button will appear. You can configure other export options such as taking the user into a full editor component to further customize the modified asset, or saving it back onto your application."),(0,r.mdx)("h3",{id:"modules"},(0,r.mdx)("a",{parentName:"h3",href:"../guides/modules/index.md"},"Modules")),(0,r.mdx)("p",null,"Once the selected quick action loads in the iframe, users can browse their filesystem for an asset. At this time, only image quick actions can pass a pre-selected asset as input. After the quick action is completed, a download button will appear. You can configure other export options such as taking the user into a full editor component to further customize the modified asset, or saving it back onto your application."),(0,r.mdx)("h2",{id:"browser-support"},"Browser support"),(0,r.mdx)("p",null,"Here are the minimum browser requirements for the SDK:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Browser name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Minimum version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Safari"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"16 and onwards")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Google Chrome"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"100 and onwards")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Microsoft Edge"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"107 and onwards")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Firefox"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"117 and onwards")))),(0,r.mdx)("p",null,"Notes:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"JavaScript must be enabled"),(0,r.mdx)("li",{parentName:"ul"},"The SDK will ",(0,r.mdx)("em",{parentName:"li"},"not")," work in incognito windows.")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-quickstart-index-md-ff031939195ff57f50f4.js.map