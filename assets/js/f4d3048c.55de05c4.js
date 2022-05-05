"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[86896],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=a,y=h["".concat(p,".").concat(u)]||h[u]||c[u]||r;return n?i.createElement(y,o(o({ref:t},d),{},{components:n})):i.createElement(y,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1049:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],s={title:"Symbiotic Definitely Typed",authors:"johnnyreilly",tags:["TypeScript","react-testing-library","Definitely Typed"],hide_table_of_contents:!1},p=void 0,l={permalink:"/2019/08/17/symbiotic-definitely-typed",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2019-08-17-symbiotic-definitely-typed/index.md",source:"@site/blog/2019-08-17-symbiotic-definitely-typed/index.md",title:"Symbiotic Definitely Typed",description:'I did ponder calling this post "how to enable a good TypeScript developer experience for npm modules that aren\'t written in TypeScript"... Not exactly pithy though.',date:"2019-08-17T00:00:00.000Z",formattedDate:"August 17, 2019",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"react-testing-library",permalink:"/tags/react-testing-library"},{label:"Definitely Typed",permalink:"/tags/definitely-typed"}],readingTime:5.635,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Symbiotic Definitely Typed",authors:"johnnyreilly",tags:["TypeScript","react-testing-library","Definitely Typed"],hide_table_of_contents:!1},prevItem:{title:"Coming Soon: Definitely Typed",permalink:"/2019/09/14/coming-soon-definitely-typed"},nextItem:{title:"ASP.NET Core authentication: hard-coding a claim in development",permalink:"/2019/08/02/asp-net-authentication-hard-coding-claims"}},d={authorsImageUrls:[void 0]},c=[{value:"Update: Use a Loose Version Range in <code>package.json</code>",id:"update-use-a-loose-version-range-in-packagejson",level:2},{value:"Update 2: Further Discussions!",id:"update-2-further-discussions",level:2}],h={toc:c};function u(e){var t=e.components,s=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'I did ponder calling this post "how to enable a good TypeScript developer experience for npm modules that aren\'t written in TypeScript"... Not exactly pithy though.'),(0,r.kt)("p",null,"Definitely Typed is the resource which allows developers to use TypeScript with existing JavaScript libraries that ship without their own type definitions."),(0,r.kt)("p",null,"DT began as a way to enable interop between JS and TS. When DT started, everything on npm was JavaScript. Over time it has become more common for libraries (eg ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mobxjs/mobx"},"Mobx")," / ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/angular/angular"},"Angular"),") to be written (or rewritten) in TypeScript. For publishing, they are compiled down to JS with perfect type definitions generated from the TypeScript alongside the compiled JavaScript. These libraries do not need to exist in Definitely Typed anymore."),(0,r.kt)("p",null,"Another pattern that has emerged over time is that of type definitions being removed from Definitely Typed to live and be maintained alongside the libraries they support. An example of this is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/moment/moment"},"MomentJS"),"."),(0,r.kt)("p",null,"This week, I think for the first time, there emerged another approach. ",(0,r.kt)("a",{parentName:"p",href:"https://kentcdodds.com/"},"Kent C Dodds"),"' ",(0,r.kt)("inlineCode",{parentName:"p"},"react-testing-library")," had started out with the MomentJS approach of hosting type definitions alongside the JavaScript source code. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-testing-library/pull/437"},"Alex Krolic raised a PR which proposed removing the type definitions from the RTL repo in favor of having the community maintain them at DefinitelyTyped.")),(0,r.kt)("p",null,"I'll directly quote Kent's explanation of the motivation for this:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We were getting a lot of drive-by contributions to the TypeScript typings and many pull requests would either sit without being reviewed by someone who knows TypeScript well enough, or be merged by a maintainer who just hoped the contributor knew what they were doing. This resulted in a poor experience for TypeScript users who could experience type definition churn and delays, and it became a burden on project maintainers as well (most of us don't know TypeScript very well). Moving the type definitions to DefinitelyTyped puts the maintenance in much more capable hands.")),(0,r.kt)("p",null,"I have to admit I was reticent about this idea in the first place. I like the idea that types ship with the package they support. It's a good developer experience; users install your package and it works with TypeScript straight out of the box. However Alex's PR addressed a real issue: what do you do when the authors of a package aren't interested / equipped / don't have the time to support TypeScript? Or don't want to deal with the noise of TypeScript related PRs which aren't relevant to them. What then?"),(0,r.kt)("p",null,"Alex was saying, let's not force it. Let the types and the library be maintained separately. This can and is done well already; React is a case in point. The React team does not work on the type definitions for React, that's done (excellently) by a crew of dedicated React lovers in Definitely Typed."),(0,r.kt)("p",null,"It's a fair point. The thing that was sad about this move was that the developer experience was going to have more friction. Users would have to ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn add -D @testing-library/react")," and then subsequently ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn add -D @types/testing-library__react")," to get the types."),(0,r.kt)("p",null,"This two step process isn't the end of the world, but it does make it marginally harder for TypeScript users to get up and running. It reduces the developer joy. As a side note, this is made more unlovely by ",(0,r.kt)("inlineCode",{parentName:"p"},"@testing-library/react")," being a scoped package. ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/47296731/how-can-i-install-typescript-declarations-for-scoped-namespaced-packages-via-ty"},"Types for a scoped package have a quirky convention for publishing.")," A fictional scoped package of ",(0,r.kt)("inlineCode",{parentName:"p"},"@foo/bar")," would be published to npm as: ",(0,r.kt)("inlineCode",{parentName:"p"},"@types/foo__bar"),". This is functional but non-obvious; it's tricky to discover. A two step process instead of a one step process is a non-useful friction that it would be great to eliminate."),(0,r.kt)("p",null,"Fortunately, Kent and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FredyC"},"Daniel K")," had one of these moments:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(12928).Z,width:"640",height:"271"})),(0,r.kt)("p",null,"Kent suggested that at the same time as dropping the type definitions that were shipped with the library, we try making ",(0,r.kt)("inlineCode",{parentName:"p"},"@types/testing-library__react")," a dependency of ",(0,r.kt)("inlineCode",{parentName:"p"},"@testing-library/react"),". This would mean that people installing ",(0,r.kt)("inlineCode",{parentName:"p"},"@testing-library/react")," would get ",(0,r.kt)("inlineCode",{parentName:"p"},"@types/testing-library__react")," installed ",(0,r.kt)("em",{parentName:"p"},"automatically"),". So from the developers point of view, it's as though the type definitions shipped with the package directly."),(0,r.kt)("p",null,"To cut a long story short reader, that's what happened. If you're using ",(0,r.kt)("inlineCode",{parentName:"p"},"@testing-library/react")," from 9.1.2 you're getting Definitely Typed under the covers. This was ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-testing-library/pull/437#issuecomment-521763117"},"nicely illustrated by Kent")," showing what the TypeScript consumption experience looked like before the Definitely Typed switch:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(62661).Z,width:"640",height:"385"})),(0,r.kt)("p",null,"And here's what it looked like after:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(22781).Z,width:"640",height:"403"})),(0,r.kt)("p",null,"Identical! i.e it worked. I grant you this is one of the more boring before / after comparisons there is\u2026 But hopefully you can see it demonstrates that this is giving us exactly what we need."),(0,r.kt)("p",null,"To quote Kent once more:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"By adding the type definitions to the dependencies of React Testing Library, the experience for users is completely unchanged. So it's a huge improvement for the maintenance of the type definitions without any breaking changes for the users of those definitions.")),(0,r.kt)("p",null,"This is clearly an approach that's useful; it adds value. It would be tremendous to see other libraries that aren't written in TypeScript but would like to enable a good TypeScript experience for those people that do use TS also adopting this approach."),(0,r.kt)("h2",{id:"update-use-a-loose-version-range-in-packagejson"},"Update: Use a Loose Version Range in ",(0,r.kt)("inlineCode",{parentName:"h2"},"package.json")),(0,r.kt)("p",null,"When I ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/johnny_reilly/status/1162843916661592064"},"tweeted this article")," it prompted this helpful response from ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/atcb"},"Andrew Branch")," of the TypeScript team:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},">"," use a loose version range This is my advice as well and should probably be mentioned in the article TBH."),(0,r.kt)("p",{parentName:"blockquote"},"\u2014 Kent C. Dodds (@kentcdodds) ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/kentcdodds/status/1162876792287293440?ref_src=twsrc%5Etfw"},"August 18, 2019"))),(0,r.kt)("script",{async:"",src:"https://platform.twitter.com/widgets.js",charSet:"utf-8"}),(0,r.kt)("p",null,"Andrew makes the useful point that if you are adding support for TypeScript via an ",(0,r.kt)("inlineCode",{parentName:"p"},"@types/...")," dependency then it's wise to do so with a loose version range. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-testing-library/blob/c4ba755e42938018ec67dbc716037cfafca15e03/package.json#L46"},"In the case of RTL we did it like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"@types/testing-library__react": "^9.1.0"\n')),(0,r.kt)("p",null,"i.e. Any type definition with a version of ",(0,r.kt)("inlineCode",{parentName:"p"},"9.1")," or greater (whilst still lower than ",(0,r.kt)("inlineCode",{parentName:"p"},"10.0.0"),") is considered valid. You could go even looser than that. If you really don't want to think about TypeScript beyond adding the dependency then a completely loose version range would do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"@types/testing-library__react": "*"\n')),(0,r.kt)("p",null,"This will always install the latest version of the ",(0,r.kt)("inlineCode",{parentName:"p"},"@types/testing-library__react")," dependency and (importantly) allow users to override if there's a problematic ",(0,r.kt)("inlineCode",{parentName:"p"},"@types/testing-library__react")," out there. This level of looseness is not really advised though. As in the scenario when a library (and associated type definitions) do a major release, users of the old major would get the wrong definitions by default when installing or upgrading (in range)."),(0,r.kt)("p",null,"Probably the most helpful approach is the approach followed by RTL; fixing the major version but allowing all minor and patch releases ",(0,r.kt)("em",{parentName:"p"},"inside")," a major version."),(0,r.kt)("h2",{id:"update-2-further-discussions"},"Update 2: Further Discussions!"),(0,r.kt)("p",null,"The technique used in this blog post sparked an interesting conversation with members of the TypeScript team when it was applied to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/testing-library/jest-dom"},(0,r.kt)("inlineCode",{parentName:"a"},"https://github.com/testing-library/jest-dom")),". ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/testing-library/jest-dom/issues/123#issuecomment-523586977"},"The conversation can be read here"),"."))}u.isMDXComponent=!0},62661:function(e,t,n){t.Z=n.p+"assets/images/RTL-9.1.1-ad3b6d7631076bed7e6740dbc322b7c5.png"},22781:function(e,t,n){t.Z=n.p+"assets/images/RTL-9.1.2-0222184c125ed38b3d141d5c7ca36325.png"},12928:function(e,t,n){t.Z=n.p+"assets/images/hang-on-lads-ive-got-a-great-idea-d87277f50bf9435db73abbf57226631a.jpg"}}]);