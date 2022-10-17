"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[64585],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"Making IE 10's clear field (X) button and jQuery UI autocomplete play nice",authors:"johnnyreilly",tags:["autocomplete","jQuery UI","clear field button","IE 10"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2013/04/09/making-ie-10s-clear-field-x-button-and",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2013-04-09-making-ie-10s-clear-field-x-button-and/index.md",source:"@site/blog/2013-04-09-making-ie-10s-clear-field-x-button-and/index.md",title:"Making IE 10's clear field (X) button and jQuery UI autocomplete play nice",description:"This morning when I logged on I was surprised to discover IE 10 had been installed onto my machine. I hadn't taken any action to trigger this myself and so I\u2019m assuming that this was part of the general Windows Update mechanism. I know Microsoft had planned to push IE 10 out through this mechanism.",date:"2013-04-09T00:00:00.000Z",formattedDate:"April 9, 2013",tags:[{label:"autocomplete",permalink:"/tags/autocomplete"},{label:"jQuery UI",permalink:"/tags/j-query-ui"},{label:"clear field button",permalink:"/tags/clear-field-button"},{label:"IE 10",permalink:"/tags/ie-10"}],readingTime:1.515,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Making IE 10's clear field (X) button and jQuery UI autocomplete play nice",authors:"johnnyreilly",tags:["autocomplete","jQuery UI","clear field button","IE 10"],hide_table_of_contents:!1},prevItem:{title:"IE 10 Install Torches JavaScript Debugging in Visual Studio 2012 Through Auto Update (Probably)",permalink:"/2013/04/17/ie-10-install-torches-javascript"},nextItem:{title:"Death to compatibility mode",permalink:"/2013/04/01/death-to-compatibility-mode"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p};function h(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This morning when I logged on I was surprised to discover IE 10 had been installed onto my machine. I hadn't taken any action to trigger this myself and so I\u2019m assuming that this was part of the general Windows Update mechanism. I know ",(0,r.kt)("a",o({parentName:"p"},{href:"http://technet.microsoft.com/en-us/ie/jj898508.aspx"}),"Microsoft had planned to push IE 10 out through this mechanism"),"."),(0,r.kt)("p",null,"I was a little surprised that my work desktop had been upgraded without any notice. And I was initially rather concerned given that most of my users have IE 9 and now I didn't have a test harness on my development machine any more. (I've generally found that having the majority users browser on your own machine is a good idea.) However, I wasn't too concerned as I didn\u2019t think it would makes much of a difference to my development experience. I say that because IE10, as far as I understand, is basically IE 9 + more advanced CSS 3 and extra HTML 5 features. The rendering of my existing content developed for the IE 9 target should look pixel for pixel identical in IE 10. That\u2019s the theory anyway."),(0,r.kt)("p",null,"However, I have found one exception to this rule already. IE 10 provides clear field buttons in text boxes."),(0,r.kt)("p",null,"Unhappily I found these were clashing with our jQuery UI auto complete loading gif."),(0,r.kt)("p",null,"I know; ugly isn't it? Happily I was able to resolve this with a CSS ",(0,r.kt)("strike",null,"hack")),(0,r.kt)("p",null,"fix which looks like this:"),(0,r.kt)("script",{src:"https://gist.github.com/johnnyreilly/5345373.js?file=ie10jQueryUI.css"}),(0,r.kt)("p",null,"And now the jQuery UI autocomplete looks like we expect during the loading phase."),(0,r.kt)("p",null,"But happily when the autocomplete is not in the loading phase we still have access to the IE 10 clear field button. This works because the CSS selector above only applies to the ",(0,r.kt)("em",{parentName:"p"},"ui-autocomplete-loading")," class (which is only applied to the textbox when the loading is taking place)."))}h.isMDXComponent=!0}}]);