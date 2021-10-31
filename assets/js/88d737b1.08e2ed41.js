"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[36513],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=i,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||r;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},67187:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return m},toc:function(){return d},default:function(){return c}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=["components"],l={title:"A folk story wherein we shall find dates, DataAnnotations & data impedance mismatch",authors:"johnnyreilly",tags:["Date","DateTime","Moment.JS","DataAnnotations","ValidationAttribute"],hide_table_of_contents:!1},s=void 0,p={permalink:"/2014/06/20/dates-DataAnnotations-and-data-impedance-mismatch",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-06-20-dates-DataAnnotations-and-data-impedance-mismatch.md",source:"@site/blog/2014-06-20-dates-DataAnnotations-and-data-impedance-mismatch.md",title:"A folk story wherein we shall find dates, DataAnnotations & data impedance mismatch",description:"If you ever take a step back from what you're doing it can sometimes seem pretty abstract. Here's an example. I was looking at an issue in an app that I was supporting. The problem concerned a field which was to store a date value. Let's call it, for the sake of argument, valuation_date. (Clearly in reality the field name was entirely different... Probably.) This field was supposed to represent a specific date, like June 15th 2012 or 19th August 2014. To be clear, a date and \\*not\\* in any way, a time.",date:"2014-06-20T00:00:00.000Z",formattedDate:"June 20, 2014",tags:[{label:"Date",permalink:"/tags/date"},{label:"DateTime",permalink:"/tags/date-time"},{label:"Moment.JS",permalink:"/tags/moment-js"},{label:"DataAnnotations",permalink:"/tags/data-annotations"},{label:"ValidationAttribute",permalink:"/tags/validation-attribute"}],readingTime:4.075,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"HotTowel-Angular meet TypeScript",permalink:"/2014/07/03/hottowel-angular-meet-typescript"},nextItem:{title:"Migrating from AngularJS to AngularTS - a walkthrough",permalink:"/2014/06/01/migrating-from-angularjs-to-angularts"}},m={authorsImageUrls:[void 0]},d=[{value:"A Primitive Problem",id:"a-primitive-problem",children:[],level:2},{value:"An Attribute Solution",id:"an-attribute-solution",children:[],level:2}],u={toc:d};function c(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you ever take a step back from what you're doing it can sometimes seem pretty abstract. Here's an example. I was looking at an issue in an app that I was supporting. The problem concerned a field which was to store a date value. Let's call it, for the sake of argument, ",(0,r.kt)("inlineCode",{parentName:"p"},"valuation_date"),". (Clearly in reality the field name was entirely different... Probably.) This field was supposed to represent a specific date, like June 15th 2012 or 19th August 2014. To be clear, a date and ","*",(0,r.kt)("strong",{parentName:"p"},"not"),"*"," in any way, a time."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"valuation_date")," was stored in a SQL database as a ",(0,r.kt)("inlineCode",{parentName:"p"},'<a href="http://msdn.microsoft.com/en-gb/library/ms187819.aspx">datetime</a>'),". That's right a date with a time portion. I've encountered this sort of scenario many times on systems I've inherited. Although there is a ",(0,r.kt)("inlineCode",{parentName:"p"},'<a href="http://msdn.microsoft.com/en-gb/library/bb630352.aspx">date</a>')," type in SQL it's pretty rarely used. I think it only shipped in SQL Server with 2008 which may go some way to explaining this. Anyway, I digress..."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"valuation_date")," was read into a field in a C# application called ",(0,r.kt)("inlineCode",{parentName:"p"},"ValuationDate")," which was of type ",(0,r.kt)("inlineCode",{parentName:"p"},'<a href="http://msdn.microsoft.com/en-us/library/system.datetime.aspx">DateTime</a>'),". As the name suggests this is also a date with a time portion. After a travelling through various layers of application this ended up being serialized as JSON and sent across the wire where it became a JavaScript variable by the name of ",(0,r.kt)("inlineCode",{parentName:"p"},"valuationDate")," which had the type ",(0,r.kt)("inlineCode",{parentName:"p"},'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a>'),". Despite the deceptive name this is also, you guessed it, a date with a time portion. (Fine naming work there JavaScript!)"),(0,r.kt)("p",null,"You can probably guess where I'm going with this... Despite our (cough) rock solid naming convention, the situation had arisen where actual datetimes had snuck in. That's right, in the wilds of production, records with ",(0,r.kt)("inlineCode",{parentName:"p"},"valuation_date"),"s with time components had been spotted. My mission was to hunt them, kill them and stop them reproducing..."),(0,r.kt)("h2",{id:"a-primitive-problem"},"A Primitive Problem"),(0,r.kt)("p",null,"Dates is a sticky topic in many languages. As I mentioned, SQL Server has a ",(0,r.kt)("inlineCode",{parentName:"p"},'<a href="http://msdn.microsoft.com/en-gb/library/bb630352.aspx">date</a>')," data type. C# has ",(0,r.kt)("inlineCode",{parentName:"p"},'<a href="http://msdn.microsoft.com/en-gb/library/system.datetime.aspx">DateTime</a>'),". If you want to operate on Dates alone then you're best off talking looking at Jon Skeet's ",(0,r.kt)("a",{parentName:"p",href:"http://nodatime.org/"},"NodaTime")," ","-"," though most people start with ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime")," and stick with it. (After all, it's native.) As to JavaScript, well primitive-wise there's no alternative to ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")," ","-"," but ",(0,r.kt)("inlineCode",{parentName:"p"},'<a href="http://momentjs.com/">Moment.js</a>')," may help."),(0,r.kt)("p",null,"My point is that it is a long standing issue in the development world. We represent data in types that aren't entirely meant for the purpose that they are used. It's not just restricted to dates, numbers have a comparable story around the issue of ",(0,r.kt)("a",{parentName:"p",href:"http://csharpindepth.com/Articles/General/Decimal.aspx"},"decimals and doubles"),". As a result of data type issues, developers experience problems. Like the one I was facing."),(0,r.kt)("h2",{id:"an-attribute-solution"},"An Attribute Solution"),(0,r.kt)("p",null,"The source of the problem turned out to be the string JavaScript ",(0,r.kt)("inlineCode",{parentName:"p"},'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">Date constructor</a>')," in an earlier version of Internet Explorer. The fix was switching away from using the JavaScript Date constructor in favour of using Moment.js's more dependable ability to parse strings into dates. Happy days we're working once more! Some quick work to put together a SQL script to fix up the data and we have ourselves our patch!"),(0,r.kt)("p",null,"But we didn't want to get bitten again. We wanted ourselves a little ",(0,r.kt)("a",{parentName:"p",href:"http://dictionary.cambridge.org/dictionary/british/belt-and-braces"},"belts and braces"),". What do do? Hang on a minute, lads \u2013 I've got a great idea... It's ",(0,r.kt)("inlineCode",{parentName:"p"},'<a href="http://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.validationattribute(v=vs.110).aspx">ValidationAttribute</a>')," time!"),(0,r.kt)("p",null,"We whipped ourselves up an attribute that looked like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.ComponentModel.DataAnnotations;\nusing System.Globalization;\n\nnamespace My.Attributes\n{\n    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field, Inherited = false, AllowMultiple = false)]\n    public class DateOnlyAttribute: ValidationAttribute\n    {\n        protected override ValidationResult IsValid(object value, ValidationContext validationContext)\n        {\n            if (value != null)\n            {\n                if (value is DateTime)\n                {\n                    // Date but not Time check\n                    var date = (DateTime) value;\n                    if (date.TimeOfDay != TimeSpan.Zero)\n                    {\n                        return new ValidationResult(date.ToString("O", CultureInfo.InvariantCulture) + " is not a date - it is a date with a time", new[] { validationContext.MemberName });\n                    }\n                }\n                else\n                {\n                    return new ValidationResult("DateOnlyAttribute can only be used on DateTime? and DateTime", new[] { validationContext.MemberName });\n                }\n            }\n\n            return ValidationResult.Success;\n        }\n    }\n}\n')),(0,r.kt)("p",null,"This attribute does 2 things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Most importantly it fails validation for any ",(0,r.kt)("inlineCode",{parentName:"li"},"DateTime")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"DateTime?")," that includes a time portion. It only allows through DateTimes where the clock strikes midnight. It's optimised for Cinderella."),(0,r.kt)("li",{parentName:"ol"},"It fails validation if the attribute is applied to any property which is not a ",(0,r.kt)("inlineCode",{parentName:"li"},"DateTime")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"DateTime?"),".")),(0,r.kt)("p",null,"You can decorate ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime?")," properties on your model with this attribute like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"namespace My.Models\n{\n    public class ImAModelYouKnowWhatIMean\n    {\n        public int Id { get; set; }\n\n        [DateOnlyAttribute]\n        public DateTime ValuationDate { get; set; }\n\n        // Other properties...\n    }\n}\n")),(0,r.kt)("p",null,"And if you're using MVC (or anything that makes use of the validation data annotations) then you'll now find that you are nicely protected from DateTimes masquerading as dates. Should they show up you'll find that ",(0,r.kt)("inlineCode",{parentName:"p"},"ModelState.IsValid")," is false and you can kick them to the curb with alacrity!"))}c.isMDXComponent=!0}}]);