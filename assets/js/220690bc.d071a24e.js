"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[24286],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=h(n),p=o,g=c["".concat(l,".").concat(p)]||c[p]||u[p]||r;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var h=2;h<r;h++)i[h]=n[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},32686:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return h},assets:function(){return d},toc:function(){return u},default:function(){return p}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={title:"Making a Programmer",authors:"johnnyreilly",tags:["coding bootcamp","retrospective","learning","feedback"],hide_table_of_contents:!1},l=void 0,h={permalink:"/2018/10/27/making-a-programmer",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-10-27-making-a-programmer/index.md",source:"@site/blog/2018-10-27-making-a-programmer/index.md",title:"Making a Programmer",description:"I recently had the good fortune to help run a coding bootcamp. The idea was simple: there are many people around us who are interested in programming but don't know where to start. Let's take some folk who do and share the knowledge.",date:"2018-10-27T00:00:00.000Z",formattedDate:"October 27, 2018",tags:[{label:"coding bootcamp",permalink:"/tags/coding-bootcamp"},{label:"retrospective",permalink:"/tags/retrospective"},{label:"learning",permalink:"/tags/learning"},{label:"feedback",permalink:"/tags/feedback"}],readingTime:6.015,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Making a Programmer",authors:"johnnyreilly",tags:["coding bootcamp","retrospective","learning","feedback"],hide_table_of_contents:!1},prevItem:{title:"Snapshot Testing for C#",permalink:"/2018/11/17/snapshot-testing-for-c"},nextItem:{title:"Brand New Fonting Awesomeness",permalink:"/2018/10/07/font-awesome-brand-icons-react"}},d={authorsImageUrls:[void 0]},u=[{value:"Code Review",id:"code-review",level:2},{value:"Merging to Master",id:"merging-to-master",level:2},{value:"RTM",id:"rtm",level:2}],c={toc:u};function p(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I recently had the good fortune to help run a coding bootcamp. The idea was simple: there are many people around us who are interested in programming but don't know where to start. Let's take some folk who do and share the knowledge."),(0,r.kt)("p",null,"The bootcamp went tremendously! (Well, I say that... Frankly I had a blast. \ud83d\ude00 )"),(0,r.kt)("p",null,"Coding padawans walked in at the start with laptops and questions, and six weeks later they left with the groundwork of development experience. We ran a session for an hour during lunchtime once a week. Between that, people would have the opportunity to learn online, do exercises and reach out to the facilitators and their fellow apprentices for help."),(0,r.kt)("p",null,"We'd never done this before. We were student teachers; learning how to teach as we ran the course. So what did we do? Are you curious? Read on, Macduff!"),(0,r.kt)("h2",{id:"code-review"},"Code Review"),(0,r.kt)("p",null,"It's worth saying now that we started our course with a plan: the plan was that we would be ready to change the plan. Or to put it another way, we were ready to pivot as we went."),(0,r.kt)("p",null,'We (by which I mean myself and the other course organisers) are interested in feedback. Sitting back and saying "Hey! We did this thing.... What do you think about it?" Because sometimes your plans are great. Do more of that hotness! But also, not all your ideas pan out... Maybe bail on those guys. Finally, never forget: other folk have brain tickling notions too.... We\'re with Picasso on this: good artists copy; great artists steal.'),(0,r.kt)("p",null,"We're heavily invested in feedback in both what we build and how we build it. So we were totally going to apply this to doing something we'd never done before. So seized were we of this that we made feedback part of the session. For the last five minutes each week we'd run a short retrospective. We'd stick up happy, sad and \"meh\" emojis to the wall, hand out post-its and everyone got to stick up their thoughts."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(15687).Z,width:"400",height:"341"})),(0,r.kt)("p",null,"From that we learned what was working, what wasn't and when we were very lucky there were suggestions too. We listened to all the feedback and the next week's session would be informed by what we'd just learned."),(0,r.kt)("h2",{id:"merging-to-master"},"Merging to Master"),(0,r.kt)("p",null,"So, what did we end up with? What did our coding bootcamp look like?"),(0,r.kt)("p",null,"Well, to start each session we kicked off with an icebreaker. We very much wanted the sessions to be interactive experiences; we wanted them to feel playful and human. So an icebreaker was a good way to get things off on the right foot."),(0,r.kt)("p",null,'The IBs were connected with the subject at hand. For example: Human FizzBuzz. We took the classic interview question and applied it to wannabe coders. We explained the rules, and went round in a circle, each person was the next iteration of the loop. As each dev-in-training opened their mouths they had to say a number or "Fizz" or "Buzz" or "FizzBuzz". (It turns out this is harder than you think; and makes for a surprisingly entertaining parlour game. I intend to do this at my next dinner party.)'),(0,r.kt)("p",null,"After that we covered the rules of the game. (Yup, learning is a game and it's a good 'un.) Certainly the most important rule was this: ",(0,r.kt)("u",null,"there are ",(0,r.kt)("strong",null,(0,r.kt)("em",{parentName:"p"},"no"))," stupid questions")),(0,r.kt)("p",null,". If people think there are, then they might be hesitant to ask. And any question benched is a learning opportunity lost. We don't want that."),(0,r.kt)("p",null,'"Ask any question!" we said each week. Kudos to the people who have the courage to pipe up. We salute you! You\'re likely putting voice to a common area of misunderstanding.'),(0,r.kt)("p",null,"Then we'd move onto the main content. The initial plan was to make use of the excellent ",(0,r.kt)("a",{parentName:"p",href:"https://www.edx.org/learn/python"},"EdX Python course")," Between each session our learners would do a module and then we'd come together and talk around that topic somewhat. Whilst this was a good initial plan it did make the learning experience somewhat passive and less interactive than we'd hoped."),(0,r.kt)("p",null,"One week we tried something different. It turns out that the amazing ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/foldr"},"JMac")," has quite the skill for writing programming exercises. Small coding challenges that people can tackle independently. JMac put together a ",(0,r.kt)("a",{parentName:"p",href:"https://repl.it/"},"repl.it")," of exercises and encouraged the class to get stuck in. They did. So much so that at the end of the session it was hard to get everyone's attention to let them know the session was over. They were in the zone. When we did finally disrupt their flow, the feedback was pretty unanimous: we'd hit paydirt."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(5088).Z,width:"400",height:"357"})),(0,r.kt)("p",null,"Consequently, that was the format going onwards. JMac would come up with a number of exercises for the class. Wisely they were constructed so that they gently levelled up in terms of complexity as you went on. You'd get the dopamine hit of satisfaction as you did the earliest challenges that would give you the confidence to tackle the more complex later problems. If peeps got stuck they could ask someone to advise them, a facilitator or a peer. Or they could google it.... Like any other dev."),(0,r.kt)("p",null,"Having the chance to talk with others when you're stuck is fantastic. You can talk through a problem. The act of doing that is a useful exercise. When you talk through a problem out loud you can unlock your understanding and often get to the point where you can tackle this yourself. This is ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Rubber_duck_debugging"},"rubber duck debugging"),". Any dev does this in their everyday; it makes complete sense to have it as part of a coding bootcamp."),(0,r.kt)("p",null,'We learned that it was useful, very useful, to have repitition in the exercises. Repitition. Repitition. Repitition. As the exercises started each week they would typically begin by recapping and repeating the content covered the previous week. The best way to learn is to practice. It\'s not for nothing the Karate Kid had to "wax on, wax off".'),(0,r.kt)("p",null,"Finally, we did this together. The course wasn't run by one person; we had a gang! We had three facilitators who helped to run the sessions; JMac, Jonesy and myself. We also had the amazing ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/janicewarden"},"Janice")," who handled the general organisation and logistics. And made us laugh. A lot. This was obviously great from a camaraderie and sharing the load perspective. It turns out that having that number of facilitators in the session meant that everyone who needed help could get it. It's worth noting that having more than a single facilitator is useful in terms of the dynamic it creates. You can bounce things off one another; you can use each other for examples and illustrations. You can crack each other up. Done well it reduces the instructor / learner divide and that breaking down of barriers is something worth seeking."),(0,r.kt)("h2",{id:"rtm"},"RTM"),(0,r.kt)("p",null,"We've run a bootcamp once now. Where we are is informed by the experience we've just had. A different group of learners may well have resulted in a slightly different format; though I have a feeling not overly dissimilar. We feel pretty sure that what we've got is pretty solid. That said, just as the attendees are learning about development, we're still learning about learning!"))}p.isMDXComponent=!0},15687:function(e,t,n){t.Z=n.p+"assets/images/not-so-sure-about-this-feedback-f6ba02ef0a7dd752047c23db10ca8c67.jpg"},5088:function(e,t,n){t.Z=n.p+"assets/images/we-dug-this-feedback-5f06862c518eb943db05c3883924c839.jpg"}}]);