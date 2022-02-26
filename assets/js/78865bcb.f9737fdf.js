"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[82800],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},12139:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return s},toc:function(){return d},default:function(){return m}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=["components"],i={title:"Create React App with ts-loader and CRACO",authors:"johnnyreilly",tags:["CRACO","TypeScript","create react app","fork-ts-checker-webpack-plugin","ts-loader"],hide_table_of_contents:!1},p=void 0,c={permalink:"/2021/01/02/create-react-app-with-ts-loader-and-craco",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-01-02-create-react-app-with-ts-loader-and-craco/index.md",source:"@site/blog/2021-01-02-create-react-app-with-ts-loader-and-craco/index.md",title:"Create React App with ts-loader and CRACO",description:"Create React App is a fantastic way to get up and running building a web app with React. It also supports using TypeScript with React. Simply entering the following:",date:"2021-01-02T00:00:00.000Z",formattedDate:"January 2, 2021",tags:[{label:"CRACO",permalink:"/tags/craco"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"create react app",permalink:"/tags/create-react-app"},{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"ts-loader",permalink:"/tags/ts-loader"}],readingTime:3.405,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Create React App with ts-loader and CRACO",authors:"johnnyreilly",tags:["CRACO","TypeScript","create react app","fork-ts-checker-webpack-plugin","ts-loader"],hide_table_of_contents:!1},prevItem:{title:"react-query: strongly typing useQueries",permalink:"/2021/01/03/strongly-typing-react-query-s-usequeries"},nextItem:{title:"Azure Pipelines meet Jest",permalink:"/2020/12/30/azure-pipelines-meet-jest"}},s={authorsImageUrls:[void 0]},d=[{value:"<del><code>babel-loader</code></del> <code>ts-loader</code>",id:"babel-loader-ts-loader",level:2}],u={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App")," is a fantastic way to get up and running building a web app with React. It also supports using TypeScript with React. Simply entering the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx create-react-app my-app --template typescript\n")),(0,o.kt)("p",null,"Will give you a great TypeScript React project to get building with. There's two parts to the TypeScript support that exist:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Transpilation AKA "turning our TypeScript into JavaScript". Back since ',(0,o.kt)("a",{parentName:"li",href:"https://devblogs.microsoft.com/typescript/typescript-and-babel-7/"},"Babel 7 launched, Babel has enjoyed great support for transpiling TypeScript into JavaScript"),". Create React App leverages this; using the Babel webpack loader, ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/babel/babel-loader"},"babel-loader"),", for transpilation."),(0,o.kt)("li",{parentName:"ol"},'Type checking AKA "seeing if our code compiles". Create React App uses the ',(0,o.kt)("a",{parentName:"li",href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin"},(0,o.kt)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin"))," to run the TypeScript type checker on a separate process and report any issues that may exist.")),(0,o.kt)("p",null,"This is a great setup and works very well for the majority of use cases. However, what if we'd like to tweak this setup? What if we'd like to swap out ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-loader")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader")," for compilation purposes? Can we do that?"),(0,o.kt)("p",null,"Yes you can! And that's what we're going to do using a tool named ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gsoft-inc/craco"},(0,o.kt)("inlineCode",{parentName:"a"},"CRACO"))," ","-",' the pithy shortening of "Create React App Configuration Override". This is a tool that allows us to:'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get all the benefits of create-react-app and customization without using 'eject' by adding a single ",(0,o.kt)("inlineCode",{parentName:"p"},"craco.config.js")," file at the root of your application and customize your eslint, babel, postcss configurations and many more.")),(0,o.kt)("h2",{id:"babel-loader-ts-loader"},(0,o.kt)("del",{parentName:"h2"},(0,o.kt)("inlineCode",{parentName:"del"},"babel-loader"))," ",(0,o.kt)("inlineCode",{parentName:"h2"},"ts-loader")),(0,o.kt)("p",null,"So let's do the swap. First of all we're going to need to add ",(0,o.kt)("inlineCode",{parentName:"p"},"CRACO")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader")," to our project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @craco/craco ts-loader --save-dev\n")),(0,o.kt)("p",null,"Then we'll swap over our various ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," in our ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," to use ",(0,o.kt)("inlineCode",{parentName:"p"},"CRACO"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"start": "craco start",\n"build": "craco build",\n"test": "craco test",\n')),(0,o.kt)("p",null,"Finally we'll add a ",(0,o.kt)("inlineCode",{parentName:"p"},"craco.config.js")," file to the root of our project. This is where we swap out ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-loader")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const {\n  addAfterLoader,\n  removeLoaders,\n  loaderByName,\n  getLoaders,\n  throwUnexpectedConfigError,\n} = require('@craco/craco');\n\nconst throwError = (message) =>\n  throwUnexpectedConfigError({\n    packageName: 'craco',\n    githubRepo: 'gsoft-inc/craco',\n    message,\n    githubIssueQuery: 'webpack',\n  });\n\nmodule.exports = {\n  webpack: {\n    configure: (webpackConfig, { paths }) => {\n      const { hasFoundAny, matches } = getLoaders(\n        webpackConfig,\n        loaderByName('babel-loader')\n      );\n      if (!hasFoundAny) throwError('failed to find babel-loader');\n\n      console.log('removing babel-loader');\n      const { hasRemovedAny, removedCount } = removeLoaders(\n        webpackConfig,\n        loaderByName('babel-loader')\n      );\n      if (!hasRemovedAny) throwError('no babel-loader to remove');\n      if (removedCount !== 2)\n        throwError('had expected to remove 2 babel loader instances');\n\n      console.log('adding ts-loader');\n\n      const tsLoader = {\n        test: /\\.(js|mjs|jsx|ts|tsx)$/,\n        include: paths.appSrc,\n        loader: require.resolve('ts-loader'),\n        options: { transpileOnly: true },\n      };\n\n      const { isAdded: tsLoaderIsAdded } = addAfterLoader(\n        webpackConfig,\n        loaderByName('url-loader'),\n        tsLoader\n      );\n      if (!tsLoaderIsAdded) throwError('failed to add ts-loader');\n      console.log('added ts-loader');\n\n      console.log('adding non-application JS babel-loader back');\n      const { isAdded: babelLoaderIsAdded } = addAfterLoader(\n        webpackConfig,\n        loaderByName('ts-loader'),\n        matches[1].loader // babel-loader\n      );\n      if (!babelLoaderIsAdded)\n        throwError('failed to add back babel-loader for non-application JS');\n      console.log('added non-application JS babel-loader back');\n\n      return webpackConfig;\n    },\n  },\n};\n")),(0,o.kt)("p",null,"So what's happening here? The script looks for ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-loader")," usages in the default Create React App config. There will be two; one for TypeScript / JavaScript application code (we want to replace this) and one for non application JavaScript code. I'm actually not too clear what non application JavaScript code there is or can be, but we'll leave it in place; it may be important."),(0,o.kt)("p",null,"You cannot remove a ",(0,o.kt)("em",{parentName:"p"},"single")," loader using ",(0,o.kt)("inlineCode",{parentName:"p"},"CRACO"),", so instead we'll remove both and we'll add back the non application JavaScript ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-loader"),". We'll also add ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"transpileOnly: true")," option set (to ensure ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader")," doesn't do type checking)."),(0,o.kt)("p",null,"Now the next time we run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start")," we'll have Create React App running using ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader")," and ",(0,o.kt)("em",{parentName:"p"},"without")," having ejected. If we want to adjust the options of ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader")," further then we're completely at liberty to do so, adjusting the ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," in our ",(0,o.kt)("inlineCode",{parentName:"p"},"craco.config.js"),"."),(0,o.kt)("p",null,"If you value debugging your original source code rather than the transpiled JavaScript, remember to set the ",(0,o.kt)("inlineCode",{parentName:"p"},'"sourceMap": true')," property in your ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),(0,o.kt)("p",null,"Finally, if we wanted to go even further, we could remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," and move ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader")," to use ",(0,o.kt)("inlineCode",{parentName:"p"},"transpileOnly: false")," so it performs type checking also. However, generally it may be better to stay with the setup with post outlines for performance reasons."))}m.isMDXComponent=!0}}]);