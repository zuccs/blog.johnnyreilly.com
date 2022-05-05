"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[654],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,y=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(y,i(i({ref:t},c),{},{components:n})):o.createElement(y,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27847:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"TypeScript: Spare the Rod, Spoil the Code",authors:"johnnyreilly",tags:["tsconfig.json","TypeScript"],hide_table_of_contents:!1},l=void 0,p={permalink:"/2017/05/20/typescript-spare-rod-spoil-code",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-05-20-typescript-spare-rod-spoil-code/index.md",source:"@site/blog/2017-05-20-typescript-spare-rod-spoil-code/index.md",title:"TypeScript: Spare the Rod, Spoil the Code",description:"I've recently started a new role. Perhaps unsurprisingly, part of the technology stack is TypeScript. A couple of days into the new codebase I found a bug. Well, I say I found a bug, TypeScript and VS Code found the bug - I just let everyone else know.",date:"2017-05-20T00:00:00.000Z",formattedDate:"May 20, 2017",tags:[{label:"tsconfig.json",permalink:"/tags/tsconfig-json"},{label:"TypeScript",permalink:"/tags/type-script"}],readingTime:2.075,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"TypeScript: Spare the Rod, Spoil the Code",authors:"johnnyreilly",tags:["tsconfig.json","TypeScript"],hide_table_of_contents:!1},prevItem:{title:"Windows Defender Step Away From npm",permalink:"/2017/06/11/windows-defender-step-away-from-npm"},nextItem:{title:"Setting Build Version Using AppVeyor and ASP.Net Core",permalink:"/2017/04/25/setting-build-version-using-appveyor"}},c={authorsImageUrls:[void 0]},u=[],d={toc:u};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I've recently started a new role. Perhaps unsurprisingly, part of the technology stack is TypeScript. A couple of days into the new codebase I found a bug. Well, I say I found a bug, TypeScript and VS Code found the bug - I just let everyone else know."),(0,a.kt)("p",null,'The flexibility that TypeScript offers in terms of compiler settings is second to none. You can turn up the dial of strictness to your hearts content. Or down. I\'m an "up" man myself.'),(0,a.kt)("p",null,"The project that I am working on has the dial set fairly low; it's pretty much using the default compiler values which are (sensibly) not too strict. I have to say this makes sense for helping people get on board with using TypeScript. Start from a point of low strictness and turn it up when you're ready. As you might have guessed, I cranked the dial up on day one on my own machine. I should say that as I did this, I didn't foist this on the project at large - I kept it just to my build... I'm not ","*",(0,a.kt)("strong",{parentName:"p"},"that"),"*"," guy!"),(0,a.kt)("p",null,"I made the below changes to the ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file. Details of what each of these settings does can be found in the documentation ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"noImplicitAny": true,\n    "noImplicitThis": true,\n    "noUnusedLocals": true,\n    "noImplicitReturns": true,\n    "noUnusedParameters": true,\n')),(0,a.kt)("p",null,"I said I found a bug. The nature of the bug was an unused variable; a variable was created in a function but then not used. Here's a super simple example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function sayHi(name: string) {\n  const greeting = `Hi ${name}`;\n  return name;\n}\n")),(0,a.kt)("p",null,"It's an easy mistake to make. I've made this mistake before myself. But with the ",(0,a.kt)("inlineCode",{parentName:"p"},"noUnusedLocals")," compiler setting in place it's now an easy mistake to catch; VS Code lets you know loud and clear:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(20696).Z,width:"400",height:"196"})),(0,a.kt)("p",null,"The other compiler settings will similarly highlight simple mistakes it's possible to make and I'd recommend using them. I should say I've written this from the perspective of a VS Code user, but this really applies generally to TypeScript usage. So whether you're an ",(0,a.kt)("a",{parentName:"p",href:"http://alm.tools/"},"alm.tools")," guy, a WebStorm gal or something else entirely then this too can be yours!"),(0,a.kt)("p",null,"I'd also say that the ",(0,a.kt)("inlineCode",{parentName:"p"},"strictNullChecks")," compiler setting is worth looking into. However, switching an already established project to using that can involve fairly extensive code changes and will also require a certain amount of education of, and buy in from, your team. So whilst I'd recommend it too, I'd save that one until last."))}h.isMDXComponent=!0},20696:function(e,t,n){t.Z=n.p+"assets/images/Screenshot-2017-05-20-05.58.54-876e68c80aeb71212ef3062aeeba907f.png"}}]);