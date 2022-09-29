"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[41115],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,a(a({ref:t},s),{},{components:n})):o.createElement(h,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29604:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});n(67294);var o=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const a={title:"It's Not Dead: webpack and dead code elimination limitations",authors:"johnnyreilly",tags:["webpack; dead code elimination; process.env.NODE_ENV; DefinePlugin"],hide_table_of_contents:!1},l=void 0,c={permalink:"/2018/03/07/its-not-dead-webpack-and-dead-code",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2018-03-07-its-not-dead-webpack-and-dead-code/index.md",source:"@site/blog/2018-03-07-its-not-dead-webpack-and-dead-code/index.md",title:"It's Not Dead: webpack and dead code elimination limitations",description:"Every now and then you can be surprised. Your assumptions turn out to be wrong.",date:"2018-03-07T00:00:00.000Z",formattedDate:"March 7, 2018",tags:[{label:"webpack; dead code elimination; process.env.NODE_ENV; DefinePlugin",permalink:"/tags/webpack-dead-code-elimination-process-env-node-env-define-plugin"}],readingTime:2.12,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"It's Not Dead: webpack and dead code elimination limitations",authors:"johnnyreilly",tags:["webpack; dead code elimination; process.env.NODE_ENV; DefinePlugin"],hide_table_of_contents:!1},prevItem:{title:"Uploading Images to Cloudinary with the Fetch API",permalink:"/2018/03/25/uploading-images-to-cloudinary-with-fetch"},nextItem:{title:"ts-loader 4 / fork-ts-checker-webpack-plugin 0.4",permalink:"/2018/02/25/ts-loader-400-fork-ts-checker-webpack"}},p={authorsImageUrls:[void 0]},s=[{value:"Limitations",id:"limitations",level:2}],u={toc:s};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,o.kt)("wrapper",r({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Every now and then you can be surprised. Your assumptions turn out to be wrong."),(0,o.kt)("p",null,"Webpack has long supported the notion of dead code elimination. webpack facilitates this through use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"DefinePlugin"),". The compile time value of ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV")," is set either to ",(0,o.kt)("inlineCode",{parentName:"p"},"'production'")," or something else. If it's set to ",(0,o.kt)("inlineCode",{parentName:"p"},"'production'")," then some dead code hackery can happen. ",(0,o.kt)("a",r({parentName:"p"},{href:"https://reactjs.org/docs/optimizing-performance.html#webpack"}),"Libraries like React make use of this to serve up different, and crucially smaller, production builds.")),(0,o.kt)("p",null,"A (pre-webpack 4) production config file will typically contain this code:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-js"}),"new webpack.DefinePlugin({\n    'process.env.NODE_ENV': JSON.stringify('production')\n}),\nnew UglifyJSPlugin(),\n")),(0,o.kt)("p",null,"The result of the above config is that webpack will inject the value 'production' everywhere in the codebase where a ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV")," can be found. (In fact, as of webpack 4 setting this magic value is out-of-the-box behaviour for Production mode; yay the #0CJS!)"),(0,o.kt)("p",null,"What this means is, if you've written:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-js"}),"if (process.env.NODE_ENV !== 'production') {\n  // Do a development mode only thing\n}\n")),(0,o.kt)("p",null,"webpack can and will turn this into"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-js"}),"if ('production' !== 'production') {\n  // Do a development mode only thing\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/webpack-contrib/uglifyjs-webpack-plugin"}),"UglifyJSPlugin")," is there to minify the JavaScript in your bundles. As an added benefit, this plugin is smart enough to know that ",(0,o.kt)("inlineCode",{parentName:"p"},"'production' !== 'production'")," is always ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". And because it's smart, it chops the code. Dead code elimated."),(0,o.kt)("p",null,"You can read more about this ",(0,o.kt)("a",r({parentName:"p"},{href:"https://webpack.js.org/guides/production/#specify-the-environment"}),"in the webpack docs"),"."),(0,o.kt)("h2",r({},{id:"limitations"}),"Limitations"),(0,o.kt)("p",null,"Given what I've said, consider the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-js"}),"export class Config {\n  // Other properties\n\n  get isDevelopment() {\n    return process.env.NODE_ENV !== 'production';\n  }\n}\n")),(0,o.kt)("p",null,"This is a config class that exposes the expression ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV !== 'production'")," with the friendly name ",(0,o.kt)("inlineCode",{parentName:"p"},"isDevelopment"),". You'd think that dead code elimination would be your friend here. It's not."),(0,o.kt)("p",null,"My personal expection was that dead code elimination would treat ",(0,o.kt)("inlineCode",{parentName:"p"},"Config.isDevelopment")," and the expression ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV !== 'production'")," identically. Because they're identical."),(0,o.kt)("p",null,"However, this turns out not to be the case. Dead code elimination works just as you would hope when using the expression ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV !== 'production'")," directly in code. However webpack ",(0,o.kt)("strong",{parentName:"p"},"only")," performs dead code elimination for the ",(0,o.kt)("strong",{parentName:"p"},"direct")," usage of the ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV !== 'production'")," expression. I'll say that again: if you want dead code elimination then use the injected values; not an encapsulated version of them. It turns out you cannot rely on webpack flowing values through and performing dead code elimination on that basis."),(0,o.kt)("p",null,"The TL;DR: if you want to elimate dead code then ","*","always","*"," use ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV !== 'production'"),"; don't abstract it. It doesn't work."),(0,o.kt)("p",null,"UglifyJS is smart. But not that smart."))}d.isMDXComponent=!0}}]);