"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[41851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||r;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43646:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});n(67294);var i=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={title:"Docusaurus: improving Core Web Vitals with fetchpriority",authors:"johnnyreilly",tags:["Core Web Vitals","Docusaurus","fetchpriority","lazy loading","web performance"],image:"./title-image.png",hide_table_of_contents:!1},l=void 0,s={permalink:"/2023/01/18/docusaurus-improve-core-web-vitals-fetchpriority",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2023-01-18-docusaurus-improve-core-web-vitals-fetchpriority/index.md",source:"@site/blog/2023-01-18-docusaurus-improve-core-web-vitals-fetchpriority/index.md",title:"Docusaurus: improving Core Web Vitals with fetchpriority",description:"By using fetchpriority on your Largest Contentful Paint you can improve your Core Web Vitals. This post implements that with Docusaurus.",date:"2023-01-18T00:00:00.000Z",formattedDate:"January 18, 2023",tags:[{label:"Core Web Vitals",permalink:"/tags/core-web-vitals"},{label:"Docusaurus",permalink:"/tags/docusaurus"},{label:"fetchpriority",permalink:"/tags/fetchpriority"},{label:"lazy loading",permalink:"/tags/lazy-loading"},{label:"web performance",permalink:"/tags/web-performance"}],readingTime:4.615,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Docusaurus: improving Core Web Vitals with fetchpriority",authors:"johnnyreilly",tags:["Core Web Vitals","Docusaurus","fetchpriority","lazy loading","web performance"],image:"./title-image.png",hide_table_of_contents:!1},nextItem:{title:"How I ruined my SEO",permalink:"/2023/01/15/how-i-ruined-my-seo"}},p={image:n(24211).Z,authorsImageUrls:[void 0]},c=[{value:"Avoiding lazy loading on the Largest Contentful Paint",id:"avoiding-lazy-loading-on-the-largest-contentful-paint",level:2},{value:"<code>fetchpriority</code>",id:"fetchpriority",level:2},{value:"Swizzling the image component",id:"swizzling-the-image-component",level:2},{value:"Adding <code>fetchpriority=&quot;high&quot;</code> to the LCP with a custom plugin",id:"adding-fetchpriorityhigh-to-the-lcp-with-a-custom-plugin",level:2},{value:"What does it look like when applied?",id:"what-does-it-look-like-when-applied",level:2}],h={toc:c};function u(e){var{components:t}=e,a=r(e,["components"]);return(0,i.kt)("wrapper",o({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By using ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchpriority")," on your Largest Contentful Paint you can improve your Core Web Vitals. This post implements that with Docusaurus."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image reading &quot;Docusaurus: improving Core Web Vitals with fetchpriority",src:n(24211).Z,width:"800",height:"450"})),(0,i.kt)("h2",o({},{id:"avoiding-lazy-loading-on-the-largest-contentful-paint"}),"Avoiding lazy loading on the Largest Contentful Paint"),(0,i.kt)("p",null,"At the weekend ",(0,i.kt)("a",o({parentName:"p"},{href:"/2023/01/15/how-i-ruined-my-seo"}),"I wrote a post documenting how I believe I ruined the SEO on my blog"),". That post ended up ",(0,i.kt)("a",o({parentName:"p"},{href:"https://news.ycombinator.com/item?id=34389421"}),"trending on Hacker News"),". People made suggestions around things I could do that could improve things. One post in particular caught my eye from ",(0,i.kt)("a",o({parentName:"p"},{href:"https://growtika.com"}),"Growtika of Growtika.com")," saying:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Page speed: It's one of the most important ranking factor. You don't have to get 100 score, but passing the core web vitals score and having higher score on mobile is recommended."),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",o({parentName:"p"},{href:"https://pagespeed.web.dev/report?url=https%3A%2F%2Fjohnnyreilly.com%2F&form_factor=mobile"}),"https://pagespeed.web.dev/report?url=https%3A%2F%2Fjohnnyreilly.com%2F&form_factor=mobile")),(0,i.kt)("p",{parentName:"blockquote"},"A cool trick to improve the result fast is by removing the lazy load effect from the LCP:")),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"screenshot of web test results that reads largest contentful paint image was lazily loaded ",src:n(67081).Z,width:"2220",height:"1014"})),(0,i.kt)("p",null,"Another person chimed in with:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Indeed. Even better, making it high priority instead of normal: ",(0,i.kt)("a",o({parentName:"p"},{href:"https://addyosmani.com/blog/fetch-priority/"}),"https://addyosmani.com/blog/fetch-priority/"))),(0,i.kt)("h2",o({},{id:"fetchpriority"}),(0,i.kt)("inlineCode",{parentName:"h2"},"fetchpriority")),(0,i.kt)("p",null,"I hadn't heard of ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchpriority")," before this, but the linked article by ",(0,i.kt)("a",o({parentName:"p"},{href:"https://addyosmani.com"}),"Addy Osmani")," carried this tip:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Add ",(0,i.kt)("inlineCode",{parentName:"p"},'fetchpriority="high"')," to your Largest Contentful Paint (LCP) image to get it to load sooner. Priority Hints sped up Etsy\u2019s LCP by 4% with some sites seeing an improvement of up to 20-30% in their lab tests. In many cases, fetchpriority should lead to a nice boost for LCP.")),(0,i.kt)("p",null,"I was keen to try this out. Somewhat interestingly, I was the person responsible for ",(0,i.kt)("a",o({parentName:"p"},{href:"https://github.com/facebook/docusaurus/pull/6598"}),"originally contributing lazy loading to Docusaurus"),". For what it's worth, lazy loading is a ",(0,i.kt)("em",{parentName:"p"},"good thing")," to do. It's just that in this case, it was causing the LCP to be lazy loaded. I wanted to change that."),(0,i.kt)("h2",o({},{id:"swizzling-the-image-component"}),"Swizzling the image component"),(0,i.kt)("p",null,"Since my initial contribution, the ",(0,i.kt)("a",o({parentName:"p"},{href:"https://github.com/facebook/docusaurus/pull/6990"}),"implementation had been tweaked to allow user control via Swizzling"),". By the way, ",(0,i.kt)("a",o({parentName:"p"},{href:"https://docusaurus.io/docs/swizzling"}),"swizzling is a great feature of Docusaurus"),". It allows you to override the default implementation of a component. In this case, I wanted to override the ",(0,i.kt)("inlineCode",{parentName:"p"},"Img")," component and opt out of lazy loading. I did this by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yarn swizzle @docusaurus/theme-classic MDXComponents/Img -- --eject\n")),(0,i.kt)("p",null,"This created a file at ",(0,i.kt)("inlineCode",{parentName:"p"},"src/theme/MDXComponents/Img.js"),". I then made the following change:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-diff"}),"import React from 'react';\nimport clsx from 'clsx';\nimport styles from './styles.module.css';\nfunction transformImgClassName(className) {\n  return clsx(className, styles.img);\n}\nexport default function MDXImg(props) {\n  return (\n    // eslint-disable-next-line jsx-a11y/alt-text\n    <img\n-      loading=\"lazy\"\n      {...props}\n      className={transformImgClassName(props.className)}\n    />\n  );\n}\n")),(0,i.kt)("p",null,"Getting rid of the ",(0,i.kt)("inlineCode",{parentName:"p"},'loading="lazy"')," attribute was all I needed to do. This gets us to the point where none of our images are lazy loaded anymore. Stage 1 complete!"),(0,i.kt)("h2",o({},{id:"adding-fetchpriorityhigh-to-the-lcp-with-a-custom-plugin"}),"Adding ",(0,i.kt)("inlineCode",{parentName:"h2"},'fetchpriority="high"')," to the LCP with a custom plugin"),(0,i.kt)("p",null,"The next thing to do was to write a small Rehype plugin to add ",(0,i.kt)("inlineCode",{parentName:"p"},'fetchpriority="high"')," to the LCP. I did this by creating a new JavaScript file called ",(0,i.kt)("inlineCode",{parentName:"p"},"image-fetchpriority-rehype-plugin.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),"// @ts-check\nconst visit = require('unist-util-visit');\n\n/**\n * Create a rehype plugin that will make the first image eager loaded with fetchpriority=\"high\" and lazy load all other images\n * @returns rehype plugin that will make the first image eager loaded with fetchpriority=\"high\" and lazy load all other images\n */\nfunction imageFetchPriorityRehypePluginFactory() {\n  /** @type {Map<string, string>} */ const files = new Map();\n\n  /** @type {import('unified').Transformer} */\n  return (tree, vfile) => {\n    visit(tree, ['element', 'jsx'], (node) => {\n      if (node.type === 'element' && node['tagName'] === 'img') {\n        // handles nodes like this:\n        // {\n        //   type: 'element',\n        //   tagName: 'img',\n        //   properties: {\n        //     src: 'https://some.website.com/cat.gif',\n        //     alt: null\n        //   },\n        //   ...\n        // }\n\n        const key = `img|${vfile.history[0]}`;\n        const imageAlreadyProcessed = files.get(key);\n        const fetchpriorityThisImage =\n          !imageAlreadyProcessed ||\n          imageAlreadyProcessed === node['properties']['src'];\n\n        if (!imageAlreadyProcessed) {\n          files.set(key, node['properties']['src']);\n        }\n\n        if (fetchpriorityThisImage) {\n          node['properties'].fetchpriority = 'high';\n          node['properties'].loading = 'eager';\n        } else {\n          node['properties'].loading = 'lazy';\n        }\n      } else if (node.type === 'jsx' && node['value']?.includes('<img ')) {\n        // handles nodes like this:\n\n        // {\n        //   type: 'jsx',\n        //   value: '<img src={require(\"!/workspaces/blog.johnnyreilly.com/blog-website/node_modules/url-loader/dist/cjs.js?limit=10000&name=assets/images/[name]-[hash].[ext]&fallback=/workspaces/blog.johnnyreilly.com/blog-website/node_modules/file-loader/dist/cjs.js!./bower-with-the-long-paths.png\").default} width=\"640\" height=\"497\" />'\n        // }\n\n        // if (!vfile.history[0].includes('blog/2023-01-15')) return;\n\n        const key = `jsx|${vfile.history[0]}`;\n        const imageAlreadyProcessed = files.get(key);\n        const fetchpriorityThisImage =\n          !imageAlreadyProcessed || imageAlreadyProcessed === node['value'];\n\n        if (!imageAlreadyProcessed) {\n          files.set(key, node['value']);\n        }\n\n        if (fetchpriorityThisImage) {\n          node['value'] = node['value'].replace(\n            /<img /g,\n            '<img loading=\"eager\" fetchpriority=\"high\" '\n          );\n        } else {\n          node['value'] = node['value'].replace(\n            /<img /g,\n            '<img loading=\"lazy\" '\n          );\n        }\n      }\n    });\n  };\n}\n\nmodule.exports = imageFetchPriorityRehypePluginFactory;\n")),(0,i.kt)("p",null,"The above plugin runs over the AST of the MDX file and adds ",(0,i.kt)("inlineCode",{parentName:"p"},'fetchpriority="high"')," to the first image. It also adds ",(0,i.kt)("inlineCode",{parentName:"p"},'loading="eager"')," to the first image and ",(0,i.kt)("inlineCode",{parentName:"p"},'loading="lazy"')," to all other images."),(0,i.kt)("p",null,"Interestingly, when I was writing it I discovered that the visitor is invoked multiple times for the same elements. I'm not quite sure why, but the logic in the plugin uses a ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," to keep track of which images have already been processed. TL;DR it works!"),(0,i.kt)("p",null,"I then added the plugin to the ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),"//@ts-check\nconst imageFetchPriorityRehypePlugin = require('./image-fetchpriority-rehype-plugin');\n\n/** @type {import('@docusaurus/types').Config} */\nconst config = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      /** @type {import('@docusaurus/preset-classic').Options} */\n      ({\n        // ...\n        blog: {\n          // ...\n          rehypePlugins: [imageFetchPriorityRehypePlugin],\n          // ...\n        },\n        // ...\n      }),\n    ],\n  ],\n  // ...\n};\n\nmodule.exports = config;\n")),(0,i.kt)("h2",o({},{id:"what-does-it-look-like-when-applied"}),"What does it look like when applied?"),(0,i.kt)("p",null,"Now we have this in place, if we run the same test with ",(0,i.kt)("a",o({parentName:"p"},{href:"https://pagespeed.web.dev/"}),"pagespeed")," we have different results:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"screenshot showing fetchpriority=&quot;high&quot; has been applied to LCP image",src:n(53088).Z,width:"2016",height:"1087"})),(0,i.kt)("p",null,"We're now ",(0,i.kt)("em",{parentName:"p"},"not")," lazy loading the image and we're also making it a high priority fetch. Great news!"))}u.isMDXComponent=!0},53088:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/screenshot-largest-contentful-paint-image-fetchpriority-66d94f88bc0ad1cfbc86091bef7fe0ad.png"},67081:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/screenshot-largest-contentful-paint-image-lazy-loaded-f0238fafc5212a2cf16be5b5396cc825.png"},24211:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/title-image-bf03885cf6b0d1d70321eae4b15bf13e.png"}}]);