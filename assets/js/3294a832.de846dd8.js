"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[95962],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||r;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},90488:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});a(67294);var n=a(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const i={title:"Making Easy Auth tokens survive releases on Linux Azure App Service",authors:"johnnyreilly",image:"./easy-auth-zero-downtime-deployment.webp",tags:["Azure","Easy Auth","tokens","SAS","Blob Storage"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2021/02/16/easy-auth-tokens-survive-releases-on-linux-azure-app-service",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-02-16-easy-auth-tokens-survive-releases-on-linux-azure-app-service/index.md",source:"@site/blog/2021-02-16-easy-auth-tokens-survive-releases-on-linux-azure-app-service/index.md",title:"Making Easy Auth tokens survive releases on Linux Azure App Service",description:'I wrote recently about zero downtime deployments on Azure App Service. Many applications require authentication, and ours is no exception. In our case we\'re using Azure Active Directory facilitated by "Easy Auth" which provides authentication to our App Service.',date:"2021-02-16T00:00:00.000Z",formattedDate:"February 16, 2021",tags:[{label:"Azure",permalink:"/tags/azure"},{label:"Easy Auth",permalink:"/tags/easy-auth"},{label:"tokens",permalink:"/tags/tokens"},{label:"SAS",permalink:"/tags/sas"},{label:"Blob Storage",permalink:"/tags/blob-storage"}],readingTime:3.91,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Making Easy Auth tokens survive releases on Linux Azure App Service",authors:"johnnyreilly",image:"./easy-auth-zero-downtime-deployment.webp",tags:["Azure","Easy Auth","tokens","SAS","Blob Storage"],hide_table_of_contents:!1},prevItem:{title:"Goodbye Client Affinity, Hello Data Protection with Azure",permalink:"/2021/02/27/goodbye-client-affinity-hello-data-protection-with-azure"},nextItem:{title:"Azure App Service, Health checks and zero downtime deployments",permalink:"/2021/02/11/azure-app-service-health-checks-and-zero-downtime-deployments"}},p={image:a(33989).Z,authorsImageUrls:[void 0]},c=[{value:"SaS-sy ARM Templates",id:"sas-sy-arm-templates",level:2},{value:"What&#39;s actually happening?",id:"whats-actually-happening",level:2}],u={toc:c};function h(e){var{components:t}=e,i=r(e,["components"]);return(0,n.kt)("wrapper",o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"I ",(0,n.kt)("a",o({parentName:"p"},{href:"/2021/02/11/azure-app-service-health-checks-and-zero-downtime-deployments"}),"wrote recently about zero downtime deployments on Azure App Service"),". Many applications require authentication, and ours is no exception. In our case we're using Azure Active Directory facilitated by ",(0,n.kt)("a",o({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/app-service/overview-authentication-authorization"}),'"Easy Auth"')," which provides authentication to our App Service."),(0,n.kt)("p",null,"Our app uses a Linux App Service. It's worth knowing that Linux App Services run as a Docker container. As a consequence, Easy Auth works in a slightly different way; effectively as a middleware. ",(0,n.kt)("a",o({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/app-service/overview-authentication-authorization#on-containers"}),"To quote the docs on Easy Auth"),":"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This module handles several things for your app:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Authenticates users with the specified provider"),(0,n.kt)("li",{parentName:"ul"},"Validates, stores, and refreshes tokens"),(0,n.kt)("li",{parentName:"ul"},"Manages the authenticated session"),(0,n.kt)("li",{parentName:"ul"},"Injects identity information into request headers The module runs separately from your application code and is configured using app settings. No SDKs, specific languages, or changes to your application code are required.")),(0,n.kt)("p",{parentName:"blockquote"},"The authentication and authorization module runs in a separate container, isolated from your application code. Using what's known as the ",(0,n.kt)("a",o({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/architecture/patterns/ambassador"}),"Ambassador")," pattern, it interacts with the incoming traffic to perform similar functionality as on Windows.")),(0,n.kt)("p",null,"However, ",(0,n.kt)("a",o({parentName:"p"},{href:"https://social.msdn.microsoft.com/Forums/en-US/dde551b2-c86d-474b-b0a6-cc66163785a1/restarting-azure-app-service-on-linux-with-azure-active-directory-authentication-resets-authme#b59951ab-623a-4442-a221-80c157387bbe"}),"Microsoft have acknowledged there is a potential bug in Easy Auth support at present"),". When the app service is restarted, the stored tokens are removed, and ",(0,n.kt)("strong",{parentName:"p"},"authentication begins to fail"),". As you might well imagine, authentication similarly starts to fail when a new app service is introduced - as is the case during deployment."),(0,n.kt)("p",null,"This is really significant. You may well have \"zero downtime deployment\", but it doesn't amount to a hill of beans if the moment you've deployed your users find they're effectively logged out. ",(0,n.kt)("a",o({parentName:"p"},{href:"https://social.msdn.microsoft.com/Forums/en-US/dde551b2-c86d-474b-b0a6-cc66163785a1/restarting-azure-app-service-on-linux-with-azure-active-directory-authentication-resets-authme#b59951ab-623a-4442-a221-80c157387bbe"}),"The advice from Microsoft")," is to use ",(0,n.kt)("a",o({parentName:"p"},{href:"https://docs.microsoft.com/en-gb/archive/blogs/jpsanders/azure-app-service-authentication-using-a-blob-storage-for-token-cache"}),"Blob Storage for Token Cache"),":"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"https://twitter.com/cgillum"}),"Chris Gillum")," said in a ",(0,n.kt)("a",o({parentName:"p"},{href:"https://cgillum.tech/2016/03/07/app-service-token-store/"}),"blog on the topic"),":"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"you can provision an Azure Blob Storage container and configure your web app with a SaS URL (with read/write/list access) pointing to that blob container. This SaS URL can then be saved to the ",(0,n.kt)("inlineCode",{parentName:"p"},"WEBSITE_AUTH_TOKEN_CONTAINER_SASURL")," app setting. When this app setting is present, all tokens will be stored in and fetched from the specified blob container.")),(0,n.kt)("p",null,"To turn that into something visual, what's suggested is this:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"diagram of Easy Auth with blog storage",src:a(33989).Z,width:"474",height:"600"})),(0,n.kt)("h2",o({},{id:"sas-sy-arm-templates"}),"SaS-sy ARM Templates"),(0,n.kt)("p",null,"I have the good fortune to work with some very talented people. One of them, ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/jmccor99"}),"John McCormick")," turned his hand to putting this proposed solution into ",(0,n.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml")," and ARM template-land. First of all, let's look at our ",(0,n.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml"),". We add the following, prior to our deployment job:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-yml"}),"- job: SASGen\n        displayName: Generate SAS Token\n\n        steps:\n          - task: AzurePowerShell@4\n            name: ObtainSasTokenTask\n            inputs:\n              azureSubscription: $(serviceConnection)\n              ScriptType: inlineScript\n              Inline: |\n                $startTime = Get-Date\n                $expiryTime = $startTime.AddDays(90)\n                $storageAcc = Get-AzStorageAccount -ResourceGroupName $(azureResourceGroup) -Name $(storageAccountName)\n                $ctx = $storageAcc.Context\n                $sas = New-AzStorageContainerSASToken -Context $ctx -Name \"tokens\" -Permission \"rwl\" -Protocol HttpsOnly -StartTime $startTime -ExpiryTime $expiryTime -FullUri\n                Write-Host \"##vso[task.setvariable variable=sasToken;issecret=true;isOutput=true]$sas\"\n              azurePowerShellVersion: 'LatestVersion'\n\n      - job: DeployAppARMTemplates\n        variables:\n          sasToken: $[dependencies.SASGen.outputs['ObtainSasTokenTask.sasToken'] ]\n        displayName: Deploy App ARM Templates\n        dependsOn:\n        - SASGen\n\n        steps:\n          - task: AzureResourceManagerTemplateDeployment@3\n            displayName: Deploy app-service ARM Template\n            inputs:\n              deploymentScope: Resource Group\n              azureResourceManagerConnection: $(serviceConnection)\n              subscriptionId: $(subscriptionId)\n              action: Create Or Update Resource Group\n              resourceGroupName: $(azureResourceGroup)\n              location: $(location)\n              templateLocation: Linked artifact\n              csmFile: 'infra/app-service/azuredeploy.json'\n              csmParametersFile: 'infra/azuredeploy.parameters.json'\n              overrideParameters: >-\n                -sasUrl $(sasToken)\n              deploymentMode: Incremental\n")),(0,n.kt)("p",null,"There's two notable things happening above:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("inlineCode",{parentName:"li"},"SASGen")," job, a PowerShell script runs that ",(0,n.kt)("a",o({parentName:"li"},{href:"https://docs.microsoft.com/en-us/powershell/module/az.storage/new-azstoragecontainersastoken?view=azps-5.5.0"}),"generates a SaS token URL")," with read, write and list permissions that will last for 90 days. (Incidentally, there is a way to do this via ",(0,n.kt)("a",o({parentName:"li"},{href:"https://stackoverflow.com/a/56127006/761388"}),"ARM templates, and without PowerShell")," ","-"," but alas it didn't seem to work when we experimented with it.)"),(0,n.kt)("li",{parentName:"ol"},"The generated (secret) token URL (",(0,n.kt)("inlineCode",{parentName:"li"},"sasUrl"),") is passed as a parameter to our App Service ARM template. The ARM template sets an appsetting for the app service:")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-json"}),'{\n    "apiVersion": "2020-09-01",\n    "name": "appsettings",\n    "type": "config",\n    "properties": {\n        "WEBSITE_AUTH_TOKEN_CONTAINER_SASURL": "[parameters(\'sasUrl\')]"\n    }\n},\n')),(0,n.kt)("p",null,"If you google ",(0,n.kt)("inlineCode",{parentName:"p"},"WEBSITE_AUTH_TOKEN_CONTAINER_SASURL")," you will not find a geat deal. Documentation is short. What you will find is ",(0,n.kt)("a",o({parentName:"p"},{href:"http://jsandersblog.azurewebsites.net/2017/08/10/azure-app-service-authentication-using-a-blob-storage-for-token-cache/"}),"Jeff Sanders excellent blog on the topic"),". It is, in terms of content, it has some commonality with this post; except in Jeff's example he's manually implementing the workaround in the Azure Portal."),(0,n.kt)("h2",o({},{id:"whats-actually-happening"}),"What's actually happening?"),(0,n.kt)("p",null,"With this in place, every time someone logs into your app a JSON token is written to the storage like so:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"token in storage account",src:a(10472).Z,width:"600",height:"125"})),(0,n.kt)("p",null,"If you take the trouble to look inside you'll find something like this tucked away:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-json"}),'{\n  "encrypted": true,\n  "tokens": {\n    "aad": "herewith_a_very_very_long_encrypted_token"\n  },\n  "version": 1\n}\n')),(0,n.kt)("p",null,"With this in place, you can safely restart your app service and / or deploy a new one, safe in the knowledge that the tokens will live on in the storage account, and that consequently you will not be unauthenticating users."))}h.isMDXComponent=!0},33989:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/easy-auth-zero-downtime-deployment-d8f0e5334be29100329883e0cbacc7b1.webp"},10472:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/webp;base64,UklGRpQUAABXRUJQVlA4IIgUAACQXwCdASpYAn0APp1Kn0yiIaMnozTZyLATiWlu/GPY+b0Gg1w/rV/fO03/JeEPnQ99SQDjfsRjR5O/KP/B9QL1buz+w+YR7H/Vf2N8gPUa8Uf9D3APJz/i+Ez9u/0//K/1n5Y/YF/Jf6z/wP8T+aH00/4H/s/3P5me2j639gT9gPTG/+/t+/dP/5+6v+w//2B+jhNPBI8f7oKIqEJeZrT/kSwFQmf//S5E6ZZgkZY2smZFu5DvsWkGTa61bjHIxlcD7Jt2RE5S3PVLKBjsqOSksQMhPx2VHJSSaVWOV9tOV6AZVqYdlRyUldlAyDlJYgSTqnN9wQWd1tCkcyn/tC8kP8w7ob4fuDQ/uYZTauvQQ/mGs62zsvN4GbsPY513BL7Sqz+WjS5FMONoT3z30xmtu3Lnxxvxf4rAikIpoFjpfEa0pZePZthygtR6HDWhgRJ3awdgjmgCEPX1Dn5jbRnJ2zvycfJOZMIWLwynh8u8VTk8tvU2cTOV1tQ27RVVOJ9tId+hbmqLgKcLQlW9ag8tanDxwV5EY7yxUPinwisHi4ytc6cCGyFO3gofU9uLYov1+lmU6nLQmekpTECV3fU0K+uZ4faeYNm5sJ/hFkfKmlD/d6xckn9Veof7uEQTODy7RwWCCWcxsNHial2tVQlvZbC8lom6Nh4zYcc19nQQnOHdW6oKHhjXViVWQSUxHbi3CmxiJOr6nKHJ+L+f3ZI1DCf+m10k7J88iYit789YYDi5vdk+91NY8pOcZ/Dg9rLbvNwoy631oZT3yOASJCkjoCk2IuG2ALbwwPfcYLrsZ+I32pElK67xA9JLRZqh+EjZaduJM4UBiF/OSGvWhSe13kMffKxoO/QnX/dAtrQaTPVpC0DVw+66w6H/OG+5ZMEU3UiEMv3nq77/AF1xE95/AsLKT5YKYJ7cpTMt0VH/Td67/Uf9N3r05vGpl8QDHsBmUIoxNYE+T16t8sp7ND68tDfhAyGZ5Se3CBkWFWq/FGxd7V35Yw/x2VHJSWIGQn47KjkoQAD+xOto+Qy54JeIWe+UaY2LzSAgXBXWcoKGZ3j0hIrMhN+2jDjhNysQCivX+1W89VA78gvjLL/0C6hYs8Sx5wtsw7gS9BJNzrRXQ86WYPx5H6VDPtw8pfQuS1XKEyHSRRAni5RkXl2Py4HMEaxQ5RVZBfY4KkiPPyc6WmTrF6i4XWXTDXJxN9Wj399jsfd/cVlKrqAn/gHrOrYvHR+HYS/4U1mmfAp7dm2NMXLtOCmpo+CRJtHQkHcY6GrWEz+nRHWjZtGdLZ+/BTJ6XzcBXKYX/kOQAIDV/zwNawDxN56dNHIyajuAMwDGO6C7Efx9vx7Kl/5g5/tvHxsBoAMMNzzOorgJtFcku2UM4fhndIhmeZ+Gkm0YvOYEVGgWNZUC0TUbkbkdFE6VAj1rN4wkkPFVVc49jDWJMQPzMcCk8OT8DjLHD2nYgaDtaOXQ56+lTMgF4+GWQF9qdXrq5vDYPvDxa19NF6n/vb39GidVv9tT8m3XqI7TzhAoiABNAAHQF/B11lSmCVt/YBLUb7mqYey4ce2bYo8MdbQWBExV0l5jSxXIyZwS43uH7QCEORO4nOsz8/H/WNGVNq5o31hbt6Qr7g7b/waDmMlxcCwEUp6GB1i5sxQZGsjZiX0FrjcjED+fyWtusp56Pz+/68vdEZKcTWXbQj89H9yMdApYPzQQLyQweRi/8YJPRNcQY/7J/H/NwqN4ctKROK6vMXa/jwHtLsZQhomW3bIj5Zm+R8fgRn6c+fm7cciAy0rfmN8XGiUlwuP3K3hhCIha8OnRkvq4FSZTw3+enpNMnDfuKaGmrqmU6pCR0hTkbuThLdWXElV98RcXebmQ43wVOuIX857pOVASpwMrkMWAAAUo2bbQhLpO9DrKoH7SOt+D0viwT9p81geJqadPHaAP3EwAYN1z+TiL+SBDtJsh9wh53KBDm5P5yTO2SEKvcEENUTz8ZKwEZ+3ObqlJgFb+aMMd8mb42Un9FFmqwqjg29DU5zUiOIKZV7kCSIMAwnRyH1/AjfeeeS4IM3hRtiuyhKjwgWlIKkaruBetDfIcXEi2Aj81QC8CIqcVDWdbCZyx0CS5Mt7J8GgOCZEVJRyEc4C0SRLwYs44dojGSgxwhTTqupSU+p4uMgN1HYuz5f9+ICMFfkvJxsuOGsLEVWAWlsYX+z4lc3Z/NfV4BrGcAkDvmXzajZbilUYs/esdTTZjIqFQUvfbW9jWswfZqkBNsalMO990SA5H5cRpLOvF4vwC9CjFgWdSIh2pA1/8OafDErX2a1/U4gtj8jlLOSL98K81cS/Mv8MwFPfqOQRHxSqtgbrBCeTNlDqDINi/hobxaPERPXGEDDolZxZGleVXhn0Uf0OPe1dUpuR1lQXo6Y7tsTP2iREs5IcqsSI9z160WfU0R1g7LODYAVmOq2nW/HN3aQ/XeOvCbVbcrq3dm7RRzs3vMdcrcLuZwgeDbJDHyrkJQTlDh5s6qSo8yl1xuDLkSv7VqPtLZURWeWkHSzRhLOg2RtIyT/K9XP2pHQwrOjWoRLsfcrhTxEKJCroZDG6jlifcLXj3jWLE7F6JfsmVRihAgpSYz+oGx93NJWjfp//x5118p/PikI636/9wPhGYKjpG8OFcR2SDH9QIL2Mut0KSiEMsGPLJyOai2X7bWGC1GqN18uL+u1iqL1CHpFxNzxlQjz0miZzV7cv6Gr18c4+TNGOe73CEi5RQHBJun4cR/cS4/nMBnd5wPIxlNwBGy1SKIO7UlZrdbIWo9BggearqF1ff7Aqcye72doq5ufT36xg6xQoSWs1VkK8+Q8NeeouvpBkUpSvzqf1wEw4VswX6jYpBCotKp48o+2KeHA3CxyDFMjChRp/JRecwBkW4iEGOg5iF1w4XHNNEGq/WMmcZxXALRFwR0CH0He1+B16Cv0j7Yp+xJZdbpwUjj5K9hQ+Q6M1DlIlmRWGkYLAOo4kU+MBlgHuhj69HaZChAiMHDNK50R9a1FCRx4qvL8Ck7K4dmv80zYZBPFeBmdLrLSi5IuXGzHCTtGBI81+0IrsBuCdd8Xn+4wdBgSalH6gNx7/D8FiYoceROdoJW22BF0JbkrdVrx6PqrzQ4tuXZvr3M7JxJkaUaz/Falciph3YxWbj9vcFDQN5c/JFa99lAz2IJVQG/aU7//aCbwbiSmtebRBNTRychDygPMGn6lTSNEbLKobBPc/jf5r+TnTFoqVJUTs+WR+tjiFM6AuiJBezjOK4BafPHWxTVFnqDtzxKAOwQaCD5Mf2gQg0yaKBVGoMlc4TrwsCJltdlp/JZAyiydC2fs1oI6Ho4ZIbNftxLH3d5OQGBYX4fEosUAG/hT2q/TbFu+LGtplyAUGQbqSALWhgI5kaieBHvlYX9/xSHila16VVnIZML1ABj4Pnb08kn3A3Yzy2zPfPVj87F5Z2WVOWrxRSPPqotqqczuPJor8eX4GOSuzMXIQGqzhxZwW7t5lVLdCxTia2auJfflBQSMILsQt40phFrOAtEFHaL9gy3kSzA5lghjd4A59DliCkHIJMSDaAoksqVVNuOJXF8oGEt8idDW9nV2E2t1OjgXorq7/b8NdwtJaDCpNiMT2Gr3Akg2X28sHiYUvJzgZ2lSMRnlbFfdtXpy3q8910KaomJIfAe1lkibO2IGhAzWLmAvJteT1ucBJBi770y8mhImKFq37eGQUajax70nTjct7pME9H4ElL0AuOKJG4Arvg39Q/N+Qpc/KDu+aewiPwKARLKT8v73K2eR62Kb5xr8apko03lF9FroYZTmcUQVgAW6e/75i6C/clrvlCByOJ1ZYzJt11IqIK72kuUz0VsUhEoq7X4RfiLcK0cZX/koeX53oSHCnZ5i9sLhvNOM+gwo6pVz7Aq2PB4HELEtTZ60Buox3OmHY3Z+kKWk2MleWYTb50SX8iVZSTlmezIvOTD6LLLqCK8nBa9CAXLxVeN9qpNJTtWd21LNpKbjcJd7s/kkfUIh0jKB+w1J7l03rWGPUgpAW+ekSp9qst07DdjOnlqJ/4Q26xeYRDVT4EI4z9908D5/h7sSAdxRRjVnexy4AYfkzXtUBDt9FxxkTeA44IlBRkJ4AgV3FXYEVu1XXmg0x08XIwPY8N/5oxn/OzGDlKYYvN9Y8g0brPbAtWevdOZs2Y0wVWoNF1Mq61Su3x8qiv5SmWBFu7nKsQHfyB9INCOlWrrAPW6rVUrQeEUQYAM4NzIQNLi/dOGjPpEKP8gArpHeSgRCXMXWcHmgKFxtK+tMnEFUmmMeiUJnJ2RXLw0550cdr1F8EBySvKjQT9BD2kkZz+qCsGS8THHDPd4uyNh/VqjX/2xcBGyad2LD0ZJg2IL9HzIiI7QHTADUBGZHNLa22nf5SpNhWm8w0/E9Ilm3Lt9O9dkiQ2II3hyDo1ZN04r4pZ60wQcqLqFbeRzSEthm84I0oi0sBaNFd3JI1vDvXf49rIweN7XbCOvarwmBAblF69vgr5thgRE6qID8VAUvTrt/rhboYjBO+TjpS3zmvklE3wkhyBILIow0cGKfquLQIWJ++I7++I5Hu0sVzWxouPnCIdFFnpMqNvYkoYIpLjIDPTP8SHZn15YHTICmkFlIbza18u+ZlpqXs8BVuw+clsdzVl9bSho+fdSQctqNuOZZZPS2x0iX4mSpZ1reirfDJnkxLeLFwJoZjyDAWQWaghJ+hmd39pAm3L40EH1EtbymiKHAI5+nRsKnEMt8R0BgeaFqgiPBOsSoZEzbN8ahWSG0N99vHrrksP8s0lYoebAB6Cxe7XTFn8vNWY6Kl0zPdgXFsR1i2cdcpz6kdh7HCgv+t3TGyC3WPKD0kvr3m27Z6agXUDlqoyOUudK6Gcpz5kDgO5E59AvI/hBAyjKvyr2pvdT0mFfMEysYTIaaKT7gUmDjM0L1KOkT0qvG4TiFyAKQ1kUqUZAgx68PVM0Pd/7LYzvRlt+2reh7Pnty1gx7ERfGsaOOSjr3LpZ1YCP2tWCLoWknx8FljPICvAE+86ZVVWaPwhjSYY3bm5zFRosF70ox/wXmCBsYzNwOHYzHB1Tt2b8VyN5eDFXgtapY5GtAu30MYF9aVffQAcVKwTTczcjg1yyZdIpToECT+bT69Jlnknxfo15xcGyV/vtYAuOQwZb997NzZQekwEOXpvo3bTwwethEtDlPjxfjpeNpq1fbslAxDm6Ws2pktDByDlnlITjyPv3SzYuTt/pXBJoRocQCU8EL22dtswNCVQcVEtTMrx1RRjuW+cBoyxO1HLuqaPUs9q/F+0ENz+zUXh8WaUOSw5r3ih3EqucZvAYs//8f//oB/acyBxs0aGWHYT4IeofqbefZisQoXuDlzwjZqQpS+KJ9cZ8c5Iz0Xngcb4wEkHp9ysht4Pjq8gaTiu9yS9QLNnoEJEqCaF2FhTfHSkCFjGsXFDXSYomAo4zsPaW87YrTXbFYYblYtM8E2/lo2TOL9lnPelPnSZCRdtuE805ox4L/BDBxH2IoQCDEQfj2YZ1ti/+u7c/N6a2QIqsW4/vVTxrX1udAYw4CRpMr8+yUR3P01H0xUBOuW5EIvTA+hjmc0amk9mBC1AoaPiUNTuvbGhodSRiNwsfhLNs4LB1mAQcWyx1VjjsFfpmRUvhaG7HY2rgPc9l46C1AbdBV4RUqhpoZGR6OIHGY1Ml0Wy6APnwnm5SdPCjMbqO7/heml80umm7TbleYsLlHDetEnHgKNebeO9/U1UB9T9psfrwm5HCLkpL/0TNuNtv5ZV0DKq7nRTg72GDvBAKPcSElnad97lrWi+w8ZxSKDM0A2Rm2yCVtPvE+0vk/PcrHuyF/zUVgHkDYD3NOBhGZCXF+4iYOJzTM7KLCw6O8v5COm/er1keNCZzyOZQ0LNV7Ba6tmBHNWuMTivG2EWxZHKr3l2231Fl51s9oyPU8IBt2NcvVCDyw+mETGp3mE/24HjiRSaPyjXbo5dlooMMIeQGmk2wNewPu1b2oEoA2x4l3fq3pAR0vA5ElXsA4SPDkry2LJXanUGgEikHjXlLo9k8NgpsL8A7GqcX/N3XuTHoQlfjM9EGf2MyT+X7hM/kSes1VZk+7cLrhi37nbI6DWfuicD15AhNgJB8jiyzYvNceJ41nWZPM3/rDFNBoBR1mZoLdIp9RmJUnM3D2s7WOktqNmPMjE1yzduiQtQkWuBoOpXiKE5nXWXaILsahDoUbrd/7EtcCxFiDTxx18DYW5AHorLjKBJ4mBa8TQ8XYiXret8ryeSxgXhYoxHNQ8/45xITegkKe3bbL37loFnKJ8ppVGZsL+HNyUDjfzon2UNLHFviws+gD1wUPSdukxlWt7eJd9AuM+G+yzj363NfCpU0FCzz9aS9u95aVFLYZbsuS0awoI2VsEK/dkyu2OviFrV3OQC1uIvYP8Q+WQmZ7kLPRvuDFviSpWwJ+GaU6+xOVvX5lnrg55OlYxjhq3DVXBeYSH9oQ/Y/vMJA43BVD89rwdccMnFfgDpaCyaQNOSnirsvZrTdEqdPTVuvtKawQ8PXpG9hORShNZyPgU6Q9RVa3Il0CxL7vCvRGtsrxvz2Vxl7BVC7DFf+WdxJlp++7UZiNdzhqOYWBo8+ovi80Lvk7x3vt3n63BL5iZ0oat7kOjcmGnwIQybkvqAf7Z9oz2PjjxNwsYoQFLenkVRSTMMMc/EnJMQSg3Zy+fHhUbIrGANZtg5aspWAkKaCsAyTUtPDr3iJsBCj1BWn/GOs4FFf9lp07wqNSOqNxODrTFpxe+Pajr/r81KaYGDOvL8rbOJPiX5VGkRD3rScEbQ9nCCIRugCM1b9nwYZNpl5kN8qg15DyJ+90puPytyBFPo3UWVs9DBwsfb7L7bM57PC0y3bypaWNyScvTkoGnbJ7WQzd4htAQxe5jO52gMLRKBJtG8R2VXyfsnG8obBzlxQt7IJ7Gr20a3NN0V+xm1tY1sb1o4AAAAAAAAAAAAAAA="}}]);