"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[79225],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),h=p(a),d=o,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||i;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1512:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return d}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),s=["components"],r={title:"Azure App Service, Health checks and zero downtime deployments",authors:"johnnyreilly",tags:["Azure App Service","Health checks","deployment slots","zero downtime deployments"],hide_table_of_contents:!1},l=void 0,p={permalink:"/2021/02/11/azure-app-service-health-checks-and-zero-downtime-deployments",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-02-11-azure-app-service-health-checks-and-zero-downtime-deployments/index.md",source:"@site/blog/2021-02-11-azure-app-service-health-checks-and-zero-downtime-deployments/index.md",title:"Azure App Service, Health checks and zero downtime deployments",description:"I've been working recently on zero downtime deployments using Azure App Service. They're facilitated by a combination of Health checks and deployment slots. This post will talk about why this is important and how it works.",date:"2021-02-11T00:00:00.000Z",formattedDate:"February 11, 2021",tags:[{label:"Azure App Service",permalink:"/tags/azure-app-service"},{label:"Health checks",permalink:"/tags/health-checks"},{label:"deployment slots",permalink:"/tags/deployment-slots"},{label:"zero downtime deployments",permalink:"/tags/zero-downtime-deployments"}],readingTime:7.485,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Azure App Service, Health checks and zero downtime deployments",authors:"johnnyreilly",tags:["Azure App Service","Health checks","deployment slots","zero downtime deployments"],hide_table_of_contents:!1},prevItem:{title:"Making Easy Auth tokens survive releases on Linux Azure App Service",permalink:"/2021/02/16/easy-auth-tokens-survive-releases-on-linux-azure-app-service"},nextItem:{title:"Azure RBAC: role assignments and ARM templates",permalink:"/2021/02/08/arm-templates-security-role-assignments"}},u={authorsImageUrls:[void 0]},c=[{value:"Why zero downtime deployments?",id:"why-zero-downtime-deployments",level:2},{value:"Manual zero downtime releases with App Services",id:"manual-zero-downtime-releases-with-app-services",level:2},{value:"Rollbacks for bonus points",id:"rollbacks-for-bonus-points",level:2},{value:"Automated zero downtime releases with Health checks",id:"automated-zero-downtime-releases-with-health-checks",level:2}],h={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"I've been working recently on zero downtime deployments using Azure App Service. They're facilitated by a combination of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/monitor-instances-health-check"},"Health checks")," and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/deploy-staging-slots"},"deployment slots"),". This post will talk about why this is important and how it works."),(0,i.kt)("h2",{id:"why-zero-downtime-deployments"},"Why zero downtime deployments?"),(0,i.kt)("p",null,"Historically (and for many applications, currently) deployment results in downtime. A period of time during the release where an application is not available to users whilst the new version is deployed. There are a number of downsides to releases with downtime:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Your users cannot use your application. This will frustrate them and make them sad."),(0,i.kt)("li",{parentName:"ol"},"Because you're a kind person and you want your users to be happy, you'll optimise to make their lives better. You'll release when the fewest users are accessing your application. It will likely mean you'll end up working late, early or at weekends."),(0,i.kt)("li",{parentName:"ol"},"Again because you want to reduce impact on users, you'll release less often. This means that every release will bring with it a greater collection of changes. This is turn will often result in a large degree of focus on manually testing each release, to reduce the likelihood of bugs ending up in users hands. This is a noble aim, but it drags the teams focus away from shipping.")),(0,i.kt)("p",null,"Put simply: downtime in releases impacts customer happiness and leads to reduced pace for teams. It's a vicious circle."),(0,i.kt)("p",null,"But if we turn it around, what does it look like if releases have ",(0,i.kt)("em",{parentName:"p"},"no")," downtime at all?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Your users can always use your application. This will please them."),(0,i.kt)("li",{parentName:"ol"},"Your team is now safe to release at any time, day or night. They will likely release more often as a consequence."),(0,i.kt)("li",{parentName:"ol"},"If your team has sufficient automated testing in place, they're now in a position where they can move to ",(0,i.kt)("a",{parentName:"li",href:"https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment"},"Continuous Deployment"),"."),(0,i.kt)("li",{parentName:"ol"},'Releases become boring. This is good. They "just work\u2122\ufe0f" and so the team can focus instead on building the cool features that are going to make users lives even better.')),(0,i.kt)("h2",{id:"manual-zero-downtime-releases-with-app-services"},"Manual zero downtime releases with App Services"),(0,i.kt)("p",null,"App Services have the ability to scale out. To ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/blog/scaling-up-and-scaling-out-in-windows-azure-web-sites/"},"quote the docs"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A scale out operation is the equivalent of creating multiple copies of your web site and adding a load balancer to distribute the demand between them. When you scale out ... there is no need to configure load balancing separately since this is already provided by the platform.")),(0,i.kt)("p",null,"As you can see, scaling out works by having multiple instances of your app. Deployment slots are exactly this, but with an extra twist. If you add a deployment slot to your App Service, then you ",(0,i.kt)("strong",{parentName:"p"},"no longer deploy to production"),". Instead you deploy to your staging slot. Your staging slot is accessible in the same way your production slot is accessible. So whilst your users may go to ",(0,i.kt)("a",{parentName:"p",href:"https://my-glorious-app.io"},"https://my-glorious-app.io"),", your staging slot may live at ",(0,i.kt)("a",{parentName:"p",href:"https://my-glorious-app-stage.azurewebsites.net"},"https://my-glorious-app-stage.azurewebsites.net")," instead. Because this is accessible, this is testable. You are in a position to test the deployed application before making it generally available."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"diagram of network traffic going to various App Service Deployment Slots",src:a(19914).Z,width:"600",height:"487"})),(0,i.kt)("p",null,'Once you\'re happy that everything looks good, you can "swap slots". What this means, is the version of the app living in the staging slot, gets moved into the production slot. So that which lived at ',(0,i.kt)("a",{parentName:"p",href:"https://my-glorious-app-stage.azurewebsites.net"},"https://my-glorious-app-stage.azurewebsites.net")," moves to ",(0,i.kt)("a",{parentName:"p",href:"https://my-glorious-app.io"},"https://my-glorious-app.io"),". For a more details on what that involves ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/deploy-staging-slots#what-happens-during-a-swap"},"read this"),". The significant take home is this: there is no downtime. Traffic stops being routed to the old instance and starts being routed to the new one. It's as simple as that."),(0,i.kt)("p",null,"I should mention at this point that there's a ",(0,i.kt)("a",{parentName:"p",href:"https://opensource.com/article/17/5/colorful-deployments"},"number of zero downtime strategies out there")," and slots can help support a number of these. This includes canary deployments, where a subset of traffic is routed to the new version prior to it being opened out more widely. In our case, we're looking at rolling deployments, where we replace the currently running instances of our application with the new ones; but it's worth being aware that there are other strategies that slots can facilitate."),(0,i.kt)("p",null,"So what does it look like when slots swap? Well, to test that out, we swapped slots on our two App Service instances. We repeatedly CURLed our apps ",(0,i.kt)("a",{parentName:"p",href:"/2021/01/29/surfacing-azure-pipelines-build-info-in-an-aspnet-react-app"},(0,i.kt)("inlineCode",{parentName:"a"},"api/build"))," endpoint that exposes the build information; to get visibility around which version of our app we were routing traffic to. This is what we saw:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Thu Jan 21 11:51:51 GMT 2021\n{"buildNumber":"20210121.5","buildId":"17992","commitHash":"c2122919df54bfa6a0d20bceb9f06890f822b26e"}\nThu Jan 21 11:51:54 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\nThu Jan 21 11:51:57 GMT 2021\n{"buildNumber":"20210121.5","buildId":"17992","commitHash":"c2122919df54bfa6a0d20bceb9f06890f822b26e"}\nThu Jan 21 11:52:00 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\nThu Jan 21 11:52:03 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\nThu Jan 21 11:52:05 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\nThu Jan 21 11:52:08 GMT 2021\n{"buildNumber":"20210121.5","buildId":"17992","commitHash":"c2122919df54bfa6a0d20bceb9f06890f822b26e"}\nThu Jan 21 11:52:10 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\nThu Jan 21 11:52:12 GMT 2021\n{"buildNumber":"20210121.5","buildId":"17992","commitHash":"c2122919df54bfa6a0d20bceb9f06890f822b26e"}\nThu Jan 21 11:52:15 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\nThu Jan 21 11:52:17 GMT 2021\n{"buildNumber":"20210121.6","buildId":"18015","commitHash":"062ac1488fcf1737fe1dbab0d05c095786218f30"}\n')),(0,i.kt)("p",null,"The first new version of our application showed up in a production slot at 11:51:54, and the last old version showed up at 11:52:12. So it took a total of 15 seconds to complete the transition from hitting only instances of the old application to hitting only instances of the new application. During that 15 seconds either old or new versions of the application would be serving traffic. Significantly, there was always a version of the application returning responses."),(0,i.kt)("p",null,"This is ",(0,i.kt)("em",{parentName:"p"},"very")," exciting! We have zero downtime deployments!"),(0,i.kt)("h2",{id:"rollbacks-for-bonus-points"},"Rollbacks for bonus points"),(0,i.kt)("p",null,"We now have the new version of the app (",(0,i.kt)("inlineCode",{parentName:"p"},"buildNumber: 20210121.6"),") in the production slot, and the old version of the app (",(0,i.kt)("inlineCode",{parentName:"p"},"buildNumber: 20210121.5"),") in the staging slot."),(0,i.kt)("p",null,"Slots have a tremendous rollback story. If it emerges that there was some uncaught issue in your release and you'd like to revert to the previous version, you can! Just as we swapped just now to move ",(0,i.kt)("inlineCode",{parentName:"p"},"buildNumber: 20210121.6")," from the staging slot to the production slot and ",(0,i.kt)("inlineCode",{parentName:"p"},"buildNumber: 20210121.5")," the other way, we can swap right back and revert our release like so:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"diagram of network traffic going to various App Service Deployment Slots exposing build number",src:a(92965).Z,width:"600",height:"522"})),(0,i.kt)("p",null,"Once again users going to ",(0,i.kt)("a",{parentName:"p",href:"https://my-glorious-app.io"},"https://my-glorious-app.io")," are hitting ",(0,i.kt)("inlineCode",{parentName:"p"},"buildNumber: 20210121.5"),"."),(0,i.kt)("p",null,"This is also ",(0,i.kt)("em",{parentName:"p"},"very")," exciting! We have zero downtime deployments ",(0,i.kt)("em",{parentName:"p"},"and")," rollbacks!"),(0,i.kt)("h2",{id:"automated-zero-downtime-releases-with-health-checks"},"Automated zero downtime releases with Health checks"),(0,i.kt)("p",null,"The final piece of the puzzle here automation. You're a sophisticated team, you've put a great deal of energy into automating your tests. You don't want your release process to be manual for this very reason; you trust your test coverage. You want to move to Continuous Deployment."),(0,i.kt)("p",null,"Fortunately, automating swapping slots is a breeze with ",(0,i.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml"),". Consider the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"- job: DeployApp\n        displayName: Deploy app\n        dependsOn:\n        - DeployARMTemplates\n\n        steps:\n        - download: current\n          artifact: webapp\n\n        - task: AzureWebApp@1\n          displayName: 'Deploy Web Application'\n          inputs:\n            azureSubscription: $(serviceConnection)\n            resourceGroupName: $(azureResourceGroup)\n            appName: $(appServiceName)\n            package: $(Pipeline.Workspace)/webapp/**/*.zip\n            slotName: stage\n            deployToSlotOrASE: true\n            deploymentMethod: auto\n\n      - job: SwapSlots\n        displayName: Swap Slots\n        dependsOn:\n        - DeployApp\n\n        steps:\n          - task: AzureAppServiceManage@0\n            displayName: Swap Slots\n            inputs:\n              action: 'Swap Slots'\n              azureSubscription: $(serviceConnection)\n              resourceGroupName: $(azureResourceGroup)\n              webAppName: $(appServiceName)\n              SourceSlot: 'stage'\n")),(0,i.kt)("p",null,"The first job here, deploys our previously built ",(0,i.kt)("inlineCode",{parentName:"p"},"webapp")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"stage")," slot. The second job swaps the slot."),(0,i.kt)("p",null,"When I first considered this, the question rattling around in the back of my mind was this: how does App Service know when it's safe to swap? What if we swap before our app has fully woken up and started serving responses?"),(0,i.kt)("p",null,"It so happens that using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/monitor-instances-health-check"},"Health checks, App Service caters for this beautifully"),'. A health check endpoint is a URL in your application which, when hit, checks the dependencies of your application. "Is the database accessible?" "Are the APIs I depend upon accessible?" The diagram from the docs expresses it very well:'),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"diagram of traffic hitting the health check endpoint",src:a(53129).Z,width:"400",height:"166"})),(0,i.kt)("p",null,"This approach is very similar to ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/"},"liveness, readiness and startup probes in Kubernetes"),". To make use of Health checks, in our ARM template for our App Service we have configured a ",(0,i.kt)("inlineCode",{parentName:"p"},"healthCheckPath"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"siteConfig": {\n    "linuxFxVersion": "[parameters(\'linuxFxVersion\')]",\n    "alwaysOn": true,\n    "http20Enabled": true,\n    "minTlsVersion": "1.2",\n    "healthCheckPath": "/api/health",\n    //...\n}\n')),(0,i.kt)("p",null,"This tells App Service where to look to check the health. The health check endpoint itself is provided by the ",(0,i.kt)("inlineCode",{parentName:"p"},"MapHealthChecks")," in our ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup.cs")," of our .NET application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'app.UseEndpoints(endpoints => {\n    endpoints.MapControllerRoute(\n        name: "default",\n        pattern: "{controller}/{action=Index}/{id?}");\n\n    endpoints.MapHealthChecks("/api/health");\n});\n')),(0,i.kt)("p",null,"You read a full list of all the ways App Service uses Health checks ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/monitor-instances-health-check#what-app-service-does-with-health-checks"},"here"),". Pertinent for zero downtime deployments is this:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"when scaling up or out, App Service pings the Health check path to ensure new instances are ready.")),(0,i.kt)("p",null,"This is the magic sauce. App Service doesn't route traffic to an instance until it's given the thumbs up that it's ready in the form of passing health checks. This is excellent; it is this that makes automated zero downtime releases a reality."),(0,i.kt)("p",null,"Props to the various Azure teams that have made this possible; I'm very impressed by the way in which the Health checks and slots can be combined together to support some tremendous use cases."))}d.isMDXComponent=!0},92965:function(e,t,a){t.Z=a.p+"assets/images/app-service-with-slots-and-build-number-91478bf2d53b78206f2da2fc07adfe0a.png"},19914:function(e,t,a){t.Z=a.p+"assets/images/app-service-with-slots-2d94dec8d93d263366455c73f947fe67.png"},53129:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAACmCAMAAADDNSn6AAAC/VBMVEX///9ZtNkCAgJRsdc5mcb7+/tTstj09PQiIiKZba0PDw+ASZjt7e0XFxdVs9hXs9lOsNcAcMX9/v9YtNkAcsa51TJOTk5dttr3/P7Ly8vw+PxNr9Znut2U01GV1k/7/f/e399iuNui1er1+/3iOwApkcKWaKo5OTn9/f13wuAyMjLs9/vi8vm01u6t2uxsvd4sLCz5/f5BQUHcPADQ5fbG5PGe0+mPxt81l8UvlMQAasRpaWlmZGN0wN+mqKiFhYba7veAxuKOzOZwv9+1trQcHBz29vbT6/WZ0eiTzueJyuQPespzcnK20yzP6vXL4vPv7+/p6ep9xOKio6KXmJnp9fr4+PingbiTZKh9RZbw8fKn2Ovm5eUmJiZ6QJOSkpJJSUnM6POP0UmKHQDy+f3J5/PC4/Hi4uOEyOOabq/m9Pnk8Pnf8fhBoMo8m8jHx8eMjY1XV1fW7fbX19dLrta+v72IVZ+dnZ0LCwt5GgC+4vCy3e7R0dFFRUW33u7PuthgYGHr6+vb29tdXVzYNwDOz8+wsbCtra273++AgIF7fHx2qz/nPQDy7fSs0u3U1NTCwsKFUZ2OoHtubm59tj+v0Cfm5+fz+uPw99Z3d3dqHQaZyuN4tgDc8Pi6urlgU02DwUGdyBd4PZGx0CCIwt2gdrNSUlJ2oEiLy0ZwoT718PjWwuMAaMJeIxDPMgCcIAD6+Puth8Ckfbasrqra7JVslEK+2D2nzBm0JwBZuuFnsdPj77bd7abK44HK4WePxB2MwQ1/ugD8/vbn7e/n3Ozg0erq9MieqJSYpIt1llKcyzWFvQfr4fJ3uddHrNXFxsSosJ6DmmtaRDz4/Ovu7+PHrtK9xsm4mMixj8CqJQC9nsxKosqOXqR7n1W72VBNLiVWqM8AZsHp9bkwXnB+nV7F3lHLsdvDqM4+l7y/3253jl68KgD4+/vBotMAbcur0leDr0hJODM7KCE6Fw3EqdDS1c8fjL8TX4UoVGdqiEmu0jhZMCOBnqBni5ZTWzCeGiygAAAbwUlEQVR42uzYSWgTURzH8V9WQbSWKTU1EdSYYLRqW4eYDIoruJQGFa2HqmhIRRETXJG4IRjRQ9CDaMUooaR4NDfNYmJtoIeUejAgFKEtFkGpUFQQURDfTJZajcc3Bfl/LjPv/OX9//BACCGEEELIfyHXgd/t3QUynXLRaA6TZqz9dARk+nRE4/HfipjX+uKvqMj02RX1hcPx6N1ynrU+Wzj+aiGIOoTCPaY/ne6Xv12A+YrPJtrir4pFOq4WT/tBVFBIZ7LD9Z6K+uFs5u2sNcUGC5V1Iv/72H0h/HVlnnhiMZZhEjvXv8tES0Woh6rST2KsxV9YoO8/g0qRs9G40iMHwl/fcKz+X4avykWGvlAPtZgFOLKlIJ47ZeXpFXvXdZsVER+LrMfJDhDuViwHurKe2NPu7t7egRclA7293d1PY57sPXxsux8SRTHku0I91NCTMgOO9If8wIM/DOQ/pB2AMDg7IYbE8S+vQVTg+jp6owFAof9ZZiKff67IT0xknvX3AWh5mGoeEkU2tRIj80D4c9kld2rlBpQ4DIVCXx9K2s9v8h8YCouhoRDb7CPXQHhjQfR6SXqTcl3e0NiAihbzcee+o/OT75tZD5tvWTAkhhMjNLX4Y0EYtyRJgdHUYE9PT2Tf6m3bWzdu1hh1OtYjYRNtwbbcerbZbVSEt0qQchS73a6vtZyx1OqMc+o0lR4tABVRCQsylb9OU8R6fFZ6rGkAIJyQi4z/oCJV8A1S6fHmQCLMenyzQiEXCY9/Pg1SDf8gppqxoI31qN2HooP3Q2x87QSpgnsQxpQcCwbHkkYrSvbcD7Y1gHClBHEXlYPUKObIRcaSplorKkXaFoDwpQQJ+AOMXrK7lSAmmcZo0ZnqkiYNC0LUowSJeHfsOOy8YXWNSm5/zXznVsZ7fuVSHRtcFERdLIg74EVJe8QdMDZ1oqhzu5GC8DZjy16DweAAYJgM4gSOeY8vBmP165oaITgveFsAc5ORgnB2rnnJqlWXDj16NPf6lCARyf/G1Qhg8CULsmDjGd1qQDiqoyCcXdSWNB+ZGsTuluyDH4HLlmKQl0fphqjitlYx+xb+CCK/Zp0HGufMZ0G2NbVuEBavph3C3d71WsU6/B1EL0UAs4kFweJOoL3VUkNB+Nq5e4lWsR5Vg7iAzkUsiGLBqe3GOgrC0a4TB7TaRydmarUnDdWD3ATa5ZElXNi0zQsIrbTUf7F3fz9NnXEcxz+nZ+e0IXjO8dTQ2iJtIUv5ZSnNZLoyCqXl1wihFHohEoqRH2EoIBAIUgI1gGC2EVlIyCLxwjhZdrHEeOM/sO3CX9dmyZbsaheLN9uyZEv2nEMBkdNCaakMfV1po8bw9ulzvs/TyMHxuTQqVXAVGFTZL0ApyLkXfUCXIG3qTU+M9FWgk+ffBTkYYZeXLIwREJ5ji9gZ5E9yZ3gaEO+uP/Ya6eEOEoTi3gU5CBNLaao05wRk6n7sDGL7+dHdagCTl+UV4rYU1eQANkH7LkjyzZSqVGlLX2CTQhCIkIxfvsJKk3pLoQFAS+XbM4cYessbOjq7znRcLS9sEXGAFq+rVJqF8B7OskzVH145d3nzLKu4I++tmEP0LdU2d1NlpoXiWYHmdZbMojy3ravvEg5AwJNBcriWY5/2Pr4refzo8rmz713mLbUlRE1dnu4tOO01dLQ2WXiWpmmW43leq+U5jmXln31c0tWL5GLmHOSMpL1x1wuqc+vOyhdUWlom0Bx1xIPoc/QtRU9ojtdSr9PyPDvMWSomW5A058tIDutoY/xXuFqCIo52kJwcvQg0WFgqGmnlZNZcFZEM6e35KpVjrnG/d+pHPUiLwSRC0kmxVAysUVfRpUeilgfIFBjyMEDiQUpw9BSUWG4gYpznqFg4mm1qQELC8/IUKGJ3X+0aZPjorRD9tSLBmFmIiEmWo2Liacpdjn37gkyBKudJ7MmZs2djB+HoMzhirjbR0nzlFhHRKvBUbLxRl63fZw7nGBnKv8AeiXffPxcjiJYVakxIgnQG21Q1QtKoHhjBTsv1PkhmXGpEMNNIjmKbjublf/Y3ECHWkCK7YIWe24jfIhnKvfVD2Lvi7BckiXIQnhYstmIkgSdDjW3aQwEAvtDJUDt2GkoLQzJnT0fEgBNJ0VtBloeMtfQhwuQ2KhfhOZbe8ISy5SA+0hTYNuBDfD798Gcyg2x9UG7rb8JVthYiKa4vYLvumVwAzUEmOKoURGPG4grgsTZiXZV1FsnQULS1GIS8S4i4VCEotBCMvKUor6ImO7vV1ppdU1fZaohrKA9FcsSt4MyHj15cOfv++yTMFWkmNA6zuqK8kgYDksOcPwQwagAiEKhCRG7GKEJ+qCFT54IQ1etBAivH1AGPtSoQgIT8CEkwbqGpLcYabCjIE7Zv4wKry6uxnbl9ScQWQ4Eee6T2O8jYMZqO/ertPF1y9/HjR4+a6upqS2zj1QWI6jvEqf0eGH/IERzC7GBZRr6zEWWlDDCTn44Ml8tqPUkaDDocc8Bs0OHoR1izXOYdc5SNOMoG7StSkql5JM7UyrHbB79xbCgsorfWBs1Wum8U5mCnnL0V8TXbpSmwCokSi/V6UURsf/y2iLgw1jJMz6+anQ6xTFXfv2gtRbODAZacEIP22ZNBB3Mh1Lw8Z59gXHPdLjtj1pgbnd6J6ZG0pf65NH9kiSXKVEJz1DasrnyrSCa9nkMg03lnAST7LCJfzQZnRaRG/093Hj5FPEbkrcC8Wq8JPEhLB1a9zGiQwXnrCJjQCjChSW9ua25u1rQDF0Zcx8zdGjNcGukXmoF7pfISS5jYSu/YuemiFmxo0JEiHK3tmSyIfQCG2MzS1ezgqogUGXl4P+vi32bEwbkCpF8PLQ3aA2VWKal32k+ClIUYyJu6WZNer6l3OldmAksO55RGDjLvlXaO84CzFIxjLvEevZU0tYPQo8eGDh0tUHXVIPZfZKj+mGps6iRSZvXri6ey7tyaxt4t508ArlAAI/aqB14GmNOIo0ER99qxHiSsmXY5IPHnNyLcFpZXSFvkKau0FCMkTIJM+sJMhYFcK9Ri06SltmFPp5IxrmbHVGOlM0gdj9Tjy1vnEQfpiw9X/tBE0MvMqlzh/vx5NIdgzjcDjKMZCHu7h7zz5pnmgL9tZmhqzNztDcPvnfF5SB9MlWKpHgkSDSikeMVjERs2tWBPRChbnBpTeReGkDqmZ1KPm7c+QzzkUcM3mH/dlVH1wO5ySM9N/kHMlwJgBv2Q06xardZ5Ru20D7qC4QvkBd89+9zTDBKkfkFNlliCcky4zfLKZ+zXsDfFhtud17Jrat3ubIUkuatkCvQOdCOFxGc3s0iP7wOIx2L+NCQ+NdSi3wpfuhSiqtHqAVHFALnSCMIsN4KYbkRVrii/4AswahGoCrQHE7/7AMpJECUc37WHP6D6RklFpo5iyZBmHB624TWMJ0juAgemcZDC/u+2jx/f3zxFejwzIS7tC9jiz0dE//Uq7NFSGRJjMgC4SoIoYnUdiEUsHK/9WGcUaI7jee3G4/J2ao3K2j6NAxX+de17E7Z884O8Ph6YEB8Rr/Bbxc2XU6dQBNDH8ZSy4SIDouq91mNh6dcmGCHPgO1mRxkcKNLjftbNV4p8dov0uLj2DAlRX0DqFdpA9Fo4SomWLuoshrKCLreFFjgtdQjuUfsfyvsFs9njS9Lj61kcNuoHuzZ2y0EMlSylgBN6eqGsPLuSplmt4u+iqpFqnocXpSK5Gz1OkR4eHDpqjWaXN+9OthqEvoJW2kDYkhwoqnbraFpLRSH0mJBqs2tkjaz9IAJYfn5HWh+rOHyYNnLI3e5DVMVNw32Q1BqpHWhLF5SIDXWU9FYVlZbtRMp51sgakXYN83PyfnX/x6dQkMu8WedJEOmJMx1RdNHa9SDZxp3bR145lLTUcTRHxUTn5SDlRl7Kz1VmaX3c/2kGSla9x94s1TqvyxdlgRh1hZB0vD6q80JFARTl1Bp5KjatMImDYDgdy7/Su9bLH+9LPSagyJP2hkWCpNUvQ0kXy0aCGDLZ7V9SY48BUZiyyQrZbYkU4wCc/uXbj6L7/S9S5JR0nPjjBJQx6jdruk1eHytmKDL1CHwkCLbv6rzgvoToWnf9cBDfgAPw+bcnYvn9LzJ9kB6/TeCQYuwkx4IZUZRTPM/3QTYpbDtVVPo8TTE2XeNYKibaDdkBBDkehVTkn5dZWXeeH95v5KL2ppEcUWXTlJathqzPwr3So6QYO1Q33cCmST52EU53G7LkB/kkihPEB8/W7tw6xN98St08hOgMlVKQLsiKK+hXeih+ZMvItWLTOBW7iDEbyUeCHP/kg08VnT5x/MTxD5gfnv9//xu5/9g716CoqjiA/3fv7AVT717vlruyW7BsA+yCy6PgQ8hjAXlsRPKSt8jES2KGhygIgqCJYCnaU2vsYWNTUY0io82kZk6YpdNTs5wek1M2TfWh14fqS+fcXfbuLvfeZXFXdzd+H2A8rujcn+f8z/mf/zk3EWcUbQ+/l2RPgMgVyAcDzrSYCVJCEUncSNagJMSEkHrwPLu/Q0KigZecJYj7gTkMfkuSGg/2RdP9RdNFkgqlkqRzZ/ooyGSnunK1uZ5rEzVCaWPA4yxHk6x7S4GXu5egidb94Meo2FN5pK2Uoc80UNAaE5Mz84AB0ychpmfDRVxyK0crZkRtBI9TP7J8eWMo8KIb2b17uQ78GDTHYtMcia5y/qpckosXdGY69xNiCREhZga8hKo0xJHo6EC4X9Fo2ZTqqgJxos0OJUKEJofL3WfSwmOWJhq8RLRJqXFAaQ4B/8dMW6OvCsRoTXHKlBDKXi7WpwgakZM54CVUnTjecXTp0+PB79HprdWICtEHlzOzE5CUkQErpXpaYTlwSJByp5TvAHiI7UPgQIOxNZOwS5wVpSd1gt9jWwnSeSBMA1/gpog8nW34aFaTNKVJ0WdqCJpy6Em54CE6ahyP59YRVTGcEbroQB6VDn5PHaHgiq+EaFSSvMMRrW8FKyHN2tzEFlV8SEwj2rVS2Akp8pgQqdTQHQQ2ChRdRmSE86FWBoCQPtr63EyCMSR0QHA5TmsawIqOWxh06u3iP5lZD55hUIowcL2kQELSViNy7IMgA0FIOGGtvKoDQSGmLuHsoaSPb6GQxBkhuaOjQflLr4eVUhZDe+G0EIpCRlJQZFebkA85FQhCci1CCLFJViMlF86NEHk8c00m1zZqUVpbpF0ULPUEhjabEDTSVh3Izcysas1Df2FACDETlrmQEYQJ0VBip2+LeLIjqhTCtidiG9Vk65ddD/1STGT3IuCEICOmhrqCxCLUJQNCCFNEWp5autiHMkQTiISmgG8XUj69Kd8InmEb1lEcBMAJYX8+qdWSpEISGEJCU1gh+AYwEYxdEjE+DOeR2ExbhdAj4BmWot6BdDgIwaDkNNIRWEKIIh2IMEIoRHehcvgk0goPC0mrrQTgEYIJHCF6VggtngJMRFFdGCKTz2aOkuKEeIU6giYcoBXzQoSXfjHTKYCuAfAOnfoUJ/St4O8welJsWcgV0okJaRYToqB7wUuodCpHdAz4O3iW5brG0KiWzFmInEoED1P6zDPP7FYJdPlGtEFVD/6LZUaL67JEyKPFhJC8MSRRIXcK+R7cU3/tu1sfBF4evBft794N/ku4dWEoFnnrY0kxIZSWr9YnqWv6d7lI68mqE4Fe0HLvkiV+vafeR1iHHWaOMR0vzfjyWb0SwprLavGKkOX387L7XlQG5M9CGmmX+1OhKL0iCsm7TVsQq1Zg1Sk6LwgRwweEbC6BaYo/B7fotNa702YQooGQu6pyD+cN68005VxN6v1SUl8QsvXT16eN7Hj93+3gDqXW+CAnegWdxdIKcSOUhPcPxyeRpISoAk+DC+WEuTExhLG8Nw5kPLU6W3/78qGnLUZSX3/j52/dMhJqoqfHnVZBaSaacjFoSUbAjpC+UmBp1BJkInia5fcsEef6Zlmjo4AoGa1cajDEGeLa29GXOMNa6EbfO8YAwyRH9ieMMlA9mNC/DCCqNiGyBGwMPbbpEWyE9fHIA881gTskTQcI2iRckpVEugojZG4Ld9ZN3xXbACwHMokY8DS6u12gur6s8iAg9nfIso4mS1NTN29OLelJPpoF+ZE7UjssL5ZZnVC77KP1kJ2wbc9+1NIel7VjZSrYUO3fdCc2wvpYUQlugadQrqsRGjUuhi05rU1KjEZ76q0jzRJCQVBVOsCUGv2uVmrFCkDs3IYjQI/11OwwAOQ/BhBVwz53600mz8YFAUTWygzDAGlro8BGPGtkcC4+oFRJWYWIji0tzS6HLVqijc2MVVI0NkxNn00M9Y1qwlA3hDwGiDQspLgnGxDVwalYSDIAGIoBsSo4db0MSetgPx4W/CTAnppV4NBHHnnjgTn44A4gUFrnGKILATtU4WhhIY6cIkmSsm1MKaviAVTR4Av85cZxqmTDTkTkihlCVkRVjsY1sQ1LE+L6x2AwmTW3Jw65GFsZ5vBYRzfddeddDyRXgtsMqK0523jup5XGtNZV6TWNzrXvlMQNSNp0AEJ9YsRa9vXz72+dtZDFLyGCk52FjN5iSIjMAszqysqwbZGyZPyZ2kFWyNYaeyE4nj90511Pt4P7pCsp50I5o1ajldAkIe8De0KSJITcDSMKQmts8YUE7J6vX77j5b+bZjtkJfMPWfsTspYFgY2wxYVICA4tm2sqAdpqhhx9vHHXmw/hyO42oSbC6U4sHaqsoSg2EOSqnK8gt3yYVqsJchadhKyDm4/1SrlCt4SMOgvBQd2eMHQLYz/eWa5dVTMG0N0vAw52fvXbA3fOyUgv+4wlnXYlgXLb3Kk5xtHeSCzqOWSmOS/PpCFc9hcyxWHECiuEm8BR1se5V2GWDHKzLKcYwg2BzwYVrlgrK6wpzh42hMFgR2W1odvZR3LT6KY5GYmOJXFM56JvOG2XFdH0On06V2mui8ZuWhqKSFJ8zHJcpg8ZatKq4QYT+h66bOP2h88ddm/aKy6kDUWTl8IAhg0JeMrbtDbSkM91EFmxdb6r2omN1P4CbmKkFQ7HEYpIh1EnLxocKA0FK8yAkpTM/kDbk2ul6C0IG+BGcvg9yxV/s/cB1dWAKMQhZ9V6xlJQtgr/86vBRlPb5ij2s21sY3bbZuAY+/1N5AOPDfE70ez3j8/BTVpRWCfMjNNeH1cJl1kAQjSIGqFzwQHZR4OLcW1VE3iL9eeywZ6gc/iKplcErvjLHg4DbzD8+ibL+gP3kae7o8Bdkmj07IQrRwmlUSUYgET2SrilDUdTiUEqXbyiTQbeYOz7hx+1jxWr0JVygldmyXZE9rSBV0gdDAILTH4tuE+0hlRzk6yqGVkSii7qBAEyuIAzu1dBZW9IvgVfwu+FaLIdXTnzuJ2RIcuVcryDZPbRBKm0Zzt4B65HMjAXjGq7pKyZ5onOkrwW4WUMP6S2BfjZ2m7AL3EZAw/Thi+U44xYrmh6n8+HDOlA3LIdfJP6WG7BUK8n+IYftaYqGnhAr80meJUoxI4ArR7GlbodO7LBo2ywNxL2PeujjUdHd6TUwsrgm0utYCiQ59hiusB/eVIdO6Livecv03JBrMPbJ+VyukglHn931uBb1cY8bORl1gg7fj1/++0vf8/381fXrpT6BmkgABNuCxJ1pFCinaDNOt7+1TmQ1KxRSihCraYx6BtJaXLABYuK16JhfDAryPN9ZBe0IR/oiqYm4KWyPY4dsjYsurkIjxA623jUh4QIRoUQQaP1rXW9VbkZGc3NzeaMvKS+xAPgGmYsPxi/9Gg9eIyPLHmSZ7/GV5h9EgZCFNYGIyE+e6WW4xaiEKSmdNa3QqviYVZUF/ejB7OtbbVnjbyCv3xSCCJU1tZI28B3YbhDbjy4W4Wo0rmRjGXnwSWLPGgEgbrJkMvXLo2B78IwXHGpELQRZkdoPbhDEzsP3r/dQ9l2FEcs6UQ/x2LEJCKE4GZOojBu16HLsvCp57Xdq2CWPHX2xOTk5Im39p2Z0YAj+x0PoyRKQMCgZYgwM6q3mFKGr4Mw4D5haZG4m7SBS6Jg36ljt92Hue22H95idaCG29iGYz+cQEZe+diPrzBzID5FTAgZ2wIOVGn0GX0NMSE6hmf0c5eg4Y4e/PI2V93kApx44vjxFzDHj794EnZFwdX7bA3HT515NcsHb3yfWxwRF4JLdUvBjgEK3zdDSWKLMpKMfb0NBZ3pnZ31DMyZsdEafDdAGIixZQuc/emDt0+fP/32Bz9dPXNpy65Lh/edtDZ8c+LM+OUoCBDi4/GQJQZhl4yvN1pOJsvxPUDqLppSKBFV8XA9DKXiefDgs6tFhJR/MX7h4lOYixfGJw7+uKv8yPiFRdMNRyoO+cJOvmdQ6VAPEYWQZDSExDOgahnQO2SxsBiKII2h1z9NysfbJrVhgkIiysvXHbn865UjE+s2rllz8NIuS8OVX4+UHcINZQHTQ5CRPFfFPhQh15gyMvRaklDMsKVMBE9QWYKzsSs2yASELFiwADnYePDgmoqFC9cgIZaGr6wNgSQEVFWuK+IskUM+o51O6QQPIduTjLtJyZNgJZuxF4JZV74Qg4VYGyLwLwNNCK6Io+US9+C23z1IUzueB+dvB5b8NH4hFWtwDCmPCGAhEJKHX5zjJhStHQEPE5SF5sE9/cNDAIWLpVkzhCAba/aWl48fRrEDOQlYIcA06AnCLR1yQpkbA15gLA3ng/c31aKt+DZnIRV7j1ybqr64b9/Fi9VT18oiAlYIQPxAptPLvsTjPGUqAC8RtKMDzYPxW2mCtzoK+WrB1L7JUz8cw5yaPBv0ZwALwZW8GnpWpbwKipabGlXgRTaPIh+IyEJOCCJi6rNjLz5h5cUXr0JZRQALAWgxppAE6XKsIlApYzx4mUEpy9IgeyGHrsHVb144ff6dd86fP/3P5GdTZYHcQzC6RLNWTZCU8IEQNZkSns6AtwlbLLWwLchOyMShyxcW7Xtr8uTJyRNnL7575auJvQEuBNE6kBcrodUEpbCPKAqFgiLUhEQf3lAPN4A0tPnec8vKmsiENjshaGq14Miv41NTU+PXLh/ae3Bv2f9ACEKXE27WawhHSK0pr68zHm4MWSU79qxvqgySyVY7CMHr84gF6zZWVKAlesX/RQimviVnoCopL6NZrzeZM3L7EjtjVHBTcBLCspEN5pyQicAX4lNsKXcQgnrIQgchBycCJ9vrF1yYKI+I4BdSsRCNXgu3wDw3lF1/TqxDyd1DzkImKlCyd2PZFMxzozn87viWS1vKIhyF/Hjlx0vjfl9s4sd84Shk4wWY52YS5SzkXZjHDeaFBDrzQnyMeSE+xryQ/9qxYxsAQSiKovTu8eNEiA29UzjBL1yBEiqYwR1ICMNYmthYQnHPCrd5eZNZ82f2EmSw1uUNsoeuBkNpPZwTkcv74BeXDEa7z5q34rqUlqzBDGxU1ci/CwAAAAD49wC4x6lKNraLpAAAAABJRU5ErkJggg=="}}]);