"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[49246],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),c=o,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||a;return t?r.createElement(h,i(i({ref:n},d),{},{components:t})):r.createElement(h,i({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9136:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});t(67294);var r=t(3905);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={title:"Windows Defender Step Away From npm",authors:"johnnyreilly",tags:["VS Code","code","Windows","failed","npm install","windows defender"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2017/06/11/windows-defender-step-away-from-npm",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2017-06-11-windows-defender-step-away-from-npm/index.md",source:"@site/blog/2017-06-11-windows-defender-step-away-from-npm/index.md",title:"Windows Defender Step Away From npm",description:"Updated 18/06/2017",date:"2017-06-11T00:00:00.000Z",formattedDate:"June 11, 2017",tags:[{label:"VS Code",permalink:"/tags/vs-code"},{label:"code",permalink:"/tags/code"},{label:"Windows",permalink:"/tags/windows"},{label:"failed",permalink:"/tags/failed"},{label:"npm install",permalink:"/tags/npm-install"},{label:"windows defender",permalink:"/tags/windows-defender"}],readingTime:1.68,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Windows Defender Step Away From npm",authors:"johnnyreilly",tags:["VS Code","code","Windows","failed","npm install","windows defender"],hide_table_of_contents:!1},prevItem:{title:"Dynamic import: I've been awaiting you...",permalink:"/2017/07/02/dynamic-import-ive-been-await-ing-you"},nextItem:{title:"TypeScript: Spare the Rod, Spoil the Code",permalink:"/2017/05/20/typescript-spare-rod-spoil-code"}},p={authorsImageUrls:[void 0]},d=[{value:"Updated 18/06/2017",id:"updated-18062017",level:2},{value:"Updated 12/07/2017",id:"updated-12072017",level:2}],u={toc:d};function m(e){var{components:n}=e,i=a(e,["components"]);return(0,r.kt)("wrapper",o({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",o({},{id:"updated-18062017"}),"Updated 18/06/2017"),(0,r.kt)("p",null,"Whilst things did improve by fiddling with Windows Defender it wasn't a 100% fix which makes me wary. Interestingly, VS Code was always open when I did experience the issue and I haven't experienced it when it's been closed. So it may be the cause. I've opened ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/Microsoft/vscode/issues/28593"}),"an issue for this against the VS Code repo")," ","-"," it sounds like other people may be affected as I was. Perhaps this is VS Code and not Windows Defender. Watch that space..."),(0,r.kt)("h2",o({},{id:"updated-12072017"}),"Updated 12/07/2017"),(0,r.kt)("p",null,"The issue was VS Code. The bug has now been fixed and shipped last night with ",(0,r.kt)("a",o({parentName:"p"},{href:"https://code.visualstudio.com/updates/v1_14"}),"VS Code 1.14.0"),". Yay!"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"I've recently experienced many of my ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install"),"s failing for no consistent reason. The error message would generally be something along the lines of:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-sh"}),"npm ERR! Error: EPERM: operation not permitted, rename 'C:\\dev\\training\\drrug\\node_modules\\.staging\\@exponent\\ngrok-fc327f2a' -> 'C:\\dev\\training\\drrug\\node_modules\\@exponent\\ngrok'\n")),(0,r.kt)("p",null,"I spent a good deal of time changing the versions of node and npm I was running; all seemingly to no avail. Regular flakiness which I ascribed to node / npm. I was starting to give up when I read of ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/react-community/create-react-native-app/issues/191#issuecomment-304073970"}),"other people experiencing similar issues"),". Encouragingly ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/fmeira"}),"Fernando Meira")," suggested a solution:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"I got the same problem just doing an npm install. Run with antivirus disabled (if you use Windows Defender, turn off Real-Time protection and Cloud-based protection). That worked for me!")),(0,r.kt)("p",null,"I didn't really expect this to work - Windows Defender has been running in the background of my Windows 10 laptop since I've had it. There's been no problems with npm installs up until a week or so ago. But given the experience I and others have had I thought I should put it out there: it looks like Windows Defender has it in for npm. Go figure."),(0,r.kt)("p",null,"Alas Windows Defender doesn't stay dead for long; it's like a zombie that rises from the grave no matter how many times you kill it. So you might want to try configuring it to ignore node.exe:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(74690).Z,width:"445",height:"640"})),(0,r.kt)("p",null,"Or switching to Linux..."))}m.isMDXComponent=!0},74690:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/webp;base64,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"}}]);