"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[27113],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={title:"TypeScript: In Praise of Union Types",authors:"johnnyreilly",tags:["TypeScript","Option bags","Union Types","Function syntax"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2015/01/20/typescript-using-functions-with-union-types",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2015-01-20-typescript-using-functions-with-union-types/index.md",source:"@site/blog/2015-01-20-typescript-using-functions-with-union-types/index.md",title:"TypeScript: In Praise of Union Types",description:"(& How to Express Functions in UTs)",date:"2015-01-20T00:00:00.000Z",formattedDate:"January 20, 2015",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"Option bags",permalink:"/tags/option-bags"},{label:"Union Types",permalink:"/tags/union-types"},{label:"Function syntax",permalink:"/tags/function-syntax"}],readingTime:6.29,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"TypeScript: In Praise of Union Types",authors:"johnnyreilly",tags:["TypeScript","Option bags","Union Types","Function syntax"],hide_table_of_contents:!1},prevItem:{title:"The Convent with Continuous Delivery",permalink:"/2015/02/11/the-convent-with-continuous-delivery"},nextItem:{title:"Deploying from ASP.Net MVC to GitHub Pages using AppVeyor part 2",permalink:"/2015/01/07/deploying-aspnet-mvc-to-github-pages-with-appveyor-part-2"}},p={authorsImageUrls:[void 0]},u=[{value:"(&amp; How to Express Functions in UTs)",id:"-how-to-express-functions-in-uts",level:2},{value:"A little history",id:"a-little-history",level:2},{value:"That&#39;s right - the days before Union Types are now &quot;history&quot; :-)",id:"thats-right---the-days-before-union-types-are-now-history--",level:3},{value:"A new dawn",id:"a-new-dawn",level:2},{value:"State of the Union",id:"state-of-the-union",level:2},{value:"Bonfire of the Overloads",id:"bonfire-of-the-overloads",level:2}],c={toc:u};function h(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",r({},{id:"-how-to-express-functions-in-uts"}),"(& How to Express Functions in UTs)"),(0,a.kt)("p",null,"Have you heard the good news my friend? I refer, of course, to the shipping of TypeScript 1.4 and my ",(0,a.kt)("em",{parentName:"p"},"favourite")," language feature since generics.... Union Types."),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://blogs.msdn.com/b/typescript/archive/2015/01/16/announcing-typescript-1-4.aspx"}),"1",".","4 announcement")," Jonathan Turner described Union Types thusly:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"JavaScript functions may take a number of possible argument types. Up to now, we\u2019ve supported this using function overloads. Starting with TypeScript 1.4, we\u2019ve generalized this capability and now allow you to specify that that a value is one of a number of different types using a union type:"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"function f(x: number | number[]) {\n  if (typeof x === 'number') {\n    return x + 10;\n  } else {\n    // return sum of numbers\n  }\n}\n")),(0,a.kt)("p",{parentName:"blockquote"},"Once you have a value of a union type, you can use a typeof and instanceof checks to use the value in a type-safe way. You'll notice we use this in the above example and can treat x as a number type inside of the if-block."),(0,a.kt)("p",{parentName:"blockquote"},"Union types are a new kind of type and work any place you specify a type.")),(0,a.kt)("p",null,"Lovely right? But what's missing? Well, to my mind, the most helpful aspect of Union Types. Definition file creation."),(0,a.kt)("h2",r({},{id:"a-little-history"}),"A little history"),(0,a.kt)("h3",r({},{id:"thats-right---the-days-before-union-types-are-now-history--"}),'That\'s right - the days before Union Types are now "history" :-)'),(0,a.kt)("p",null,"When creating definition files (",(0,a.kt)("inlineCode",{parentName:"p"},"*.d.ts"),') in the past there was a problem with TypeScript. A limitation. JavaScript often relies on "option bags" to pass configuration into a method. An "option bag" is essentially a JavaScript object literal which contains properties which are used to perform configuration. A good example of this is the ',(0,a.kt)("inlineCode",{parentName:"p"},"route")," parameter passed into Angular's ngRoute ",(0,a.kt)("inlineCode",{parentName:"p"},'<a href="https://docs.angularjs.org/api/ngRoute/provider/$routeProvider#when">when</a>')," method."),(0,a.kt)("p",null,"I'd like to draw your attention to 2 of the properties that can be passed in (quoted from the documentation):"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"controller \u2013 ",(0,a.kt)("inlineCode",{parentName:"p"},"{(string|function()=}")," \u2013 Controller fn that should be associated with newly created scope or the name of a registered controller if passed as a string.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"template \u2013 ",(0,a.kt)("inlineCode",{parentName:"p"},"{string=|function()=}")," \u2013 html template as a string or a function that returns an html template as a string which should be used by ngView or ngInclude directives. This property takes precedence over templateUrl."),(0,a.kt)("p",{parentName:"li"},"If template is a function, it will be called with the following parameters:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"{Array.&lt;Object&gt;}")," ","-"," route parameters extracted from the current $location.path() by applying the current route")))),(0,a.kt)("p",null,"Both of these properties can be of more than 1 type."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"controller")," can be a ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),(0,a.kt)("em",{parentName:"li"},"or")," a ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"template")," can be a ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),(0,a.kt)("em",{parentName:"li"},"or")," a ",(0,a.kt)("inlineCode",{parentName:"li"},"function")," that returns a ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," and has ",(0,a.kt)("inlineCode",{parentName:"li"},"$routeParams")," as a parameter.")),(0,a.kt)("p",null,"There's the rub. Whilst it was possible to overload functions in TypeScript pre 1.4, it was ",(0,a.kt)("u",null,"not")),(0,a.kt)("p",null,"possible to overload interface members. This meant the only way to model these sorts of properties was by seeking out a best common type which would fit all scenarios. This invariably meant using the ",(0,a.kt)("inlineCode",{parentName:"p"},"any")," type. Whilst that worked it didn't lend any consuming code a great deal of type safety. Let's look at a truncated version of ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/borisyankov/DefinitelyTyped/blob/c71628e0765eb8e240d8eabd2225f64ea2e2fdb8/angularjs/angular-route.d.ts"}),(0,a.kt)("inlineCode",{parentName:"a"},"angular-route.d.ts"))," for these properties prior to union types:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"declare module ng.route {\n  // ...\n\n  interface IRoute {\n    /**\n     * {(string|function()=}\n     * Controller fn that should be associated with newly created scope or\n     * the name of a registered controller if passed as a string.\n     */\n    controller?: any;\n\n    /**\n     * {string=|function()=}\n     * Html template as a string or a function that returns an html template\n     * as a string which should be used by ngView or ngInclude directives. This\n     * property takes precedence over templateUrl.\n     *\n     * If template is a function, it will be called with the following parameters:\n     *\n     * {Array.<Object>} - route parameters extracted from the current\n     * $location.path() by applying the current route\n     */\n    template?: any;\n\n    // ...\n  }\n\n  // ...\n}\n")),(0,a.kt)("p",null,"It's ",(0,a.kt)("inlineCode",{parentName:"p"},"any")," city... Kind of sticks in the craw doesn't it?"),(0,a.kt)("h2",r({},{id:"a-new-dawn"}),"A new dawn"),(0,a.kt)("p",null,"TypeScript 1.4 has shipped and Union Types are with us. We can do better than ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),". So what does ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/borisyankov/DefinitelyTyped/blob/30ce45e0e706322f34608ab6fa5de141bba59c90/angularjs/angular-route.d.ts"}),(0,a.kt)("inlineCode",{parentName:"a"},"angular-route.d.ts"))," look like now we have Union Types?"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"declare module ng.route {\n  // ...\n\n  interface IRoute {\n    /**\n     * {(string|function()=}\n     * Controller fn that should be associated with newly created scope or\n     * the name of a registered controller if passed as a string.\n     */\n    controller?: string | Function;\n\n    /**\n     * {string=|function()=}\n     * Html template as a string or a function that returns an html template\n     * as a string which should be used by ngView or ngInclude directives. This\n     * property takes precedence over templateUrl.\n     *\n     * If template is a function, it will be called with the following parameters:\n     *\n     * {Array.<Object>} - route parameters extracted from the current\n     * $location.path() by applying the current route\n     */\n    template?:\n      | string\n      | { ($routeParams?: ng.route.IRouteParamsService): string };\n\n    // ...\n  }\n\n  // ...\n}\n")),(0,a.kt)("p",null,"With these changes in place we are now accurately modelling the ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," option bags in TypeScript. Hoorah!!!"),(0,a.kt)("p",null,"Let's dig in a little. If you look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"controller")," definition it's pretty straightforward. ",(0,a.kt)("inlineCode",{parentName:"p"},"string|Function")," ","-"," clearly the ",(0,a.kt)("inlineCode",{parentName:"p"},"controller")," can be a ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),(0,a.kt)("em",{parentName:"p"},"or")," a ",(0,a.kt)("inlineCode",{parentName:"p"},"Function"),". Simple."),(0,a.kt)("p",null,"Now let's look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"template")," definition by itself:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"template?: string | { ($routeParams?: ng.route.IRouteParamsService) : string; }\n")),(0,a.kt)("p",null,"As with the ",(0,a.kt)("inlineCode",{parentName:"p"},"controller")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"template")," can be a string - that is pretty clear. But what's that hovering on the other side of the \"","|",'"? What could ',(0,a.kt)("inlineCode",{parentName:"p"},"{ ($routeParams?: ng.route.IRouteParamsService) : string; }")," be exactly?"),(0,a.kt)("p",null,"Well, in a word, it's a ",(0,a.kt)("inlineCode",{parentName:"p"},"Function"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"controller")," would allow any kind of function at all. However the ",(0,a.kt)("inlineCode",{parentName:"p"},"template")," definition is deliberately more restrictive. This defines a function which must return a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," and which receives an optional parameter of ",(0,a.kt)("inlineCode",{parentName:"p"},"$routeParams")," of type ",(0,a.kt)("inlineCode",{parentName:"p"},"ng.route.IRouteParamsService"),"."),(0,a.kt)("h2",r({},{id:"state-of-the-union"}),"State of the Union"),(0,a.kt)("p",null,"Hopefully you can now see just how useful Union Types are and how you can express specific sorts of function definitions as part of a Union Type."),(0,a.kt)("p",null,"The thing that prompted me first to write this post was seeing that there don't appear to be any examples out there of how to express functions inside Union Types. I only landed on the syntax myself after a little experimentation in Visual Studio after I'd installed TS 1.4. I've started work on bringing Union Types to the typings inside ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/borisyankov/DefinitelyTyped"}),"DefinitelyTyped")," and so you'll start to see them appearing more and more. But since it's rather \"hidden knowledge\" at present I wanted to do my bit to make it a little better known."),(0,a.kt)("p",null,"As ",(0,a.kt)("a",r({parentName:"p"},{href:"https://twitter.com/Rickenhacker"}),"Daniel")," helpfully points out in the comments there is an alternate syntax - lambda style. So instead of this:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"template?: string | { ($routeParams?: ng.route.IRouteParamsService) : string; }\n")),(0,a.kt)("p",null,"You could write this:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"template?: string | (($routeParams?: ng.route.IRouteParamsService) => string);\n")),(0,a.kt)("p",null,"Just remember to place parentheses around the lambda to clearly delineate it."),(0,a.kt)("h2",r({},{id:"bonfire-of-the-overloads"}),"Bonfire of the Overloads"),(0,a.kt)("p",null,'Before I sign off I should mention the ability Union Types give you to define a much terser definition file. Basically the "',"|",'" operator makes for a bonfire of the overloads. Where you previously may have had 6 overloads for the same method (each with identical JSDoc) you now only need 1. Which is beautiful (and DRY).'),(0,a.kt)("p",null,"It's surprising just what a difference it makes. This is ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/borisyankov/DefinitelyTyped/blob/9bd7fe69d98337db56144c3da131d413f5b7e895/jquery/jquery.d.ts"}),(0,a.kt)("inlineCode",{parentName:"a"},"jQuery.d.ts"))," last week (pre TypeScript 1.4). This is ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/borisyankov/DefinitelyTyped/blob/9f64372a065541fe2b8f6c5c5cd9b55a1d631f19/jquery/jquery.d.ts"}),(0,a.kt)("inlineCode",{parentName:"a"},"jQuery.d.ts"))," now - with Union Types aplenty. Last week it was ","~","4000 lines of code. This week it's ","~","3200 lines of code. With the same functionality. Union Types are ",(0,a.kt)("em",{parentName:"p"},"FANTASTIC"),"!"))}h.isMDXComponent=!0}}]);