"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[44146],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return c}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),p=d(n),c=o,u=p["".concat(s,".").concat(c)]||p[c]||m[c]||i;return n?a.createElement(u,l(l({ref:t},h),{},{components:n})):a.createElement(u,l({ref:t},h))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},74084:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return d},assets:function(){return h},toc:function(){return m},default:function(){return c}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),l=["components"],r={title:"Template Tricks for a Dainty DOM",authors:"johnnyreilly",tags:["DOM","template","Materialized"],hide_table_of_contents:!1},s=void 0,d={permalink:"/2019/03/24/template-tricks-for-dainty-dom",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2019-03-24-template-tricks-for-dainty-dom/index.md",source:"@site/blog/2019-03-24-template-tricks-for-dainty-dom/index.md",title:"Template Tricks for a Dainty DOM",description:"I'm somewhat into code golf. Placing restrictions on what you're \"allowed\" to do in code and seeing what the happens as a result. I'd like to share with you something that came out of some recent dabblings.",date:"2019-03-24T00:00:00.000Z",formattedDate:"March 24, 2019",tags:[{label:"DOM",permalink:"/tags/dom"},{label:"template",permalink:"/tags/template"},{label:"Materialized",permalink:"/tags/materialized"}],readingTime:5.265,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Template Tricks for a Dainty DOM",authors:"johnnyreilly",tags:["DOM","template","Materialized"],hide_table_of_contents:!1},prevItem:{title:"react-select with less typing lag",permalink:"/2019/04/27/react-select-with-less-typing-lag"},nextItem:{title:"Google Analytics API and ASP.Net Core",permalink:"/2019/03/22/google-analytics-api-and-aspnet-core"}},h={authorsImageUrls:[void 0]},m=[{value:"&quot;Oh All Right; Just a Splash&quot;",id:"oh-all-right-just-a-splash",level:2},{value:"The DOM Bunker",id:"the-dom-bunker",level:2},{value:"Smuggling DOM in Templates",id:"smuggling-dom-in-templates",level:2},{value:"&quot;That Sounds Complicated...&quot;",id:"that-sounds-complicated",level:2},{value:"Do It Yourself",id:"do-it-yourself",level:2}],p={toc:m};function c(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"I'm somewhat into code golf. Placing restrictions on what you're \"allowed\" to do in code and seeing what the happens as a result. I'd like to share with you something that came out of some recent dabblings."),(0,i.kt)("p",null,"Typically I spend a good amount of time playing with TypeScript. Either working on build tools or making web apps with it. (Usually with a portion of React on the side.) This is something different."),(0,i.kt)("p",null,"I have a side project on the go which is essentially a mini analytics dashboard. For the purposes of this piece let's call it \"StatsDash\". When I was starting it I thought: let's try something different. Let's build StatsDash with HTML ",(0,i.kt)("em",{parentName:"p"},"only"),". The actual HTML is hand cranked by me and generated in ASP.Net Core / C# using a combination of LINQ and string interpolation. (Who needs Razor? \ud83d\ude0e) I'll say it's pretty fun - but the back end is not what I want to focus on."),(0,i.kt)("p",null,"I got something up and running pretty quickly in pure HTML. The first lesson I learned was this: HTML alone is hella ugly. So I relaxed my criteria; I allowed CSS to come play as long as I didn't have to write any / much myself. There followed some experimentation with different CSS frameworks. For a while I rolled with Bootstrap (old school!), then Bulma and finally I settled on ",(0,i.kt)("a",{parentName:"p",href:"https://materializecss.com/"},"Materialized"),". Materialized is a heavily inspired by Google's Material Design and is hence quite beautiful. With my HTML and Materialize's CSS we were rolling. Beautiful stats - no JS."),(0,i.kt)("h2",{id:"oh-all-right-just-a-splash"},'"Oh All Right; Just a Splash"'),(0,i.kt)("p",null,"Lovely as things were, StatsDash quickly got to the point where there was too much information on the screen. It was time to make some changes. If data is to convey a message, it must first be comprehensible."),(0,i.kt)("p",null,"I needed a way to hide and show data as people interacted with StatsDash. I wanted to achieve this ",(0,i.kt)("em",{parentName:"p"},"without")," starting to render on the client side and also without going back to the server each time."),(0,i.kt)("p",null,"If you want interactions in your UI all roads lead to JS. It's certainly possible to do some tricks with CSS but that's a round of code golf I'm ill equipped to play. So, I took a look at what Materialized had to offer. Usefully it has a ",(0,i.kt)("a",{parentName:"p",href:"https://materializecss.com/modals.html"},"Modal")," component. With that in play I'd be able to separate the detailed information into different modals which the users could show and hide as required. Perfect!"),(0,i.kt)("p",null,"It required a little JS. What's a line or two between friends? Dear reader, I compromised once more."),(0,i.kt)("h2",{id:"the-dom-bunker"},"The DOM Bunker"),(0,i.kt)("p",null,'With my handy modals, StatsDash was now a one stop shop for a great deal of information. Info which took the form of DOM nodes. Lots of them. And by "lots of them" I want you to think along the lines of "space is big, really big...".'),(0,i.kt)("p",null,"This was impacting users. Clicking to open a modal resulted in a noticeable lag. It would take 2+ seconds for the browser to respond. Users found themselves clicking multiple times; wondering why nothing seemed to occur. In the end the modal would shuffle into view. However, this wasn't the best experience. The lack of responsiveness was getting in the way of users enjoying all StatsDash had to offer."),(0,i.kt)("p",null,"Running an audit of StatsDash in Chrome DevTools there was no doubt we had a DOM problem:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:n(44325).Z,width:"640",height:"298"})),(0,i.kt)("p",null,"What to do? I still didn't want to go back to the server on each click in StatsDash. And I didn't want to start writing rendering code on the client as well either. I have in the past mixed client and server side rendering and I know well that it's a first class ticket to a confusing codebase."),(0,i.kt)("h2",{id:"smuggling-dom-in-templates"},"Smuggling DOM in Templates"),(0,i.kt)("p",null,"There's a mechanism that supports this use case directly: the ",(0,i.kt)("inlineCode",{parentName:"p"},"&lt;template&gt;")," element. ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template"},"To quote MDN"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The HTML Content Template (",(0,i.kt)("inlineCode",{parentName:"p"},"&lt;template&gt;"),") element is a mechanism for holding client-side content that is not to be rendered when a page is loaded but may subsequently be instantiated during runtime using JavaScript.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Think of a template as a content fragment that is being stored for subsequent use in the document.")),(0,i.kt)("p",null,"This is ",(0,i.kt)("em",{parentName:"p"},"exactly")," what I'm after. I can keep my rendering server side, but instead wrap content that isn't immediately visible to users inside a ",(0,i.kt)("inlineCode",{parentName:"p"},"&lt;template&gt;")," element and render that only when users need it."),(0,i.kt)("p",null,"So in the case of my modals (where most of my DOM lives), I can tuck the contents of each modal into a ",(0,i.kt)("inlineCode",{parentName:"p"},"&lt;template&gt;")," element. Then, when the user clicks to open a modal we move that template content into the DOM so they can see it. Likewise, as they close a modal we can clear out the modal's DOM content to ease the load on the dear old browser."),(0,i.kt)("h2",{id:"that-sounds-complicated"},'"That Sounds Complicated..."'),(0,i.kt)("p",null,"It's not. Let me show you how easily this is accomplished. First of all, wrap all your modal contents into ",(0,i.kt)("inlineCode",{parentName:"p"},"&lt;template&gt;")," elements. They should look a little something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div>\n  <button data-target="modalId" class="btn modal-trigger">\n    Open the Modal!\n  </button>\n\n  <template>\n    \x3c!--\n        loads of DOM nodes\n        --\x3e\n  </template>\n\n  <div id="modalId" class="modal modal-fixed-footer"></div>\n</div>\n')),(0,i.kt)("p",null,"Next, where you initialise your modals you need to make a little tweak:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('DOMContentLoaded', function () {\n  M.Modal.init(document.querySelectorAll('.modal'), {\n    onOpenStart: (modalDiv) => {\n      const template = modalDiv.parentNode.querySelector('template');\n\n      modalDiv.appendChild(document.importNode(template.content, true));\n    },\n    onCloseEnd: (modalDiv) => {\n      while (modalDiv.firstChild) {\n        modalDiv.removeChild(modalDiv.firstChild);\n      }\n    },\n  });\n});\n")),(0,i.kt)("p",null,"That's it! As you can see, before we open our modals, the ",(0,i.kt)("inlineCode",{parentName:"p"},"onOpenStart")," callback will fire which creates the actual DOM elements based upon the ",(0,i.kt)("inlineCode",{parentName:"p"},"template"),". And when the modals finish closing the ",(0,i.kt)("inlineCode",{parentName:"p"},"onCloseEnd")," callback runs to remove those DOM elements once more."),(0,i.kt)("p",null,"For this minimal change, the client gets a dramatically different user experience. StatsDash went from super laggy to satisfyingly fast. Using ",(0,i.kt)("inlineCode",{parentName:"p"},"template"),"s, The number of initial DOM nodes dropped from more than ",(0,i.kt)("em",{parentName:"p"},"20,000")," to ",(0,i.kt)("em",{parentName:"p"},"200"),". That's right \ud83d\udcaf times smaller!"),(0,i.kt)("h2",{id:"do-it-yourself"},"Do It Yourself"),(0,i.kt)("p",null,"The code examples above rely upon the Materialize modals. However the principles used here are broadly applicable. It's easy for you to take the approach outlined here and apply it in a different situation."),(0,i.kt)("p",null,"If you're interested in some of the other exciting things you can do with templates then I recommend ",(0,i.kt)("a",{parentName:"p",href:"https://www.html5rocks.com/en/tutorials/webcomponents/template/"},"Eric Bidelman's post on the topic"),"."))}c.isMDXComponent=!0},44325:function(e,t,n){t.Z=n.p+"assets/images/DOM-massive-641055579e609bfc876913daaa8ba37e.png"}}]);