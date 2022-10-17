"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[53085],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"TypeScript 2.0, ES2016 and Babel",authors:"johnnyreilly",tags:["TypeScript","Babel","ES2016"],hide_table_of_contents:!1},i=void 0,p={permalink:"/2016/09/22/typescript-20-es2016-and-babel",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2016-09-22-typescript-20-es2016-and-babel/index.md",source:"@site/blog/2016-09-22-typescript-20-es2016-and-babel/index.md",title:"TypeScript 2.0, ES2016 and Babel",description:"TypeScript 2.0 has shipped! Naturally I'm excited. For some time I've been using TypeScript to emit ES2015 code which I pass onto Babel to transpile to ES \"old school\". You can see how here.",date:"2016-09-22T00:00:00.000Z",formattedDate:"September 22, 2016",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"Babel",permalink:"/tags/babel"},{label:"ES2016",permalink:"/tags/es-2016"}],readingTime:2.315,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"TypeScript 2.0, ES2016 and Babel",authors:"johnnyreilly",tags:["TypeScript","Babel","ES2016"],hide_table_of_contents:!1},prevItem:{title:"React Component Curry",permalink:"/2016/10/05/react-component-curry"},nextItem:{title:"Integration Tests with SQL Server Database Snapshots",permalink:"/2016/09/12/integration-tests-with-sql-server"}},s={authorsImageUrls:[void 0]},c=[{value:"<code>tsconfig.json</code> changes",id:"tsconfigjson-changes",level:2},{value:"Babel changes",id:"babel-changes",level:2},{value:"Webpack changes",id:"webpack-changes",level:2},{value:"Wake Up and Smell the Jasmine",id:"wake-up-and-smell-the-jasmine",level:2}],m={toc:c};function u(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"https://blogs.msdn.microsoft.com/typescript/2016/09/22/announcing-typescript-2-0/"}),"TypeScript 2.0 has shipped!")," Naturally I'm excited. For some time I've been using TypeScript to emit ES2015 code which I pass onto Babel to transpile to ES \"old school\". You can see how ",(0,r.kt)("a",a({parentName:"p"},{href:"https://blog.johnnyreilly.com/2015/12/es6-typescript-babel-react-flux-karma.html"}),"here"),"."),(0,r.kt)("p",null,"Merely upgrading my ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," to use ",(0,r.kt)("inlineCode",{parentName:"p"},'"typescript": "^2.0.3"')," from ",(0,r.kt)("inlineCode",{parentName:"p"},'"typescript": "^1.8.10"')," was painless. TypeScript now supports ES2016 (the previous major release 1.8 supported ES2015). I wanted to move on from writing ES2015 to writing ES2016 using my chosen build process. Fortunately, it's supported. Phew. However, due to some advances in ecmascript feature modularisation within the TypeScript compiler the upgrade path is slightly different. I figured that I'd just be able to update the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"target"))," in my ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," to ",(0,r.kt)("inlineCode",{parentName:"p"},'"es2016"')," from ",(0,r.kt)("inlineCode",{parentName:"p"},'"es2015"'),", add in the ES2016 preset for Babel and jobs a good 'un. Not so. There were a few more steps to follow. Here's the recipe:"),(0,r.kt)("h2",a({},{id:"tsconfigjson-changes"}),(0,r.kt)("inlineCode",{parentName:"h2"},"tsconfig.json")," changes"),(0,r.kt)("p",null,"Well, there's no ",(0,r.kt)("inlineCode",{parentName:"p"},'"es2016"')," target for TypeScript. You carry on with a target of ",(0,r.kt)("inlineCode",{parentName:"p"},'"es2015"'),". What I need is a new entry: ",(0,r.kt)("inlineCode",{parentName:"p"},'"lib": ["dom", "es2015", "es2016"]'),". This tells the compiler that we're expecting to be emitting to an environment which supports a browser (",(0,r.kt)("inlineCode",{parentName:"p"},'"dom"'),'), and both ES2016 and ES2015. Our "environment" is Babel and it\'s going to pick up the baton from this point. My complete ',(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-json"}),'{\n  "compileOnSave": false,\n  "compilerOptions": {\n    "allowSyntheticDefaultImports": true,\n    "lib": ["dom", "es2015", "es2016"],\n    "jsx": "preserve",\n    "module": "es2015",\n    "moduleResolution": "node",\n    "noEmitOnError": false,\n    "noImplicitAny": true,\n    "preserveConstEnums": true,\n    "removeComments": false,\n    "suppressImplicitAnyIndexErrors": true,\n    "target": "es2015"\n  }\n}\n')),(0,r.kt)("h2",a({},{id:"babel-changes"}),"Babel changes"),(0,r.kt)("p",null,"I needed the Babel preset for ES2016; with a quick ",(0,r.kt)("a",a({parentName:"p"},{href:"https://www.npmjs.com/package/babel-preset-es2016"}),(0,r.kt)("inlineCode",{parentName:"a"},"npm install --save-dev babel-preset-es2016"))," that was sorted. Now just to kick Webpack into gear..."),(0,r.kt)("h2",a({},{id:"webpack-changes"}),"Webpack changes"),(0,r.kt)("p",null,"My webpack config plugs together TypeScript and Babel with the help of ",(0,r.kt)("a",a({parentName:"p"},{href:"https://www.npmjs.com/package/ts-loader"}),"ts-loader")," and ",(0,r.kt)("a",a({parentName:"p"},{href:"https://www.npmjs.com/package/babel-loader"}),"babel-loader"),". It allows the transpilation of my (few) JavaScript files so I can write ES2015. However, mainly it allows the transpilation of my (many) TypeScript files so I can write ES2015-flavoured TypeScript. I'll now tweak the ",(0,r.kt)("inlineCode",{parentName:"p"},"loaders")," so they cater for ES2016 as well."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js"}),"var webpack = require('webpack');\n\nmodule.exports = {\n  // ....\n\n  module: {\n    loaders: [\n      {\n        // Now transpiling ES2016 TS\n        test: /\\.ts(x?)$/,\n        exclude: /node_modules/,\n        loader:\n          'babel-loader?presets[]=es2016&presets[]=es2015&presets[]=react!ts-loader',\n      },\n      {\n        // Now transpiling ES2016 JS\n        test: /\\.js$/,\n        exclude: /node_modules/,\n        loader: 'babel',\n        query: {\n          presets: ['es2016', 'es2015', 'react'],\n        },\n      },\n    ],\n  },\n\n  // ....\n};\n")),(0,r.kt)("h2",a({},{id:"wake-up-and-smell-the-jasmine"}),"Wake Up and Smell the Jasmine"),(0,r.kt)("p",null,"And we're there; it works. How do I know? Well; here's the proof:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"it('Array.prototype.includes works', () => {\n  const result = [1, 2, 3].includes(2);\n  expect(result).toBe(true);\n});\n\nit('Exponentiation operator works', () => {\n  expect(1 ** 2 === Math.pow(1, 2)).toBe(true);\n});\n")),(0,r.kt)("p",null,"Much love to the TypeScript team for an awesome job; I can't wait to get stuck into some of the exciting new features of TypeScript 2.0. ",(0,r.kt)("inlineCode",{parentName:"p"},"strictNullChecks")," FTW!"))}u.isMDXComponent=!0}}]);