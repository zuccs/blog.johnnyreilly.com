"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[24310],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=i,g=h["".concat(p,".").concat(m)]||h[m]||c[m]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},65629:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={title:"Bicep: syntax highlighting with PrismJS (and Docusaurus)",authors:"johnnyreilly",tags:["Bicep","PrismJS"],image:"./bicep-syntax-highlighting-with-prismjs.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/2021/08/19/bicep-syntax-highlighting-with-prismjs",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-08-19-bicep-syntax-highlighting-with-prismjs/index.md",source:"@site/blog/2021-08-19-bicep-syntax-highlighting-with-prismjs/index.md",title:"Bicep: syntax highlighting with PrismJS (and Docusaurus)",description:"Bicep is an amazing language, it's also very new. If you want to write attractive code snippets about Bicep, you can by using PrismJS (and Docusaurus). This post shows you how.",date:"2021-08-19T00:00:00.000Z",formattedDate:"August 19, 2021",tags:[{label:"Bicep",permalink:"/tags/bicep"},{label:"PrismJS",permalink:"/tags/prism-js"}],readingTime:2.21,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Bicep: syntax highlighting with PrismJS (and Docusaurus)",authors:"johnnyreilly",tags:["Bicep","PrismJS"],image:"./bicep-syntax-highlighting-with-prismjs.png",hide_table_of_contents:!1},prevItem:{title:"Google APIs: authentication with TypeScript",permalink:"/2021/09/10/google-apis-authentication-with-typescript"},nextItem:{title:"Publish Azure Static Web Apps with Bicep and Azure DevOps",permalink:"/2021/08/15/bicep-azure-static-web-apps-azure-devops"}},l={image:n(75279).Z,authorsImageUrls:[void 0]},u=[{value:"Syntax highlighting",id:"syntax-highlighting",level:2},{value:"Docusaurus meet Bicep",id:"docusaurus-meet-bicep",level:2},{value:"Early adoption workaround",id:"early-adoption-workaround",level:2},{value:"What does it look like?",id:"what-does-it-look-like",level:2}],c={toc:u};function h(e){var{components:t}=e,o=a(e,["components"]);return(0,r.kt)("wrapper",i({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Bicep is an amazing language, it's also very new. If you want to write attractive code snippets about Bicep, you can by using PrismJS (and Docusaurus). This post shows you how."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"title image reading &quot;Publish Azure Static Web Apps with Bicep and Azure DevOps&quot; and some Azure logos",src:n(75279).Z,width:"700",height:"500"})),(0,r.kt)("h2",i({},{id:"syntax-highlighting"}),"Syntax highlighting"),(0,r.kt)("p",null,"I've been writing blog posts about Bicep for a little while. I was frustrated that the code snippets were entirely unhighlighted. I'm keen my posts are as readable as possible, and so I ",(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/PrismJS/prism/pull/3027"}),"looked into adding support to PrismJS")," which is what ",(0,r.kt)("a",i({parentName:"p"},{href:"https://docusaurus.io/"}),"Docusaurus")," uses to power syntax highlighting."),(0,r.kt)("p",null,"Whilst my regex fu is amateur at best, happily ",(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/RunDevelopment"}),"Michael Schmidt")," of the PrismJS family is considerably better. He took the support I added and ",(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/PrismJS/prism/pull/3028"}),"made it much better"),"."),(0,r.kt)("h2",i({},{id:"docusaurus-meet-bicep"}),"Docusaurus meet Bicep"),(0,r.kt)("p",null,"If you have any code snippets that start with three backticks and the word ",(0,r.kt)("inlineCode",{parentName:"p"},"bicep"),"..."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"```bicep\n// code goes here...\n")),(0,r.kt)("p",null,"... then ideally you'd like to see some syntax highlighting in your post. Since Bicep isn't \"in the box\" for Docusaurus you need to ",(0,r.kt)("a",i({parentName:"p"},{href:"https://docusaurus.io/docs/next/markdown-features/code-blocks#supported-languages"}),"explicitly opt into support like so:")),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-js"}),'    prism: {\n      additionalLanguages: ["powershell", "csharp", "docker", "bicep"],\n    },\n')),(0,r.kt)("p",null,"Above you can see a snippet from my own ",(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/johnnyreilly/blog.johnnyreilly.com/blob/b2df93efb72adc32d9f45de4f727e890e59a4919/blog-website/docusaurus.config.js#L185"}),(0,r.kt)("inlineCode",{parentName:"a"},"docusaurus.config.js"))," which adds Bicep, alongside the other additional languages I use."),(0,r.kt)("p",null,"With this in place, you would typically get all the syntax highlighting support you need."),(0,r.kt)("h2",i({},{id:"early-adoption-workaround"}),"Early adoption workaround"),(0,r.kt)("p",null,"I'm writing this post before the latest version of PrismJS has shipped. As such, Bicep support isn't available by default yet. But if you're an early adopter, you can get support right now. The secret is adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"resolutions")," section to your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," which points to the GitHub Repo ",(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/PrismJS/prism"}),"where Prism lives"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-json"}),'  "resolutions": {\n    "prismjs": "PrismJS/prism"\n  },\n')),(0,r.kt)("p",null,"This will mean that Yarn (if you're using Docusaurus you're probably using Yarn) pulls ",(0,r.kt)("inlineCode",{parentName:"p"},"prismjs")," directly from GitHub, as demonstrated by the ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn.lock")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),'prismjs@PrismJS/prism, prismjs@^1.23.0:\n  version "1.24.1"\n  resolved "https://codeload.github.com/PrismJS/prism/tar.gz/59f449d33dc9fd19302f21aad95fc0b5028ac830"\n')),(0,r.kt)("h2",i({},{id:"what-does-it-look-like"}),"What does it look like?"),(0,r.kt)("p",null,"Finally, let's see if works. Here's a Bicep code snippet that I borrowed from ",(0,r.kt)("a",i({parentName:"p"},{href:"/2021/08/19/bicep-syntax-highlighting-with-prismjs"}),"an earlier post"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bicep"}),"param repositoryUrl string\nparam repositoryBranch string\n\nparam location string = 'westeurope'\nparam skuName string = 'Free'\nparam skuTier string = 'Free'\n\nparam appName string\n\nresource staticWebApp 'Microsoft.Web/staticSites@2020-12-01' = {\n  name: appName\n  location: location\n  tags: tagsObj\n  sku: {\n    name: skuName\n    tier: skuTier\n  }\n  properties: {\n    // The provider, repositoryUrl and branch fields are required for successive deployments to succeed\n    // for more details see: https://github.com/Azure/static-web-apps/issues/516\n    provider: 'DevOps'\n    repositoryUrl: repositoryUrl\n    branch: repositoryBranch\n    buildProperties: {\n      skipGithubActionWorkflowGeneration: true\n    }\n  }\n}\n\noutput deployment_token string = listSecrets(staticWebApp.id, staticWebApp.apiVersion).properties.apiKey\n")),(0,r.kt)("p",null,"As you can see, it's delightfully highlighted by PrismJS. Enjoy!"))}h.isMDXComponent=!0},75279:function(e,t,n){t.Z=n.p+"assets/images/bicep-syntax-highlighting-with-prismjs-200cd271d33385800a17b554c5c28345.png"}}]);