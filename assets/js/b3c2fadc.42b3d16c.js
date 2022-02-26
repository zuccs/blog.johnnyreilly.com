"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[37284],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=u(r),f=a,d=h["".concat(s,".").concat(f)]||h[f]||c[f]||o;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},30696:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return f}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={title:"Hands-free HTTPS",authors:"johnnyreilly",tags:["TLS","free","HTTPS","CloudFlare","Troy Hunt"],hide_table_of_contents:!1},s=void 0,u={permalink:"/2017/02/01/hands-free-https",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-02-01-hands-free-https/index.md",source:"@site/blog/2017-02-01-hands-free-https/index.md",title:"Hands-free HTTPS",description:"I have had a \\*great\\* week. You? Take a look at this blog. Can you see what I can see? Here's a clue:",date:"2017-02-01T00:00:00.000Z",formattedDate:"February 1, 2017",tags:[{label:"TLS",permalink:"/tags/tls"},{label:"free",permalink:"/tags/free"},{label:"HTTPS",permalink:"/tags/https"},{label:"CloudFlare",permalink:"/tags/cloud-flare"},{label:"Troy Hunt",permalink:"/tags/troy-hunt"}],readingTime:1.62,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Hands-free HTTPS",authors:"johnnyreilly",tags:["TLS","free","HTTPS","CloudFlare","Troy Hunt"],hide_table_of_contents:!1},prevItem:{title:"@types is rogue",permalink:"/2017/02/14/typescript-types-and-repeatable-builds"},nextItem:{title:"webpack: resolveLoader / alias with query / options",permalink:"/2017/01/06/webpack-resolveloader-alias-with-query"}},p={authorsImageUrls:[void 0]},c=[],h={toc:c};function f(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I have had a ","*",(0,o.kt)("strong",{parentName:"p"},"great"),"*"," week. You? Take a look at this blog. Can you see what I can see? Here's a clue:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:r(34440).Z,width:"640",height:"428"})),(0,o.kt)("p",null,"Yup, look at the top left hand corner.... see that beautiful padlock? Yeah - that's what's thrilled me. You see I have a dream; that one day on the red hills of the internet, the sons of former certificates and the sons of former certificate authorities will be able to sit down together at the table of HTTPS. Peace, love and TLS for all."),(0,o.kt)("p",null,"The world is turning and slowly but surely HTTPS is becoming the default of the web. ",(0,o.kt)("a",{parentName:"p",href:"https://security.googleblog.com/2014/08/https-as-ranking-signal_6.html"},"Search results get ranked higher if they're HTTPS."),(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HTTP/2#Encryption"},"HTTP/2 is, to all intents and purposes, a HTTPS-only game."),(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en/docs/Web/API/Service_Worker_API"},"Service Workers are HTTPS-only.")),(0,o.kt)("p",null,"I care about all of these. So it's ",(0,o.kt)("em",{parentName:"p"},"essential")," that I have HTTPS. But. But. But... Certificates, the administration that goes with them. It's boring. I mean, it just is. I want to be building interesting apps, I don't want to be devoting my time to acquiring certificates and fighting my way through the (never simple) administration of them. I'm dimly aware that there's free certificates to be had thanks to the fine work of ",(0,o.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"LetsEncrypt"),". I believe that work is being done on reduce the onerous admin burden as well. And that's great. But I'm still avoiding it..."),(0,o.kt)("p",null,"What if I told you you could have HTTPS on your blog, on your Azure websites, on your anywhere.... ",(0,o.kt)("em",{parentName:"p"},"FOR FREE. IN FIVE MINUTES?"),". Well, you can thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://www.cloudflare.com/"},"CloudFlare"),". I did; you should too."),(0,o.kt)("p",null,"This is where I point you off to a number of resources to help you on your HTTPS way:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.troyhunt.com/how-to-get-your-ssl-for-free-on-shared/"},'Read Troy Hunt\'s "How to get your SSL for free on a Shared Azure website with CloudFlare"')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.pluralsight.com/courses/cloudflare-security-getting-started"},'Watch Troy Hunt\'s Pluralsight course "Getting Started with CloudFlare\u2122 Security"')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.cloudflare.com/"},"Go to Cloudflare's website and sign up"))),(0,o.kt)("p",null,"It just works. And that makes me very happy indeed."))}f.isMDXComponent=!0},34440:function(e,t,r){t.Z=r.p+"assets/images/Screenshot%2B2017-01-29%2B14.45.57-e37702527329a67e058ff866e5e5a3fd.png"}}]);