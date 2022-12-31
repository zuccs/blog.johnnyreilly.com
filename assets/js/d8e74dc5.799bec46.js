"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[79225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||i;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:o,s[1]=r;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});n(67294);var a=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"Azure App Service, Health checks and zero downtime deployments",authors:"johnnyreilly",tags:["Azure App Service","Health checks","deployment slots","zero downtime deployments"],hide_table_of_contents:!1},r=void 0,l={permalink:"/2021/02/11/azure-app-service-health-checks-and-zero-downtime-deployments",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-02-11-azure-app-service-health-checks-and-zero-downtime-deployments/index.md",source:"@site/blog/2021-02-11-azure-app-service-health-checks-and-zero-downtime-deployments/index.md",title:"Azure App Service, Health checks and zero downtime deployments",description:"I've been working recently on zero downtime deployments using Azure App Service. They're facilitated by a combination of Health checks and deployment slots. This post will talk about why this is important and how it works.",date:"2021-02-11T00:00:00.000Z",formattedDate:"February 11, 2021",tags:[{label:"Azure App Service",permalink:"/tags/azure-app-service"},{label:"Health checks",permalink:"/tags/health-checks"},{label:"deployment slots",permalink:"/tags/deployment-slots"},{label:"zero downtime deployments",permalink:"/tags/zero-downtime-deployments"}],readingTime:7.485,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Azure App Service, Health checks and zero downtime deployments",authors:"johnnyreilly",tags:["Azure App Service","Health checks","deployment slots","zero downtime deployments"],hide_table_of_contents:!1},prevItem:{title:"Making Easy Auth tokens survive releases on Linux Azure App Service",permalink:"/2021/02/16/easy-auth-tokens-survive-releases-on-linux-azure-app-service"},nextItem:{title:"Azure RBAC: role assignments and ARM templates",permalink:"/2021/02/08/arm-templates-security-role-assignments"}},p={authorsImageUrls:[void 0]},u=[{value:"Why zero downtime deployments?",id:"why-zero-downtime-deployments",level:2},{value:"Manual zero downtime releases with App Services",id:"manual-zero-downtime-releases-with-app-services",level:2},{value:"Rollbacks for bonus points",id:"rollbacks-for-bonus-points",level:2},{value:"Automated zero downtime releases with Health checks",id:"automated-zero-downtime-releases-with-health-checks",level:2}],c={toc:u};function h(e){var{components:t}=e,s=i(e,["components"]);return(0,a.kt)("wrapper",o({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I've been working recently on zero downtime deployments using Azure App Service. They're facilitated by a combination of ",(0,a.kt)("a",o({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/app-service/monitor-instances-health-check"}),"Health checks")," and ",(0,a.kt)("a",o({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/app-service/deploy-staging-slots"}),"deployment slots"),". This post will talk about why this is important and how it works."),(0,a.kt)("h2",o({},{id:"why-zero-downtime-deployments"}),"Why zero downtime deployments?"),(0,a.kt)("p",null,"Historically (and for many applications, currently) deployment results in downtime. A period of time during the release where an application is not available to users whilst the new version is deployed. There are a number of downsides to releases with downtime:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Your users cannot use your application. This will frustrate them and make them sad."),(0,a.kt)("li",{parentName:"ol"},"Because you're a kind person and you want your users to be happy, you'll optimise to make their lives better. You'll release when the fewest users are accessing your application. It will likely mean you'll end up working late, early or at weekends."),(0,a.kt)("li",{parentName:"ol"},"Again because you want to reduce impact on users, you'll release less often. This means that every release will bring with it a greater collection of changes. This is turn will often result in a large degree of focus on manually testing each release, to reduce the likelihood of bugs ending up in users hands. This is a noble aim, but it drags the teams focus away from shipping.")),(0,a.kt)("p",null,"Put simply: downtime in releases impacts customer happiness and leads to reduced pace for teams. It's a vicious circle."),(0,a.kt)("p",null,"But if we turn it around, what does it look like if releases have ",(0,a.kt)("em",{parentName:"p"},"no")," downtime at all?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Your users can always use your application. This will please them."),(0,a.kt)("li",{parentName:"ol"},"Your team is now safe to release at any time, day or night. They will likely release more often as a consequence."),(0,a.kt)("li",{parentName:"ol"},"If your team has sufficient automated testing in place, they're now in a position where they can move to ",(0,a.kt)("a",o({parentName:"li"},{href:"https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment"}),"Continuous Deployment"),"."),(0,a.kt)("li",{parentName:"ol"},'Releases become boring. This is good. They "just work\u2122\ufe0f" and so the team can focus instead on building the cool features that are going to make users lives even better.')),(0,a.kt)("h2",o({},{id:"manual-zero-downtime-releases-with-app-services"}),"Manual zero downtime releases with App Services"),(0,a.kt)("p",null,"App Services have the ability to scale out. To ",(0,a.kt)("a",o({parentName:"p"},{href:"https://azure.microsoft.com/en-us/blog/scaling-up-and-scaling-out-in-windows-azure-web-sites/"}),"quote the docs"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A scale out operation is the equivalent of creating multiple copies of your web site and adding a load balancer to distribute the demand between them. When you scale out ... there is no need to configure load balancing separately since this is already provided by the platform.")),(0,a.kt)("p",null,"As you can see, scaling out works by having multiple instances of your app. Deployment slots are exactly this, but with an extra twist. If you add a deployment slot to your App Service, then you ",(0,a.kt)("strong",{parentName:"p"},"no longer deploy to production"),". Instead you deploy to your staging slot. Your staging slot is accessible in the same way your production slot is accessible. So whilst your users may go to ",(0,a.kt)("a",o({parentName:"p"},{href:"https://my-glorious-app.io"}),"https://my-glorious-app.io"),", your staging slot may live at ",(0,a.kt)("a",o({parentName:"p"},{href:"https://my-glorious-app-stage.azurewebsites.net"}),"https://my-glorious-app-stage.azurewebsites.net")," instead. Because this is accessible, this is testable. You are in a position to test the deployed application before making it generally available."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"diagram of network traffic going to various App Service Deployment Slots",src:n(19914).Z,width:"600",height:"487"})),(0,a.kt)("p",null,'Once you\'re happy that everything looks good, you can "swap slots". What this means, is the version of the app living in the staging slot, gets moved into the production slot. So that which lived at ',(0,a.kt)("a",o({parentName:"p"},{href:"https://my-glorious-app-stage.azurewebsites.net"}),"https://my-glorious-app-stage.azurewebsites.net")," moves to ",(0,a.kt)("a",o({parentName:"p"},{href:"https://my-glorious-app.io"}),"https://my-glorious-app.io"),". For a more details on what that involves ",(0,a.kt)("a",o({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/app-service/deploy-staging-slots#what-happens-during-a-swap"}),"read this"),". The significant take home is this: there is no downtime. Traffic stops being routed to the old instance and starts being routed to the new one. It's as simple as that."),(0,a.kt)("p",null,"I should mention at this point that there's a ",(0,a.kt)("a",o({parentName:"p"},{href:"https://opensource.com/article/17/5/colorful-deployments"}),"number of zero downtime strategies out there")," and slots can help support a number of these. This includes canary deployments, where a subset of traffic is routed to the new version prior to it being opened out more widely. In our case, we're looking at rolling deployments, where we replace the currently running instances of our application with the new ones; but it's worth being aware that there are other strategies that slots can facilitate."),(0,a.kt)("p",null,"So what does it look like when slots swap? Well, to test that out, we swapped slots on our two App Service instances. We repeatedly CURLed our apps ",(0,a.kt)("a",o({parentName:"p"},{href:"/2021/01/29/surfacing-azure-pipelines-build-info-in-an-aspnet-react-app"}),(0,a.kt)("inlineCode",{parentName:"a"},"api/build"))," endpoint that exposes the build information; to get visibility around which version of our app we were routing traffic to. This is what we saw:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{}),'Thu Jan 21 11:51:51 GMT 2021\n{"buildNumber":"20210121.5","buildId":"17992","commitHash":"c2122919df54bfa6a0d20bceb9f06890f822b26e"}\nThu Jan 21 11:51:54 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\nThu Jan 21 11:51:57 GMT 2021\n{"buildNumber":"20210121.5","buildId":"17992","commitHash":"c2122919df54bfa6a0d20bceb9f06890f822b26e"}\nThu Jan 21 11:52:00 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\nThu Jan 21 11:52:03 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\nThu Jan 21 11:52:05 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\nThu Jan 21 11:52:08 GMT 2021\n{"buildNumber":"20210121.5","buildId":"17992","commitHash":"c2122919df54bfa6a0d20bceb9f06890f822b26e"}\nThu Jan 21 11:52:10 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\nThu Jan 21 11:52:12 GMT 2021\n{"buildNumber":"20210121.5","buildId":"17992","commitHash":"c2122919df54bfa6a0d20bceb9f06890f822b26e"}\nThu Jan 21 11:52:15 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\nThu Jan 21 11:52:17 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\n')),(0,a.kt)("p",null,"The first new version of our application showed up in a production slot at 11:51:54, and the last old version showed up at 11:52:12. So it took a total of 15 seconds to complete the transition from hitting only instances of the old application to hitting only instances of the new application. During that 15 seconds either old or new versions of the application would be serving traffic. Significantly, there was always a version of the application returning responses."),(0,a.kt)("p",null,"This is ",(0,a.kt)("em",{parentName:"p"},"very")," exciting! We have zero downtime deployments!"),(0,a.kt)("h2",o({},{id:"rollbacks-for-bonus-points"}),"Rollbacks for bonus points"),(0,a.kt)("p",null,"We now have the new version of the app (",(0,a.kt)("inlineCode",{parentName:"p"},"buildNumber: 20210121.6"),") in the production slot, and the old version of the app (",(0,a.kt)("inlineCode",{parentName:"p"},"buildNumber: 20210121.5"),") in the staging slot."),(0,a.kt)("p",null,"Slots have a tremendous rollback story. If it emerges that there was some uncaught issue in your release and you'd like to revert to the previous version, you can! Just as we swapped just now to move ",(0,a.kt)("inlineCode",{parentName:"p"},"buildNumber: 20210121.6")," from the staging slot to the production slot and ",(0,a.kt)("inlineCode",{parentName:"p"},"buildNumber: 20210121.5")," the other way, we can swap right back and revert our release like so:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"diagram of network traffic going to various App Service Deployment Slots exposing build number",src:n(92965).Z,width:"600",height:"522"})),(0,a.kt)("p",null,"Once again users going to ",(0,a.kt)("a",o({parentName:"p"},{href:"https://my-glorious-app.io"}),"https://my-glorious-app.io")," are hitting ",(0,a.kt)("inlineCode",{parentName:"p"},"buildNumber: 20210121.5"),"."),(0,a.kt)("p",null,"This is also ",(0,a.kt)("em",{parentName:"p"},"very")," exciting! We have zero downtime deployments ",(0,a.kt)("em",{parentName:"p"},"and")," rollbacks!"),(0,a.kt)("h2",o({},{id:"automated-zero-downtime-releases-with-health-checks"}),"Automated zero downtime releases with Health checks"),(0,a.kt)("p",null,"The final piece of the puzzle here automation. You're a sophisticated team, you've put a great deal of energy into automating your tests. You don't want your release process to be manual for this very reason; you trust your test coverage. You want to move to Continuous Deployment."),(0,a.kt)("p",null,"Fortunately, automating swapping slots is a breeze with ",(0,a.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml"),". Consider the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-yml"}),"- job: DeployApp\n        displayName: Deploy app\n        dependsOn:\n        - DeployARMTemplates\n\n        steps:\n        - download: current\n          artifact: webapp\n\n        - task: AzureWebApp@1\n          displayName: 'Deploy Web Application'\n          inputs:\n            azureSubscription: $(serviceConnection)\n            resourceGroupName: $(azureResourceGroup)\n            appName: $(appServiceName)\n            package: $(Pipeline.Workspace)/webapp/**/*.zip\n            slotName: stage\n            deployToSlotOrASE: true\n            deploymentMethod: auto\n\n      - job: SwapSlots\n        displayName: Swap Slots\n        dependsOn:\n        - DeployApp\n\n        steps:\n          - task: AzureAppServiceManage@0\n            displayName: Swap Slots\n            inputs:\n              action: 'Swap Slots'\n              azureSubscription: $(serviceConnection)\n              resourceGroupName: $(azureResourceGroup)\n              webAppName: $(appServiceName)\n              SourceSlot: 'stage'\n")),(0,a.kt)("p",null,"The first job here, deploys our previously built ",(0,a.kt)("inlineCode",{parentName:"p"},"webapp")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"stage")," slot. The second job swaps the slot."),(0,a.kt)("p",null,"When I first considered this, the question rattling around in the back of my mind was this: how does App Service know when it's safe to swap? What if we swap before our app has fully woken up and started serving responses?"),(0,a.kt)("p",null,"It so happens that using ",(0,a.kt)("a",o({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/app-service/monitor-instances-health-check"}),"Health checks, App Service caters for this beautifully"),'. A health check endpoint is a URL in your application which, when hit, checks the dependencies of your application. "Is the database accessible?" "Are the APIs I depend upon accessible?" The diagram from the docs expresses it very well:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"diagram of traffic hitting the health check endpoint",src:n(15762).Z,width:"400",height:"166"})),(0,a.kt)("p",null,"This approach is very similar to ",(0,a.kt)("a",o({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/"}),"liveness, readiness and startup probes in Kubernetes"),". To make use of Health checks, in our ARM template for our App Service we have configured a ",(0,a.kt)("inlineCode",{parentName:"p"},"healthCheckPath"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-json"}),'"siteConfig": {\n    "linuxFxVersion": "[parameters(\'linuxFxVersion\')]",\n    "alwaysOn": true,\n    "http20Enabled": true,\n    "minTlsVersion": "1.2",\n    "healthCheckPath": "/api/health",\n    //...\n}\n')),(0,a.kt)("p",null,"This tells App Service where to look to check the health. The health check endpoint itself is provided by the ",(0,a.kt)("inlineCode",{parentName:"p"},"MapHealthChecks")," in our ",(0,a.kt)("inlineCode",{parentName:"p"},"Startup.cs")," of our .NET application:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cs"}),'app.UseEndpoints(endpoints => {\n    endpoints.MapControllerRoute(\n        name: "default",\n        pattern: "{controller}/{action=Index}/{id?}");\n\n    endpoints.MapHealthChecks("/api/health");\n});\n')),(0,a.kt)("p",null,"You read a full list of all the ways App Service uses Health checks ",(0,a.kt)("a",o({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/app-service/monitor-instances-health-check#what-app-service-does-with-health-checks"}),"here"),". Pertinent for zero downtime deployments is this:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"when scaling up or out, App Service pings the Health check path to ensure new instances are ready.")),(0,a.kt)("p",null,"This is the magic sauce. App Service doesn't route traffic to an instance until it's given the thumbs up that it's ready in the form of passing health checks. This is excellent; it is this that makes automated zero downtime releases a reality."),(0,a.kt)("p",null,"Props to the various Azure teams that have made this possible; I'm very impressed by the way in which the Health checks and slots can be combined together to support some tremendous use cases."))}h.isMDXComponent=!0},92965:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/app-service-with-slots-and-build-number-0f5ae4841544e4192ed19075775ba2fa.png"},19914:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/app-service-with-slots-bdbc420150a05a222ec247beeeda469f.png"},15762:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/webp;base64,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"}}]);