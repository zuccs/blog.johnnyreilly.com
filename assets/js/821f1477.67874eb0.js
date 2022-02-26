"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[60573],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=i,g=h["".concat(l,".").concat(u)]||h[u]||d[u]||r;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},71229:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return c},toc:function(){return d},default:function(){return u}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=["components"],s={title:"TypeScript 4.4 and more readable code",authors:"johnnyreilly",tags:["TypeScript","Control Flow Analysis of Aliased Conditions"],image:"./reactions-on-github.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/2021/08/14/typescript-4-4-more-readable-code",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-08-14-typescript-4-4-more-readable-code/index.md",source:"@site/blog/2021-08-14-typescript-4-4-more-readable-code/index.md",title:"TypeScript 4.4 and more readable code",description:'An exciting feature is shipping with TypeScript 4.4. It has the name "Control Flow Analysis of Aliased Conditions" which is quite a mouthful. This post unpacks what this feature is, and demonstrates the contribution it makes to improving the readability of code.',date:"2021-08-14T00:00:00.000Z",formattedDate:"August 14, 2021",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"Control Flow Analysis of Aliased Conditions",permalink:"/tags/control-flow-analysis-of-aliased-conditions"}],readingTime:4.065,truncated:!0,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"TypeScript 4.4 and more readable code",authors:"johnnyreilly",tags:["TypeScript","Control Flow Analysis of Aliased Conditions"],image:"./reactions-on-github.png",hide_table_of_contents:!1},prevItem:{title:"Publish Azure Static Web Apps with Bicep and Azure DevOps",permalink:"/2021/08/15/bicep-azure-static-web-apps-azure-devops"},nextItem:{title:"TypeScript, abstract classes, and constructors",permalink:"/2021/08/01/typescript-abstract-classes-and-constructors"}},c={image:n(24755).Z,authorsImageUrls:[void 0]},d=[{value:"Updated 30th September 2021",id:"updated-30th-september-2021",level:2},{value:"Indirect type narrowing via <code>const</code>",id:"indirect-type-narrowing-via-const",level:2},{value:"The code we would like to write",id:"the-code-we-would-like-to-write",level:2},{value:"Read more",id:"read-more",level:2}],h={toc:d};function u(e){var t=e.components,s=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An exciting feature is shipping with TypeScript 4.4. It has the name ",(0,r.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-4-beta/#cfa-aliased-conditions"},'"Control Flow Analysis of Aliased Conditions"')," which is quite a mouthful. This post unpacks what this feature is, and demonstrates the contribution it makes to improving the readability of code."),(0,r.kt)("h2",{id:"updated-30th-september-2021"},"Updated 30th September 2021"),(0,r.kt)("p",null,"This blog evolved to become a talk:"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/LxZx3ycrxI0",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,r.kt)("h2",{id:"indirect-type-narrowing-via-const"},"Indirect type narrowing via ",(0,r.kt)("inlineCode",{parentName:"h2"},"const")),(0,r.kt)("p",null,'On June 24th 2021, an issue on the TypeScript GitHub repository with the title "Indirect type narrowing via ',(0,r.kt)("inlineCode",{parentName:"p"},"const"),'" was closed by ',(0,r.kt)("a",{parentName:"p",href:"https://www.twitter.com/ahejlsberg"},"Anders Hejlsberg"),". The issue had been open since 2016 and it was closed as it was covered by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/pull/44730"},"a pull request addressing control flow analysis of aliased conditional expressions and discriminants"),"."),(0,r.kt)("p",null,"It's fair to say that the TypeScript community was very excited about this, both judging from reactions on the issue:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/12184#issuecomment-867928408"},(0,r.kt)("img",{loading:"lazy",alt:"Screenshot of reactions on GitHub",src:n(24755).Z,width:"1998",height:"2018"}))),(0,r.kt)("p",null,"And also the general delight on Twitter:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.twitter.com/johnny_reilly/status/1408162514504933378"},(0,r.kt)("img",{loading:"lazy",alt:"Screenshot of reactions on Twitter",src:n(79860).Z,width:"1161",height:"1584"}))),(0,r.kt)("p",null,"What Zeh said is a great explanation of the significance of this feature:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Lack of type narrowing with consts made me repeat code, or avoid helpfully namef consts, too many times")),(0,r.kt)("p",null,"With this feature we're going to have the possibility of more readable code, and less repetition. That's amazing!"),(0,r.kt)("h2",{id:"the-code-we-would-like-to-write"},"The code we would like to write"),(0,r.kt)("p",null,"Rather than starting with an explanation of what this new language feature is, let's instead start from the position of writing some code and seeing what's possible with TypeScript 4.4 that we couldn't tackle previously."),(0,r.kt)("p",null,"Here's a simple function that adds all the parameters it receives and returns the total. It's a tolerant function and will allow people to supply numbers in the form of strings as well; so it would successfully process ",(0,r.kt)("inlineCode",{parentName:"p"},"'2'")," as it would ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),". This is, of course, a slightly contrived example, but should be useful for demonstrating the new feature."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function add(...thingsToAdd: (string | number)[]): number {\n  let total = 0;\n  for (const thingToAdd of thingsToAdd) {\n    if (typeof thingToAdd === 'string') {\n      total += Number(thingToAdd);\n    } else {\n      total += thingToAdd;\n    }\n  }\n  return total;\n}\n\nconsole.log(add(1, '7', '3', 9));\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?ts=4.3.5#code/GYVwdgxgLglg9mABAQwCaoBQDodQBYxgDmAzgCpwCC6AXIhiVAE6FGIA+iYIAtgEYBTJgEoA2gF1hdbvyGIA3gChEKxABsBURFDhRkaxAF5EABgDcy1cDhN6EBI20FiFaqkRxgT1uSrphCpaqqjBeGFAAngAOAp7eLn7uhsmIAOSMLMSpAUrBeao6egYA1MYAcryCTOHORK7+FvkqAL6IAmokAoFNeYX6iKXxdYmNTc1BiOPBTJogTEh9ahbjivZgJHAaWGpwRBhomACMADRpAOypp6kAzJeIAJzCwkA"},"Try it out in the TypeScript playground.")),(0,r.kt)("p",null,"If we look at this function, whilst it works, it's not super expressive. The ",(0,r.kt)("inlineCode",{parentName:"p"},"typeof thingToAdd === 'string'")," performs two purposes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"It narrows the type from ",(0,r.kt)("inlineCode",{parentName:"li"},"string | number")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ol"},"It branches the logic, such that the ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," can be coerced into a ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," and added to the total.")),(0,r.kt)("p",null,"You can infer this from reading the code. However, what if we were to re-write it to capture intent? Let's try creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"shouldCoerceToNumber")," constant which expresses the action we need to take:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function add(...thingsToAdd: (string | number)[]): number {\n  let total = 0;\n  for (const thingToAdd of thingsToAdd) {\n    const shouldCoerceToNumber = typeof thingToAdd === 'string';\n    if (shouldCoerceToNumber) {\n      total += Number(thingToAdd);\n    } else {\n      total += thingToAdd;\n    }\n  }\n  return total;\n}\n\nconsole.log(add(1, '7', '3', 9));\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?ts=4.3.5#code/GYVwdgxgLglg9mABAQwCaoBQDodQBYxgDmAzgCpwCC6AXIhiVAE6FGIA+iYIAtgEYBTJgEoA2gF1hdbvyGIA3gChEKxABsBURFDhRkaxAF5EABgDcy1cDhN6EBI20FiFaqkRxgT1uSrphCpaqqvZgjiR4cCBqqADCcEIQAhQAcryCtsZQAJ4ADgKe3i5+7oZliADkjCzEFRbBwTBeDJHRcQlMSanpQgFKDQPauvqIANTGabJMGPisrv71gwC+iAJqJAKBgw06egbjRUTzqIsDS0GI58FMmiBMSLv6FueKoSRwGlhqcEQYaJgARgANJUAOwVEEVADMEMQAE5hMIgA"},"Try it out in the TypeScript playground.")),(0,r.kt)("p",null,"This is valid code; however TypeScript 4.3 is choking with an error:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Screenshot of the TypeScript playground running TypeScript 4.3 and throwing an error on our new code",src:n(37836).Z,width:"1716",height:"869"})),(0,r.kt)("p",null,"The error being surfaced is:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"Operator '+=' cannot be applied to types 'number' and 'string | number'.(2365)"))),(0,r.kt)("p",null,"What's happening here, is TypeScript ",(0,r.kt)("em",{parentName:"p"},"does not remember")," that ",(0,r.kt)("inlineCode",{parentName:"p"},"shouldCoerceToNumber")," represents a type narrowing of ",(0,r.kt)("inlineCode",{parentName:"p"},"thingToAdd")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"string | number")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),". So the type of ",(0,r.kt)("inlineCode",{parentName:"p"},"thingToAdd")," remains unchanged from ",(0,r.kt)("inlineCode",{parentName:"p"},"string | number")," when we write code that depends upon it."),(0,r.kt)("p",null,"This has terrible consequences. It means we can't write this more expressive code that we're interested in, and would be better for maintainers of our codebase. And this is what TypeScript 4.4, with our new feature, unlocks. Let's change the playground to use TypeScript 4.4 instead:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Screenshot of the TypeScript playground running TypeScript 4.4 and working with our new code - it shows the `thingToAdd` variable has been narrowed to a `string`",src:n(50876).Z,width:"1324",height:"858"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?ts=4.4.0-beta#code/GYVwdgxgLglg9mABAQwCaoBQDodQBYxgDmAzgCpwCC6AXIhiVAE6FGIA+iYIAtgEYBTJgEoA2gF1hdbvyGIA3gChEKxABsBURFDhRkaxAF5EABgDcy1cDhN6EBI20FiFaqkRxgT1uSrphCpaqqvZgjiR4cCBqqADCcEIQAhQAcryCtsZQAJ4ADgKe3i5+7oZliADkjCzEFRbBwTBeDJHRcQlMSanpQgFKDQPauvqIANTGabJMGPisrv71gwC+iAJqJAKBgw06egbjRUTzqIsDS0GI58FMmiBMSLv6FueKoSRwGlhqcEQYaJgARgANJUAOwVEEVADMEMQAE5hMIgA"},"Try it out in the TypeScript playground.")),(0,r.kt)("p",null,"Delightfully, we no longer have errors now we've made the switch. And as the screenshot shows, the ",(0,r.kt)("inlineCode",{parentName:"p"},"thingToAdd")," variable has been narrowed to a ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),". This is because Control Flow Analysis of Aliased Conditions is now in play."),(0,r.kt)("p",null,"So we're now writing more expressive code, and TypeScript is willing us on our way."),(0,r.kt)("h2",{id:"read-more"},"Read more"),(0,r.kt)("p",null,"This feature is a tremendous addition to the TypeScript language. It should have a significant long-term positive impact on how people write code with TypeScript."),(0,r.kt)("p",null,"To read more, do check out the excellent ",(0,r.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-4-beta/#cfa-aliased-conditions"},"TypeScript 4.4 beta release notes"),". There's also some other exciting feature shipping with this release as well. Thanks very much to the TypeScript team for once again improving the language, and making a real contribution to people being able to write readable code."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/typescript-4-4-and-more-readable-code/"},"This post was originally published on LogRocket.")))}u.isMDXComponent=!0},50876:function(e,t,n){t.Z=n.p+"assets/images/does-work-in-typescript-4-4-b6092c470006483598bfd553beed8b18.png"},37836:function(e,t,n){t.Z=n.p+"assets/images/doesnt-work-in-typescript-4-3-5d22493977b52f1fcba86b544437563d.png"},24755:function(e,t,n){t.Z=n.p+"assets/images/reactions-on-github-a45e4c95cbf5b8f748c7bd6936d10f5a.png"},79860:function(e,t,n){t.Z=n.p+"assets/images/reactions-on-twitter-10d86b83a75218724233b4f157bd14f2.png"}}]);