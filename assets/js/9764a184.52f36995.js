"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[7047],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=u(a),c=r,d=p["".concat(s,".").concat(c)]||p[c]||m[c]||o;return a?n.createElement(d,i(i({ref:t},h),{},{components:a})):n.createElement(d,i({ref:t},h))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},48642:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>h});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={title:"IQueryable... IEnumerable... Hmmm...",authors:"johnnyreilly",tags:["LINQ","IEnumerable vs IQueryable"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2015/11/30/iqueryable-ienumerable-hmmm",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2015-11-30-iqueryable-ienumerable-hmmm/index.md",source:"@site/blog/2015-11-30-iqueryable-ienumerable-hmmm/index.md",title:"IQueryable... IEnumerable... Hmmm...",description:"So there I was, tip-tapping away at my keyboard when I became aware of the slowly loudening noise of a debate. It wasn't about poverty, war, civil rights or anything like that. No; this was far more contentious. It was about the behaviour of IQueryable&lt;T&gt; when mixed with IEnumerable&lt;T&gt;. I know, right, how could I not get involved?",date:"2015-11-30T00:00:00.000Z",formattedDate:"November 30, 2015",tags:[{label:"LINQ",permalink:"/tags/linq"},{label:"IEnumerable vs IQueryable",permalink:"/tags/i-enumerable-vs-i-queryable"}],readingTime:4.36,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"IQueryable... IEnumerable... Hmmm...",authors:"johnnyreilly",tags:["LINQ","IEnumerable vs IQueryable"],hide_table_of_contents:!1},prevItem:{title:"ES6 + TypeScript + Babel + React + Flux + Karma: The Secret Recipe",permalink:"/2015/12/16/es6-typescript-babel-react-flux-karma"},nextItem:{title:"The Names Have Been Changed...",permalink:"/2015/10/23/the-names-have-been-changed"}},u={authorsImageUrls:[void 0]},h=[{value:"LINQ to Objects vs LINQ to ... ?",id:"linq-to-objects-vs-linq-to--",level:2},{value:"Fixing the Problem",id:"fixing-the-problem",level:2}],p={toc:h};function m(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",r({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"So there I was, tip-tapping away at my keyboard when I became aware of the slowly loudening noise of a debate. It wasn't about poverty, war, civil rights or anything like that. No; this was far more contentious. It was about the behaviour of ",(0,n.kt)("inlineCode",{parentName:"p"},'<a href="https://msdn.microsoft.com/en-gb/library/bb351562(v=vs.100).aspx">IQueryable&lt;T&gt;</a>')," when mixed with ",(0,n.kt)("inlineCode",{parentName:"p"},'<a href="https://msdn.microsoft.com/en-gb/library/9eekhta0(v=vs.100).aspx">IEnumerable&lt;T&gt;</a>'),". I know, right, how could I not get involved?"),(0,n.kt)("p",null,"The code that was being debated was a database query that was being facilitated by Entity Framework. Now let me ask you a question: what is the problem with the methods below?"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-cs"}),"private IEnumerable<Sage> GetSagesWithSayings()\n{\n    IQueryable<Sage> sageWithSayings =\n        from s in DbContext.Sages.Include(x => x.Sayings)\n        select s;\n\n    return sageWithSayings;\n}\n\npublic IEnumerable<Sage> GetSagesWithSayingsBornWithinTheLast100Years()\n{\n    var aHundredYearsAgo = DateTime.Now.AddYears(-100);\n    var sageWithSayings = GetSagesWithSayings().Where(x => x.DateOfBirth > aHundredYearsAgo);\n\n    return sageWithSayings;\n}\n")),(0,n.kt)("p",null,"I've rather emphasised the problem by expressly declaring types in the ",(0,n.kt)("inlineCode",{parentName:"p"},"GetSagesWithSayings")," method. More typically the ",(0,n.kt)("inlineCode",{parentName:"p"},"IQueryable&lt;Sage&gt;")," would be hiding itself beneath a ",(0,n.kt)("inlineCode",{parentName:"p"},"var")," making the problem less obvious. But you get the point; it's something to do with an ",(0,n.kt)("inlineCode",{parentName:"p"},"IQueryable&lt;Sage&gt;")," being passed back as an ",(0,n.kt)("inlineCode",{parentName:"p"},"IEnumerable&lt;Sage&gt;"),"."),(0,n.kt)("p",null,'The debate was raging around what this piece of code (or one much like it) actually did. One side positing "it\'ll get every record from the database and then throw away what it doesn\'t need in C#-land..." The opposing view being "are you sure about that? Doesn\'t it just get the records from the last hundred years from the database?"'),(0,n.kt)("p",null,"So it comes down the SQL that ends up being generated. On the one hand it's going to get everything from the Sages table..."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-sql"}),"select ...\nfrom Sages ...\n")),(0,n.kt)("p",null,"Or does it include a filter clause as well?"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-sql"}),"select ...\nfrom Sages ...\nwhere DateOfBirth > '1915-11-30'\n")),(0,n.kt)("p",null,"You probably know the answer... It gets everything. Every record is brought back from the database and those that are older than 100 years are then casually thrown away. So kinda wasteful. That's the problem. But why? And what does that tell us?"),(0,n.kt)("h2",r({},{id:"linq-to-objects-vs-linq-to--"}),"LINQ to Objects vs LINQ to ... ?"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'The term "LINQ to Objects" refers to the use of LINQ queries with any ',(0,n.kt)("inlineCode",{parentName:"p"},"IEnumerable")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"IEnumerable&lt;T&gt;")," collection directly, without the use of an intermediate LINQ provider or API such as LINQ to SQL or LINQ to XML.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},'<a href="https://msdn.microsoft.com/en-gb/library/bb351562(v=vs.100).aspx">IQueryable&lt;T&gt;</a>')," interface is intended for implementation by query providers."),(0,n.kt)("p",{parentName:"blockquote"},"This interface inherits the ",(0,n.kt)("inlineCode",{parentName:"p"},'<a href="https://msdn.microsoft.com/en-gb/library/9eekhta0(v=vs.100).aspx">IEnumerable&lt;T&gt;</a>')," interface so that if it represents a query, the results of that query can be enumerated. Enumeration forces the expression tree associated with an ",(0,n.kt)("inlineCode",{parentName:"p"},'<a href="https://msdn.microsoft.com/en-gb/library/bb351562(v=vs.100).aspx">IQueryable&lt;T&gt;</a>')," object to be executed. Queries that do not return enumerable results are executed when the ",(0,n.kt)("inlineCode",{parentName:"p"},'<a href="https://msdn.microsoft.com/en-gb/library/bb549414(v=vs.100).aspx">Execute&lt;TResult&gt;(Expression)</a>')," method is called."),(0,n.kt)("p",{parentName:"blockquote"},'The definition of "executing an expression tree" is specific to a query provider. For example, it may involve translating the expression tree to a query language appropriate for an underlying data source.')),(0,n.kt)("p",null,'I know - check me out with my "quotes".'),(0,n.kt)("p",null,"Now, ",(0,n.kt)("inlineCode",{parentName:"p"},"IEnumerable")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"IQueryable"),' are similar; for instance they are both considered "lazy" as they offer deferred execution. But there is an important difference between ',(0,n.kt)("inlineCode",{parentName:"p"},"IEnumerable")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"IQueryable"),"; namely that ",(0,n.kt)("inlineCode",{parentName:"p"},"IQueryable")," hands off information about a query to another provider in order that they may decide how to do the necessary work. ",(0,n.kt)("inlineCode",{parentName:"p"},"IEnumerable")," does not; its work is done in memory by operating on the data it has."),(0,n.kt)("p",null,"So let's apply this to our issue. We have an ",(0,n.kt)("inlineCode",{parentName:"p"},"IQueryable&lt;Sage&gt;")," and we return it as an ",(0,n.kt)("inlineCode",{parentName:"p"},"IEnumerable&lt;Sage&gt;"),". By doing this we haven't changed the underlying type; it's still an ",(0,n.kt)("inlineCode",{parentName:"p"},"IQueryable&lt;Sage&gt;"),". But by upcasting to ",(0,n.kt)("inlineCode",{parentName:"p"},"IEnumerable&lt;Sage&gt;")," we have told the compiler that we don't have an ",(0,n.kt)("inlineCode",{parentName:"p"},"IQueryable&lt;Sage&gt;"),". We've lied. I trust you're feeling guilty."),(0,n.kt)("p",null,"No doubt whoever raised you told you not to tell lies. This was probably the very situation they had in mind. The implications of our dirty little fib come back to haunt us when we start to chain on subsequent filters. So when we perform our filter of ",(0,n.kt)("inlineCode",{parentName:"p"},".Where(x =&gt; x.DateOfBirth &gt; aHundredYearsAgo)")," the compiler isn't going to get LINQ to Entities's extension methods in on this. No, it's going to get the LINQ to object extension methods instead."),(0,n.kt)("p",null,"This is the cause of our problem. When it comes to execution we're not getting the database to do the heavy lifting because we've moved away from using ",(0,n.kt)("inlineCode",{parentName:"p"},"IQueryable"),"."),(0,n.kt)("h2",r({},{id:"fixing-the-problem"}),"Fixing the Problem"),(0,n.kt)("p",null,"There are 2 courses of action open to you. The obvious course of action (and 99% of the time what you'd look to do) is change the signature of the `` method to return an IQueryable like so:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-cs"}),"private IQueryable<Sage> GetSagesWithSayings()\n    var sageWithSayings = // I prefer 'var', don't you?\n        from s in DbContext.Sages.Include(x => x.Sayings)\n        select s;\n\n    return sageWithSayings;\n}\n")),(0,n.kt)("p",null,'The other alternative is what I like to think of as "the escape hatch": ',(0,n.kt)("inlineCode",{parentName:"p"},'<a href="https://msdn.microsoft.com/en-gb/library/bb353734(v=vs.100).aspx">AsQueryable</a>'),". This takes an ",(0,n.kt)("inlineCode",{parentName:"p"},"IEnumerable"),", checks if it's actually an ",(0,n.kt)("inlineCode",{parentName:"p"},"IQueryable")," slumming it and casts back to that if it is. You might use this in a situation where you didn't have control over the data access code. Using it looks like this: (and would work whether ",(0,n.kt)("inlineCode",{parentName:"p"},"GetSagesWithSayings")," was returning ",(0,n.kt)("inlineCode",{parentName:"p"},"IEnumerable"),(0,n.kt)("em",{parentName:"p"},"or"),(0,n.kt)("inlineCode",{parentName:"p"},"IQueryable"),")"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-cs"}),"public IEnumerable<Sage> GetSagesWithSayingsBornWithinTheLast100Years()\n{\n    var aHundredYearsAgo = DateTime.Now.AddYears(-100);\n    var sageWithSayings =GetSagesWithSayings().AsQueryable().Where(x => x.DateOfBirth > aHundredYearsAgo);\n\n    return sageWithSayings;\n}\n")))}m.isMDXComponent=!0}}]);