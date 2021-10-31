"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[7890],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54743:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={title:"Visual Studio Marketplace: images in Markdown!",authors:"johnnyreilly",tags:["Azure DevOps Marketplace","Visual Studio Marketplace","markdown","images"],image:"blog/2020-11-28-images-in-markdown-for-azure-devops-marketplace/azure-devops-marketplace.png",description:"Publish your README.md and associated images to Visual Studio Marketplace.",hide_table_of_contents:!1},l=void 0,p={permalink:"/2020/11/28/images-in-markdown-for-azure-devops-marketplace",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-11-28-images-in-markdown-for-azure-devops-marketplace.md",source:"@site/blog/2020-11-28-images-in-markdown-for-azure-devops-marketplace.md",title:"Visual Studio Marketplace: images in Markdown!",description:"Publish your README.md and associated images to Visual Studio Marketplace.",date:"2020-11-28T00:00:00.000Z",formattedDate:"November 28, 2020",tags:[{label:"Azure DevOps Marketplace",permalink:"/tags/azure-dev-ops-marketplace"},{label:"Visual Studio Marketplace",permalink:"/tags/visual-studio-marketplace"},{label:"markdown",permalink:"/tags/markdown"},{label:"images",permalink:"/tags/images"}],readingTime:2.405,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"azure-pipelines-task-lib and isOutput setVariable",permalink:"/2020/12/09/azure-pipelines-task-lib-and-isoutput-setvariable"},nextItem:{title:"Bulletproof uniq with TypeScript generics (yay code reviews!)",permalink:"/2020/11/14/bulletproof-uniq-with-typescript"}},u={authorsImageUrls:[void 0]},c=[{value:"How can our tasks look as lovely?",id:"how-can-our-tasks-look-as-lovely",children:[],level:2},{value:"Mark(Down) our manifest",id:"markdown-our-manifest",children:[],level:2},{value:"Now the images...",id:"now-the-images",children:[],level:2}],d={toc:c};function m(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I've recently found myself developing ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/extend/develop/add-build-task?view=azure-devops"},"custom pipelines task extensions for Azure DevOps"),". The extensions being developed end up in the ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/azuredevops"},"Azure DevOps Marketplace"),". What you see there when you look at existing extensions is some pretty lovely documentation."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"screenshot of a rich Markdown powered screen with images in Visual Studio Marketplace",src:n(46486).Z})),(0,r.kt)("h2",{id:"how-can-our-tasks-look-as-lovely"},"How can our tasks look as lovely?"),(0,r.kt)("p",null,"That, my friends, is the question to answer. Good documentation is key to success. Here's the ask: when a custom task is installed it becomes available in the marketplace, we want it to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"contain documentation"),(0,r.kt)("li",{parentName:"ul"},"that documentation should support images... For a picture, famously, speaks a thousand words")),(0,r.kt)("h2",{id:"markdown-our-manifest"},"Mark(Down) our manifest"),(0,r.kt)("p",null,"To get documentation showing up in the marketplace, we need to take a look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"vss-extension.json")," file which lies at the root of our extension folder. It's a kind of manifest file and is documented ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/extend/develop/manifest?view=azure-devops"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/extend/develop/manifest?view=azure-devops#discovery-attributes"},"Tucked away in the docs, you'll find mention of a ",(0,r.kt)("inlineCode",{parentName:"a"},"content")," property and the words:")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Dictionary of content files that describe your extension to users... Each file is assumed to be in ",(0,r.kt)("a",{parentName:"p",href:"https://help.github.com/articles/github-flavored-markdown/"},"GitHub Flavored Markdown format"),". The path of each item is the path to the markdown file in the extension. Valid keys: ",(0,r.kt)("inlineCode",{parentName:"p"},"details"),".")),(0,r.kt)("p",null,"This means we can have a Markdown file in our repo which documents our task. To stay consistent with most projects, a solid choice is to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"README.md")," that sits in the root of the project to this end."),(0,r.kt)("p",null,"So the simple addition of this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  //...\n  "content": {\n    "details": {\n      "path": "README.md"\n    }\n  }\n  //...\n}\n')),(0,r.kt)("p",null,"Gives us documentation in the marketplace. Yay!"),(0,r.kt)("h2",{id:"now-the-images"},"Now the images..."),(0,r.kt)("p",null,"If we are referencing images in our ",(0,r.kt)("inlineCode",{parentName:"p"},"README.md")," then, as it stands right now, they won't show up in the marketplace. It'll be broken link city. Imagine some Markdown like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"![alt text](images/screenshot.png)\n")),(0,r.kt)("p",null,"This is entirely correct and supported, but won't work by default. This is because these images need to be specified in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/extend/develop/manifest?view=azure-devops#files"},(0,r.kt)("inlineCode",{parentName:"a"},"files")," property")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"vss-extension.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  //...\n  "content": {\n    "details": {\n      "path": "README.md"\n    }\n  },\n  "files": [\n    {\n      "path": "images",\n      "addressable": true\n    }\n  ]\n  //...\n}\n')),(0,r.kt)("p",null,"Consider the above; the ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"images")," includes everything inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"images")," folder in the task. However, it's crucial that the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/extend/develop/manifest?view=azure-devops#properties-1"},(0,r.kt)("inlineCode",{parentName:"a"},'"addressable": true'))," is present as well. It's this that makes the files in this ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," URL-addressable. And without that, the images won't be displayed."),(0,r.kt)("p",null,"That's it! We're done! We can have rich, image inclusive, documentation in our custom tasks."),(0,r.kt)("p",null,"A final note: it's possible to specify individual files rather than whole paths in the ",(0,r.kt)("inlineCode",{parentName:"p"},"files")," directory and you might want to do that if you're being very careful around file size. There is a maximum size for a custom task and it's easy to breach it. But by and large I find that \"allowlisting\" a single directory is easier."))}m.isMDXComponent=!0},46486:function(e,t,n){t.Z=n.p+"assets/images/azure-devops-marketplace-b5386b01d361020b17667f20dbf682b1.png"}}]);