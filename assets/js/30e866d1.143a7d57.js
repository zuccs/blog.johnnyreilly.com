"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[15455],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},g=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,m=c["".concat(s,".").concat(d)]||c[d]||p[d]||o;return n?a.createElement(m,r(r({ref:t},g),{},{components:n})):a.createElement(m,r({ref:t},g))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56019:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return g},toc:function(){return p},default:function(){return d}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={title:"Lazy loading images with Docusaurus",authors:"johnnyreilly",tags:["Azure Static Web Apps","Bicep","GitHub Actions","GitHub Pages"],image:"./title-image.png",hide_table_of_contents:!1},s=void 0,u={permalink:"/2022/02/02/lazy-loading-images-with-docusaurus",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2022-02-02-lazy-loading-images-with-docusaurus/index.md",source:"@site/blog/2022-02-02-lazy-loading-images-with-docusaurus/index.md",title:"Lazy loading images with Docusaurus",description:'If you\'d like to improve the performance of a Docusaurus website by implementing native lazy-loading of images, you can. This post shows you how you too can have <img loading="lazy"  on your images.',date:"2022-02-02T00:00:00.000Z",formattedDate:"February 2, 2022",tags:[{label:"Azure Static Web Apps",permalink:"/tags/azure-static-web-apps"},{label:"Bicep",permalink:"/tags/bicep"},{label:"GitHub Actions",permalink:"/tags/git-hub-actions"},{label:"GitHub Pages",permalink:"/tags/git-hub-pages"}],readingTime:2.66,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Lazy loading images with Docusaurus",authors:"johnnyreilly",tags:["Azure Static Web Apps","Bicep","GitHub Actions","GitHub Pages"],image:"./title-image.png",hide_table_of_contents:!1},nextItem:{title:"Migrating from GitHub Pages to Azure Static Web Apps",permalink:"/2022/02/01/migrating-from-github-pages-to-azure-static-web-apps"}},g={image:n(89997).Z,authorsImageUrls:[void 0]},p=[{value:"Lazy loading images",id:"lazy-loading-images",children:[],level:2},{value:"Docusaurus",id:"docusaurus",children:[],level:2},{value:"Rehype plugin",id:"rehype-plugin",children:[],level:2},{value:"What&#39;s the result?",id:"whats-the-result",children:[],level:2}],c={toc:p};function d(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you'd like to improve the performance of a Docusaurus website by implementing native lazy-loading of images, you can. This post shows you how you too can have ",(0,o.kt)("inlineCode",{parentName:"p"},'<img loading="lazy" ')," on your images."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"title image reading &quot;Lazy loading images with Docusaurus&quot; with a Docusaurus logo and an image that reads `&lt;img loading=&quot;lazy&quot; `",src:n(89997).Z,width:"1600",height:"900"})),(0,o.kt)("h2",{id:"lazy-loading-images"},"Lazy loading images"),(0,o.kt)("p",null,"Native browser lazy loading for images is a relatively recent innovation. To read more on the topic, ",(0,o.kt)("a",{parentName:"p",href:"https://web.dev/browser-level-image-lazy-loading/"},"do look at this post"),". The TL;DR is this though: by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},'loading="lazy"')," attribute to an ",(0,o.kt)("inlineCode",{parentName:"p"},"img")," element, modern browsers will delay loading the image until it is needed. This provides better performance to your users: when it comes to loading, less is more."),(0,o.kt)("h2",{id:"docusaurus"},"Docusaurus"),(0,o.kt)("p",null,"If you're using Docusaurus then you're likely writing Markdown. I am. This blog is written using Markdown, and converted, using ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/next/markdown-features/plugins"},"MDX plugins")," into JSX. This handles images as well as we can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/blob/6ec0db4722cbf988fd5280a4442223637c2de8d7/packages/docusaurus-mdx-loader/src/remark/transformImage/index.ts#L79"},"see here"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"jsxNode.value = `<img ${alt}src={${src}}${title}${width}${height} />`;\n")),(0,o.kt)("p",null,"The crucial thing to note about the above, is the lack of the ",(0,o.kt)("inlineCode",{parentName:"p"},'loading="lazy"')," attribute. Can we add that somehow? Yes we can!"),(0,o.kt)("h2",{id:"rehype-plugin"},"Rehype plugin"),(0,o.kt)("p",null,"To do this, we're going to write our own mini ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rehypejs"},"rehype plugin")," that will take the HTML being pumped out of Docusaurus and add the ",(0,o.kt)("inlineCode",{parentName:"p"},'loading="lazy"')," attribute."),(0,o.kt)("p",null,"Alongside our ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," we're going to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"image-lazy-remark-plugin.js")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const visit = require('unist-util-visit');\n\n/** @type {import('unified').Plugin<[], import('hast').Root>} */\nfunction lazyLoadImagesPlugin() {\n  return (tree) => {\n    visit(tree, ['element', 'jsx'], (node) => {\n      if (node.type === 'element' && node.tagName === 'img') {\n        // handles nodes like this:\n\n        // {\n        //   type: 'element',\n        //   tagName: 'img',\n        //   properties: {\n        //     src: 'https://some.website.com/cat.gif',\n        //     alt: null\n        //   },\n        //   ...\n        // }\n\n        node.properties.loading = 'lazy';\n      } else if (node.type === 'jsx' && node.value.includes('<img ')) {\n        // handles nodes like this:\n\n        // {\n        //   type: 'jsx',\n        //   value: '<img src={require(\"!/workspaces/blog.johnnyreilly.com/blog-website/node_modules/url-loader/dist/cjs.js?limit=10000&name=assets/images/[name]-[hash].[ext]&fallback=/workspaces/blog.johnnyreilly.com/blog-website/node_modules/file-loader/dist/cjs.js!./bower-with-the-long-paths.png\").default} width=\"640\" height=\"497\" />'\n        // }\n\n        node.value = node.value.replace(/<img /g, '<img loading=\"lazy\" ');\n      }\n    });\n  };\n}\n\nmodule.exports = lazyLoadImagesPlugin;\n")),(0,o.kt)("p",null,"As the code above suggests, it looks for ",(0,o.kt)("inlineCode",{parentName:"p"},"img")," elements, whether they be in HTML or JSX, and adds in the ",(0,o.kt)("inlineCode",{parentName:"p"},'loading="lazy"')," attribute."),(0,o.kt)("p",null,"To apply this to our blog, we simply tweak the ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file to make use of our plugin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const imageLazyRemarkPlugin = require('./image-lazy-remark-plugin');\n\n// ...\n\n/** @type {import('@docusaurus/types').Config} */\nconst config = {\n  // ...\n\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      /** @type {import('@docusaurus/preset-classic').Options} */\n      ({\n        // ...\n        blog: {\n          // ...\n          rehypePlugins: [imageLazyRemarkPlugin],\n        },\n        // ...\n      }),\n    ],\n  ],\n  // ...\n};\n")),(0,o.kt)("h2",{id:"whats-the-result"},"What's the result?"),(0,o.kt)("p",null,"With this in place, next time we run a build, we can see the attribute being applied to our image elements:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"screenshot of an img element with the loading=&quot;lazy&quot; attribute set",src:n(94239).Z,width:"2042",height:"90"})),(0,o.kt)("p",null,"Consequently, when we fire up devtools we can see that only the images onscreen are being loaded. In the example below we're ",(0,o.kt)("em",{parentName:"p"},"not")," seeing five other images being loaded because they're offscreen and haven't been scrolled to as yet:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"screenshot of chrome devtools showing only two images being loaded - the ones that are on the screen",src:n(69237).Z,width:"2541",height:"789"})),(0,o.kt)("p",null,"Amazing! It works! It's possible that this could land directly in Docusaurus one day. ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/feature-requests/p/lazy-loading-images-in-blog-posts-by-default"},"Go here to follow the discussion on this.")))}d.isMDXComponent=!0},69237:function(e,t,n){t.Z=n.p+"assets/images/screenshot-of-chrome-devtools-showing-only-onscreen-images-loaded-a96686c6db91d40a25052e0960b80f4c.png"},94239:function(e,t,n){t.Z=n.p+"assets/images/screenshot-of-img-loading-lazy-element-3ac644b9a2be213dd60d46755535562c.png"},89997:function(e,t,n){t.Z=n.p+"assets/images/title-image-3cda6484d06c3541fb8da68e96e133ce.png"}}]);