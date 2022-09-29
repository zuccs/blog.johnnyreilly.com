"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[90180],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93282:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"A tale of Angular, html5mode, ASP.Net MVC and ASP.Net Web API",authors:"johnnyreilly",tags:["asp.net mvc","asp.net","html5mode","AngularJS","ASP.Net Web API"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2015/05/05/a-tale-of-angular-html5mode-aspnet-mvc",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2015-05-05-a-tale-of-angular-html5mode-aspnet-mvc/index.md",source:"@site/blog/2015-05-05-a-tale-of-angular-html5mode-aspnet-mvc/index.md",title:"A tale of Angular, html5mode, ASP.Net MVC and ASP.Net Web API",description:"So. You want to kick hash based routing to the kerb. You want real URLs. You've read the HTML5 mode section of the Angular $location docs and you're good to go. It's just a matter of dropping $locationProvider.html5Mode(true) into your app initialisation right?",date:"2015-05-05T00:00:00.000Z",formattedDate:"May 5, 2015",tags:[{label:"asp.net mvc",permalink:"/tags/asp-net-mvc"},{label:"asp.net",permalink:"/tags/asp-net"},{label:"html5mode",permalink:"/tags/html-5-mode"},{label:"AngularJS",permalink:"/tags/angular-js"},{label:"ASP.Net Web API",permalink:"/tags/asp-net-web-api"}],readingTime:2.945,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"A tale of Angular, html5mode, ASP.Net MVC and ASP.Net Web API",authors:"johnnyreilly",tags:["asp.net mvc","asp.net","html5mode","AngularJS","ASP.Net Web API"],hide_table_of_contents:!1},prevItem:{title:"NgValidationFor Baby Steps",permalink:"/2015/05/11/ngvalidationfor-baby-steps"},nextItem:{title:"Tonight I'll Start an Open Source Project...",permalink:"/2015/04/24/tonight-ill-start-open-source-project"}},u={authorsImageUrls:[void 0]},p=[{value:"ASP.Net MVC",id:"aspnet-mvc",level:2},{value:"ASP.Net Web API",id:"aspnet-web-api",level:2}],c={toc:p};function d(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"So. You want to kick hash based routing to the kerb. You want ",(0,r.kt)("em",{parentName:"p"},"real")," URLs. You've read the HTML5 mode section of the ",(0,r.kt)("a",o({parentName:"p"},{href:"https://docs.angularjs.org/guide/$location"}),"Angular $location docs")," and you're good to go. It's just a matter of dropping ",(0,r.kt)("inlineCode",{parentName:"p"},"$locationProvider.html5Mode(true)")," into your app initialisation right?"),(0,r.kt)("p",null,"Wrong."),(0,r.kt)("p",null,"You want your URLs to be shareable. If, when you copy the URL out of your browser and send it someone else, they do not get taken to the same position in the application as you do then I've got news for you: THAT'S NOT REALLY A URL. And just using ",(0,r.kt)("inlineCode",{parentName:"p"},"$locationProvider.html5Mode(true)")," has done nothing useful for you. You want to ensure that, if the URL entered in the browser does not relate to a specific server-side end-point, the self-same HTML root page is ",(0,r.kt)("em",{parentName:"p"},"always")," served up. Then Angular can load the correct resources for the URL you have entered and get you to the required state."),(0,r.kt)("p",null,"There are tips to be found in Angular UI's ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#how-to-configure-your-server-to-work-with-html5mode"}),"How to: Configure your server to work with html5Mode")," doc. However they required a little extra fiddling to get my ASP.Net back end working quite as I wanted. To save you pain, here are my cultural learnings."),(0,r.kt)("h2",o({},{id:"aspnet-mvc"}),"ASP.Net MVC"),(0,r.kt)("p",null,"I had an ASP.Net MVC app which I wanted to use ",(0,r.kt)("inlineCode",{parentName:"p"},"html5mode")," with. To do this is simply a matter of tweaking your ",(0,r.kt)("inlineCode",{parentName:"p"},"RouteConfig.cs")," like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-cs"}),'public class RouteConfig\n    {\n        public static void RegisterRoutes(RouteCollection routes)\n        {\n            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");\n\n            // Here go the routes that you still want to be able to hit\n            routes.MapRoute(\n                name: "IAmARouteThatYouStillWantToHit",\n                url: "ThatsWhyIAmRegisteredFirst",\n                defaults: new { controller = "Hittable", action = "Index" }\n            );\n\n            // Everything else will hit Home/Index which serves up the root angular app page\n            routes.MapRoute(\n                name: "Default",\n                url: "{*anything}", // THIS IS THE MAGIC!!!!\n                defaults: new { controller = "Home", action = "Index" }\n            );\n        }\n')),(0,r.kt)("p",null,"With this in place my existing routes work just as I would hope. Any route that doesn't fit that registered can be assumed to be ",(0,r.kt)("inlineCode",{parentName:"p"},"html5mode")," related and will serve up the root angular app page as I'd hope."),(0,r.kt)("h2",o({},{id:"aspnet-web-api"}),"ASP.Net Web API"),(0,r.kt)("p",null,'Later I realised that the app in question was mostly static content. Certainly the root angular app page was and so it seemed wasteful to require an ASP.Net MVC controller to serve up that static content. So I stripped out MVC from the app entirely, choosing to serve raw HTML instead. For the dynamic parts I switched to using Web API. This was "hittable" as long as I had my ',(0,r.kt)("inlineCode",{parentName:"p"},"WebApiConfig.cs")," and my ",(0,r.kt)("inlineCode",{parentName:"p"},"system.webServer")," section in my ",(0,r.kt)("inlineCode",{parentName:"p"},"web.config")," lined up correctly, viz:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-cs"}),'public static class WebApiConfig\n    {\n        public static void Register(HttpConfiguration config)\n        {\n            // Web API routes\n            config.MapHttpAttributeRoutes();\n\n            config.Routes.MapHttpRoute(\n                name: "DefaultApi",\n                routeTemplate: "api/{controller}/{id}",\n                defaults: new { id = RouteParameter.Optional }\n            );\n\n            // other stuff\n        }\n    }\n')),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-xml"}),'<configuration>\n\n    <system.webServer>\n\n        <defaultDocument>\n            <files>\n                <clear />\n                <add value="build/index.html" /> \x3c!-- This is the root document for the Angular app --\x3e\n            </files>\n        </defaultDocument>\n\n        <rewrite>\n            <rules>\n                <rule name="Main Rule" stopProcessing="true">\n                    <match url=".*" />\n                    <conditions logicalGrouping="MatchAll">\n                        \x3c!-- Allows "api/" prefixed URLs to still hit Web API controllers\n                             as defined in WebApiConfig --\x3e\n                        <add input="{REQUEST_URI}" pattern="api/" ignoreCase="true" negate="true" />\n\n                        \x3c!-- Static files and directories can be served so partials etc can be loaded --\x3e\n                        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />\n                        <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />\n                    </conditions>\n                    <action type="Rewrite" url="/" />\n                </rule>\n            </rules>\n        </rewrite>\n\n    </system.webServer>\n\n</configuration>\n')),(0,r.kt)("p",null,'With this in place I can happily hit "api" prefixed URLs and still land on my Web API controllers whilst other URLs will serve up the root angular app page. Lovely.'))}d.isMDXComponent=!0}}]);