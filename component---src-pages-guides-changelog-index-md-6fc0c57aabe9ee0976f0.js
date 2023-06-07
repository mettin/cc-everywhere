"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[67],{67058:function(e,i,n){n.r(i),n.d(i,{_frontmatter:function(){return s},default:function(){return c}});var t,a=n(87462),o=n(63366),l=(n(15007),n(64983)),r=n(91515),d=["components"],s={},m=(t="InlineAlert",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),u={_frontmatter:s},h=r.Z;function c(e){var i=e.components,n=(0,o.Z)(e,d);return(0,l.mdx)(h,(0,a.Z)({},u,n,{components:i,mdxType:"MDXLayout"}),(0,l.mdx)(m,{variant:"warning",slots:"header, text1, text2",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"IMPORTANT: Deprecation Warning"),(0,l.mdx)("p",null,"This version of the docs and SDK will be sunsetted later this year. As a result, we are no longer approving new submissions that integrate with v2."),(0,l.mdx)("p",null,"Instead, we would love for you to start testing the new version of the SDK. To join the private beta and get early access to documentation, please fill out ",(0,l.mdx)("a",{parentName:"p",href:"https://airtable.com/shryiOk1VwoWxUCZs?prefill_Platform=Adobe%20Express%20Embed%20SDK&hide_Platform=true"},"this form"),"."),(0,l.mdx)("h1",{id:"changelog"},"Changelog"),(0,l.mdx)("h2",{id:"208---2023-02-02"},"[2.0.8]"," - 2023-02-02"),(0,l.mdx)("h3",{id:"added"},"Added"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Browser compatibility checker: Now the SDK will check for browser compatibility during initialization."),(0,l.mdx)("li",{parentName:"ul"},"New default method ",(0,l.mdx)("inlineCode",{parentName:"li"},"terminate()")," allows you to terminate an active instance of CCEverywhere. This method will return false if there is no active CCEverywhere instance."),(0,l.mdx)("li",{parentName:"ul"},"Google YOLO will work for both the full editor and quick actions. If the user is not signed in, the YOLO prompt will be shown to users. If the user has multiple Google accounts, they can select from a list.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"If the user has an Adobe account associated with Google ID, the user is signed in."),(0,l.mdx)("li",{parentName:"ul"},"If the user does not have an Adobe account associated with the Google ID, a new Adobe account will be created for the user using their Google ID."),(0,l.mdx)("li",{parentName:"ul"},"User can choose to dismiss the YOLO modal and continue with delayed login."),(0,l.mdx)("li",{parentName:"ul"},"Redirect URI is no longer being used.")))),(0,l.mdx)("h3",{id:"breaking-changes"},"Breaking Changes"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"initialize()")," method is now async. This is the main API used for initializing the SDK. It will return a promise with a CCEverywhere object which can be used to call other APIs in the SDK.")),(0,l.mdx)("h2",{id:"154---2022-12-16"},"[1.5.4]"," - 2022-12-16"),(0,l.mdx)("h3",{id:"added-1"},"Added"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},'Enabled "Logged Out" experience for image and video quick actions')),(0,l.mdx)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},'Fixed the problem with the editor iFrame not auto-closing post publish (for the scenario when the editor is launched from image quick actions via "Customize in Express" workflow)'),(0,l.mdx)("li",{parentName:"ul"},"Fixed an issue related to pre-caching of resources for the editor")),(0,l.mdx)("h3",{id:"known-issues"},"Known Issues"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},'Currently, the "Customize in Express" workflow from the "Remove Background" image quick action is not working. The fix will be deployed in a future version.')),(0,l.mdx)("h2",{id:"1410---2022-11-14"},"[1.4.10]"," - 2022-11-14"),(0,l.mdx)("h3",{id:"added-2"},"Added"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Delayed Login experience in the full editor.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"With this release of the SDK, we are enabling users to launch the full editor without having to log in first. The user can sign in 1) once the Adobe Express iFrame launches, or 2) continue to work on the document until they decide to publish/save -- at which point they would be prompted to sign in. The delayed login experience is available out-of-the-box with this version of the SDK and developers do not have to make any changes to enable this experience."))),(0,l.mdx)("li",{parentName:"ul"},'"Create from Image" workflow.',(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Users can now create from an image instead of a blank canvas. This workflow works with the delayed login experience. To use this workflow, partners will need to enable the host application to use it.")))),(0,l.mdx)("h2",{id:"1311---2022-08-24"},"[1.3.11]"," - 2022-08-24"),(0,l.mdx)("h3",{id:"added-3"},"Added"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"SDK bundled for browsers, hosted on Adobe CDN."),(0,l.mdx)("li",{parentName:"ul"},"Welcome Screen before the Single User Sign In screen appears."),(0,l.mdx)("li",{parentName:"ul"},"Ability to log out from the full editor loaded in the iFrame.")),(0,l.mdx)("h3",{id:"bug-fixes-1"},"Bug Fixes"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Signing-in from the welcome screen, subsequent to a sign-out, successfully launches the full editor iFrame.")),(0,l.mdx)("h3",{id:"known-issues-1"},"Known Issues"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Opening asset in the full editor, subsequent to performing an image quick action, and saving the asset doesn't close the iFrame automatically. This will be fixed in the next release."),(0,l.mdx)("li",{parentName:"ul"},"When a quick action is performed and the resulting asset is opened in a full editor: after the user makes changes and saves it the asset is saved outside of the designated project folder in the user's Adobe Express account.")),(0,l.mdx)("h2",{id:"110---2022-04-09"},"[1.1.0]"," - 2022-04-09"),(0,l.mdx)("h3",{id:"enhancements"},"Enhancements"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Scrim view background color is now configurable."),(0,l.mdx)("li",{parentName:"ul"},"Redirect URI can now be provided as input during initialization."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"appVersion")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"platformCategory")," are now optional arguments."),(0,l.mdx)("li",{parentName:"ul"},"In dev environments, SDK is now able to read and override the base URL from the client's window object."),(0,l.mdx)("li",{parentName:"ul"},"API provided to easily identify the SDK version running in browser or host apps."),(0,l.mdx)("li",{parentName:"ul"},"Update Content will now be displayed in 100% of the area of the client div,  instead of appearing with scrollbars."),(0,l.mdx)("li",{parentName:"ul"},"Adobe IMS related enhancements.")),(0,l.mdx)("h3",{id:"bug-fixes-2"},"Bug Fixes"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"When ",(0,l.mdx)("inlineCode",{parentName:"li"},"parentElementId")," is supplied, the dimensions of the parent container display Scrim view instead of Viewport."),(0,l.mdx)("li",{parentName:"ul"},"QA loader screen can be now set to the darkest theme."),(0,l.mdx)("li",{parentName:"ul"},"iFrame now loads successfully on Safari even if pop-up blocker settings are enabled."),(0,l.mdx)("li",{parentName:"ul"},"Enhanced error handling for failure to launch iFrame for quick action and full editor."),(0,l.mdx)("li",{parentName:"ul"},"Full editor iFrame now honoring 0 border radius value.")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-changelog-index-md-6fc0c57aabe9ee0976f0.js.map