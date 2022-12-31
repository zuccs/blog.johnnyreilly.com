"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[57411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||h[d]||i;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>p});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"Reverse engineering the Azure Application Insights Transactions URL",authors:"johnnyreilly",tags:["Azure Application Insights","Transaction Search","URL","TypeScript","C#"],image:"./title-image.png",hide_table_of_contents:!1},l=void 0,o={permalink:"/2022/09/03/reverse-engineering-azure-app-insights-transactions-url",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-09-03-reverse-engineering-azure-app-insights-transactions-url/index.md",source:"@site/blog/2022-09-03-reverse-engineering-azure-app-insights-transactions-url/index.md",title:"Reverse engineering the Azure Application Insights Transactions URL",description:"Logs matter. In Azure, logs generally live in Application Insights, in the Transaction Search section. This post reverse engineers the Azure Application Insights Transactions URL, and details how to construct a link to take you directly there, using both TypeScript and C#.",date:"2022-09-03T00:00:00.000Z",formattedDate:"September 3, 2022",tags:[{label:"Azure Application Insights",permalink:"/tags/azure-application-insights"},{label:"Transaction Search",permalink:"/tags/transaction-search"},{label:"URL",permalink:"/tags/url"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"C#",permalink:"/tags/c"}],readingTime:7.95,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Reverse engineering the Azure Application Insights Transactions URL",authors:"johnnyreilly",tags:["Azure Application Insights","Transaction Search","URL","TypeScript","C#"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"React: storing state in URL with URLSearchParams",permalink:"/2022/09/20/react-usesearchparamsstate"},nextItem:{title:"Swashbuckle and schemaId is already used",permalink:"/2022/08/31/swashbuckle-schemaid-already-used"}},c={image:n(1189).Z,authorsImageUrls:[void 0]},p=[{value:"Bring me the logs!",id:"bring-me-the-logs",level:2},{value:"Breaking down the link",id:"breaking-down-the-link",level:2},{value:"1. Main Azure Portal routing",id:"1-main-azure-portal-routing",level:3},{value:"2. ResourceId",id:"2-resourceid",level:3},{value:"3. More Azure Portal routing",id:"3-more-azure-portal-routing",level:3},{value:"4. The query",id:"4-the-query",level:3},{value:"Reverse engineering a link",id:"reverse-engineering-a-link",level:2},{value:"TypeScript URL builder",id:"typescript-url-builder",level:2},{value:"C# URL builder",id:"c-url-builder",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p};function h(e){var{components:t}=e,s=i(e,["components"]);return(0,a.kt)("wrapper",r({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Logs matter. In Azure, logs generally live in Application Insights, in the Transaction Search section. This post reverse engineers the Azure Application Insights Transactions URL, and details how to construct a link to take you directly there, using both TypeScript and C#."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"title image reading &quot;Reverse engineering the Azure Application Insights Transactions URL&quot; with a screenshot of the Transactions screen in the Azure Portal",src:n(1189).Z,width:"800",height:"450"})),(0,a.kt)("h2",r({},{id:"bring-me-the-logs"}),"Bring me the logs!"),(0,a.kt)("p",null,"If you've ever supported a production system, you will know this to be true: logs matter. Logs help you understand what's gone wrong. (You're never looking at logs when something has gone right.) When it comes to Azure, logs tend to reside in Application Insights, specifically Transactions:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of the Azure Application Insights Transaction Search screen",src:n(84007).Z,width:"1828",height:"1202"})),(0,a.kt)("p",null,"Whilst Transaction Search is very powerful, it can also be a little tough to find the things that you need. In a system I'm working on now, we've found ourselves building an application that allows us to provide support. We use it to bring together disparate pieces of information across our estate. As we use it, we're usually looking at a particular slice of time. If we don't find what we need in our application we'll find a need to dig into the logs for the same period."),(0,a.kt)("p",null,"Rather than manually logging into Azure, finding Application Insights, going to Transactions and entering the time period, what if we could just go there at the click of a link? We can."),(0,a.kt)("p",null,'Look at the screenshot above, do you see the "Copy link" button? That button copies a URL to the clipboard which encapsulates the current search criteria. And it turns out we can reverse engineer it!'),(0,a.kt)("h2",r({},{id:"breaking-down-the-link"}),"Breaking down the link"),(0,a.kt)("p",null,"First of all, let's take a look at the incredibly long URL that's copied to the clipboard:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-text"}),"https://portal.azure.com/#blade/AppInsightsExtension/BladeRedirect/BladeName/searchV1/ResourceId/%2Fsubscriptions%2F4e41a677-9a57-4a7c-9c4c-e71bae5d998e%2Fresourcegroups%2Frg-maas-shared-storage-dev-001%2Fproviders%2Fmicrosoft.insights%2Fcomponents%2Fappi-maas-shared-dev/BladeInputs/%7B%22tables%22%3A%5B%22traces%22%5D%2C%22timeContextWhereClause%22%3A%22%7C+where+timestamp+%3E+datetime(%5C%222022-05-03T10%3A04%3A33.267Z%5C%22)+and+timestamp+%3C+datetime(%5C%222022-05-03T10%3A34%3A33.267Z%5C%22)%22%2C%22filterWhereClause%22%3A%22%7C+where+severityLevel+in+(%5C%223%5C%22)%7C+where+*+has+%5C%22healthcheck%5C%22%7C+order+by+timestamp+desc%22%2C%22originalParams%22%3A%7B%22eventTypes%22%3A%5B%7B%22value%22%3A%22availabilityResult%22%2C%22tableName%22%3A%22availabilityResults%22%2C%22label%22%3A%22Availability%22%7D%2C%7B%22value%22%3A%22request%22%2C%22tableName%22%3A%22requests%22%2C%22label%22%3A%22Request%22%7D%2C%7B%22value%22%3A%22exception%22%2C%22tableName%22%3A%22exceptions%22%2C%22label%22%3A%22Exception%22%7D%2C%7B%22value%22%3A%22pageView%22%2C%22tableName%22%3A%22pageViews%22%2C%22label%22%3A%22Page+View%22%7D%2C%7B%22value%22%3A%22trace%22%2C%22tableName%22%3A%22traces%22%2C%22label%22%3A%22Trace%22%7D%2C%7B%22value%22%3A%22customEvent%22%2C%22tableName%22%3A%22customEvents%22%2C%22label%22%3A%22Custom+Event%22%7D%2C%7B%22value%22%3A%22dependency%22%2C%22tableName%22%3A%22dependencies%22%2C%22label%22%3A%22Dependency%22%7D%5D%2C%22timeContext%22%3A%7B%22durationMs%22%3A1800000%2C%22endTime%22%3A%222022-05-03T10%3A34%3A33.267Z%22%7D%2C%22filter%22%3A%5B%5D%2C%22searchPhrase%22%3A%7B%22originalPhrase%22%3A%22healthcheck%22%2C%22_tokens%22%3A%5B%7B%22conjunction%22%3A%22and%22%2C%22value%22%3A%22healthcheck%22%2C%22isNot%22%3Afalse%2C%22kql%22%3A%22+*+has+%5C%22healthcheck%5C%22%22%7D%5D%7D%2C%22sort%22%3A%22desc%22%7D%7D\n")),(0,a.kt)("p",null,"There's 1860 characters in there. That's a lot - but still less than the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers"}),"general limit of 2000 characters"),". This mighty long URL can be broken down into four distinct parts. Let's break it down:"),(0,a.kt)("h3",r({},{id:"1-main-azure-portal-routing"}),"1. Main Azure Portal routing"),(0,a.kt)("p",null,"Firstly this:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-text"}),"https://portal.azure.com/#blade/AppInsightsExtension/BladeRedirect/BladeName/searchV1/ResourceId/\n")),(0,a.kt)("p",null,"This is a recognisable base URL and takes us to the relevant part of the Azure Portal."),(0,a.kt)("h3",r({},{id:"2-resourceid"}),"2. ResourceId"),(0,a.kt)("p",null,"Next we have a URL encoded ResourceId:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-text"}),"%2Fsubscriptions%2F4e41a677-9a57-4a7c-9c4c-e71bae5d998e%2Fresourcegroups%2Frg-maas-shared-storage-dev-001%2Fproviders%2Fmicrosoft.insights%2Fcomponents%2Fappi-maas-shared-dev\n")),(0,a.kt)("p",null,"If we run it through ",(0,a.kt)("inlineCode",{parentName:"p"},"decodeURIComponent")," you can see it in it's raw form:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"decodeURIComponent(\n  '%2Fsubscriptions%2F4e41a677-9a57-4a7c-9c4c-e71bae5d998e%2Fresourcegroups%2Frg-maas-shared-storage-dev-001%2Fproviders%2Fmicrosoft.insights%2Fcomponents%2Fappi-maas-shared-dev'\n);\n\n// creates: /subscriptions/4e41a677-9a57-4a7c-9c4c-e71bae5d998e/resourcegroups/rg-maas-shared-storage-dev-001/providers/microsoft.insights/components/appi-maas-shared-dev'\n")),(0,a.kt)("p",null,"This is the ResourceId of the Application Insights instance that we're looking at. This is the same as the one we saw in the URL when we were looking at the Application Insights instance in the Azure Portal, and it's the ResourceId that can be obtained by clicking on the \"JSON View\" link:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of the application insights overview screen with a JSON View icon on the right",src:n(19487).Z,width:"2538",height:"190"})),(0,a.kt)("h3",r({},{id:"3-more-azure-portal-routing"}),"3. More Azure Portal routing"),(0,a.kt)("p",null,"The next part of the URL is just some more Azure Portal routing:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-text"}),"/BladeInputs/\n")),(0,a.kt)("h3",r({},{id:"4-the-query"}),"4. The query"),(0,a.kt)("p",null,"Finally we have the (very long) query:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-text"}),"%7B%22tables%22%3A%5B%22traces%22%5D%2C%22timeContextWhereClause%22%3A%22%7C+where+timestamp+%3E+datetime(%5C%222022-05-03T10%3A04%3A33.267Z%5C%22)+and+timestamp+%3C+datetime(%5C%222022-05-03T10%3A34%3A33.267Z%5C%22)%22%2C%22filterWhereClause%22%3A%22%7C+where+severityLevel+in+(%5C%223%5C%22)%7C+where+_+has+%5C%22healthcheck%5C%22%7C+order+by+timestamp+desc%22%2C%22originalParams%22%3A%7B%22eventTypes%22%3A%5B%7B%22value%22%3A%22availabilityResult%22%2C%22tableName%22%3A%22availabilityResults%22%2C%22label%22%3A%22Availability%22%7D%2C%7B%22value%22%3A%22request%22%2C%22tableName%22%3A%22requests%22%2C%22label%22%3A%22Request%22%7D%2C%7B%22value%22%3A%22exception%22%2C%22tableName%22%3A%22exceptions%22%2C%22label%22%3A%22Exception%22%7D%2C%7B%22value%22%3A%22pageView%22%2C%22tableName%22%3A%22pageViews%22%2C%22label%22%3A%22Page+View%22%7D%2C%7B%22value%22%3A%22trace%22%2C%22tableName%22%3A%22traces%22%2C%22label%22%3A%22Trace%22%7D%2C%7B%22value%22%3A%22customEvent%22%2C%22tableName%22%3A%22customEvents%22%2C%22label%22%3A%22Custom+Event%22%7D%2C%7B%22value%22%3A%22dependency%22%2C%22tableName%22%3A%22dependencies%22%2C%22label%22%3A%22Dependency%22%7D%5D%2C%22timeContext%22%3A%7B%22durationMs%22%3A1800000%2C%22endTime%22%3A%222022-05-03T10%3A34%3A33.267Z%22%7D%2C%22filter%22%3A%5B%5D%2C%22searchPhrase%22%3A%7B%22originalPhrase%22%3A%22healthcheck%22%2C%22_tokens%22%3A%5B%7B%22conjunction%22%3A%22and%22%2C%22value%22%3A%22healthcheck%22%2C%22isNot%22%3Afalse%2C%22kql%22%3A%22+_+has+%5C%22healthcheck%5C%22%22%7D%5D%7D%2C%22sort%22%3A%22desc%22%7D%7D\n")),(0,a.kt)("p",null,"Initially this doesn't look like much. It's just a long string of characters. But if we run it through ",(0,a.kt)("inlineCode",{parentName:"p"},"decodeURIComponent")," we can see that it's actually a JSON object:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),'decodeURIComponent(\n  \'%7B%22tables%22%3A%5B%22traces%22%5D%2C%22timeContextWhereClause%22%3A%22%7C+where+timestamp+%3E+datetime(%5C%222022-05-03T10%3A04%3A33.267Z%5C%22)+and+timestamp+%3C+datetime(%5C%222022-05-03T10%3A34%3A33.267Z%5C%22)%22%2C%22filterWhereClause%22%3A%22%7C+where+severityLevel+in+(%5C%223%5C%22)%7C+where+_+has+%5C%22healthcheck%5C%22%7C+order+by+timestamp+desc%22%2C%22originalParams%22%3A%7B%22eventTypes%22%3A%5B%7B%22value%22%3A%22availabilityResult%22%2C%22tableName%22%3A%22availabilityResults%22%2C%22label%22%3A%22Availability%22%7D%2C%7B%22value%22%3A%22request%22%2C%22tableName%22%3A%22requests%22%2C%22label%22%3A%22Request%22%7D%2C%7B%22value%22%3A%22exception%22%2C%22tableName%22%3A%22exceptions%22%2C%22label%22%3A%22Exception%22%7D%2C%7B%22value%22%3A%22pageView%22%2C%22tableName%22%3A%22pageViews%22%2C%22label%22%3A%22Page+View%22%7D%2C%7B%22value%22%3A%22trace%22%2C%22tableName%22%3A%22traces%22%2C%22label%22%3A%22Trace%22%7D%2C%7B%22value%22%3A%22customEvent%22%2C%22tableName%22%3A%22customEvents%22%2C%22label%22%3A%22Custom+Event%22%7D%2C%7B%22value%22%3A%22dependency%22%2C%22tableName%22%3A%22dependencies%22%2C%22label%22%3A%22Dependency%22%7D%5D%2C%22timeContext%22%3A%7B%22durationMs%22%3A1800000%2C%22endTime%22%3A%222022-05-03T10%3A34%3A33.267Z%22%7D%2C%22filter%22%3A%5B%5D%2C%22searchPhrase%22%3A%7B%22originalPhrase%22%3A%22healthcheck%22%2C%22_tokens%22%3A%5B%7B%22conjunction%22%3A%22and%22%2C%22value%22%3A%22healthcheck%22%2C%22isNot%22%3Afalse%2C%22kql%22%3A%22+_+has+%5C%22healthcheck%5C%22%22%7D%5D%7D%2C%22sort%22%3A%22desc%22%7D%7D\'\n);\n\n// creates: \'{"tables":["traces"],"timeContextWhereClause":"|+where+timestamp+>+datetime(\\\\"2022-05-03T10:04:33.267Z\\\\")+and+timestamp+<+datetime(\\\\"2022-05-03T10:34:33.267Z\\\\")","filterWhereClause":"|+where+severityLevel+in+(\\\\"3\\\\")|+where+_+has+\\\\"healthcheck\\\\"|+order+by+timestamp+desc","originalParams":{"eventTypes":[{"value":"availabilityResult","tableName":"availabilityResults","label":"Availability"},{"value":"request","tableName":"requests","label":"Request"},{"value":"exception","tableName":"exceptions","label":"Exception"},{"value":"pageView","tableName":"pageViews","label":"Page+View"},{"value":"trace","tableName":"traces","label":"Trace"},{"value":"customEvent","tableName":"customEvents","label":"Custom+Event"},{"value":"dependency","tableName":"dependencies","label":"Dependency"}],"timeContext":{"durationMs":1800000,"endTime":"2022-05-03T10:34:33.267Z"},"filter":[],"searchPhrase":{"originalPhrase":"healthcheck","_tokens":[{"conjunction":"and","value":"healthcheck","isNot":false,"kql":"+_+has+\\\\"healthcheck\\\\""}]},"sort":"desc"}}\'\n')),(0,a.kt)("p",null,"And if we parse that JSON object we get:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "tables": ["traces"],\n  "timeContextWhereClause": "|+where+timestamp+>+datetime(\\"2022-05-03T10:04:33.267Z\\")+and+timestamp+<+datetime(\\"2022-05-03T10:34:33.267Z\\")",\n  "filterWhereClause": "|+where+severityLevel+in+(\\"3\\")|+where+_+has+\\"healthcheck\\"|+order+by+timestamp+desc",\n  "originalParams": {\n    "eventTypes": [\n      {\n        "value": "availabilityResult",\n        "tableName": "availabilityResults",\n        "label": "Availability"\n      },\n      {\n        "value": "request",\n        "tableName": "requests",\n        "label": "Request"\n      },\n      {\n        "value": "exception",\n        "tableName": "exceptions",\n        "label": "Exception"\n      },\n      {\n        "value": "pageView",\n        "tableName": "pageViews",\n        "label": "Page+View"\n      },\n      {\n        "value": "trace",\n        "tableName": "traces",\n        "label": "Trace"\n      },\n      {\n        "value": "customEvent",\n        "tableName": "customEvents",\n        "label": "Custom+Event"\n      },\n      {\n        "value": "dependency",\n        "tableName": "dependencies",\n        "label": "Dependency"\n      }\n    ],\n    "timeContext": {\n      "durationMs": 1800000,\n      "endTime": "2022-05-03T10:34:33.267Z"\n    },\n    "filter": [],\n    "searchPhrase": {\n      "originalPhrase": "healthcheck",\n      "_tokens": [\n        {\n          "conjunction": "and",\n          "value": "healthcheck",\n          "isNot": false,\n          "kql": "+_+has+\\"healthcheck\\""\n        }\n      ]\n    },\n    "sort": "desc"\n  }\n}\n')),(0,a.kt)("p",null,"We can clearly see in the object above the aspects that contribute to our query. It's worth highlighting that when I generated the above query, I had the ",(0,a.kt)("inlineCode",{parentName:"p"},"traces"),' table selected and I was searching for the phrase "healthcheck". If I had selected ',(0,a.kt)("inlineCode",{parentName:"p"},"requests")," instead, the ",(0,a.kt)("inlineCode",{parentName:"p"},"tables")," array would have contained ",(0,a.kt)("inlineCode",{parentName:"p"},"requests")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"traces"),". If I had been searching for a different phrase, the ",(0,a.kt)("inlineCode",{parentName:"p"},"searchPhrase")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"filterWhereClause")," objects would have contained different values."),(0,a.kt)("h2",r({},{id:"reverse-engineering-a-link"}),"Reverse engineering a link"),(0,a.kt)("p",null,"Now that we understand what makes up a URL, we're safe to build our own mechanisms to generate a URL."),(0,a.kt)("h2",r({},{id:"typescript-url-builder"}),"TypeScript URL builder"),(0,a.kt)("p",null,"We'll start by creating the TypeScript version of the URL builder. We'll start by creating a new file called ",(0,a.kt)("inlineCode",{parentName:"p"},"urlBuilder.ts")," and we'll add the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"function makeAzureApplicationInsightsTransactionUrl({\n  applicationInsightsId,\n  endDate,\n  startDate,\n}: {\n  applicationInsightsId: string;\n  startDate: Date;\n  endDate: Date;\n}) {\n  const endDateAsString = endDate.toISOString(); // eg 2022-05-03T14:22:51.180Z\n  const startDateAsString = startDate.toISOString();\n  const durationMs = endDate.getTime() - startDate.getTime();\n  const logsQuery = {\n    tables: [\n      'availabilityResults',\n      'requests',\n      'exceptions',\n      'pageViews',\n      'traces',\n      'customEvents',\n      'dependencies',\n    ],\n    timeContextWhereClause: `| where timestamp > datetime(${startDateAsString}) and timestamp < datetime(\"${endDateAsString}\")`,\n    filterWhereClause: '| order by timestamp desc',\n    originalParams: {\n      eventTypes: [\n        {\n          value: 'availabilityResult',\n          tableName: 'availabilityResults',\n          label: 'Availability',\n        },\n        { value: 'request', tableName: 'requests', label: 'Request' },\n        {\n          value: 'exception',\n          tableName: 'exceptions',\n          label: 'Exception',\n        },\n        {\n          value: 'pageView',\n          tableName: 'pageViews',\n          label: 'Page View',\n        },\n        { value: 'trace', tableName: 'traces', label: 'Trace' },\n        {\n          value: 'customEvent',\n          tableName: 'customEvents',\n          label: 'Custom Event',\n        },\n        {\n          value: 'dependency',\n          tableName: 'dependencies',\n          label: 'Dependency',\n        },\n      ],\n      timeContext: {\n        durationMs: durationMs,\n        endTime: endDateAsString,\n      },\n      filter: [],\n      searchPhrase: {\n        originalPhrase: '',\n        _tokens: [],\n      },\n      sort: 'desc',\n    },\n  };\n\n  const baseUrl = `https://portal.azure.com/#blade/AppInsightsExtension/BladeRedirect/BladeName/searchV1/ResourceId/`;\n  const encodedApplicationInsightsId = encodeURIComponent(\n    applicationInsightsId\n  );\n  const moreRouting = `/BladeInputs/`;\n  const encodedLogsQuery = encodeURIComponent(JSON.stringify(logsQuery));\n  const logsUrl = `${baseUrl}${encodedApplicationInsightsId}${moreRouting}${encodedLogsQuery}`;\n\n  return logsUrl;\n}\n")),(0,a.kt)("p",null,"The above code is a function that takes in an object with the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"applicationInsightsId")," - the ID of the Application Insights resource"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"startDate")," - the start date of the time range"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"endDate")," - the end date of the time range")),(0,a.kt)("p",null,"You can see that it takes these inputs and uses them to build up a URL made up of the four sections we identified earlier."),(0,a.kt)("p",null,"The URL it generates is the URL that will open the Application Insights logs blade in the Azure portal with the time range selected. This code is not including any kind of search phrase, but it could easily be adjusted to cater for that."),(0,a.kt)("h2",r({},{id:"c-url-builder"}),"C# URL builder"),(0,a.kt)("p",null,"We can do the same thing in C#. It's a bit more verbose than the TypeScript version, but it's still pretty straightforward. We'll create a new file called ",(0,a.kt)("inlineCode",{parentName:"p"},"UrlBuilder.cs")," and add the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cs"}),'using System.Collections.Generic;\nusing Newtonsoft.Json;\n\nnamespace AzureApplicationInsightsTransactionSearchUrl\n{\n  public static class UrlBuilder\n  {\n    /// <summary>\n    /// eg 2022-05-03T14:22:51.180Z\n    /// </summary>\n    public static string ToAzureLogsString(this DateTime value) =>\n        value.ToString("yyyy-MM-ddTHH:mm:ss.fffK", CultureInfo.InvariantCulture);\n\n    public static string MakeAzureApplicationInsightsTransactionUrl(\n      string applicationInsightsId,\n      DateTime startDate,\n      DateTime endDate\n    )\n    {\n      var endDateAsString = endDate.ToAzureLogsString();\n      var startDateAsString = startDate.ToAzureLogsString();\n      var durationMs = Convert.ToInt32((endDate - startDate).TotalMilliseconds);\n\n      var logsQuery = new LogsQuery(\n        Tables: new List<string> {\n          "availabilityResults",\n          "requests",\n          "exceptions",\n          "pageViews",\n          "traces",\n          "customEvents",\n          "dependencies"\n        },\n        TimeContextWhereClause: $"| where timestamp > datetime(\\"{startDateAsString}\\") and timestamp < datetime(\\"{endDateAsString}\\")",\n        FilterWhereClause: $"| order by timestamp desc",\n        OriginalParams: new OriginalParams(\n          EventTypes: new List<EventType>\n          {\n            new (\n                Value: "availabilityResult",\n                TableName: "availabilityResults",\n                Label: "Availability"\n            ),\n            new (\n                Value: "request",\n                TableName: "requests",\n                Label: "Request"\n            ),\n            new (\n                Value: "exception",\n                TableName: "exceptions",\n                Label: "Exception"\n            ),\n            new (\n                Value: "pageView",\n                TableName: "pageViews",\n                Label: "Page View"\n            ),\n            new (\n                Value: "trace",\n                TableName: "traces",\n                Label: "Trace"\n            ),\n            new (\n                Value: "customEvent",\n                TableName: "customEvents",\n                Label: "Custom Event"\n            ),\n            new (\n                Value: "dependency",\n                TableName: "dependencies",\n                Label: "Dependency"\n            ),\n          },\n          TimeContext: new TimeContext(\n              DurationMs: durationMs,\n              EndTime: endDateAsString\n          ),\n          Filter: new List<Filter>(),\n          SearchPhrase: new SearchPhrase(\n              OriginalPhrase: "",\n              Tokens: new List<Token>()\n          ),\n          Sort: "desc"\n        )\n      );\n\n      var baseUrl = "https://portal.azure.com/#blade/AppInsightsExtension/BladeRedirect/BladeName/searchV1/ResourceId/";\n      var encodedApplicationInsightsId = WebUtility.UrlEncode(applicationInsightsId);\n      var moreRouting = "/BladeInputs/";\n      var encodedLogsQuery = WebUtility.UrlEncode(JsonConvert.SerializeObject(logsQuery));\n      var logsUrl = $"{baseUrl}{encodedApplicationInsightsId}{moreRouting}{encodedLogsQuery}";\n\n      return logsUrl;\n    }\n  }\n\n  public record EventType(\n      [property: JsonProperty("value")] string Value,\n      [property: JsonProperty("tableName")] string TableName,\n      [property: JsonProperty("label")] string Label\n  );\n\n  public record TimeContext(\n      [property: JsonProperty("durationMs")] int DurationMs,\n      [property: JsonProperty("endTime")] string EndTime\n  );\n\n  public record Dimension(\n      [property: JsonProperty("displayName")] string DisplayName,\n      [property: JsonProperty("tables")] IReadOnlyList<string> Tables,\n      [property: JsonProperty("name")] string Name,\n      [property: JsonProperty("draftKey")] string DraftKey\n  );\n\n  public record Operator(\n      [property: JsonProperty("label")] string Label,\n      [property: JsonProperty("value")] string Value,\n      [property: JsonProperty("isSelected")] bool IsSelected\n  );\n\n  public record Filter(\n      [property: JsonProperty("dimension")] Dimension Dimension,\n      [property: JsonProperty("values")] IReadOnlyList<string> Values,\n      [property: JsonProperty("operator")] Operator Operator\n  );\n\n  public record Token(\n      [property: JsonProperty("conjunction")] string Conjunction,\n      [property: JsonProperty("value")] string Value,\n      [property: JsonProperty("isNot")] bool IsNot,\n      [property: JsonProperty("kql")] string Kql\n  );\n\n  public record SearchPhrase(\n      [property: JsonProperty("originalPhrase")] string OriginalPhrase,\n      [property: JsonProperty("_tokens")] IReadOnlyList<Token> Tokens\n  );\n\n  public record OriginalParams(\n      [property: JsonProperty("eventTypes")] IReadOnlyList<EventType> EventTypes,\n      [property: JsonProperty("timeContext")] TimeContext TimeContext,\n      [property: JsonProperty("filter")] IReadOnlyList<Filter> Filter,\n      [property: JsonProperty("searchPhrase")] SearchPhrase SearchPhrase,\n      [property: JsonProperty("sort")] string Sort\n  );\n\n  public record LogsQuery(\n      [property: JsonProperty("tables")] IReadOnlyList<string> Tables,\n      [property: JsonProperty("timeContextWhereClause")] string TimeContextWhereClause,\n      [property: JsonProperty("filterWhereClause")] string FilterWhereClause,\n      [property: JsonProperty("originalParams")] OriginalParams OriginalParams\n  );\n}\n')),(0,a.kt)("p",null,"Note that most of the verbosity comes from the fact that we're using C# 9 record types to represent the JSON objects that we're serializing. If you're not familiar with C# 9 ",(0,a.kt)("a",r({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-9#record-types"}),"record types"),". We're also using JSON.Net for our serialization, but you could use System.Text.Json if you wanted to. You would need to amend the ",(0,a.kt)("inlineCode",{parentName:"p"},"JsonProperty")," attributes to be ",(0,a.kt)("inlineCode",{parentName:"p"},"JsonPropertyName")," attributes instead."),(0,a.kt)("h2",r({},{id:"conclusion"}),"Conclusion"),(0,a.kt)("p",null,"In this post we've understood what goes into the URL for Application Insights Transactions, and we've seen how to generate that URL in TypeScript and C#. We've also seen how to use the URL to search for transactions in Application Insights. I hope you found this post useful. Thanks for reading!"))}h.isMDXComponent=!0},19487:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-application-insights-overview-ab9b002ad2d38bfd7f73ed221c9df952.png"},84007:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-application-insights-transaction-search-d83ae6f0d987fad63200bdfa60dcd9fa.png"},1189:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/title-image-266dde76087b5bc181fc9bf730d1a868.png"}}]);