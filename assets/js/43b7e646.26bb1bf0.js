"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[70724],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57726:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return h}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={title:"You Might Not Need thread-loader",authors:"johnnyreilly",tags:["HappyPack","thread-loader","fork-ts-checker-webpack-plugin","ts-loader","Webpack","fast builds"],hide_table_of_contents:!1},p=void 0,s={permalink:"/2018/12/22/you-might-not-need-thread-loader",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-12-22-you-might-not-need-thread-loader.md",source:"@site/blog/2018-12-22-you-might-not-need-thread-loader.md",title:"You Might Not Need thread-loader",description:"It all started with a GitHub issue. Ernst Ammann reported:",date:"2018-12-22T00:00:00.000Z",formattedDate:"December 22, 2018",tags:[{label:"HappyPack",permalink:"/tags/happy-pack"},{label:"thread-loader",permalink:"/tags/thread-loader"},{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"ts-loader",permalink:"/tags/ts-loader"},{label:"Webpack",permalink:"/tags/webpack"},{label:"fast builds",permalink:"/tags/fast-builds"}],readingTime:3.675,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"GitHub Actions and Yarn",permalink:"/2019/01/05/github-actions-and-yarn"},nextItem:{title:"Cache Rules Everything Around Me",permalink:"/2018/12/10/cache-rules-everything-around-me"}},c={authorsImageUrls:[void 0]},u=[{value:"All I Want For Christmas is Faster Builds",id:"all-i-want-for-christmas-is-faster-builds",children:[],level:2},{value:"<code>thread-loader</code>: Infinity War",id:"thread-loader-infinity-war",children:[],level:2},{value:"&quot;Maybe You&#39;ve Thread Enough&quot;",id:"maybe-youve-thread-enough",children:[],level:2}],d={toc:u};function h(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It all started with a GitHub issue. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/namics/webpack-config-plugins/issues/24"},"Ernst Ammann reported"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Without the thread-loader, compilation takes three to four times less time on changes. We could remove it.")),(0,r.kt)("p",null,"If you're not aware of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/namics/webpack-config-plugins"},(0,r.kt)("inlineCode",{parentName:"a"},"webpack-config-plugins"))," project then I commend it to you. Famously, webpack configuration can prove tricky. ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack-config-plugins")," borrows the idea of presets from Babel. It provides a number of pluggable webpack configurations which give a best practice setup for different webpack use cases. So if you're no expert with webpack and you want a good setup for building your TypeScript / Sass / JavaScript then ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack-config-plugins")," has got your back."),(0,r.kt)("p",null,"One of the people behind the project is the very excellent ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jantimon"},"Jan Nicklas")," who is well known for his work on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jantimon/html-webpack-plugin"},(0,r.kt)("inlineCode",{parentName:"a"},"html-webpack-plugin")),"."),(0,r.kt)("p",null,"It was Jan who responded to Ernst's issue and decided to look into it."),(0,r.kt)("h2",{id:"all-i-want-for-christmas-is-faster-builds"},"All I Want For Christmas is Faster Builds"),(0,r.kt)("p",null,"Everyone wants fast builds. I do. You do. We all do. ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack-config-plugins")," is about giving these to the user in a precooked package."),(0,r.kt)("p",null,"There's a webpack loader called ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/thread-loader"},(0,r.kt)("inlineCode",{parentName:"a"},"thread-loader"))," which spawns multiple processes and splits up work between them. It was originally inspired by the work in the happypack project which does a similar thing."),(0,r.kt)("p",null,"I wrote ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/p/83cc568dea79"},"a blog post")," some time ago which gave details about ways to speed up your TypeScript builds by combining the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},(0,r.kt)("inlineCode",{parentName:"a"},"ts-loader"))," project (which I manage) with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin"},(0,r.kt)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin"))," project (which I'm heavily involved with)."),(0,r.kt)("p",null,"That post was written back in the days of webpack 2 / 3. It advocated use of both ",(0,r.kt)("inlineCode",{parentName:"p"},"happypack")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"thread-loader")," to drop your build times even further. As you'll see, now that we're well into the world of webpack 4 (with webpack 5 waiting in the wings) the advantage of ",(0,r.kt)("inlineCode",{parentName:"p"},"happypack")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"thread-loader")," are no longer so profound."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"webpack-config-plugins")," follows the advice I set out in my post; it uses ",(0,r.kt)("inlineCode",{parentName:"p"},"thread-loader")," in its pluggable configurations. Now, back to Ernst's issue."),(0,r.kt)("h2",{id:"thread-loader-infinity-war"},(0,r.kt)("inlineCode",{parentName:"h2"},"thread-loader"),": Infinity War"),(0,r.kt)("p",null,"Jan quickly identified the problem. He did that rarest of things; he read the documentation which said:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// timeout for killing the worker processes when idle\n      // defaults to 500 (ms)\n      // can be set to Infinity for watching builds to keep workers alive\n      poolTimeout: 2000,\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack-config-plugins")," configurations (running in watch mode) were subject to the thread loaders being killed after 500ms. They got resurrected when they were next needed; but that's not as instant as you might hope. Jan then did a test:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"(default pool - 30 runs - 1000 components ) average: 2.668068965517241\n(no thread-loader - 30 runs - 1000 components ) average: 1.2674137931034484\n(Infinity pool - 30 runs - 1000 components ) average: 1.371827586206896\n")),(0,r.kt)("p",null,"This demonstrates that using ",(0,r.kt)("inlineCode",{parentName:"p"},"thread-loader")," in watch mode with ",(0,r.kt)("inlineCode",{parentName:"p"},"poolTimeout: Infinity")," performs significantly better than when it defaults to 500ms. But perhaps more significantly, not using ",(0,r.kt)("inlineCode",{parentName:"p"},"thread-loader")," performs even better still."),(0,r.kt)("h2",{id:"maybe-youve-thread-enough"},'"Maybe You\'ve Thread Enough"'),(0,r.kt)("p",null,"When I tested using ",(0,r.kt)("inlineCode",{parentName:"p"},"thread-loader")," in watch mode with ",(0,r.kt)("inlineCode",{parentName:"p"},"poolTimeout: Infinity")," on my own builds I got the same benefit Jan had. I also got ",(0,r.kt)("em",{parentName:"p"},"even")," more benefit from dropping ",(0,r.kt)("inlineCode",{parentName:"p"},"thread-loader")," entirely."),(0,r.kt)("p",null,"A likely reason for this benefit is that typically when you're developing, you're working on one file at a time. Hence you only transpile one file at a time:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(15560).Z})),(0,r.kt)("p",null,"So there's not a great deal of value that ",(0,r.kt)("inlineCode",{parentName:"p"},"thread-loader")," can add here; mostly it's twiddling thumbs and adding an overhead. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/thread-loader/blob/master/README.md#usage"},"To quote the docs:")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Each worker is a separate node.js process, which has an overhead of ","~","600ms. There is also an overhead of inter-process communication."),(0,r.kt)("p",{parentName:"blockquote"},"Use this loader only for expensive operations!")),(0,r.kt)("p",null,"Now, my build is not your build. I can't guarantee that you'll get the same results as Jan and I experienced; but I would encourage you to investigate if you're using ",(0,r.kt)("inlineCode",{parentName:"p"},"thread-loader")," correctly and whether it's actually helping you. In these days of webpack 4+ perhaps it isn't."),(0,r.kt)("p",null,"There are still scenarios where ",(0,r.kt)("inlineCode",{parentName:"p"},"thread-loader")," still provides an advantage. It can speed up production builds. It can speed up the initial startup of watch mode. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/thread-loader/pull/52"},"In fact Jan has subsequently actually improved the ",(0,r.kt)("inlineCode",{parentName:"a"},"thread-loader")," to that specific end.")," Yay Jan!"),(0,r.kt)("p",null,"If this is all too much for you, and you want to hand off the concern to someone else then perhaps all of this serves as a motivation to just sit back, put your feet up and start using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/namics/webpack-config-plugins"},(0,r.kt)("inlineCode",{parentName:"a"},"webpack-config-plugins"))," instead of doing your own configuration."))}h.isMDXComponent=!0},15560:function(e,t,n){t.Z=n.p+"assets/images/ts-profile2-9eb58d723700bbff5b7c8157dff90f88.png"}}]);