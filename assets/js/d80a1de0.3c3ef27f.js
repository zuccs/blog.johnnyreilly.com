"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[26457],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,d=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(d,r(r({ref:t},h),{},{components:n})):a.createElement(d,r({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>h});n(67294);var a=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const r={title:"TypeScript, JSDoc and Intellisense",authors:"johnnyreilly",tags:["jquery","JSDoc","TypeScript","Intellisense","jQuery.d.ts"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2014/05/05/typescript-jsdoc-and-intellisense",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2014-05-05-typescript-jsdoc-and-intellisense/index.md",source:"@site/blog/2014-05-05-typescript-jsdoc-and-intellisense/index.md",title:"TypeScript, JSDoc and Intellisense",description:"Days of Yore",date:"2014-05-05T00:00:00.000Z",formattedDate:"May 5, 2014",tags:[{label:"jquery",permalink:"/tags/jquery"},{label:"JSDoc",permalink:"/tags/js-doc"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"Intellisense",permalink:"/tags/intellisense"},{label:"jQuery.d.ts",permalink:"/tags/j-query-d-ts"}],readingTime:14.35,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"TypeScript, JSDoc and Intellisense",authors:"johnnyreilly",tags:["jquery","JSDoc","TypeScript","Intellisense","jQuery.d.ts"],hide_table_of_contents:!1},prevItem:{title:"Team Foundation Server, Continuous Integration and separate projects for JavaScript unit tests",permalink:"/2014/05/15/team-foundation-server-continuous-integration-and-javascript-unit-tests-in-unit-test-project"},nextItem:{title:"TypeScript this is what I want! (the unfortunate neglect of Instance Methods / callback functions)",permalink:"/2014/04/01/typescript-instance-methods"}},u={authorsImageUrls:[void 0]},h=[{value:"Days of Yore",id:"days-of-yore",level:2},{value:"Definitely Intellisensed",id:"definitely-intellisensed",level:2},{value:"Why <code>jquery.d.ts</code>?",id:"why-jquerydts",level:2},{value:"Turning API documentation into JSDoc",id:"turning-api-documentation-into-jsdoc",level:2},{value:"1. You have 20 seconds to comply (with the API)",id:"1-you-have-20-seconds-to-comply-with-the-api",level:2},{value:"2. <code>String</code> and <code>Array of String</code> setters",id:"2-string-and-array-of-string-setters",level:2},{value:"3. Getter",id:"3-getter",level:2},{value:"4. The <code>Function</code> setter",id:"4-the-function-setter",level:2},{value:"It could be you...",id:"it-could-be-you",level:2}],p={toc:h};function c(e){var{components:t}=e,r=i(e,["components"]);return(0,a.kt)("wrapper",o({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",o({},{id:"days-of-yore"}),"Days of Yore"),(0,a.kt)("p",null,'It was my first job. The web was alive and well at this point but still very much in it\'s infancy. Newspapers had only recently moved on from calling it "the information superhighway". No-one was doing ',(0,a.kt)("em",{parentName:"p"},"real")," programming for the web - the desktop was where it was at."),(0,a.kt)("p",null,"As for me, I was writing call centre software. It was all very exciting. Here was the idea: the phone on your desk would start ringing and through the magic of ",(0,a.kt)("a",o({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Telephony_Application_Programming_Interface"}),"TAPI"),' our app would be presented with the telephone number of the dialer. It would then look up that telephone number in the appropriate CRM application and pop the callers details on the screen. You\'d pick up the phone and bellow "why hello Mr Jones!" and either impress the caller with your incredible fore-knowledge of who had rung you or perhaps terrify them with our ',(0,a.kt)("a",o({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Nineteen_Eighty-Four"}),"Brave New Orwellian World"),"."),(0,a.kt)("p",null,"My job was to work out how to call into the APIs of the various CRM applications / databases being used and extract the relevant information. So it goes without saying that I have spent a lot of time with badly documented APIs. Or in fact ",(0,a.kt)("em",{parentName:"p"},"undocumented")," APIs. I know pain my friend..."),(0,a.kt)("p",null,"Hours and days were spent debugging and walking APIs just to find out what they could do and what information they exposed. This, I need hardly say, was dull and tedious work. Having spent longer than I care to remember with no more information on an API than method names has left its mark on me. I am consequently keener than your average dev on documentation and intellisense. When you've stared at the coalface of the ",(0,a.kt)("a",o({parentName:"p"},{href:"http://en.wikipedia.org/wiki/IBM_Notes"}),"Lotus Notes")," API for 2 weeks with only Dephi 3 as your constant companion you'd feel the same way too. (This was ",(0,a.kt)("a",o({parentName:"p"},{href:"http://en.wikipedia.org/wiki/AltaVista"}),"before the days of Google")," and actually being able to find stuff on the internet.)"),(0,a.kt)("p",null,"If you can convey information about the API that you're building then I'd say you're duty-bound to do so. Or at least that it's good manners."),(0,a.kt)("h2",o({},{id:"definitely-intellisensed"}),"Definitely Intellisensed"),(0,a.kt)("p",null,"When I started getting involved with the ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/DefinitelyTyped"}),"Definitely Typed project"),' my focus was on giving good Intellisense. Where there was documentation for an API I wanted to get that popping in front of users when they hit the "." key:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of intellisense in visual studio",src:n(96680).Z,width:"486",height:"314"})),(0,a.kt)("p",null,"As the above screenshot demonstrates ",(0,a.kt)("a",o({parentName:"p"},{href:"https://devblogs.microsoft.com/typescript/announcing-typescript-0-8-2/"}),"TypeScript supports Intellisense")," through a slightly tweaked implementation of ",(0,a.kt)("a",o({parentName:"p"},{href:"http://en.wikipedia.org/wiki/JSDoc"}),"JSDoc"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"With 0.8.2, the TypeScript compiler and tools now support JSDoc comments."),(0,a.kt)("p",{parentName:"blockquote"},"In the TypeScript implementation, because types are already part of the system, we allow the JSDoc type annotation to be elided, as in the example above."),(0,a.kt)("p",{parentName:"blockquote"},"You can now document a variety of language constructs (including classes, modules, interfaces, and functions) with comments that become part of the information displayed to the user. We\u2019ve also started extending lib.d.ts, the default JS and DOM API library, with JSDoc comments.")),(0,a.kt)("p",null,"Partly as an exercise in getting better acquainted with TypeScript and partly responding to my instinctive need to have nicely documented APIs I decided to start adding JSDoc comments to the world's most popular typings file ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/borisyankov/DefinitelyTyped/blob/master/jquery/jquery.d.ts"}),(0,a.kt)("inlineCode",{parentName:"a"},"jquery.d.ts")),"."),(0,a.kt)("h2",o({},{id:"why-jquerydts"}),"Why ",(0,a.kt)("inlineCode",{parentName:"h2"},"jquery.d.ts"),"?"),(0,a.kt)("p",null,"Well a number of reasons:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"I used ",(0,a.kt)("inlineCode",{parentName:"li"},"jquery.d.ts")," already myself and I'm a firm believer in ",(0,a.kt)("a",o({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Eating_your_own_dog_food"}),"eating your own dogfood")),(0,a.kt)("li",{parentName:"ol"},"jQuery is well documented. I needed a source of information to power my JSDoc and ",(0,a.kt)("a",{href:"//api.jquery.com"},"api.jquery.com")," had my back."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"jquery.d.ts")," was widely used. Given how ubiquitous jQuery has become this typing file was unsurprisingly the most popular in the world. That was key for me as I wanted feedback - if I was making a mess of the typings I wanted someone to pitch in and tell me.")),(0,a.kt)("p",null,"Just to digress once more, points #2 and #3 turned out to be of particular note."),(0,a.kt)("p",null,"Concerning point #2, I did find the occasional ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/borisyankov/DefinitelyTyped/pull/1471#issuecomment-31204115"}),"error")," or ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/borisyankov/DefinitelyTyped/pull/1835#issuecomment-37533088"}),"inconsistency")," in the jQuery API documentation. These were definitely the exception rather than the rule though. And thanks to the very helpful ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/dmethvin"}),"Dave Methvin")," these actually lead to ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/jquery/api.jquery.com/pull/460"}),"minor improvements to the jQuery API documentation"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tweet by @basarat at 8:47 PM on Dec 26, 2013 reading &quot;#TypeScript definitions pointing out errors in JavaScript docs of a project #Jquery : https://github.com/borisyankov/DefinitelyTyped/pull/1471#issuecomment-31204115 caught by @johnny_reilly&quot; original tweet here: https://twitter.com/basarat/status/416309213430689792",src:n(89444).Z,width:"1172",height:"402"})),(0,a.kt)("p",null,"Concerning point #3 I did indeed get feedback. As well as enriching ",(0,a.kt)("inlineCode",{parentName:"p"},"jquery.d.ts")," with JSDoc goodness I also found myself fixing slight errors in the typings. Here and there I would find examples where ",(0,a.kt)("inlineCode",{parentName:"p"},"jquery.d.ts")," was out of line the with API documentation. Where this was the case I would amend the typings to bring them into line - trying to make ",(0,a.kt)("inlineCode",{parentName:"p"},"jquery.d.ts")," entirely API-compliant. This was ",(0,a.kt)("a",{href:"https://github.com/borisyankov/DefinitelyTyped/issues/1499"},"not always popular"),". But despite the heat it generated I think it ended up leading to a better typing file. I'm again grateful for Dave Methvin's thoughtful contributions."),(0,a.kt)("h2",o({},{id:"turning-api-documentation-into-jsdoc"}),"Turning API documentation into JSDoc"),(0,a.kt)("p",null,"I wanted to take an example of API documentation and demonstrate how that can be applied to a typing file with particular focus on how JSDoc comments can be created to drive Intellisense. So let's take everyone's favourite jQuery method: ",(0,a.kt)("inlineCode",{parentName:"p"},"val"),". The documentation of ",(0,a.kt)("inlineCode",{parentName:"p"},"val")," can be found here: ",(0,a.kt)("a",o({parentName:"p"},{href:"http://api.jquery.com/val"}),"api.jquery.com/val")),(0,a.kt)("p",null,"By the way, check out the ","*",(0,a.kt)("em",{parentName:"p"},"entirely"),"*"," intuitive URL. Now you've clocked just how straightforward that is you've probably a fair idea how you could find pretty much any jQuery documentation you might need without recourse to Google. Brilliant!"),(0,a.kt)("p",null,"Let's take a look at what ",(0,a.kt)("inlineCode",{parentName:"p"},"val")," looked like ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/borisyankov/DefinitelyTyped/blob/c98eebb13724b5156f12318b68fc2d875ca6e4a3/jquery/jquery.d.ts#L364-L368"}),"before JSDoc")," in the first version of the typing available on GitHub. (By the way, remember the original ",(0,a.kt)("inlineCode",{parentName:"p"},"jquery.d.ts"),(0,a.kt)("a",o({parentName:"p"},{href:"https://typescript.codeplex.com/sourcecontrol/latest#samples/jquery/jquery.d.ts"})," came out of the TypeScript team"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"val(): any;\nval(value: string[]): JQuery;\nval(value: string): JQuery;\nval(value: number): JQuery;\nval(func: (index: any, value: any) => any): JQuery;\n")),(0,a.kt)("p",null,"And now let's look at ",(0,a.kt)("inlineCode",{parentName:"p"},"jquery.d.ts"),(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/borisyankov/DefinitelyTyped/blob/c259dba094121a389b41c573d5000dda7bdf2092/jquery/jquery.d.ts#L1494-L1545"}),"after JSDoc"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"/**\n * Get the current value of the first element in the set of matched elements.\n */\nval(): any;\n/**\n * Set the value of each element in the set of matched elements.\n *\n * @param value A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.\n */\nval(value: string): JQuery;\n/**\n * Set the value of each element in the set of matched elements.\n *\n * @param value A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.\n */\nval(value: string[]): JQuery;\n/**\n * Set the value of each element in the set of matched elements.\n *\n * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n */\nval(func: (index: number, value: string) => string): JQuery;\n/**\n * Set the value of each element in the set of matched elements.\n *\n * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n */\nval(func: (index: number, value: string[]) => string): JQuery;\n/**\n * Set the value of each element in the set of matched elements.\n *\n * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n */\nval(func: (index: number, value: number) => string): JQuery;\n/**\n * Set the value of each element in the set of matched elements.\n *\n * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n */\nval(func: (index: number, value: string) => string[]): JQuery;\n/**\n * Set the value of each element in the set of matched elements.\n *\n * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n */\nval(func: (index: number, value: string[]) => string[]): JQuery;\n/**\n * Set the value of each element in the set of matched elements.\n *\n * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n */\nval(func: (index: number, value: number) => string[]): JQuery;\n")),(0,a.kt)("p",null,"Many changes yes? Let's break it down a little."),(0,a.kt)("h2",o({},{id:"1-you-have-20-seconds-to-comply-with-the-api"}),"1. You have 20 seconds to comply (with the API)"),(0,a.kt)("p",null,"The first thing to note is the ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," setter method:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"val(value: number): JQuery;\n")),(0,a.kt)("p",null,"Let's have a look at the jQuery documentation for the simple setter:"),(0,a.kt)("blockquote",null,(0,a.kt)("h2",o({parentName:"blockquote"},{id:"val-value-"}),(0,a.kt)("a",o({parentName:"h2"},{href:"http://api.jquery.com/val/#val-value"}),(0,a.kt)("inlineCode",{parentName:"a"},".val( value )"))),(0,a.kt)("div",null,(0,a.kt)("strong",null,"value")),(0,a.kt)("div",null,"Type: ",(0,a.kt)("a",{href:"http://api.jquery.com/Types/#String"},"String")," or ",(0,a.kt)("a",{href:"http://api.jquery.com/Types/#Array"},"Array")),(0,a.kt)("div",null,"A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.")),(0,a.kt)("p",null,"See the problem? There is ","*",(0,a.kt)("em",{parentName:"p"},"no"),"*"," ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," setter. The typings are wrong. So let's remedy this:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"<strike>val(value: number): JQuery;</strike>\n")),(0,a.kt)("h2",o({},{id:"2-string-and-array-of-string-setters"}),"2. ",(0,a.kt)("inlineCode",{parentName:"h2"},"String")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"Array of String")," setters"),(0,a.kt)("p",null,"The documentation states that we have setters which accept ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Array of String"),". These are already modeled in the existing typings by the ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"string[]")," overloads:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"val(value: string[]): JQuery;\n    val(value: string): JQuery;\n")),(0,a.kt)("p",null,"So let's enrich these typings with some JSDoc:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"/**\n * Set the value of each element in the set of matched elements.\n *\n * @param value A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.\n */\nval(value: string): JQuery;\n/**\n * Set the value of each element in the set of matched elements.\n *\n * @param value A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.\n */\nval(value: string[]): JQuery;\n")),(0,a.kt)("p",null,"If you look you can see we've added a related JSDoc style comment block prior to each overload. The first part of the comment (",(0,a.kt)("em",{parentName:"p"},'"Set the value of..."'),") is the overarching Intellisense that is displayed. Each of the ",(0,a.kt)("inlineCode",{parentName:"p"},"@param")," statements represents each of the parameters and it's associated comment. By comparing the ",(0,a.kt)("a",o({parentName:"p"},{href:"http://api.jquery.com/val/#val-value"}),"API documentation")," to the JSDoc it's pretty clear how the API has been transformed into useful JSDoc."),(0,a.kt)("p",null,"It's worth noting that I could have taken the choice to customise the ",(0,a.kt)("inlineCode",{parentName:"p"},"@param value")," comments based on the overload I was JSDoc-ing. Arguably it would have been more useful to have something like this instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"/**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param value A string of text <strike>or an array of strings</strike> corresponding to the value of each matched element to set as selected/checked.\n     */\n    val(value: string): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param value <strike>A string of text or</strike> an array of strings corresponding to the value of each matched element to set as selected/checked.\n     */\n    val(value: string[]): JQuery;\n")),(0,a.kt)("p",null,"After some pondering I decided not to take this approach, just to maintain that close relationship between ",(0,a.kt)("inlineCode",{parentName:"p"},"jquery.d.ts")," and ",(0,a.kt)("a",o({parentName:"p"},{href:"http://api.jquery.com/"}),"api.jquery.com"),". It's open to debate how useful that relationship actually is so I thought I'd just highlight this as a choice I made."),(0,a.kt)("h2",o({},{id:"3-getter"}),"3. Getter"),(0,a.kt)("p",null,"The jQuery documentation for the getter looks like this:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",o({parentName:"p"},{href:"http://api.jquery.com/val/#val"}),(0,a.kt)("inlineCode",{parentName:"a"},".val()"))),(0,a.kt)("p",{parentName:"blockquote"},"Returns: ",(0,a.kt)("a",{href:"http://api.jquery.com/Types/#String"},"String")," or ",(0,a.kt)("a",{href:"http://api.jquery.com/Types/#Number"},"Number")," or ",(0,a.kt)("a",{href:"http://api.jquery.com/Types/#Array"},"Array")),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Description: "),"Get the current value of the first element in the set of matched elements.")),(0,a.kt)("p",null,"So the ",(0,a.kt)("inlineCode",{parentName:"p"},"val()")," overload can return a ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", a ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," or a ",(0,a.kt)("inlineCode",{parentName:"p"},"string[]"),". Unfortunately there is no real way to model that in TypeScript at present due to the absence of ",(0,a.kt)("a",o({parentName:"p"},{href:"https://typescript.codeplex.com/workitem/1364"}),'"union types"'),". Union types are being ",(0,a.kt)("a",o({parentName:"p"},{href:"https://typescript.codeplex.com/discussions/543598#PostDetailsCell_1239340"}),"discussed at present")," but in TypeScript v1.0 world the only viable approach is returning the ",(0,a.kt)("inlineCode",{parentName:"p"},"any")," type. This implies ",(0,a.kt)("inlineCode",{parentName:"p"},"val()")," returns any possible JavaScript value from ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"Function")," and straight on 'til morning. So clearly this isn't accurate but importantly it also allows for the possibility of ",(0,a.kt)("inlineCode",{parentName:"p"},"val()")," returning ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"string[]"),"."),(0,a.kt)("p",null,"The final getter typing with JSDoc applied ends up looking like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"/**\n     * Get the current value of the first element in the set of matched elements.\n     */\n    val(): any;\n")),(0,a.kt)("p",null,"As you can see the ",(0,a.kt)("em",{parentName:"p"},'"Get the current value..."')," from the API docs has been used as the overarching Intellisense that is displayed for the getter."),(0,a.kt)("h2",o({},{id:"4-the-function-setter"}),"4. The ",(0,a.kt)("inlineCode",{parentName:"h2"},"Function")," setter"),(0,a.kt)("p",null,"Finally we're going to take a look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"Function")," setter which is documented as follows:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",o({parentName:"p"},{href:"http://api.jquery.com/val/#val-functionindex--value"}),(0,a.kt)("inlineCode",{parentName:"a"},".val( function(index, value) )"))),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"function(index, value)")),(0,a.kt)("div",null,"Type: ",(0,a.kt)("a",{href:"http://api.jquery.com/Types/#Function"},"Function"),"()"),(0,a.kt)("div",null,"A function returning the value to set. ",(0,a.kt)("code",null,"this")," is the current element. Receives the index position of the element in the set and the old value as arguments.")),(0,a.kt)("p",null,"If you cast your eyes back to the original typings for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Function")," setter you'll see they look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"val(func: (index: any, value: any) => any): JQuery;\n")),(0,a.kt)("p",null,"This is a good start but it's less accurate than it could be in a number of ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"index")," is a ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," ","-"," we needn't keep it as an ",(0,a.kt)("inlineCode",{parentName:"li"},"any")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"value")," is the old value - we know from our getter that this can be a ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"string[]"),". So we can lose the ",(0,a.kt)("inlineCode",{parentName:"li"},"any")," in favour of overloads which specify different types for ",(0,a.kt)("inlineCode",{parentName:"li"},"value")," in each."),(0,a.kt)("li",{parentName:"ol"},"The return value of the function is the value that should be set. We know from our other setters that the possible types allowed here are ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"string[]"),". (And yes I'm as puzzled as you are that the getter can return a ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," but the setter can't set one.) That being the case it makes sense for us to have overloads with functions that return both ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"string[]"))),(0,a.kt)("p",null,"So, we've got a little tidy up to do for #1 and extra overloads to add for #2 and #3. We're going to replace the single ",(0,a.kt)("inlineCode",{parentName:"p"},"Function")," setter with 3 overloads to cater for #2. Then for #3 we're going to take each of the 3 overloads we've just created and make 2 overloads place of each to handle the different return types. This will lead us with the grand total of 6 overloads to model our ",(0,a.kt)("inlineCode",{parentName:"p"},"Function")," setter!"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"/**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: string) => string): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: string[]) => string): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: number) => string): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: string) => string[]): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: string[]) => string[]): JQuery;\n    /**\n     * Set the value of each element in the set of matched elements.\n     *\n     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.\n     */\n    val(func: (index: number, value: number) => string[]): JQuery;\n")),(0,a.kt)("p",null,"A cursory glance shows that each of the overloads above shares the same JSDoc. Each has the ",(0,a.kt)("em",{parentName:"p"},'"Set the value..."')," from the API docs as the overarching Intellisense that is displayed for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Function")," setter. And each has the same ",(0,a.kt)("inlineCode",{parentName:"p"},"@param func")," comment as well."),(0,a.kt)("h2",o({},{id:"it-could-be-you"}),"It could be you..."),(0,a.kt)("p",null,"This post is much longer than I ever intended it to be. But I wanted to show how easy it is to create typings with JSDoc to drive Intellisense. For no obvious reason people generally don't make a great deal of use of JSDoc when creating typings. Perhaps the creators have no good source of documentation (a common problem). Or perhaps people are not even aware it's a possibility - they don't know about the TypeScript support of JSDoc. In case it's the latter I think this post was worth writing."))}c.isMDXComponent=!0},96680:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeYAAAE6CAMAAAD0sQGpAAACQ1BMVEX////n6Ozq6vLMztu1//8AgAAAAAAeHh7//7X//9vn6K5jtf+Lyexj1P//6Y3/2o0AAP/nq2za//+N2v9qHka1qwBFi8yNlgDnyY2N6f8eaq6q6Ozn6MzIi0bI6OzajTS1YwBqq+z/tWNjgGM0gGONNAAAY7Wqah40jdo0AGO1Y///1GOLRh40v9oAgGOlpaVjAGPavzRjAP9qHh40AP//2v80gABjADQAlo2jFRU0AAAANI0Aq7VqHmweHkZjgDQeRo0AAGOLRkZFRo1FHh4eHmw0gDSNNP/Buf8AgDRjgQBjAADf////3JVFHmw0jf///7kAADTPRBXP3P80ADTulUT/tf/ajf8AY/+Nq400v42jbrn/uW7BFW6jFW4ANP80lo1qRo1FHkayldza/9o0NI2NljTc/7eyFUSyFRW1vTQ0v7Ueao3fbhXBFRWjFUQ0NP+jRJWyFW5qRkb8+fo0jY0eRmxFRkaNvzSNNDSNjf9jjf9qq8yi6atjlo2Mj2bBFUTe3+jP0921/7Vj1LVFaq6N1I2NtY1FRmyMP2hVVVXu///X2ePu/9zf/9yq6MxjtbVqq65jv41Fi42NjTQ0NDSNtf/p6u7/6emLya4eamxqRmza1GP/WlKqaka1YzSWYACLq+z/4+ONv7U0Y7WLq430nI2qi41jY42qq2yqamzajWONY2M0NGMQOElqakbPlUQ0ljRjNDT/3NyN6drI6Mw0q7XIyY1jNI3/e3vPRG611GMAlmOqi0ZjABzaPheNqwDbNIVtAAAVmElEQVR42uycvWrbUBiGNVggDfZgMMazuwkZzlI8CLIVojtIJg/BhvQGuiQdEnoBnbP1CgqlSzv00no+6ZFV/fTgVKntSN8DRT1H3/nOz+sjKXrjeIqiKIqiKIqiKIqiKIoyOCZvRp4XXk09ixyUXmJiL5y/v7pdT/ODCt1HgouFaO3HHgelj0SJp7u594Rbu5n13tx3It29Q2A29pTeM9noZh4AM32yHgDyakRRFEVRFEVRFEXpyGHvtGe+P/b+L5O34w4/EbpCuo+sD+8MC4eqVNRfjZpBTNVZB2SJ/7psvp84FpPUx5KZ/twyS8hrFxu/ufK6u4vM7ldtk3cLr50zldnSA5nZzVWZjVTM4mxX7j/LwXIky0el8S2XC9mcEiKHuCYzkdVkhcxSXNlkn9/agxSyHj5IliI1EFl2VJaA1DQnhFNERnI+jSmRkxm5psLIipBXDPfmcsHW0+BiIaqyL2oyUyl1eaVEz8bN3UxkLZmx+eV8kofZgm1LD2kiHwNSA5G2Xv4F6TjLSbdAR7Z5tBoRQj2RcmIWl8NNOOecCvugHxftukeJSMauRMSduiIzlbaOvSIfc+MnDZmJrCfLhEYj+it7kP+QGog0SRZtrXIZBN0SQmoGSAinish8hJTISYPmVIYi82Rzs13ICjd3M5VMXNa0WOqkJjOR9WSya8cdZaZbIHWrzPtI8zXZl+oyN6cyDJnD7afNNLtQztjN2dqE89WIShEyV6z52BN+yeqJrCbjAhzOk3aZI1LvIZKLdtY0vzCXkBrVCOGcjUTum3lMiZzMyDWVUmCGFPm9kJsfqJiOLV0vR+Hc56lLSlRmFzmeW9ZTCWEBuIjGRfNasijLJasnHSEzPQRpfn0lNRAZFdde/3E5olsiSI3MhHCKyCgbakypyGncUylHth+S6YfMJyVYqhM+AFTmQaAyK4qiKIoyGKp+s2m3EE9hLWNzu5/ZjjoWGvAG5Wzc9ec5VHhTL/deD2uZhMAcuxmEpdtwWDx0GktD5rNx15/pN7Nuk+9ed3gH2T6Ps5H538bC6p+Nu/7s3WziyPcf73c4t/jNmMLYx9fp+pc95hQ+LtCgMke82jZrWdpbaO60uXGDgZzB8kc5TpdPXbOyaVAdC0azayw0wNE+lbve/d58e3fxbXt3v8uNXz5MmMKUzOohjU2xHPi4rZ8+rGVWqGEtS1OxikpnyGFz1xxmcpKFBi6fmkhCqj1wjim6xsIBR/tE7np3wo93m93y4X6XO4L4uMyfkklsj6XM2LNAA0Bo5kGWinilzC6bu+4wk6RugbsMTCIJae2BmbjGwgGr80TueneC+6dkstkVMuPjMjpKVZnxcaFoALh7Dpm9WTl+t83Nh6FVZhocLHN7DxjNjrHUZD62u/6iMkfrpwTjFx+X0VGqyoyPC0UDoIZLWpvMfNUaXDY3bjCQkyw0cPnURBJCg9bffnKNhQOO9vHdddzu7hfth/RnernA+MXHZXSUqjIXPi7QIAdrGa+2Zi2ztPjb4LC5qw4zOclCA5dPTSQh1R44h9HsGgsHHO1ju+sv53Yj6FGsIh7gBvu1+hP6cXIXiMbHlTlIh/kLGae0XY1cMo40Ai5RQ/3rc+quK4qiKMqgse+09S9J9Z0/HCoz0EfeYVD4zcHFq/5ip3LYbo4ST+kv3JvDrW7mAfCbnTNmbRuI4vgNwsTcEGN9AImAg6tFwTQU6imThwwiUGxvWdK9S4ekH6C0e79v34v+yvnisy1hsHDu/6NFupySE/rxnu7uGfNLtqOAX7IdA/yS7SiItBoYGdwaIYQQQgghhJBWLEajyuzl9rM1XcgHA+v/AE1H5/Euv49NR/LBtYmZskEby8fdz29hO2oGw4lVM18HD6k2s0OPGwOFNYO8q7PLT5Gv/svN42rd6ul31zz8k5hsPvae9xEDXXxJTSeu5pHv2G5oXo2UxMwSiSE5vNQZvNAf1n2pNuxrjOkRlwCN2IGtbeZTSZPagmbl6i7RDj2Tjov7aX1Sg79ZmbeBfkkzwXjNQEvtq5AT/F/XK90trTQtLSpq3hPNjea1WeqDXrsgw1G6U/2PS5oQu0k0zOSfniJVOs2qRvthPJ9ueXIDaEtEFRbNZqBZqu8V/GX8ugN3jSu15TTH/WZWvX+VkGYc0m3Nep1KwCUumPUFLALV6JW07qAZag38i/LAjGg1WmMAJx1NDATN4ay99FJRIRFdGXBxH7tlF81HaUZixDz46TlVEV40Z2rZaf6nD37b1Hq/5uI1n4c1I35x5e2PsZy9kcXuOaQ5NQsXF4s1cmoVSNrQjJipzQyff8uC5/KbxDWiubHskvb8aTINZ10MFNQs7owQTNp6O4W7a1O8rDkF26dZZ0HVzD2whSbDeoak/gUrcaeNTc3I2vMxnr5OwX7eJMPJQLDSpYdmCvaQysX+FEzHcdO7FJoxnotmIdkxBfPvejmy1BxaNx/BSRawqg7BfmBBhS0Aau6P7PpIzTPbYntEL+P2yHbmPh25PWovdlS1WR4VcplHFvlmJzSTCKDmKKDmKKDmKDiZZld9zu1G+ZirnSD9az6iLLm9rso5Cw5y9pp1HeuXj8kWPWhG/ReFZhSFsbOIvvbVZ7/s7O1dEo9Ta0b9V8WaWYpohmb0ta4++2VndFFzgB40W3zCQ3inGX2tq89e2ZlZeyf9aUZBIKi5Q/XZlZ2peTe9aXYVgaJylWn0dag++2Vnl7Snhnj0ohlZ+3GMojAq0+hrVX0OlZ0xBZNzLqyCnN32CAgvqIYTRrPPuWsObY9kzNnvOXvNJrf8dO1Bzl8zOQg1E2om1BwzJT8XFwMlK4IxUBqQs0b0gaHmKHCauRH1gRHNIHvg2/nDwmiOAr6bo4Cao4Cao4DbI1HAzc4oKMuS1QtCCCGEEEIIIf/ZO7OfF6IwjE+RVlViqTRi65DQibgQIlJCrNHEEluR2GILLuxbXNkuEOuFNSKWIMQS4QYX/Gved+YZdWpmDKaTznh+8Wl7zpmj6c975kznO+clhBBCCCGEEEIIIYQQQki+GDan8sdZhcxUzbEPtyvuftpMwByH/tCMLfz+QDP2jbKnMAFzH9ATzagJ+/XwusMEzD0AkvTz9AbfwdNvFYuOhrbunes+VH40MfbMRkv0gELsoO0fHozthOcgs+cyLVxPsB3ZGbc+BbokG65ueC1brGrQ6d6q8uM38UAhWuI4FCJYcTgO8FNFAkQxotpoguyh3CIueerOpNuVugNd4lM/fgkjefDU2hW/iQcK0RLHoRA7aONwKxA50PBtolu3MgFzoiBiXl98ZleiNKNJDM1iDoeHRbOpOSiamYC5Fwx7+3L3mw/VjmaM1uXJC/1BG02wfTIKTc0oxA7aONwyCBq0eW5OCU0voiGETa99efVi8aY8neSmNEATiS7VjEK0xHEoxA7aOPy3UzDOtHNM8AUVoObcwK9H/g/sSujFEhMwE0IIIYTEu9+c9mQZ/2wi13W2drNyf8v6Y7zj/pdU1OXJSWlGX9F1difvZKzOBi83vmldjsPxznBxt/pgqOby2lZwIY77X1JRp60ZLWJr1i/zVKyC1513hre3+uy6P9aM43Kws9rG7SPdxJBTh2v+ZmRsNlI1R33e5l1rNaSv8CVp/cTyuY+l1Lh5XS96CWPBJH3poAnqTM2oi+rM1Tx3pKSU1gR20Ix31r0r7YFmc9sKGYmbzZa1euv7ZnOX1W4Kh9YFF3pkPxX1jKr8uGI7GZvNVM2mZvNmlHnXGkObr3nhheVO3UEvuHlt9KXlKghNfh60RZn3EnWhnWGYXvMj+yw04511heGBze75dt86/Vl9cLO1RaS7gSt+V0jomoUgB6moJZI3brIkD7cwCIrNVM1R0WzezsRH6mueonoc9ILCQM1oEjhooy6qM/fVei+ltIPX/jtDaAOMwO3NarylYlcehVENZo1fo1DJx36Ysw6PXFbVoEbG5i6HQmA0x9eMXro0A9vViyaBmlEX2hlelU9LKO/ZK8/+VvOWI1e0LqearWV3Do8UxVVranc0I1VzVDQbd63l6RR8IloIM+gFZnCuxPCH6xQ0QZ2pGXURnXVePTozBbU/3pmhR9wZgzaMWgd2dabURiHIQyrqDcMrOnYbGZuNVM3+/eYgjLvWKsad9tTdW9Iwg17gQjuVprixjWsnNEEdCvHPoi6qM5yb8V8HF1R4Z50pGDy7U7AtOjx3jMp4jSnYkStdhR5MRf1PTMJUOBEwwCf47Q1TUSemGaNyApg9JfHrZkxFnQw6MCf2ydndPf1zagD+njEhhBBCCCGEEEIIIYQQQgghhBBCCCGEkBzQ3rb34C785vOuwDqSA7Zsu752F9akBNVRcy7YcuTa2hbWIwXXkf4han2zv2A4Al0G3FkwjAeXTK8Gzh9R65tnV0N32QWIZqw9wwM19x8R65uxYDgKaMZKUu+Bw3UfErG+GQuGzWim5mwSvr4ZC4ZNYg/amV4NnD/C1jfj5BpLMxYM48GFq4Gzwz/sds3VwJnhH5YeczVwZrCpiRBCCCGEEEIIIYQQQgghhBBCCCEk8wzIGsUBJC7U/F/ws2YrWxQtEpfUNEenXLYr8Vc7oyU1971m5J9DRjHkBsJqZ1nv3rJCQGovbUnNWdFcvjxIF80i0xdWO68+e17+BkjS51P+ssJqH7nitaTmJDVHr2+GM+Q1DwJpldWm7eho7Wd6Ds0XVw7UDDSZLs/NSWmOv74ZPKoGr4hEImX5o0+RpA+aMVxrfXzN7c2cgiWmOf76ZtgyXgfkdrYd1+gkN+6hGcEM/4Ga201llxHM1Jyc5vjrm5EzLzxxM5ZA7z7tJ0LvaK6LZWiOF83tbSt4QZWs5vjrmwd/Gvm7VXTl0xf3jPRyoSOafctxB21Y5nVzkprjr29WZ97AHAhSLmMJtO1mbEbKZcS9OQVbfbAptAI1r9zv1lFzVi6oOmBWxm/BwsiPZpmdUfPvyMMdqscT//QI3rqIT6bvUJG4ZO6uFCGEkB/Ui1Os9Dl+7vxAEsz5c8ethMH3Ualz7tzdAgnjqtUD7IqVOudpOYKBFkhWc/obHw8skLQ1O9TcX0BzwtRxCyKK1DQPGTW00CiVavJ0/JhCBCOkjUGjVsgJvYrmtInWPPqJK3v04gmBdieGaB63aGghH/T03BxtO0XNUDY+MDob0BzAiDGFfNAjzanub21qHr2ktPTGtIniaMEEGavHQPOQeWNd01IgP17gDpkp9Y2S/CUHlZa+KtVGlN4tKS2YIE2EiRr+0ktBQE9nZPAf53VeyBI91FyenHo0I3ZH1DQMGxO9l57mRk1NF8ZNm39/5oIJnubGfLdGfS6Rp1I4QhyPL03UainWIzzN6GnmmMKIpWPReZZIXvPxzw+/Vq3jae9vDc0iTKNT/AzZMUHElearZrErWlWz1qtcRWO25msWm6rZDfaaFontzsm505P8oPMskbzme9+K717cu2elh6l51VjXYG18TZ+LKBGjuro0Q55Eb4RmPUJBT9CsnWdsDp685qfHrY8PHz610sMctGfWXC+XHozVs/PonSrHm0qJKB20n4tSMYrWMkj/qnm8noF/OjejJ2iWzo9lbAo+0MoJnmaM2mNEp5gVVSePqRx3RlXTmXZDH/wpWENHYp2IjenSrDWnRLP893A1oydolgOzNgPPn+ZwcN0cEwnykOvmzE3A/jPN+i1YLDCchwXt6MXZmoD9b5rjO9a5WXCdnt4zdmb+3t7Vs8YNRMGEFALj5iAcRncKqFLjLnVcBPvfuDS4sYsUhgQMwaSKC0OKJCSNq5Aq/y1vdmdvb7WykCEJOe0MPkn7vvahsXZ12mdZNBcC0VwERHMREM1FQDQXAdFcBOZHM74MVW224DyMcZOFrU6uYtMed04LM66cDnYqmhOah88mJXl7XMRVkINP0xmbTvN0GwpF81+jmY+zRfP/hJTmda98BEJ80HY1I67IZLU+5PgedIkfF7uc0d7z+5NLxPl8XC19hKCyUNhi98HCuMC9gpOgjNUtS/TiTRkfCX7MU6NQNA/MzbHCgxyT5k07Fpk4RN22HwhofUUCKPf1I5sVSUNQtZhBsWuO9n3gfsEJlZA5/d6ry1crf2hBKB5KDS1dzQ8O2mn5SDx9bLPI5OCYhETdlp+79FqboRMa8GvAEw+V20KG9QyT+8D9ghMqN9Utpmx5mMRPUhPN4zT3ykcizZs2NGG50bZRt+3n9DkN68NRmhmYMTKaqQfNdE/ip6mJ5jGa8/IRzLmLo/1Nm/OuocEehl637fcFlKaDqrmBhmzQhoyDNgOnBSdx0PZ6P2jjkEGYYC+1ZJIRzdn35mWvfAQj6K2xjTZutmpfZOK+GMPFGKBuy493Wti1m6vt3t0ZdVBQxfIydMFbMCh7BSdUctQ+NWob3ILB1AVhgllqcIZQNP+7p2A46Tu31CyaRfPOQTSL5uIhmouAaC4CorkIiOYiIJqLgGguAuXQ3OHp4dTSG6xwjYj/TJEPA9JiUY+874TpT4yKYIXSjD+f+vpiMk1YUsoZoXicdCoe20+zHHFl+lO6YrBCae7aAfamXw70jeLRaFA8tp+7/RFXpD+xKwabNc17L61wBEU4HODWhxzrsCDElf7u5mXd4I+du8pkZmEyni9bT6RH0+LM2ocLSPSlkzdyEtep7d2GQZ2CgWJPDeLk/cAiphlbqR3SZ0/M33a2EJfnQHef90xptnN5Y3U8a9DMtdzwmpDORDir0GEC7M6xukgLjn5dy7YZ2A9kEOOSo2/VmoBGkHC9GRusMPugUNAm9sTLbqifJM2gSux8+uiE+Zvb2xUKELIcftDd5T1XmllwF4dEfNjw9IIGUPX6ArtoYTo7YJu1QkbNItT80Dc6QcJOsAGB731QKGgTe2K1QNZPjEetbyV2TB8HIQfu8hy+eQ+X91wHbf/SmOROpLNPOIO8i8KHuy2L7uLdKngcXLmT1tQQeNAXKhpBwk6wMe1PHxQK2sSerFkP9ROSaEMvXpXYMX00Qv7miV2ewy8XzBoznpsXVd1hWnTzlaNp4Q+/rzDRhbuoxZI7b0Hj82XwCJqq5aRoCL5NcIKEnWCDOh8GhSIGotBRmPfTS6ILrcSO6Te8ZumGQTrPgR7IG8050ty4G6MaNIeCoVOW7lUViDk+WXWtezsnryCzuMXZZ/U9PWBgR/Udbmg4+NEXTjSCxN0A8IZr+ZRBoYiBvBAG7VA/9sMGsjQdW4mdS9/3xPy7CvHyHLwH854pzY8FT/uuvUnED+F6CjYRvOJ37bVAnMNF8zSwzHLHXtjHxK/0TFsQzUViNjTrP9cUQfObp8LY/6GaCc6unwkP4frsiSAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIxeA3CzQsutkksfcAAAAASUVORK5CYII="},89444:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jquery-type-definition-tweet-1da0464128c37f92056fe03cc4f80481.webp"}}]);