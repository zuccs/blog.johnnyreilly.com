"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[75981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,m=u["".concat(s,".").concat(c)]||u[c]||d[c]||a;return n?o.createElement(m,r(r({ref:t},h),{},{components:n})):o.createElement(m,r({ref:t},h))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},65743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>h});n(67294);var o=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const r={title:"TypeScript Definitions, webpack and Module Types",authors:"johnnyreilly",tags:["AMD","DefinitelyTyped","TypeScript","CommonJS"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2017/10/20/typescript-definitions-webpack-and-module-types",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2017-10-20-typescript-definitions-webpack-and-module-types/index.md",source:"@site/blog/2017-10-20-typescript-definitions-webpack-and-module-types/index.md",title:"TypeScript Definitions, webpack and Module Types",description:"A funny thing happened on the way to the registry the other day. Something changed in an npm package I was using and confusion arose. You can read my unfiltered confusion here but here's the slightly clearer explanation.",date:"2017-10-20T00:00:00.000Z",formattedDate:"October 20, 2017",tags:[{label:"AMD",permalink:"/tags/amd"},{label:"DefinitelyTyped",permalink:"/tags/definitely-typed"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"CommonJS",permalink:"/tags/common-js"}],readingTime:3.59,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"TypeScript Definitions, webpack and Module Types",authors:"johnnyreilly",tags:["AMD","DefinitelyTyped","TypeScript","CommonJS"],hide_table_of_contents:!1},prevItem:{title:"The TypeScript webpack PWA",permalink:"/2017/11/19/the-typescript-webpack-pwa"},nextItem:{title:"Working with Extrahop on webpack and ts-loader",permalink:"/2017/10/19/working-with-extrahop-on-webpack-and-ts"}},p={authorsImageUrls:[void 0]},h=[{value:"The TL;DR",id:"the-tldr",level:2},{value:"The DR",id:"the-dr",level:2},{value:"UMD / CommonJS **and** Global exports oh my!",id:"umd--commonjs-and-global-exports-oh-my",level:2},{value:"One Definition to Rule Them All",id:"one-definition-to-rule-them-all",level:2}],u={toc:h};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,o.kt)("wrapper",i({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A funny thing happened on the way to the registry the other day. Something changed in an npm package I was using and confusion arose. You can read my unfiltered confusion ",(0,o.kt)("a",i({parentName:"p"},{href:"https://github.com/Microsoft/TypeScript/issues/18791"}),"here")," but here's the slightly clearer explanation."),(0,o.kt)("h2",i({},{id:"the-tldr"}),"The TL;DR"),(0,o.kt)("p",null,'When modules are imported, your loader will decide which module format it wants to use. CommonJS / AMD etc. The loader decides. It\'s important that the export is of the same "shape" regardless of the module format. For 2 reasons:'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You want to be able to reliably use the module regardless of the choice that your loader has made for which export to use."),(0,o.kt)("li",{parentName:"ol"},"Because when it comes to writing type definition files for modules, there is support for a ",(0,o.kt)("em",{parentName:"li"},"single")," external definition. Not one for each module format.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(22171).Z,width:"398",height:"383"})),(0,o.kt)("h2",i({},{id:"the-dr"}),"The DR"),(0,o.kt)("p",null,"Once upon a time we decided to use ",(0,o.kt)("a",i({parentName:"p"},{href:"https://github.com/MikeMcl/big.js/"}),"big.js")," in our project. It's popular and my old friend ",(0,o.kt)("a",i({parentName:"p"},{href:"https://twitter.com/nycdotnet"}),"Steve Ognibene")," apparently originally wrote the type definitions which can be found ",(0,o.kt)("a",i({parentName:"p"},{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/big.js"}),"here"),". Then the definitions were updated by ",(0,o.kt)("a",i({parentName:"p"},{href:"https://github.com/googol"}),"Miika H\xe4nninen"),". And then there was pain."),(0,o.kt)("h2",i({},{id:"umd--commonjs-and-global-exports-oh-my"}),"UMD / CommonJS ","*","*","and","*","*"," Global exports oh my!"),(0,o.kt)("p",null,"My usage code was as simple as this:"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"import * as BigJs from 'big.js';\nconst lookABigJs = new BigJs(1);\n")),(0,o.kt)("p",null,"If you execute it in a browser it works. It makes me a ",(0,o.kt)("inlineCode",{parentName:"p"},"Big"),". However the TypeScript compiler is ","*","*","not","*","*"," happy. No siree. Nope. It's bellowing at me:"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-ts"}),"[ts] Cannot use 'new' with an expression whose type lacks a call or construct signature.\n")),(0,o.kt)("p",null,'So I think: "Huh! I guess Miika just missed something off when he updated the definition files. No bother. I\'ll fix it." I take a look at how ',(0,o.kt)("inlineCode",{parentName:"p"},"big.js")," exposes itself to the outside world. At the time, thusly:"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"//AMD.\nif (typeof define === 'function' && define.amd) {\n  define(function () {\n    return Big;\n  });\n\n  // Node and other CommonJS-like environments that support module.exports.\n} else if (typeof module !== 'undefined' && module.exports) {\n  module.exports = Big;\n  module.exports.Big = Big;\n  //Browser.\n} else {\n  global.Big = Big;\n}\n")),(0,o.kt)("p",null,"Now, we were using webpack as our script bundler / loader. webpack is supersmart; it can take all kinds of module formats. So although it's more famous for supporting CommonJS, it can roll with AMD. That's exactly what's happening here. When webpack encounters the above code, it goes with the AMD export. So at runtime, ",(0,o.kt)("inlineCode",{parentName:"p"},"import * as BigJs from 'big.js';")," lands up resolving to the ",(0,o.kt)("inlineCode",{parentName:"p"},"return Big;")," above."),(0,o.kt)("p",null,"Now this turns out to be super-relevant. I took a look at the relevant portion of the definition file and found this:"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"export const Big: BigConstructor;\n")),(0,o.kt)("p",null,"Which tells me that ",(0,o.kt)("inlineCode",{parentName:"p"},"Big")," is being exported as a subproperty of the module. That makes sense; that lines up with the ",(0,o.kt)("inlineCode",{parentName:"p"},"module.exports.Big = Big;"),' statement in the the big.js source code. There\'s a "gotcha" coming; can you guess what it is?'),(0,o.kt)("p",null,"The problem is that our type definition is not exposing ",(0,o.kt)("inlineCode",{parentName:"p"},"Big")," as a default export. So even though it's there; TypeScript won't let us use it. What's killing us further is that webpack is loading the AMD export which ",(0,o.kt)("em",{parentName:"p"},"doesn't")," have ",(0,o.kt)("inlineCode",{parentName:"p"},"Big")," as a subproperty of the module. It only has it as a default."),(0,o.kt)("p",null,(0,o.kt)("a",i({parentName:"p"},{href:"https://twitter.com/kitsonk"}),"Kitson Kelly")," expressed the problem well when he said:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"there is a different shape depending on which loader is being used and I am not sure that makes a huge amount of sense. The AMD shape is different than the CommonJS shape. While that is technically possible, that feels like that is an issue.")),(0,o.kt)("h2",i({},{id:"one-definition-to-rule-them-all"}),"One Definition to Rule Them All"),(0,o.kt)("p",null,'He\'s right; it is an issue. From a TypeScript perspective there is no way to write a definition file that allows for different module "shapes" depending upon the module type. If you really wanted to do that you\'re reduced to writing multiple definition files. That\'s blind alley anyway; what you want is a module to expose itself with the same "shape" regardless of the module type. What you want is this:'),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AMD === CommonJS === Global")),(0,o.kt)("p",null,"And that's what we now have! Thanks to ",(0,o.kt)("a",i({parentName:"p"},{href:"https://github.com/mikemcl"}),"Michael McLaughlin"),", author of big.js, ",(0,o.kt)("a",i({parentName:"p"},{href:"https://github.com/MikeMcl/big.js/pull/87#issuecomment-332663587"}),"version 4.0 unified the export shape of the package"),". Miika H\xe4nninen submitted another ",(0,o.kt)("a",i({parentName:"p"},{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/pull/20096"}),"PR")," which fixed up the type definitions. And once again the world is a beautiful place!"))}d.isMDXComponent=!0},22171:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/one-definition-to-rule-them-all-d818d30587f50c0d0b031f572d382da0.webp"}}]);