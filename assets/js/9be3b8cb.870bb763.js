"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[95139],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),y=l,m=c["".concat(o,".").concat(y)]||c[y]||d[y]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},366:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return y},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(87462),l=n(63366),i=(n(67294),n(3905)),r=["components"],s={title:"The Service Now API and TypeScript Conditional Types",authors:"johnnyreilly",tags:["Service Now","Table API","Change Request","change_request","sysparm_display_value","TypeScript","conditional types"],image:"./ts-ervice-now.png",hide_table_of_contents:!1},o=void 0,p={permalink:"/2021/04/24/service-now-api-and-typescript-conditional-types",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-04-24-service-now-api-and-typescript-conditional-types/index.md",source:"@site/blog/2021-04-24-service-now-api-and-typescript-conditional-types/index.md",title:"The Service Now API and TypeScript Conditional Types",description:"The Service Now REST API is an API which allows you to interact with Service Now. It produces different shaped results based upon the sysparmdisplayvalue query parameter. This post looks at how we can model these API results with TypeScripts conditional types. The aim being to minimise repetition whilst remaining strongly typed. This post is specifically about the Service Now API, but the principles around conditional type usage are generally applicable.",date:"2021-04-24T00:00:00.000Z",formattedDate:"April 24, 2021",tags:[{label:"Service Now",permalink:"/tags/service-now"},{label:"Table API",permalink:"/tags/table-api"},{label:"Change Request",permalink:"/tags/change-request"},{label:"sysparm_display_value",permalink:"/tags/sysparm-display-value"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"conditional types",permalink:"/tags/conditional-types"}],readingTime:7.75,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"The Service Now API and TypeScript Conditional Types",authors:"johnnyreilly",tags:["Service Now","Table API","Change Request","change_request","sysparm_display_value","TypeScript","conditional types"],image:"./ts-ervice-now.png",hide_table_of_contents:!1},prevItem:{title:"Blog Archive for Docusaurus",permalink:"/2021/05/01/blog-archive-for-docusaurus"},nextItem:{title:"ts-loader goes webpack 5",permalink:"/2021/04/20/ts-loader-goes-webpack-5"}},u={image:n(48025).Z,authorsImageUrls:[void 0]},d=[{value:"The power of a query parameter",id:"the-power-of-a-query-parameter",level:2},{value:"Type Definition time",id:"type-definition-time",level:2},{value:"Making a <code>PropertyValue</code> type",id:"making-a-propertyvalue-type",level:2},{value:"Service Now Change Request States",id:"service-now-change-request-states",level:2},{value:"Making a <code>LinkValue</code> type",id:"making-a-linkvalue-type",level:2},{value:"Making our complete type",id:"making-our-complete-type",level:2}],c={toc:d};function y(e){var t=e.components,s=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.servicenow.com/bundle/paris-application-development/page/build/applications/concept/api-rest.html"},"Service Now REST API")," is an API which allows you to interact with Service Now. It produces different shaped results based upon the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.servicenow.com/bundle/paris-application-development/page/integrate/inbound-rest/concept/c_TableAPI.html#c_TableAPI__table-GET"},(0,i.kt)("inlineCode",{parentName:"a"},"sysparm_display_value")," query parameter"),". This post looks at how we can model these API results with TypeScripts conditional types. The aim being to minimise repetition whilst remaining strongly typed. This post is specifically about the Service Now API, but the principles around conditional type usage are generally applicable."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Service Now and TypeScript",src:n(48025).Z,width:"535",height:"76"})),(0,i.kt)("h2",{id:"the-power-of-a-query-parameter"},"The power of a query parameter"),(0,i.kt)("p",null,"There is a query parameter which many endpoints in Service Nows Table API support named ",(0,i.kt)("inlineCode",{parentName:"p"},"sysparm_display_value"),". The docs describe it thus:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Data retrieval operation for reference and choice fields.\nBased on this value, retrieves the display value and/or the actual value from the database."),(0,i.kt)("p",{parentName:"blockquote"},"Valid values:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"true"),": Returns the display values for all fields."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"false"),": Returns the actual values from the database."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"all"),": Returns both actual and display value"))),(0,i.kt)("p",null,"Let's see what that looks like when it comes to loading a Change Request. Consider the following curls:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# sysparm_display_value=all\ncurl \"https://ourcompanyinstance.service-now.com/api/now/table/change_request?sysparm_query=number=CHG0122585&sysparm_limit=1&sysparm_display_value=all\" --request GET --header \"Accept:application/json\" --user 'API_USERNAME':'API_PASSWORD' | jq '.result[0] | { state, sys_id, number, requested_by, reason }'\n\n# sysparm_display_value=true\ncurl \"https://ourcompanyinstance.service-now.com/api/now/table/change_request?sysparm_query=number=CHG0122585&sysparm_limit=1&sysparm_display_value=true\" --request GET --header \"Accept:application/json\" --user 'API_USERNAME':'API_PASSWORD' | jq '.result[0] | { state, sys_id, number, requested_by, reason }'\n\n# sysparm_display_value=false\ncurl \"https://ourcompanyinstance.service-now.com/api/now/table/change_request?sysparm_query=number=CHG0122585&sysparm_limit=1&sysparm_display_value=false\" --request GET --header \"Accept:application/json\" --user 'API_USERNAME':'API_PASSWORD' | jq '.result[0] | { state, sys_id, number, requested_by, reason }'\n")),(0,i.kt)("p",null,"When executed, they each load the same Change Request from Service Now with a different value for ",(0,i.kt)("inlineCode",{parentName:"p"},"sysparm_display_value"),". You'll notice there's some ",(0,i.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},(0,i.kt)("inlineCode",{parentName:"a"},"jq"))," in the mix as well. This is because there's a ",(0,i.kt)("em",{parentName:"p"},"lot")," of data in a Change Request. Rather than display everything, we're displaying a subset of fields. The first curl has a ",(0,i.kt)("inlineCode",{parentName:"p"},"sysparm_display_value")," value of ",(0,i.kt)("inlineCode",{parentName:"p"},"all"),", the second ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," and the third ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". What do the results look like?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sysparm_display_value=all"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "state": {\n    "display_value": "Closed",\n    "value": "3"\n  },\n  "sys_id": {\n    "display_value": "4d54d7481b37e010d315cbb5464bcb95",\n    "value": "4d54d7481b37e010d315cbb5464bcb95"\n  },\n  "number": {\n    "display_value": "CHG0122595",\n    "value": "CHG0122595"\n  },\n  "requested_by": {\n    "display_value": "Sally Omer",\n    "link": "https://ourcompanyinstance.service-now.com/api/now/table/sys_user/b15cf3ebdbe11300f196f3651d961999",\n    "value": "b15cf3ebdbe11300f196f3651d961999"\n  },\n  "reason": {\n    "display_value": null,\n    "value": ""\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sysparm_display_value=true"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "state": "Closed",\n  "sys_id": "4d54d7481b37e010d315cbb5464bcb95",\n  "number": "CHG0122595",\n  "requested_by": {\n    "display_value": "Sally Omer",\n    "link": "https://ourcompanyinstance.service-now.com/api/now/table/sys_user/b15cf3ebdbe11300f196f3651d961999"\n  },\n  "reason": null\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sysparm_display_value=false"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "state": "3",\n  "sys_id": "4d54d7481b37e010d315cbb5464bcb95",\n  "number": "CHG0122595",\n  "requested_by": {\n    "link": "https://ourcompanyinstance.service-now.com/api/now/table/sys_user/b15cf3ebdbe11300f196f3651d961999",\n    "value": "b15cf3ebdbe11300f196f3651d961999"\n  },\n  "reason": ""\n}\n')),(0,i.kt)("p",null,"As you can see, we have the same properties being returned each time, but with a different shape. Let's call out some interesting highlights:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"requested_by")," is ",(0,i.kt)("em",{parentName:"li"},"always")," an object which contains ",(0,i.kt)("inlineCode",{parentName:"li"},"link"),". It may also contain ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"display_value")," depending upon ",(0,i.kt)("inlineCode",{parentName:"li"},"sysparm_display_value")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"sys_id"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"reason")," are objects containing ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"display_value")," when ",(0,i.kt)("inlineCode",{parentName:"li"},"sysparm_display_value")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"all"),". Otherwise, the value of ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"display_value")," is surfaced up directly; not in an object."),(0,i.kt)("li",{parentName:"ul"},"most values are strings, even if they represent another data type. So ",(0,i.kt)("inlineCode",{parentName:"li"},"state.value")," is always a stringified number. The only exception to this rule is ",(0,i.kt)("inlineCode",{parentName:"li"},"reason.display_value")," which can be ",(0,i.kt)("inlineCode",{parentName:"li"},"null"))),(0,i.kt)("h2",{id:"type-definition-time"},"Type Definition time"),(0,i.kt)("p",null,"We want to create type definitions for these API results. We could of course create three different results, but that would involve duplication. Boo! It's worth bearing in mind we're looking at a subset of five properties in this example. In reality, there are many, many properties on a Change Request. Whilst this example is for a subset, if we wanted to go on to create the full type definition the duplication would become very impractical."),(0,i.kt)("p",null,"What can we do? Well, if all of the underlying properties were of the same type, we could use a generic and be done. But given the underlying types can vary, that's not going to work. We can achieve this though through using a combination of generics and conditional types."),(0,i.kt)("p",null,"Let's begin by creating a string literal type of the possible values of ",(0,i.kt)("inlineCode",{parentName:"p"},"sysparm_display_value"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export type DisplayValue = 'all' | 'true' | 'false';\n")),(0,i.kt)("h2",{id:"making-a-propertyvalue-type"},"Making a ",(0,i.kt)("inlineCode",{parentName:"h2"},"PropertyValue")," type"),(0,i.kt)("p",null,"Next we need to create a type that models the object with ",(0,i.kt)("inlineCode",{parentName:"p"},"display_value")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," properties."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"a type for state, sys_id, number and reason")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"sys_id"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"reason")," are objects containing ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"display_value")," when ",(0,i.kt)("inlineCode",{parentName:"li"},"sysparm_display_value")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"'all'"),". Otherwise, the value of ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"display")," is surfaced up directly; not in an object."),(0,i.kt)("li",{parentName:"ul"},"most values are strings, even if they represent another data type. So ",(0,i.kt)("inlineCode",{parentName:"li"},"state.value")," is always a stringified number. The only exception to this rule is ",(0,i.kt)("inlineCode",{parentName:"li"},"reason.display_value")," which can be ",(0,i.kt)("inlineCode",{parentName:"li"},"null"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ValueAndDisplayValue<TValue = string, TDisplayValue = string> {\n  display_value: TDisplayValue;\n  value: TValue;\n}\n")),(0,i.kt)("p",null,"Note that this is a generic property with a default type of ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," for both ",(0,i.kt)("inlineCode",{parentName:"p"},"display_value")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),". Most of the time, ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," is the type in question so it's great that TypeScript allows us to cut down on the amount of syntax we use."),(0,i.kt)("p",null,"Now we're going to create our first conditional type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export type PropertyValue<\n  TAllTrueFalse extends DisplayValue,\n  TValue = string,\n  TDisplayValue = string\n> = TAllTrueFalse extends 'all'\n  ? ValueAndDisplayValue<TValue, TDisplayValue>\n  : TAllTrueFalse extends 'true'\n  ? TDisplayValue\n  : TValue;\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PropertyValue")," will either be a ",(0,i.kt)("inlineCode",{parentName:"p"},"ValueAndDisplayValue"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"TDisplayValue")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"TValue"),", depending upon whether ",(0,i.kt)("inlineCode",{parentName:"p"},"PropertyValue")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"'all'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'true'")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"'false'")," respectively. That's hard to grok. Let's look at an example of each of those cases using the ",(0,i.kt)("inlineCode",{parentName:"p"},"reason")," property, which allows a ",(0,i.kt)("inlineCode",{parentName:"p"},"TValue")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"TDisplayValue")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"string | null"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const reasonAll: PropertyValue<'all', string, string | null> = {\n  display_value: null,\n  value: '',\n};\nconst reasonTrue: PropertyValue<'true', string, string | null> = null;\nconst reasonFalse: PropertyValue<'false', string, string | null> = '';\n")),(0,i.kt)("p",null,"Consider the type on the left and the value on the right. We're successfully modelling our ",(0,i.kt)("inlineCode",{parentName:"p"},"PropertyValue"),"s. I've deliberately picked an edge case example to push our conditional type to its limits."),(0,i.kt)("h2",{id:"service-now-change-request-states"},"Service Now Change Request States"),(0,i.kt)("p",null,"Let's look at another usage. We'll create a type that repesents the possible values of a Change Request's ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," in Service Now. Do take a moment to appreciate these values. Many engineers were lost in the numerous missions to obtain these rare and secret enums. Alas, the Service Now API docs have some significant gaps."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"/** represents the possible Change Request \"State\" values in Service Now */\nexport const STATE = {\n  NEW: '-5',\n  ASSESS: '-4',\n  SENT_FOR_APPROVAL: '-3',\n  SCHEDULED: '-2',\n  APPROVED: '-1',\n  WAITING: '1',\n  IN_PROGRESS: '2',\n  COMPLETE: '3',\n  ERROR: '4',\n  CLOSED: '7',\n} as const;\n\nexport type State = typeof STATE[keyof typeof STATE];\n")),(0,i.kt)("p",null,"By combining ",(0,i.kt)("inlineCode",{parentName:"p"},"State")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PropertyValue"),", we can strongly type the ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," property of Change Requests. Consider:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const stateAll: PropertyValue<'all', State> = {\n  display_value: 'Closed',\n  value: '3',\n};\nconst stateTrue: PropertyValue<'true', State> = 'Closed';\nconst stateFalse: PropertyValue<'false', State> = '3';\n")),(0,i.kt)("p",null,"With that in place, let's turn our attention to our other natural type that the ",(0,i.kt)("inlineCode",{parentName:"p"},"requested_by")," property demonstrates."),(0,i.kt)("h2",{id:"making-a-linkvalue-type"},"Making a ",(0,i.kt)("inlineCode",{parentName:"h2"},"LinkValue")," type"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"a type for requested_by")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"requested_by")," is ",(0,i.kt)("em",{parentName:"p"},"always")," an object which contains ",(0,i.kt)("inlineCode",{parentName:"p"},"link"),". It may also contain ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"display_value")," depending upon ",(0,i.kt)("inlineCode",{parentName:"p"},"sysparm_display_value")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Link {\n  link: string;\n}\n\n/** when TAllTrueFalse is 'false' */\nexport interface LinkAndValue extends Link {\n  value: string;\n}\n\n/** when TAllTrueFalse is 'true' */\nexport interface LinkAndDisplayValue extends Link {\n  display_value: string;\n}\n\n/** when TAllTrueFalse is 'all' */\nexport interface LinkValueAndDisplayValue\n  extends LinkAndValue,\n    LinkAndDisplayValue {}\n")),(0,i.kt)("p",null,"The three types above model the different scenarios. Now we need a conditional type to make use of them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export type LinkValue<TAllTrueFalse extends DisplayValue> =\n  TAllTrueFalse extends 'all'\n    ? LinkValueAndDisplayValue\n    : TAllTrueFalse extends 'true'\n    ? LinkAndDisplayValue\n    : LinkAndValue;\n")),(0,i.kt)("p",null,"This is hopefully simpler to read than the ",(0,i.kt)("inlineCode",{parentName:"p"},"PropertyValue")," type, and if you look at the examples below you can see what usage looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const requested_byAll: LinkValue<'all'> = {\n  display_value: 'Sally Omer',\n  link: 'https://ourcompanyinstance.service-now.com/api/now/table/sys_user/b15cf3ebdbe11300f196f3651d961999',\n  value: 'b15cf3ebdbe11300f196f3651d961999',\n};\nconst requested_byTrue: LinkValue<'true'> = {\n  display_value: 'Sally Omer',\n  link: 'https://ourcompanyinstance.service-now.com/api/now/table/sys_user/b15cf3ebdbe11300f196f3651d961999',\n};\nconst requested_byFalse: LinkValue<'false'> = {\n  link: 'https://ourcompanyinstance.service-now.com/api/now/table/sys_user/b15cf3ebdbe11300f196f3651d961999',\n  value: 'b15cf3ebdbe11300f196f3651d961999',\n};\n")),(0,i.kt)("h2",{id:"making-our-complete-type"},"Making our complete type"),(0,i.kt)("p",null,"With these primitives in place, we can now build ourself a (cut-down) type that models a Change Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ServiceNowChangeRequest<TAllTrueFalse extends DisplayValue> {\n  state: PropertyValue<TAllTrueFalse, State>;\n  sys_id: PropertyValue<TAllTrueFalse>;\n  number: PropertyValue<TAllTrueFalse>;\n  requested_by: LinkValue<TAllTrueFalse>;\n  reason: PropertyValue<TAllTrueFalse, string, string | null>;\n  // there are *way* more properties in reality\n}\n")),(0,i.kt)("p",null,"This is a generic type which will accept ",(0,i.kt)("inlineCode",{parentName:"p"},"'all'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'true'")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"'false'")," and will use that type to drive the type of the properties ",(0,i.kt)("em",{parentName:"p"},"inside")," the object. And now we have successfully typed our Service Now Change Request, thanks to TypeScript's conditional types."),(0,i.kt)("p",null,"To test it out, let's take the JSON responses we got back from our curls at the start, and see if we can make ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceNowChangeRequest"),"s with them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const changeRequestFalse: ServiceNowChangeRequest<'false'> = {\n  state: '3',\n  sys_id: '4d54d7481b37e010d315cbb5464bcb95',\n  number: 'CHG0122595',\n  requested_by: {\n    link: 'https://ourcompanyinstance.service-now.com/api/now/table/sys_user/b15cf3ebdbe11300f196f3651d961999',\n    value: 'b15cf3ebdbe11300f196f3651d961999',\n  },\n  reason: '',\n};\n\nconst changeRequestTrue: ServiceNowChangeRequest<'true'> = {\n  state: 'Closed',\n  sys_id: '4d54d7481b37e010d315cbb5464bcb95',\n  number: 'CHG0122595',\n  requested_by: {\n    display_value: 'Sally Omer',\n    link: 'https://ourcompanyinstance.service-now.com/api/now/table/sys_user/b15cf3ebdbe11300f196f3651d961999',\n  },\n  reason: null,\n};\n\nconst changeRequestAll: ServiceNowChangeRequest<'all'> = {\n  state: {\n    display_value: 'Closed',\n    value: '3',\n  },\n  sys_id: {\n    display_value: '4d54d7481b37e010d315cbb5464bcb95',\n    value: '4d54d7481b37e010d315cbb5464bcb95',\n  },\n  number: {\n    display_value: 'CHG0122595',\n    value: 'CHG0122595',\n  },\n  requested_by: {\n    display_value: 'Sally Omer',\n    link: 'https://ourcompanyinstance.service-now.com/api/now/table/sys_user/b15cf3ebdbe11300f196f3651d961999',\n    value: 'b15cf3ebdbe11300f196f3651d961999',\n  },\n  reason: {\n    display_value: null,\n    value: '',\n  },\n};\n")),(0,i.kt)("p",null,"We can! Do take a look at this in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?#code/KYDwDg9gTgLgBDAnmYcAiBLAzmANgQ0QDV9cBXVAXjgHJTca4AfWmKCxlmgM1K2BoBuAFDDQkWHAwA7GMCi8AxqhLlgAQWkATTDgLFSFADwAVVRTjUsbGQHMANHBO68hc1TjWodgHxwA3sJwwXBa2K6IAPoAbobAAFxOLvruIiFwsWqJZnEiAL6i4tDwSChwAApQECiwBmpGQSEm6ri4JuzAAGJ8qKBy2ljo4Slx9o3BOWqWnjbSDuNJw25x0152wn7Uza3tFN24-HB9wAO09DQLAPxw7po6S3XGkxSOzg-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-qiz86KYKYuxa+pkKb-IwcjQhhVcBO3BFjdOvpdtl2eRPVBv+Psiz+wzcHMR2aIGSOgbApOhakHFpUfSzBTKK06LZTWzlDbTEuL5ZYjxNiRVIbXRKvjvKLHuOsUKlhwHsPdoI9hojKb9RvutSKDtYogA"},"TypeScript playground"),"."))}y.isMDXComponent=!0},48025:function(e,t){t.Z="data:image/png;base64,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"}}]);