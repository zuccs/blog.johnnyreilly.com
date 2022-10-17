"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[21597],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=o,m=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},55797:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>h});a(67294);var n=a(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const i={title:"ts-loader goes webpack 5",authors:"johnnyreilly",tags:["webpack","ts-loader","TypeScript","webpack 5"],image:"./ts-loader-9.png",hide_table_of_contents:!1},l=void 0,s={permalink:"/2021/04/20/ts-loader-goes-webpack-5",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-04-20-ts-loader-goes-webpack-5/index.md",source:"@site/blog/2021-04-20-ts-loader-goes-webpack-5/index.md",title:"ts-loader goes webpack 5",description:"ts-loader has just released v9.0.0. This post goes through what this release is all about, and what it took to ship this version. For intrigue, it includes a brief scamper into my mental health along the way. Some upgrades go smoothly - this one had some hiccups. But we'll get into that.",date:"2021-04-20T00:00:00.000Z",formattedDate:"April 20, 2021",tags:[{label:"webpack",permalink:"/tags/webpack"},{label:"ts-loader",permalink:"/tags/ts-loader"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"webpack 5",permalink:"/tags/webpack-5"}],readingTime:6.28,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"ts-loader goes webpack 5",authors:"johnnyreilly",tags:["webpack","ts-loader","TypeScript","webpack 5"],image:"./ts-loader-9.png",hide_table_of_contents:!1},prevItem:{title:"The Service Now API and TypeScript Conditional Types",permalink:"/2021/04/24/service-now-api-and-typescript-conditional-types"},nextItem:{title:"Hello World Bicep",permalink:"/2021/04/10/hello-world-bicep"}},p={image:a(75840).Z,authorsImageUrls:[void 0]},h=[{value:"One big pull request",id:"one-big-pull-request",level:2},{value:"What&#39;s changed",id:"whats-changed",level:2},{value:"The hole",id:"the-hole",level:2},{value:"&quot;Anybody down there?&quot;",id:"anybody-down-there",level:2},{value:"Release details",id:"release-details",level:2}],d={toc:h};function c(e){var{components:t}=e,i=r(e,["components"]);return(0,n.kt)("wrapper",o({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"ts-loader")," has just released ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/releases/tag/v9.0.0"}),"v9.0.0"),". This post goes through what this release is all about, and what it took to ship this version. For intrigue, it includes a brief scamper into my mental health along the way. Some upgrades go smoothly - this one had some hiccups. But we'll get into that."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hello world bicep",src:a(75840).Z,width:"1376",height:"510"})),(0,n.kt)("h2",o({},{id:"one-big-pull-request"}),"One big pull request"),(0,n.kt)("p",null,"As of v8, ",(0,n.kt)("inlineCode",{parentName:"p"},"ts-loader")," supported webpack 4 and webpack 5. However the webpack 5 support was best efforts, and not protected by any automated tests. ",(0,n.kt)("inlineCode",{parentName:"p"},"ts-loader")," has two test packs:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"A ",(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/TypeStrong/ts-loader/tree/main/test/comparison-tests#readme"}),"comparison test pack")," that compares transpilation and webpack compilation output with known outputs."),(0,n.kt)("li",{parentName:"ol"},"An ",(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/TypeStrong/ts-loader/tree/main/test/execution-tests#readme"}),"execution test pack")," that executes Karma test packs written in TypeScript using ",(0,n.kt)("inlineCode",{parentName:"li"},"ts-loader"),".")),(0,n.kt)("p",null,"The test packs were tightly coupled to webpack 4 (and in the case of the comparison test pack, that's unavoidable). The mission was to port ",(0,n.kt)("inlineCode",{parentName:"p"},"ts-loader")," to be built against (and have an automated test pack that ran against) webpack 5."),(0,n.kt)("p",null,"This ended up being a ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/pull/1251"}),"very big pull request"),". Work on it started back in February 2021 and we're shipping now in April of 2021. I'd initially expected it would take a couple of days at most. I had underestimated."),(0,n.kt)("p",null,"A number of people collaborated on this PR, either with code, feedback, testing or even just responding to questions. So I'd like to say thank you to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/JonWallsten"}),"John Wallsten")," - who did a lot of the work swapping ",(0,n.kt)("inlineCode",{parentName:"li"},"ts-loader")," over to webpack 5 APIs"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/appzuka"}),"Nick Excell")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/andrewbranch"}),"Andrew Branch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/alexander-akait"}),"Alexander Akait")," - who provided webpack 5 expertise and ideas"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/sokra"}),"Tobias Koppers")," - who got me out of a hole - more on that later")),(0,n.kt)("h2",o({},{id:"whats-changed"}),"What's changed"),(0,n.kt)("p",null,"Let's go through what's different in v9. There's two breaking changes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The minimum webpack version supported is now webpack 5. This simplifies the codebase, which previously had to if/else the various API registrations based on the version of webpack being used."),(0,n.kt)("li",{parentName:"ul"},"The minimum node version supported is now node 12. ",(0,n.kt)("a",o({parentName:"li"},{href:"https://nodejs.org/en/about/releases/"}),"Node 10 reaches end of life status at the end of April 2021."))),(0,n.kt)("p",null,"An interesting aspect of migrating to building against webpack 5 was dropping the dependency upon ",(0,n.kt)("a",o({parentName:"p"},{href:"https://www.npmjs.com/package/@types/webpack"}),(0,n.kt)("inlineCode",{parentName:"a"},"@types/webpack"))," in favour of the types that now ship with webpack 5 itself. This was a mostly great experience; however we discovered some missing pieces."),(0,n.kt)("p",null,"Most notably, the ",(0,n.kt)("inlineCode",{parentName:"p"},"LoaderContext")," ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/webpack/webpack/blob/03961f33912ab6735d470b870eacff678735a9ed/lib/NormalModule.js#L424"}),"wasn't strongly typed"),". ",(0,n.kt)("inlineCode",{parentName:"p"},"LoaderContext")," is the value of ",(0,n.kt)("inlineCode",{parentName:"p"},"this")," in the context of a running loader function. So it is probably the most interesting and important type from the perspective of a loader author."),(0,n.kt)("p",null,"Historically we used our own definition which had been adapted from the one in ",(0,n.kt)("inlineCode",{parentName:"p"},"@types/webpack"),". ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/webpack/webpack/issues/13162"}),"I've looked into the possibility of a type being exposed in webpack itself.")," However, it turns out, ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/webpack/webpack/pull/13164#issuecomment-821410359"}),"it's complicated - with the ",(0,n.kt)("inlineCode",{parentName:"a"},"LoaderContext")," type being effectively created across two packages"),". The type is initially created in ",(0,n.kt)("inlineCode",{parentName:"p"},"webpack")," and then augmented later in ",(0,n.kt)("inlineCode",{parentName:"p"},"loader-runner"),", prior to being supplied to loaders. You can read more on that ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/webpack/webpack/pull/13164#issuecomment-821410359"}),"here"),"."),(0,n.kt)("p",null,"For now we've opted to stick with keeping ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/pull/1251/commits/acbc71feed91fe14ec065dd9d31081af7a492f47"}),"an interface in ",(0,n.kt)("inlineCode",{parentName:"a"},"ts-loader"))," that models what arrives in the loader when executed. We have freshened it up somewhat, to model the webpack 5 world."),(0,n.kt)("p",null,"Alongside these changes, a ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/pull/1251/files#diff-7ae45ad102eab3b6d7e7896acd08c427a9b25b346470d7bc6507b6481575d519"}),"number of dependencies were upgraded"),"."),(0,n.kt)("h2",o({},{id:"the-hole"}),"The hole"),(0,n.kt)("p",null,"By the 19th of February most of the work was done. However, ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/pull/1251#issuecomment-781967959"}),"we were experiencing different behaviour between Linux and Windows in our comparison test pack"),"."),(0,n.kt)("p",null,"As far as I was aware, we were doing all the appropriate work to ensure ",(0,n.kt)("inlineCode",{parentName:"p"},"ts-loader")," and our test packs worked cross platform. But we were still experiencing problems whenever we ran the test pack on Windows. I'd done no end of tweaking but nothing worked. I couldn't explain it. I couldn't fix it. I was finding that tough to deal with."),(0,n.kt)("p",null,"I really want to be transparent about the warts and all aspect of open source software development. It is like all other types of software development; sometimes things go wrong and it can be tough to work out why. Right then, I was really quite unhappy. Things weren't working code-wise and I was at a loss to say why. This is not something that I dig."),(0,n.kt)("p",null,"I also wasn't sleeping amazingly at this point. It was winter and we'd been in lockdown in the UK for three months; as the COVID-19 pandemic ground relentlessly on. I love my family dearly. I really do. With that said, having my children around whilst I attempted to work was remarkably tough. I love those guys but, woah, was it stressful."),(0,n.kt)("p",null,"I was feeling at a low ebb. And I wasn't sure what to do next. So, feeling tired and pretty fed up, I took a break."),(0,n.kt)("h2",o({},{id:"anybody-down-there"}),'"Anybody down there?"'),(0,n.kt)("p",null,"Time passed. In March ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/alexander-akait"}),"Alexander Akait")," checked in to see how things were going and volunteered to help. He also ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/pull/1251#issuecomment-799531375"}),"suggested what turned out to be the fix"),"; namely replacing usage of ",(0,n.kt)("inlineCode",{parentName:"p"},"'\\'")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"'/'")," in the assets supplied back to webpack. But crucially I implemented this wrong. Observe ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/pull/1251/commits/4bcc5c9623acfd7ffbaf028781a8353b37243804"}),"this commit"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"const assetPath = path\n  .relative(compilation.compiler.outputPath, outputFile.name)\n  // According to @alexander-akait we should always '/' https://github.com/TypeStrong/ts-loader/pull/1251#issuecomment-799606985\n  .replace(/\\//g, '/');\n")),(0,n.kt)("p",null,"If you look closely at the ",(0,n.kt)("inlineCode",{parentName:"p"},"replace")," you'll see that I'm globally replacing ",(0,n.kt)("inlineCode",{parentName:"p"},"'/'")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"'/'")," ",(0,n.kt)("em",{parentName:"p"},"rather")," than globally replacing ",(0,n.kt)("inlineCode",{parentName:"p"},"'\\'")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"'/'"),". The wasted time this caused... I could weep."),(0,n.kt)("p",null,"I generally thrashed around for a bit after this. Going in circles, like a six year old swimming wearing one armband. Then ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/pull/1251#issuecomment-805143890"}),"Tobias kindly volunteered to help"),". This much I've learned from a career in software: if talented people offer their assistance, grab it with both hands!"),(0,n.kt)("p",null,'I\'d been trying be as "learn in public" as possible about the issues I was facing on the pull request. The idea being, to surface the problems in a public forum where others can read and advise. And also to attempt a textual kind of ',(0,n.kt)("a",o({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Rubber_duck_debugging"}),"rubber duck debugging"),"."),(0,n.kt)("p",null,"When Tobias pitched in, I wanted to make it as easy as possible for him to help. So I wrote up ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/pull/1251#issuecomment-805181069"}),"a full description of what had changed"),". What the divergent behaviour in test packs looked like. I shared my speculation for what might be causing the issue (I was wrong by the way). Finally I provided a simple way to get up and running with the broken code. The easier I could make it for others to collaborate on this, I figured, the greater the likelihood of an answer. Tobias got to an answer quickly:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The problem is introduced due to some normalization logic in the test case: see ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/pull/1273"}),"#1273")),(0,n.kt)("p",{parentName:"blockquote"},"While the PR fixes the problem, I think the paths should be normalized earlier in the pipeline to make this normalization code unnecessary. Note that asset names should have only ",(0,n.kt)("inlineCode",{parentName:"p"},"/")," as they are filenames and not paths. Only absolute paths have ",(0,n.kt)("inlineCode",{parentName:"p"},"\\"),".")),(0,n.kt)("p",null,"Tobias had raised a PR which introduced a workaround to resolved things in the test pack. This made me happy. More than that, he also identified that the issue lay in ",(0,n.kt)("inlineCode",{parentName:"p"},"ts-loader")," itself. This caused me to look again at the changes I'd made, including my ",(0,n.kt)("inlineCode",{parentName:"p"},"replace")," addition. ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/pull/1251#issuecomment-805907212"}),"With fresh eyes, I now realised this was a bug"),", and ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/pull/1251/commits/427714e43519289bb5745ca078133d1ace8fc2c1"}),"fixed")," it."),(0,n.kt)("p",null,"I found then that I could revert Tobias' workaround and still have passing tests. Result!"),(0,n.kt)("h2",o({},{id:"release-details"}),"Release details"),(0,n.kt)("p",null,"Now that we've got there; we've shipped. You can get the latest version of ",(0,n.kt)("inlineCode",{parentName:"p"},"ts-loader")," on ",(0,n.kt)("a",o({parentName:"p"},{href:"https://www.npmjs.com/package/ts-loader/v/9.0.0"}),"npm")," and you can find the release details on ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/releases/tag/v9.0.0"}),"GitHub"),"."),(0,n.kt)("p",null,"Thanks everyone - I couldn't have done it without your help. \ud83c\udf3b\u2764\ufe0f"))}c.isMDXComponent=!0},75840:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ts-loader-9-414595577372387f39261670825dc882.png"}}]);