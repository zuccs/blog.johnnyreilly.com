"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[89538],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),h=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=h(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=h(n),c=a,d=p["".concat(l,".").concat(c)]||p[c]||u[c]||o;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var h=2;h<o;h++)i[h]=n[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3663:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return h},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Karma: From PhantomJS to Headless Chrome",authors:"johnnyreilly",tags:["Chrome","Karma","PhantomJS","Headless"],hide_table_of_contents:!1},l=void 0,h={permalink:"/2017/08/27/karma-from-phantomjs-to-headless-chrome",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-08-27-karma-from-phantomjs-to-headless-chrome/index.md",source:"@site/blog/2017-08-27-karma-from-phantomjs-to-headless-chrome/index.md",title:"Karma: From PhantomJS to Headless Chrome",description:"Like pretty much everyone else I've been using PhantomJS to run my JavaScript (or compiled-to-JS) unit tests. It's been great. So when I heard the news that PhantomJS was dead I was genuinely sad. However, the King is dead.... Long live the King! For there is a new hope; it's called Chrome Headless . It's not a separate version of Chrome; rather the ability to run Chrome without a UI is now baked into Google's favourite browser as of v59. (For those history buffs I might as well be clear: the main reason PhantomJS died is because Chrome Headless was in the works.)",date:"2017-08-27T00:00:00.000Z",formattedDate:"August 27, 2017",tags:[{label:"Chrome",permalink:"/tags/chrome"},{label:"Karma",permalink:"/tags/karma"},{label:"PhantomJS",permalink:"/tags/phantom-js"},{label:"Headless",permalink:"/tags/headless"}],readingTime:1.905,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Karma: From PhantomJS to Headless Chrome",authors:"johnnyreilly",tags:["Chrome","Karma","PhantomJS","Headless"],hide_table_of_contents:!1},prevItem:{title:"Oh the Glamour of Open Source",permalink:"/2017/08/30/oh-glamour-of-open-source"},nextItem:{title:"A Haiku on the Problem with SemVer: Us",permalink:"/2017/07/29/a-haiku-on-problem-with-semver-us"}},m={authorsImageUrls:[void 0]},u=[{value:"Making the Switch",id:"making-the-switch",level:2},{value:"<code>package.json</code>",id:"packagejson",level:2},{value:"<code>karma.conf.js</code>",id:"karmaconfjs",level:2},{value:"Continuous Integration",id:"continuous-integration",level:2}],p={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Like pretty much everyone else I've been using PhantomJS to run my JavaScript (or compiled-to-JS) unit tests. It's been great. So when I heard the news that ",(0,o.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=14105489"},"PhantomJS was dead")," I was genuinely sad. However, the King is dead.... Long live the King! For there is a new hope; it's called ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2017/04/headless-chrome"},"Chrome Headless "),". It's not a separate version of Chrome; rather the ability to run Chrome without a UI is now baked into Google's favourite browser as of v59. (For those history buffs I might as well be clear: the main reason PhantomJS died is because Chrome Headless was in the works.)"),(0,o.kt)("h2",{id:"making-the-switch"},"Making the Switch"),(0,o.kt)("p",null,"As long as you're running Chrome v59 or greater then you can switch. I've just made ts-loader's execution test pack run with Chrome Headless instead of PhantomJS and I've rarely been happier. Honest. Some context: the execution test pack runs Jasmine unit tests via the ",(0,o.kt)("a",{parentName:"p",href:"https://karma-runner.github.io/1.0/index.html"},"Karma test runner"),". The move was surprisingly easy and you can see just how minimal it was in the PR ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/pull/611/files"},"here"),". If you want to migrate a test that runs tests via Karma then this will take you through what you need to do."),(0,o.kt)("h2",{id:"packagejson"},(0,o.kt)("inlineCode",{parentName:"h2"},"package.json")),(0,o.kt)("p",null,"You no longer need ",(0,o.kt)("inlineCode",{parentName:"p"},"phantomjs-prebuilt")," as a dev dependency of your project. That's the PhantomJS browser disappearing in the rear view mirror. Next we need to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"karma-phantomjs-launcher")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"karma-chrome-launcher"),". These packages are responsible for firing up the browser that the tests are run in and we no longer want to invoke PhantomJS; we're Chrome all the way baby."),(0,o.kt)("h2",{id:"karmaconfjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"karma.conf.js")),(0,o.kt)("p",null,"You need to tell Karma to use Chrome Headless instead of PhantomJS. You do that by replacing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"browsers: [ 'PhantomJS' ],\n")),(0,o.kt)("p",null,"with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"browsers: [ 'ChromeHeadless' ],\n")),(0,o.kt)("p",null,"That's it; job done!"),(0,o.kt)("h2",{id:"continuous-integration"},"Continuous Integration"),(0,o.kt)("p",null,"There's always one more thing isn't there? Yup, ts-loader has CI builds that run on ",(0,o.kt)("a",{parentName:"p",href:"https://ci.appveyor.com/project/JohnReilly/ts-loader/branch/master"},"Windows with AppVeyor")," and ",(0,o.kt)("a",{parentName:"p",href:"https://travis-ci.org/TypeStrong/ts-loader"},"Linux with Travis"),". The AppVeyor build went green on the first run; that's because Chrome is installed by default in the AppVeyor build environment. (yay!)"),(0,o.kt)("p",null,"Travis went red. (boooo!) Travis doesn't have Chrome installed by default. But it's no biggie; you just need to tweak your ",(0,o.kt)("inlineCode",{parentName:"p"},".travis.yml")," like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"dist: trusty\naddons:\n  chrome: stable\n")),(0,o.kt)("p",null,"This includes Chrome in the Travis build environment. Green. Boom!"))}c.isMDXComponent=!0}}]);