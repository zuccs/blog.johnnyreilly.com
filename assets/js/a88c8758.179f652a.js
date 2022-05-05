"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[63248],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,y=m["".concat(c,".").concat(h)]||m[h]||u[h]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41018:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Cache Rules Everything Around Me",authors:"johnnyreilly",tags:["asp net core","cache","wu-tang"],hide_table_of_contents:!1},c=void 0,s={permalink:"/2018/12/10/cache-rules-everything-around-me",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-12-10-cache-rules-everything-around-me/index.md",source:"@site/blog/2018-12-10-cache-rules-everything-around-me/index.md",title:"Cache Rules Everything Around Me",description:"One thing that ASP.Net Core really got right was caching. IMemoryCache is a caching implementation that does just what I want. I love it. I take it everywhere. I've introduced it to my family.",date:"2018-12-10T00:00:00.000Z",formattedDate:"December 10, 2018",tags:[{label:"asp net core",permalink:"/tags/asp-net-core"},{label:"cache",permalink:"/tags/cache"},{label:"wu-tang",permalink:"/tags/wu-tang"}],readingTime:1.57,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Cache Rules Everything Around Me",authors:"johnnyreilly",tags:["asp net core","cache","wu-tang"],hide_table_of_contents:!1},prevItem:{title:"You Might Not Need thread-loader",permalink:"/2018/12/22/you-might-not-need-thread-loader"},nextItem:{title:"Snapshot Testing for C#",permalink:"/2018/11/17/snapshot-testing-for-c"}},p={authorsImageUrls:[void 0]},u=[{value:"TimeSpan, TimeSpan Expiration Y&#39;all",id:"timespan-timespan-expiration-yall",level:2}],m={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"One thing that ASP.Net Core really got right was caching. ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/performance/caching/memory"},(0,i.kt)("inlineCode",{parentName:"a"},"IMemoryCache"))," is a caching implementation that does just what I want. I love it. I take it everywhere. I've introduced it to my family."),(0,i.kt)("h2",{id:"timespan-timespan-expiration-yall"},"TimeSpan, TimeSpan Expiration Y'all"),(0,i.kt)("p",null,"To make usage of the ",(0,i.kt)("inlineCode",{parentName:"p"},"IMemoryCache")," ",(0,i.kt)("em",{parentName:"p"},"even")," more lovely I've written an extension method. I follow pretty much one cache strategy: ",(0,i.kt)("inlineCode",{parentName:"p"},"SetAbsoluteExpiration")," and I just vary the expiration by an amount of time. This extension method implements that in a simple way; I call it ",(0,i.kt)("inlineCode",{parentName:"p"},"GetOrCreateForTimeSpanAsync")," - catchy right? It looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"using System;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Caching.Memory;\n\nnamespace My.Helpers {\n\n    public static class CacheHelpers {\n\n        public static async Task<TItem> GetOrCreateForTimeSpanAsync<TItem>(\n            this IMemoryCache cache,\n            string key,\n            Func<Task<TItem>> itemGetterAsync,\n            TimeSpan timeToCache\n        ) {\n            if (!cache.TryGetValue(key, out object result)) {\n                result = await itemGetterAsync();\n                if (result == null)\n                    return default(TItem);\n\n                var cacheEntryOptions = new MemoryCacheEntryOptions()\n                    .SetAbsoluteExpiration(timeToCache);\n\n                cache.Set(key, result, cacheEntryOptions);\n            }\n\n            return (TItem) result;\n        }\n    }\n}\n")),(0,i.kt)("p",null,"Usage looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'private Task<SuperInterestingThing> GetSuperInterestingThingFromCache(Guid superInterestingThingId) =>\n    _cache.GetOrCreateForTimeSpanAsync(\n        key: $"{nameof(MyClass)}:GetSuperInterestingThing:{superInterestingThingId}",\n        itemGetterAsync: () => GetSuperInterestingThing(superInterestingThingId),\n        timeToCache: TimeSpan.FromMinutes(5)\n    );\n')),(0,i.kt)("p",null,"This helper allows the consumer to provide three things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," key for the item to be cached with"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"itemGetterAsync")," which is the method that is used to retrieve a new value if an item cannot be found in the cache"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"timeToCache")," which is the period of time that an item should be cached")),(0,i.kt)("p",null,"If an item can't be looked up by the ",(0,i.kt)("inlineCode",{parentName:"p"},"itemGetterAsync")," then ",(0,i.kt)("em",{parentName:"p"},"nothing")," will be cached and a the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," value of the expected type will be returned. This is important because lookups can fail, and there's nothing worse than a lookup failing and you caching ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," as a result."),(0,i.kt)("p",null,"Go on, ask me how I know."),(0,i.kt)("p",null,"This is a simple, clear and helpful API which makes interacting with ",(0,i.kt)("inlineCode",{parentName:"p"},"IMemoryCache")," even more lovely than it was. Peep it y'all."))}h.isMDXComponent=!0}}]);