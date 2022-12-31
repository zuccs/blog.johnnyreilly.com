"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[13505],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,m=p["".concat(s,".").concat(d)]||p[d]||c[d]||n;return a?o.createElement(m,i(i({ref:t},h),{},{components:a})):o.createElement(m,i({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<n;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},90618:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>h});a(67294);var o=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},r.apply(this,arguments)}function n(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={title:"Globalize.js - number and date localisation made easy",authors:"johnnyreilly",tags:["jqueryui","Globalize.JS","javascript","ASP.NET AJAX","Globalization","Richard D. Worth"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2012/05/07/globalizejs-number-and-date",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2012-05-07-globalizejs-number-and-date/index.md",source:"@site/blog/2012-05-07-globalizejs-number-and-date/index.md",title:"Globalize.js - number and date localisation made easy",description:"I wanted to write about a JavaScript library which seems to have had very little attention so far. And that surprises me as it's",date:"2012-05-07T00:00:00.000Z",formattedDate:"May 7, 2012",tags:[{label:"jqueryui",permalink:"/tags/jqueryui"},{label:"Globalize.JS",permalink:"/tags/globalize-js"},{label:"javascript",permalink:"/tags/javascript"},{label:"ASP.NET AJAX",permalink:"/tags/asp-net-ajax"},{label:"Globalization",permalink:"/tags/globalization"},{label:"Richard D. Worth",permalink:"/tags/richard-d-worth"}],readingTime:7.515,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Globalize.js - number and date localisation made easy",authors:"johnnyreilly",tags:["jqueryui","Globalize.JS","javascript","ASP.NET AJAX","Globalization","Richard D. Worth"],hide_table_of_contents:!1},prevItem:{title:"Dad Didn't Buy Any Games",permalink:"/2012/05/30/dad-didnt-buy-any-games"},nextItem:{title:"Beg, Steal or Borrow a Decent JavaScript DateTime Converter",permalink:"/2012/04/28/beg-steal-or-borrow-decent-javascript"}},u={authorsImageUrls:[void 0]},h=[{value:"Why does this matter?",id:"why-does-this-matter",level:2},{value:"Why does this matter to me?",id:"why-does-this-matter-to-me",level:2},{value:"JavaScript Date / Number Localisation - the Status Quo",id:"javascript-date--number-localisation---the-status-quo",level:2},{value:"Microsoft doing *good things*",id:"microsoft-doing-good-things",level:2},{value:"Microsoft doing *even better things* (Scott Gu to the rescue!)",id:"microsoft-doing-even-better-things-scott-gu-to-the-rescue",level:2},{value:"History takes a funny course...",id:"history-takes-a-funny-course",level:2},{value:"Stick a fork in it - it&#39;s done",id:"stick-a-fork-in-it---its-done",level:2},{value:"The Future?",id:"the-future",level:2}],p={toc:h};function c(e){var{components:t}=e,a=n(e,["components"]);return(0,o.kt)("wrapper",r({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I wanted to write about a JavaScript library which seems to have had very little attention so far. And that surprises me as it's"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Brilliant!"),(0,o.kt)("li",{parentName:"ol"},"Solves a common problem that faces many app developers who work in the wonderful world of web; myself included")),(0,o.kt)("p",null,"The library is called Globalize.js and can be found on ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/jquery/globalize"}),"GitHub here"),". Globalize.js is a simple JavaScript library that allows you to format and parse numbers and dates in culture specific fashion."),(0,o.kt)("h2",r({},{id:"why-does-this-matter"}),"Why does this matter?"),(0,o.kt)("p",null,"Because different countries and cultures do dates and numbers in different ways. Christmas Day this year in England will be ",(0,o.kt)("inlineCode",{parentName:"p"},"25/12/2012")," (dd/MM/yyyy). But for American eyes this should be ",(0,o.kt)("inlineCode",{parentName:"p"},"12/25/2012")," (M/d/yyyy). And for German ",(0,o.kt)("inlineCode",{parentName:"p"},"25.12.2012"),' (dd.MM.yyyy). Likewise, if I was to express numerically the value of "one thousand exactly - to 2 decimal places", as a UK citizen I would do it like so: ',(0,o.kt)("inlineCode",{parentName:"p"},"1,000.00"),". But if I was French I'd express it like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"1.000,00"),". You see my point?"),(0,o.kt)("h2",r({},{id:"why-does-this-matter-to-me"}),"Why does this matter to me?"),(0,o.kt)("p",null,"For a number of years I've been working on applications that are used globally, from London to Frankfurt to Shanghai to New York to Singapore and many other locations besides. The requirement has always been to serve up localised dates and numbers so users experience of the system is more natural. Since our applications are all ASP.NET we've never really had a problem server-side. Microsoft have blessed us with all the goodness of ",(0,o.kt)("a",r({parentName:"p"},{href:"http://msdn.microsoft.com/en-us/library/system.globalization.aspx"}),"System.Globalization")," which covers hundreds of different cultures and localisations. It makes it frankly easy:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-cs"}),'using System.Globalization;\n\n//Produces: "06.05.2012"\nnew DateTime(2012,5,6).ToString("d", new CultureInfo("de-DE"));\n\n//Produces: "45,56"\n45.56M.ToString("n", new CultureInfo("fr-FR"));\n')),(0,o.kt)("p",null,"The problem has always been client-side. If you need to localise dates and numbers on the client what do you do?"),(0,o.kt)("h2",r({},{id:"javascript-date--number-localisation---the-status-quo"}),"JavaScript Date / Number Localisation - the Status Quo"),(0,o.kt)("p",null,"Well to be frank - it's a bit rubbish really. What's on offer natively at present basically amounts to this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",r({parentName:"li"},{href:"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/toLocaleDateString"}),"Date.toLocaleDateString")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",r({parentName:"li"},{href:"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number/ToLocaleString"}),"Number.ToLocaleString"))),(0,o.kt)("p",null,"This is better than nothing - but not by much. There's no real control or flexibility here. If you don't like the native localisation format or you want something slightly different then tough. This is all you've got to play with."),(0,o.kt)("p",null,"For the longest time this didn't matter too much. Up until relatively recently the world of web was far more about the thin client and the fat server. It would be quite standard to have all HTML generated on the server. And, as we've seen .NET (and many other back end enviroments as well) give you all the flexiblility you might desire given this approach."),(0,o.kt)("p",null,(0,o.kt)("a",r({parentName:"p"},{href:"http://www.youtube.com/watch?v=k2sYIIjS-cQ"}),"But the times they are a-changing"),". And given the ongoing explosion of HTML 5 the rich client is very definitely with us. So we need tools."),(0,o.kt)("h2",r({},{id:"microsoft-doing-good-things"}),"Microsoft doing ","*","good things","*"),(0,o.kt)("p",null,"Hands up who remembers when Microsoft first shipped it's ",(0,o.kt)("a",r({parentName:"p"},{href:"http://msdn.microsoft.com/en-us/magazine/cc163300.aspx"}),"ASP.NET AJAX")," library back in 2007?"),(0,o.kt)("p",null,"Well a small part of this was the extensions ASP.NET AJAX added to JavaScripts native Date and Number objects.... These extensions allowed the localisation of Dates and Numbers to the current UI culture and the subsequent string parsing of these back into Dates / Numbers. These extensions pretty much gave JavaScript the functionality that the server already had in ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Globalization"),". (not quite like-for-like but near enough the mark)"),(0,o.kt)("p",null,"I'm not aware of a great fuss ever being made about this - a fact I find surprising since one would imagine this is a common need. There's good documentation about this on MSDN - here's some useful links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",r({parentName:"li"},{href:"http://msdn.microsoft.com/en-us/library/bb386572.aspx"}),"Ajax Script Globalization and Localization")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",r({parentName:"li"},{href:"http://msdn.microsoft.com/en-us/library/bb386581.aspx"}),"Walkthrough: Globalizing a Date by Using Client Script")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",r({parentName:"li"},{href:"http://msdn.microsoft.com/en-us/library/bb397506.aspx"}),"JavaScript Base Type Extensions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",r({parentName:"li"},{href:"http://msdn.microsoft.com/en-us/library/bb397521.aspx"}),"Date.parseLocale")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",r({parentName:"li"},{href:"http://msdn.microsoft.com/en-us/library/bb383816.aspx"}),"Date.localeFormat")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",r({parentName:"li"},{href:"http://msdn.microsoft.com/en-us/library/bb310813.aspx"}),"Number.localeFormat")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",r({parentName:"li"},{href:"http://msdn.microsoft.com/en-us/library/bb310985.aspx"}),"Number.parseLocale"))),(0,o.kt)("p",null,"When our team became aware of this we started to make use of it in our web applications. I imagine we weren't alone..."),(0,o.kt)("h2",r({},{id:"microsoft-doing-even-better-things-scott-gu-to-the-rescue"}),"Microsoft doing ","*","even better things","*"," (Scott Gu to the rescue!)"),(0,o.kt)("p",null,"I started to think about this again when MVC reared it's lovely head."),(0,o.kt)("p",null,"Like many, I found I preferred the separation of concerns / testability etc that MVC allowed. As such, our team was planning to, over time, migrate our ASP.NET WebForms applications over to MVC. However, before we could even begin to do this we had a problem. Our JavaScript localisation was dependant on the ScriptManager. The ",(0,o.kt)("a",r({parentName:"p"},{href:"http://msdn.microsoft.com/en-us/library/system.web.ui.scriptmanager.aspx"}),"ScriptManager")," is very much a WebForms construct."),(0,o.kt)("p",null,"What to do? To the users it wouldn't be acceptable to remove the localisation functionality from the web apps. The architecture of an application is, to a certain extent, meaningless from the users perspective - they're only interested in what directly impacts them. That makes sense, even if it was a problem for us."),(0,o.kt)("p",null,"Fortunately the Great Gu had it in hand. Lo and behold the ",(0,o.kt)("a",r({parentName:"p"},{href:"http://forum.jquery.com/topic/proposal-for-a-globalization-plugin-jquery-glob-js"}),"this post")," appeared on the jQuery forum and the following post appeared on Guthrie's blog:"),(0,o.kt)("p",null,(0,o.kt)("a",r({parentName:"p"},{href:"http://weblogs.asp.net/scottgu/archive/2010/06/10/jquery-globalization-plugin-from-microsoft.aspx"}),"http://weblogs.asp.net/scottgu/archive/2010/06/10/jquery-globalization-plugin-from-microsoft.aspx")),(0,o.kt)("p",null,"Yes that's right. Microsoft were giving back to the jQuery community by contributing a jQuery globalisation plug-in. They'd basically taken the work done with ASP.NET AJAX Date / Number extensions, jQuery-plug-in-ified it and put it out there. Fantastic!"),(0,o.kt)("p",null,"Using this we could localise / globalise dates and numbers whether we were working in WebForms or in MVC. Or anything else for that matter. If we were suddenly seized with a desire to re-write our apps in PHP we'd ","*",(0,o.kt)("strong",{parentName:"p"},"still"),"*"," be able to use Globalize.js on the client to handle our regionalisation of dates and numbers."),(0,o.kt)("h2",r({},{id:"history-takes-a-funny-course"}),"History takes a funny course..."),(0,o.kt)("p",null,"Now for my part I would have expected that this announcement to be followed in short order by dancing in the streets and widespread adoption. Surprisingly, not so. All went quiet on the globalisation front for some time and then out of the blue the following comment appeared on the jQuery forum by ",(0,o.kt)("a",r({parentName:"p"},{href:"http://rdworth.org/blog/"}),"Richard D. Worth")," (he of jQuery UI fame):"),(0,o.kt)("p",null,(0,o.kt)("a",r({parentName:"p"},{href:"http://blog.jquery.com/2011/04/16/official-plugins-a-change-in-the-roadmap/#comment-527484"}),"http://blog.jquery.com/2011/04/16/official-plugins-a-change-in-the-roadmap/#comment-527484")),(0,o.kt)("p",null,"The long and short of which was:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The jQuery UI team were now taking care of (the re-named) Globalize.js library as the grid control they were developing had a need for some of Globalize.js's goodness. Consequently a home for Globalize.js appeared on the jQuery UI website: ",(0,o.kt)("a",r({parentName:"li"},{href:"http://wiki.jqueryui.com/Globalize"}),"http://wiki.jqueryui.com/Globalize")),(0,o.kt)("li",{parentName:"ul"},"The source of Globalize.js moved to this location on GitHub: ",(0,o.kt)("a",r({parentName:"li"},{href:"https://github.com/jquery/globalize/"}),"https://github.com/jquery/globalize/")),(0,o.kt)("li",{parentName:"ul"},"Perhaps most significantly, the jQuery globalisation plug-in as developed by Microsoft had now been made a standalone JavaScript library. This was clearly brilliant news for Node.js developers as they would now be able to take advantage of this and perform localisation / globalisation server-side - they wouldn't need to have jQuery along for the ride. Also, this would be presumably be good news for users of other client side JavaScript libraries like Dojo / YUI etc.")),(0,o.kt)("p",null,"Globalize.js clearly has a rosy future in front of it. Using the new Globalize.js library was still simplicity itself. Here's some examples of localising dates / numbers using the German culture:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-js"}),'<script\n  src="/Scripts/Globalize/globalize.js"\n  type="text/javascript"><\/script>\n<script\n  src="/Scripts/Globalize/cultures/globalize.culture.de-DE.js"\n  type="text/javascript"><\/script>\n\nGlobalize.culture("de-DE");\n\n//"2012-05-06" - ISO 8601 format\nGlobalize.format(new Date(2012,4,6), "yyyy-MM-dd");\n\n//"06.05.2012" - standard German short date format of dd.MM.yyyy\nGlobalize.format(new Date(2012,4,6), Globalize.culture().calendar.patterns.d);\n\n//"4.576,3" - a number rendered to 1 decimal place\nGlobalize.format(4576.34, "n1");\n')),(0,o.kt)("h2",r({},{id:"stick-a-fork-in-it---its-done"}),"Stick a fork in it - it's done"),(0,o.kt)("p",null,"The entry for Globalize.js on the jQuery UI site reads as follows:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},'"version: 0.1.0a1 (not a jQuery UI version number, as this is a standalone utility) status: in development (part of Grid project)"'))),(0,o.kt)("p",null,"I held back from making use of the library for some time, deterred by the \"in development\" status. However, I had a bit of dialog with one of the jQuery UI team (I forget exactly who) who advised that the API was unlikely to change further and that the codebase was actually pretty stable. Our team did some testing of Globalize.js and found this very much to be case. Everything worked just as we expected and hoped. We're now using Globalize.js in a production environment with no problems reported; it's been doing a grand job."),(0,o.kt)("p",null,"In my opinion, Number / Date localisation on the client is ready for primetime right now - it works! Unfortunately, because Globalize.js has been officially linked in with the jQuery UI grid project it seems unlikely that this will officially ship until the grid does. Looking at the jQuery UI ",(0,o.kt)("a",r({parentName:"p"},{href:"http://wiki.jqueryui.com/Roadmap"}),"roadmap")," the grid is currently slated to release with jQuery UI 2.1. There isn't yet a release date for jQuery UI 1.9 and so it could be a long time before the grid actually sees the light of day."),(0,o.kt)("p",null,'I\'m hoping that the jQuery UI team will be persuaded to "officially" release Globalize.js long before the grid actually ships. Obviously people can use Globalize.js as is right now (as we are) but it seems a shame that many others will be missing out on using this excellent functionality, deterred by the "in development" status. Either way, ',(0,o.kt)("a",r({parentName:"p"},{href:"http://www.youtube.com/watch?v=qEMytPF8YuY"}),"the campaign to release Globalise.js officially starts here!")),(0,o.kt)("h2",r({},{id:"the-future"}),"The Future?"),(0,o.kt)("p",null,"There are plans to bake globalisation right into JavaScript natively with EcmaScript 5.1. There's a good post on the topic ",(0,o.kt)("a",r({parentName:"p"},{href:"http://generatedcontent.org/post/59403168016/esintlapi"}),"here"),". And here's a couple of historical links worth reading too:"),(0,o.kt)("p",null,(0,o.kt)("a",r({parentName:"p"},{href:"http://norbertlindenberg.com/2012/02/ecmascript-internationalization-api/"}),"http://norbertlindenberg.com/2012/02/ecmascript-internationalization-api/"),(0,o.kt)("a",r({parentName:"p"},{href:"http://wiki.ecmascript.org/doku.php?id=globalization:specification_drafts"}),"http://wiki.ecmascript.org/doku.php?id=globalization:specification_drafts")))}c.isMDXComponent=!0}}]);