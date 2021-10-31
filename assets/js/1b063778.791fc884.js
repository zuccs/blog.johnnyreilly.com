"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[96155],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,k=d["".concat(l,".").concat(h)]||d[h]||c[h]||r;return n?o.createElement(k,i(i({ref:t},u),{},{components:n})):o.createElement(k,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9699:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return u},toc:function(){return c},default:function(){return h}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],p={title:"TypeScript / webpack - you down with PnP? Yarn, you know me!",authors:"johnnyreilly",tags:["TypeScript","yarn","Webpack","PnP"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2019/06/07/typescript-webpack-you-down-with-pnp",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2019-06-07-typescript-webpack-you-down-with-pnp.md",source:"@site/blog/2019-06-07-typescript-webpack-you-down-with-pnp.md",title:"TypeScript / webpack - you down with PnP? Yarn, you know me!",description:"Yarn PnP is an innovation by the Yarn team designed to speed up module resolution by node. To quote the (excellent) docs:",date:"2019-06-07T00:00:00.000Z",formattedDate:"June 7, 2019",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"yarn",permalink:"/tags/yarn"},{label:"Webpack",permalink:"/tags/webpack"},{label:"PnP",permalink:"/tags/pn-p"}],readingTime:5.515,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Using TypeScript and ESLint with webpack (fork-ts-checker-webpack-plugin new feature!)",permalink:"/2019/07/13/typescript-and-eslint-meet-fork-ts-checker-webpack-plugin"},nextItem:{title:"TypeScript and high CPU usage - watch don't stare!",permalink:"/2019/05/23/typescript-and-high-cpu-usage-watch"}},u={authorsImageUrls:[void 0]},c=[{value:"Vanilla <code>ts-loader</code>",id:"vanilla-ts-loader",children:[],level:2},{value:"<code>fork-ts-checker-webpack-plugin</code> with <code>ts-loader</code>",id:"fork-ts-checker-webpack-plugin-with-ts-loader",children:[],level:2},{value:"Living on the Bleeding Edge",id:"living-on-the-bleeding-edge",children:[],level:2}],d={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Yarn PnP is an innovation by the Yarn team designed to speed up module resolution by node. To quote the ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com/en/docs/pnp"},"(excellent) docs"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Plug\u2019n\u2019Play is an alternative installation strategy unveiled in September 2018..."),(0,r.kt)("p",{parentName:"blockquote"},"The way regular installs work is simple: Yarn generates a ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," directory that Node is then able to consume. In this context, Node doesn\u2019t know the first thing about what a package is: it only reasons in terms of files. \u201cDoes this file exist here? No? Let\u2019s look in the parent ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," then. Does it exist here? Still no? Too bad\u2026 parent folder it is!\u201d - and it does this until it matches something that matches one of the possibilities. That\u2019s vastly inefficient."),(0,r.kt)("p",{parentName:"blockquote"},"When you think about it, Yarn knows everything about your dependency tree - it evens installs it! So why is Node tasked with locating your packages on the disk? Why don\u2019t we simply query Yarn, and let it tell us where to look for a package X required by a package Y? That\u2019s what Plug\u2019n\u2019Play (abbreviated PnP) is. Instead of generating a node_modules directory and leaving the resolution to Node, we now generate a single .pnp.js file and let Yarn tell us where to find our packages.")),(0,r.kt)("p",null,"Yarn has been worked upon, amongst others, by the excellent ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/arcanis"},"Ma\xebl Nison"),". You can hear him talking about it in person ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/XePfzVs852s"},"in this talk at JSConfEU"),"."),(0,r.kt)("p",null,"Thanks particularly to Ma\xebl's work, it's possible to use Yarn PnP with TypeScript using webpack with ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-loader")," ",(0,r.kt)("em",{parentName:"p"},"and"),(0,r.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin"),". This post intends to show you just how simple it is to convert a project that uses either to work with Yarn PnP."),(0,r.kt)("h2",{id:"vanilla-ts-loader"},"Vanilla ",(0,r.kt)("inlineCode",{parentName:"h2"},"ts-loader")),(0,r.kt)("p",null,"Your project is built using standalone ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-loader"),"; i.e. a simple setup that handles both transpilation and type checking."),(0,r.kt)("p",null,"First things first, add this property to your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),": (this is only required if you are using Yarn 1; this tag will be optional starting from the v2, where projects will switch to PnP by default.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "installConfig": {\n        "pnp": true\n    }\n}\n')),(0,r.kt)("p",null,"Also, because this is webpack, we're going to need to add an extra dependency in the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"pnp-webpack-plugin"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn add -D pnp-webpack-plugin\n")),(0,r.kt)("p",null,"To quote the excellent docs, make the following amends to your ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const PnpWebpackPlugin = require(`pnp-webpack-plugin`);\n\nmodule.exports = {\n    module: {\n        rules: [{\n            test: /\\.ts$/,\n            loader: require.resolve('ts-loader'),\n            options: PnpWebpackPlugin.tsLoaderOptions(),\n        }],\n    },\n    resolve: {\n        plugins: [ PnpWebpackPlugin, ],\n    },\n    resolveLoader: {\n        plugins: [ PnpWebpackPlugin.moduleLoader(module), ],\n    },\n};\n")),(0,r.kt)("p",null,"If you have any options you want to pass to ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-loader"),", just pass them as parameter of ",(0,r.kt)("inlineCode",{parentName:"p"},"pnp-webpack-plugin"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"tsLoaderOptions")," function and it will take care of forwarding them properly. Behind the scenes the ",(0,r.kt)("inlineCode",{parentName:"p"},"tsLoaderOptions")," function is providing ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-loader")," with the options necessary to switch into Yarn PnP mode."),(0,r.kt)("p",null,"Congratulations; you now have ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-loader")," functioning with Yarn PnP support!"),(0,r.kt)("h2",{id:"fork-ts-checker-webpack-plugin-with-ts-loader"},(0,r.kt)("inlineCode",{parentName:"h2"},"fork-ts-checker-webpack-plugin")," with ",(0,r.kt)("inlineCode",{parentName:"h2"},"ts-loader")),(0,r.kt)("p",null,"You may well be using ",(0,r.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," to handle type checking whilst ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-loader")," gets on with the transpilation. This workflow is also supported using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnp-webpack-plugin"),". You'll have needed to follow the same steps as the ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-loader")," setup. It's just the ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," tweaks that will be different."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const PnpWebpackPlugin = require(`pnp-webpack-plugin`);\n\nmodule.exports = {\n    plugins: {\n        new ForkTsCheckerWebpackPlugin(PnpWebpackPlugin.forkTsCheckerOptions({\n            useTypescriptIncrementalApi: false, // not possible to use this until: https://github.com/microsoft/TypeScript/issues/31056\n        })),\n    }\n    module: {\n        rules: [{\n            test: /\\.ts$/,\n            loader: require.resolve('ts-loader'),\n            options: PnpWebpackPlugin.tsLoaderOptions({ transpileOnly: true }),\n        }],\n    },\n    resolve: {\n        plugins: [ PnpWebpackPlugin, ],\n    },\n    resolveLoader: {\n        plugins: [ PnpWebpackPlugin.moduleLoader(module), ],\n    },\n};\n")),(0,r.kt)("p",null,"Again if you have any options you want to pass to ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-loader"),", just pass them as parameter of ",(0,r.kt)("inlineCode",{parentName:"p"},"pnp-webpack-plugin"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"tsLoaderOptions")," function. As we're using ",(0,r.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," we're going to want to stop ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-loader")," doing type checking with the ",(0,r.kt)("inlineCode",{parentName:"p"},"transpileOnly: true")," option."),(0,r.kt)("p",null,"We're now initialising ",(0,r.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"pnp-webpack-plugin"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"forkTsCheckerOptions")," function. Behind the scenes the ",(0,r.kt)("inlineCode",{parentName:"p"},"forkTsCheckerOptions")," function is providing the ",(0,r.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," with the options necessary to switch into Yarn PnP mode."),(0,r.kt)("p",null,"And that's it! You now have ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-loader")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," functioning with Yarn PnP support!"),(0,r.kt)("h2",{id:"living-on-the-bleeding-edge"},"Living on the Bleeding Edge"),(0,r.kt)("p",null,"Whilst you can happily develop and build using Yarn PnP, it's worth bearing in mind that this is a new approach. As such, there's some rough edges right now."),(0,r.kt)("p",null,"If you're interested in Yarn PnP, it's worth taking the v2 of Yarn (Berry) for a spin. You can find it here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/yarnpkg/berry"},"https://github.com/yarnpkg/berry"),". It's where most of the Yarn PnP work happens, and it includes zip loading - two birds, one stone!"),(0,r.kt)("p",null,"Because there isn't first class support for Yarn PnP in TypeScript itself yet, you cannot make use of the Watch API through ",(0,r.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin"),". (You can read about that issue ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/31056"},"here"),")"),(0,r.kt)("p",null,"As you've likely noticed, the webpack configuration required makes for a noisy ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),". Further to that, VS Code (which is powered by TypeScript remember) has no support for Yarn PnP yet and so will present resolution errors to you. If you can ignore the sea of red squigglies all over your source files in the editor and just look at your webpack build you'll be fine."),(0,r.kt)("p",null,"There is a tool called ",(0,r.kt)("inlineCode",{parentName:"p"},"PnPify")," that adds support for PnP to TypeScript (in particular tsc). You can find more information here: ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.github.io/berry/advanced/pnpify"},"https://yarnpkg.github.io/berry/advanced/pnpify"),". For tsc it would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$> yarn pnpify tsc [...]\n")),(0,r.kt)("p",null,"The gist is that it simulates the existence of ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," by leveraging the data from the PnP file. As such it's not a perfect fix (",(0,r.kt)("inlineCode",{parentName:"p"},"pnp-webpack-plugin")," is a better integration), but it's a very useful tool to have to unblock yourself when using a project that doesn't support it."),(0,r.kt)("p",null,"PnPify actually allows us to use TypeScript in VSCode with PnP! Its documentation is here: ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.github.io/berry/advanced/pnpify#vscode-support"},"https://yarnpkg.github.io/berry/advanced/pnpify#vscode-support")),(0,r.kt)("p",null,"All of these hindrances should hopefully be resolved in future. Ideally, one day a good developer experience can be the default experience. In the meantime, you can still dev - just be prepared for the rough edges. Here's some useful resources to track the future of support:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can follow more on built in webpack support here: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/webpack/enhanced-resolve/issues/162"},"https://github.com/webpack/enhanced-resolve/issues/162")),(0,r.kt)("li",{parentName:"ul"},"And on built in TypeScript support here: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Microsoft/TypeScript/issues/18896"},"https://github.com/Microsoft/TypeScript/issues/18896")),(0,r.kt)("li",{parentName:"ul"},"Finally, there it's worth watching the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nodejs/modules"},"nodejs/module")," repository, which debates amongst other things how to properly integrate loaders with Node.")),(0,r.kt)("p",null,"This last one would be nice because:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We'd stop having to patch require"),(0,r.kt)("li",{parentName:"ul"},"We probably wouldn't have to use yarn node if Node itself was able to find the loader somehow (such as if it was listed in the package.json metadata)")),(0,r.kt)("p",null,"Thanks to Ma\xebl for his tireless work on Yarn. To my mind Ma\xebl is certainly a candidate for the hardest worker in open source. I've been shamelessly borrowing his excellent docs for this post - thanks for writing so excellently Ma\xebl!"))}h.isMDXComponent=!0}}]);