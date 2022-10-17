"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[35873],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,g=d["".concat(s,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"Preload fonts with Docusaurus",authors:"johnnyreilly",tags:["Docusaurus","preload","webpack","fonts","plugin","configureWebpack"],image:"./title-image.png",hide_table_of_contents:!1},l=void 0,s={permalink:"/2021/12/29/preload-fonts-with-docusaurus",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-12-29-preload-fonts-with-docusaurus/index.md",source:"@site/blog/2021-12-29-preload-fonts-with-docusaurus/index.md",title:"Preload fonts with Docusaurus",description:"When we're using custom fonts in our websites, it's good practice to preload the fonts to minimise the flash of unstyled text. This post shows how to achieve this with Docusaurus. It does so by building a Docusaurus plugin which makes use of Satyendra Singh's excellent webpack-font-preload-plugin",date:"2021-12-29T00:00:00.000Z",formattedDate:"December 29, 2021",tags:[{label:"Docusaurus",permalink:"/tags/docusaurus"},{label:"preload",permalink:"/tags/preload"},{label:"webpack",permalink:"/tags/webpack"},{label:"fonts",permalink:"/tags/fonts"},{label:"plugin",permalink:"/tags/plugin"},{label:"configureWebpack",permalink:"/tags/configure-webpack"}],readingTime:2.27,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Preload fonts with Docusaurus",authors:"johnnyreilly",tags:["Docusaurus","preload","webpack","fonts","plugin","configureWebpack"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"Azure Container Apps: dapr, devcontainer, debug and deploy",permalink:"/2022/01/22/azure-container-apps-dapr-bicep-github-actions-debug-devcontainer"},nextItem:{title:"Query deployment outputs with the Azure CLI",permalink:"/2021/12/28/azure-cli-show-query-output-properties"}},u={image:n(17932).Z,authorsImageUrls:[void 0]},p=[{value:"Preload web fonts with Docusaurus",id:"preload-web-fonts-with-docusaurus",level:2},{value:"Making a plugin",id:"making-a-plugin",level:2}],c={toc:p};function d(e){var{components:t}=e,i=a(e,["components"]);return(0,r.kt)("wrapper",o({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When we're using custom fonts in our websites, it's good practice to preload the fonts to minimise the ",(0,r.kt)("a",o({parentName:"p"},{href:"https://css-tricks.com/fout-foit-foft/"}),"flash of unstyled text"),". This post shows how to achieve this with Docusaurus. It does so by building a Docusaurus plugin which makes use of ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/sn-satyendra"}),"Satyendra Singh"),"'s excellent ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/sn-satyendra/webpack-font-preload-plugin"}),(0,r.kt)("inlineCode",{parentName:"a"},"webpack-font-preload-plugin"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"title image reading &quot;Preload fonts with Docusaurus&quot; in a ridiculous font with the Docusaurus logo and a screenshot of a preload link HTML element",src:n(17932).Z,width:"1600",height:"900"})),(0,r.kt)("h2",o({},{id:"preload-web-fonts-with-docusaurus"}),"Preload web fonts with Docusaurus"),(0,r.kt)("p",null,"To quote the docs of the ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack-font-preload-plugin"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content"}),"preload")," value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<link>")," element's ",(0,r.kt)("inlineCode",{parentName:"p"},"rel")," attribute lets you declare fetch requests in the HTML's ",(0,r.kt)("inlineCode",{parentName:"p"},"<head>"),", specifying resources that your page will need very soon, which you want to start loading early in the page lifecycle, before browsers' main rendering machinery kicks in. This ensures they are available earlier and are less likely to block the page's render, improving performance."),(0,r.kt)("p",{parentName:"blockquote"},"This plugin specifically targets fonts used with the application which are bundled using webpack. The plugin would add ",(0,r.kt)("inlineCode",{parentName:"p"},"<link>")," tags in the begining of ",(0,r.kt)("inlineCode",{parentName:"p"},"<head>")," of your html:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<link rel="preload" href="/font1.woff" as="font" crossorigin />\n<link rel="preload" href="/font2.woff" as="font" crossorigin />\n'))),(0,r.kt)("p",null,"If you want to learn more about preloading web fonts, it's also worth ",(0,r.kt)("a",o({parentName:"p"},{href:"https://web.dev/codelab-preload-web-fonts/"}),"reading this excellent article"),"."),(0,r.kt)("p",null,"The blog you're reading is built with ",(0,r.kt)("a",o({parentName:"p"},{href:"https://docusaurus.io/"}),"Docusaurus"),". Our mission: for the HTML our Docusaurus build pumps out to feature preload ",(0,r.kt)("inlineCode",{parentName:"p"},"link")," elements. Something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<link\n  rel="preload"\n  href="/assets/fonts/Poppins-Regular-8081832fc5cfbf634aa664a9eff0350e.ttf"\n  as="font"\n  crossorigin=""\n/>\n')),(0,r.kt)("p",null,"This ",(0,r.kt)("inlineCode",{parentName:"p"},"link")," element has the ",(0,r.kt)("inlineCode",{parentName:"p"},'rel="preload"')," attribute set, which triggers font preloading."),(0,r.kt)("p",null,"But the thing to take from the above text is that the filename features a hash in the name. This demonstrates that the font is being pumped through the Docusaurus build, which is powered by webpack. So we need some webpack whispering to get font preloading going."),(0,r.kt)("h2",o({},{id:"making-a-plugin"}),"Making a plugin"),(0,r.kt)("p",null,"We're going to make a minimal ",(0,r.kt)("a",o({parentName:"p"},{href:"https://docusaurus.io/docs/using-plugins#creating-plugins"}),"Docusaurus plugin")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack-font-preload-plugin"),". Let's add it to our project:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"yarn add webpack-font-preload-plugin\n")),(0,r.kt)("p",null,"Now in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," we can create our minimal plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"const FontPreloadPlugin = require('webpack-font-preload-plugin');\n\n//...\n/** @type {import('@docusaurus/types').Config} */\nconst config = {\n  //...\n  plugins: [\n    function preloadFontPlugin(_context, _options) {\n      return {\n        name: 'preload-font-plugin',\n        configureWebpack(_config, _isServer) {\n          return {\n            plugins: [new FontPreloadPlugin()],\n          };\n        },\n      };\n    },\n    // ...\n  ],\n  //...\n};\n")),(0,r.kt)("p",null,"It's a super simple plugin, it does nothing more than ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," up an instance of the webpack plugin, inside the context of the ",(0,r.kt)("inlineCode",{parentName:"p"},"configureWebpack")," method. That's all that's required."),(0,r.kt)("p",null,"With this in place we're now seeing the ",(0,r.kt)("inlineCode",{parentName:"p"},'<link rel="preload" ... />')," elements being included in the HTML pumped out of our Docusaurus build. This means we have font preloading working:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"screenshot of the Chrome devtools featuring link rel=&quot;preload&quot; elements",src:n(96554).Z,width:"1243",height:"65"})),(0,r.kt)("p",null,"Huzzah!"))}d.isMDXComponent=!0},96554:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/screenshot-preload-devtools-627f8f6610d2f2df248ee9f37bef04a8.png"},17932:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/title-image-b589f4299ec628c54610e1d9715bdbfe.png"}}]);