"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[79936],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),y=c(n),f=i,h=y["".concat(p,".").concat(f)]||y[f]||u[f]||o;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=y;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},32636:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),l=["components"],a={title:"TypeScript: Don't forget Build Action for Implicit Referencing...",authors:"johnnyreilly",tags:["TypeScriptCompile","BuildAction","DefinitelyTyped","TypeScript","NuGet"],hide_table_of_contents:!1},p=void 0,c={permalink:"/2013/11/04/typescript-dont-forget-build-action-for-implicit-referencing",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-11-04-typescript-dont-forget-build-action-for-implicit-referencing/index.md",source:"@site/blog/2013-11-04-typescript-dont-forget-build-action-for-implicit-referencing/index.md",title:"TypeScript: Don't forget Build Action for Implicit Referencing...",description:"As part of the known breaking changes between 0.9 and 0.9.1 there was this subtle but significant switch:",date:"2013-11-04T00:00:00.000Z",formattedDate:"November 4, 2013",tags:[{label:"TypeScriptCompile",permalink:"/tags/type-script-compile"},{label:"BuildAction",permalink:"/tags/build-action"},{label:"DefinitelyTyped",permalink:"/tags/definitely-typed"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"NuGet",permalink:"/tags/nu-get"}],readingTime:1.955,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"TypeScript: Don't forget Build Action for Implicit Referencing...",authors:"johnnyreilly",tags:["TypeScriptCompile","BuildAction","DefinitelyTyped","TypeScript","NuGet"],hide_table_of_contents:!1},prevItem:{title:"Rolling your own confirm mechanism using Promises and jQuery UI",permalink:"/2013/11/26/rolling-your-own-confirm-mechanism"},nextItem:{title:"Getting TypeScript Compile-on-Save and Continuous Integration to play nice",permalink:"/2013/10/30/getting-typescript-compile-on-save-and-continous-integration-to-play-nice"}},s={authorsImageUrls:[void 0]},u=[{value:"Wrong!",id:"wrong",level:2}],y={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As part of the ",(0,o.kt)("a",{parentName:"p",href:"https://typescript.codeplex.com/wikipage?title=Known%20breaking%20changes%20between%200.8%20and%200.9&referringTitle=Documentation"},"known breaking changes between 0.9 and 0.9.1")," there was this subtle but significant switch:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In Visual Studio, all TypeScript files in a project are considered to be referencing each other"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Description:")," Previously, all TypeScript files in a project had to reference each other explicitly. With 0.9.1, they now implicitly reference all other TypeScript files in the project. For existing projects that fit multiple projects into a single projects, these will now have to be separate projects."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Reason:")," This greatly simplifies using TypeScript in the project context.")),(0,o.kt)("p",null,"Having been ",(0,o.kt)("a",{parentName:"p",href:"https://typescript.codeplex.com/workitem/1471"},"initially resistant")," to this change I recently decided to give it a try. That is to say I started pulling out the ",(0,o.kt)("inlineCode",{parentName:"p"},"/// &lt;reference"),"'s from my TypeScript files. However, to my surprise, pulling out these references stopped my TypeScript from compiling and killed my Intellisense. After wrestling with this for a couple of hours I finally ",(0,o.kt)("a",{parentName:"p",href:"https://typescript.codeplex.com/workitem/1855"},"filed an issue on the TypeScript CodePlex site"),". (Because clearly the problem was with TypeScript and not how I was using it, right?)"),(0,o.kt)("h2",{id:"wrong"},"Wrong!"),(0,o.kt)("p",null,"When I looked through my typing files (","*",'.d.ts) I found that, pretty much without exception, all had a Build Action of "Content" and not "TypeScriptCompile". I went through the project and switched the files over to being "TypeScriptCompile". This resolved the issue and I was then able to pull out the remaining ',(0,o.kt)("inlineCode",{parentName:"p"},"/// &lt;reference")," comments from the codebase (though I did have to restart Visual Studio to get the Intellisense working)."),(0,o.kt)("p",null,"Most, if not all, of the typing files had been pulled in from NuGet and are part of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/borisyankov/DefinitelyTyped"},"DefinitelyTyped"),' project on GitHub. Unfortunately, at present, when TypeScript NuGet packages are added they are added without the "TypeScriptCompile" Build Action. I was going to post an issue there and ask if it\'s possible for NuGet packages to pull in typings files as "TypeScriptCompile" from the off - fortunately a chap called Natan Vivo ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/borisyankov/DefinitelyTyped/issues/1138"},"already has"),"."),(0,o.kt)("p",null,"So until this issue is resolved it's probably a good idea to check that your TypeScript files are set to the correct Build Action in your project. And every time you upgrade your TypeScript NuGet packages double check that you still have the correct Build Action afterwards (and to get Intellisense working in VS 2012 at least you'll need to close and re-open the solution as well)."))}f.isMDXComponent=!0}}]);