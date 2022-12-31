"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[66467],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,g=u["".concat(s,".").concat(f)]||u[f]||h[f]||i;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},53286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={title:"Azure App Service: nested configuration for ASP.NET running in Web App for Containers using Application Settings",authors:"johnnyreilly",tags:[],image:"./appservice_classic.webp",hide_table_of_contents:!1},p=void 0,s={permalink:"/2018/07/28/azure-app-service-web-app-containers-asp-net-nested-configuration",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2018-07-28-azure-app-service-web-app-containers-asp-net-nested-configuration/index.md",source:"@site/blog/2018-07-28-azure-app-service-web-app-containers-asp-net-nested-configuration/index.md",title:"Azure App Service: nested configuration for ASP.NET running in Web App for Containers using Application Settings",description:"How can we configure an ASP.NET application with nested properties Azure App Service Web App for Containers using Application Settings in Azure? Colons don't work.",date:"2018-07-28T00:00:00.000Z",formattedDate:"July 28, 2018",tags:[],readingTime:1.89,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Azure App Service: nested configuration for ASP.NET running in Web App for Containers using Application Settings",authors:"johnnyreilly",tags:[],image:"./appservice_classic.webp",hide_table_of_contents:!1},prevItem:{title:"Using TypeScript and webpack alias: goodbye relative paths",permalink:"/2018/08/21/typescript-webpack-alias-goodbye-relative-paths"},nextItem:{title:"Cypress and Auth0",permalink:"/2018/07/09/cypress-and-auth0"}},c={image:n(1142).Z,authorsImageUrls:[void 0]},l=[{value:"Containers on App Service",id:"containers-on-app-service",level:2},{value:"The Mystery of Configuration",id:"the-mystery-of-configuration",level:2},{value:"How do we configure without colons?",id:"how-do-we-configure-without-colons",level:2}],u={toc:l};function h(e){var{components:t}=e,a=i(e,["components"]);return(0,r.kt)("wrapper",o({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"How can we configure an ASP.NET application with nested properties ",(0,r.kt)("a",o({parentName:"p"},{href:"https://azure.microsoft.com/en-gb/services/app-service/containers/"}),"Azure App Service Web App for Containers")," using Application Settings in Azure? Colons don't work."),(0,r.kt)("h2",o({},{id:"containers-on-app-service"}),"Containers on App Service"),(0,r.kt)("p",null,"App Services have long been a super simple way to spin up a web app in Azure. The barrier to entry is low, maintenance is easy. It just works. App Services recently got a turbo boost in the form of ",(0,r.kt)("a",o({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/app-service/containers/app-service-linux-intro"}),"Azure App Service on Linux"),". Being able to deploy to Linux is exciting enough; but another reason this is notable because ",(0,r.kt)("a",o({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/app-service/containers/tutorial-custom-docker-image"}),"you can deploy Docker images that will be run as app services"),"."),(0,r.kt)("p",null,"I cannot over-emphasise just how easy this makes getting a Docker image into Production. Yay Azure!"),(0,r.kt)("h2",o({},{id:"the-mystery-of-configuration"}),"The Mystery of Configuration"),(0,r.kt)("p",null,"Applications need configuration. ASP.Net Core applications are typically configured by an ",(0,r.kt)("inlineCode",{parentName:"p"},"appsettings.json")," file which might look like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-json"}),'{\n  "Parent": {\n    "ChildOne": "I\'m a little teapot",\n    "ChildTwo": "Short and stout"\n  }\n}\n')),(0,r.kt)("p",null,"With a classic App Service you could override a setting in the ",(0,r.kt)("inlineCode",{parentName:"p"},"appsettings.json"),' by updating "Application settings" within the Azure portal. You\'d do this in the style of creating an Application setting called ',(0,r.kt)("inlineCode",{parentName:"p"},"Parent:ChildOne")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Parent:ChildTwo"),". To be clear: using colons to target a specific piece of config."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"screenshot of an App Service Application Settings in the Azure Portal, nested properties configured using colons",src:n(1142).Z,width:"640",height:"336"})),(0,r.kt)("p",null,"You can read about this approach ",(0,r.kt)("a",o({parentName:"p"},{href:"https://blogs.msdn.microsoft.com/waws/2018/06/12/asp-net-core-settings-for-azure-app-service/"}),"here"),". Now there's something I want you to notice; consider the colons below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"screenshot of an App Service specific Application Setting nested property configured using colons - all good",src:n(70401).Z,width:"584",height:"96"})),(0,r.kt)("p",null,"If you try and follow the same steps when you're using Web App for Containers / i.e. ",(0,r.kt)("a",o({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/app-service/containers/app-service-linux-intro"}),"a Docker image deployed to an Azure App Service on Linux ")," you ",(0,r.kt)("strong",{parentName:"p"},"cannot")," use colons:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"screenshot of a Web App for Containers specific Application Setting nested property configured using colons - errors",src:n(9612).Z,width:"640",height:"65"})),(0,r.kt)("p",null,"When you hover over the error you see this message: ",(0,r.kt)("inlineCode",{parentName:"p"},'This field can only contain letters, numbers (0-9), periods ("."), and underscores ("_")'),". Using ",(0,r.kt)("inlineCode",{parentName:"p"},".")," does not work alas."),(0,r.kt)("h2",o({},{id:"how-do-we-configure-without-colons"}),"How do we configure without colons?"),(0,r.kt)("p",null,"It's simple. Where you would use ",(0,r.kt)("inlineCode",{parentName:"p"},":")," on a classic App Service, you should use a ",(0,r.kt)("inlineCode",{parentName:"p"},"__")," (double underscore) on an App Service with containers. So ",(0,r.kt)("inlineCode",{parentName:"p"},"Parent__ChildOne")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"Parent:ChildOne"),". It's as simple as that."))}h.isMDXComponent=!0},1142:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/appservice_classic-7949df2dfffa3df9e73d643cd6bc1d3b.webp"},70401:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkgAAABgCAMAAADRoH3vAAAApVBMVEX////Y4eYlJSX39/fu7/Dc3Nyvs7cfIyeqq6zd3+DJycpucXORl53LztEAvPJGT1mIiow6PkF8golAQECLi4uHjJNpF6pPUlbe3t5ycnJUVFTs7O1ja3OcoKZVXWZwd3++wMGysrOmpqbl5ubf9/75/P267fwgxfRbYmnU1tek5/uS4vmA3vlt2fhb1PdJz/Y3y/WXnKF5foLO8v1OV2GhfMh9PLWJpkbaAAAI2UlEQVR42uyZ3WrDMAyFjRKD0dXAunFg0L7C3v/hpiPXrdefQa9KwvmgrpJI7EIflrMmQgghhBDyDyrSlvQUE0vl1dNca07vEkXkkJhIze+JlGtb3nBiachEEUU6LutWNymvRXoG5Hp7G4oiclhU2ilaXBDItqLvuonovCOZiJRYa44vKUMPuSSYhza2ICT0Kk0qyPm6Fq2bnBoeRHX7ERsFZMfYrERYkauAmq8iRZ+l4AuqTSIhxC0EQIdH3TugjyKNoiKBeQFF2jk+2fLS0MQCddQXF6n4fV+GSApD1lPPF+27VK6Rqh5E6raiZuSMiVbE5tF2EcniDy3NA1xFAdk16gJEj2MJr3rfbRIpHjlFwCSSjrGGTwTTZNOxxT2KpCFbBFCNk23/mAQ13xqNj8swidQFgRnl745Unog0jLMCR8ErkYaxdilIZLd4PzvWRxuaH6PKF70fbX1MPRtteifSOLqXlM75pUgx42JJfKnbOSrocZxwioDuEGjL/WH7kqFJp8P2lIrlZqf1qpr9Gim9aBbpetj2C+5Iu2ZpkCCGlrox3yIWk+hc3azp9T+cUF+rxrnGhkiIUPMoEqLxULtrDyLFLYNI9Og4wJgP/Iyhwje2Y/EBkYo4PBsdjE+IxP9DEkIIIYQQQggh5Jc9OBAAAAAAAPJ/bQRVVVVVVVVVVVVVVVVVhb2zW20ehsGwIA4WNjXykXYyaNlf9z+2+7+3T6+cJqxZ+QbNyWheiGsvlu1Kz6T0pF21atWqVav+jDgKUV9jrH2XY4xMROjkLtlIckTLaHVTU5drT0GZfG4imOaOkv2VJDKGaMXMxSeMyrmzm2yXBrMWohQTlsJK9TJ/PonxzvsKL8HZcIVJhmFyz+yiqW4ULyyIipihBp9iPl1CKXqsWiQEiyJ423Yax4D+q6BRA/VAJIcsxIipN40Oj7mJD7Ps8EE5KLaDQA6mouOsYMLebuNAk7AmLhwxHYEkdJnqK3ubvIvr4O2gMrne4+D/veQgxYRosL0sJezAAFfI9/CmHcBv/m6NXU0NEYEdgCGOfBKkDIrYkBi9IbX3k+jO2jbUPAOpr4YMILzOsoIEeTJ3kKbojSBpOAVS/dTAeqVCS4KEzc4CSXKw8KK0aRjLFTrcsu0MJEk1KYsGxl33g+Qt6qIEFRvulOUTIH2vWEbRjXruMgiPS5sGukRxjPA9MrRHDyGQQ7HBAO0MpMcsrJvKXkwWBCkH3+9Q2hpcQ9H9TWWb6jTsBuFZ6OeMJCRaGcOgA0hB91gi4hjOlW5nGQmnvTYjiSZkIVheeEZylHiekQaU5OeMBFfv9QpDXhCkoGdlpBRR13gGEvFpkAwZM5AJJOLoeQar2TBFvZmDBGZhI419IfRxyosGqfl+jANNzgh6EiQSJI7aLwkSAn4OSFkDAvv4HSSOh9KWuxlIuM3WH8pgy8x1o7nDm7chXACQjlOi2HyGDVt2hvVQO9G/yB8CgA8PjxXNF9PD9vSoMQepPULJsp/aaj9EwuPmzVTa8vr9+qtWrfojKqUQPZRySx+lfNF7Kff0VsoTvZTyQs+lvNJTKW90X8oH3ZbyQHcwgd3dYDeavJby7HajyTt9jXa+1ap/7NYxCoAwDEbhv4hrxyzOFqSU3v920guIoAYb3jfkBI8kUWUlPzlhblchmZmcsJEiGyEBDxXPkIoQFacNhIT/6J4hdSEunm28oHmG1ISo+JFASPjKuo25HLvuqp4hVeEk53xbG4dhMG6wJ+phz2AYDJpm6f6w9uVGv/9nOz2KsK+XXnOmJWzXh7pJLNnK4t8iZYG1aD1sVcPaLKnhsLvj8M/p87252LY5sXpPxAd+Y1x2JqbUOdgevXFdStFAvk8pW2PgSbA3CfOeFsLA7p+9dvhHa2ZFAWcS4p/9/tlN5qhuDkFUGH9WMYgTR1pWw36t2g9mQWGFd3fMUUr/HPdDQarXq4KEpfD7cYVtjsYOEqXz7No5eEYGqkEfCpJCgyaaxG8ACZqAVMdPQDo9XuOj/RVwZ5bWdl20NQvq/ZMROuz4K7v2GmkKUgz1SpbrCKJGNyKQ1qKH8yBtPPcH9+1A8hsYySyu1WvRyiwnJalwdDFIrqPx4mPFQ7ayz/3qSxukh3aQhpQiEmlAk0OS5XbB1qSKLMu9q982tMopWwrIWj5veo9JoiANkEaDkyTdrwKP2vds18FMEFoYOknLNQjv68w4JHSpU0QGxziKQjnCLKuXp6IXs6SUpK+G+8TbBKQEBVxpLElUkGAI2NffcN6go01v3FwXkBH1joRD1CuYlUhIReTYOUDhe0IJpBsCOgIyERiX4dkpSDDoFMHYDJAsf3RwAYknDnCqQYzRmcsdaXTi6cv5yM97SyA5ro9QJ10CUr0jybJHzUOyQiU1wYNWmZpBwng0BQm7ElOTmgtW4OCoCi033RBpEtNM6zp9Ohh7R4OebCwgaVOQsEFPDYKvceYCkjqBJ0iSGjvfEEjgqJB0eWrTvgISuo5qJGDWooczIJXocyD5jZ4dGquABIMGuApITGq2tdS+IZDcF/LaI0jyVym2Ix8GvQWspAIJ0cTey2O/LGrnLwWpi5raSqlds85JkGzYRE28dAQSDMIMHaU2HRwkVAhmzFo1yAQkdTLCUIi11CayOeIDtE7r/wDptUOdjTrpsL/G47/NKDc1ZVDSmvX470i9b3/8l0YpoLnMQbD+ay21xUOjTUGSlq34SG7LtoAEA/xcp8W2RY3HG+3sMkBKKQCQGiTKeDTX9R5NnXJKmFdL7VsCyfhddqi4D/c/5u2/EAHpemnXORHNGZqy0DChAlAWuQL48qlte/+kut+aRWXfx435Ma9ITlATw0wh6OcMdXdeNrizIKm0UlxWd9sX1fbb/++ohV/azoPk+/PZklKcMVBCsmzUPEjhVzt3bAMgDAMBMIgWwgDMAfuPli4DpIg+0d0MLl7y289VJjvfLv5cutr+o9hGEFVblP9JISNhkMjhZBthmxy1/N99TOE/0vpCYouMtC+v/xjTAAYr0ikbiIwPAAAAAElFTkSuQmCC"},9612:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/webp;base64,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"}}]);