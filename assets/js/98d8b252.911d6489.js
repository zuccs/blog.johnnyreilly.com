"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[69886],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=i,u=h["".concat(l,".").concat(d)]||h[d]||m[d]||r;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});n(67294);var a=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={title:"Beg, Steal or Borrow a Decent JavaScript DateTime Converter",authors:"johnnyreilly",tags:["Date","Sebastian Markb\xe5ge","DateTime","System.Web.Script.Serialization.JavaScriptSerializer","EMCAScript standard","json","javascript","Serialization","Nathan Vonnahme"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2012/04/28/beg-steal-or-borrow-decent-javascript",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2012-04-28-beg-steal-or-borrow-decent-javascript/index.md",source:"@site/blog/2012-04-28-beg-steal-or-borrow-decent-javascript/index.md",title:"Beg, Steal or Borrow a Decent JavaScript DateTime Converter",description:"I've so named this blog post because it shamelessly borrows from the fine work of others 1. http 2. http://n8v.enteuxis.org/2010/12/parsing-iso-8601-dates-in-javascript/",date:"2012-04-28T00:00:00.000Z",formattedDate:"April 28, 2012",tags:[{label:"Date",permalink:"/tags/date"},{label:"Sebastian Markb\xe5ge",permalink:"/tags/sebastian-markbage"},{label:"DateTime",permalink:"/tags/date-time"},{label:"System.Web.Script.Serialization.JavaScriptSerializer",permalink:"/tags/system-web-script-serialization-java-script-serializer"},{label:"EMCAScript standard",permalink:"/tags/emca-script-standard"},{label:"json",permalink:"/tags/json"},{label:"javascript",permalink:"/tags/javascript"},{label:"Serialization",permalink:"/tags/serialization"},{label:"Nathan Vonnahme",permalink:"/tags/nathan-vonnahme"}],readingTime:9.465,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Beg, Steal or Borrow a Decent JavaScript DateTime Converter",authors:"johnnyreilly",tags:["Date","Sebastian Markb\xe5ge","DateTime","System.Web.Script.Serialization.JavaScriptSerializer","EMCAScript standard","json","javascript","Serialization","Nathan Vonnahme"],hide_table_of_contents:!1},prevItem:{title:"Globalize.js - number and date localisation made easy",permalink:"/2012/05/07/globalizejs-number-and-date"},nextItem:{title:"JSHint - Customising your hurt feelings",permalink:"/2012/04/23/jshint-customising-your-hurt-feelings"}},c={authorsImageUrls:[void 0]},p=[{value:"DateTime, JSON, JavaScript Dates....",id:"datetime-json-javascript-dates",level:2},{value:"Getting your web services to use the ISO 8601 DateTime Converter",id:"getting-your-web-services-to-use-the-iso-8601-datetime-converter",level:2}],h={toc:p};function m(e){var{components:t}=e,o=r(e,["components"]);return(0,a.kt)("wrapper",i({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I've so named this blog post because it shamelessly borrows from the fine work of others: Sebastian Markb\xe5ge and Nathan Vonnahme. Sebastian wrote a blog post documenting a good solution to the ASP.NET JavaScriptSerializer DateTime problem at the tail end of last year. However, his solution didn't get me 100% of the way there when I tried to use it because of a need to support IE 8 which lead me to use Nathan Vonnahme's ISO 8601 JavaScript Date parser. I thought it was worth documenting this, hence this post, but just so I'm clear; the hard work here was done by Sebastian Markb\xe5ge and Nathan Vonnahme and not me. Consider me just a curator in this case. The original blog posts that I am drawing upon can be found here: 1. ",(0,a.kt)("a",i({parentName:"p"},{href:"http://blog.calyptus.eu/seb/2011/12/custom-datetime-json-serialization/"}),"http://blog.calyptus.eu/seb/2011/12/custom-datetime-json-serialization/")," and here: 2. ",(0,a.kt)("a",i({parentName:"p"},{href:"http://n8v.enteuxis.org/2010/12/parsing-iso-8601-dates-in-javascript/"}),"http://n8v.enteuxis.org/2010/12/parsing-iso-8601-dates-in-javascript/")),(0,a.kt)("h2",i({},{id:"datetime-json-javascript-dates"}),"DateTime, JSON, JavaScript Dates...."),(0,a.kt)("p",null,"Like many, I've long been frustrated with the quirky DateTime serialisation employed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"System.Web.Script.Serialization.JavaScriptSerializer")," class. When serialising DateTimes so they can be JSON.parsed on the client, this serialiser uses the following approach: (from MSDN) ",(0,a.kt)("a",i({parentName:"p"},{href:"http://msdn.microsoft.com/en-us/library/system.web.script.serialization.javascriptserializer.aspx"}),(0,a.kt)("em",{parentName:"a"},'Date object, represented in JSON as "\\/Date(number of ticks)\\/". The number of ticks is a positive or negative long value that indicates the number of ticks (milliseconds) that have elapsed since midnight 01 January, 1970 UTC."'))," Now this is not particularly helpful in my opinion because it's not human readable (at least not this human; perhaps ",(0,a.kt)("a",i({parentName:"p"},{href:"http://stackoverflow.com/users/22656/jon-skeet"}),"Jon Skeet"),"...) When consuming your data from web services / PageMethods using ",(0,a.kt)("a",i({parentName:"p"},{href:"http://api.jquery.com/jQuery.ajax/"}),"jQuery.ajax")," you are landed with the extra task of having to convert what were DateTimes on the server from Microsofts string Date format (eg ",(0,a.kt)("inlineCode",{parentName:"p"},'"\\/Date(1293840000000)\\/"'),") into actual JavaScript Dates. It's also unhelpful because it's divergent from the approach to DateTime / Date serialisation used by a native JSON serialisers:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(29635).Z,width:"320",height:"144"})),(0,a.kt)("p",null,"Just as an aside it's worth emphasising that one of the limitations of JSON is that the JSON.parsing of a JSON.stringified date will ","*",(0,a.kt)("strong",{parentName:"p"},"not"),"*"," return you to a JavaScript Date but rather an ISO 8601 date string which will need to be subsequently converted into a Date. Not JSON's fault - essentially down to the absence of a Date literal within JavaScript. ## Making JavaScriptSerializer behave more JSON'y"),(0,a.kt)("p",null,"Anyway, I didn't think there was anything I could really do about this in an ASP.NET classic / WebForms world because, to my knowledge, it is not possible to swap out the serialiser that is used. JavaScriptSerializer is the only game in town. (Though I am optimistic about the future; given the announcement that I first picked up on Rick Strahl's blog that ",(0,a.kt)("a",i({parentName:"p"},{href:"http://www.west-wind.com/weblog/posts/2012/Mar/09/Using-an-alternate-JSON-Serializer-in-ASPNET-Web-API"}),"Json.NET was going to be adopted as the default JSON serializer for ASP.NET Web API"),"; what with Json.NET having out-of-the-box ",(0,a.kt)("a",i({parentName:"p"},{href:"http://james.newtonking.com/archive/2009/02/20/good-date-times-with-json-net.aspx"}),"ISO 8601 support"),". I digress...) Because it can make debugging a much more straightforward process I place a lot of value on being able to read the network traffic that web apps generate. It's much easier to drop into Fiddler / FireBug / Chrome dev tools etc and watch what's happening there and then instead of having to manually process the data separately first so that you can understand it. I think this is nicely aligned with the ",(0,a.kt)("a",i({parentName:"p"},{href:"http://en.wikipedia.org/wiki/KISS_principle"}),"KISS principle"),". For that reason I've been generally converting DateTimes to ISO 8601 strings on the server before returning them to the client. A bit of extra overhead but generally worth it for the gains in clarity in my opinion. So I was surprised and delighted when I happened upon ",(0,a.kt)("a",i({parentName:"p"},{href:"http://blog.calyptus.eu/seb/2011/12/custom-datetime-json-serialization/"}),"Sebastian Markb\xe5ge's blog post")," which provided a DateTime JavaScriptConverter that could be plugged into the JavaScriptSerializer. You can see the code below (or on Sebastian's original post with a good explanation of how it works):"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-cs"}),'using System;\nusing System.Collections;\nusing System.Collections.Generic;\nusing System.Web.Script.Serialization;\n\nnamespace MyNamespace\n{\n  /// <summary>\n  /// A custom DateTime JavaScriptConverter courtesy of these good folks: http://blog.calyptus.eu/seb/2011/12/custom-datetime-json-serialization/\n  /// Using this forces DataTimes to be serialised as ISO 8601 rather "\\/Date(1249335477787)\\/" style\n  /// </summary>\n  public class DateTimeJavaScriptConverter : JavaScriptConverter\n  {\n    public override object Deserialize(IDictionary<string, object> dictionary, Type type, JavaScriptSerializer serializer)\n    {\n      return new JavaScriptSerializer().ConvertToType(dictionary, type);\n    }\n\n    public override IDictionary<string, object> Serialize(object obj, JavaScriptSerializer serializer)\n    {\n      if (!(obj is DateTime)) return null;\n      return new CustomString(((DateTime)obj).ToUniversalTime().ToString("O"));\n    }\n\n    public override IEnumerable<Type> SupportedTypes\n    {\n      get { return new[] { typeof(DateTime) }; }\n    }\n\n    private class CustomString : Uri, IDictionary<string, object>\n    {\n      public CustomString(string str)\n        : base(str, UriKind.Relative)\n      {\n      }\n\n      void IDictionary<string, object>.Add(string key, object value) { throw new NotImplementedException(); }\n      bool IDictionary<string, object>.ContainsKey(string key) { throw new NotImplementedException(); }\n      ICollection<string> IDictionary<string, object>.Keys { get { throw new NotImplementedException(); } }\n      bool IDictionary<string, object>.Remove(string key) { throw new NotImplementedException(); }\n      bool IDictionary<string, object>.TryGetValue(string key, out object value) { throw new NotImplementedException(); }\n      ICollection<object> IDictionary<string, object>.Values { get { throw new NotImplementedException(); } }\n      object IDictionary<string, object>.this[string key]\n      {\n        get { throw new NotImplementedException(); }\n        set { throw new NotImplementedException(); }\n      }\n      void ICollection<KeyValuePair<string, object>>.Add(KeyValuePair<string, object> item) { throw new NotImplementedException(); }\n      void ICollection<KeyValuePair<string, object>>.Clear() { throw new NotImplementedException(); }\n      bool ICollection<KeyValuePair<string, object>>.Contains(KeyValuePair<string, object> item) { throw new NotImplementedException(); }\n      void ICollection<KeyValuePair<string, object>>.CopyTo(KeyValuePair<string, object>[] array, int arrayIndex) { throw new NotImplementedException(); }\n      int ICollection<KeyValuePair<string, object>>.Count { get { throw new NotImplementedException(); } }\n      bool ICollection<KeyValuePair<string, object>>.IsReadOnly { get { throw new NotImplementedException(); } }\n      bool ICollection<KeyValuePair<string, object>>.Remove(KeyValuePair<string, object> item) { throw new NotImplementedException(); }\n      IEnumerator<KeyValuePair<string, object>> IEnumerable<KeyValuePair<string, object>>.GetEnumerator() { throw new NotImplementedException(); }\n      IEnumerator IEnumerable.GetEnumerator() { throw new NotImplementedException(); }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Using this converter meant that a DateTime that previously would have been serialised as ",(0,a.kt)("inlineCode",{parentName:"p"},'"\\/Date(1293840000000)\\/"')," would now be serialised as ",(0,a.kt)("inlineCode",{parentName:"p"},'"2011-01-01T00:00:00.0000000Z"')," instead. This is entirely agreeable because 1. it's entirely clear what a ",(0,a.kt)("inlineCode",{parentName:"p"},'"2011-01-01T00:00:00.0000000Z"')," style date represents and 2. this is more in line with native browser JSON implementations and ",(0,a.kt)("inlineCode",{parentName:"p"},"&lt;statingTheObvious&gt;"),"consistency is a good thing.",(0,a.kt)("inlineCode",{parentName:"p"},"&lt;/statingTheObvious&gt;")),(0,a.kt)("h2",i({},{id:"getting-your-web-services-to-use-the-iso-8601-datetime-converter"}),"Getting your web services to use the ISO 8601 DateTime Converter"),(0,a.kt)("p",null,"Sebastian alluded in his post to a ",(0,a.kt)("inlineCode",{parentName:"p"},"web.config")," setting that could be used to get web services / pagemethods etc. implementing his custom DateTime serialiser. This is it:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-xml"}),'<configuration>\n  <system.web.extensions>\n    <scripting>\n      <webServices>\n        \x3c!--\n          This line of config means that when a JavaScriptSerializer is used by a web service / page method\n          it will automatically register the DateTimeJavaScriptConverter to use.  To use the converter directly in code you would need to enter the below:\n\n          var serializer = new System.Web.Script.Serialization.JavaScriptSerializer();\n          serializer.RegisterConverters(new JavaScriptConverter[] { new DateTimeJavaScriptConverter() });\n\n        --\x3e\n        <jsonSerialization>\n          <converters>\n            <add name="DateTimeJavaScriptConverter" type="MyNamespace.DateTimeJavaScriptConverter"/>\n          </converters>\n        </jsonSerialization>\n\n      </webServices>\n      <scriptResourceHandler enableCompression="false" enableCaching="true"/>\n    </scripting>\n  </system.web.extensions>\n</configuration>\n')),(0,a.kt)("p",null,"With this in place your web services / page methods will happily be able to serialise / deserialise ISO style date strings to your hearts content. ## What no ISO 8601 date string Date constructor?"),(0,a.kt)("p",null,"As I mentioned earlier, Sebastian's solution didn't get me 100% of the way there. There was still a fly in the ointment in the form of IE 8. Unfortunately IE 8 doesn't have JavaScript ",(0,a.kt)("a",i({parentName:"p"},{href:"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/parse"}),"Date constructor that takes ISO 8601 date strings"),". This lead me to using Nathan Vonnahme's ISO 8601 JavaScript Date parser, the code of which is below (or see his original post ",(0,a.kt)("a",i({parentName:"p"},{href:"http://n8v.enteuxis.org/2010/12/parsing-iso-8601-dates-in-javascript/"}),"here"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js"}),'//===============================================================================\n// Parse ISO 8601 Date Format date string and return a date - equivalent to https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/parse\n// Found here: n8v.enteuxis.org/2010/12/parsing-iso-8601-dates-in-javascript/\n//===============================================================================\nfunction parseISO8601Date(s) {\n  // parenthese matches:\n  // year month day    hours minutes seconds\n  // dotmilliseconds\n  // tzstring plusminus hours minutes\n  var re =\n    /(\\d{4})-(\\d\\d)-(\\d\\d)T(\\d\\d):(\\d\\d):(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d):(\\d\\d))/;\n\n  var d = [];\n  d = s.match(re);\n\n  // "2010-12-07T11:00:00.000-09:00" parses to:\n  //  ["2010-12-07T11:00:00.000-09:00", "2010", "12", "07", "11",\n  //     "00", "00", ".000", "-09:00", "-", "09", "00"]\n  // "2010-12-07T11:00:00.000Z" parses to:\n  //  ["2010-12-07T11:00:00.000Z",      "2010", "12", "07", "11",\n  //     "00", "00", ".000", "Z", undefined, undefined, undefined]\n\n  if (!d) {\n    throw "Couldn\'t parse ISO 8601 date string \'" + s + "\'";\n  }\n\n  // parse strings, leading zeros into proper ints\n  var a = [1, 2, 3, 4, 5, 6, 10, 11];\n  for (var i in a) {\n    d[a[i]] = parseInt(d[a[i]], 10);\n  }\n  d[7] = parseFloat(d[7]);\n\n  // Date.UTC(year, month[, date[, hrs[, min[, sec[, ms]]]]])\n  // note that month is 0-11, not 1-12\n  // see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/UTC\n  var ms = Date.UTC(d[1], d[2] - 1, d[3], d[4], d[5], d[6]);\n\n  // if there are milliseconds, add them\n  if (d[7] > 0) {\n    ms += Math.round(d[7] * 1000);\n  }\n\n  // if there\'s a timezone, calculate it\n  if (d[8] != \'Z\' && d[10]) {\n    var offset = d[10] * 60 * 60 * 1000;\n    if (d[11]) {\n      offset += d[11] * 60 * 1000;\n    }\n    if (d[9] == \'-\') {\n      ms -= offset;\n    } else {\n      ms += offset;\n    }\n  }\n\n  return new Date(ms);\n}\n')),(0,a.kt)("p",null,"With this in place I could parse ISO 8601 Dates just like anyone else. Great stuff. ",(0,a.kt)("inlineCode",{parentName:"p"},'parseISO8601Date("2011-01-01T00:00:00.0000000Z")')," would give me a JavaScript Date of ",(0,a.kt)("inlineCode",{parentName:"p"},"Sat Jan 1 00:00:00 UTC 2011"),". Obviously in the fullness of time the parseISO8601Date solution should no longer be necessary because ",(0,a.kt)("a",i({parentName:"p"},{href:"http://es5.github.com/#x15.9.3.2"}),"EcmaScript 5 specifies an ISO 8601 date string constructor"),". However, in the interim Nathan's solution is a lifesaver. Thanks again both to Sebastian Markb\xe5ge and Nathan Vonnahme who have both generously allowed me use their work as the basis for this post. ## PS And it would have worked if it wasn't for that pesky IE 9..."),(0,a.kt)("p",null,"Subsequent to writing this post I thought I'd check that IE 9 had implemented a JavaScript Date constructor that would process an ISO 8601 date string like this: ",(0,a.kt)("inlineCode",{parentName:"p"},'new Date("2011-01-01T00:00:00.0000000Z")'),". It hasn't. Take a look:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(56600).Z,width:"320",height:"86"})),(0,a.kt)("p",null,"This is slightly galling as the above code works dandy in Firefox and Chrome. As you can see from the screenshot you can get the JavaScript IE 9 Date constructor to play nice by trimming off the final 4 \"0\"'s from the string. Frustrating. Obviously we can still use Nathan's solution but it's a shame that we can't use the native support. Based on what I've read ",(0,a.kt)("a",i({parentName:"p"},{href:"http://msdn.microsoft.com/en-us/library/az4se3k1.aspx#Roundtrip"}),"here")," I think it would be possible to amend Sebastians serializer to fall in line with IE 9's pendantry by changing this:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-cs"}),'return new CustomString(((DateTime)obj).ToUniversalTime()\n  .ToString(<b>"O"</b>)\n);\n')),(0,a.kt)("p",null,"To this:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-cs"}),"return new CustomString(((DateTime)obj).ToUniversalTime()\n  .ToString(<b>\"yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fffzzz\"</b>)\n);\n")),(0,a.kt)("p",null,"I've held off from doing this myself as I rather like Sebastian's idea of being able to use Microsoft's Round-trip (\"O\", \"o\") Format Specifier. And it seems perverse that we should have to move away from using Microsoft's Round-trip Format Specifier purely because of (Microsoft's) IE! But it's a possibility to consider and so I put it out there. I would hope that MS will improve their JavaScript Date constructor with IE 10. A missed opportunity if they don't I think. ## PPS Just when you thought is over... IE 9 was right!"),(0,a.kt)("p",null,"Sebastian got in contact after I first published this post and generously pointed out that, contrary to my expectation, IE 9 technically had the correct implementation. According to the ",(0,a.kt)("a",i({parentName:"p"},{href:"http://es5.github.com/#x15.9.1.15"}),"EMCAScript standard")," the Date constructor should not allow more than millisecond precision. In this case, Chrome and Firefox are being less strict - not more correct. On reflection this does rather make sense as the result of a ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON.stringify(new Date())"),' never results in an ISO date string to the 10 millionths of a second detail. Sebastian has himself stopped using Microsoft\'s Round-trip ("O", "o") Format Specifier in favour of this format string: ```cs\nreturn new CustomString(((DateTime)obj).ToUniversalTime()'),(0,a.kt)("p",null,".ToString(",(0,a.kt)("b",null,'"yyyy-MM-ddTHH:mm:ss.fffZ"'),")"),(0,a.kt)("p",null,");"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{}),"\n This results in date strings that comply perfectly with the ECMAScript spec. I suspect I'll switch to using this also now. Though I'll probably leave the first part of the post intact as I think the background remains interesting. Thanks again Sebastian!\n")))}m.isMDXComponent=!0},29635:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/webp;base64,UklGRtAWAABXRUJQVlA4IMQWAAAwXACdASpAAZAAPp1GnUsoKCYip1S7kLATiWUYn2PMfP7S/tVsWQ7/Nfzxlp3/feeMq+L6I+bx/wvWN5gPPL9F//T6ZL1Euit9Wb/Y+nlmPvmf8gv2XhT5u/n+3peT7EtUfuDzo/3ffD8Z9Qv2D5vT+3jF936AXs99t8535X/t+g/2A9gD+cee3+78MP7P/kf2p+AH+cf3//uf5v8gPlUz4PWvsGeXB7Bv3f9k/9uDCWeFCtFinWT57Wqp4yxgKasdQ+xHYcYaIYjch6dachhBdfEtDXdclbUT4CKK7OrKzIwy3IhO+ZXbAB0hjNuH5Oz3EKPbMut7S4wmI6d/iiOSgh93e5peUlbVeYdytSxSUGxwARtV3lRmMCV1lTdqs+95+wdy2UA34nckW6eRA9wOdQBctPbzS2geXv4tZplWMFeNlUIdrworlb1rDMg/9LeU8UyMTRIEMiSUQt57URK+rLQ5bd7hXet/zOvKyqjCUh+9LbHdx7CDZIAkGWPKEaPHGUv+pUYSCQ7pjxlzEfg07Xt9Ma8BxFaSbSuVQz6iBEDexxx27s9z8pZIjKQ7JUkN67cATM9z4u0Q+YU8PBJLMvIeHGZWOTOD+PHx3z5nQDJYtYOaJ7tEcvVzpB1KVSoqooe51W5++h+JlTRuVEa3gNkYXhgEkuaOfnH7qpofKmj/DzDTR0z/FGFFijPBr0xT0Vv/KGldLlABo7sA45kTOZPAtU0XifdrKYf47hpETU957Ihe0GNNUGVFWObOfBvXcplJJqIt/X1LHU/a8X6Y1Y0TrO84NtWr94lsqZ9YpqWVuPu73Dfq+oeRoCiWeFkzz2Xgu4VK06X8P9MISD5NCEMwToX3JYLQOBStWtCFoO8EJ9uRiuNaiPwzGbQAB+/4vplIoDHC31LoBoNs/CFlRjZpJ4ijorWXWWJg04P1AMc4/uDOeBanW2cBc7pn9rxTzVxP5AjulepFBjnH9wZYvdz++/5Tcj2PAAD+7HtGQ9A0/a16J6Nxv/hu9rL/JSDU0gbpAERRgiMQoEqw9NcWHpihUyicmVVQO8u/xkPkDExgJNlA901CKCi0/IL57EkvJhOfeV/D6hnixPyIiEGKSBDufqlsET3OLofnD3oS/fgzsegzFkcmoxW6bq8Q0bLD7bomDvOLr3b2p0VbLP7XXmX9FaEg1BpEaKz6JyQca/IVRcdIicsKCeApn3b85J96JrVqDxJd5YgGuMw+PPbSgD7YtU692X/2Vg3OFDwMTz2aMYVs1iL0JgqFWZy6tfwhNwjnG2sYwQUosqS7B4A6lx14ZznfJtCFiZ6Vdo5P7i4RjWbW4JTmhBIIHnLpzPqjGechna4vzeu9E7r/AAqPTkQUwMyn3vGX5p7NfR8WNrl+KUaADAKjhhdzrX6OAhzjofAM11+x7aOhDBNu+i2aoP4bYkNJ9ofcutlEGoZ6BSED710rooQCVAGd3rqY2kb/Ed0lJhHMpjqnPoP4AvxmRFT2KbW+u+6kHsyFRmjA45RbHfRbLabzvHXjAmPZAT2TBEhMGIM2lJbl6CoQBzcJGpq+H95WI9wqFIrG/FolpQ62injgaTcu/1G9ReWHMYCdxLJzj4S+vtfQCc9ij4AZaZgfbc9mHm3R38F1WugBT5kcV7wsQMaTf1CwXeM7e7x0TdZFL5NWLYUOg2ncp5RAXyyM/mWtSJzsv8ciqo9aGTc/+lHzxYraVAE4t9p4nuwQJ1gqmz5SLl19UecaJ3cc15LR6/GeQ8mtNdHfkB5f1AiORtcp+LKrqEEFkaPnnZ21lgpoZYkwRsTNPzw9jvcfZnO+3Wvw1P5mbHuqu+IAE6QSxkVmBCa20wF0FX1o+4dYXPSddHjC4+cfoIaIeldR+U+EfbCzxjlIROEAiFbyothYbo1hNGAu5d/foear2ELsGMdi2g8MbcOufr+FQafZ+u77Z7NRCsifkJX/mTgPavmADVl3z3rfq1+YyrgR8ITjixQutH408MOecrb653euX3oqNpOMZkq+/fn5gWA5qF1Q1NmISllq0rYXlFG+8i0estwUtsUgJepQDIRtO0Zm8hZlX7RCgp5IPyIOAnKi8kWBxPnMggwYC4eXpD16KlIWzZovMZy5MBPLVyA7YnAPTIuOsTDsvgs/7kgDZ1x4/76kFBVyjaXl2G/2XBOfN39CkTjMZuuPbqK3UrH2/tBhfZ/FVLHbHMIDf497TqR0mwl/GFxpa4hL8q8h7qJELD6Zv2Y+qt1NJk3eDcj4Tthkw4aprIxINpRNFbXWGcGEx9C4qwnbSpxdCrVbkbgHvIg7RUtYg6cktwr7W6cf1482fzfpWjXnTQSVX9N2NI2NI2IEDAAfP3jliso3OQf/BwkyXwUEfP85s9WX76FOuefvKnI3F+lAyQ5AGFfHsX0AMxgC49a312hBSZ9hCdYLBClKoFB3V2v05SW4+2s6ZrLFfyPqRx5btD6r2VemJ3P810isMHK45kVGR5Eo1mCSWtxZO6y8M+S8SvawJEXpEEg/FEzJdFhUVxXo5gZNmnWATxNlq2yVhoq9WRrqLOIiakT0e59fha1rMEFloAjQ4p2VAQ+rn5IlHCNw9PUBx74Y2zv7h7/XK8X5wH2i22FVTPXP5c/OpYOEZr5gyQWt1qDt/AJ6zpDZauDg6CRgmKKwYZvy4DoKEzdHAclHqMzS1qV3Z1ccoaFHpJc0AMp/OvBO0p03q3/QlCi8+B237tHlRFJcHbTlVUSyntrkw90fxsToS3osEAQBmHHcRHkwJ4/JHCtLDyJXhJz462/zfN75DKXKOygSLACX+GyZCyXRY1ekuEUZyW8S5YkzLLF9Aozta3Zf2sz+G0oNdNBxf4QFo2aDXeHIMOnQnabgiZTnUENW9OoWUE9OgFQywPPQK+Khpqwo9W8g1rANvqPAeyoMZrJ0c5SNjwW7cD7hUDDgiBdm5lYhd3DdG7lIXlrH/WL7fep2leO1xMVcM9tA69K5VseXkfFlkII5ED9X5l4NnIySPVxnfbvXVjK7KdYXZLNM+1caAc/MA38liOlWCowZ7JH/N9FkRqeJVoQGismpoB6TwD0XKM75RguXYq1gMkxMeHrFf+jAgqndtYeBAI4hQGZ45i1dY4MMT97iDSwQdUizN23JcfhAScAROr/YJMgV0lqoLZyqkKCtXYXXKm5FoREMGWW/lirDhnzmjhLnRvKKT55H5G2EJUxASrZShCKLFFS8J2CHv+WydG1tLxKlmUUQaBrIUtaRk/en9zzZN9CTtYTNJkVstu4Enkm2ma5u+i+6kzcIjtClLgnudrlHdzG85oCN2l2kQPrUVVDEoH5pToiZBWpoPV05pAGcHvjPMAMA2POuPgHz2tob4e+7qukZkxG6oNT94jHrj6BIV7QHXZhIymXjDYm//9ERctxNWmKohfJ9q6HMxydE9hDqfAu3z4PbH4BvxQiuKh3prHBwtKH3pw2UgOh3senS6WHFObDVprpOqsIGe7lII2iruORn+pzlsQislubbd0NdNRUEEVQyyxrHkIHuZoObFyu0kjRV/rnX4IhV1BvqcFl1/9pKgegTUn+qN0mgt5X3eZnwdSYqK4PzSU1Jlr534omONOc2RxM1rbBpV42vZUrf54JNcEaooAix6+qQx6GOjKgT8jhjRXrb8mD+EtSsKemM8GST1u8Mjp9fIgmDfKjlgN63tjTlbUbXRN9Tea79+gQzXWj696l93zwOw1Lgl93gdUZdvztRHonaKbYR3O8ULm/xmBuzjKDucxX2J1ffMH0iE2VTkVOP299Maz5yRGTk9grXBGU4OoxaYZ//9yTcVLn5Lu/c3dRT6rVP1QrehJISnm4ixtmY4KZVG+RU5rBetDhchLh6VTlTUjAqvoan5rS+8TNWifllkanWOZA+AVPCO+hxDJK373jcTsMRqi1FjrnpY6qWc6k4L6SqAwj/Ks3jQ/SC+Nv5UW/GmLPvLR8cQ2ogDGMCW3T7Q/Vz4UTmU1cN5tePKv2cwRNp4Rk7F3UiZ/ivrCmImLF1OlkZTsjXCzrdH6Jx7UtoVb4MxGWIW/wJaLTi9r49bbA5gzbo9ZRefgA8+KHJ9nip4Ic1bZ1cXdF6KnpMIrJUYK1PTIjN5skpF+zeBsJnNPICcGU/k9FQA4ODbuRajP+aKmSTclXRdzjbCRGmLgyuERIl5ZaygeySuGd+VJU2NQUeequBfB2wbm+o+SrB/opmwH7I9fNBH2h3vMV7/5BZj0pFkGlK+vdIPU+lLVS/ssGpkilAYAuRBhZal4YQpNVOHwqBXNwmL86hzucMM8AWTXH3i5LkV15houH8R6WY/hx7P8qLgesN4P5LBM2FdsWFRLROAQCrbAkYFWZdWY1nYnmD6PSoTbaL5a7T6xf80j2Xl77ib3QOW3Dnpw2bdc2g4ZA5dPQ0K0JlcAACbOrIGx54rYLNAa5MY3RmkrhbcdFsQp/tB6OZfxXEm7+FfdX6zXYqSDklA19+/I2Lxhxr2e/Wg7gBxkZ8Shd/Xtyvp9gB1VZjh+sF3XT4X3zdv3jso9LN1bbmf967xgV05aGG1dQ2cIkTpgT8SonPX5xDBqsTgkgZ9BTIMlEVM6m25FaBUZSOL9UDnGKi43KHtGIwktDtb/SOaDAGa1TLYcOUucfF21z7RWLX3X12NoNoFNnY3NsbvdkC/3OtsTtI7/mWTghE2+WZabCIR3Sho48oV9RubYmdePi5U2BaemeyRpz0zK6jRXPswf4/3Up1Is/lKqyhnteRfOB6E2P4riXExtR8nZ8xZmaRv2EK+9wMs6zAVGukFZZLI5tboNXJ5NSgIvs3G6QpgiQSpAnFGUlGXyOHFrVoNfvZbNF8KelWRlLh8bj00D/z9cyCvRArhBo0W6MBmTU2ejXxdsiGRvvxkd4n9AVnFqHky9ZDe5J1KJtGUXlIn07KOXT8NNwt94c/VpR4jkrU+fPEeKVBPUD13UTDJ4y1PD71K+sZM527DLl+LnMljhWHp5qpeuN8vUWrek2XJPTreP7MgGY3Ru00ZXoTrLjEr4nJx7FJUhCMU2RRjz7aZN+P3la3Bo5UW4muQopmkuKZnDld2o2diXwmkfRPrtQP4N4n87Pr9D/EgyUBNgotuMMiLp2grxYASi1b1g9vuzL/95wSXmdWsXYs7du6373PWx9vZXmtduTipenKaTi8DqrLXNw+jCKIUzPj6lf/4/FoMvVJGxOH1JOCSyFDb7xgkoZggoRRavsniep8LxLMoALhCeAd1Q7Yjg+vPgyBXQc/sT5pyJjomZxA2qHLRgFWWkLidTEtOTVdzZKYzcLLbHmEh3BnaPhx9abQS6q9+niL759R7WNpXg8vnSVzzlQZQgKd5S+RRDy6W1inGvjzWazsaQdFoBgx75XZCyUC2MortcGAV7aKphqMmunI7B08ElCb2vMyLtLP1tcftjBmfMyZT0uhCXF9EWNkq6OKJjnOGv41VKQWkTPukttUxvwgKzBTUvWmu+m4goGeYr4pcq4Zg2dC/fY5UpQda3vldpmKYDVni+OLxDBiC4I2l91/H9KGYlYgR12UeXYDiYgRR+Kjpyk5X7qkizoLY1hVVIavsmzNzW1yTmAjQRcY1RkwS3+nEYbdGgW3LhWYZ/TNq/5ygyyKdNjz4yGuXaRb3UqQFgIfd8zfJ6YZb/rYF5BZGLEmqB+FDFwIBSSUqnYiu9B1UZR7uoWzH6pNlxd7enGjp1eH2INkSUVYlx3NkIV3RYx/OkJHB8OZH8KkeRwhJqx05IyuQHYvHKQdGNXCe+BUE3GpsQbiZVcUbaLyK9j187F1KHKHSbT541vYz1yBGgbGOUefzFdqvlJQ+aQryE8HlkTIbg14MBSbSmwZSQS7N4T+xpUpFPnRCueOm+pfldrQxGVmf8ovmqjnm0dhhJddwntoI4UyOpFvdSoxpVjPyr9M51tlSUB+b1UWTzvXw6MOjFZikE+wPk88kdr7sXTN7tAVWC9j844JFVjN7sV07FVXEZss5Ya/FIWEWAtDZTr5s6R30v2hVu+sn0Y39n5VsbJiIEL4aSnet/rEjZVRSHNzoWpkiT/OX0NX/hEczF85FUmMo31mixCPQSs4Ag3CHdoFXPjCPEYxZaIzhnC53qtYmB1tLsXDncE4vGXjhwCd801yikgx51bBTPgwrVuMH4s00lyz/FTCm7u9qYO7WE3ZXy8cf3VETffXiHFlKipPESGzsroAW1p0hDKGlZ7x6K6UAFLui3+0gYE7Xcnh72JOmWl+BX51y3ebL09J4FKazPTSagICERW5UkPDZEGv0EFREIr/+bXXmwVjrwXWQ6E2/unp/r3Rr+y4D6apmNBKJ/OIL7YiwmR1uVliPX50rewPviUvenUXvodmPaYrVC/TWACK2aFbAtPo8m3kQsW7bs9eNMKnOkvRwYVs5UkIHR43+2AhoLjPdUwgvggeIu0fDM2roYnxl9AEg1vcrWaB4A/eENslBrOKX0futidM5NCU8ObBH05tlvlKCOpwCxsAgga8tsJI2dnUENRuBceTnwHbOWRk0VxBcvFJln4fMJAcpRraEGh1mFPsASca+Hy8W9cxk6Pq38sEi+nP06r++NxvO6hrquUhbU76ZQ2yRudp/J8Dw7GDoSYyQ1V2ljJkx7U9OR+a60GHj5c+fdq3QrWa8HbG3JxKRumkr93+KLr+YIBKj9mUeECPoq7CpMi8QFNRgt52yba3vy53THkgQ++jHn6MuAs119Na9gqf3EaRBiuoyCsEmU1goDLERmVDR+/FyvS01/LpyUlm6pgLX3pNO9CZrbdgO0B75KGGJ4aHhMZSos5NnnGZ4IoeezozIs+RcT0tIHQNygqNFs+A9caa0UoWlcDaU7r4uFRz4R7a7B282ILcY4szRx1vutbJhubMXcCpjFarB7Tj2N16ZsdRgUH044z4ti5CFLgUJbYhF1qF7AvQdqYaWIjoWxSiASOofMZRf1901I/g+RBgZdUNnmP4vFNqb7pqNWHBzl/an/i7tGq/ByhnvSQtG/YSZQHdE/BZNcxIKiPqfyNtxk+gJAsixmaCg9k+yx4cXXoHBh+gBKFNp/nIYnCAZZEXUlXxizzfzZQE24XyxcgldXBD9WG59Hn0vJageKbYadrD9E15eu+EH2Pqw/wVb6FXzy18r3l0r3zAk7SjBqM3FbfGKhz4bgCMq7TCqwxqrjWBCHlTQ94a1xAHReC9I1DWHHKnCw4mZAa38iy5SBIZg5DI/qSr3WEldc7kQAgtI/LJC5yB0I0TsdOL7zdofLdd+lHs3htPFiZyCISjorJdL+67fdbL1lg6XWta30qzk/5VTdTFJSqQJE+C5uL6TeIgPj9wmaDrom/sGC3q8O+Yshe+bwTRDDw8TXs/ZoUBHKlN9b51jHoSf6PsjQNCKqHfM136uA1XKQHY9vIYCVztivlRU4OFgEUyj/rstyJ6QCrQXKQ+MUqolrmWQV5v/32DZA+mB9ALOt0xYP0ID2vEll2aFYZ/3QODEvvEm0CAbrq4Xjj3GAXxFdebijV+Kh/8dvv7EEeRiHvFV/tHayeVrvIGML1FjdQWPjVmWz+AR+VHFPxbd8oJhcVAYWc2HOD5sMjvFHsWJGa+dxGdk4hL6MWXjXjau4Xb2ASIoSWCWkr6ZAqKTvDjwLBMwfNkkDNRzHOR1m8wHIfh2ZeBPACPrOeZWy81TjwPjXp+Va5CcjLRGbLhQJb8ehSi7GxNwSeNNFWYHB+Oj3Q/g4M71lomcqIUqetvnpaq/KondLP2vCAAAA=="},56600:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/webp;base64,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"}}]);