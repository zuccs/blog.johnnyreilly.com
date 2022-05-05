"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[60080],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(d,i(i({ref:t},h),{},{components:a})):n.createElement(d,i({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},71759:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={title:"The Joy of JSON",authors:"johnnyreilly",tags:["Dave Ward","json","Encosia","Christian Heilmann javascript object literal","douglas crockford"],hide_table_of_contents:!1},l=void 0,c={permalink:"/2012/02/23/joy-of-json",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-02-23-joy-of-json/index.md",source:"@site/blog/2012-02-23-joy-of-json/index.md",title:"The Joy of JSON",description:"So back to JSON. For those of you that don't know JSON stands for JavaScript Object Notation and is lightweight text based data interchange format. Rather than quote other people verbatim you can find thorough explanations of JSON here: - Introducing JSON",date:"2012-02-23T00:00:00.000Z",formattedDate:"February 23, 2012",tags:[{label:"Dave Ward",permalink:"/tags/dave-ward"},{label:"json",permalink:"/tags/json"},{label:"Encosia",permalink:"/tags/encosia"},{label:"Christian Heilmann javascript object literal",permalink:"/tags/christian-heilmann-javascript-object-literal"},{label:"douglas crockford",permalink:"/tags/douglas-crockford"}],readingTime:3.545,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"The Joy of JSON",authors:"johnnyreilly",tags:["Dave Ward","json","Encosia","Christian Heilmann javascript object literal","douglas crockford"],hide_table_of_contents:!1},prevItem:{title:"jQuery Unobtrusive Remote Validation",permalink:"/2012/03/03/jquery-unobtrusive-remote-validation"},nextItem:{title:"WCF Transport Windows authentication using NetTcpBinding in an Intranet environment",permalink:"/2012/02/15/wcf-transport-windows-authentication"}},h={authorsImageUrls:[void 0]},u=[],p={toc:u};function m(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"So back to JSON. For those of you that don't know JSON stands for JavaScript Object Notation and is lightweight text based data interchange format. Rather than quote other people verbatim you can find thorough explanations of JSON here: - ",(0,o.kt)("a",{parentName:"p",href:"http://www.json.org/"},"Introducing JSON")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.json.org/js.html"},"JSON in Javascript"))),(0,o.kt)("p",null,"As mentioned in my previous ",(0,o.kt)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.com/2012/02/potted-history-of-using-ajax-on.html"},"post on Ajax")," I came upon JSON quite by accident and was actually using it for some time without having any idea. But let's pull back a bit. Let's start with the JavaScript Object Literal. Some years ago I came upon this article by Christan Heilmann about the JavaScript Object Literal which had been published all the way back in 2006: ",(0,o.kt)("a",{parentName:"p",href:"http://christianheilmann.com/2006/02/16/show-love-to-the-object-literal/"},"Show love to the JavaScript Object Literal")," Now when I read this it was a revelation to me. I hadn't really used JavaScript objects a great deal at this point (yes I am one of those people that started using JavaScript without actually learning the thing) and when I had used them is was through the ",(0,o.kt)("inlineCode",{parentName:"p"},"var obj = new Object()")," pattern (as that's the only approach I knew). So it was wonderful to discover that instead of the needlessly verbose:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var myCar = new Object();\nmyCar.wheels = 4;\nmyCar.colour = 'blue';\n")),(0,o.kt)("p",null,"I could simply use the much more concise object literal syntax to declare an object instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var myCar = { wheels: 4, colour: 'blue' };\n")),(0,o.kt)("p",null,"Lovely. Henceforth I adopted this approach in my code as I'm generally a believer that brevity is best. It was sometime later that I happened upon JSON (when I started looking into ",(0,o.kt)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.com/2012/01/jqgrid-its-just-far-better-grid.html"},"jqGrid"),"). Basically I was looking to pass complex data structures backward and forward to the server and, as far as I knew, there was no way to achieve this simply in JavaScript. I was expecting that I would have to manually serialise and deserialise (yes dammit I will use the English spellings!) objects when ever I wanted to do this sort of thing. However, I was reading the the fantastic Dave Ward's ",(0,o.kt)("a",{parentName:"p",href:"http://encosia.com/"},"Encosia")," blog which on this occasion was talking about the ",(0,o.kt)("a",{parentName:"p",href:"http://encosia.com/why-aspnet-ajax-updatepanels-are-dangerous/"},"troubles of UpdatePanels")," (a subject close to my heart by the way) and more interestingly the use of PageMethods in ASP.NET. This is what he said that made me prick up my ears: ",(0,o.kt)("em",{parentName:"p"},'"Page methods allow ASP.NET AJAX pages to directly execute a page\u2019s static methods, using JSON (JavaScript Object Notation). JSON is basically a minimalistic version of SOAP, which is perfectly suited for light weight communication between client and server."')," JSON is a lightweight SOAP eh? I've used SOAP. I wonder if I could use this.... To my complete surprise, and may I say delight, I discovered that a wonderful fellow called Douglas Crockford, he of ",(0,o.kt)("a",{parentName:"p",href:"http://www.amazon.co.uk/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742"},"JavaScript, The Good Parts"),' fame had quietly come up with JSON some time ago. JSON, from my perspective, turned out to be a simple way to turn an object into a string and then from a string back into an object. So simple that it consists of 2 methods on a JSON object: - JSON.stringify(myObject) - take an object and make me a JSON string. (and by the way isn\'t "stringify" just the loveliest method name ever?)'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"JSON.parse(myJSONString) - take a JSON string and make me an object")),(0,o.kt)("p",null,"Let me illustrate the above method names using the myCar example from earlier:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var myCar = { wheels: 4, colour: \'blue\' };\n// myCar is an object\n\nvar myCarJSON = JSON.stringify(myCar);\n//myCarJSON will look like this: \'{"wheels":4,"colour":"blue"}\'\n\nvar anotherCarMadeFromMyJSON = JSON.parse(myCarJSON);\n//anotherCarMadeFromMyJSON will be a brand new "car" object\n')),(0,o.kt)("p",null,"I've also demonstrated this using the Chrome Console:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(68363).Z,width:"320",height:"77"})),(0,o.kt)("p",null,"Crockford initially invented/discovered JSON himself and wrote a little helper library which provided a JSON object to be used by all and sundry. This can be found here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/douglascrockford/JSON-js"},"JSON on GitHub")," Because JSON was so clearly wonderful, glorious and useful it ended up becoming a part of the EcmaScript 5 spec (in fact it's worth reading the brilliant ",(0,o.kt)("a",{parentName:"p",href:"http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/"},"John Resig's blog post")," on this). This has lead to JSON being offered ",(0,o.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/JSON#Native_encoding_and_decoding_in_browsers"},"natively in browsers")," for quite some time. However, for those of us (and I am one alas) still supporting IE 6 and the like we still have Crockfords JSON2.js to fall back on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"")))}m.isMDXComponent=!0},68363:function(e,t){t.Z="data:image/png;base64,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"}}]);