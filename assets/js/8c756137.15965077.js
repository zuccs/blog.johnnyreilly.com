"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[47519],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=p(n),m=r,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||l;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},79810:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"Inlining Angular Templates with WebPack and TypeScript",authors:"johnnyreilly",tags:["raw-loader","Angular","templatecache","Webpack"],hide_table_of_contents:!1},s=void 0,p={permalink:"/2016/05/13/inlining-angular-templates-with-webpack",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-05-13-inlining-angular-templates-with-webpack/index.md",source:"@site/blog/2016-05-13-inlining-angular-templates-with-webpack/index.md",title:"Inlining Angular Templates with WebPack and TypeScript",description:"This technique actually applies to pretty much any web stack where you have to supply templates; it just so happens that I'm using Angular 1.x in this case. Also I have an extra technique which is useful to handle the ng-include scenario.",date:"2016-05-13T00:00:00.000Z",formattedDate:"May 13, 2016",tags:[{label:"raw-loader",permalink:"/tags/raw-loader"},{label:"Angular",permalink:"/tags/angular"},{label:"templatecache",permalink:"/tags/templatecache"},{label:"Webpack",permalink:"/tags/webpack"}],readingTime:2.895,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Inlining Angular Templates with WebPack and TypeScript",authors:"johnnyreilly",tags:["raw-loader","Angular","templatecache","Webpack"],hide_table_of_contents:!1},prevItem:{title:"The Mysterious Case of Webpack, Angular and jQuery",permalink:"/2016/05/24/the-mysterious-case-of-webpack-angular-and-jquery"},nextItem:{title:"Instant Stubs with JSON.Net (just add hot water)",permalink:"/2016/04/25/instant-stubs-with-jsonnet"}},u={authorsImageUrls:[void 0]},c=[{value:"Preamble",id:"preamble",level:2},{value:"raw-loader!",id:"raw-loader",level:2},{value:"ng-include",id:"ng-include",level:2}],h={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This technique actually applies to pretty much any web stack where you have to supply templates; it just so happens that I'm using Angular 1.x in this case. Also I have an extra technique which is useful to handle the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.angularjs.org/api/ng/directive/ngInclude"},"ng-include")," scenario."),(0,l.kt)("h2",{id:"preamble"},"Preamble"),(0,l.kt)("p",null,"For some time I've been using webpack to bundle my front end. I write ES6 TypeScript; import statements and all. This is all sewn together using the glorious ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ts-loader"},"ts-loader")," to compile and emit ES6 code which is handed off to the wonderful ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/babel-loader"},"babel-loader")," which transpiles it to ESold code. All with full source map support. It's wonderful."),(0,l.kt)("p",null,"However, up until now I've been leaving Angular to perform the relevant http requests at runtime when it needs to pull in templates. That works absolutely fine but my preference is to preload those templates. In fact I've ",(0,l.kt)("a",{parentName:"p",href:"http://blog.johnnyreilly.com/2015/02/using-gulp-in-asp-net-instead-of-web-optimization.html"},"written before")," about using the ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/gulp-angular-templatecache"},"gulp angular template cache")," to achieve just that aim."),(0,l.kt)("p",null,"So I was wondering; in this modular world what would be the equivalent approach? Sure I could still use the gulp angular template cache approach but I would like something a little more deliberate and a little less magic. Also, I've discovered (to my cost) that when using the existing approach, it's possible to break the existing implementation without realising it; only finding out there's a problem in Production when unexpected http requests start happening. Finding these problems out at compile time rather than runtime is always to be strived for. So how?"),(0,l.kt)("h2",{id:"raw-loader"},(0,l.kt)("a",{parentName:"h2",href:"https://www.npmjs.com/package/raw-loader"},"raw-loader"),"!"),(0,l.kt)("p",null,"raw-loader allows you load file content using ",(0,l.kt)("inlineCode",{parentName:"p"},"require")," statements. This works well with the use case of inlining html. So I drop it into my ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var path = require('path');\n\nmodule.exports = {\n  cache: true,\n  entry: {\n    main: './src/main.ts',\n\n    vendor: [\n      'babel-polyfill',\n      'angular',\n      'angular-animate',\n      'angular-sanitize',\n      'angular-ui-bootstrap',\n      'angular-ui-router',\n    ],\n  },\n  output: {\n    path: path.resolve(__dirname, './dist/scripts'),\n    filename: '[name].js',\n    chunkFilename: '[chunkhash].js',\n  },\n  module: {\n    loaders: [\n      {\n        test: /\\.ts(x?)$/,\n        exclude: /node_modules/,\n        loader: 'babel-loader?presets[]=es2015!ts-loader',\n      },\n      {\n        test: /\\.js$/,\n        exclude: /node_modules/,\n        loader: 'babel',\n        query: {\n          presets: ['es2015'],\n        },\n      },\n      {\n        // THIS IS THE MAGIC!\n        test: /\\.html$/,\n        exclude: /node_modules/,\n        loader: 'raw',\n      },\n    ], // THAT WAS THE MAGIC!\n  },\n  plugins: [\n    // ....\n  ],\n  resolve: {\n    extensions: ['', '.ts', '.tsx', '.js'],\n  },\n};\n")),(0,l.kt)("p",null,"With this in place, if someone requires a file with the ",(0,l.kt)("inlineCode",{parentName:"p"},"html")," suffix then raw-loader comes in. So now we can swap this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"$stateProvider.state('state1', {\n  url: '/state1',\n  templateUrl: 'partials/state1.html',\n});\n")),(0,l.kt)("p",null,"For this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"$stateProvider.state('state1', {\n  url: '/state1',\n  template: require('./partials/state1.html'),\n});\n")),(0,l.kt)("p",null,"Now initially TypeScript is going to complain about your ",(0,l.kt)("inlineCode",{parentName:"p"},"require")," statement. That's fair; outside of node-land it doesn't know what ",(0,l.kt)("inlineCode",{parentName:"p"},"require")," is. No bother, you just need to drop in a one line simple definition file to sort this out; let me present ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack-require.d.ts"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"declare var require: (filename: string) => any;\n")),(0,l.kt)("p",null,"You've now inlined your template. And for bonus points, if you were to make a mistake in your path then webpack would shout at you at compile time; which is a ",(0,l.kt)("em",{parentName:"p"},"good, good")," thing."),(0,l.kt)("h2",{id:"ng-include"},"ng-include"),(0,l.kt)("p",null,"The one use case that this doesn't cover is where your templates import other templates through use of the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.angularjs.org/api/ng/directive/ngInclude"},"ng-include")," directive. They will still trigger http requests as the templates are served. The simple way to prevent that is by priming the angular ",(0,l.kt)("inlineCode",{parentName:"p"},'<a href="https://docs.angularjs.org/api/ng/service/$templateCache">$templateCache</a>')," like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.run([\n  '$templateCache',\n  ($templateCache: ng.ITemplateCacheService) => {\n    $templateCache.put('justSome.html', require('./justSome.html'));\n    // Other templates go here...\n  },\n]);\n")),(0,l.kt)("p",null,"Now when the app spins up it already has everything it needs pre-cached."))}m.isMDXComponent=!0}}]);