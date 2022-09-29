"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[79965],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},94429:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});t(67294);var r=t(3905);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const a={title:"Azure Functions and .NET 5: Query params, Dependency Injection, Bicep & Build",authors:"johnnyreilly",tags:["Azure Functions",".NET 5","querystring","query params","dependency injection","Bicep"],image:"./title-image.png",description:"The upgrade of Azure Functions from .NET Core 3.1 to .NET 5 is significant. This post shows part of the upgrade: Query params, Dependency Injection, Bicep & Build",hide_table_of_contents:!1},s=void 0,l={permalink:"/2021/06/11/azure-functions-dotnet-5-query-params-di-bicep",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-06-11-azure-functions-dotnet-5-query-params-di-bicep/index.md",source:"@site/blog/2021-06-11-azure-functions-dotnet-5-query-params-di-bicep/index.md",title:"Azure Functions and .NET 5: Query params, Dependency Injection, Bicep & Build",description:"The upgrade of Azure Functions from .NET Core 3.1 to .NET 5 is significant. This post shows part of the upgrade: Query params, Dependency Injection, Bicep & Build",date:"2021-06-11T00:00:00.000Z",formattedDate:"June 11, 2021",tags:[{label:"Azure Functions",permalink:"/tags/azure-functions"},{label:".NET 5",permalink:"/tags/net-5"},{label:"querystring",permalink:"/tags/querystring"},{label:"query params",permalink:"/tags/query-params"},{label:"dependency injection",permalink:"/tags/dependency-injection"},{label:"Bicep",permalink:"/tags/bicep"}],readingTime:3.38,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Azure Functions and .NET 5: Query params, Dependency Injection, Bicep & Build",authors:"johnnyreilly",tags:["Azure Functions",".NET 5","querystring","query params","dependency injection","Bicep"],image:"./title-image.png",description:"The upgrade of Azure Functions from .NET Core 3.1 to .NET 5 is significant. This post shows part of the upgrade: Query params, Dependency Injection, Bicep & Build",hide_table_of_contents:!1},prevItem:{title:"React 18 and TypeScript",permalink:"/2021/06/30/react-18-and-typescript"},nextItem:{title:"Azurite and Table Storage in a dev container",permalink:"/2021/05/15/azurite-and-table-storage-dev-container"}},p={image:t(59997).Z,authorsImageUrls:[void 0]},u=[{value:"Query params",id:"query-params",level:2},{value:"Dependency Injection, local development and Azure Application Settings",id:"dependency-injection-local-development-and-azure-application-settings",level:2},{value:"Bicep",id:"bicep",level:2},{value:"Building .NET 5 functions",id:"building-net-5-functions",level:2}],c={toc:u};function d(e){var{components:n}=e,a=o(e,["components"]);return(0,r.kt)("wrapper",i({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The upgrade of Azure Functions from .NET Core 3.1 to .NET 5 is significant. There's an excellent ",(0,r.kt)("a",i({parentName:"p"},{href:"https://codetraveler.io/2021/05/28/creating-azure-functions-using-net-5/"}),"guide")," for the general steps required to perform the upgrade. However there's a number of (unrelated) items which are not covered by that post:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Query params"),(0,r.kt)("li",{parentName:"ul"},"Dependency Injection"),(0,r.kt)("li",{parentName:"ul"},"Bicep"),(0,r.kt)("li",{parentName:"ul"},"Build")),(0,r.kt)("p",null,"This post will show how to tackle these."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"title image showing name of post and the Azure Functions logo",src:t(59997).Z,width:"1347",height:"431"})),(0,r.kt)("h2",i({},{id:"query-params"}),"Query params"),(0,r.kt)("p",null,"As part of the move to .NET 5 functions, we say goodbye to ",(0,r.kt)("a",i({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.http.httprequest?view=aspnetcore-5.0"}),(0,r.kt)("inlineCode",{parentName:"a"},"HttpRequest"))," and hello to ",(0,r.kt)("a",i({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/api/microsoft.azure.functions.worker.http.httprequestdata?view=azure-dotnet"}),(0,r.kt)("inlineCode",{parentName:"a"},"HttpRequestData")),". Now ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpRequest")," had a useful ",(0,r.kt)("a",i({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.http.httprequest.query?view=aspnetcore-5.0#Microsoft_AspNetCore_Http_HttpRequest_Query"}),(0,r.kt)("inlineCode",{parentName:"a"},"Query"))," property which allowed for the simple extraction of query parameters like so."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cs"}),'var from = req.Query["from"]\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HttpRequestData")," has no such property. However, it's straightforward to make our own. It's simply a matter of using ",(0,r.kt)("a",i({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.web.httputility.parsequerystring?view=net-5.0"}),(0,r.kt)("inlineCode",{parentName:"a"},"System.Web.HttpUtility.ParseQueryString"))," on ",(0,r.kt)("inlineCode",{parentName:"p"},"req.Url.Query")," and using that:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cs"}),'var query = System.Web.HttpUtility.ParseQueryString(req.Url.Query);\nvar from = query["from"]\n')),(0,r.kt)("h2",i({},{id:"dependency-injection-local-development-and-azure-application-settings"}),"Dependency Injection, local development and Azure Application Settings"),(0,r.kt)("p",null,"Dependency Injection is a much more familiar shape in .NET 5 if you're familiar with .NET Core web apps. Once again we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," file. To get the configuration built in such a way to support both local development and when deployed to Azure, there's a few things to do. When deployed to Azure you'll likely want to read from Azure Application Settings:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"screenshot of Azure Application Settings",src:t(10598).Z,width:"3014",height:"1364"})),(0,r.kt)("p",null,"To tackle both of these, you'll want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"AddJsonFile")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"AddEnvironmentVariables")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigureAppConfiguration"),". A final ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," might look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cs"}),'using System;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace MyApp\n{\n    public class Program\n    {\n        public static Task Main(string[] args)\n        {\n            var host = new HostBuilder()\n                .ConfigureAppConfiguration(configurationBuilder =>\n                    configurationBuilder\n                        .AddCommandLine(args)\n                        // below is for local development\n                        .AddJsonFile("local.settings.json", optional: true, reloadOnChange: true)\n                        // below is what you need to read Application Settings in Azure\n                        .AddEnvironmentVariables()\n                )\n                .ConfigureFunctionsWorkerDefaults()\n                .ConfigureServices(services =>\n                {\n                    services.AddLogging();\n                    services.AddHttpClient();\n                })\n                .Build();\n\n            return host.RunAsync();\n        }\n    }\n}\n')),(0,r.kt)("p",null,"With this approach in place, when the application runs, it should construct a configuration driven by all the providers required to run our application."),(0,r.kt)("h2",i({},{id:"bicep"}),"Bicep"),(0,r.kt)("p",null,"When it comes to deploying to Azure via ",(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/Azure/bicep"}),"Bicep"),", there's some small tweaks required:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"appSettings.FUNCTIONS_WORKER_RUNTIME")," becomes ",(0,r.kt)("inlineCode",{parentName:"li"},"dotnet-isolated")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"linuxFxVersion")," becomes ",(0,r.kt)("inlineCode",{parentName:"li"},"DOTNET-ISOLATED|5.0"))),(0,r.kt)("p",null,"Applied to the resource itself the diff looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-diff"}),"resource functionAppName_resource 'Microsoft.Web/sites@2018-11-01' = {\n  name: functionAppName\n  location: location\n  tags: tags_var\n  kind: 'functionapp,linux'\n  identity: {\n    type: 'SystemAssigned'\n  }\n  properties: {\n    serverFarmId: appServicePlanName_resource.id\n    siteConfig: {\n      http20Enabled: true\n      remoteDebuggingEnabled: false\n      minTlsVersion: '1.2'\n      appSettings: [\n        {\n          name: 'FUNCTIONS_EXTENSION_VERSION'\n          value: '~3'\n        }\n        {\n          name: 'FUNCTIONS_WORKER_RUNTIME'\n-          value: 'dotnet'\n+          value: 'dotnet-isolated'\n        }\n        {\n          name: 'AzureWebJobsStorage'\n          value: 'DefaultEndpointsProtocol=https;AccountName=${storageAccountName};AccountKey=${listKeys(resourceId('Microsoft.Storage/storageAccounts', storageAccountName), '2019-06-01').keys[0].value};EndpointSuffix=${environment().suffixes.storage}'\n        }\n      ]\n      connectionStrings: [\n        {\n          name: 'TableStorageConnectionString'\n          connectionString: 'DefaultEndpointsProtocol=https;AccountName=${storageAccountName};AccountKey=${listKeys(resourceId('Microsoft.Storage/storageAccounts', storageAccountName), '2019-06-01').keys[0].value};EndpointSuffix=${environment().suffixes.storage}'\n        }\n      ]\n-      linuxFxVersion: 'DOTNETCORE|LTS'\n+      linuxFxVersion: 'DOTNET-ISOLATED|5.0'\n      ftpsState: 'Disabled'\n      managedServiceIdentityId: 1\n    }\n    clientAffinityEnabled: false\n    httpsOnly: true\n  }\n}\n")),(0,r.kt)("h2",i({},{id:"building-net-5-functions"}),"Building .NET 5 functions"),(0,r.kt)("p",null,"Before signing off, there's one more thing to slip in. When attempting to build .NET 5 Azure Functions with the .NET SDK ",(0,r.kt)("em",{parentName:"p"},"alone"),", you'll encounter this error:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"The framework 'Microsoft.NETCore.App', version '3.1.0' was not found.\n")),(0,r.kt)("p",null,"Docs on this seem to be pretty short. The closest I came to docs was ",(0,r.kt)("a",i({parentName:"p"},{href:"https://stackoverflow.com/questions/66938752/net-5-the-framework-microsoft-netcore-app-version-3-1-0-was-not-found/66938753#66938753"}),"this comment on Stack Overflow"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To build .NET 5 functions, the .NET Core 3 SDK is required. So this must be installed alongside the 5.0.x sdk.")),(0,r.kt)("p",null,"So with Azure Pipelines you might have have something that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-yml"}),"stages:\n  - stage: build\n    displayName: build\n    pool:\n      vmImage: 'ubuntu-latest'\n    jobs:\n      - job: BuildAndTest\n        displayName: 'Build and Test'\n        steps:\n          # we need .NET Core SDK 3.1 too!\n          - task: UseDotNet@2\n            displayName: 'Install .NET Core SDK 3.1'\n            inputs:\n              packageType: 'sdk'\n              version: 3.1.x\n\n          - task: UseDotNet@2\n            displayName: 'Install .NET SDK 5.0'\n            inputs:\n              packageType: 'sdk'\n              version: 5.0.x\n\n          - task: DotNetCoreCLI@2\n            displayName: 'function app test'\n            inputs:\n              command: test\n\n          - task: DotNetCoreCLI@2\n            displayName: 'function app build'\n            inputs:\n              command: build\n              arguments: '--configuration Release --output $(Build.ArtifactStagingDirectory)/MyApp'\n\n          - task: DotNetCoreCLI@2\n            displayName: 'function app publish'\n            inputs:\n              command: publish\n              arguments: '--configuration Release --output $(Build.ArtifactStagingDirectory)/MyApp /p:SourceRevisionId=$(Build.SourceVersion)'\n              publishWebProjects: false\n              modifyOutputPath: false\n              zipAfterPublish: true\n\n          - publish: $(Build.ArtifactStagingDirectory)/MyApp\n            artifact: functionapp\n")),(0,r.kt)("p",null,"Have fun building .NET 5 functions!"))}d.isMDXComponent=!0},10598:function(e,n,t){n.Z=t.p+"assets/images/application-settings-96cb3327508d49cdc1956846b487522f.png"},59997:function(e,n,t){n.Z=t.p+"assets/images/title-image-25daaeb1b932de6ab532ce2710715904.png"}}]);