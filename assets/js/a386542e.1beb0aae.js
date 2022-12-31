"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[28771],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>p});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),h=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=h(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=h(t),u=i,p=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(p,r(r({ref:n},c),{},{components:t})):a.createElement(p,r({ref:n},c))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:i,r[1]=l;for(var h=2;h<o;h++)r[h]=t[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},83532:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});t(67294);var a=t(3905);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const r={title:"A navigation animation (for your users delectation)",authors:"johnnyreilly",tags:["navigation animation","css load","UX","CSS animation","Modernizr"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2013/04/26/a-navigation-animation-for-your-users",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2013-04-26-a-navigation-animation-for-your-users/index.md",source:"@site/blog/2013-04-26-a-navigation-animation-for-your-users/index.md",title:"A navigation animation (for your users delectation)",description:"The Vexation",date:"2013-04-26T00:00:00.000Z",formattedDate:"April 26, 2013",tags:[{label:"navigation animation",permalink:"/tags/navigation-animation"},{label:"css load",permalink:"/tags/css-load"},{label:"UX",permalink:"/tags/ux"},{label:"CSS animation",permalink:"/tags/css-animation"},{label:"Modernizr",permalink:"/tags/modernizr"}],readingTime:6.875,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"A navigation animation (for your users delectation)",authors:"johnnyreilly",tags:["navigation animation","css load","UX","CSS animation","Modernizr"],hide_table_of_contents:!1},prevItem:{title:"How I'm Using Cassette part 1:Getting Up and Running",permalink:"/2013/05/04/how-im-using-cassette"},nextItem:{title:"IE 10 Install Torches JavaScript Debugging in Visual Studio 2012 Through Auto Update (Probably)",permalink:"/2013/04/17/ie-10-install-torches-javascript"}},h={authorsImageUrls:[void 0]},c=[{value:"The Vexation",id:"the-vexation",level:2},{value:"The Agreeable Resolution",id:"the-agreeable-resolution",level:2},{value:"How&#39;s that work then guv?",id:"hows-that-work-then-guv",level:2},{value:"Oh, and a final PS",id:"oh-and-a-final-ps",level:2},{value:"Better make that a PPS - catering for IE 9 and earlier",id:"better-make-that-a-pps---catering-for-ie-9-and-earlier",level:2}],m={toc:c};function d(e){var{components:n}=e,t=o(e,["components"]);return(0,a.kt)("wrapper",i({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",i({},{id:"the-vexation"}),"The Vexation"),(0,a.kt)("p",null,"The current application I'm working on lives within an ",(0,a.kt)("inlineCode",{parentName:"p"},"iframe"),". A side effect of that is that my users no longer get the visual feedback that they're used to as they navigate around the site. By \"visual feedback\" what I mean are the little visual tics that are displayed in the browser when you're in the process of navigating from one screen to the next."),(0,a.kt)("p",null,"When an application is nested in an ",(0,a.kt)("inlineCode",{parentName:"p"},"iframe")," it seems that these visual tics aren't propogated up to the top frame of the browser as the user navigates around. Clicking on links results in a short lag whilst nothing appears to be happening and then, BANG!, a new page is rendered. This is not a great user experience. There's nothing to indicate that the link has been clicked on and the browser is doing something. Well, not in Internet Explorer at least - Chrome (my browser of choice) appears to do just that. But that's really by the by, the people using my app will be using the corporate browser, IE; so I need to think about them."),(0,a.kt)("p",null,"Now I'm fully aware that this is more in the region of nice-to-have rather than absolute necessity. That said, my experience is that when users think an application isn't responding fast enough their action point is usually \"click it again, and maybe once more for luck\". To prevent this from happening, I wanted to give the users back some kind of steer when they were in the process of navigation, ",(0,a.kt)("inlineCode",{parentName:"p"},"iframe")," or no ",(0,a.kt)("inlineCode",{parentName:"p"},"iframe"),"."),(0,a.kt)("h2",i({},{id:"the-agreeable-resolution"}),"The Agreeable Resolution"),(0,a.kt)("p",null,"To that end, I've come up with something that I feel does the job, and does it well. I've taken a CSS animation courtesy of the good folk at ",(0,a.kt)("a",i({parentName:"p"},{href:"http://cssload.net/"}),"CSS Load")," and embedded it in the layout of my application. This animation is hidden from view until the user navigates to another page. At that point, the CSS animation appears in the header of the screen and remains in place until the new screen is rendered."),(0,a.kt)("h2",i({},{id:"hows-that-work-then-guv"}),"How's that work then guv?"),(0,a.kt)("p",null,"You're no doubt dazzled by the glory of it all. How was it accomplished? Well, it was actually a great deal easier than you might think. First of all we have the html:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-html"}),'<div class="float-right hidden" id="navigationAnimation">\n  <div id="circleG">\n    <div id="circleG_1" class="circleG"></div>\n    <div id="circleG_2" class="circleG"></div>\n    <div id="circleG_3" class="circleG"></div>\n  </div>\n</div>\n')),(0,a.kt)("p",null,"Apart from the outer ",(0,a.kt)("inlineCode",{parentName:"p"},"div")," tag (#navigationAnimation) all of this is the HTML taken from ",(0,a.kt)("a",i({parentName:"p"},{href:"http://cssload.net/"}),"CSS Load"),". If you wanted to use a different navigation animation you could easily replace the inner HTML with something else instead. Next up is the CSS, again courtesy of CSS Load (and it's this that turns this simple HTML into sumptuous animated goodness):"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-css"}),"#navigationAnimation {\n  margin-top: 7px;\n}\n\n#circleG {\n  width: 46.666666666666664px;\n}\n\n.circleG {\n  background-color: #ffffff;\n  float: left;\n  height: 10px;\n  margin-left: 5px;\n  width: 10px;\n  -moz-border-radius: 7px;\n  -webkit-border-radius: 7px;\n  border-radius: 7px;\n  -moz-animation-name: bounce_circleG;\n  -moz-animation-duration: 0.6000000000000001s;\n  -moz-animation-iteration-count: infinite;\n  -moz-animation-direction: linear;\n  -webkit-animation-name: bounce_circleG;\n  -webkit-animation-duration: 0.6000000000000001s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-direction: linear;\n  -ms-animation-name: bounce_circleG;\n  -ms-animation-duration: 0.6000000000000001s;\n  -ms-animation-iteration-count: infinite;\n  -ms-animation-direction: linear;\n  animation-name: bounce_circleG;\n  animation-duration: 0.6000000000000001s;\n  animation-iteration-count: infinite;\n  animation-direction: linear;\n}\n\n#circleG_1 {\n  -moz-animation-delay: 0.12000000000000002s;\n  -webkit-animation-delay: 0.12000000000000002s;\n  -ms-animation-delay: 0.12000000000000002s;\n  animation-delay: 0.12000000000000002s;\n}\n\n#circleG_2 {\n  -moz-animation-delay: 0.28s;\n  -webkit-animation-delay: 0.28s;\n  -ms-animation-delay: 0.28s;\n  animation-delay: 0.28s;\n}\n\n#circleG_3 {\n  -moz-animation-delay: 0.36s;\n  -webkit-animation-delay: 0.36s;\n  -ms-animation-delay: 0.36s;\n  animation-delay: 0.36s;\n}\n\n@-moz-keyframes bounce_circleG {\n  50% {\n    background-color: #000000;\n  }\n}\n\n@-webkit-keyframes bounce_circleG {\n  50% {\n    background-color: #000000;\n  }\n}\n\n@-ms-keyframes bounce_circleG {\n  50% {\n    background-color: #000000;\n  }\n}\n\n@keyframes bounce_circleG {\n  50% {\n    background-color: #000000;\n  }\n}\n\n/* classes below are not part of CSS animation */\n\n.hidden {\n  display: none;\n}\n\n.float-right {\n  float: right;\n  margin-left: 1em;\n}\n")),(0,a.kt)("p",null,"And finally we have the JavaScript which is responsible for showing animation when the user starts navigating:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js"}),"/*!\n * Initialise the navigation animation\n */\n$(document).ready(function () {\n  var navigationAnimationVisible, navigationFallback, $navigationAnimation;\n\n  // initialises the navigation animation (including fallback for browsers without CSS animations)\n  function initialiseNavigationAnimation() {\n    navigationAnimationVisible = false;\n    $navigationAnimation = $('#navigationAnimation');\n    navigationFallback =\n      '<img src=\"/images/navigationAnimation.gif\" width=\"43\" height=\"11\" />';\n\n    // fallback - initial call to ensure the image is cached before subsequent re-use (present flash to users of unloaded gif)\n    if (!Modernizr.cssanimations) {\n      $navigationAnimation.html(navigationFallback);\n    }\n  }\n\n  // Show or hide the navigation animation\n  function showNavigating(makeVisible) {\n    if (makeVisible && !navigationAnimationVisible) {\n      // Show\n      $navigationAnimation.removeClass('hidden');\n      navigationAnimationVisible = true;\n    } else if (!makeVisible && navigationAnimationVisible) {\n      // Hide\n      $navigationAnimation.addClass('hidden');\n      navigationAnimationVisible = false;\n    }\n  }\n\n  // Initialise\n  initialiseNavigationAnimation();\n\n  // Show navigation animation on screen change\n  $(window).on('beforeunload', function () {\n    // fallback\n    if (!Modernizr.cssanimations) {\n      $navigationAnimation.html(navigationFallback);\n    }\n\n    showNavigating(true);\n  });\n});\n")),(0,a.kt)("p",null,"It's helped along with a little jQuery here but this could easily be accomplished with vanilla JS if you fancied. The approach works by hooking into the ",(0,a.kt)("a",i({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/beforeunload"}),"beforeunload"),' event that fires when "',(0,a.kt)("em",{parentName:"p"},"the window, the document and its resources are about to be unloaded"),"\". There's a little bit more to the functionality in the JavaScript abover which I go into in the PPS below. Essentially that covers backwards compatibility with earlier versions of IE."),(0,a.kt)("p",null,"I've coded this up in a manner that lends itself to re-use. I can imagine that you might also want to make use of the navigation animation if, for example, you had an expensive AJAX operation on a page and you didn't want the users to despair. So the navigation animation could become a kind of a generic \"I am doing something\" animation instead - I leave it to your disgression."),(0,a.kt)("h2",i({},{id:"oh-and-a-final-ps"}),"Oh, and a final PS"),(0,a.kt)("p",null,"I had initially planned to use an old school animated GIF instead of a CSS animation. The thing that stopped me taking this course of action is that, to quote an ",(0,a.kt)("a",i({parentName:"p"},{href:"http://stackoverflow.com/a/780617/761388"}),"answer on Stack Overflow"),' "',(0,a.kt)("em",{parentName:"p"},"IE assumes that the clicking of a link heralds a new navigation where the current page contents will be replaced. As part of the process for perparing for that it halts the code that animates the GIFs."),'". So I needed animation that stayed animated. And lo, there were CSS animations...'),(0,a.kt)("h2",i({},{id:"better-make-that-a-pps---catering-for-ie-9-and-earlier"}),"Better make that a PPS - catering for IE 9 and earlier"),(0,a.kt)("p",null,"I spoke a touch too soon when I expounded on how CSS animations were going to get me out of a hole. Unfortunately, and to my lasting regret, they aren't supported in IE 9. And yes, at least for now that is what the users have. To get round this I've delved a little bit further and discovered a frankly hacky way to make animated gifs stay animated after beforeunload has fired. It works by rendering an animated gif to the screen when beforeunload is fired. Why this works I couldn't say - but if you're interested to research more then take a look at ",(0,a.kt)("a",i({parentName:"p"},{href:"http://stackoverflow.com/a/1904931/761388"}),"this answer on Stack Overflow"),". In my case I've found an animated gif on ",(0,a.kt)("a",i({parentName:"p"},{href:"http://www.ajaxload.info/"}),"AjaxLoad")," which looks pretty similar to the CSS animation:"),(0,a.kt)("p",null,"This is now saved away as ",(0,a.kt)("inlineCode",{parentName:"p"},"navigationAnimation.gif")," in the application. The JavaScript uses Modernizr to detect if CSS animations are in play. If they're not then the animated gif is rendered to the screen in place of the CSS animation HTML. Ugly, but it seems to work well; I think this will work on IE 6 - 9. The CSS animations will work on IE 10+."))}d.isMDXComponent=!0}}]);