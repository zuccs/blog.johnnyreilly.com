"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[62349],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),g=c(n),f=r,h=g["".concat(s,".").concat(f)]||g[f]||u[f]||i;return n?o.createElement(h,a(a({ref:t},l),{},{components:n})):o.createElement(h,a({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},86895:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});n(67294);var o=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const a={title:"Azure App Service: nested configuration for ASP.NET running in Web App for Containers using Application Settings",authors:"johnnyreilly",tags:[],image:"./appservice_classic.png",hide_table_of_contents:!1},p=void 0,s={permalink:"/2018/07/28/azure-app-service-web-app-containers-asp-net-nested-configuration",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2018-07-28-azure-app-service-web-app-containers-asp-net-nested-configuration/index.md",source:"@site/blog/2018-07-28-azure-app-service-web-app-containers-asp-net-nested-configuration/index.md",title:"Azure App Service: nested configuration for ASP.NET running in Web App for Containers using Application Settings",description:"How can we configure an ASP.NET application with nested properties Azure App Service Web App for Containers using Application Settings in Azure? Colons don't work.",date:"2018-07-28T00:00:00.000Z",formattedDate:"July 28, 2018",tags:[],readingTime:1.89,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Azure App Service: nested configuration for ASP.NET running in Web App for Containers using Application Settings",authors:"johnnyreilly",tags:[],image:"./appservice_classic.png",hide_table_of_contents:!1},prevItem:{title:"Using TypeScript and webpack alias: goodbye relative paths",permalink:"/2018/08/21/typescript-webpack-alias-goodbye-relative-paths"},nextItem:{title:"Cypress and Auth0",permalink:"/2018/07/09/cypress-and-auth0"}},c={image:n(60).Z,authorsImageUrls:[void 0]},l=[{value:"Containers on App Service",id:"containers-on-app-service",level:2},{value:"The Mystery of Configuration",id:"the-mystery-of-configuration",level:2},{value:"How do we configure without colons?",id:"how-do-we-configure-without-colons",level:2}],u={toc:l};function g(e){var{components:t}=e,a=i(e,["components"]);return(0,o.kt)("wrapper",r({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"How can we configure an ASP.NET application with nested properties ",(0,o.kt)("a",r({parentName:"p"},{href:"https://azure.microsoft.com/en-gb/services/app-service/containers/"}),"Azure App Service Web App for Containers")," using Application Settings in Azure? Colons don't work."),(0,o.kt)("h2",r({},{id:"containers-on-app-service"}),"Containers on App Service"),(0,o.kt)("p",null,"App Services have long been a super simple way to spin up a web app in Azure. The barrier to entry is low, maintenance is easy. It just works. App Services recently got a turbo boost in the form of ",(0,o.kt)("a",r({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/app-service/containers/app-service-linux-intro"}),"Azure App Service on Linux"),". Being able to deploy to Linux is exciting enough; but another reason this is notable because ",(0,o.kt)("a",r({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/app-service/containers/tutorial-custom-docker-image"}),"you can deploy Docker images that will be run as app services"),"."),(0,o.kt)("p",null,"I cannot over-emphasise just how easy this makes getting a Docker image into Production. Yay Azure!"),(0,o.kt)("h2",r({},{id:"the-mystery-of-configuration"}),"The Mystery of Configuration"),(0,o.kt)("p",null,"Applications need configuration. ASP.Net Core applications are typically configured by an ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," file which might look like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "Parent": {\n    "ChildOne": "I\'m a little teapot",\n    "ChildTwo": "Short and stout"\n  }\n}\n')),(0,o.kt)("p",null,"With a classic App Service you could override a setting in the ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json"),' by updating "Application settings" within the Azure portal. You\'d do this in the style of creating an Application setting called ',(0,o.kt)("inlineCode",{parentName:"p"},"Parent:ChildOne")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Parent:ChildTwo"),". To be clear: using colons to target a specific piece of config."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of an App Service Application Settings in the Azure Portal, nested properties configured using colons",src:n(60).Z,width:"640",height:"336"})),(0,o.kt)("p",null,"You can read about this approach ",(0,o.kt)("a",r({parentName:"p"},{href:"https://blogs.msdn.microsoft.com/waws/2018/06/12/asp-net-core-settings-for-azure-app-service/"}),"here"),". Now there's something I want you to notice; consider the colons below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of an App Service specific Application Setting nested property configured using colons - all good",src:n(70401).Z,width:"584",height:"96"})),(0,o.kt)("p",null,"If you try and follow the same steps when you're using Web App for Containers / i.e. ",(0,o.kt)("a",r({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/app-service/containers/app-service-linux-intro"}),"a Docker image deployed to an Azure App Service on Linux ")," you ",(0,o.kt)("strong",{parentName:"p"},"cannot")," use colons:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of a Web App for Containers specific Application Setting nested property configured using colons - errors",src:n(91434).Z,width:"640",height:"65"})),(0,o.kt)("p",null,"When you hover over the error you see this message: ",(0,o.kt)("inlineCode",{parentName:"p"},'This field can only contain letters, numbers (0-9), periods ("."), and underscores ("_")'),". Using ",(0,o.kt)("inlineCode",{parentName:"p"},".")," does not work alas."),(0,o.kt)("h2",r({},{id:"how-do-we-configure-without-colons"}),"How do we configure without colons?"),(0,o.kt)("p",null,"It's simple. Where you would use ",(0,o.kt)("inlineCode",{parentName:"p"},":")," on a classic App Service, you should use a ",(0,o.kt)("inlineCode",{parentName:"p"},"__")," (double underscore) on an App Service with containers. So ",(0,o.kt)("inlineCode",{parentName:"p"},"Parent__ChildOne")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"Parent:ChildOne"),". It's as simple as that."))}g.isMDXComponent=!0},60:function(e,t,n){t.Z=n.p+"assets/images/appservice_classic-99839c88fbdbcd542db5c47aaa4efe02.png"},70401:function(e,t){t.Z="data:image/png;base64,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"},91434:function(e,t){t.Z="data:image/png;base64,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"}}]);