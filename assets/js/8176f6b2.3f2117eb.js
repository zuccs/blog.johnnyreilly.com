"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[95852],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17558:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],p={title:"Bicep meet Azure Pipelines",authors:"johnnyreilly",tags:["Bicep","ARM templates","Azure Pipelines","Azure CLI"],image:"./bicep-meet-azure-pipelines.png",hide_table_of_contents:!1},s=void 0,l={permalink:"/2021/03/20/bicep-meet-azure-pipelines",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-03-20-bicep-meet-azure-pipelines/index.md",source:"@site/blog/2021-03-20-bicep-meet-azure-pipelines/index.md",title:"Bicep meet Azure Pipelines",description:"Bicep is a terser and more readable alternative language to ARM templates. Running ARM templates in Azure Pipelines is straightforward. However, there isn't yet a first class experience for running Bicep in Azure Pipelines. This post demonstrates an approach that can be used until a Bicep task is available.",date:"2021-03-20T00:00:00.000Z",formattedDate:"March 20, 2021",tags:[{label:"Bicep",permalink:"/tags/bicep"},{label:"ARM templates",permalink:"/tags/arm-templates"},{label:"Azure Pipelines",permalink:"/tags/azure-pipelines"},{label:"Azure CLI",permalink:"/tags/azure-cli"}],readingTime:4.9,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Bicep meet Azure Pipelines",authors:"johnnyreilly",tags:["Bicep","ARM templates","Azure Pipelines","Azure CLI"],image:"./bicep-meet-azure-pipelines.png",hide_table_of_contents:!1},prevItem:{title:"Bicep meet Azure Pipelines 2",permalink:"/2021/03/23/bicep-meet-azure-pipelines-2"},nextItem:{title:"RSS update; we moved to Docusaurus",permalink:"/2021/03/17/rss-update-we-moved-to-docusaurus"}},u={image:n(71414).Z,authorsImageUrls:[void 0]},c=[{value:"Bicep: mostly ARMless",id:"bicep-mostly-armless",level:2},{value:"App Service with Bicep",id:"app-service-with-bicep",level:2},{value:"Bicep in <code>azure-pipelines.yml</code>",id:"bicep-in-azure-pipelinesyml",level:2},{value:"Update: an even simpler alternative",id:"update-an-even-simpler-alternative",level:2}],m={toc:c};function d(e){var t=e.components,p=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/bicep"},"Bicep")," is a terser and more readable alternative language to ARM templates. Running ARM templates in Azure Pipelines is straightforward. However, there isn't yet a first class experience for running Bicep in Azure Pipelines. This post demonstrates an approach that can be used until a Bicep task is available."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Bicep meet Azure Pipelines",src:n(71414).Z,width:"504",height:"252"})),(0,i.kt)("h2",{id:"bicep-mostly-armless"},"Bicep: mostly ARMless"),(0,i.kt)("p",null,"If you've been working with Azure and infrastructure as code, you'll likely have encountered ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/overview"},"ARM templates"),". They're a domain specific language that lives inside JSON, used to define the infrastructure that is deployed to Azure; App Services, Key Vaults and the like."),(0,i.kt)("p",null,"ARM templates are quite verbose and not the easiest thing to read. This is a consequence of being effectively a language nestled inside another language. Bicep is an alternative language which is far more readable. Bicep transpiles down to ARM templates, in the same way that TypeScript transpiles down to JavaScript."),(0,i.kt)("p",null,"Bicep is quite new, but already it enjoys feature parity with ARM templates (as of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/bicep/releases/tag/v0.3.1"},"v0.3"),") and ships as part of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MicrosoftDocs/azure-docs-cli/blob/master/docs-ref-conceptual/release-notes-azure-cli/index.md#arm-1"},"Azure CLI"),". However, as Bicep is new, it doesn't yet have a dedicated Azure Pipelines task for deployment. This should exist in future, perhaps as soon as the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/bicep/issues/1341"},"v0.4 release"),". In the meantime there's an alternative way to achieve this which we'll go through."),(0,i.kt)("h2",{id:"app-service-with-bicep"},"App Service with Bicep"),(0,i.kt)("p",null,"Let's take a simple Bicep file, ",(0,i.kt)("inlineCode",{parentName:"p"},"azuredeploy.bicep"),", which is designed to deploy an App Service resource to Azure. It looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bicep"},"@description('Tags that our resources need')\nparam tags object = {\n  costCenter: 'todo: replace'\n  environment: 'todo: replace'\n  application: 'todo: replace with app name'\n  description: 'todo: replace'\n  managedBy: 'ARM'\n}\n\n@minLength(2)\n@description('Base name of the resource such as web app name and app service plan')\nparam applicationName string\n\n@description('Location for all resources.')\nparam location string = resourceGroup().location\n\n@description('The SKU of App Service Plan')\nparam sku string\n\nvar appServicePlanName_var = 'plan-${applicationName}-${tags.environment}'\nvar linuxFxVersion = 'DOTNETCORE|5.0'\nvar fullApplicationName_var = 'app-${applicationName}-${uniqueString(applicationName)}'\n\nresource appServicePlanName 'Microsoft.Web/serverfarms@2019-08-01' = {\n  name: appServicePlanName_var\n  location: location\n  sku: {\n    name: sku\n  }\n  kind: 'linux'\n  tags: {\n    CostCenter: tags.costCenter\n    Environment: tags.environment\n    Description: tags.description\n    ManagedBy: tags.managedBy\n  }\n  properties: {\n    reserved: true\n  }\n}\n\nresource fullApplicationName 'Microsoft.Web/sites@2018-11-01' = {\n  name: fullApplicationName_var\n  location: location\n  kind: 'app'\n  tags: {\n    CostCenter: tags.costCenter\n    Environment: tags.environment\n    Description: tags.description\n    ManagedBy: tags.managedBy\n  }\n  properties: {\n    serverFarmId: appServicePlanName.id\n    clientAffinityEnabled: true\n    siteConfig: {\n      appSettings: []\n      linuxFxVersion: linuxFxVersion\n      alwaysOn: false\n      ftpsState: 'Disabled'\n      http20Enabled: true\n      minTlsVersion: '1.2'\n      remoteDebuggingEnabled: false\n    }\n    httpsOnly: true\n  }\n  identity: {\n    type: 'SystemAssigned'\n  }\n}\n\noutput fullApplicationName string = fullApplicationName_var\n")),(0,i.kt)("p",null,"When transpiled down to an ARM template, this Bicep file more than doubles in size:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"azuredeploy.bicep")," - 1782 bytes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"azuredeploy.json")," - 3863 bytes")),(0,i.kt)("p",null,"This tells you something of the advantage of Bicep. The template comes with an associated ",(0,i.kt)("inlineCode",{parentName:"p"},"azuredeploy.parameters.json")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentParameters.json#",\n  "contentVersion": "1.0.0.0",\n  "parameters": {\n    "tags": {\n      "value": {\n        "costCenter": "8888",\n        "environment": "stg",\n        "application": "hello-azure",\n        "description": "App Service for hello-azure",\n        "managedBy": "ARM"\n      }\n    },\n    "sku": {\n      "value": "B1"\n    }\n  }\n}\n')),(0,i.kt)("p",null,"It's worth remembering that you can use the same parameters files with Bicep that you can use with ARM templates. This is great for minimising friction when it comes to migrating."),(0,i.kt)("h2",{id:"bicep-in-azure-pipelinesyml"},"Bicep in ",(0,i.kt)("inlineCode",{parentName:"h2"},"azure-pipelines.yml")),(0,i.kt)("p",null,"Now we have our Bicep file, we want to execute it from the context of an Azure Pipeline. If we were working directly with the ARM template we'd likely have something like this in place:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"- task: AzureResourceManagerTemplateDeployment@3\n  displayName: 'Deploy Hello Azure ARM'\n  inputs:\n    azureResourceManagerConnection: '$(azureSubscription)'\n    action: Create Or Update Resource Group\n    resourceGroupName: '$(resourceGroupName)'\n    location: 'North Europe'\n    templateLocation: Linked artifact\n    csmFile: 'infra/app-service/azuredeploy.json'\n    csmParametersFile: 'infra/app-service/azuredeploy.parameters.json'\n    deploymentMode: Incremental\n    deploymentOutputs: resourceGroupDeploymentOutputs\n    overrideParameters: -applicationName $(Build.Repository.Name)\n\n- pwsh: |\n    $outputs = ConvertFrom-Json '$(resourceGroupDeploymentOutputs)'\n    foreach ($output in $outputs.PSObject.Properties) {\n        Write-Host \"##vso[task.setvariable variable=RGDO_$($output.Name)]$($output.Value.value)\"\n    }\n  displayName: 'Turn ARM outputs into variables'\n")),(0,i.kt)("p",null,"There's two tasks above. The first is the native task for ARM deployments which takes our ARM template and our parameters and deploys them. The second task takes the output variables from the first task and converts them into Azure Pipeline variables such that they can be referenced later in the pipeline. In this case this variablifies our ",(0,i.kt)("inlineCode",{parentName:"p"},"fullApplicationName")," output."),(0,i.kt)("p",null,"There is, as yet, no ",(0,i.kt)("inlineCode",{parentName:"p"},"BicepTemplateDeployment@1"),". ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/bicep/issues/1341"},"Though it's coming"),". In the meantime, the marvellous ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/adotfrank"},"Alex Frankel")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/bicep/issues/1341#issuecomment-802010110"},"advised"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"I'd recommend using the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/devops/pipelines/tasks/deploy/azure-cli?view=azure-devops"},"Azure CLI task")," to deploy. As long as that task is updated to Az CLI version 2.20 or later, it will automatically install the bicep CLI when calling ",(0,i.kt)("inlineCode",{parentName:"p"},"az deployment group create -f main.bicep"),".")),(0,i.kt)("p",null,"Let's give it a go!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"- task: AzureCLI@2\n  displayName: 'Deploy Hello Azure Bicep'\n  inputs:\n    azureSubscription: '$(azureSubscription)'\n    scriptType: bash\n    scriptLocation: inlineScript\n    inlineScript: |\n      az --version\n\n      echo \"az deployment group create --resource-group '$(resourceGroupName)' --name appservicedeploy\"\n      az deployment group create --resource-group '$(resourceGroupName)' --name appservicedeploy \\\n        --template-file infra/app-service/azuredeploy.bicep \\\n        --parameters infra/app-service/azuredeploy.parameters.json \\\n        --parameters applicationName='$(Build.Repository.Name)'\n\n      echo \"az deployment group show --resource-group '$(resourceGroupName)' --name appservicedeploy\"\n      deploymentoutputs=$(az deployment group show --resource-group '$(resourceGroupName)' --name appservicedeploy \\\n        --query properties.outputs)\n\n      echo 'convert outputs to variables'\n      echo $deploymentoutputs | jq -c '. | to_entries[] | [.key, .value.value]' |\n        while IFS=$\"\\n\" read -r c; do\n          outputname=$(echo \"$c\" | jq -r '.[0]')\n          outputvalue=$(echo \"$c\" | jq -r '.[1]')\n          echo \"setting variable RGDO_$outputname=$outputvalue\"\n          echo \"##vso[task.setvariable variable=RGDO_$outputname]$outputvalue\"\n        done\n")),(0,i.kt)("p",null,"The above is just a single Azure CLI task (as advised). It invokes ",(0,i.kt)("inlineCode",{parentName:"p"},"az deployment group create")," passing the relevant parameters. It then acquires the output properties using ",(0,i.kt)("inlineCode",{parentName:"p"},"az deployment group show"),". Finally it once again converts these outputs to Azure Pipeline variables with some ",(0,i.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},(0,i.kt)("inlineCode",{parentName:"a"},"jq"))," smarts."),(0,i.kt)("p",null,"This works right now, and running it results in something like the output below. So if you're excited about Bicep and don't want to wait for 0.4 to start moving on this, then this can get you going. To track the progress of the custom task, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/bicep/issues/1341"},"keep an eye on this issue"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Bicep in an Azure Pipeline",src:n(24934).Z,width:"1184",height:"1680"})),(0,i.kt)("h2",{id:"update-an-even-simpler-alternative"},"Update: an even simpler alternative"),(0,i.kt)("p",null,"There is even a simpler way to do this which I discovered subsequent to writing this. ",(0,i.kt)("a",{parentName:"p",href:"/2021/03/23/bicep-meet-azure-pipelines-2"},"Have a read"),"."))}d.isMDXComponent=!0},24934:function(e,t,n){t.Z=n.p+"assets/images/bicep-in-a-pipeline-d4e71abc6bdf587b3877ba5d53dcdd25.png"},71414:function(e,t,n){t.Z=n.p+"assets/images/bicep-meet-azure-pipelines-be44cb8e6656c7e7a9bc5d7e7f1ecf28.png"}}]);