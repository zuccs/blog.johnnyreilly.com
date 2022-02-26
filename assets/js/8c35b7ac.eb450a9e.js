"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[67356],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},16222:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return h},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"Upgrading to TypeScript 0.9.5 - A Personal Memoir",authors:"johnnyreilly",tags:["Q","TypeScript","0.9.1.1","0.9.5","upgrading"],hide_table_of_contents:!1},s=void 0,p={permalink:"/2014/01/09/upgrading-to-typescript-095-personal",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-01-09-upgrading-to-typescript-095-personal/index.md",source:"@site/blog/2014-01-09-upgrading-to-typescript-095-personal/index.md",title:"Upgrading to TypeScript 0.9.5 - A Personal Memoir",description:"I recently made the step to upgrade from TypeScript 0.9.1.1 to 0.9.5. To my surprise this process was rather painful and certainly not an unalloyed pleasure. Since I'm now on the other side, so to speak, I thought I'd share my experience and cast back a rope bridge to those about to journey over the abyss.",date:"2014-01-09T00:00:00.000Z",formattedDate:"January 9, 2014",tags:[{label:"Q",permalink:"/tags/q"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"0.9.1.1",permalink:"/tags/0-9-1-1"},{label:"0.9.5",permalink:"/tags/0-9-5"},{label:"upgrading",permalink:"/tags/upgrading"}],readingTime:7.72,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Upgrading to TypeScript 0.9.5 - A Personal Memoir",authors:"johnnyreilly",tags:["Q","TypeScript","0.9.1.1","0.9.5","upgrading"],hide_table_of_contents:!1},prevItem:{title:"Integration Testing with Entity Framework and Snapshot Backups",permalink:"/2014/01/24/integration-testing-with-entity"},nextItem:{title:"NuGet and WebMatrix: How to install a specific version of a package",permalink:"/2013/12/13/nuget-and-webmatrix-how-to-install"}},u={authorsImageUrls:[void 0]},h=[{value:"TL;DR",id:"tldr",level:2},{value:"Upgrading the Plugin",id:"upgrading-the-plugin",level:2},{value:"Declaration Merging is dead... Sort of",id:"declaration-merging-is-dead-sort-of",level:2},{value:"The Promised Land",id:"the-promised-land",level:2}],c={toc:h};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"I recently made the step to upgrade from TypeScript 0.9.1.1 to 0.9.5. To my surprise this process was rather painful and certainly not an unalloyed pleasure. Since I'm now on the other side, so to speak, I thought I'd share my experience and cast back a rope bridge to those about to journey over the abyss."),(0,i.kt)("h2",{id:"tldr"},"TL;DR"),(0,i.kt)("p",null,"TypeScript 0.9.5 is worth making the jump to. However, if you are using Visual Studio (as I would guess many are) then you should be aware of a number of problems with the TypeScript Visual Studio tooling for TS 0.9.5. These problems can be worked around if you follow the instructions in this post."),(0,i.kt)("h2",{id:"upgrading-the-plugin"},"Upgrading the Plugin"),(0,i.kt)("p",null,"At home I upgraded the moment TS 0.9.5 was released. This allowed me to help with migrating the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/borisyankov/DefinitelyTyped"},"Definitely Typed typings")," over from 0.9.1.1. And allowed me to give TS 0.9.5 a little test drive. However, I deliberately held off performing the upgrade at work until I knew that all the Definitely Typed typings had been upgraded. This was completed ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/borisyankov/DefinitelyTyped/pull/1385"},"by the end of 2013"),". So in the new year it seemed a good time to make the move."),(0,i.kt)("p",null,"If, like me, you are using TypeScript inside Visual Studio then you'd imagine it's as simple as closing down VS, uninstalling TypeScript 0.9.1.1 from Programs and Features and then installing the ",(0,i.kt)("a",{parentName:"p",href:"http://www.typescriptlang.org/#Download"},"new plugin"),". And it is if you are running IE 10 or IE 11 on your Windows machine. If you are running a lower IE version then there is a problem."),(0,i.kt)("p",null,"Regrettably, the TypeScript 0.9.5 plugin installer has a dependency on IE 10. Fortunately TypeScript itself has no dependency on IE 10 at all (and why would it?). This dependency appears to have been a mistake. I ",(0,i.kt)("a",{parentName:"p",href:"https://typescript.codeplex.com/workitem/1975"},"raised it as an issue")," and the TS team have said that this will be resolved in the next major release."),(0,i.kt)("p",null,"Happily there is a workaround if you're running IE 9 or lower which has been noted in the ",(0,i.kt)("a",{parentName:"p",href:"https://blogs.msdn.com/b/typescript/archive/2013/12/05/announcing-typescript-0-9-5.aspx"},"comments underneath the TS 0.9.5 release blog post"),". All you do is set the ",(0,i.kt)("inlineCode",{parentName:"p"},"HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Microsoft\\Internet Explorer\\svcVersion")," registry key value to ",(0,i.kt)("inlineCode",{parentName:"p"},"10.0.9200.16384")," for the duration of the install."),(0,i.kt)("p",null,"First hurdle jumped, the upgrade continues simple enough. Then the fun starts..."),(0,i.kt)("h2",{id:"declaration-merging-is-dead-sort-of"},"Declaration Merging is dead... Sort of"),(0,i.kt)("p",null,"Having upgraded my plugin I opened up the project I'm working on in Visual Studio. I used NuGet to upgrade all the Definitely Typed packages to the latest (TS 0.9.5) versions. Then I tried, and failed, to compile. It was the the most obscure error I've seen in a while:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"VSTSC : tsc.js(37574, 25) Microsoft JScript runtime error : Unable to get value of the property 'wrapsSomeTypeParameter': object is null or undefined\n")),(0,i.kt)("p",null,"As you can see there was no indication where in my code the problem was being caused. Fortunately someone had already suffered this particular problem and logged an issue ",(0,i.kt)("a",{parentName:"p",href:"https://typescript.codeplex.com/workitem/1995"},"here"),". Digging through the comments I found a common theme; everyone experiencing the problem was using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/borisyankov/DefinitelyTyped/blob/master/q/Q.d.ts"},"Q typings"),". So what's up with that?"),(0,i.kt)("p",null,"Strangely, if you directly referenced the Q typings everything was okay - which is how the Definitely Typed tests came to pass in the first place. But if you wanted to make use of these typings with implicit referencing (in Visual Studio since TS 0.9.1, all TypeScript files in a project are considered to be referencing each other) - well it doesn't work."),(0,i.kt)("p",null,"I decided to take a look at the Q typings at this point to see what was so upsetting about them. The one thing that was obvious was that these typings make use of ",(0,i.kt)("a",{parentName:"p",href:"https://blogs.msdn.com/b/typescript/archive/2013/06/18/announcing-typescript-0-9.aspx"},"Declaration Merging"),". And this made them slightly different to most of the other typing libraries that I was using. So I decided to refactor the Q typings to use the more interface driven approach the other typing libraries used in the hope that might resolve the issue."),(0,i.kt)("p",null,"Roughly speaking I went from:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"declare function Q<T>(promise: Q.IPromise<T>): Q.Promise<T>;\ndeclare function Q<T>(promise: JQueryPromise<T>): Q.Promise<T>;\ndeclare function Q<T>(value: T): Q.Promise<T>;\n\ndeclare module Q {\n  //\u2026 functions etc in here\n}\n\ndeclare module 'q' {\n  export = Q;\n}\n")),(0,i.kt)("p",null,"To:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'interface QIPromise<T> {\n    //\u2026 functions etc in here\n}\n\ninterface QDeferred<T> {\n    //\u2026 functions etc in here\n}\n\ninterface QPromise<T> {\n    //\u2026 functions etc in here\n}\n\ninterface QPromiseState<T> {\n    //\u2026 functions etc in here\n}\n\ninterface QStatic {\n\n    <t>(promise: QIPromise<T>): QPromise<T>;\n    <t>(promise: JQueryPromise<T>): QPromise<T>;\n    <t>(value: T): QPromise<T>;\n\n    //\u2026 other functions etc continue here\n}\n\ndeclare module "q" {\n    export = Q;\n}\ndeclare var Q: QStatic;\n</t></t></t>\n')),(0,i.kt)("p",null,"And that fixed the obscure 'wrapsSomeTypeParameter' error. The full source code of these amended typings can be found as a GitHub Repo ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/Q-TS-0.9.5-WorkAround"},"here")," in case you want to use it yourself. (I did originally consider adding this to Definitely Typed but opted not to in the end - ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/borisyankov/DefinitelyTyped/pull/1497"},"see discussion on GitHub"),".)"),(0,i.kt)("h2",{id:"the-promised-land"},"The Promised Land"),(0,i.kt)("p",null,"You're there. You've upgraded to the new plugin and the new typings. All is compiling as it should and the language service is working as well. Was it worth it? I think yes, for the following reasons:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"TS 0.9.5 compiles faster, and hogs less memory."),(0,i.kt)("li",{parentName:"ol"},"When we compiled with TS 0.9.5 we found there were a couple of bugs in our codebase which the tightened up compiler was now detecting. Essentially where we'd assumed types were flowing through to functions there were a couple of occasions with TS 0.9.1.1 where they weren't. Where we'd assumed we had a type of ",(0,i.kt)("inlineCode",{parentName:"li"},"T")," available in a function whereas it was actually a type of ",(0,i.kt)("inlineCode",{parentName:"li"},"any"),". I was really surprised that this was the case since we were already making use of ",(0,i.kt)("inlineCode",{parentName:"li"},"noImplicitAny")," compiler flag in our project. So where a type had changed and a retired property was being referenced TS 0.9.5 picked up an error that TS 0.9.1.1 had not. Good catch!"),(0,i.kt)("li",{parentName:"ol"},"And finally (and I know these are really minor), the compiled JS is a little different now. Firstly, the compiled JS features all of TypeScript comments in the positions that you might hope for. Previously it seemed that about 75% came along for the ride and ended up in some strange locations sometimes. Secondly, enums are treated differently during compilation now - where it makes sense the actual backing value of an enum is used rather than going through the JavaScript construct. So it's a bit like a ",(0,i.kt)("inlineCode",{parentName:"li"},"const")," I guess - presumably this allows JavaScript engines to optimise a little more.")),(0,i.kt)("p",null,"I hope I haven't put you off with this post. I think TypeScript 0.9.5 is well worth making the leap for - and hopefully by reading this you'll have saved yourself from a few of the rough edges."))}d.isMDXComponent=!0}}]);