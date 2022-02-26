"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[3361],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=o.createContext({}),u=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return o.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),h=u(n),m=r,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||a;return n?o.createElement(d,i(i({ref:e},c),{},{components:n})):o.createElement(d,i({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},45521:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return m}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"Team Foundation Server, Continuous Integration and separate projects for JavaScript unit tests",authors:"johnnyreilly",tags:["Jasmine","Visual Studio","Continuous Integration","Team Foundation Server","Chutzpah"],hide_table_of_contents:!1},l=void 0,u={permalink:"/2014/05/15/team-foundation-server-continuous-integration-and-javascript-unit-tests-in-unit-test-project",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-05-15-team-foundation-server-continuous-integration-and-javascript-unit-tests-in-unit-test-project/index.md",source:"@site/blog/2014-05-15-team-foundation-server-continuous-integration-and-javascript-unit-tests-in-unit-test-project/index.md",title:"Team Foundation Server, Continuous Integration and separate projects for JavaScript unit tests",description:"Do you like to separate out your unit tests from the project you are testing? I imagine so. My own practice when creating a new project in Visual Studio is to create a separate unit test project alongside whose responsibility is to house unit tests for that new project.",date:"2014-05-15T00:00:00.000Z",formattedDate:"May 15, 2014",tags:[{label:"Jasmine",permalink:"/tags/jasmine"},{label:"Visual Studio",permalink:"/tags/visual-studio"},{label:"Continuous Integration",permalink:"/tags/continuous-integration"},{label:"Team Foundation Server",permalink:"/tags/team-foundation-server"},{label:"Chutzpah",permalink:"/tags/chutzpah"}],readingTime:2.645,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Team Foundation Server, Continuous Integration and separate projects for JavaScript unit tests",authors:"johnnyreilly",tags:["Jasmine","Visual Studio","Continuous Integration","Team Foundation Server","Chutzpah"],hide_table_of_contents:!1},prevItem:{title:"Migrating from AngularJS to AngularTS - a walkthrough",permalink:"/2014/06/01/migrating-from-angularjs-to-angularts"},nextItem:{title:"TypeScript, JSDoc and Intellisense",permalink:"/2014/05/05/typescript-jsdoc-and-intellisense"}},c={authorsImageUrls:[void 0]},p=[{value:"Points #1 and #2 in short order",id:"points-1-and-2-in-short-order",level:2}],h={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Do you like to separate out your unit tests from the project you are testing? I imagine so. My own practice when creating a new project in Visual Studio is to create a separate unit test project alongside whose responsibility is to house unit tests for that new project."),(0,a.kt)("p",null,"When I check in code for that project I expect the continuous integration build to kick off and, as part of that, the unit tests to be run. When it comes to running .NET tests then Team Foundation Server (and it's cloud counterpart Visual Studio Online) has your back. When it comes to running JavaScript tests then... not so much."),(0,a.kt)("p",null,"This post will set out:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"How to get JavaScript tests to run on TFS / VSO in a continuous integration scenario."),(0,a.kt)("li",{parentName:"ol"},"How to achieve this ","*",(0,a.kt)("strong",{parentName:"li"},"without"),"*"," having to include your tests as part of web project.")),(0,a.kt)("p",null,'To do this I will lean heavily (that\'s fancy language for "rip off entirely") on an ',(0,a.kt)("a",{parentName:"p",href:"https://blogs.msdn.com/b/visualstudioalm/archive/2012/07/09/javascript-unit-tests-on-team-foundation-service-with-chutzpah.aspx"},"excellent blog post by Mathew Aniyan")," which covers point #1. My contribution is point #2."),(0,a.kt)("h2",{id:"points-1-and-2-in-short-order"},"Points #1 and #2 in short order"),(0,a.kt)("p",null,"First of all, install Chutzpah on TFS / VSO. You can do this by following ",(0,a.kt)("a",{parentName:"p",href:"https://blogs.msdn.com/b/visualstudioalm/archive/2012/07/09/javascript-unit-tests-on-team-foundation-service-with-chutzpah.aspx"},"Steps 1 - 6 from Mathew Aniyan's post"),". Instead of following steps 7 and 8 create a new unit test project in your solution."),(0,a.kt)("aside",null,"This unit test project will effectively be a C# project that hosts no real C# code at all. Instead we're going to use it to house JavaScript tests. If there is another way to have a separate project which TFS / VSO can pick up on and run tests in then please let me know. As far as I'm aware though, this is the only game in town."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Edit 29/05/2014:")," Matthew Manela (creator of Chutzpah) has confirmed that this is the correct approach - thanks chap!"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/johnny_reilly"},"@johnny_reilly")," Nope that is pretty much what you need to do."),(0,a.kt)("p",{parentName:"blockquote"},"\u2014 Matthew Manela (@mmanela) ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/mmanela/statuses/466962743400996864"},"May 15, 2014"))),(0,a.kt)("script",{async:"",src:"//platform.twitter.com/widgets.js",charSet:"utf-8"}),(0,a.kt)("p",null,'To our unit test project add your JavaScript unit tests. These should be marked in Visual Studio with a Build Action of "Content" and a Copy to Output Directory of "Do not copy". You should be able to run these tests locally using the Visual Studio Chutzpah extension - or indeed in some other JavaScript test runner. Then, and this is the important part, edit the csproj file of your unit test project and add this ',(0,a.kt)("inlineCode",{parentName:"p"},"Import Project")," statement:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<Import Project=\"$(VSToolsPath)\\WebApplications\\Microsoft.WebApplication.targets\" Condition=\"'$(VSToolsPath)' != ''\" />\n")),(0,a.kt)("p",null,"Ordering is important in this case. It matters that this new statement sits after the other ",(0,a.kt)("inlineCode",{parentName:"p"},"Import Project")," statements. So you should end up with a csproj file that looks in part like this: (comments added by me for clarity)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- Pre-existing Import Project statements start --\x3e\n  <Import Project="$(VSToolsPath)\\TeamTest\\Microsoft.TestTools.targets" Condition="Exists(\'$(VSToolsPath)\\TeamTest\\Microsoft.TestTools.targets\')" />\n  <Import Project="$(MSBuildToolsPath)\\Microsoft.CSharp.targets" />\n  \x3c!-- Pre-existing Import Project statements end --\x3e\n\n  \x3c!-- New addition start --\x3e\n  <Import Project="$(VSToolsPath)\\WebApplications\\Microsoft.WebApplication.targets" Condition="\'$(VSToolsPath)\' != \'\'" />\n  \x3c!-- New addition end --\x3e\n')),(0,a.kt)("p",null,"Check in your amended csproj and the unit tests to TFS / VSO. You should see the JavaScript unit tests being run as part of the build."))}m.isMDXComponent=!0}}]);