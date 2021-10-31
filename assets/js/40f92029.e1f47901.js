"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[7360],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,d=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(d,i(i({ref:t},h),{},{components:a})):n.createElement(d,i({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},61258:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return h},toc:function(){return p},default:function(){return m}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={title:"The Joy of JSON",authors:"johnnyreilly",tags:["Dave Ward","json","Encosia","Christian Heilmann javascript object literal","douglas crockford"],hide_table_of_contents:!1},s=void 0,c={permalink:"/2012/02/23/joy-of-json",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-02-23-joy-of-json.md",source:"@site/blog/2012-02-23-joy-of-json.md",title:"The Joy of JSON",description:"So back to JSON. For those of you that don't know JSON stands for JavaScript Object Notation and is lightweight text based data interchange format. Rather than quote other people verbatim you can find thorough explanations of JSON here: - Introducing JSON",date:"2012-02-23T00:00:00.000Z",formattedDate:"February 23, 2012",tags:[{label:"Dave Ward",permalink:"/tags/dave-ward"},{label:"json",permalink:"/tags/json"},{label:"Encosia",permalink:"/tags/encosia"},{label:"Christian Heilmann javascript object literal",permalink:"/tags/christian-heilmann-javascript-object-literal"},{label:"douglas crockford",permalink:"/tags/douglas-crockford"}],readingTime:3.545,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"jQuery Unobtrusive Remote Validation",permalink:"/2012/03/03/jquery-unobtrusive-remote-validation"},nextItem:{title:"WCF Transport Windows authentication using NetTcpBinding in an Intranet environment",permalink:"/2012/02/15/wcf-transport-windows-authentication"}},h={authorsImageUrls:[void 0]},p=[],u={toc:p};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"So back to JSON. For those of you that don't know JSON stands for JavaScript Object Notation and is lightweight text based data interchange format. Rather than quote other people verbatim you can find thorough explanations of JSON here: - ",(0,o.kt)("a",{parentName:"p",href:"http://www.json.org/"},"Introducing JSON")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.json.org/js.html"},"JSON in Javascript"))),(0,o.kt)("p",null,"As mentioned in my previous ",(0,o.kt)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.com/2012/02/potted-history-of-using-ajax-on.html"},"post on Ajax")," I came upon JSON quite by accident and was actually using it for some time without having any idea. But let's pull back a bit. Let's start with the JavaScript Object Literal. Some years ago I came upon this article by Christan Heilmann about the JavaScript Object Literal which had been published all the way back in 2006: ",(0,o.kt)("a",{parentName:"p",href:"http://christianheilmann.com/2006/02/16/show-love-to-the-object-literal/"},"Show love to the JavaScript Object Literal")," Now when I read this it was a revelation to me. I hadn't really used JavaScript objects a great deal at this point (yes I am one of those people that started using JavaScript without actually learning the thing) and when I had used them is was through the ",(0,o.kt)("inlineCode",{parentName:"p"},"var obj = new Object()")," pattern (as that's the only approach I knew). So it was wonderful to discover that instead of the needlessly verbose:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var myCar = new Object();\nmyCar.wheels = 4;\nmyCar.colour = 'blue';\n")),(0,o.kt)("p",null,"I could simply use the much more concise object literal syntax to declare an object instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var myCar = { wheels: 4, colour: 'blue' };\n")),(0,o.kt)("p",null,"Lovely. Henceforth I adopted this approach in my code as I'm generally a believer that brevity is best. It was sometime later that I happened upon JSON (when I started looking into ",(0,o.kt)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.com/2012/01/jqgrid-its-just-far-better-grid.html"},"jqGrid"),"). Basically I was looking to pass complex data structures backward and forward to the server and, as far as I knew, there was no way to achieve this simply in JavaScript. I was expecting that I would have to manually serialise and deserialise (yes dammit I will use the English spellings!) objects when ever I wanted to do this sort of thing. However, I was reading the the fantastic Dave Ward's ",(0,o.kt)("a",{parentName:"p",href:"http://encosia.com/"},"Encosia")," blog which on this occasion was talking about the ",(0,o.kt)("a",{parentName:"p",href:"http://encosia.com/why-aspnet-ajax-updatepanels-are-dangerous/"},"troubles of UpdatePanels")," (a subject close to my heart by the way) and more interestingly the use of PageMethods in ASP.NET. This is what he said that made me prick up my ears: ",(0,o.kt)("em",{parentName:"p"},'"Page methods allow ASP.NET AJAX pages to directly execute a page\u2019s static methods, using JSON (JavaScript Object Notation). JSON is basically a minimalistic version of SOAP, which is perfectly suited for light weight communication between client and server."')," JSON is a lightweight SOAP eh? I've used SOAP. I wonder if I could use this.... To my complete surprise, and may I say delight, I discovered that a wonderful fellow called Douglas Crockford, he of ",(0,o.kt)("a",{parentName:"p",href:"http://www.amazon.co.uk/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742"},"JavaScript, The Good Parts"),' fame had quietly come up with JSON some time ago. JSON, from my perspective, turned out to be a simple way to turn an object into a string and then from a string back into an object. So simple that it consists of 2 methods on a JSON object: - JSON.stringify(myObject) - take an object and make me a JSON string. (and by the way isn\'t "stringify" just the loveliest method name ever?)'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"JSON.parse(myJSONString) - take a JSON string and make me an object")),(0,o.kt)("p",null,"Let me illustrate the above method names using the myCar example from earlier:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var myCar = { wheels: 4, colour: \'blue\' };\n// myCar is an object\n\nvar myCarJSON = JSON.stringify(myCar);\n//myCarJSON will look like this: \'{"wheels":4,"colour":"blue"}\'\n\nvar anotherCarMadeFromMyJSON = JSON.parse(myCarJSON);\n//anotherCarMadeFromMyJSON will be a brand new "car" object\n')),(0,o.kt)("p",null,"I've also demonstrated this using the Chrome Console: ",(0,o.kt)("img",{src:a(92589).Z})),(0,o.kt)("p",null,"Crockford initially invented/discovered JSON himself and wrote a little helper library which provided a JSON object to be used by all and sundry. This can be found here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/douglascrockford/JSON-js"},"JSON on GitHub")," Because JSON was so clearly wonderful, glorious and useful it ended up becoming a part of the EcmaScript 5 spec (in fact it's worth reading the brilliant ",(0,o.kt)("a",{parentName:"p",href:"http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/"},"John Resig's blog post")," on this). This has lead to JSON being offered ",(0,o.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/JSON#Native_encoding_and_decoding_in_browsers"},"natively in browsers")," for quite some time. However, for those of us (and I am one alas) still supporting IE 6 and the like we still have Crockfords JSON2.js to fall back on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"")))}m.isMDXComponent=!0},92589:function(e,t,a){t.Z=a.p+"assets/images/Using%2BJSON-0f1a0f07ce8c22d14839611811e27af6.png"}}]);