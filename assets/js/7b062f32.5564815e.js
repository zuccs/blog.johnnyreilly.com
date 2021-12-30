"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[75379],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),g=a,b=h["".concat(l,".").concat(g)]||h[g]||p[g]||o;return n?i.createElement(b,r(r({ref:t},c),{},{components:n})):i.createElement(b,r({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},53733:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return g}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],s={title:"Using the PubSub / Observer pattern to emulate constructor chaining without cluttering up global scope",authors:"johnnyreilly",tags:["inheritance","javascript","c#","observer pattern","pubsub"],hide_table_of_contents:!1},l=void 0,u={permalink:"/2012/03/17/using-pubsub-observer-pattern-to",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-03-17-using-pubsub-observer-pattern-to/index.md",source:"@site/blog/2012-03-17-using-pubsub-observer-pattern-to/index.md",title:"Using the PubSub / Observer pattern to emulate constructor chaining without cluttering up global scope",description:"Yes the title of this post is \\*painfully\\* verbose. Sorry about that. Couple of questions for you: - Have you ever liked the way you can have base classes in C# which can then be inherited and subclassed in a different file / class",date:"2012-03-17T00:00:00.000Z",formattedDate:"March 17, 2012",tags:[{label:"inheritance",permalink:"/tags/inheritance"},{label:"javascript",permalink:"/tags/javascript"},{label:"c#",permalink:"/tags/c"},{label:"observer pattern",permalink:"/tags/observer-pattern"},{label:"pubsub",permalink:"/tags/pubsub"}],readingTime:5.475,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"WCF - moving from Config to Code, a simple WCF service harness (plus implementing your own Authorization)",permalink:"/2012/03/22/wcf-moving-from-config-to-code-simple"},nextItem:{title:"Striving for (JavaScript) Convention",permalink:"/2012/03/12/striving-for-javascript-convention"}},c={authorsImageUrls:[void 0]},p=[{value:"The Problem",id:"the-problem",children:[],level:2}],h={toc:p};function g(e){var t=e.components,s=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Yes the title of this post is ","*",(0,o.kt)("strong",{parentName:"p"},"painfully"),"*"," verbose. Sorry about that. Couple of questions for you: - Have you ever liked the way you can have base classes in C# which can then be inherited and subclassed ",(0,o.kt)("u",null,"in a different file / class")),(0,o.kt)("p",null,"?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Have you ever thought; gosh it'd be nice to do something like that in JavaScript..."),(0,o.kt)("li",{parentName:"ul"},"Have you then looked at JavaScripts prototypical inheritance and thought \"right.... I'm sure it's possible but this going to end up like ",(0,o.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/War_and_Peace"},"War and Peace"),'"'),(0,o.kt)("li",{parentName:"ul"},"Have you then subsequently thought \"and hold on a minute... even if I did implement this using the prototype and split things between different files / modules wouldn't I have to pollute the global scope to achieve that? And wouldn't that mean that my code was exposed to the vagaries of any other scripts on the page? Hmmm...\""),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.thrillingdetective.com/eyes/oxford.html"},"Men! Are you skinny? Do bullies kick sand in your face?")," (Just wanted to see if you were still paying attention...)")),(0,o.kt)("h2",{id:"the-problem"},"The Problem"),(0,o.kt)("p",null,"Well, the above thoughts occurred to me just recently. I had a situation where I was working on an MVC project and needed to build up quite large objects within JavaScript representing various models. The models in question were already implemented on the server side using classes and made extensive use of inheritance because many of the properties were shared between the various models. That is to say we would have models which were implemented through the use of a class inheriting a base class which in turn inherits a further base class. With me? Good. Perhaps I can make it a little clearer with an example. Here are my 3 classes. First BaseReilly.cs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'public class BaseReilly\n{\n    public string LastName { get; set; }\n\n        public BaseReilly()\n        {\n            LastName = "Reilly";\n        }\n    }\n')),(0,o.kt)("p",null,"Next BoyReilly.cs (which inherits from BaseReilly):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'public class BoyReilly : BaseReilly\n{\n    public string Sex { get; set; }\n\n    public BoyReilly()\n        : base()\n    {\n        Sex = "It is a manchild";\n    }\n}\n')),(0,o.kt)("p",null,"And finally JohnReilly.cs (which inherits from BoyReilly which in turn inherits from BaseReilly):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'public class JohnReilly : BoyReilly\n{\n    public string FirstName { get; set; }\n\n    public JohnReilly()\n        : base()\n    {\n        FirstName = "John";\n    }\n}\n')),(0,o.kt)("p",null,'Using the above I can create myself my very own "JohnReilly" like so:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"var johnReilly = new JohnReilly();\n")),(0,o.kt)("p",null,"And it will look like this: ",(0,o.kt)("img",{src:n(61326).Z})),(0,o.kt)("p",null,"I was looking to implement something similar on the client and within JavaScript. I was keen to ensure ",(0,o.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Code_reuse"},"code reuse"),". And my inclination to keep things simple made me wary of making use of the ",(0,o.kt)("a",{parentName:"p",href:"http://bonsaiden.github.com/JavaScript-Garden/#object.prototype"},"prototype"),". It is undoubtedly powerful but I don't think even the mighty ",(0,o.kt)("a",{parentName:"p",href:"http://javascript.crockford.com/prototypal.html"},"Crockford"),' would consider it "simple". Also I had the reservation of exposing my object to the global scope. So what to do? I had an idea.... ## The Big Idea'),(0,o.kt)("p",null,"For a while I've been making use explicit use of the ",(0,o.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Observer_pattern"},"Observer pattern"),' in my JavaScript, better known by most as the publish/subscribe (or "PubSub") pattern. There\'s a million JavaScript libraries that facilitate this and after some experimentation I finally settled on ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/phiggins42/bloody-jquery-plugins/blob/master/pubsub.js"},"higgins")," implementation as it's simple and I saw a ",(0,o.kt)("a",{parentName:"p",href:"http://jsperf.com/pubsubjs-vs-jquery-custom-events/11"},"JSPerf")," which demonstrated it as either the fastest or second fastest in class. Up until now my main use for it had been to facilitate loosely coupled GUI interactions. If I wanted one component on the screen to influence anothers behaviour I simply needed to get the first component to publish out the relevant events and the second to subscribe to these self-same events. One of the handy things about publishing out events this way is that with them you can also include data. This data can be useful when driving the response in the subscribers. However, it occurred to me that it would be equally possible to pass an object when publishing an event. ","*","*",(0,o.kt)("u",null,"And the subscribers could enrich that object with data as they saw fit.")),(0,o.kt)("p",null,"*","*"," Now this struck me as a pretty useful approach. It's not rock solid secure as it's always possible that someone could subscribe to your events and get access to your object as you published out. However, that's pretty unlikely to happen accidentally; certainly far less likely than someone else's global object clashing with your global object. ## What might this look like in practice?"),(0,o.kt)("p",null,"So this is what it ended up looking like when I turned my 3 classes into JavaScript files / modules. First BaseReilly.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"$(function () {\n  $.subscribe('PubSub.Inheritance.Emulation', function (obj) {\n    obj.LastName = 'Reilly';\n  });\n});\n")),(0,o.kt)("p",null,"Next BoyReilly.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"$(function () {\n  $.subscribe('PubSub.Inheritance.Emulation', function (obj) {\n    obj.Sex = 'It is a manchild';\n  });\n});\n")),(0,o.kt)("p",null,"And finally JohnReilly.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"$(function () {\n  $.subscribe('PubSub.Inheritance.Emulation', function (obj) {\n    obj.FirstName = 'John';\n  });\n});\n")),(0,o.kt)("p",null,'If the above scripts have been included in a page I can create myself my very own "JohnReilly" in JavaScript like so:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var oJohnReilly = {}; //Empty object\n\n$.publish(\'PubSub.Inheritance.Emulation\', [oJohnReilly]); //Empty object "published" so it can be enriched by subscribers\n\nconsole.log(JSON.stringify(oJohnReilly)); //Show me this thing you call "JohnReilly"\n')),(0,o.kt)("p",null,"And it will look like this: ",(0,o.kt)("img",{src:n(46989).Z})),(0,o.kt)("p",null,"And it works. Obviously the example I've given above it somewhat naive - in reality my object properties are driven by GUI components rather than hard-coded. But I hope this illustrates the point. This technique allows you to simply share functionality between different JavaScript files and so keep your codebase tight. I certainly wouldn't recommend it for all circumstances but when you're doing something as simple as building up an object to be used to pass data around (as I am) then it works very well indeed. ## A Final Thought on Script Ordering"),(0,o.kt)("p",null,"A final thing that maybe worth mentioning is script ordering. The order in which functions are called is driven by the order in which subscriptions are made. In my example I was registering the scripts in this order:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="/Scripts/PubSubInheritanceDemo/BaseReilly.js"><\/script>\n<script src="/Scripts/PubSubInheritanceDemo/BoyReilly.js"><\/script>\n<script src="/Scripts/PubSubInheritanceDemo/JohnReilly.js"<>/script>\n')),(0,o.kt)("p",null,"So when my event was published out the functions in the above JS files would be called in this order: 1. BaseReilly.js 2. BoyReilly.js 3. JohnReilly.js"),(0,o.kt)("p",null,"If you were so inclined you could use this to emulate inheritance in behaviour. Eg you could set a property in ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseReilly.js")," which was subsequently overridden in ",(0,o.kt)("inlineCode",{parentName:"p"},"JohnReilly.js")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"BoyReilly.js")," if you so desired. I'm not doing that myself but it occurred as a possibility. ## PS"),(0,o.kt)("p",null,"If you're interested in learning more about JavaScript stabs at inheritance you could do far worse than look at Bob Inces in depth StackOverflow ",(0,o.kt)("a",{parentName:"p",href:"http://stackoverflow.com/a/1598077/761388"},"answer"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"")))}g.isMDXComponent=!0},61326:function(e,t){t.Z="data:image/png;base64,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"},46989:function(e,t){t.Z="data:image/png;base64,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"}}]);