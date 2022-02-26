"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[1412],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return h}});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(o),h=a,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},24980:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},assets:function(){return c},toc:function(){return p},default:function(){return h}});var n=o(87462),a=o(63366),r=(o(67294),o(3905)),i=["components"],l={title:"ClosedXML - the real SDK for Excel",authors:"johnnyreilly",tags:["MDeLeon","Open XML","Excel","ClosedXML"],hide_table_of_contents:!1},s=void 0,d={permalink:"/2012/08/16/closedxml-real-sdk-for-excel",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-08-16-closedxml-real-sdk-for-excel/index.md",source:"@site/blog/2012-08-16-closedxml-real-sdk-for-excel/index.md",title:"ClosedXML - the real SDK for Excel",description:"Simplicity appeals to me. It always has. Something that is simple is straightforward to comprehend and is consequently easy to use. It's clarity.",date:"2012-08-16T00:00:00.000Z",formattedDate:"August 16, 2012",tags:[{label:"MDeLeon",permalink:"/tags/m-de-leon"},{label:"Open XML",permalink:"/tags/open-xml"},{label:"Excel",permalink:"/tags/excel"},{label:"ClosedXML",permalink:"/tags/closed-xml"}],readingTime:3.74,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"ClosedXML - the real SDK for Excel",authors:"johnnyreilly",tags:["MDeLeon","Open XML","Excel","ClosedXML"],hide_table_of_contents:!1},prevItem:{title:"How to attribute encode a PartialView in MVC (Razor)",permalink:"/2012/08/24/how-to-attribute-encode-partialview-in"},nextItem:{title:"jQuery Unobtrusive Validation (+ associated gotchas)",permalink:"/2012/08/06/jquery-unobtrusive-validation"}},c={authorsImageUrls:[void 0]},p=[{value:"Open XML",id:"open-xml",level:2},{value:"Closed XML - Open XML&#39;s DbContext",id:"closed-xml---open-xmls-dbcontext",level:2},{value:"Support - This is how it should be done!",id:"support---this-is-how-it-should-be-done",level:2}],u={toc:p};function h(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Simplicity appeals to me. It always has. Something that is simple is straightforward to comprehend and is consequently easy to use. It's clarity."),(0,r.kt)("h2",{id:"open-xml"},"Open XML"),(0,r.kt)("p",null,"So imagine my joy when I first encountered ",(0,r.kt)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/office/bb265236.aspx"},"Open XML"),". In Microsofts own words:"),(0,r.kt)("p",null,'ECMA Office Open XML ("Open XML") is an international, open standard for word-processing documents, presentations, and spreadsheets that can be freely implemented by multiple applications on multiple platforms.'),(0,r.kt)("p",null,"What does that actually mean? Well, from my perspective in the work I was doing I needed to be able to programmatically interact with Excel documents from C#. I needed to be able to create spreadsheets, to use existing template spreadsheets which I could populate dynamically in code. I needed to do Excel. And according to Microsoft, the Open XML SDK was how I did this."),(0,r.kt)("p",null,"What can I say about it? Open XML works. The API functions. You can use this to achieve your aims; and I did (initially). However, there's a but and it's this: it became quickly apparent just how hard Open XML makes you work to achieve relatively simple goals. Things that ought to be, in my head, a doddle require reams and reams of obscure code. Sadly, I feel that Open XML is probably the most frustrating API that I have yet encountered (and I've coded against the old school Lotus Notes API)."),(0,r.kt)("h2",{id:"closed-xml---open-xmls-dbcontext"},"Closed XML - Open XML's DbContext"),(0,r.kt)("p",null,"As I've intimated I found Open XML to be enormously frustrating. I'd regularly find myself thinking I'd achieved my goal. I may have written War and Peace code-wise but it compiled, it looked right - the end was in sight. More fool me. I'd run, sit back watch my Excel doc get created / updated / whatever. Then I'd open it and be presented with some obscure error about a corrupt file. Not great."),(0,r.kt)("p",null,"As I was Googling around looking for answers to my problem that I discovered an open source project on CodePlex called ",(0,r.kt)("a",{parentName:"p",href:"http://closedxml.codeplex.com/"},"Closed XML"),". I wasn't alone in frustrations with Open XML - there were many of us sharing the same opinion. And some fantastic person had stepped into the breach to save us! In ClosedXMLs own words:"),(0,r.kt)("p",null,"ClosedXML makes it easier for developers to create Excel 2007/2010 files. It provides a nice object oriented way to manipulate the files (similar to VBA) without dealing with the hassles of XML Documents. It can be used by any .NET language like C# and Visual Basic (VB)."),(0,r.kt)("p",null,"Hallelujah!!!"),(0,r.kt)("p",null,"The way it works (as far as I understand) is that ClosedXML sits on top of Open XML and exposes a really straightforward API for you to interact with. I haven't looked into the guts of it but my guess is that it internally uses Open XML to achieve this (as to use ClosedXML you must reference DocumentFormat.OpenXml.dll)."),(0,r.kt)("p",null,"I've found myself thinking of ClosedXML's relationship to Open XML in the same way as I think about Entity Frameworks DbContexts relationship to ObjectContext. They do the same thing but the former in both cases offers a better API. They makes achieving the same goals ","*",(0,r.kt)("strong",{parentName:"p"},"much"),"*"," easier. (Although in fairness to the EF team I should say that ObjectContext was not particularly problematic to use; just DbContext made life even easier.)"),(0,r.kt)("h2",{id:"support---this-is-how-it-should-be-done"},"Support - This is how it should be done!"),(0,r.kt)("p",null,"Shortly after I started using ClosedXML I was asked if we could use it to perform a certain task. I tested. We couldn't."),(0,r.kt)("p",null,"When I discovered this ",(0,r.kt)("a",{parentName:"p",href:"http://closedxml.codeplex.com/workitem/8174"},"I raised a ticket")," against the project asking if the functionality was likely to be added at any point. I honestly didn't expect to hear back any time soon and was mentally working out ways to get round the issue for now."),(0,r.kt)("p",null,"To my surprise within ",(0,r.kt)("em",{parentName:"p"},"5 hours"),(0,r.kt)("a",{parentName:"p",href:"http://www.codeplex.com/site/users/view/MDeLeon"},"MDeLeon")," the developer behind ClosedXML had released a patch to the source code! By any stretch of the imagination that is fast! As it happened there were a few bugs that needed ironing out and over the course of the next 3 working days MDeLeon performed a number of fixes and left me quickly in the position of having a version of ClosedXML which allowed me to achieve my goal."),(0,r.kt)("p",null,"So this blog post exists in part to point anyone who is battling Open XML to ClosedXML. It's brilliant, well documented and I'd advise anyone to use it. You won't be disappointed. And in part I wanted to say thanks and well done to MDeLeon who quite made my week! Thank you!"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://closedxml.codeplex.com/"},"http://closedxml.codeplex.com/")))}h.isMDXComponent=!0}}]);