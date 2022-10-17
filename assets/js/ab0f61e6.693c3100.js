"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[54929],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>d});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(i),d=a,g=h["".concat(s,".").concat(d)]||h[d]||u[d]||o;return i?n.createElement(g,r(r({ref:t},c),{},{components:i})):n.createElement(g,r({ref:t},c))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=i[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},94754:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});i(67294);var n=i(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}const r={title:"Using Web Optimization with MVC 3",authors:"johnnyreilly",tags:["asp.net","Bundling","MVC 3","Web Optimization","Minification"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2012/10/05/using-web-optimization-with-mvc-3",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2012-10-05-using-web-optimization-with-mvc-3/index.md",source:"@site/blog/2012-10-05-using-web-optimization-with-mvc-3/index.md",title:"Using Web Optimization with MVC 3",description:"A while ago I wrote about optimally serving up JavaScript in web applications. I mentioned that Microsoft had come up with a NuGet package called Microsoft ASP.NET Web Optimization which could help with that by minifying and bundling CSS and JavaScript. At the time I was wondering if I would be able to to use this package with pre-existing MVC 3 projects (given that the package had been released together with MVC 4). Happily it turns out you can. But it's not quite as straightforward as I might have liked so I've documented how to get going with this here...",date:"2012-10-05T00:00:00.000Z",formattedDate:"October 5, 2012",tags:[{label:"asp.net",permalink:"/tags/asp-net"},{label:"Bundling",permalink:"/tags/bundling"},{label:"MVC 3",permalink:"/tags/mvc-3"},{label:"Web Optimization",permalink:"/tags/web-optimization"},{label:"Minification",permalink:"/tags/minification"}],readingTime:3.61,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Using Web Optimization with MVC 3",authors:"johnnyreilly",tags:["asp.net","Bundling","MVC 3","Web Optimization","Minification"],hide_table_of_contents:!1},prevItem:{title:"MVC 3 meet Dictionary",permalink:"/2012/10/22/mvc-3-meet-dictionary"},nextItem:{title:"Unit Testing and Entity Framework: The Filth and the Fury",permalink:"/2012/10/03/unit-testing-and-entity-framework-filth"}},p={authorsImageUrls:[void 0]},c=[{value:"Getting the Basics in Place",id:"getting-the-basics-in-place",level:2},{value:"Switching over _Layout.cshtml to use Web Optimization",id:"switching-over-_layoutcshtml-to-use-web-optimization",level:2}],u={toc:c};function h(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)("wrapper",a({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A while ago I ",(0,n.kt)("a",a({parentName:"p"},{href:"http://icanmakethiswork.blogspot.com/2012/06/how-im-structuring-my-javascript-in-web.html#WebOptimization"}),"wrote")," about optimally serving up JavaScript in web applications. I mentioned that Microsoft had come up with a NuGet package called ",(0,n.kt)("a",a({parentName:"p"},{href:"http://nuget.org/packages/Microsoft.AspNet.Web.Optimization"}),"Microsoft ASP.NET Web Optimization")," which could help with that by minifying and bundling CSS and JavaScript. At the time I was wondering if I would be able to to use this package with pre-existing MVC 3 projects (given that the package had been released together with MVC 4). Happily it turns out you can. But it's not quite as straightforward as I might have liked so I've documented how to get going with this here..."),(0,n.kt)("h2",a({},{id:"getting-the-basics-in-place"}),"Getting the Basics in Place"),(0,n.kt)("p",null,'To keep it simple I\'m going to go through taking a "vanilla" MVC 3 app and enhancing it to work with Web Optimization. To start, follow these basic steps:'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open Visual Studio (bet you didn't see that coming!)"),(0,n.kt)("li",{parentName:"ol"},"Create a new MVC 3 application (I called mine \"WebOptimizationWithMvc3\" to demonstrate my imaginative flair). It doesn't really matter which sort of MVC 3 project you create - I chose an Intranet application but really that's by the by."),(0,n.kt)("li",{parentName:"ol"},"Update pre-existing NuGet packages"),(0,n.kt)("li",{parentName:"ol"},'At the NuGet console type: "',(0,n.kt)("inlineCode",{parentName:"li"},"Install-Package Microsoft.AspNet.Web.Optimization"),'"')),(0,n.kt)("p",null,"Whilst the NuGet package adds the necessary references to your MVC 3 project it doesn't add the corresponding namespaces to the web.configs. To fix this manually add the following child XML element to the ",(0,n.kt)("inlineCode",{parentName:"p"},"&lt;namespaces&gt;")," element in your root and Views web.config files:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'&lt;add namespace="System.Web.Optimization" /&gt;')),(0,n.kt)("p",null,"This gives you access to ",(0,n.kt)("inlineCode",{parentName:"p"},"Scripts")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Styles")," in your views without needing the fully qualified namespace. For reasons best known to Microsoft I had to close down and restart Visual Studio before intellisense started working. You may need to do likewise."),(0,n.kt)("p",null,"Next up we want to get some JavaScript / CSS bundles in place. To do this, create a folder in the root of your project called \"App_Start\". There's nothing magical about this to my knowledge; this is just a convention that's been adopted to store all the bits of startup in one place and avoid clutterage. (I think this grew out of Nuget; see ",(0,n.kt)("a",a({parentName:"p"},{href:"http://blog.davidebbo.com/2011/02/appstart-folder-convention-for-nuget.html"}),"David Ebbo talking about this here"),".) Inside your new folder you should add a new class called ",(0,n.kt)("inlineCode",{parentName:"p"},"BundleConfig.cs")," which looks like this:"),(0,n.kt)("script",{src:"https://gist.github.com/3839486.js?file=BundleConfig.cs"}),(0,n.kt)("p",null,"The above is what you get when you create a new MVC 4 project (as it includes Web Optimization out of the box). All it does is create some JavaScript and CSS bundles relating to jQuery, jQuery UI, jQuery Validate, Modernizr and the standard site CSS. Nothing radical here but this example should give you an idea of how bundling can be configured and used. To make use of ",(0,n.kt)("inlineCode",{parentName:"p"},"BundleConfig.cs")," you should modify your ",(0,n.kt)("inlineCode",{parentName:"p"},"Global.asax.cs")," so it looks like this:"),(0,n.kt)("script",{src:"https://gist.github.com/3839486.js?file=Global.asax.cs"}),(0,n.kt)("p",null,"Once you've done this you're ready to start using Web Optimization in your MVC 3 application."),(0,n.kt)("h2",a({},{id:"switching-over-_layoutcshtml-to-use-web-optimization"}),"Switching over ","_","Layout.cshtml to use Web Optimization"),(0,n.kt)("p",null,'With a "vanilla" MVC 3 app the only use of CSS and JavaScript files is found in ',(0,n.kt)("inlineCode",{parentName:"p"},"_Layout.cshtml"),". To switch over to using Web Optimization you should replace the existing ",(0,n.kt)("inlineCode",{parentName:"p"},"_Layout.cshtml")," with this: (you'll see that the few differences that there are between the 2 are solely around the replacement of link / script tags with references to ",(0,n.kt)("inlineCode",{parentName:"p"},"Scripts")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Styles")," instead)"),(0,n.kt)("script",{src:"https://gist.github.com/3839486.js?file=_Layout.cshtml"}),(0,n.kt)("p",null,"Do note that in the above ",(0,n.kt)("inlineCode",{parentName:"p"},"Scripts.Render")," call we're rendering out 3 bundles; jQuery, jQuery UI and jQuery Validate. We're not using any of these in ",(0,n.kt)("inlineCode",{parentName:"p"},"_Layout.cshtml")," but rendering these (and their associated link tags) gives us a chance to demonstrate that everything is working as expected."),(0,n.kt)("p",null,"In your root web.config file make sure that the following tag is in place: ",(0,n.kt)("inlineCode",{parentName:"p"},'&lt;compilation debug="<b>true</b>" targetFramework="4.0"&gt;'),". Then run, the generated HTML should look something like this:"),(0,n.kt)("script",{src:"https://gist.github.com/3839486.js?file=debug true"}),(0,n.kt)("p",null,"This demonstrates that when the application has debug set to true you see the full scripts / links being rendered out as you would hope (to make your debugging less painful)."),(0,n.kt)("p",null,"Now go back to your root ",(0,n.kt)("inlineCode",{parentName:"p"},"web.config")," file and chance the debug tag to false: ",(0,n.kt)("inlineCode",{parentName:"p"},'&lt;compilation debug="<b>false</b>" targetFramework="4.0"&gt;'),". This time when you run, the generated HTML should look something like this:"),(0,n.kt)("script",{src:"https://gist.github.com/3839486.js?file=debug false"}),(0,n.kt)("p",null,"This time you can see that in non-debug mode (ie how it would run in Production) minified bundles of scripts and css files are being served up instead of the raw files. And that's it; done."))}h.isMDXComponent=!0}}]);