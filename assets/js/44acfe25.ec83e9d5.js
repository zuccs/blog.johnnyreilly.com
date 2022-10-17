"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[91140],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"TFS 2012, .NET 4.5 and C# 6",authors:"johnnyreilly",tags:["C# 6",".Net 4.5","TFS 2012"],hide_table_of_contents:!1},i=void 0,s={permalink:"/2016/02/01/tfs-2012-net-45-and-c-6",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2016-02-01-tfs-2012-net-45-and-c-6/index.md",source:"@site/blog/2016-02-01-tfs-2012-net-45-and-c-6/index.md",title:"TFS 2012, .NET 4.5 and C# 6",description:"So, you want to use C# 6 language features and you\u2019re working on an older project that\u2019s still rocking .NET 4.5. Well, with some caveats, you can.",date:"2016-02-01T00:00:00.000Z",formattedDate:"February 1, 2016",tags:[{label:"C# 6",permalink:"/tags/c-6"},{label:".Net 4.5",permalink:"/tags/net-4-5"},{label:"TFS 2012",permalink:"/tags/tfs-2012"}],readingTime:.85,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"TFS 2012, .NET 4.5 and C# 6",authors:"johnnyreilly",tags:["C# 6",".Net 4.5","TFS 2012"],hide_table_of_contents:!1},prevItem:{title:"Visual Studio, tsconfig.json and external TypeScript compilation",permalink:"/2016/02/19/visual-studio-tsconfigjson-and-external"},nextItem:{title:"Coded UI and the Curse of the Docking Station",permalink:"/2016/01/14/coded-ui-and-curse-of-docking-station"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p};function d(e){var{components:t}=e,l=a(e,["components"]);return(0,r.kt)("wrapper",o({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"So, you want to use C# 6 language features and you\u2019re working on an older project that\u2019s still rocking .NET 4.5. Well, with ",(0,r.kt)("a",o({parentName:"p"},{href:"http://stackoverflow.com/a/28921749/761388"}),"some caveats"),", you can."),(0,r.kt)("p",null,"The new compiler will compile targeting older framework versions. Well that\u2019s all lovely; let\u2019s all go home."),(0,r.kt)("p",null,"Now. What say you\u2019ve got an old, old build server? It\u2019s TFS 2012 Update 2, creaking away, still glad to alive and kind of wondering why it hasn\u2019t been upgraded or retired. This is where you want to compile .NET 4.5 from C# 6. Well it can be done. Here\u2019s how it\u2019s done:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install Visual Studio 2015 on the build server (I\u2019m told this can be achieved using ",(0,r.kt)("a",o({parentName:"li"},{href:"https://www.microsoft.com/en-us/download/details.aspx?id=48159"}),"Microsoft Build Tools 2015")," but I haven\u2019t tried it myelf so caveat emptor)"),(0,r.kt)("li",{parentName:"ol"},"set the ",(0,r.kt)("inlineCode",{parentName:"li"},"MSBuild Arguments")," in the build definition to ",(0,r.kt)("inlineCode",{parentName:"li"},"/p:VisualStudioVersion=14.0")," (i.e. Visual Studio 2015 mode)")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(35350).Z,width:"640",height:"449"})),(0,r.kt)("ol",o({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"in each project that uses C# 6 syntax, install the NuGet package ",(0,r.kt)("a",o({parentName:"li"},{href:"https://www.nuget.org/packages/Microsoft.Net.Compilers"}),"Microsoft.Net.Compilers")," with a quick ",(0,r.kt)("inlineCode",{parentName:"li"},"install-package Microsoft.Net.Compilers"))),(0,r.kt)("p",null,"That\u2019s it; huzzah! String interpolation here I come\u2026"))}d.isMDXComponent=!0},35350:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/EditBuildConfiguration-02ee84f7299e95e7a6ddac935157a8ac.png"}}]);