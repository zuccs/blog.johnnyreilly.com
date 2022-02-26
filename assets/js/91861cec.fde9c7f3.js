"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[48523],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=o,h=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return a?n.createElement(h,r(r({ref:t},m),{},{components:a})):n.createElement(h,r({ref:t},m))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},96164:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return m},toc:function(){return p},default:function(){return u}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=["components"],l={title:"Giving OData to CRM 4.0",authors:"johnnyreilly",tags:["OData","WCF Data Services","CRM 4.0","LINQ"],hide_table_of_contents:!1},s=void 0,c={permalink:"/2012/09/24/giving-odata-to-crm-40",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-09-24-giving-odata-to-crm-40/index.md",source:"@site/blog/2012-09-24-giving-odata-to-crm-40/index.md",title:"Giving OData to CRM 4.0",description:"Just recently I was tasked with seeing if we could provide a way to access our Dynamics CRM instance via OData. My initial investigations made it seem like there was nothing for me to do; CRM 2011 provides OData support out of the box. Small problem. We were running CRM 4.0.",date:"2012-09-24T00:00:00.000Z",formattedDate:"September 24, 2012",tags:[{label:"OData",permalink:"/tags/o-data"},{label:"WCF Data Services",permalink:"/tags/wcf-data-services"},{label:"CRM 4.0",permalink:"/tags/crm-4-0"},{label:"LINQ",permalink:"/tags/linq"}],readingTime:3.715,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Giving OData to CRM 4.0",authors:"johnnyreilly",tags:["OData","WCF Data Services","CRM 4.0","LINQ"],hide_table_of_contents:!1},prevItem:{title:"Unit Testing and Entity Framework: The Filth and the Fury",permalink:"/2012/10/03/unit-testing-and-entity-framework-filth"},nextItem:{title:"Globalize and jQuery Validation",permalink:"/2012/09/06/globalize-and-jquery-validate"}},m={authorsImageUrls:[void 0]},p=[{value:"LINQ to CRM",id:"linq-to-crm",level:2},{value:"Make me an OData Service",id:"make-me-an-odata-service",level:2},{value:"Now, a warning...",id:"now-a-warning",level:2},{value:"Finishing off",id:"finishing-off",level:2}],d={toc:p};function u(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Just recently I was tasked with seeing if we could provide a way to access our Dynamics CRM instance via OData. My initial investigations made it seem like there was nothing for me to do; ",(0,i.kt)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/gg309461.aspx"},"CRM 2011 provides OData support out of the box"),". Small problem. We were running CRM 4.0."),(0,i.kt)("p",null,"It could well have ended there apart from the fact that Microsoft makes it astonishingly easy to to create your own OData service using WCF Data Services. Because it's so straightforward I was able to get an OData solution for CRM 4.0 up and running with very little heavy lifting at all. Want to know how it's done?"),(0,i.kt)("h2",{id:"linq-to-crm"},"LINQ to CRM"),(0,i.kt)("p",null,"To start with you're going to need the ",(0,i.kt)("a",{parentName:"p",href:"http://www.microsoft.com/en-us/download/details.aspx?id=38"},"CRM SDK 4.0"),'. This contains a "vanilla" LINQ to CRM client which is used in each of the example applications that can be found in ',(0,i.kt)("inlineCode",{parentName:"p"},"microsoft.xrm\\samples"),". We want this client (or something very like it) to use as the basis for our OData service."),(0,i.kt)("p",null,"In order to get a LINQ to CRM provider that caters for your own customised CRM instance you need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"crmsvcutil")," utility from the CRM SDK (found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"microsoft.xrm\\tools\\")," directory). Detailed instructions on how to use this can be found in this Word document: ",(0,i.kt)("inlineCode",{parentName:"p"},"microsoft.xrm\\advanced_developer_extensions_-_developers_guide.docx"),". Extra information around the topic can be found using these links:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://msdn.microsoft.com/en-us/library/ff681559"},"MSDN docs on xRM")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://msdn.microsoft.com/en-us/library/ff681573"},"MSDN examples of LINQ queries")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.dynamicscrmtrickbag.com/"},"CRM blog site")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://community.adxstudio.com/products/adxstudio-portals/developers-guide/archive/linq-to-crm-22/"},"Another site listing examples of LINQ to CRM"))),(0,i.kt)("p",null,"You should end up with custom generated data context classes which look not dissimilar to similar classes that you may already have in place for Entity Framework etc. With your ",(0,i.kt)("inlineCode",{parentName:"p"},"Xrm.DataContext")," in hand (a subclass of ",(0,i.kt)("inlineCode",{parentName:"p"},"Microsoft.Xrm.Client.Data.Services.CrmDataContext"),") you'll be ready to move forwards."),(0,i.kt)("h2",{id:"make-me-an-odata-service"},"Make me an OData Service"),(0,i.kt)("p",null,"As I said, Microsoft makes it fantastically easy to get an OData service up and running. ",(0,i.kt)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-US/library/dd728275"},"In this example")," an entity context model is created from the Northwind database and then exposed as an OData service. To create my CRM OData service I followed a similar process. But rather than creating an entity context model using a database I plugged in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Xrm.DataContext")," instance of CRM that we created a moment ago. These are the steps I followed to make my service:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Create a new ASP.NET Web Application called "CrmOData" (in case it\'s relevant I was using Visual Studio 2010 to do this).')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Remove all ASPXs / JavaScript / CSS files etc leaving you with an essentially empty project.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add references to the following DLLs that come with the SDK: - microsoft.crm.sdk.dll"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"microsoft.crm.sdktypeproxy.dll"),(0,i.kt)("li",{parentName:"ul"},"microsoft.crm.sdktypeproxy.xmlserializers.dll"),(0,i.kt)("li",{parentName:"ul"},"microsoft.xrm.client.dll"),(0,i.kt)("li",{parentName:"ul"},"microsoft.xrm.portal.dll"),(0,i.kt)("li",{parentName:"ul"},"microsoft.xrm.portal.files.dll"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the ",(0,i.kt)("inlineCode",{parentName:"p"},"&lt;microsoft.xrm.client&gt;")," config section to your web.config (not forgetting the associated Xrm connection string)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add this new file below to the root of the project:"))),(0,i.kt)("script",{src:"https://gist.github.com/3765280.js?file=Crm.svc.cs"}),(0,i.kt)("p",null,"And that's it - done. When you run this web application you will find an OData service exposed at http://localhost:12345/Crm.svc. You could have it even simpler if you wanted - you could pull out the logging that's in place and leave only the ",(0,i.kt)("inlineCode",{parentName:"p"},"InitializeService")," there. That's all you need. (The ",(0,i.kt)("inlineCode",{parentName:"p"},"GetEntityById")," method is a helper method of my own for identifying the GUIDs of CRM.)"),(0,i.kt)("p",null,"You may have noticed that I have made use of caching for my OData service following the steps I found ",(0,i.kt)("a",{parentName:"p",href:"https://blogs.msdn.com/b/peter_qian/archive/2010/11/17/using-asp-net-output-caching-with-wcf-data-services.aspx"},"here"),". Again you may or may not want to use this."),(0,i.kt)("h2",{id:"now-a-warning"},"Now, a warning..."),(0,i.kt)("p",null,"Okay - not so much a warning as a limitation. Whilst most aspects of the OData service work as you would hope there is no support for the $select operator. I had a frustrating time trying to discover why and then came upon this explanation:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},'"$select statements are not supported. This problem is being discussed here ',(0,i.kt)("a",{parentName:"em",href:"http://social.msdn.microsoft.com/Forums/en/adodotnetdataservices/thread/366086ee-dcef-496a-ad15-f461788ae678"},"http://social.msdn.microsoft.com/Forums/en/adodotnetdataservices/thread/366086ee-dcef-496a-ad15-f461788ae678"),' and is caused by the fact that CrmDataContext implements the IExpandProvider interface which in turn causes the DataService to lose support for $select projections"')),(0,i.kt)("p",null,"You can also see ",(0,i.kt)("a",{parentName:"p",href:"http://social.microsoft.com/Forums/en/crmdevelopment/thread/31daedb4-3d75-483a-8d7f-269af3375d74"},"here")," for the original post discussing this."),(0,i.kt)("h2",{id:"finishing-off"},"Finishing off"),(0,i.kt)("p",null,"In the example I set out here I used the version of WCF Data Services that shipped with Visual Studio 2010. WCF Data Services now ships separately from the .NET Framework and you can ",(0,i.kt)("a",{parentName:"p",href:"http://nuget.org/packages?q=wcf+data+services"},"pick up the latest and greatest from Nuget"),". I understand that you could easily switch over to using the latest versions but since I didn't see any feature that I needed on this occasion I haven't."),(0,i.kt)("p",null,"I hope you find this useful."))}u.isMDXComponent=!0}}]);