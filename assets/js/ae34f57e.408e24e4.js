"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[13952],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,y=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(y,r(r({ref:t},p),{},{components:n})):a.createElement(y,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},34443:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={title:"Announcing jQuery Validation Unobtrusive Native...",authors:"johnnyreilly",tags:[],hide_table_of_contents:!1},u=void 0,s={permalink:"/2013/08/08/announcing-jquery-validation",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-08-08-announcing-jquery-validation.md",source:"@site/blog/2013-08-08-announcing-jquery-validation.md",title:"Announcing jQuery Validation Unobtrusive Native...",description:"I've been busy working on an open source project called jQuery Validation Unobtrusive Native. To see it in action take a look here.",date:"2013-08-08T00:00:00.000Z",formattedDate:"August 8, 2013",tags:[],readingTime:2.29,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Using Bootstrap Tooltips to display jQuery Validation error messages",permalink:"/2013/08/17/using-bootstrap-tooltips-to-display"},nextItem:{title:"How I'm Using Cassette part 3:Cassette and TypeScript Integration",permalink:"/2013/07/06/how-im-using-cassette-part-3-typescript"}},p={authorsImageUrls:[void 0]},d=[{value:"A Little Background",id:"a-little-background",children:[],level:2},{value:"So... What is jQuery Validation Unobtrusive Native?",id:"so-what-is-jquery-validation-unobtrusive-native",children:[],level:2},{value:"Future Plans",id:"future-plans",children:[],level:2}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I've been busy working on an open source project called ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"http://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native"},"jQuery Validation Unobtrusive Native")),". ",(0,o.kt)("a",{parentName:"p",href:"http://johnnyreilly.github.io/jQuery.Validation.Unobtrusive.Native/"},"To see it in action take a look here"),"."),(0,o.kt)("h2",{id:"a-little-background"},"A Little Background"),(0,o.kt)("p",null,"I noticed a little while ago that jQuery Validation was now providing native support for validation driven by HTML 5 data attributes. As you may be aware, Microsoft shipped ",(0,o.kt)("a",{parentName:"p",href:"http://bradwilson.typepad.com/blog/2010/10/mvc3-unobtrusive-validation.html"},"jquery.validate.unobtrusive.js")," back with MVC 3. (",(0,o.kt)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.com/2012/08/jquery-unobtrusive-validation.html"},"I have written about it before."),") It provided a way to apply data model validations to the client side using a combination of jQuery Validation and HTML 5 data attributes."),(0,o.kt)("p",null,"The principal of this was and is fantastic. But since that time the jQuery Validation project has implemented its own support for driving validation unobtrusively (shipping with ",(0,o.kt)("a",{parentName:"p",href:"http://jquery.bassistance.de/validate/changelog.txt"},"jQuery Validation 1.11.0"),"). I've been looking at a way to directly use the native support instead of jquery.validate.unobtrusive.js."),(0,o.kt)("h2",{id:"so-what-is-jquery-validation-unobtrusive-native"},"So... What is jQuery Validation Unobtrusive Native?"),(0,o.kt)("p",null,"jQuery Validation Unobtrusive Native is a collection of ASP.Net MVC HTML helper extensions. These make use of jQuery Validation's native support for validation driven by HTML 5 data attributes. The advantages of the native support over jquery.validate.unobtrusive.js are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dynamically created form elements are parsed automatically. jquery.validate.unobtrusive.js does not support this whilst jQuery Validation does. ",(0,o.kt)("a",{parentName:"li",href:"http://johnnyreilly.github.io/jQuery.Validation.Unobtrusive.Native/AdvancedDemo/Knockout.html"},"Take a look at a demo using Knockout.")),(0,o.kt)("li",{parentName:"ul"},"jquery.validate.unobtrusive.js restricts how you use jQuery Validation. If you want to use showErrors or something similar then you may find that you need to go native (or at least you may find that significantly easier than working with the jquery.validate.unobtrusive.js defaults)..."),(0,o.kt)("li",{parentName:"ul"},"Send less code to your browser, make your browser to do less work and even get a (marginal) performance benefit .")),(0,o.kt)("p",null,"This project intends to be a bridge between MVC's inbuilt support for driving validation from data attributes and jQuery Validation's native support for the same. This is achieved by hooking into the MVC data attribute creation mechanism and using it to generate the data attributes natively supported by jQuery Validation."),(0,o.kt)("h2",{id:"future-plans"},"Future Plans"),(0,o.kt)("p",null,"So far the basic set of the HtmlHelpers and their associated unobtrusive mappings have been implemented. If any have been missed then let me know. As time goes by I intend to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fill in any missing gaps there may be"),(0,o.kt)("li",{parentName:"ul"},"maintain MVC 3, 4 (and when the time comes 5+) versions of this on Nuget"),(0,o.kt)("li",{parentName:"ul"},"not all data annotations generate client data attributes - if it makes sense I may look to implement some of these where it seems sensible. (eg the ",(0,o.kt)("a",{parentName:"li",href:"http://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.minlengthattribute.aspx"},"MinLengthAttribute")," annotation could be mapped to ",(0,o.kt)("a",{parentName:"li",href:"http://jqueryvalidation.org/minlength-method/"},"minlength")," validation...)"),(0,o.kt)("li",{parentName:"ul"},"get the unit test coverage to a good level and finally (and perhaps most importantly)"),(0,o.kt)("li",{parentName:"ul"},"create some really useful ",(0,o.kt)("a",{parentName:"li",href:"http://johnnyreilly.github.io/jQuery.Validation.Unobtrusive.Native/Demo.html"},"demos and documentation"),".")),(0,o.kt)("p",null,"Help is appreciated so feel free to pitch in! You can find the project on GitHub ",(0,o.kt)("a",{parentName:"p",href:"http://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native"},"here"),"..."))}m.isMDXComponent=!0}}]);