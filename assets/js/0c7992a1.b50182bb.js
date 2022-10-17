"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[90786],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(n),h=r,y=c["".concat(p,".").concat(h)]||c[h]||d[h]||a;return n?o.createElement(y,s(s({ref:t},u),{},{components:n})):o.createElement(y,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},17590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>u});n(67294);var o=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"ASP.NET Core: Proxying HTTP Requests with an AllowList",authors:"johnnyreilly",tags:["asp net core","proxy","http requests","allowlist"],image:"./hang-on-lads-ive-got-a-great-idea.jpg",hide_table_of_contents:!1},i=void 0,p={permalink:"/2019/02/22/aspnet-core-allowlist-proxying-http-requests",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2019-02-22-aspnet-core-allowlist-proxying-http-requests/index.md",source:"@site/blog/2019-02-22-aspnet-core-allowlist-proxying-http-requests/index.md",title:"ASP.NET Core: Proxying HTTP Requests with an AllowList",description:"This post demonstrates a mechanism for proxying HTTP requests in ASP.NET Core. It doesn't proxy all requests; it only proxies requests that match entries on an \"allowlist\" - so we only proxy the traffic that we've actively decided is acceptable as determined by taking the form of an expected URL and HTTP verb (GET / POST etc).",date:"2019-02-22T00:00:00.000Z",formattedDate:"February 22, 2019",tags:[{label:"asp net core",permalink:"/tags/asp-net-core"},{label:"proxy",permalink:"/tags/proxy"},{label:"http requests",permalink:"/tags/http-requests"},{label:"allowlist",permalink:"/tags/allowlist"}],readingTime:6.485,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"ASP.NET Core: Proxying HTTP Requests with an AllowList",authors:"johnnyreilly",tags:["asp net core","proxy","http requests","allowlist"],image:"./hang-on-lads-ive-got-a-great-idea.jpg",hide_table_of_contents:!1},prevItem:{title:"fork-ts-checker-webpack-plugin v1.0",permalink:"/2019/03/06/fork-ts-checker-webpack-plugin-v1"},nextItem:{title:"TypeScript and webpack: Watch It",permalink:"/2019/01/13/typescript-and-webpack-watch-it"}},l={image:n(27827).Z,authorsImageUrls:[void 0]},u=[{value:"Why do we need to proxy?",id:"why-do-we-need-to-proxy",level:2},{value:"The Proxy Regroup",id:"the-proxy-regroup",level:2},{value:"Proxy Part 1",id:"proxy-part-1",level:2},{value:"Proxy Part 2",id:"proxy-part-2",level:2}],d={toc:u};function c(e){var{components:t}=e,s=a(e,["components"]);return(0,o.kt)("wrapper",r({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This post demonstrates a mechanism for proxying HTTP requests in ASP.NET Core. It doesn't proxy all requests; it only proxies requests that match entries on an \"allowlist\" - so we only proxy the traffic that we've actively decided is acceptable as determined by taking the form of an expected URL and HTTP verb (GET / POST etc)."),(0,o.kt)("h2",r({},{id:"why-do-we-need-to-proxy"}),"Why do we need to proxy?"),(0,o.kt)("p",null,'Once upon a time there lived a young team who were building a product. They were ready to go live with their beta and so they set off on a journey to a mystical land they had heard tales of. This magical kingdom was called "Production". However, Production was a land with walls and but one gate. That gate was jealously guarded by a defender named "InfoSec". InfoSec was there to make sure that only the the right people, noble of thought and pure of deed were allowed into the promised land. InfoSec would ask questions like "are you serving over HTTPS" and "what are you doing about cross site scripting"?'),(0,o.kt)("p",null,'The team felt they had good answers to InfoSec\'s questions. However, just as they were about to step through the gate, InfoSec held up their hand and said "your application wants to access a database... database access needs to take place on our own internal network. Not over the publicly accessible internet."'),(0,o.kt)("p",null,'The team, with one foot in the air, paused. They swallowed and said "can you give us five minutes?"'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image taken from the end of the classic movie &quot;The Italian Job&quot; of the bus hanging half off a mountainside",src:n(27827).Z,width:"640",height:"271"})),(0,o.kt)("h2",r({},{id:"the-proxy-regroup"}),"The Proxy Regroup"),(0,o.kt)("p",null,"And so it came to pass that the teams product (which took the form of ASP.Net Core web application) had to be changed. Where once there had been a single application, there would now be two; one that lived on the internet (the ",(0,o.kt)("em",{parentName:"p"},"web")," app) and one that lived on the companies private network (the ",(0,o.kt)("em",{parentName:"p"},"API")," app). The API app would do all the database access. In fact the product team opted to move all significant operations into the API as well. This left the web app with two purposes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"the straightforward serving of HTML, CSS, JS and images"),(0,o.kt)("li",{parentName:"ol"},"the proxying of API calls through to the API app")),(0,o.kt)("h2",r({},{id:"proxy-part-1"}),"Proxy Part 1"),(0,o.kt)("p",null,"In the early days of this proxying the team reached for ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/twitchax/AspNetCore.Proxy"}),(0,o.kt)("inlineCode",{parentName:"a"},"AspNetCore.Proxy")),". It's a great open source project that allows you to proxy HTTP requests. It gives you complete control over the construction of proxy requests, so that you can have a request come into your API and end up proxying it to a URL with a completely different path on the proxy server."),(0,o.kt)("h2",r({},{id:"proxy-part-2"}),"Proxy Part 2"),(0,o.kt)("p",null,"The approach offered by ",(0,o.kt)("inlineCode",{parentName:"p"},"AspNetCore.Proxy")," is fantastically powerful in terms of control. However, we didn't actually need that level of configurability. In fact, it resulted in us writing a great deal of boilerplate code. You see in our case we'd opted to proxy path for path, changing only the server name on each proxied request. So if a GET request came in going to ",(0,o.kt)("a",r({parentName:"p"},{href:"https://web.app.com/api/version"}),"https://web.app.com/api/version")," then we would want to proxy it to a GET request to ",(0,o.kt)("a",r({parentName:"p"},{href:"https://api.app.com/api/version"}),"https://api.app.com/api/version"),". You see? All we did was swap ",(0,o.kt)("a",r({parentName:"p"},{href:"https://web.app.com"}),"https://web.app.com")," for ",(0,o.kt)("a",r({parentName:"p"},{href:"https://api.app.com."}),"https://api.app.com.")," Nothing more. We did that as a rule. We knew we ",(0,o.kt)("em",{parentName:"p"},"always")," wanted to do just this."),(0,o.kt)("p",null,"So we ended up spinning up our own solution which allowed just the specification of paths we wanted to proxy with their corresponding HTTP verbs. Let's talk through it. Usage of our approach ended up as a middleware within our web app's ",(0,o.kt)("inlineCode",{parentName:"p"},"Startup.cs"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-cs"}),'public void Configure(IApplicationBuilder app) {\n    // ...\n\n    app.UseProxyAllowList(\n        // where ServerToProxyToBaseUrl is the server you want requests to be proxied to\n        // eg "https://the-server-we-proxy-to"\n        proxyAddressTweaker: (requestPath) => $"{ServerToProxyToBaseUrl}{requestPath}",\n        allowListProxyRoutes: new [] {\n            // An anonymous request\n            AllowListProxy.AnonymousRoute("api/version", HttpMethod.Get),\n\n            // An authenticated request; to send this we must know who the user is\n            AllowListProxy.Route("api/account/{accountId:int}/all-the-secret-info", HttpMethod.Get, HttpMethod.Post),\n    });\n\n\n    app.UseMvc();\n\n    // ...\n}\n')),(0,o.kt)("p",null,"If you look at the code above you can see that we are proxing requests to a single server: ",(0,o.kt)("inlineCode",{parentName:"p"},"ServerToProxyToBaseUrl"),". We're also only proxying requests which match an entry on our allowlist (as represented by ",(0,o.kt)("inlineCode",{parentName:"p"},"allowListProxyRoutes"),"). So in this case we're proxying two different requests:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"GET")," requests to ",(0,o.kt)("inlineCode",{parentName:"li"},"api/version")," are proxied through as ",(0,o.kt)("em",{parentName:"li"},"anonymous"),(0,o.kt)("inlineCode",{parentName:"li"},"GET")," requests."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"GET")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"POST")," requests to ",(0,o.kt)("inlineCode",{parentName:"li"},"api/account/{accountId:int}/all-the-secret-info")," are proxied through as ",(0,o.kt)("inlineCode",{parentName:"li"},"GET")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"POST")," requests. These requests require that a user be authenticated first.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"AllowListProxy")," proxy class we've been using looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-cs"}),'using System;\nusing System.Collections.Generic;\nusing System.Net.Http;\n\nnamespace My.Web.Proxy {\n    public class AllowListProxy {\n        public string Path { get; set; }\n        public IEnumerable<HttpMethod> Methods { get; set; }\n        public bool IsAnonymous { get; set; }\n\n        private AllowListProxy(string path, bool isAnonymous, params HttpMethod[] methods) {\n            if (methods == null || methods.Length == 0)\n                throw new ArgumentException($"You need at least a single HttpMethod to be specified for {path}");\n\n            Path = path;\n            IsAnonymous = isAnonymous;\n            Methods = methods;\n        }\n\n        public static AllowListProxy Route(string path, params HttpMethod[] methods) =>\n            new AllowListProxy(path, isAnonymous: false, methods: methods);\n\n        public static AllowListProxy AnonymousRoute(string path, params HttpMethod[] methods) =>\n            new AllowListProxy(path, isAnonymous: true, methods: methods);\n    }\n}\n')),(0,o.kt)("p",null,"The middleware for proxying (our ",(0,o.kt)("inlineCode",{parentName:"p"},"UseProxyAllowList"),") looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-cs"}),'using System;\nusing System.Collections.Generic;\nusing System.ComponentModel;\nusing System.Linq;\nusing System.Net.Http;\nusing System.Reflection;\nusing System.Threading.Tasks;\nusing Microsoft.AspNetCore.Authentication;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.Routing;\nusing Microsoft.Extensions.DependencyModel;\nusing Microsoft.Extensions.DependencyInjection;\nusing Serilog;\n\nnamespace My.Web.Proxy {\n    public static class ProxyRouteExtensions {\n        /// <summary>\n        /// Middleware which proxies the supplied allowlist routes\n        /// </summary>\n        public static void UseProxyAllowList(\n            this IApplicationBuilder app,\n            Func<string, string> proxyAddressTweaker,\n            Action<HttpContext, HttpRequestMessage> preSendProxyRequestAction,\n            IEnumerable<AllowListProxy> allowListProxyRoutes\n        ) {\n            app.UseRouter(builder => {\n                foreach (var allowListProxy in allowListProxyRoutes) {\n                    foreach (var method in allowListProxy.Methods) {\n                        builder.MapMiddlewareVerb(method.ToString(), allowListProxy.Path, proxyApp => {\n                            proxyApp.UseProxy_Challenge(allowListProxy.IsAnonymous);\n                            proxyApp.UseProxy_Run(proxyAddressTweaker, preSendProxyRequestAction);\n                        });\n                    }\n                }\n            });\n        }\n\n        private static void UseProxy_Challenge(this IApplicationBuilder app, bool allowAnonymous) {\n            app.Use((context, next) =>\n            {\n                var routePath = context.Request.Path.Value;\n\n                var weAreAuthenticatedOrWeDontNeedToBe =\n                    context.User.Identity.IsAuthenticated || allowAnonymous;\n                if (weAreAuthenticatedOrWeDontNeedToBe)\n                    return next();\n\n                return context.ChallengeAsync();\n            });\n        }\n\n        private static void UseProxy_Run(\n            this IApplicationBuilder app,\n            Func<string, string> proxyAddressTweaker,\n            Action<HttpContext, HttpRequestMessage> preSendProxyRequestAction\n            )\n        {\n            app.Run(async context => {\n                var proxyAddress = "";\n                try {\n                    proxyAddress = proxyAddressTweaker(context.Request.Path.Value);\n\n                    var proxyRequest = context.Request.CreateProxyHttpRequest(proxyAddress);\n\n                    if (preSendProxyRequestAction != null)\n                        preSendProxyRequestAction(context, proxyRequest);\n\n                    var httpClients = context.RequestServices.GetService<IHttpClients>(); // IHttpClients is just a wrapper for HttpClient - insert your own here\n\n                    var proxyResponse = await httpClients.SendRequestAsync(proxyRequest,\n                            HttpCompletionOption.ResponseHeadersRead, context.RequestAborted)\n                        .ConfigureAwait(false);\n\n                    await context.CopyProxyHttpResponse(proxyResponse).ConfigureAwait(false);\n                }\n                catch (OperationCanceledException ex) {\n                    if (ex.CancellationToken.IsCancellationRequested)\n                        return;\n\n                    if (!context.Response.HasStarted)\n                    {\n                        context.Response.StatusCode = 408;\n                        await context.Response\n                            .WriteAsync("Request timed out.");\n                    }\n                }\n                catch (Exception e) {\n                    if (!context.Response.HasStarted)\n                    {\n                        context.Response.StatusCode = 500;\n                        await context.Response\n                            .WriteAsync(\n                                $"Request could not be proxied.\\n\\n{e.Message}\\n\\n{e.StackTrace}.");\n                    }\n                }\n            });\n        }\n\n        public static void AddOrReplaceHeader(this HttpRequestMessage request, string headerName, string headerValue) {\n            // It\'s possible for there to be multiple headers with the same name; we only want a single header to remain.  Our one.\n            while (request.Headers.TryGetValues(headerName, out var existingAuthorizationHeader)) {\n                request.Headers.Remove(headerName);\n            }\n            request.Headers.TryAddWithoutValidation(headerName, headerValue);\n        }\n\n        public static HttpRequestMessage CreateProxyHttpRequest(this HttpRequest request, string uriString) {\n            var uri = new Uri(uriString + request.QueryString);\n\n            var requestMessage = new HttpRequestMessage();\n            var requestMethod = request.Method;\n            if (!HttpMethods.IsGet(requestMethod) &&\n                !HttpMethods.IsHead(requestMethod) &&\n                !HttpMethods.IsDelete(requestMethod) &&\n                !HttpMethods.IsTrace(requestMethod)) {\n                var streamContent = new StreamContent(request.Body);\n                requestMessage.Content = streamContent;\n            }\n\n            // Copy the request headers.\n            if (requestMessage.Content != null)\n                foreach (var header in request.Headers)\n                    if (!requestMessage.Headers.TryAddWithoutValidation(header.Key, header.Value.ToArray()))\n                        requestMessage.Content?.Headers.TryAddWithoutValidation(header.Key, header.Value.ToArray());\n\n            requestMessage.Headers.Host = uri.Authority;\n            requestMessage.RequestUri = uri;\n            requestMessage.Method = new HttpMethod(request.Method);\n\n            return requestMessage;\n        }\n\n        public static async Task CopyProxyHttpResponse(this HttpContext context, HttpResponseMessage responseMessage) {\n            var response = context.Response;\n\n            response.StatusCode = (int) responseMessage.StatusCode;\n            foreach (var header in responseMessage.Headers) {\n                response.Headers[header.Key] = header.Value.ToArray();\n            }\n\n            if (responseMessage.Content != null) {\n                foreach (var header in responseMessage.Content.Headers) {\n                    response.Headers[header.Key] = header.Value.ToArray();\n                }\n            }\n\n            response.Headers.Remove("transfer-encoding");\n\n            using(var responseStream = await responseMessage.Content.ReadAsStreamAsync().ConfigureAwait(false)) {\n                await responseStream.CopyToAsync(response.Body, 81920, context.RequestAborted).ConfigureAwait(false);\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"This works out to be a flexible and simple approach to allowlist proxying."))}c.isMDXComponent=!0},27827:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/hang-on-lads-ive-got-a-great-idea-d87277f50bf9435db73abbf57226631a.jpg"}}]);