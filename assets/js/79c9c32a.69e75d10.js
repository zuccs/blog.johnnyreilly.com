"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[29587],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),h=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=h(n),c=r,w=d["".concat(l,".").concat(c)]||d[c]||p[c]||a;return n?o.createElement(w,i(i({ref:t},u),{},{components:n})):o.createElement(w,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var h=2;h<a;h++)i[h]=n[h];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68579:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return h},assets:function(){return u},toc:function(){return p},default:function(){return c}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"Why your team needs a newsfeed",authors:"johnnyreilly",tags:["newsfeed"],hide_table_of_contents:!1},l=void 0,h={permalink:"/2020/09/04/why-your-team-needs-newsfeed",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-09-04-why-your-team-needs-newsfeed/index.md",source:"@site/blog/2020-09-04-why-your-team-needs-newsfeed/index.md",title:"Why your team needs a newsfeed",description:"I'm part of a team that builds an online platform. I'm often preoccupied by how to narrow the gap between our users and \"us\" - the people that build the platform. It's important we understand how people use and interact with what we've built. If we don't then we're liable to waste our time and energy building the wrong things. Or the wrong amount of the right things.",date:"2020-09-04T00:00:00.000Z",formattedDate:"September 4, 2020",tags:[{label:"newsfeed",permalink:"/tags/newsfeed"}],readingTime:4.99,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Why your team needs a newsfeed",authors:"johnnyreilly",tags:["newsfeed"],hide_table_of_contents:!1},prevItem:{title:"Autofac 6, integration tests and .NET generic hosting",permalink:"/2020/10/02/autofac-6-integration-tests-and-generic-hosting"},nextItem:{title:"Devcontainers AKA performance in a secure sandbox",permalink:"/2020/08/09/devcontainers-aka-performance-in-secure"}},u={authorsImageUrls:[void 0]},p=[{value:"How do you build a newsfeed?",id:"how-do-you-build-a-newsfeed",level:2},{value:"Implementation",id:"implementation",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],d={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I'm part of a team that builds an online platform. I'm often preoccupied by how to narrow the gap between our users and \"us\" - the people that build the platform. It's important we understand how people use and interact with what we've built. If we don't then we're liable to waste our time and energy building the wrong things. Or the wrong amount of the right things."),(0,a.kt)("p",null,"On a recent holiday I spent a certain amount of time pondering how to narrow the gap between our user and us. We have lots of things that help us; we use various analytics tools like ",(0,a.kt)("a",{parentName:"p",href:"https://mixpanel.com/"},"mixpanel"),", we've got a mini analytics platform of our own, we have teams notifications that pop up client feedback and so on. They are all great, but they're somewhat disparate; they don't give us a clear insight as to who uses our platform and how they do so. The information is there, but it's tough to grok. It doesn't make for a joined up story."),(0,a.kt)("p",null,"Reaching around for how to solve this I had an idea: what if our platform had a newsfeed? The kind of thing that social media platforms the likes of Twitter and Facebook have used to great effect; a stream of mini-activities which show how the community interacts with the product. People logging in and browsing around, using features on the platform. If we could see this in near real time we'd be brought closer to our users; we'd have something that would help us have real empathy and understanding. We'd see our product as the stories of users interacting with it."),(0,a.kt)("h2",{id:"how-do-you-build-a-newsfeed"},"How do you build a newsfeed?"),(0,a.kt)("p",null,'This was an experiment that seemed worth pursuing. So I decided to build a proof of concept and see what happened. Now I intended to put the "M" into MVP with this; I went in with a number of intentional constraints:'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The news feed wouldn't auto update (users have the F5 key for that)"),(0,a.kt)("li",{parentName:"ol"},"We'd host the newsfeed in our own mini analytics platform (which is already used by the team to understand how people use the platform)"),(0,a.kt)("li",{parentName:"ol"},'News stories wouldn\'t be stored anywhere; we\'d generate them on the fly by querying various databases / APIs. The cost of this would be that our news stories wouldn\'t be "persistent"; you wouldn\'t be able to address them with a URL; there\'d be no way to build "like" or "share" functionality.')),(0,a.kt)("p",null,"All of the above constraints are, importantly, reversable decisions. If we want auto update it could be built later. If we want the newsfeed to live somewhere else we could move it. If we wanted news stories to be persisted then we could do that."),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"With these constraints in mind, I turned my attention to the implementation. I built a ",(0,a.kt)("inlineCode",{parentName:"p"},"NewsFeedService")," that would be queried for news stories. The interface I decided to build looked like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NewsFeedService.getNewsFeed(from: Date, to: Date): NewsFeed\n\ntype NewsFeed {\n    startedAt: Date;\n    ended at: Date;\n    stories: NewsStory[];\n}\n\ntype NewsStory {\n    /** When the story happened */\n    happenedAt: Date;\n    /** A code that represents the type of story this is; eg USER_SESSION */\n    storyCode: string\n    /** The story details in markdown format */\n    story: string;\n}\n")),(0,a.kt)("p",null,"Each query to ",(0,a.kt)("inlineCode",{parentName:"p"},"NewsFeedService.getNewsFeed")," would query various databases / APIs related to our product, looking for interesting events. Whether it be users logging in, users performing some kind of action, whatever. For each interested event a news story like this would be produced:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Jane Smith logged in at 10:03am for 25 minutes. They placed ",(0,a.kt)("a",{parentName:"p",href:"https://my-glorious-platform.io/orders/janes-order"},"an order")," worth \xa33,000.")),(0,a.kt)("p",null,"Now the killer feature here is ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Markdown#:~:text=Markdown%20is%20a%20lightweight%20markup,using%20a%20plain%20text%20editor."},"Markdown"),". Our stories are written in Markdown. Why is Markdown cool? Well ",(0,a.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20040402182332/http://daringfireball.net/projects/markdown/"},"to quote the creators of Markdown"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML).")),(0,a.kt)("p",null,"This crucially includes the ability to include links. This was significant because I want us to be able to be able to click on pieces of information in the stories and be taken to the relevant place in the platform to see more details. Just as you see status updates on, for example, Twitter which lead you on to more details:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This is the history of ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/DefinitelyTyped?ref_src=twsrc%5Etfw"},"@DefinitelyTyped"),": ",(0,a.kt)("a",{parentName:"p",href:"https://t.co/AY6s3bWnKP"},"https://t.co/AY6s3bWnKP")," Thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/SeaRyanC?ref_src=twsrc%5Etfw"},"@SeaRyanC")," & ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/drosenwasser?ref_src=twsrc%5Etfw"},"@drosenwasser")," of the ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/typescript?ref_src=twsrc%5Etfw"},"@typescript")," team, ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/blakeembrey?ref_src=twsrc%5Etfw"},"@blakeembrey")," inventor of typings, ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/vvakame?ref_src=twsrc%5Etfw"},"@vvakame"),", ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/_stevefenton?ref_src=twsrc%5Etfw"},"@","_","stevefenton"),", ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/basarat?ref_src=twsrc%5Etfw"},"@basarat"),", and of course ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/borisyankov?ref_src=twsrc%5Etfw"},"@borisyankov")," for telling me their parts of the story\u2764\ufe0f\ud83c\udf3b"),(0,a.kt)("p",{parentName:"blockquote"},"\u2014 John Reilly (@johnny_reilly) ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/johnny_reilly/status/1181542739994976256?ref_src=twsrc%5Etfw"},"October 8, 2019"))),(0,a.kt)("script",{async:"",src:"https://platform.twitter.com/widgets.js",charSet:"utf-8"}),(0,a.kt)("p",null,"Again consider this example news story:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Jane Smith logged in at 10:03am for 25 minutes. They placed ",(0,a.kt)("a",{parentName:"p",href:"https://my-glorious-platform.io/orders/janes-order"},"an order")," worth \xa33,000.")),(0,a.kt)("p",null,"Consider that story but without a link. It's not the same is it? A newsfeed without links would be missing a trick. Markdown gives us links. And happily due to my extensive work down the open source mines, I speak it like a native."),(0,a.kt)("p",null,"The first consumer of the newsfeed was to be our own mini analytics platform, which is a React app. Converting the markdown stories to React is a solved problem thanks to the wonderful ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rexxars/react-markdown"},"react-markdown"),". You can simply sling Markdown at it and out comes HTML. Et voil\xe0 a news feed!"),(0,a.kt)("h2",{id:"whats-next"},"What's next?"),(0,a.kt)("p",null,"So that's it! We've built a (primitive) news feed. We can now see in real time how are users are getting on. We're closer to them, we understand them better as a consequence. If we want to take it further there's a number of things we could do:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"We could make the feed auto-update"),(0,a.kt)("li",{parentName:"ol"},"We could push news stories to other destinations. Markdown is a gloriously portable format which can be used in a variety of environments. For instance the likes of Slack and ",(0,a.kt)("a",{parentName:"li",href:"/2019/12/18/teams-notification-webhooks"},"Teams")," accept it and apps like these are generally open on people's desktops and phones all the time anyway. Another way to narrow the gap between us and and our users.")),(0,a.kt)("p",null,"It's very exciting!"))}c.isMDXComponent=!0}}]);