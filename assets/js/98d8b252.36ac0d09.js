"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[69886],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return g}});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),h=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=h(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=h(a),g=n,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||r;return a?i.createElement(m,o(o({ref:t},p),{},{components:a})):i.createElement(m,o({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var h=2;h<r;h++)o[h]=a[h];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},24922:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return h},assets:function(){return p},toc:function(){return u},default:function(){return g}});var i=a(87462),n=a(63366),r=(a(67294),a(3905)),o=["components"],s={title:"Beg, Steal or Borrow a Decent JavaScript DateTime Converter",authors:"johnnyreilly",tags:["Date","Sebastian Markb\xe5ge","DateTime","System.Web.Script.Serialization.JavaScriptSerializer","EMCAScript standard","json","javascript","Serialization","Nathan Vonnahme"],hide_table_of_contents:!1},l=void 0,h={permalink:"/2012/04/28/beg-steal-or-borrow-decent-javascript",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-04-28-beg-steal-or-borrow-decent-javascript/index.md",source:"@site/blog/2012-04-28-beg-steal-or-borrow-decent-javascript/index.md",title:"Beg, Steal or Borrow a Decent JavaScript DateTime Converter",description:"I've so named this blog post because it shamelessly borrows from the fine work of others 1. http 2. http://n8v.enteuxis.org/2010/12/parsing-iso-8601-dates-in-javascript/",date:"2012-04-28T00:00:00.000Z",formattedDate:"April 28, 2012",tags:[{label:"Date",permalink:"/tags/date"},{label:"Sebastian Markb\xe5ge",permalink:"/tags/sebastian-markbage"},{label:"DateTime",permalink:"/tags/date-time"},{label:"System.Web.Script.Serialization.JavaScriptSerializer",permalink:"/tags/system-web-script-serialization-java-script-serializer"},{label:"EMCAScript standard",permalink:"/tags/emca-script-standard"},{label:"json",permalink:"/tags/json"},{label:"javascript",permalink:"/tags/javascript"},{label:"Serialization",permalink:"/tags/serialization"},{label:"Nathan Vonnahme",permalink:"/tags/nathan-vonnahme"}],readingTime:6.49,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Beg, Steal or Borrow a Decent JavaScript DateTime Converter",authors:"johnnyreilly",tags:["Date","Sebastian Markb\xe5ge","DateTime","System.Web.Script.Serialization.JavaScriptSerializer","EMCAScript standard","json","javascript","Serialization","Nathan Vonnahme"],hide_table_of_contents:!1},prevItem:{title:"Globalize.js - number and date localisation made easy",permalink:"/2012/05/07/globalizejs-number-and-date"},nextItem:{title:"JSHint - Customising your hurt feelings",permalink:"/2012/04/23/jshint-customising-your-hurt-feelings"}},p={authorsImageUrls:[void 0]},u=[{value:"DateTime, JSON, JavaScript Dates....",id:"datetime-json-javascript-dates",level:2},{value:"Getting your web services to use the ISO 8601 DateTime Converter",id:"getting-your-web-services-to-use-the-iso-8601-datetime-converter",level:2}],c={toc:u};function g(e){var t=e.components,s=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I've so named this blog post because it shamelessly borrows from the fine work of others: Sebastian Markb\xe5ge and Nathan Vonnahme. Sebastian wrote a blog post documenting a good solution to the ASP.NET JavaScriptSerializer DateTime problem at the tail end of last year. However, his solution didn't get me 100% of the way there when I tried to use it because of a need to support IE 8 which lead me to use Nathan Vonnahme's ISO 8601 JavaScript Date parser. I thought it was worth documenting this, hence this post, but just so I'm clear; the hard work here was done by Sebastian Markb\xe5ge and Nathan Vonnahme and not me. Consider me just a curator in this case. The original blog posts that I am drawing upon can be found here: 1. ",(0,r.kt)("a",{parentName:"p",href:"http://blog.calyptus.eu/seb/2011/12/custom-datetime-json-serialization/"},"http://blog.calyptus.eu/seb/2011/12/custom-datetime-json-serialization/")," and here: 2. ",(0,r.kt)("a",{parentName:"p",href:"http://n8v.enteuxis.org/2010/12/parsing-iso-8601-dates-in-javascript/"},"http://n8v.enteuxis.org/2010/12/parsing-iso-8601-dates-in-javascript/")),(0,r.kt)("h2",{id:"datetime-json-javascript-dates"},"DateTime, JSON, JavaScript Dates...."),(0,r.kt)("p",null,"Like many, I've long been frustrated with the quirky DateTime serialisation employed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Web.Script.Serialization.JavaScriptSerializer")," class. When serialising DateTimes so they can be JSON.parsed on the client, this serialiser uses the following approach: (from MSDN) ",(0,r.kt)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/system.web.script.serialization.javascriptserializer.aspx"},(0,r.kt)("em",{parentName:"a"},'Date object, represented in JSON as "\\/Date(number of ticks)\\/". The number of ticks is a positive or negative long value that indicates the number of ticks (milliseconds) that have elapsed since midnight 01 January, 1970 UTC."'))," Now this is not particularly helpful in my opinion because it's not human readable (at least not this human; perhaps ",(0,r.kt)("a",{parentName:"p",href:"http://stackoverflow.com/users/22656/jon-skeet"},"Jon Skeet"),"...) When consuming your data from web services / PageMethods using ",(0,r.kt)("a",{parentName:"p",href:"http://api.jquery.com/jQuery.ajax/"},"jQuery.ajax")," you are landed with the extra task of having to convert what were DateTimes on the server from Microsofts string Date format (eg ",(0,r.kt)("inlineCode",{parentName:"p"},'"\\/Date(1293840000000)\\/"'),") into actual JavaScript Dates. It's also unhelpful because it's divergent from the approach to DateTime / Date serialisation used by a native JSON serialisers: ",(0,r.kt)("img",{loading:"lazy",src:a(46298).Z,width:"320",height:"144"})),(0,r.kt)("p",null,"Just as an aside it's worth emphasising that one of the limitations of JSON is that the JSON.parsing of a JSON.stringified date will ","*",(0,r.kt)("strong",{parentName:"p"},"not"),"*"," return you to a JavaScript Date but rather an ISO 8601 date string which will need to be subsequently converted into a Date. Not JSON's fault - essentially down to the absence of a Date literal within JavaScript. ## Making JavaScriptSerializer behave more JSON'y"),(0,r.kt)("p",null,"Anyway, I didn't think there was anything I could really do about this in an ASP.NET classic / WebForms world because, to my knowledge, it is not possible to swap out the serialiser that is used. JavaScriptSerializer is the only game in town. (Though I am optimistic about the future; given the announcement that I first picked up on Rick Strahl's blog that ",(0,r.kt)("a",{parentName:"p",href:"http://www.west-wind.com/weblog/posts/2012/Mar/09/Using-an-alternate-JSON-Serializer-in-ASPNET-Web-API"},"Json.NET was going to be adopted as the default JSON serializer for ASP.NET Web API"),"; what with Json.NET having out-of-the-box ",(0,r.kt)("a",{parentName:"p",href:"http://james.newtonking.com/archive/2009/02/20/good-date-times-with-json-net.aspx"},"ISO 8601 support"),". I digress...) Because it can make debugging a much more straightforward process I place a lot of value on being able to read the network traffic that web apps generate. It's much easier to drop into Fiddler / FireBug / Chrome dev tools etc and watch what's happening there and then instead of having to manually process the data separately first so that you can understand it. I think this is nicely aligned with the ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/KISS_principle"},"KISS principle"),". For that reason I've been generally converting DateTimes to ISO 8601 strings on the server before returning them to the client. A bit of extra overhead but generally worth it for the gains in clarity in my opinion. So I was surprised and delighted when I happened upon ",(0,r.kt)("a",{parentName:"p",href:"http://blog.calyptus.eu/seb/2011/12/custom-datetime-json-serialization/"},"Sebastian Markb\xe5ge's blog post")," which provided a DateTime JavaScriptConverter that could be plugged into the JavaScriptSerializer. You can see the code below (or on Sebastian's original post with a good explanation of how it works): ",(0,r.kt)("script",{src:"https://gist.github.com/2489976.js?file=DateTimeJavaScriptConverter.cs"})),(0,r.kt)("p",null,"Using this converter meant that a DateTime that previously would have been serialised as ",(0,r.kt)("inlineCode",{parentName:"p"},'"\\/Date(1293840000000)\\/"')," would now be serialised as ",(0,r.kt)("inlineCode",{parentName:"p"},'"2011-01-01T00:00:00.0000000Z"')," instead. This is entirely agreeable because 1. it's entirely clear what a ",(0,r.kt)("inlineCode",{parentName:"p"},'"2011-01-01T00:00:00.0000000Z"')," style date represents and 2. this is more in line with native browser JSON implementations and ",(0,r.kt)("inlineCode",{parentName:"p"},"&lt;statingTheObvious&gt;"),"consistency is a good thing.",(0,r.kt)("inlineCode",{parentName:"p"},"&lt;/statingTheObvious&gt;")),(0,r.kt)("h2",{id:"getting-your-web-services-to-use-the-iso-8601-datetime-converter"},"Getting your web services to use the ISO 8601 DateTime Converter"),(0,r.kt)("p",null,"Sebastian alluded in his post to a ",(0,r.kt)("inlineCode",{parentName:"p"},"web.config")," setting that could be used to get web services / pagemethods etc. implementing his custom DateTime serialiser. This is it: ",(0,r.kt)("script",{src:"https://gist.github.com/2489976.js?file=web.config"})),(0,r.kt)("p",null,"With this in place your web services / page methods will happily be able to serialise / deserialise ISO style date strings to your hearts content. ## What no ISO 8601 date string Date constructor?"),(0,r.kt)("p",null,"As I mentioned earlier, Sebastian's solution didn't get me 100% of the way there. There was still a fly in the ointment in the form of IE 8. Unfortunately IE 8 doesn't have JavaScript ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/parse"},"Date constructor that takes ISO 8601 date strings"),". This lead me to using Nathan Vonnahme's ISO 8601 JavaScript Date parser, the code of which is below (or see his original post ",(0,r.kt)("a",{parentName:"p",href:"http://n8v.enteuxis.org/2010/12/parsing-iso-8601-dates-in-javascript/"},"here"),"): ",(0,r.kt)("script",{src:"https://gist.github.com/2489976.js?file=parseISO8601Date.js"})),(0,r.kt)("p",null,"With this in place I could parse ISO 8601 Dates just like anyone else. Great stuff. ",(0,r.kt)("inlineCode",{parentName:"p"},'parseISO8601Date("2011-01-01T00:00:00.0000000Z")')," would give me a JavaScript Date of ",(0,r.kt)("inlineCode",{parentName:"p"},"Sat Jan 1 00:00:00 UTC 2011"),". Obviously in the fullness of time the parseISO8601Date solution should no longer be necessary because ",(0,r.kt)("a",{parentName:"p",href:"http://es5.github.com/#x15.9.3.2"},"EcmaScript 5 specifies an ISO 8601 date string constructor"),". However, in the interim Nathan's solution is a lifesaver. Thanks again both to Sebastian Markb\xe5ge and Nathan Vonnahme who have both generously allowed me use their work as the basis for this post. ## PS And it would have worked if it wasn't for that pesky IE 9..."),(0,r.kt)("p",null,"Subsequent to writing this post I thought I'd check that IE 9 had implemented a JavaScript Date constructor that would process an ISO 8601 date string like this: ",(0,r.kt)("inlineCode",{parentName:"p"},'new Date("2011-01-01T00:00:00.0000000Z")'),". It hasn't. Take a look: ",(0,r.kt)("img",{loading:"lazy",src:a(15294).Z,width:"320",height:"86"})),(0,r.kt)("p",null,"This is slightly galling as the above code works dandy in Firefox and Chrome. As you can see from the screenshot you can get the JavaScript IE 9 Date constructor to play nice by trimming off the final 4 \"0\"'s from the string. Frustrating. Obviously we can still use Nathan's solution but it's a shame that we can't use the native support. Based on what I've read ",(0,r.kt)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/az4se3k1.aspx#Roundtrip"},"here")," I think it would be possible to amend Sebastians serializer to fall in line with IE 9's pendantry by changing this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'return new CustomString(((DateTime)obj).ToUniversalTime()\n  .ToString(<b>"O"</b>)\n);\n')),(0,r.kt)("p",null,"To this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"return new CustomString(((DateTime)obj).ToUniversalTime()\n  .ToString(<b>\"yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fffzzz\"</b>)\n);\n")),(0,r.kt)("p",null,"I've held off from doing this myself as I rather like Sebastian's idea of being able to use Microsoft's Round-trip (\"O\", \"o\") Format Specifier. And it seems perverse that we should have to move away from using Microsoft's Round-trip Format Specifier purely because of (Microsoft's) IE! But it's a possibility to consider and so I put it out there. I would hope that MS will improve their JavaScript Date constructor with IE 10. A missed opportunity if they don't I think. ## PPS Just when you thought is over... IE 9 was right!"),(0,r.kt)("p",null,"Sebastian got in contact after I first published this post and generously pointed out that, contrary to my expectation, IE 9 technically had the correct implementation. According to the ",(0,r.kt)("a",{parentName:"p",href:"http://es5.github.com/#x15.9.1.15"},"EMCAScript standard")," the Date constructor should not allow more than millisecond precision. In this case, Chrome and Firefox are being less strict - not more correct. On reflection this does rather make sense as the result of a ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.stringify(new Date())"),' never results in an ISO date string to the 10 millionths of a second detail. Sebastian has himself stopped using Microsoft\'s Round-trip ("O", "o") Format Specifier in favour of this format string: ```cs\nreturn new CustomString(((DateTime)obj).ToUniversalTime()'),(0,r.kt)("p",null,".ToString(",(0,r.kt)("b",null,'"yyyy-MM-ddTHH:mm:ss.fffZ"'),")"),(0,r.kt)("p",null,");"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n This results in date strings that comply perfectly with the ECMAScript spec. I suspect I'll switch to using this also now. Though I'll probably leave the first part of the post intact as I think the background remains interesting. Thanks again Sebastian!\n")))}g.isMDXComponent=!0},46298:function(e,t){t.Z="data:image/png;base64,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"},15294:function(e,t){t.Z="data:image/png;base64,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"}}]);