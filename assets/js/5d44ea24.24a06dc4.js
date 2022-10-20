"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[65826],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||h[m]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={title:"react-select with less typing lag",authors:"johnnyreilly",tags:["large lists","react-select","typing"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2019/04/27/react-select-with-less-typing-lag",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2019-04-27-react-select-with-less-typing-lag/index.md",source:"@site/blog/2019-04-27-react-select-with-less-typing-lag/index.md",title:"react-select with less typing lag",description:"This is going out to all those people using react-select with 1000+ items to render. To those people typing into the select and saying out loud \"it's so laggy.... This can't be... It's 2019... I mean, right?\" To the people who read this GitHub issue top to bottom 30 times and still came back unsure of what to do. This is for you.",date:"2019-04-27T00:00:00.000Z",formattedDate:"April 27, 2019",tags:[{label:"large lists",permalink:"/tags/large-lists"},{label:"react-select",permalink:"/tags/react-select"},{label:"typing",permalink:"/tags/typing"}],readingTime:2.035,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"react-select with less typing lag",authors:"johnnyreilly",tags:["large lists","react-select","typing"],hide_table_of_contents:!1},prevItem:{title:"TypeScript and high CPU usage - watch don't stare!",permalink:"/2019/05/23/typescript-and-high-cpu-usage-watch"},nextItem:{title:"Template Tricks for a Dainty DOM",permalink:"/2019/03/24/template-tricks-for-dainty-dom"}},c={authorsImageUrls:[void 0]},p=[],h={toc:p};function u(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is going out to all those people using ",(0,r.kt)("a",o({parentName:"p"},{href:"https://react-select.com"}),(0,r.kt)("inlineCode",{parentName:"a"},"react-select"))," with 1000+ items to render. To those people typing into the select and saying out loud \"it's ",(0,r.kt)("em",{parentName:"p"},"so")," laggy.... This can't be... It's 2019... I mean, right?\" To the people who read this ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/JedWatson/react-select/issues/3128"}),"GitHub issue")," top to bottom 30 times and still came back unsure of what to do. This is for you."),(0,r.kt)("p",null,"I'm lying. Mostly this goes out to me. I have a select box. I need it to render 2000+ items. I want it to be lovely. I want my users to be delighted as they use it. I want them to type in and (",(0,r.kt)("em",{parentName:"p"},"this is the crucial part!"),") for the control to feel responsive. Not laggy. Not like each keypress is going to Jupiter and back before it renders to the screen."),(0,r.kt)("p",null,"Amongst the various gems on the GitHub issue are shared CodeSandboxes illustrating ways to integrate react-select with react-window. That's great and they do improve things. However, they don't do much to improve the laggy typing feel. There's ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/JedWatson/react-select/issues/3128#issuecomment-431397942"}),"brief mention")," of a props tweak you can make to react-select; this:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"filterOption={createFilter({ ignoreAccents: false })}\n")),(0,r.kt)("p",null,"What does this do? Well, this improves the typing lag experience ",(0,r.kt)("em",{parentName:"p"},"massively"),". For why? Well, ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/JedWatson/react-select/blob/292bad3298f2cafad6767f2134bd79a9c27e4073/src/filters.js#L21"}),"if you look at the code")," you find that the default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"ignoreAccents: true"),". This default makes react-select invoke an expensive (and scary sounding) function called ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/JedWatson/react-select/blob/292bad3298f2cafad6767f2134bd79a9c27e4073/src/diacritics.js#L90"}),(0,r.kt)("inlineCode",{parentName:"a"},"stripDiacritics")),". Not once but twice. Ouchy. And this kills performance."),(0,r.kt)("p",null,"But if you're okay with accents not being ignored (and ",(0,r.kt)("em",{parentName:"p"},"spoiler"),": I am) then this is the option for you."),(0,r.kt)("p",null,"Here's a CodeSandbox which also includes the ",(0,r.kt)("inlineCode",{parentName:"p"},"ignoreAccents: false")," tweak. Enjoy!"),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"https://codesandbox.io/s/zn70lqp31m?fontsize=14"}),(0,r.kt)("img",o({parentName:"a"},{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit johnnyreilly/react-window-with-react-select-less-laggy"})))),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"import React, { Component } from 'react';\nimport ReactDOM from 'react-dom';\nimport Select, { createFilter } from 'react-select';\nimport { FixedSizeList as List } from 'react-window';\n\nimport './styles.css';\n\nconst options = [];\nfor (let i = 0; i < 2500; i = i + 1) {\n  options.push({ value: i, label: `Option ${i}` });\n}\n\nconst height = 35;\n\nclass MenuList extends Component {\n  render() {\n    const { options, children, maxHeight, getValue } = this.props;\n    const [value] = getValue();\n    const initialOffset = options.indexOf(value) * height;\n\n    return (\n      <List\n        height={maxHeight}\n        itemCount={children.length}\n        itemSize={height}\n        initialScrollOffset={initialOffset}\n      >\n        {({ index, style }) => <div style={style}>{children[index]}</div>}\n      </List>\n    );\n  }\n}\n\nconst App = () => (\n  <Select\n    filterOption={createFilter({ ignoreAccents: false })} // this makes all the difference!\n    components={{ MenuList }}\n    options={options}\n  />\n);\n\nReactDOM.render(<App />, document.getElementById('root'));\n")))}u.isMDXComponent=!0}}]);