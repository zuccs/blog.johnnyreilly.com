"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[64013],{51224:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(67294),r=a(86010),l=a(16044),c=a(64767),i=a(61596),s=a(27692),o="sidebar_re4s",m="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",p="sidebarItem__DBe",g="sidebarItemLink_mo7H",b="sidebarItemLinkActive_I1ZP";function f({sidebar:e}){return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,r.Z)(o,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},e.title),n.createElement("ul",{className:(0,r.Z)(u,"clean-list")},e.items.map((e=>n.createElement("li",{key:e.permalink,className:p},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:b},e.title)))))))}var d=a(18901);function E({sidebar:e}){return n.createElement("ul",{className:"menu__list"},e.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function h(e){return n.createElement(d.Zo,{component:E,props:e})}function v({sidebar:e}){const t=(0,c.i)();return(null==e?void 0:e.items.length)?"mobile"===t?n.createElement(h,{sidebar:e}):n.createElement(f,{sidebar:e}):null}function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},_.apply(this,arguments)}function k(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function y(e){const{sidebar:t,toc:a,children:c}=e,i=k(e,["sidebar","toc","children"]),s=t&&t.items.length>0;return n.createElement(l.Z,_({},i),n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(v,{sidebar:t}),n.createElement("main",{className:(0,r.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&n.createElement("div",{className:"col col--2"},a))))}},64200:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n,r,l=a(67294),c=a(86010),i=a(27692);var s=a(56990),o=a(77560),m=a(51224),u=a(39748),p="tag_Nnez";function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},g.apply(this,arguments)}function b({letterEntry:e}){return l.createElement("article",null,l.createElement("h2",null,e.letter),l.createElement("ul",{className:"padding--none"},e.tags.map((e=>l.createElement("li",{key:e.permalink,className:p},l.createElement(u.Z,g({},e)))))),l.createElement("hr",null))}function f({tags:e}){const t=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);var l;null!==(l=(n=t)[r=a])&&void 0!==l||(n[r]=[]),t[a].push(e)})),Object.entries(t).sort((([e],[t])=>e.localeCompare(t))).map((([e,t])=>({letter:e,tags:t.sort(((e,t)=>e.label.localeCompare(t.label)))})))}(e);return l.createElement("section",{className:"margin-vert--lg"},t.map((e=>l.createElement(b,{key:e.letter,letterEntry:e}))))}var d=a(92417);function E({tags:e,sidebar:t}){const a=(0,i.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return l.createElement(s.FG,{className:(0,c.Z)(o.k.wrapper.blogPages,o.k.page.blogTagsListPage)},l.createElement(s.d,{title:a}),l.createElement(d.Z,{tag:"blog_tags_list"}),l.createElement(m.Z,{sidebar:t},l.createElement("h1",null,a),l.createElement(f,{tags:e})))}},39748:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r=a(86010),l=a(61596),c="tag_zVej",i="tagRegular_sFm0",s="tagWithCount_h2kH";function o({permalink:e,label:t,count:a}){return n.createElement(l.Z,{href:e,className:(0,r.Z)(c,a?s:i)},t,a&&n.createElement("span",null,a))}}}]);