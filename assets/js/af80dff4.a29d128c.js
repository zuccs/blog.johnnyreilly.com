"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[84228],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=i,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7465:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={title:"Bulletproof uniq with TypeScript generics (yay code reviews!)",authors:"johnnyreilly",tags:["TypeScript","unique"],hide_table_of_contents:!1},s=void 0,p={permalink:"/2020/11/14/bulletproof-uniq-with-typescript",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-11-14-bulletproof-uniq-with-typescript.md",source:"@site/blog/2020-11-14-bulletproof-uniq-with-typescript.md",title:"Bulletproof uniq with TypeScript generics (yay code reviews!)",description:"Never neglect the possibilities of a code review. There are times when you raise a PR and all you want is for everyone to hit approve so you can merge, merge and ship, ship! This can be a missed opportunity. For as much as I'd like to imagine my code is perfect, it's patently not. There's always scope for improvement.",date:"2020-11-14T00:00:00.000Z",formattedDate:"November 14, 2020",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"unique",permalink:"/tags/unique"}],readingTime:3.855,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Visual Studio Marketplace: images in Markdown!",permalink:"/2020/11/28/images-in-markdown-for-azure-devops-marketplace"},nextItem:{title:"Throttling data requests with React Hooks",permalink:"/2020/11/10/throttle-data-requests-with-react-hooks"}},u={authorsImageUrls:[void 0]},c=[{value:"&quot;What&#39;s this?&quot;",id:"whats-this",children:[],level:2},{value:"<code>uniq</code> v1",id:"uniq-v1",children:[],level:2},{value:"<code>uniq</code> v2",id:"uniq-v2",children:[],level:2}],h={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Never neglect the possibilities of a code review. There are times when you raise a PR and all you want is for everyone to hit approve so you can merge, merge and ship, ship! This can be a missed opportunity. For as much as I'd like to imagine my code is perfect, it's patently not. There's always scope for improvement."),(0,o.kt)("h2",{id:"whats-this"},'"What\'s this?"'),(0,o.kt)("p",null,"This week afforded me that opportunity. I was walking through a somewhat complicated PR on a call and someone said \"what's this?\". They'd spotted an expression much like this in my code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const myValues = [...new Set(allTheValuesSupplied)];\n")),(0,o.kt)("p",null,"What is that? Well, it's a number of things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#Remove_duplicate_elements_from_the_array"},"It's a way to get the unique values in a collection.")),(0,o.kt)("li",{parentName:"ol"},"It's a pro-tip and a coding BMX trick.")),(0,o.kt)("p",null,"What do I mean? Well, this is indeed a technique for getting the unique values in a collection. But it relies upon you knowing a bunch of things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"},(0,o.kt)("inlineCode",{parentName:"a"},"Set"))," contains unique values. If you add multiple identical values, only a single value will be stored."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set"},(0,o.kt)("inlineCode",{parentName:"a"},"Set")," constructor")," takes ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol"},"iterable objects"),". This means we can ",(0,o.kt)("inlineCode",{parentName:"li"},"new")," up a ",(0,o.kt)("inlineCode",{parentName:"li"},"Set"),' with an array that we want to "unique-ify" and we will have a ',(0,o.kt)("inlineCode",{parentName:"li"},"Set")," that contains those unique values."),(0,o.kt)("li",{parentName:"ul"},"If you want to go on to do filtering / mapping etc on your unique values, you'll need to get them out of the ",(0,o.kt)("inlineCode",{parentName:"li"},"Set"),". This is because (regrettably) ECMAScript iterables don't implicitly support these operations and neither are methods such as these part of the ",(0,o.kt)("inlineCode",{parentName:"li"},"Set")," API. The easiest way to do that is to ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"},"spread")," into a new array which you can then operate upon.")),(0,o.kt)("p",null,"I have this knowledge. Lots of people have this knowledge. But whilst this may be the case, using this technique goes against what I would generally consider to be a good tenet of programming: comprehensibility. When you read this code above, it doesn't immediately tell you what it's doing. This is a strike against it."),(0,o.kt)("p",null,'Further to that, it\'s "noisy". Even if the reader does have this knowledge, as they digest the code, they have to mentally unravel it. "Oh it\'s a ',(0,o.kt)("inlineCode",{parentName:"p"},"Set"),", we're passing in values, then spreading it out, it's probably intended to get the unique values.... Right, cool, cool.... Continue!\""),(0,o.kt)("iframe",{src:"https://giphy.com/embed/4NnSe87mg3h25JYIDh",width:"100%",height:"100%",frameBorder:"0",allowFullScreen:""}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/margaridagp"},"Margarida Pereira")," explicitly called this out and I found myself agreeing. Let's make a ",(0,o.kt)("inlineCode",{parentName:"p"},"uniq")," function!"),(0,o.kt)("h2",{id:"uniq-v1"},(0,o.kt)("inlineCode",{parentName:"h2"},"uniq")," v1"),(0,o.kt)("p",null,"I wrote a very simple ",(0,o.kt)("inlineCode",{parentName:"p"},"uniq")," function which looked like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * Return the unique values found in the passed iterable\n */\nfunction uniq<TElement>(iterableToGetUniqueValuesOf: Iterable<TElement>) {\n  return [...new Set(iterableToGetUniqueValuesOf)];\n}\n")),(0,o.kt)("p",null,"Usage of this was simple:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"uniq([1, 1, 1, 3, 1, 1, 2]); // produces [1, 3, 2]\nuniq(['John', 'Guida', 'Ollie', 'Divya', 'John']); // produces [\"John\", \"Guida\", \"Ollie\", \"Divya\"]\n")),(0,o.kt)("p",null,"And I thought this was tremendous. I committed and pushed. I assumed there was no more to be done. Guida (Margarida) then made this very helpful comment:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"BTW, I found a big bold warning that ",(0,o.kt)("inlineCode",{parentName:"p"},"new Set()")," compares objects by reference (unless they're primitives) so it might be worth adding a comment to warn people that uniq/distinct compares objects by reference: ",(0,o.kt)("a",{parentName:"p",href:"https://codeburst.io/javascript-array-distinct-5edc93501dc4"},"https://codeburst.io/javascript-array-distinct-5edc93501dc4"))),(0,o.kt)("p",null,"She was right! If a caller was to, say, pass a collection of objects to ",(0,o.kt)("inlineCode",{parentName:"p"},"uniq")," then they'd end up highly disappointed. Consider:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"uniq([{ name: 'John' }, { name: 'John' }]); // produces [{ name: \"John\" }, { name: \"John\" }]\n")),(0,o.kt)("p",null,"We can do better!"),(0,o.kt)("h2",{id:"uniq-v2"},(0,o.kt)("inlineCode",{parentName:"h2"},"uniq")," v2"),(0,o.kt)("p",null,"I like compilers shouting at me. Or more accurately, I like compilers telling me when something isn't valid / supported / correct. I wanted ",(0,o.kt)("inlineCode",{parentName:"p"},"uniq")," to mirror the behaviour of ",(0,o.kt)("inlineCode",{parentName:"p"},"Set")," ","-"," to only support primitives such as ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," etc. So I made a new version of ",(0,o.kt)("inlineCode",{parentName:"p"},"uniq")," that hardened up the generic contraints:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * Return the unique values found in the passed iterable\n */\nfunction uniq<TElement extends string | number | bigint | boolean | symbol>(\n  iterableToGetUniqueValuesOf: Iterable<TElement>\n) {\n  return [...new Set(iterableToGetUniqueValuesOf)];\n}\n")),(0,o.kt)("p",null,"With this in place, the compiler started shouting in the most helpful way. When I re-attemped ",(0,o.kt)("inlineCode",{parentName:"p"},'[{ name: "John" }, { name: "John" }]')," the compiler hit me with:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Argument of type '{ name: string; }[]' is not assignable to parameter of type 'Iterable&lt;string | number | bigint | boolean | symbol&gt;'.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?#code/FAYw9gdgzmA2CmA6WYDmAKArhAlgR3QG0BvAAggEMBbeALlICIApMACwgdIF8AaUsyjXrM2HbgF0AlJNCQYCZGiy4ChEewZ91HKTOAB6AFSHgpQ6QBK8AC6YAThFLXW8UtnyZXANwqxPUUgAzMGwAE1IcR2dXAAcKKCh4cJxreDsKACMEU0N9YEDsEGscSDcVAB4AFQBRBBoIa1J4AA9UiFCAqGs7SNRSAB9yTCoMtIHSDJxUSMbBjLA4eApHQagATxG4AD50U1J9lLTMhEqwAHEbAFUVTwA1X38AeUD6AElU9Kz4Ktr4eustsBJPw9vs7DZ7I5CIgYRB4AB3UgAZRs6EOnxO5yuN3g9z88Cgz0k4gA3MAuMAgA"},"Take a look.")),(0,o.kt)("p",null,"This is good. This is descriptive code that only allows legitimate inputs. It should lead to less confusion and a reduced likelihood of issues in Production. It's also a nice example of how code review can result in demonstrably better code. Thanks Guida!"))}d.isMDXComponent=!0}}]);