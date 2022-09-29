"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[39037],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(r),d=n,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},86946:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={title:"UseStaticFiles for ASP.Net Framework",authors:"johnnyreilly",tags:["HTML5 History API","Single Page Applications","UseStaticFiles","Routing","URL Rewrite"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2016/01/01/usestaticfiles-for-aspnet-vold",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2016-01-01-usestaticfiles-for-aspnet-vold/index.md",source:"@site/blog/2016-01-01-usestaticfiles-for-aspnet-vold/index.md",title:"UseStaticFiles for ASP.Net Framework",description:"This is a guide on how not to expose all your static files to the world at large when working with the ASP.Net Framework. How to move from a blocklisting approach to a allowlisting approach.",date:"2016-01-01T00:00:00.000Z",formattedDate:"January 1, 2016",tags:[{label:"HTML5 History API",permalink:"/tags/html-5-history-api"},{label:"Single Page Applications",permalink:"/tags/single-page-applications"},{label:"UseStaticFiles",permalink:"/tags/use-static-files"},{label:"Routing",permalink:"/tags/routing"},{label:"URL Rewrite",permalink:"/tags/url-rewrite"}],readingTime:6.07,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"UseStaticFiles for ASP.Net Framework",authors:"johnnyreilly",tags:["HTML5 History API","Single Page Applications","UseStaticFiles","Routing","URL Rewrite"],hide_table_of_contents:!1},prevItem:{title:"Coded UI and the Curse of the Docking Station",permalink:"/2016/01/14/coded-ui-and-curse-of-docking-station"},nextItem:{title:"Live Reload Considered Harmful",permalink:"/2015/12/20/live-reload-considered-harmful"}},u={authorsImageUrls:[void 0]},p=[{value:"Support for HTML5 History API!",id:"support-for-html5-history-api",level:2},{value:"<code>UseStaticFiles</code>",id:"usestaticfiles",level:2},{value:"&quot;I am SPArtucus&quot;",id:"i-am-spartucus",level:2},{value:"Data! Data! Data!.. I can&#39;t make bricks without clay.",id:"data-data-data-i-cant-make-bricks-without-clay",level:2}],c={toc:p};function h(e){var{components:t}=e,r=o(e,["components"]);return(0,a.kt)("wrapper",n({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is a guide on how ",(0,a.kt)("em",{parentName:"p"},"not")," to expose all your static files to the world at large when working with the ASP.Net Framework. How to move from a blocklisting approach to a allowlisting approach."),(0,a.kt)("p",null,"Not clear? Stick around; I'll get better. Oh and that's not all, we've also got.... drumroll:"),(0,a.kt)("h2",n({},{id:"support-for-html5-history-api"}),"Support for ",(0,a.kt)("a",n({parentName:"h2"},{href:"https://html.spec.whatwg.org/multipage/browsers.html#the-history-interface"}),"HTML5 History API"),"!"),(0,a.kt)("p",null,"What that means, in as close to English as I can get it, is real URLs for Single Page Applications. None of that hash-based routing malarkey. So, ",(0,a.kt)("inlineCode",{parentName:"p"},"https://i-am-your-domain.com/i-am-your-route")," rather than ",(0,a.kt)("inlineCode",{parentName:"p"},"https://i-am-your-domain.com/<em>#/</em>i-am-your-route"),". (For a more in depth look at the different sorts of routing SPA's can use then take a look at the ",(0,a.kt)("a",n({parentName:"p"},{href:"http://rackt.org/history/stable/GettingStarted.html"}),"excellent docs")," by the folk behind ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/rackt/react-router"}),"React Router"),". These concepts are not React specific and can be applied to any SPA technology.)"),(0,a.kt)("h2",n({},{id:"usestaticfiles"}),(0,a.kt)("inlineCode",{parentName:"h2"},"UseStaticFiles")),(0,a.kt)("p",null,"You may be aware that historically ASP.Net has been somewhat unusual in its approach to serving static files. Essentially, all the files in a project are theoretically servable. Okay, that's not entirely true; things like the ",(0,a.kt)("inlineCode",{parentName:"p"},"web.config")," files etc are not going to be handed over to someone browsing your site. But other files that you might well want kept away from prying eyes may be. So your ",(0,a.kt)("a",n({parentName:"p"},{href:"http://www.typescriptlang.org/"}),"TypeScript")," files, your ",(0,a.kt)("a",n({parentName:"p"},{href:"http://lesscss.org/"}),"Less")," files are all up for grabs unless you take action to block access to them. This is, and has always been, bad."),(0,a.kt)("p",null,'The ASP.Net team know this and things are changing with ASP.Net 5. With the new stack you have to say "these are the static files we want people to access" in the form of an ',(0,a.kt)("inlineCode",{parentName:"p"},'<a href="https://msdn.microsoft.com/en-us/library/dn782589(v=vs.113).aspx">app.UseStaticFiles()</a>')," declaration. This is mighty similar to how you do things in other frameworks such as ",(0,a.kt)("a",n({parentName:"p"},{href:"http://expressjs.com/en/starter/static-files.html"}),"Express"),". To quote the ",(0,a.kt)("a",n({parentName:"p"},{href:"https://docs.asp.net/en/latest/fundamentals/static-files.html#serving-static-files"}),"docs"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"By default, static files are stored in the webroot of your project. The location of the webroot is defined in the project\u2019s ",(0,a.kt)("inlineCode",{parentName:"p"},"project.json")," file where the default is wwwroot."),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",n({parentName:"pre"},{className:"language-json"}),'"webroot": "wwwroot"\n')),(0,a.kt)("p",{parentName:"blockquote"},"Static files can be stored in any folder under the webroot and accessed with a relative path to that root. For example, when you create a default Web application project using Visual Studio, there are several folders created within the webroot folder - ",(0,a.kt)("inlineCode",{parentName:"p"},"css"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"images")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"js"),". In order to directly access an image in the images subfolder, the URL would look like the following:"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"http://&lt;yourApp&gt;/images/&lt;imageFileName&gt;"))),(0,a.kt)("p",null,"So how do we get this behaviour with ASP.Net vOld? Well, it's just a matter of ",(0,a.kt)("inlineCode",{parentName:"p"},"web.config")," URL rewrite twiddling:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-xml"}),'<configuration>\n  \x3c!-- other config --\x3e\n\n  <system.webServer>\n    <rewrite>\n      <rules>\n        <rule name="Map empty URLs to the index.html">\n          <match url="^$" />\n          <action type="Rewrite" url="/index.html" />\n        </rule>\n        <rule name="Map all requests with a \'.\' in to the \'build\' directory" stopProcessing="true">\n          <match url="^(.*[.].*)$" />\n          <action type="Rewrite" url="/build/{R:1}" />\n        </rule>\n      </rules>\n    </rewrite>\n  </system.webServer>\n</configuration>\n')),(0,a.kt)("p",null,"My ",(0,a.kt)("inlineCode",{parentName:"p"},"webroot")," is named ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," rather than ",(0,a.kt)("inlineCode",{parentName:"p"},"wwwroot"),". The 2 URL rewrite rules above do the following:"),(0,a.kt)("dl",null,(0,a.kt)("dt",null,"Map empty URLs to the index.html"),(0,a.kt)("dd",null,"Empty URLs (ie the URL for the root of your site) are mapped to ",(0,a.kt)("code",null,"index.html"),". The ",(0,a.kt)("code",null,"index.html")," in the ",(0,a.kt)("code",null,"build")," folder is the home page of this particular site and the next rule will make sure that we hit that. (Since we haven't set ",(0,a.kt)("code",null,"stopProcessing")," to ",(0,a.kt)("code",null,"true")," for this particular rule the next rule will be processed after this one.)"),(0,a.kt)("dt",null,"Map all requests with a '.' in to the 'build' directory"),(0,a.kt)("dd",null,'All URLs with a "." in the title (including ',(0,a.kt)("code",null,"index.html"),") are redirected to the ",(0,a.kt)("code",null,"build"),' folder. All static files have a "." in them because filenames have suffixes. This essentially means all requests for files are served from the ',(0,a.kt)("code",null,"build")," folder. In this case we have set ",(0,a.kt)("code",null,"stopProcessing")," to ",(0,a.kt)("code",null,"true")," which means that any URLs that matched this rule will be not be affected by any subsequent rules.")),(0,a.kt)("p",null,"So if anyone sneakily tries to sneakily browse to say, ",(0,a.kt)("inlineCode",{parentName:"p"},"http://&lt;yourApp&gt;/js/app.ts")," then they'll be nicely redirected to the non-existent ",(0,a.kt)("inlineCode",{parentName:"p"},"build/js/app.ts"),". 404 in your face!"),(0,a.kt)("h2",n({},{id:"i-am-spartucus"}),'"I am SPArtucus"'),(0,a.kt)("p",null,"When you have a Single Page Application you want the same web experience as a server side rendered web app. What I mean by this is: routing just works. You want people to be able to go to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://i-am-your-domain.com/i-am-your-route")," and get your site at the specified route. Happily, whether you're using React Router, Angular UI Router or something else, the client side is covered. They can be configured to detect the route that you enter at and serve up the SPA in the relevant state. But you have to meet them halfway; the server needs to do its bit."),(0,a.kt)("p",null,"When a URL is requested that doesn't look like a request for a static file, let's make the (reasonable) assumption that this is a route URL and serve up the shell SPA page. So, for my own example of an Angular 1.x app I want the server to hand over ",(0,a.kt)("inlineCode",{parentName:"p"},"/build/index.html"),"."),(0,a.kt)("p",null,'This is the magic that makes real URLs and SPAs work. Provided the client hasn\'t requested a static file, every request to the server will be responded to with our very own "I am SPArtucus"; the shell SPA page. This is catered for by the addition of another new rule to our ',(0,a.kt)("inlineCode",{parentName:"p"},"web.config"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-xml"}),'<configuration>\n  \x3c!-- other config --\x3e\n\n  <system.webServer>\n    <rewrite>\n      <rules>\n        <rule name="Map empty URLs to the index.html">\n          <match url="^$" />\n          <action type="Rewrite" url="/index.html" />\n        </rule>\n        <rule name="Map all requests with a \'.\' in to the \'build\' directory" stopProcessing="true">\n          <match url="^(.*[.].*)$" />\n          <action type="Rewrite" url="/build/{R:1}" />\n        </rule>\n        <rule name="Map all other URLs to the index.html - this to support our SPA routes">\n          <match url="^.*$" />\n          <action type="Rewrite" url="/build/index.html" />\n        </rule>\n      </rules>\n    </rewrite>\n  </system.webServer>\n</configuration>\n')),(0,a.kt)("dl",null,(0,a.kt)("dt",null,"Map all other URLs to the index.html - this to support our SPA routes"),(0,a.kt)("dd",null,"Our new rule says \"whatever URL turns up, if it hasn't been catered for by an existing rule, well it must be a SPA route, so we'll serve up the shell SPA page of ",(0,a.kt)("code",null,"build/index.html"),'".')),(0,a.kt)("h2",n({},{id:"data-data-data-i-cant-make-bricks-without-clay"}),"Data! Data! Data!.. I can't make bricks without clay."),(0,a.kt)("p",null,"Sherlock Holmes was onto something; most applications are nothing without data. What you've got at present is an application that carefully restricts access to static files and, for all other requests, serves up our shell SPA page. So let's relax our final rule a little to make data access a thing:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-xml"}),'<configuration>\n  \x3c!-- other config --\x3e\n\n  <system.webServer>\n    <rewrite>\n      <rules>\n        <rule name="Map empty URLs to the index.html">\n          <match url="^$" />\n          <action type="Rewrite" url="/index.html" />\n        </rule>\n        <rule name="Map all requests with a \'.\' in to the \'build\' directory" stopProcessing="true">\n          <match url="^(.*[.].*)$" />\n          <action type="Rewrite" url="/build/{R:1}" />\n        </rule>\n        <rule name="Map non-api URLs to the index.html - this to support our SPA routes">\n          <match url="^(api/).*$" negate="true" ignoreCase="true" />\n          <action type="Rewrite" url="/build/index.html" />\n        </rule>\n      </rules>\n    </rewrite>\n  </system.webServer>\n</configuration>\n')),(0,a.kt)("dl",null,(0,a.kt)("dt",null,"Map non-api URLs to the index.html - this to support our SPA routes"),(0,a.kt)("dd",null,'This amended rule says "whatever URL turns up, ',(0,a.kt)("em",null,"unless it begins ",(0,a.kt)("code",null,'"api/"')),", if it hasn't been catered for by an existing rule, well it must be a SPA route, so we'll serve up the shell SPA page of ",(0,a.kt)("code",null,"build/index.html"),'".')),(0,a.kt)("p",null,"This allows us to perform data access by prefixing all the Web API routes with ",(0,a.kt)("inlineCode",{parentName:"p"},'"api/"'),". I've picked this because it is the default location for ASP.Net Web API routes. It is (like most things) entirely configurable. To see a working implementation of this complete approach then take a look at the PoorClaresAngular project ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/johnnyreilly/poorclaresarundel/tree/15e7d4ddc0f1c06fe326b44c3bdc71ceb554bf73"}),"here"),"."))}h.isMDXComponent=!0}}]);