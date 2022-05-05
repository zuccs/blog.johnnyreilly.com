"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[30315],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),m=i,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},26263:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={title:"IE 10 Install Torches JavaScript Debugging in Visual Studio 2012 Through Auto Update (Probably)",authors:"johnnyreilly",tags:["Visual Studio 2012","JavaScript debugging","IE 10"],hide_table_of_contents:!1},s=void 0,u={permalink:"/2013/04/17/ie-10-install-torches-javascript",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-04-17-ie-10-install-torches-javascript/index.md",source:"@site/blog/2013-04-17-ie-10-install-torches-javascript/index.md",title:"IE 10 Install Torches JavaScript Debugging in Visual Studio 2012 Through Auto Update (Probably)",description:"OK the title of this post is a little verbose. I've just wasted a morning of my life trying to discover what happened to my ability to debug JavaScript in Visual Studio 2012. If you don't want to experience the same pain then read on...",date:"2013-04-17T00:00:00.000Z",formattedDate:"April 17, 2013",tags:[{label:"Visual Studio 2012",permalink:"/tags/visual-studio-2012"},{label:"JavaScript debugging",permalink:"/tags/java-script-debugging"},{label:"IE 10",permalink:"/tags/ie-10"}],readingTime:1.17,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"IE 10 Install Torches JavaScript Debugging in Visual Studio 2012 Through Auto Update (Probably)",authors:"johnnyreilly",tags:["Visual Studio 2012","JavaScript debugging","IE 10"],hide_table_of_contents:!1},prevItem:{title:"A navigation animation (for your users delectation)",permalink:"/2013/04/26/a-navigation-animation-for-your-users"},nextItem:{title:"Making IE 10's clear field (X) button and jQuery UI autocomplete play nice",permalink:"/2013/04/09/making-ie-10s-clear-field-x-button-and"}},c={authorsImageUrls:[void 0]},p=[{value:"The Symptoms",id:"the-symptoms",level:2},{value:"The Cure",id:"the-cure",level:2},{value:"The Probable Cause",id:"the-probable-cause",level:2}],h={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"OK the title of this post is a little verbose. I've just wasted a morning of my life trying to discover what happened to my ability to debug JavaScript in Visual Studio 2012. If you don't want to experience the same pain then read on..."),(0,a.kt)("h2",{id:"the-symptoms"},"The Symptoms"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"I'm not hitting my JavaScript breakpoints when I hit F5 in Visual Studio."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"http://msdn.microsoft.com/en-us/library/bb385621.aspx"},"Script Documents")," is missing from the Solution Explorer when I'm debugging in Visual Studio.")),(0,a.kt)("h2",{id:"the-cure"},"The Cure"),(0,a.kt)("p",null,"In the end, after a great deal of frustration, I happened upon ",(0,a.kt)("a",{parentName:"p",href:"http://stackoverflow.com/a/15908391/761388"},"this answer")," on Stack Overflow. It set me in the right direction."),(0,a.kt)("p",null,"I was seeing exactly the same as this list but with ",(0,a.kt)("strong",{parentName:"p"},"TWO")," instances of Internet Explorer in the list instead of one. Odd, I know."),(0,a.kt)("p",null,"I fixed this up by selecting Google Chrome as my target instead of IE, running it and then setting it back to IE. And interestingly, when I went to set it back to IE there was only one instance of Internet Explorer in the list again."),(0,a.kt)("h2",{id:"the-probable-cause"},"The Probable Cause"),(0,a.kt)("p",null,"My machine was auto updated from IE 9 to IE 10 just the other day. I ","*",(0,a.kt)("strong",{parentName:"p"},"think"),"*",' my JavaScript debugging issue appeared at the same time. This would explain to me why I had two instances of "Internet Explorer" in my list. Not certain but I\'d say the evidence is fairly compelling.'),(0,a.kt)("p",null,"Painful Microsoft. Painful"))}m.isMDXComponent=!0}}]);