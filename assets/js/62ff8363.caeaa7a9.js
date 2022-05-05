"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[68462],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=s(a),m=n,d=h["".concat(p,".").concat(m)]||h[m]||u[m]||o;return a?r.createElement(d,l(l({ref:t},c),{},{components:a})):r.createElement(d,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1540:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),l=["components"],i={title:"ts-loader 2017 retrospective",authors:"johnnyreilly",tags:["Die Hard","TypeScript","ts-loader","Webpack"],hide_table_of_contents:!1},p=void 0,s={permalink:"/2017/12/24/ts-loader-2017-retrospective",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-12-24-ts-loader-2017-retrospective/index.md",source:"@site/blog/2017-12-24-ts-loader-2017-retrospective/index.md",title:"ts-loader 2017 retrospective",description:"2017 is drawing to a close, and it's been a big, big year in webpack-land. It's been a big year for ts-loader too. At the start of the year v1.3.3 was the latest version available, officially supporting webpack 1. (Old school!) We end the year with ts-loader sitting pretty at v3.2.0 and supporting webpack 2 and 3.",date:"2017-12-24T00:00:00.000Z",formattedDate:"December 24, 2017",tags:[{label:"Die Hard",permalink:"/tags/die-hard"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"ts-loader",permalink:"/tags/ts-loader"},{label:"Webpack",permalink:"/tags/webpack"}],readingTime:2.945,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"ts-loader 2017 retrospective",authors:"johnnyreilly",tags:["Die Hard","TypeScript","ts-loader","Webpack"],hide_table_of_contents:!1},prevItem:{title:"Auth0, TypeScript and ASP.NET Core",permalink:"/2018/01/14/auth0-typescript-and-aspnet-core"},nextItem:{title:"The TypeScript webpack PWA",permalink:"/2017/11/19/the-typescript-webpack-pwa"}},c={authorsImageUrls:[void 0]},u=[{value:"<code>fork-ts-checker-webpack-plugin</code> build speed improvements",id:"fork-ts-checker-webpack-plugin-build-speed-improvements",level:2},{value:"ts-loader 4.0 (Live webpack or Die Hard)",id:"ts-loader-40-live-webpack-or-die-hard",level:2},{value:"Start using the new watch API",id:"start-using-the-new-watch-api",level:3},{value:"Drop custom module resolution",id:"drop-custom-module-resolution",level:3},{value:"Drop support for TypeScript 2.3 and below",id:"drop-support-for-typescript-23-and-below",level:3},{value:"webpack v4 is in alpha now",id:"webpack-v4-is-in-alpha-now",level:3},{value:"<code>contextAsConfigBasePath</code> will be replaced with a <code>context</code>",id:"contextasconfigbasepath-will-be-replaced-with-a-context",level:3},{value:"<code>reportFiles</code> option to be added",id:"reportfiles-option-to-be-added",level:3},{value:"Merry Christmas!",id:"merry-christmas",level:2}],h={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"2017 is drawing to a close, and it's been a big, big year in webpack-land. It's been a big year for ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader")," too. At the start of the year v1.3.3 was the latest version available, officially supporting webpack 1. (Old school!) We end the year with ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader")," sitting pretty at v3.2.0 and supporting webpack 2 and 3."),(0,o.kt)("p",null,"Many releases were shipped and that was down to a whole bunch of folk. People helped out with bug fixes, features, advice and docs improvements. ",(0,o.kt)("strong",{parentName:"p"},"All of these help."),(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader")," wouldn't be where it is without you so thanks to everyone that helped out - you rock!"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/christiantinauer",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/Pajn",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/maier49",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/false",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/roddypratt",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/ldrick",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/mattlewis92",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/Venryx",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/WillMartin",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/Loilo",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/Brooooooklyn",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/mengxy",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/bsouthga",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/zinserjan",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/sokra",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/vhqtvn",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/HerringtonDarkholme",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/johnnyreilly",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/jbrantly",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/octref",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/rhyek",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/develar",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/donaldpipowitch",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/schmuli",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/longlho",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/Igorbek",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/aindlq",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/wearymonkey",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/bancek",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://avatars.githubusercontent.com/mredbishop",alt:null})),(0,o.kt)("p",null,"I'm really grateful to all of you. Thanks so much! (Apologies for those I've missed anyone out - I know there's more still.)"),(0,o.kt)("h2",{id:"fork-ts-checker-webpack-plugin-build-speed-improvements"},(0,o.kt)("inlineCode",{parentName:"h2"},"fork-ts-checker-webpack-plugin")," build speed improvements"),(0,o.kt)("p",null,"Alongside other's direct contributions to ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader"),", other projects improved the experience of using ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader"),". ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/piotr-oles"},"Piotr Ole\u015b")," dropped his ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin"},(0,o.kt)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin"))," this year which nicely increased build speed when used with ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader"),"."),(0,o.kt)("p",null,"That opened up the possibility of adding ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/amireh/happypack"},"HappyPack")," support. I had the good fortune to work with webpack's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sokra"},"Tobias Koppers")," and ExtraHop's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/abirmingham"},"Alex Birmingham")," on ",(0,o.kt)("a",{parentName:"p",href:"https://www.extrahop.com/company/blog/2017/extrahop-webpack-accelerating-build-times/"},"improving TypeScript build speed further"),"."),(0,o.kt)("p",null,"So what does the future hold?"),(0,o.kt)("h2",{id:"ts-loader-40-live-webpack-or-die-hard"},"ts-loader 4.0 (Live webpack or Die Hard)"),(0,o.kt)("p",null,"The web marches on and webpack gallops alongside. Here's what's in the pipeline for ts-loader in 2018:"),(0,o.kt)("h3",{id:"start-using-the-new-watch-api"},"Start using the new watch API"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/pull/20234"},"A new watch API is being made available in the TypeScript API"),". We have ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/pull/685"},"a PR")," from the amazing ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sheetalkamat"},"Sheetal Nandi")," which adds support to ts-loader. Given that's quite a big PR we want to merge that before anything else lands. The watch API is still being finalised but once it lands in TypeScript we'll look to merge the PR and ship a new version of ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader"),"."),(0,o.kt)("h3",{id:"drop-custom-module-resolution"},"Drop custom module resolution"),(0,o.kt)("p",null,"Historically ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader")," has had it's own module resolution mechanism in place. We're going to look to move to use the TypeScript mechanism instead. The old module resolution be deprecated but will remain available behind a flag for a time. In future we'll look to drop the old mechanism entirely."),(0,o.kt)("h3",{id:"drop-support-for-typescript-23-and-below"},"Drop support for TypeScript 2.3 and below"),(0,o.kt)("p",null,"The codebase can be made simpler if we drop support for older versions of TypeScript so that's what we plan to do with our next breaking changes release."),(0,o.kt)("h3",{id:"webpack-v4-is-in-alpha-now"},"webpack v4 is in alpha now"),(0,o.kt)("p",null,"If any changes need to happen to ts-loader to support webpack 4 then they will be. Personally I'm planning to help out with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin"},(0,o.kt)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin"))," as there will likely be some changes required there."),(0,o.kt)("h3",{id:"contextasconfigbasepath-will-be-replaced-with-a-context"},(0,o.kt)("inlineCode",{parentName:"h3"},"contextAsConfigBasePath")," will be replaced with a ",(0,o.kt)("inlineCode",{parentName:"h3"},"context")),(0,o.kt)("p",null,"The option that landed in the last month doesn't quite achieve the aims of the original PR's author ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/christiantinauer"},"Christian Tinauer"),". Consequently it's going to be replaced with a new option. This is queued up and ready to go ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/pull/688"},"here"),"."),(0,o.kt)("h3",{id:"reportfiles-option-to-be-added"},(0,o.kt)("inlineCode",{parentName:"h3"},"reportFiles")," option to be added"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/freeman"},"Michel Rasschaert")," is presently working on adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"reportFiles")," option to ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader"),". You can see the PR in progress ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/pull/701"},"here"),"."),(0,o.kt)("h2",{id:"merry-christmas"},"Merry Christmas!"),(0,o.kt)("p",null,"You can expect to see the first releases of ts-loader 4.0 in 2018. In the meantime, I'd like to wish you Merry Christmas and a Happy New Year! And once more, thanks and thanks again to all you generous people who help build ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader"),". You're wonderful and so I'm glad you do what you do... joyeux Noel!"))}m.isMDXComponent=!0}}]);