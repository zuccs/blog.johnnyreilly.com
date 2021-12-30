"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[40072],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},A=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),A=c(n),h=i,g=A["".concat(l,".").concat(h)]||A[h]||p[h]||a;return n?o.createElement(g,r(r({ref:t},u),{},{components:n})):o.createElement(g,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=A;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}A.displayName="MDXCreateElement"},53713:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return h}});var o=n(87462),i=n(63366),a=(n(67294),n(3905)),r=["components"],s={title:"JSHint - Customising your hurt feelings",authors:"johnnyreilly",tags:["JSLint for Visual Studio","Coverity","Anton Kovalyov","javascript","paul irish","static code analysis","JSLint","JSHint","douglas crockford"],hide_table_of_contents:!1},l=void 0,c={permalink:"/2012/04/23/jshint-customising-your-hurt-feelings",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-04-23-jshint-customising-your-hurt-feelings/index.md",source:"@site/blog/2012-04-23-jshint-customising-your-hurt-feelings/index.md",title:"JSHint - Customising your hurt feelings",description:"As I've started making greater use of JavaScript to give a richer GUI experience the amount of JS in my ASP.NET apps has unsurprisingly ballooned. If I'm honest, I hadn't given much consideration to the code quality of my JavaScript in the past. However, if I was going to make increasing use of it (and given the way the web is going at the moment I'd say that's a given) I didn't think this was tenable position to maintain. A friend of mine works for Coverity which is a company that provides tools for analysing code quality. I understand, from conversations with him, that their tools provide static analysis for compiled languages such as C++ / C# / Java etc. I was looking for something similar for JavaScript. Like many, I have read and loved Douglas Crockford's \"JavaScript",date:"2012-04-23T00:00:00.000Z",formattedDate:"April 23, 2012",tags:[{label:"JSLint for Visual Studio",permalink:"/tags/js-lint-for-visual-studio"},{label:"Coverity",permalink:"/tags/coverity"},{label:"Anton Kovalyov",permalink:"/tags/anton-kovalyov"},{label:"javascript",permalink:"/tags/javascript"},{label:"paul irish",permalink:"/tags/paul-irish"},{label:"static code analysis",permalink:"/tags/static-code-analysis"},{label:"JSLint",permalink:"/tags/js-lint"},{label:"JSHint",permalink:"/tags/js-hint"},{label:"douglas crockford",permalink:"/tags/douglas-crockford"}],readingTime:4.5,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Beg, Steal or Borrow a Decent JavaScript DateTime Converter",permalink:"/2012/04/28/beg-steal-or-borrow-decent-javascript"},nextItem:{title:"A Simple Technique for Initialising Properties with Internal Setters for Unit Testing",permalink:"/2012/04/16/simple-technique-for-initialising"}},u={authorsImageUrls:[void 0]},p=[],A={toc:p};function h(e){var t=e.components,s=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},A,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As I've started making greater use of JavaScript to give a richer GUI experience the amount of JS in my ASP.NET apps has unsurprisingly ballooned. If I'm honest, I hadn't given much consideration to the code quality of my JavaScript in the past. However, if I was going to make increasing use of it (and given the way the web is going at the moment I'd say that's a given) I didn't think this was tenable position to maintain. A friend of mine works for ",(0,a.kt)("a",{parentName:"p",href:"http://www.coverity.com/"},"Coverity")," which is a company that provides tools for analysing code quality. I understand, from conversations with him, that their tools provide static analysis for compiled languages such as C++ / C# / Java etc. I was looking for something similar for JavaScript. Like many, I have read and loved ",(0,a.kt)("a",{parentName:"p",href:"http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742"},'Douglas Crockford\'s "JavaScript: The Good Parts"'),"; it is by some margin the most useful and interesting software related book I have read.So I was aware that Crockford had come up with his own JavaScript code quality tool called ",(0,a.kt)("a",{parentName:"p",href:"http://www.jslint.com/"},"JSLint"),". JSLint is quite striking when you first encounter it: ",(0,a.kt)("img",{src:n(10906).Z})),(0,a.kt)("p",null,"It's the \"Warning! JSLint will hurt your feelings.\" that grabs you. And it's not wrong. I've copied and pasted code that I've written into JSLint and then gasped at the reams of errors JSLint would produce. I subsequently tried JSLint-ing various well known JS libraries (jQuery etc) and saw that JSLint considered they were thoroughly problematic as well. This made me feel slightly better. It was when I started examining some of the \"errors\" JSLint reported that I took exception. Yes, I took exception to exceptions! (I'm ","*",(0,a.kt)("strong",{parentName:"p"},"very"),"*"," pleased with that!) Here's a few of the errors generated by JSLint when inspecting ",(0,a.kt)("a",{parentName:"p",href:"http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.js"},"jquery-1.7.2.js"),": - ",(0,a.kt)("inlineCode",{parentName:"p"},"Problem at line 16 character 10: Expected exactly one space between 'function' and '('.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Problem at line 25 character 1: Expected 'var' at column 13, not column 1.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Problem at line 31 character 5: Unexpected dangling '_' in '_jQuery'."))),(0,a.kt)("p",null,"JSLint is, much like it's creator, quite opinionated. Which is no bad thing. Many of Crockfords opinions are clearly worth their salt. It's just I didn't want all of them enforced upon me. As you can see above most of these \"problems\" are essentially complaints about a different style rather than bugs or potential issues. Now there are options in JSLint that you can turn on and off which looked quite promising. But before I got to investigating them I heard about ",(0,a.kt)("a",{parentName:"p",href:"http://www.jshint.com"},"JSHint"),", brainchild of Anton Kovalyov and Paul Irish. In their own words: ",(0,a.kt)("em",{parentName:"p"},"JSHint is a fork of JSLint, the tool written and maintained by Douglas Crockford. The project originally started as an effort to make a more configurable version of JSLint\u2014one that doesn't enforce one particular coding style on its users\u2014but then transformed into a separate static analysis tool with its own goals and ideals.")," This sounded right up my alley! So I thought I'd repeat my jQuery test. Here's a sample of what JSHint threw back at me, with its default settings in place: - ",(0,a.kt)("inlineCode",{parentName:"p"},"Line 230: return num == null ? Expected '===' and instead saw '=='. ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Line 352: if ( (options = arguments[ i ]) != null ) { Expected '!==' and instead saw '!='. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Line 354: for ( name in options ) { The body of a for in should be wrapped in an if statement to filter unwanted properties from the prototype. "))),(0,a.kt)("p",null,'These were much more the sort of "issues" I was interested in. Plus it seemed there was plenty of scope to tweak my options. Excellent. This was good. The icing on my cake would have been a plug-in for Visual Studio which would allow me to evaluate my JS files from within my IDE. Happily the world seems to be full of developers doing good turns for one another. I discovered an extension for VS called ',(0,a.kt)("a",{parentName:"p",href:"http://jslint4vs2010.codeplex.com/"},"JSLint for Visual Studio 2010"),": ",(0,a.kt)("img",{src:n(3982).Z})),(0,a.kt)("p",null,"This was an extension that provided either JSLint ","*",(0,a.kt)("strong",{parentName:"p"},"or"),"*"," JSHint evaluation as you preferred from within Visual Studio. Fantastic! With this extension in play you could add JavaScript static code analysis to your compilation process and so learn of all the issues in your code at the same time, whether they lay in C# or JS or ","[insert language here]",'. You could control how JS problems were reported; as warnings, errors etc. You could straightforwardly exclude files from evaluation (essential if you\'re reliant on a number of 3rd party JS libraries which you are not responsible for maintaining). You could cater for predefined variables; allow for jQuery or DOJO. You could simply evaluate a single file in your solution by right clicking it and hitting the "JS Lint" option in the context menu. And it was simplicity itself to activate and deactivate the JSHint / JSLint extension as required. For a more exhaustive round up of the options available I advise taking a look here: ',(0,a.kt)("a",{parentName:"p",href:"http://jslint4vs2010.codeplex.com/"},"http://jslint4vs2010.codeplex.com"),". I would heartily recommend using JSHint if you're looking to improve your JS code quality. I'm grateful to Crockford for making JSHint possible by first writing JSLint. For my part though I think JSHint is the more pragmatic and useful tool and likely to be the one I stick with. For interest (and frankly sheer entertainment value at the crotchetiness of Crockford) it's definitely worth having a read up on how JSHint came to pass: - ",(0,a.kt)("a",{parentName:"p",href:"http://anton.kovalyov.net/2011/02/20/why-i-forked-jslint-to-jshint/"},"http://anton.kovalyov.net/2011/02/20/why-i-forked-jslint-to-jshint/")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://badassjs.com/post/3364925033/jshint-an-community-driven-fork-of-jslint"},"http://badassjs.com/post/3364925033/jshint-an-community-driven-fork-of-jslint"))))}h.isMDXComponent=!0},3982:function(e,t){t.Z="data:image/png;base64,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"},10906:function(e,t){t.Z="data:image/png;base64,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"}}]);