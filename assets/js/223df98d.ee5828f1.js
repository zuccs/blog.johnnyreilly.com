"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[24894],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=u(n),c=o,m=g["".concat(s,".").concat(c)]||g[c]||d[c]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},32313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});n(67294);var a=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const r={title:"Lazy loading images with Docusaurus",authors:"johnnyreilly",tags:["Docusaurus","lazy load images","rehype","rehype plugin"],image:"./title-image.png",hide_table_of_contents:!1},l=void 0,s={permalink:"/2022/02/02/lazy-loading-images-with-docusaurus",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-02-02-lazy-loading-images-with-docusaurus/index.md",source:"@site/blog/2022-02-02-lazy-loading-images-with-docusaurus/index.md",title:"Lazy loading images with Docusaurus",description:'If you\'d like to improve the performance of a Docusaurus website by implementing native lazy-loading of images, you can. This post shows you how you too can have <img loading="lazy"  on your images by writing a Rehype plugin.',date:"2022-02-02T00:00:00.000Z",formattedDate:"February 2, 2022",tags:[{label:"Docusaurus",permalink:"/tags/docusaurus"},{label:"lazy load images",permalink:"/tags/lazy-load-images"},{label:"rehype",permalink:"/tags/rehype"},{label:"rehype plugin",permalink:"/tags/rehype-plugin"}],readingTime:2.95,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Lazy loading images with Docusaurus",authors:"johnnyreilly",tags:["Docusaurus","lazy load images","rehype","rehype plugin"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"Azure Static Web Apps - a Netlify alternative",permalink:"/2022/02/08/azure-static-web-apps-a-netlify-alternative"},nextItem:{title:"Migrating from GitHub Pages to Azure Static Web Apps",permalink:"/2022/02/01/migrating-from-github-pages-to-azure-static-web-apps"}},u={image:n(78311).Z,authorsImageUrls:[void 0]},p=[{value:"Updated 26/02/2022",id:"updated-26022022",level:2},{value:"Lazy loading images",id:"lazy-loading-images",level:2},{value:"Docusaurus",id:"docusaurus",level:2},{value:"Rehype plugin",id:"rehype-plugin",level:2},{value:"What&#39;s the result?",id:"whats-the-result",level:2}],g={toc:p};function d(e){var{components:t}=e,r=i(e,["components"]);return(0,a.kt)("wrapper",o({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you'd like to improve the performance of a Docusaurus website by implementing native lazy-loading of images, you can. This post shows you how you too can have ",(0,a.kt)("inlineCode",{parentName:"p"},'<img loading="lazy" ')," on your images by writing a Rehype plugin."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"title image reading &quot;Lazy loading images with Docusaurus&quot; with a Docusaurus logo and an image that reads `&lt;img loading=&quot;lazy&quot; `",src:n(78311).Z,width:"1600",height:"900"})),(0,a.kt)("h2",o({},{id:"updated-26022022"}),"Updated 26/02/2022"),(0,a.kt)("p",null,"You don't need this anymore. As of Docusaurus ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/facebook/docusaurus/releases/tag/v2.0.0-beta.16"}),"v2.0.0-beta.16")," Docusaurus lazy loads markdown images by default. You can see the commit where it was added ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/facebook/docusaurus/pull/6598"}),"here"),". Isn't that wonderful?"),(0,a.kt)("p",null,"\u2705cumulative no of network requests for Docusaurus sites will go \ud83d\udc47\n\u2705perceived performance will go \u261d\ufe0f\n\u2705hosting costs will go \ud83d\udc47"),(0,a.kt)("h2",o({},{id:"lazy-loading-images"}),"Lazy loading images"),(0,a.kt)("p",null,"Native browser lazy loading for images is a relatively recent innovation. To read more on the topic, ",(0,a.kt)("a",o({parentName:"p"},{href:"https://web.dev/browser-level-image-lazy-loading/"}),"do look at this post"),". The TL;DR is this though: by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},'loading="lazy"')," attribute to an ",(0,a.kt)("inlineCode",{parentName:"p"},"img")," element, modern browsers will delay loading the image until it is needed. This provides better performance to your users: when it comes to loading, less is more."),(0,a.kt)("h2",o({},{id:"docusaurus"}),"Docusaurus"),(0,a.kt)("p",null,"If you're using Docusaurus then you're likely writing Markdown. I am. This blog is written using Markdown, and converted, using ",(0,a.kt)("a",o({parentName:"p"},{href:"https://docusaurus.io/docs/next/markdown-features/plugins"}),"MDX plugins")," into JSX. This handles images as well as we can ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/facebook/docusaurus/blob/6ec0db4722cbf988fd5280a4442223637c2de8d7/packages/docusaurus-mdx-loader/src/remark/transformImage/index.ts#L79"}),"see here"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"jsxNode.value = `<img ${alt}src={${src}}${title}${width}${height} />`;\n")),(0,a.kt)("p",null,"The crucial thing to note about the above, is the lack of the ",(0,a.kt)("inlineCode",{parentName:"p"},'loading="lazy"')," attribute. Can we add that somehow? Yes we can!"),(0,a.kt)("h2",o({},{id:"rehype-plugin"}),"Rehype plugin"),(0,a.kt)("p",null,"To do this, we're going to write our own mini ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/rehypejs"}),"rehype plugin")," that will take the HTML being pumped out of Docusaurus and add the ",(0,a.kt)("inlineCode",{parentName:"p"},'loading="lazy"')," attribute."),(0,a.kt)("p",null,"Alongside our ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," we're going to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"image-lazy-remark-plugin.js")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js"}),"const visit = require('unist-util-visit');\n\n/** @type {import('unified').Plugin<[], import('hast').Root>} */\nfunction lazyLoadImagesPlugin() {\n  return (tree) => {\n    visit(tree, ['element', 'jsx'], (node) => {\n      if (node.type === 'element' && node.tagName === 'img') {\n        // handles nodes like this:\n\n        // {\n        //   type: 'element',\n        //   tagName: 'img',\n        //   properties: {\n        //     src: 'https://some.website.com/cat.gif',\n        //     alt: null\n        //   },\n        //   ...\n        // }\n\n        node.properties.loading = 'lazy';\n      } else if (node.type === 'jsx' && node.value.includes('<img ')) {\n        // handles nodes like this:\n\n        // {\n        //   type: 'jsx',\n        //   value: '<img src={require(\"!/workspaces/blog.johnnyreilly.com/blog-website/node_modules/url-loader/dist/cjs.js?limit=10000&name=assets/images/[name]-[hash].[ext]&fallback=/workspaces/blog.johnnyreilly.com/blog-website/node_modules/file-loader/dist/cjs.js!./bower-with-the-long-paths.png\").default} width=\"640\" height=\"497\" />'\n        // }\n\n        node.value = node.value.replace(/<img /g, '<img loading=\"lazy\" ');\n      }\n    });\n  };\n}\n\nmodule.exports = lazyLoadImagesPlugin;\n")),(0,a.kt)("p",null,"As the code above suggests, it looks for ",(0,a.kt)("inlineCode",{parentName:"p"},"img")," elements, whether they be in HTML or JSX, and adds in the ",(0,a.kt)("inlineCode",{parentName:"p"},'loading="lazy"')," attribute."),(0,a.kt)("p",null,"To apply this to our blog, we simply tweak the ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file to make use of our plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js"}),"const imageLazyRemarkPlugin = require('./image-lazy-remark-plugin');\n\n// ...\n\n/** @type {import('@docusaurus/types').Config} */\nconst config = {\n  // ...\n\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      /** @type {import('@docusaurus/preset-classic').Options} */\n      ({\n        // ...\n        blog: {\n          // ...\n          rehypePlugins: [imageLazyRemarkPlugin],\n        },\n        // ...\n      }),\n    ],\n  ],\n  // ...\n};\n")),(0,a.kt)("h2",o({},{id:"whats-the-result"}),"What's the result?"),(0,a.kt)("p",null,"With this in place, next time we run a build, we can see the attribute being applied to our image elements:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of an img element with the loading=&quot;lazy&quot; attribute set",src:n(75238).Z,width:"2042",height:"90"})),(0,a.kt)("p",null,"Consequently, when we fire up devtools we can see that only the images onscreen are being loaded. In the example below we're ",(0,a.kt)("em",{parentName:"p"},"not")," seeing five other images being loaded because they're offscreen and haven't been scrolled to as yet:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of chrome devtools showing only two images being loaded - the ones that are on the screen",src:n(49901).Z,width:"2541",height:"789"})),(0,a.kt)("p",null,"Amazing! It works! It's possible that this could land directly in Docusaurus one day. ",(0,a.kt)("a",o({parentName:"p"},{href:"https://docusaurus.io/feature-requests/p/lazy-loading-images-in-blog-posts-by-default"}),"Go here to follow the discussion on this.")))}d.isMDXComponent=!0},49901:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-of-chrome-devtools-showing-only-onscreen-images-loaded-a96686c6db91d40a25052e0960b80f4c.png"},75238:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-of-img-loading-lazy-element-3ac644b9a2be213dd60d46755535562c.png"},78311:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/title-image-3cda6484d06c3541fb8da68e96e133ce.png"}}]);