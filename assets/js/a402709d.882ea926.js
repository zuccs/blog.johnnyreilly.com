"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[32976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,d=u["".concat(c,".").concat(m)]||u[m]||h[m]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"fork-ts-checker-webpack-plugin code clickability",authors:"johnnyreilly",tags:["VS Code","console","fork-ts-checker-webpack-plugin","ts-loader","Webpack"],hide_table_of_contents:!1},i=void 0,c={permalink:"/2017/09/12/fork-ts-checker-webpack-plugin-code",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2017-09-12-fork-ts-checker-webpack-plugin-code/index.md",source:"@site/blog/2017-09-12-fork-ts-checker-webpack-plugin-code/index.md",title:"fork-ts-checker-webpack-plugin code clickability",description:"My name is John Reilly and I'm a VS Code addict. There I said it. I'm also a big fan of TypeScript and webpack. I've recently switched to using the awesome fork-ts-checker-webpack-plugin to speed up my builds.",date:"2017-09-12T00:00:00.000Z",formattedDate:"September 12, 2017",tags:[{label:"VS Code",permalink:"/tags/vs-code"},{label:"console",permalink:"/tags/console"},{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"ts-loader",permalink:"/tags/ts-loader"},{label:"Webpack",permalink:"/tags/webpack"}],readingTime:2.085,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"fork-ts-checker-webpack-plugin code clickability",authors:"johnnyreilly",tags:["VS Code","console","fork-ts-checker-webpack-plugin","ts-loader","Webpack"],hide_table_of_contents:!1},prevItem:{title:"Working with Extrahop on webpack and ts-loader",permalink:"/2017/10/19/working-with-extrahop-on-webpack-and-ts"},nextItem:{title:"TypeScript + Webpack: Super Pursuit Mode",permalink:"/2017/09/07/typescript-webpack-super-pursuit-mode"}},s={authorsImageUrls:[void 0]},p=[],u={toc:p};function h(e){var{components:t}=e,l=a(e,["components"]);return(0,r.kt)("wrapper",o({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"My name is John Reilly and I'm a VS Code addict. There I said it. I'm also a big fan of TypeScript and webpack. I've recently switched to using the awesome ",(0,r.kt)("a",o({parentName:"p"},{href:"https://www.npmjs.com/package/fork-ts-checker-webpack-plugin"}),(0,r.kt)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin"))," to speed up my builds."),(0,r.kt)("p",null,"One thing I love is using VS Code both as my editor and my terminal. Using the fork-ts-checker-webpack-plugin I noticed a problem when TypeScript errors showed up in the terminal:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(94233).Z,width:"640",height:"317"})),(0,r.kt)("p",null,"Take a look at the red file location in the console above. What's probably not obvious from the above screenshot is that it is ",(0,r.kt)("strong",{parentName:"p"},"not clickable"),". I'm used to being able to click on link in the console and bounce straight to the error location. It's a really productive workflow; see a problem, click on it, be taken to the cause, fix it."),(0,r.kt)("p",null,'I want to click on "',(0,r.kt)("inlineCode",{parentName:"p"},"C:/source/ts-loader/examples/fork-ts-checker/src/fileWithError.ts(2,7)"),'" and have VS Code open up ',(0,r.kt)("inlineCode",{parentName:"p"},"fileWithError.ts"),", ideally at line 2 and column 7. But here it's not working. Why?"),(0,r.kt)("p",null,"Well, I initially got this slightly wrong; I thought it was about the formatting of the file path. It is. I thought that having the line number and column number in parentheses after the path (eg ",(0,r.kt)("inlineCode",{parentName:"p"},'"(2,7)"'),") was screwing over VS Code. It isn't. Something else is. Look closely at the screenshot; what do you see? Do you notice how the colour of the line number / column number is different to the path? In the words of ",(0,r.kt)("a",o({parentName:"p"},{href:"https://youtu.be/281jMxOvP5k"}),"Delbert Wilkins"),": that's crucial."),(0,r.kt)("p",null,"Yup, the colour change between the path and the line number / column number is the problem. I've submitted a ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/pull/48"}),"PR to fix this")," that I hope will get merged. In the meantime you can avoid this issue by dropping this code into your ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"var chalk = require('chalk');\nvar os = require('os');\n\nfunction clickableFormatter(message, useColors) {\n  var colors = new chalk.constructor({ enabled: useColors });\n  var messageColor = message.isWarningSeverity()\n    ? colors.bold.yellow\n    : colors.bold.red;\n  var fileAndNumberColor = colors.bold.cyan;\n  var codeColor = colors.grey;\n  return [\n    messageColor(message.getSeverity().toUpperCase() + ' in ') +\n      fileAndNumberColor(\n        message.getFile() +\n          '(' +\n          message.getLine() +\n          ',' +\n          message.getCharacter() +\n          ')'\n      ) +\n      messageColor(':'),\n\n    codeColor(message.getFormattedCode() + ': ') + message.getContent(),\n  ].join(os.EOL);\n}\n\nmodule.exports = {\n  // Other config...\n  module: {\n    rules: [\n      {\n        test: /\\.tsx?$/,\n        loader: 'ts-loader',\n        options: { transpileOnly: true },\n      },\n    ],\n  },\n  resolve: {\n    extensions: ['.ts', '.tsx', 'js'],\n  },\n  plugins: [\n    new ForkTsCheckerWebpackPlugin({ formatter: clickableFormatter }), // Here we get our clickability back\n  ],\n};\n")),(0,r.kt)("p",null,"With that in place, what do you we have? This:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(19342).Z,width:"640",height:"317"})),(0,r.kt)("p",null,"VS Code clickability; it's a beautiful thing."))}h.isMDXComponent=!0},94233:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Screenshot-2017-09-12-06.12.25-9cd139a9749bbda7fddd886baddfb66f.webp"},19342:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Screenshot-2017-09-12-06.35.48-c91b2e9793b84bc772c93f9863362e4f.webp"}}]);