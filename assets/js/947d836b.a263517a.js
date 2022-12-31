"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[63546],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=s(a),u=n,k=h["".concat(l,".").concat(u)]||h[u]||d[u]||o;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[h]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},23082:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const i={title:"TypeScript + Webpack: Super Pursuit Mode",authors:"johnnyreilly",tags:["HappyPack","TypeScript","cache-loader","thread-loader","fork-ts-checker-webpack-plugin","Webpack"],hide_table_of_contents:!1},p=void 0,l={permalink:"/2017/09/07/typescript-webpack-super-pursuit-mode",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2017-09-07-typescript-webpack-super-pursuit-mode/index.md",source:"@site/blog/2017-09-07-typescript-webpack-super-pursuit-mode/index.md",title:"TypeScript + Webpack: Super Pursuit Mode",description:"This post also featured as a webpack Medium publication.",date:"2017-09-07T00:00:00.000Z",formattedDate:"September 7, 2017",tags:[{label:"HappyPack",permalink:"/tags/happy-pack"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"cache-loader",permalink:"/tags/cache-loader"},{label:"thread-loader",permalink:"/tags/thread-loader"},{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"Webpack",permalink:"/tags/webpack"}],readingTime:6.66,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"TypeScript + Webpack: Super Pursuit Mode",authors:"johnnyreilly",tags:["HappyPack","TypeScript","cache-loader","thread-loader","fork-ts-checker-webpack-plugin","Webpack"],hide_table_of_contents:!1},prevItem:{title:"fork-ts-checker-webpack-plugin code clickability",permalink:"/2017/09/12/fork-ts-checker-webpack-plugin-code"},nextItem:{title:"Oh the Glamour of Open Source",permalink:"/2017/08/30/oh-glamour-of-open-source"}},s={authorsImageUrls:[void 0]},c=[{value:"fork-ts-checker-webpack-plugin",id:"fork-ts-checker-webpack-plugin",level:2},{value:"HappyPack",id:"happypack",level:2},{value:"<code>thread-loader</code> + <code>cache-loader</code>",id:"thread-loader--cache-loader",level:2},{value:"All This Could Be Yours...",id:"all-this-could-be-yours",level:2}],h={toc:c};function d(e){var{components:t}=e,i=o(e,["components"]);return(0,r.kt)("wrapper",n({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",n({parentName:"em"},{href:"https://medium.com/webpack/typescript-webpack-super-pursuit-mode-83cc568dea79"}),"This post also featured as a webpack Medium publication"),".")),(0,r.kt)("p",null,"If you're like me then you'll like TypeScript and you'll like module bundling with webpack. You may also like speedy builds. That's completely understandable. The fact of the matter is, you sacrifice a bit of build speed to have webpack in the mix. Wouldn't it be great if we could even up the difference?"),(0,r.kt)("p",null,"I'm the primary maintainer of ts-loader, a TypeScript loader for webpack. Just recently a couple of PRs were submitted that said, in other words: ts-loader is like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(68284).Z,width:"400",height:"233"})),(0,r.kt)("p",null,"But it could be like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(66209).Z,width:"400",height:"225"})),(0,r.kt)("p",null,"Apologies for the image quality above; there appear to be no high quality pictures out there of KITT in Super Pursuit Mode for me to defame with ",(0,r.kt)("a",n({parentName:"p"},{href:"https://github.com/plemont"}),"Garan Jenkin"),"'s atrocious puns."),(0,r.kt)("h2",n({},{id:"fork-ts-checker-webpack-plugin"}),"fork-ts-checker-webpack-plugin"),(0,r.kt)("p",null,(0,r.kt)("a",n({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/issues/537"}),'"Faster type checking with forked process"')," read the enticing name of the issue. It turned out to be ",(0,r.kt)("a",n({parentName:"p"},{href:"https://github.com/piotr-oles"}),"Piotr Ole\u015b")," (",(0,r.kt)("a",n({parentName:"p"},{href:"https://twitter.com/OlesDev"}),"@OlesDev"),") telling the world about his beautiful creation. He'd put together a mighty fine plugin that can be used alongside ts-loader called the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin"}),"fork-ts-checker-webpack-plugin"),". The name is a bit of a mouthful but the purpose is mouth-watering. To quote the README, it is a:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Webpack plugin that runs typescript type checker on a separate process.")),(0,r.kt)("p",null,"What does this mean and how does this fit with ts-loader? Well, ts-loader does 2 jobs:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"It transpiles your TypeScript into JavaScript and hands it off to webpack"),(0,r.kt)("li",{parentName:"ol"},"It collects any TypeScript compilation errors and reports them to webpack")),(0,r.kt)("p",null,'What this plugin does is say, "forget about #2 - we\'ve got this." It removes the responsibility for type checking from ts-loader, so the only work ts-loader does is transpilation. In the meantime, the all important type checking is still happening. To be honest, there would be little reason to recommend this approach otherwise. The difference is ',(0,r.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," is doing the heavy lifting ",(0,r.kt)("strong",{parentName:"p"},"in a separate process"),". This provides a nice performance boost to your workflow. ts-loader is doing ",(0,r.kt)("strong",{parentName:"p"},"less")," and that's a ",(0,r.kt)("u",null,"good thing")),(0,r.kt)("p",null,"."),(0,r.kt)("p",null,"The approach used here is similar to that employed by awesome-typescript-loader. ATL is another TypeScript loader for webpack by the excellent ",(0,r.kt)("a",n({parentName:"p"},{href:"https://github.com/s-panferov"}),"Stanislav Panferov"),". ATL also has a technique for performing typechecking in a forked process. fork-ts-checker-webpack-plugin was an effort by Piotr to implement something similar but with improved incremental build performance."),(0,r.kt)("p",null,"How do we use it? Add fork-ts-checker-webpack-plugin as a ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependency")," of your project and then amend the ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," to set ts-loader into ",(0,r.kt)("inlineCode",{parentName:"p"},"transpileOnly")," mode and drop the plugin into the mix:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-js"}),"var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');\n\nvar webpackConfig = {\n  // other config...\n  context: __dirname, // to automatically find tsconfig.json\n  module: {\n    rules: [\n      {\n        test: /\\.tsx?$/,\n        loader: 'ts-loader',\n        options: {\n          // disable type checker - we will use it in fork plugin\n          transpileOnly: true,\n        },\n      },\n    ],\n  },\n  plugins: [new ForkTsCheckerWebpackPlugin()],\n};\n")),(0,r.kt)("p",null,"If you'd like to see an example of how to use the plugin then take a look at a ",(0,r.kt)("a",n({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/tree/master/examples/fork-ts-checker"}),"simple example")," and a ",(0,r.kt)("a",n({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/tree/master/examples/react-babel-karma-gulp-fork-ts-checker"}),"more involved one"),"."),(0,r.kt)("h2",n({},{id:"happypack"}),"HappyPack"),(0,r.kt)("p",null,"Not so long ago I didn't know what ",(0,r.kt)("strike",null,"happyness")),(0,r.kt)("p",null,(0,r.kt)("a",n({parentName:"p"},{href:"https://github.com/amireh/happypack"}),"HappyPack"),' was. "Happiness in the form of faster webpack build times." That\'s what it is.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"HappyPack makes webpack builds faster by allowing you to transform multiple files in parallel.")),(0,r.kt)("p",null,"It does this by spinning up multiple threads, each with their own loaders inside. We wanted to do this with ts-loader; to have multiple instances of ts-loader running. Work can then be divided up across these separate loaders. Isn't multi-threading great?"),(0,r.kt)("p",null,"ts-loader did not initially play nicely with HappyPack; essentially this is because ts-loader touches parts of webpack's API that HappyPack replaces. The entirely wonderful ",(0,r.kt)("a",n({parentName:"p"},{href:"https://github.com/aindlq"}),"Artem Kozlov")," submitted a ",(0,r.kt)("a",n({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/pull/547"}),"PR which added HappyPack support to ts-loader"),". Support essentially amounts to switching ts-loader to run in ",(0,r.kt)("inlineCode",{parentName:"p"},"transpileOnly")," mode and ensuring that there is no attempt to talk to parts of the webpack API that HappyPack removes."),(0,r.kt)("p",null,"It would be hard to recommend using HappyPack as is because, as with ",(0,r.kt)("inlineCode",{parentName:"p"},"transpileOnly")," mode you lose all typechecking. Where it becomes worthwhile is where it is combined with the fork-ts-checker-webpack-plugin so you keep the typechecking."),(0,r.kt)("p",null,"Enough with the chitter chatter; how can we achieve this? Add HappyPack as a ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependency")," of your project and then amend the ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-js"}),"var HappyPack = require('happypack');\nvar ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');\n\nmodule.exports = {\n  // other config...\n  context: __dirname, // to automatically find tsconfig.json\n  module: {\n    rules: [\n      {\n        test: /\\.tsx?$/,\n        exclude: /node_modules/,\n        loader: 'happypack/loader?id=ts',\n      },\n    ],\n  },\n  plugins: [\n    new HappyPack({\n      id: 'ts',\n      threads: 2,\n      loaders: [\n        {\n          path: 'ts-loader',\n          query: { happyPackMode: true },\n        },\n      ],\n    }),\n    new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),\n  ],\n};\n")),(0,r.kt)("p",null,"Note that the ts-loader options are now configured via the HappyPack ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," and that we're setting ts-loader with the ",(0,r.kt)("inlineCode",{parentName:"p"},"happyPackMode")," option set."),(0,r.kt)("p",null,"There's one other thing to note which is important; we're now passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"checkSyntacticErrors")," option to the fork plugin. This ensures that the plugin checks for both syntactic errors (eg ",(0,r.kt)("inlineCode",{parentName:"p"},"const array = [{} {}];"),") and semantic errors (eg ",(0,r.kt)("inlineCode",{parentName:"p"},"const x: number = '1';"),"). By default the plugin only checks for semantic errors. This is because when ts-loader is used with ",(0,r.kt)("inlineCode",{parentName:"p"},"transpileOnly")," set, ts-loader will still report syntactic errors. But when used in ",(0,r.kt)("inlineCode",{parentName:"p"},"happyPackMode")," it does not."),(0,r.kt)("p",null,"If you'd like to see an example of how to use HappyPack then once again we have a ",(0,r.kt)("a",n({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/tree/master/examples/happypack"}),"simple example")," and a ",(0,r.kt)("a",n({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/tree/master/examples/react-babel-karma-gulp-happypack"}),"more involved one"),"."),(0,r.kt)("h2",n({},{id:"thread-loader--cache-loader"}),(0,r.kt)("inlineCode",{parentName:"h2"},"thread-loader")," ","+"," ",(0,r.kt)("inlineCode",{parentName:"h2"},"cache-loader")),(0,r.kt)("p",null,"You might have some reservations about using HappyPack. First of all the quirky configuration required makes your webpack config rather less comprehensible. Also, HappyPack is not officially blessed by webpack. It is a side project developed externally from webpack and there's no guarantees that new versions of webpack won't break it. Neither of these are reasons not to use HappyPack but they are things to bear in mind."),(0,r.kt)("p",null,"What if there were a way to parallelise our builds which dealt with these issues? Well, there is! By using ",(0,r.kt)("a",n({parentName:"p"},{href:"https://github.com/webpack-contrib/thread-loader"}),"thread-loader")," and ",(0,r.kt)("a",n({parentName:"p"},{href:"https://github.com/webpack-contrib/cache-loader"}),"cache-loader")," in combination you can both feel happy that you're using an official webpack workflow and you can have a config that's less confusing."),(0,r.kt)("p",null,"What would that config look like? This:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-js"}),"var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');\n\nmodule.exports = {\n  // other config...\n  context: __dirname, // to automatically find tsconfig.json\n  module: {\n    rules: {\n      test: /\\.tsx?$/,\n      use: [\n        { loader: 'cache-loader' },\n        {\n          loader: 'thread-loader',\n          options: {\n            // there should be 1 cpu for the fork-ts-checker-webpack-plugin\n            workers: require('os').cpus().length - 1,\n          },\n        },\n        {\n          loader: 'ts-loader',\n          options: {\n            happyPackMode: true, // IMPORTANT! use happyPackMode mode to speed-up compilation and reduce errors reported to webpack\n          },\n        },\n      ],\n    },\n  },\n  plugins: [new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true })],\n};\n")),(0,r.kt)("p",null,'As you can see the configuration is much cleaner than with HappyPack. Interestingly ts-loader still needs to run in "',(0,r.kt)("inlineCode",{parentName:"p"},"happyPackMode"),'" and that\'s because thread-loader is essentially behaving in the same fashion as with HappyPack and so ts-loader needs to behave in the same way. Probably ts-loader should have a more generic flag name than "',(0,r.kt)("inlineCode",{parentName:"p"},"happyPackMode"),"\". (Famously, naming things is hard; so if you've a good idea, tell me!)"),(0,r.kt)("p",null,"These loaders are new and so tread carefully. My own experiences have been pretty positive but your mileage may vary. Do note that, as with HappyPack, the thread-loader is highly configurable."),(0,r.kt)("p",null,"If you'd like to see an example of how to use thread-loader and cache-loader then once again we have a ",(0,r.kt)("a",n({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/tree/master/examples/thread-loader"}),"simple example")," and a ",(0,r.kt)("a",n({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/tree/master/examples/react-babel-karma-gulp-thread-loader"}),"more involved one"),"."),(0,r.kt)("h2",n({},{id:"all-this-could-be-yours"}),"All This Could Be Yours..."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Wow! It looks like we can cut our build time by 4 minutes! ",(0,r.kt)("a",n({parentName:"p"},{href:"https://twitter.com/hashtag/webpack?src=hash"}),"#","webpack"),(0,r.kt)("a",n({parentName:"p"},{href:"https://twitter.com/typescriptlang"}),"@typescriptlang")," // cc ",(0,r.kt)("a",n({parentName:"p"},{href:"https://twitter.com/johnny_reilly"}),"@johnny_reilly"),(0,r.kt)("a",n({parentName:"p"},{href:"https://t.co/gjvy9SLBAT"}),"pic.twitter.com/gjvy9SLBAT")),(0,r.kt)("p",{parentName:"blockquote"},"\u2014 Donald Pipowitch (@PipoPeperoni) ",(0,r.kt)("a",n({parentName:"p"},{href:"https://twitter.com/PipoPeperoni/status/878148978356834304"}),"June 23, 2017"))),(0,r.kt)("script",{async:"",src:"//platform.twitter.com/widgets.js",charSet:"utf-8"}),(0,r.kt)("p",null,"In this post we're improving build speeds with TypeScript and webpack in 3 ways:"),(0,r.kt)("dl",null,(0,r.kt)("dt",null,"fork-ts-checker-webpack-plugin"),(0,r.kt)("dd",null,"With this plugin in play ts-loader only performs transpilation. ts-loader is doing less so the build is faster."),(0,r.kt)("dt",null,"HappyPack"),(0,r.kt)("dd",null,"With HappyPack in the mix, the build is parallelised. That parallelisation means the build is faster."),(0,r.kt)("dt",null,"thread-loader / cache-loader"),(0,r.kt)("dd",null,"With thread-loader and cache-loader, again the build is parallelised and the build is faster.")),(0,r.kt)("iframe",{src:"https://giphy.com/embed/Bo2WsocASVBm0",width:"240",height:"180",frameBorder:"0",allowFullScreen:""}))}d.isMDXComponent=!0},68284:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/webp;base64,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"},66209:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/webp;base64,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"}}]);