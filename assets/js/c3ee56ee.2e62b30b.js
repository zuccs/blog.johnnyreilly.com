"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[87525],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return h}});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function p(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):p(p({},t),e)),i},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(i),h=o,y=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return i?n.createElement(y,p(p({ref:t},c),{},{components:i})):n.createElement(y,p({ref:t},c))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,p=new Array(r);p[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var s=2;s<r;s++)p[s]=i[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},84105:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return h}});var n=i(87462),o=i(63366),r=(i(67294),i(3905)),p=["components"],a={title:"Getting TypeScript Compile-on-Save and Continuous Integration to play nice",authors:"johnnyreilly",tags:["TFS","TypeScript","Build Server","Continuous Integration"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2013/10/30/getting-typescript-compile-on-save-and-continous-integration-to-play-nice",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-10-30-getting-typescript-compile-on-save-and-continous-integration-to-play-nice.md",source:"@site/blog/2013-10-30-getting-typescript-compile-on-save-and-continous-integration-to-play-nice.md",title:"Getting TypeScript Compile-on-Save and Continuous Integration to play nice",description:'Well sort of... Perhaps this post should more accurately called "How to get CI to ignore your TypeScript whilst Visual Studio still compiles it..."',date:"2013-10-30T00:00:00.000Z",formattedDate:"October 30, 2013",tags:[{label:"TFS",permalink:"/tags/tfs"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"Build Server",permalink:"/tags/build-server"},{label:"Continuous Integration",permalink:"/tags/continuous-integration"}],readingTime:3.925,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"TypeScript: Don't forget Build Action for Implicit Referencing...",permalink:"/2013/11/04/typescript-dont-forget-build-action-for-implicit-referencing"},nextItem:{title:"Migrating from jquery.validate.unobtrusive.js to jQuery.Validation.Unobtrusive.Native",permalink:"/2013/10/04/migrating-from-jquery.validate.unobtrusive.js-to-jQuery.Validation.Unobtrusive.Native"}},c={authorsImageUrls:[void 0]},u=[{value:"Once there was Web Essentials",id:"once-there-was-web-essentials",children:[],level:2},{value:"But there is still Compile on Save hope!",id:"but-there-is-still-compile-on-save-hope",children:[],level:2},{value:"So what now?",id:"so-what-now",children:[],level:2},{value:"A solution",id:"a-solution",children:[],level:2},{value:"Final thoughts",id:"final-thoughts",children:[],level:2}],d={toc:u};function h(e){var t=e.components,i=(0,o.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Well sort of... Perhaps this post should more accurately called "How to get CI to ignore your TypeScript whilst Visual Studio still compiles it..."'),(0,r.kt)("h2",{id:"once-there-was-web-essentials"},"Once there was Web Essentials"),(0,r.kt)("p",null,"When I first started using TypeScript, I was using it in combination with Web Essentials. Those were happy days. I saved my TS file and Web Essentials would kick off TypeScript compilation. Ah bliss. But the good times couldn't last forever and sure enough when version 3.0 of Web Essentials shipped it ",(0,r.kt)("a",{parentName:"p",href:"http://madskristensen.net/post/Web-Essentials-2013-Where-is-the-TypeScript-support"},"pulled support for TypeScript"),"."),(0,r.kt)("p",null,"This made me, ",(0,r.kt)("a",{parentName:"p",href:"https://typescript.codeplex.com/workitem/1616"},"and others"),", very sad. Essentially we were given the choice between sticking with an old version of Web Essentials (2.9 - the last release before 3.0) and keeping our Compile-on-Save ","*",(0,r.kt)("strong",{parentName:"p"},"or"),"*"," keeping with the latest version of Web Essentials and losing it. And since I understood that newer versions of TypeScript had differences in the compiler flags which slightly broke compatibility with WE 2.9 the latter choice seemed the most sensible..."),(0,r.kt)("h2",{id:"but-there-is-still-compile-on-save-hope"},"But there is still Compile on Save hope!"),(0,r.kt)("p",null,"The information was that we need not lose our Compile on Save. We just need to follow the instructions ",(0,r.kt)("a",{parentName:"p",href:"https://typescript.codeplex.com/wikipage?title=Compile-on-Save"},"here"),". Or to quote them:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Then additionally add (or replace if you had an older PreBuild action for TypeScript) the following at the end of your project file to include TypeScript compilation in your project."),(0,r.kt)("p",{parentName:"blockquote"},"..."),(0,r.kt)("p",{parentName:"blockquote"},"For C#-style projects (.csproj):"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<PropertyGroup Condition=\"'$(Configuration)' == 'Debug'\">\n    <TypeScriptTarget>ES5</TypeScriptTarget>\n    <TypeScriptIncludeComments>true</TypeScriptIncludeComments>\n    <TypeScriptSourceMap>true</TypeScriptSourceMap>\n  </PropertyGroup>\n  <PropertyGroup Condition=\"'$(Configuration)' == 'Release'\">\n    <TypeScriptTarget>ES5</TypeScriptTarget>\n    <TypeScriptIncludeComments>false</TypeScriptIncludeComments>\n    <TypeScriptSourceMap>false</TypeScriptSourceMap>\n  </PropertyGroup>\n  <Import Project=\"$(MSBuildExtensionsPath32)\\Microsoft\\VisualStudio\\v$(VisualStudioVersion)\\TypeScript\\Microsoft.TypeScript.targets\" />\n"))),(0,r.kt)("p",null,"I followed these instructions (well I had to tweak the ",(0,r.kt)("inlineCode",{parentName:"p"},"Import Project")," location) and I was in business again. But I when I came to check my code into TFS I came unstuck. The automated build kicked off and then, in short order, kicked me:"),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},'C:\\Builds\\1\\MyApp\\MyApp Continuous Integration\\src\\MyApp\\MyApp.csproj (1520): The imported project "C:\\Program Files (x86)\\MSBuild\\Microsoft\\VisualStudio\\v11.0\\TypeScript\\Microsoft.TypeScript.targets" was not found. Confirm that the path in the <import> declaration is correct, and that the file exists on disk.\nC:\\Builds\\1\\MyApp\\MyApp Continuous Integration\\src\\MyApp\\MyApp.csproj (1520): The imported project "C:\\Program Files (x86)\\MSBuild\\Microsoft\\VisualStudio\\v11.0\\TypeScript\\Microsoft.TypeScript.targets" was not found. Confirm that the path in the <import> declaration is correct, and that the file exists on disk.\n</import></import>\n'))),(0,r.kt)("p",null,"That's right, TypeScript wasn't installed on the build server. And since TypeScript was now part of the build process my builds were now failing. Ouch."),(0,r.kt)("h2",{id:"so-what-now"},"So what now?"),(0,r.kt)("p",null,"I did a little digging and found ",(0,r.kt)("a",{parentName:"p",href:"https://typescript.codeplex.com/workitem/1518"},"this issue report on the TypeScript CodePlex site"),". To quote the issue, it seemed there were 2 possible solutions to get continuous integration and typescript playing nice:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install TypeScript on the build server"),(0,r.kt)("li",{parentName:"ol"},"Copy the required files for Microsoft.TypeScript.targets to a different source-controlled folder and change the path references in the csproj file to this folder.")),(0,r.kt)("p",null,"#","1 wasn't an option for us - we couldn't install on the build server. And covering both #1 and #2, I wasn't particularly inclined to kick off builds on the build server since I was wary of ",(0,r.kt)("a",{parentName:"p",href:"https://typescript.codeplex.com/workitem/1432"},"reported problems with memory leaks")," etc with the TS compiler. I may feel differently later when TS is no longer in Alpha and has stabilised but it didn't seem like the right time."),(0,r.kt)("h2",{id:"a-solution"},"A solution"),(0,r.kt)("p",null,"So, to sum up, what I wanted was to be able to compile TypeScript in Visual Studio on my machine, and indeed in VS on the machine of anyone else working on the project. But I ","*",(0,r.kt)("strong",{parentName:"p"},"didn't"),"*"," want TypeScript compilation to be part of the build process on the server."),(0,r.kt)("p",null,"The solution in the end was pretty simple - I replaced the ",(0,r.kt)("inlineCode",{parentName:"p"},".csproj")," changes with the code below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<PropertyGroup Condition=\"'$(Configuration)' == 'Debug'\">\n    <TypeScriptTarget>ES5</TypeScriptTarget>\n    <TypeScriptRemoveComments>false</TypeScriptRemoveComments>\n    <TypeScriptSourceMap>false</TypeScriptSourceMap>\n    <TypeScriptModuleKind>AMD</TypeScriptModuleKind>\n    <TypeScriptNoImplicitAny>true</TypeScriptNoImplicitAny>\n  </PropertyGroup>\n  <PropertyGroup Condition=\"'$(Configuration)' == 'Release'\">\n    <TypeScriptTarget>ES5</TypeScriptTarget>\n    <TypeScriptRemoveComments>false</TypeScriptRemoveComments>\n    <TypeScriptSourceMap>false</TypeScriptSourceMap>\n    <TypeScriptModuleKind>AMD</TypeScriptModuleKind>\n    <TypeScriptNoImplicitAny>true</TypeScriptNoImplicitAny>\n  </PropertyGroup>\n  <Import Project=\"$(VSToolsPath)\\TypeScript\\Microsoft.TypeScript.targets\" Condition=\"Exists('$(VSToolsPath)\\TypeScript\\Microsoft.TypeScript.targets')\" />\n")),(0,r.kt)("p",null,"What this does is enable TypeScript compilation ","*",(0,r.kt)("strong",{parentName:"p"},"only"),"*"," if TypeScript is installed. So when I'm busy developing with Visual Studio on my machine with the plugin installed I can compile TypeScript. But when I check in the TypeScript compilation is ","*",(0,r.kt)("strong",{parentName:"p"},"not"),"*"," performed on the build server. This is because TypeScript is not installed on the build server and we are only compiling if it is installed. (Just to completely labour the point.)"),(0,r.kt)("h2",{id:"final-thoughts"},"Final thoughts"),(0,r.kt)("p",null,"I do consider this an interim solution. As I mentioned earlier, when TypeScript has stabilised I think I'd like TS compilation to be part of the build process. Like with any other code I think compiling on check-in to catch bugs early is an excellent idea. But I think I'll wait until there's some clearer guidance on the topic from the TypeScript team before I take this step."))}h.isMDXComponent=!0}}]);