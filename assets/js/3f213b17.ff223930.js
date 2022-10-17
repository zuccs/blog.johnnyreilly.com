"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[54629],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,b=u["".concat(p,".").concat(h)]||u[h]||k[h]||o;return r?n.createElement(b,l(l({ref:t},s),{},{components:r})):n.createElement(b,l({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9361:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"webpack 4 - ts-loader / fork-ts-checker-webpack-plugin betas",authors:"johnnyreilly",tags:["fork-ts-checker-webpack-plugin","ts-loader","Webpack"],hide_table_of_contents:!1},i=void 0,p={permalink:"/2018/01/28/webpack-4-ts-loader-fork-ts-checker",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2018-01-28-webpack-4-ts-loader-fork-ts-checker/index.md",source:"@site/blog/2018-01-28-webpack-4-ts-loader-fork-ts-checker/index.md",title:"webpack 4 - ts-loader / fork-ts-checker-webpack-plugin betas",description:"The first webpack 4 beta dropped on Friday. Very exciting! Following hot on the heels of those announcements, I've some news to share too. Can you guess what it is?",date:"2018-01-28T00:00:00.000Z",formattedDate:"January 28, 2018",tags:[{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"ts-loader",permalink:"/tags/ts-loader"},{label:"Webpack",permalink:"/tags/webpack"}],readingTime:.985,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"webpack 4 - ts-loader / fork-ts-checker-webpack-plugin betas",authors:"johnnyreilly",tags:["fork-ts-checker-webpack-plugin","ts-loader","Webpack"],hide_table_of_contents:!1},prevItem:{title:"Finding webpack 4 (use a Map)",permalink:"/2018/01/29/finding-webpack-4-use-map"},nextItem:{title:"Auth0, TypeScript and ASP.NET Core",permalink:"/2018/01/14/auth0-typescript-and-aspnet-core"}},c={authorsImageUrls:[void 0]},s=[{value:"<code>ts-loader</code>",id:"ts-loader",level:2},{value:"<code>fork-ts-checker-webpack-plugin</code>",id:"fork-ts-checker-webpack-plugin",level:2},{value:"PRs",id:"prs",level:2}],k={toc:s};function u(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},k,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"https://medium.com/webpack/webpack-4-beta-try-it-today-6b1d27d7d7e2"}),"The first webpack 4 beta dropped on Friday"),". Very exciting! Following hot on the heels of those announcements, I've some news to share too. Can you guess what it is?"),(0,n.kt)("h2",a({},{id:"ts-loader"}),(0,n.kt)("inlineCode",{parentName:"h2"},"ts-loader")),(0,n.kt)("p",null,"Yes! The ",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader"}),(0,n.kt)("inlineCode",{parentName:"a"},"ts-loader"))," beta to work with webpack 4 is available. To get hold of the beta:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When using ",(0,n.kt)("inlineCode",{parentName:"li"},"yarn"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"yarn add ts-loader@4.0.0-beta.0 -D")),(0,n.kt)("li",{parentName:"ul"},"When using ",(0,n.kt)("inlineCode",{parentName:"li"},"npm"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"npm install ts-loader@4.0.0-beta.0 -D"))),(0,n.kt)("p",null,"Remember to use this in concert with the webpack 4 beta. To see a working example take a look at ",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/johnnyreilly/ts-loader/tree/master/examples/vanilla"}),'the "vanilla" example'),"."),(0,n.kt)("h2",a({},{id:"fork-ts-checker-webpack-plugin"}),(0,n.kt)("inlineCode",{parentName:"h2"},"fork-ts-checker-webpack-plugin")),(0,n.kt)("p",null,"There's more! You may like to use the ",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin"}),(0,n.kt)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin")),", (which goes lovely with ",(0,n.kt)("inlineCode",{parentName:"p"},"ts-loader")," and a biscuit). There is a beta available for that too:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When using ",(0,n.kt)("inlineCode",{parentName:"li"},"yarn"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"yarn add johnnyreilly/fork-ts-checker-webpack-plugin#4.0.0-beta.1 -D")),(0,n.kt)("li",{parentName:"ul"},"When using ",(0,n.kt)("inlineCode",{parentName:"li"},"npm"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"npm install johnnyreilly/fork-ts-checker-webpack-plugin#4.0.0-beta.1 -D"))),(0,n.kt)("p",null,"To see a working example take a look at ",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/johnnyreilly/ts-loader/tree/master/examples/fork-ts-checker"}),'the "fork-ts-checker" example'),"."),(0,n.kt)("h2",a({},{id:"prs"}),"PRs"),(0,n.kt)("p",null,"If you would like to track the progress of these betas then I encourage you to take a look at the PRs they were built from. The ts-loader PR can be found ",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/pull/710"}),"here"),". The fork-ts-checker-webpack-plugin PR can be found ",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/pull/93"}),"here"),"."),(0,n.kt)("p",null,"These are betas so things may change further; though hopefully not significantly."))}u.isMDXComponent=!0}}]);