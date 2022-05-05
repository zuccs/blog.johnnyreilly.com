"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[24310],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return m}});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(i),m=r,g=h["".concat(p,".").concat(m)]||h[m]||c[m]||a;return i?n.createElement(g,o(o({ref:t},u),{},{components:i})):n.createElement(g,o({ref:t},u))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=i[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},75483:function(e,t,i){i.r(t),i.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var n=i(87462),r=i(63366),a=(i(67294),i(3905)),o=["components"],s={title:"Bicep: syntax highlighting with PrismJS (and Docusaurus)",authors:"johnnyreilly",tags:["Bicep","PrismJS"],image:"./bicep-syntax-highlighting-with-prismjs.png",hide_table_of_contents:!1},p=void 0,l={permalink:"/2021/08/19/bicep-syntax-highlighting-with-prismjs",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-08-19-bicep-syntax-highlighting-with-prismjs/index.md",source:"@site/blog/2021-08-19-bicep-syntax-highlighting-with-prismjs/index.md",title:"Bicep: syntax highlighting with PrismJS (and Docusaurus)",description:"Bicep is an amazing language, it's also very new. If you want to write attractive code snippets about Bicep, you can by using PrismJS (and Docusaurus). This post shows you how.",date:"2021-08-19T00:00:00.000Z",formattedDate:"August 19, 2021",tags:[{label:"Bicep",permalink:"/tags/bicep"},{label:"PrismJS",permalink:"/tags/prism-js"}],readingTime:2.21,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Bicep: syntax highlighting with PrismJS (and Docusaurus)",authors:"johnnyreilly",tags:["Bicep","PrismJS"],image:"./bicep-syntax-highlighting-with-prismjs.png",hide_table_of_contents:!1},prevItem:{title:"Google APIs: authentication with TypeScript",permalink:"/2021/09/10/google-apis-authentication-with-typescript"},nextItem:{title:"Publish Azure Static Web Apps with Bicep and Azure DevOps",permalink:"/2021/08/15/bicep-azure-static-web-apps-azure-devops"}},u={image:i(75279).Z,authorsImageUrls:[void 0]},c=[{value:"Syntax highlighting",id:"syntax-highlighting",level:2},{value:"Docusaurus meet Bicep",id:"docusaurus-meet-bicep",level:2},{value:"Early adoption workaround",id:"early-adoption-workaround",level:2},{value:"What does it look like?",id:"what-does-it-look-like",level:2}],h={toc:c};function m(e){var t=e.components,s=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Bicep is an amazing language, it's also very new. If you want to write attractive code snippets about Bicep, you can by using PrismJS (and Docusaurus). This post shows you how."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"title image reading &quot;Publish Azure Static Web Apps with Bicep and Azure DevOps&quot; and some Azure logos",src:i(75279).Z,width:"700",height:"500"})),(0,a.kt)("h2",{id:"syntax-highlighting"},"Syntax highlighting"),(0,a.kt)("p",null,"I've been writing blog posts about Bicep for a little while. I was frustrated that the code snippets were entirely unhighlighted. I'm keen my posts are as readable as possible, and so I ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/PrismJS/prism/pull/3027"},"looked into adding support to PrismJS")," which is what ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus")," uses to power syntax highlighting."),(0,a.kt)("p",null,"Whilst my regex fu is amateur at best, happily ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RunDevelopment"},"Michael Schmidt")," of the PrismJS family is considerably better. He took the support I added and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/PrismJS/prism/pull/3028"},"made it much better"),"."),(0,a.kt)("h2",{id:"docusaurus-meet-bicep"},"Docusaurus meet Bicep"),(0,a.kt)("p",null,"If you have any code snippets that start with three backticks and the word ",(0,a.kt)("inlineCode",{parentName:"p"},"bicep"),"..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```bicep\n// code goes here...\n")),(0,a.kt)("p",null,"... then ideally you'd like to see some syntax highlighting in your post. Since Bicep isn't \"in the box\" for Docusaurus you need to ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/next/markdown-features/code-blocks#supported-languages"},"explicitly opt into support like so:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'    prism: {\n      additionalLanguages: ["powershell", "csharp", "docker", "bicep"],\n    },\n')),(0,a.kt)("p",null,"Above you can see a snippet from my own ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/blog.johnnyreilly.com/blob/b2df93efb72adc32d9f45de4f727e890e59a4919/blog-website/docusaurus.config.js#L185"},(0,a.kt)("inlineCode",{parentName:"a"},"docusaurus.config.js"))," which adds Bicep, alongside the other additional languages I use."),(0,a.kt)("p",null,"With this in place, you would typically get all the syntax highlighting support you need."),(0,a.kt)("h2",{id:"early-adoption-workaround"},"Early adoption workaround"),(0,a.kt)("p",null,"I'm writing this post before the latest version of PrismJS has shipped. As such, Bicep support isn't available by default yet. But if you're an early adopter, you can get support right now. The secret is adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"resolutions")," section to your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," which points to the GitHub Repo ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/PrismJS/prism"},"where Prism lives"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  "resolutions": {\n    "prismjs": "PrismJS/prism"\n  },\n')),(0,a.kt)("p",null,"This will mean that Yarn (if you're using Docusaurus you're probably using Yarn) pulls ",(0,a.kt)("inlineCode",{parentName:"p"},"prismjs")," directly from GitHub, as demonstrated by the ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn.lock")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'prismjs@PrismJS/prism, prismjs@^1.23.0:\n  version "1.24.1"\n  resolved "https://codeload.github.com/PrismJS/prism/tar.gz/59f449d33dc9fd19302f21aad95fc0b5028ac830"\n')),(0,a.kt)("h2",{id:"what-does-it-look-like"},"What does it look like?"),(0,a.kt)("p",null,"Finally, let's see if works. Here's a Bicep code snippet that I borrowed from ",(0,a.kt)("a",{parentName:"p",href:"/2021/08/19/bicep-syntax-highlighting-with-prismjs"},"an earlier post"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bicep"},"param repositoryUrl string\nparam repositoryBranch string\n\nparam location string = 'westeurope'\nparam skuName string = 'Free'\nparam skuTier string = 'Free'\n\nparam appName string\n\nresource staticWebApp 'Microsoft.Web/staticSites@2020-12-01' = {\n  name: appName\n  location: location\n  tags: tagsObj\n  sku: {\n    name: skuName\n    tier: skuTier\n  }\n  properties: {\n    // The provider, repositoryUrl and branch fields are required for successive deployments to succeed\n    // for more details see: https://github.com/Azure/static-web-apps/issues/516\n    provider: 'DevOps'\n    repositoryUrl: repositoryUrl\n    branch: repositoryBranch\n    buildProperties: {\n      skipGithubActionWorkflowGeneration: true\n    }\n  }\n}\n\noutput deployment_token string = listSecrets(staticWebApp.id, staticWebApp.apiVersion).properties.apiKey\n")),(0,a.kt)("p",null,"As you can see, it's delightfully highlighted by PrismJS. Enjoy!"))}m.isMDXComponent=!0},75279:function(e,t,i){t.Z=i.p+"assets/images/bicep-syntax-highlighting-with-prismjs-200cd271d33385800a17b554c5c28345.png"}}]);