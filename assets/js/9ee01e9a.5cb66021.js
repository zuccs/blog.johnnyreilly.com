"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[8279],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7057:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],p={title:"Azure Static Web App Deploy Previews with Azure DevOps",authors:"johnnyreilly",tags:["Azure Static Web Apps","Azure DevOps","Netlify deploy previews"],image:"./title-image.png",hide_table_of_contents:!1},s=void 0,l={permalink:"/2021/12/05/azure-static-web-app-deploy-previews-with-azure-devops",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-12-05-azure-static-web-app-deploy-previews-with-azure-devops/index.md",source:"@site/blog/2021-12-05-azure-static-web-app-deploy-previews-with-azure-devops/index.md",title:"Azure Static Web App Deploy Previews with Azure DevOps",description:"I love Netlify deploy previews. This post implements a pull request deployment preview mechanism for Azure Static Web Apps in the context of Azure DevOps which is very much inspired by the Netlify offering.",date:"2021-12-05T00:00:00.000Z",formattedDate:"December 5, 2021",tags:[{label:"Azure Static Web Apps",permalink:"/tags/azure-static-web-apps"},{label:"Azure DevOps",permalink:"/tags/azure-dev-ops"},{label:"Netlify deploy previews",permalink:"/tags/netlify-deploy-previews"}],readingTime:10.76,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Azure Static Web App Deploy Previews with Azure DevOps",authors:"johnnyreilly",tags:["Azure Static Web Apps","Azure DevOps","Netlify deploy previews"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"Open Graph: a guide to sharable social media previews",permalink:"/2021/12/12/open-graph-sharing-previews-guide"},nextItem:{title:"TypeScript vs JSDoc JavaScript",permalink:"/2021/11/22/typescript-vs-jsdoc-javascript"}},u={image:n(240).Z,authorsImageUrls:[void 0]},c=[{value:"Getting <code>defaultHostName</code> from Static Web Apps",id:"getting-defaulthostname-from-static-web-apps",level:2},{value:"Azure Pipelines tweaks",id:"azure-pipelines-tweaks",level:2},{value:"Updating the PR with a preview URL",id:"updating-the-pr-with-a-preview-url",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Enjoy! (and keep Azure tidy)",id:"enjoy-and-keep-azure-tidy",level:2}],d={toc:c};function m(e){var t=e.components,p=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I love ",(0,a.kt)("a",{parentName:"p",href:"https://www.netlify.com/products/deploy-previews/"},"Netlify deploy previews"),". This post implements a pull request deployment preview mechanism for Azure Static Web Apps in the context of Azure DevOps which is very much inspired by the Netlify offering."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"title image reading &quot;Azure Static Web App Deploy Previews with Azure DevOps&quot; with a Azure, Bicep and Azure DevOps logos",src:n(240).Z,width:"1600",height:"900"})),(0,a.kt)("p",null,"Having a build of your latest pull request which is deployed and clickable from the PR itself is a wonderful developer experience. It reduces friction for testing out changes by allowing you to see the impact from within the PR itself. No checking to see if an environment is free with the rest of the team, then manually running a pipeline and waiting whilst a deployment happens. No. It's all there without you having to lift a finger. I use Netlify deploy previews on my blog and have become accustomed to the delight that is this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of a Netlify deploy preview on my latest blog post",src:n(90502).Z,width:"1840",height:"464"})),(0,a.kt)("p",null,'I love this and I wanted to implement the "browse the preview" mechanism in Azure DevOps as well, using Azure Static Web Apps. This blog post contains two things:'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A pull request deployment environment mechanism using Azure and Azure Pipelines with Bicep."),(0,a.kt)("li",{parentName:"ol"},'A mechanism for updating a pull request in Azure DevOps with a link to the deployment environment (the "browse the preview")')),(0,a.kt)("p",null,"It's worth bearing in mind that there's a very similar feature to what we're going to build for ",(0,a.kt)("strong",{parentName:"p"},"1."),' in SWAs now called "staging environments" that is presently only available on GitHub and not Azure DevOps:'),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/answers/questions/574288/creating-environments-for-azure-static-web-app.html"},(0,a.kt)("img",{alt:"screenshot of Anthony Chu at Microsoft saying &quot;Unfortunately environments is not yet available for Azure DevOps.&quot;",src:n(4490).Z,width:"2602",height:"1150"}))),(0,a.kt)("p",null,"It's possible that in future the deployment environment aspect of this blog post may be rendered redundant by staging environments landing in Azure DevOps. However, the second part, which updates a PR in ADO with a link is probably generally useful. And it may be the case that the approach of provisioning an environment on demand and extracting a URL could be reworked to work with App Service and similar too."),(0,a.kt)("p",null,"I wrote about using ",(0,a.kt)("a",{parentName:"p",href:"/2021/08/15/bicep-azure-static-web-apps-azure-devops"},"SWAs with Azure DevOps earlier this year"),". This blog post will take the form of a ",(0,a.kt)("a",{parentName:"p",href:"https://dev.azure.com/johnnyreilly/azure-static-web-apps/_git/azure-static-web-apps/pullrequest/3"},"pull request on the code written in that post"),"."),(0,a.kt)("h2",{id:"getting-defaulthostname-from-static-web-apps"},"Getting ",(0,a.kt)("inlineCode",{parentName:"h2"},"defaultHostName")," from Static Web Apps"),(0,a.kt)("p",null,"The first thing we're going to do is take the Bicep from that post and tweak it to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bicep"},"param appName string\nparam repositoryUrl string\nparam repositoryBranch string\n\nparam skuName string = 'Free'\nparam skuTier string = 'Free'\n\nresource staticWebApp 'Microsoft.Web/staticSites@2021-02-01' = {\n  name: repositoryBranch == 'main' ? appName : '${appName}-${repositoryBranch}'\n  location: resourceGroup().location\n  sku: {\n    name: skuName\n    tier: skuTier\n  }\n  properties: {\n    // The provider, repositoryUrl and branch fields are required for successive deployments to succeed\n    // for more details see: https://github.com/Azure/static-web-apps/issues/516\n    provider: 'DevOps'\n    repositoryUrl: repositoryUrl\n    branch: repositoryBranch\n    buildProperties: {\n      skipGithubActionWorkflowGeneration: true\n    }\n  }\n}\n\noutput staticWebAppDefaultHostName string = staticWebApp.properties.defaultHostname // eg gentle-bush-0db02ce03.azurestaticapps.net\noutput staticWebAppId string = staticWebApp.id\noutput staticWebAppName string = staticWebApp.name\n")),(0,a.kt)("p",null,"There's some changes in here. First of all we're using a newer version of the ",(0,a.kt)("inlineCode",{parentName:"p"},"staticSites")," resource in Azure. You'll also see that we name the resource conditionally now. If we're on the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch we name it as we did before with ",(0,a.kt)("inlineCode",{parentName:"p"},"appName"),". But if we aren't then we suffix the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"repositoryBranch"),". It's worth knowing that ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations#compute-and-web"},"there are restrictions and conventions for Azure resource naming"),". If you have a branch name that is just alphanumerics and hyphens you'll be fine."),(0,a.kt)("p",null,"You'll see the output of the Bicep file has changed. Previously we were outputting the ",(0,a.kt)("inlineCode",{parentName:"p"},"apiKey")," that we used for deployment. This isn't the securest of approaches as, by having this as a deployment output, this data can be accessed by people who share access with your Azure portal. So we're going to use a different (and more secure) approach to acquire this in our pipeline later."),(0,a.kt)("p",null,"More significantly, we are now outputting the ",(0,a.kt)("inlineCode",{parentName:"p"},"staticWebAppDefaultHostName")," of our newly provisioned SWA. This is the location where people will be able to view the deployment preview. Since we want to pump that into our pull request description, so people can click on the link, we are going to need this. We're also pumping out the ",(0,a.kt)("inlineCode",{parentName:"p"},"staticWebAppId")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"staticWebAppName"),". We'll use the ",(0,a.kt)("inlineCode",{parentName:"p"},"staticWebAppName")," to acquire the ",(0,a.kt)("inlineCode",{parentName:"p"},"apiKey")," in our pipeline."),(0,a.kt)("h2",{id:"azure-pipelines-tweaks"},"Azure Pipelines tweaks"),(0,a.kt)("p",null,"Now to the pipeline. After the deployment, our updated pipeline is going to acquire the ",(0,a.kt)("inlineCode",{parentName:"p"},"apiKey")," for deployment like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"- task: AzureCLI@2\n  displayName: 'Acquire API key for deployment'\n  inputs:\n    azureSubscription: $(serviceConnection)\n    scriptType: bash\n    scriptLocation: inlineScript\n    inlineScript: |\n      APIKEY=$(az staticwebapp secrets list --name $(staticWebAppName) | jq -r '.properties.apiKey')\n      echo \"##vso[task.setvariable variable=apiKey;issecret=true]$APIKEY\"\n")),(0,a.kt)("p",null,"The above uses the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/deploy/azure-cli?view=azure-devops"},"Azure CLI task")," to acquire the ",(0,a.kt)("inlineCode",{parentName:"p"},"apiKey"),". It uses ",(0,a.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq")," to pull out the required property from the JSON and writes it as a secret variable in the pipeline to be used in the deployment."),(0,a.kt)("p",null,"At the end of the pipeline, if we're not on the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch, the the pipeline is going to run a custom script that will update the PR with the preview URL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"- task: Npm@1\n  displayName: 'Pull request preview install'\n  condition: and(succeeded(), ne(variables.isMain, 'true'))\n  inputs:\n    command: 'install'\n    workingDir: pull-request-preview\n\n- task: Npm@1\n  displayName: 'Pull request preview'\n  condition: and(succeeded(), ne(variables.isMain, 'true'))\n  inputs:\n    command: 'custom'\n    customCommand: 'run pull-request-preview -- --sat \"$(System.AccessToken)\" --project \"$(System.TeamProject)\" --repository \"$(Build.Repository.Name)\" --systemCollectionUri \"$(System.CollectionUri)\" --pullRequestId $(System.PullRequest.PullRequestId) --previewUrl \"https://$(staticWebAppDefaultHostName)\"'\n    workingDir: pull-request-preview\n")),(0,a.kt)("p",null,"We haven't written that script yet; we will in a moment."),(0,a.kt)("p",null,"The complete ",(0,a.kt)("inlineCode",{parentName:"p"},"azure-piplines.yml")," is below, and you'll notice we've moved all variables save for the ",(0,a.kt)("inlineCode",{parentName:"p"},"subscriptionId")," into the ",(0,a.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml")," and we're using a ",(0,a.kt)("inlineCode",{parentName:"p"},"westeurope")," location / resource group as at present ",(0,a.kt)("inlineCode",{parentName:"p"},"staticSites")," is not available everywhere:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"pool:\n  vmImage: ubuntu-latest\n\nvariables:\n  # subscriptionId is a variable defined on the pipeline itself\n  - name: appName\n    value: 'our-static-web-app'\n  - name: location\n    value: 'westeurope' #\xa0at time of writing static sites are available in limited locations such as westeurope\n  - name: serviceConnection\n    value: 'azureRMWestEurope'\n  - name: azureResourceGroup # this resource group lives in westeurope\n    value: 'johnnyreilly'\n\nsteps:\n  - checkout: self\n    submodules: true\n\n  - bash: az bicep build --file infra/static-web-app/main.bicep\n    displayName: 'Compile Bicep to ARM'\n\n  - task: AzureResourceManagerTemplateDeployment@3\n    name: DeployStaticWebAppInfra\n    displayName: Deploy Static Web App infra\n    inputs:\n      deploymentScope: Resource Group\n      azureResourceManagerConnection: $(serviceConnection)\n      subscriptionId: $(subscriptionId)\n      action: Create Or Update Resource Group\n      resourceGroupName: $(azureResourceGroup)\n      location: $(location)\n      templateLocation: Linked artifact\n      csmFile: 'infra/static-web-app/main.json' # created by bash script\n      overrideParameters: >-\n        -repositoryUrl $(Build.Repository.Uri)\n        -repositoryBranch $(Build.SourceBranchName)\n        -appName $(appName)\n      deploymentMode: Incremental\n      deploymentOutputs: deploymentOutputs\n\n  - task: PowerShell@2\n    name: 'SetDeploymentOutputVariables'\n    displayName: 'Set Deployment Output Variables'\n    inputs:\n      targetType: inline\n      script: |\n        $armOutputObj = '$(deploymentOutputs)' | ConvertFrom-Json\n        $armOutputObj.PSObject.Properties | ForEach-Object {\n          $keyname = $_.Name\n          $value = $_.Value.value\n\n          # Creates a standard pipeline variable\n          Write-Output \"##vso[task.setvariable variable=$keyName;]$value\"\n\n          # Display keys and values in pipeline\n          Write-Output \"output variable: $keyName $value\"\n        }\n      pwsh: true\n\n  - task: AzureCLI@2\n    displayName: 'Acquire API key for deployment'\n    inputs:\n      azureSubscription: $(serviceConnection)\n      scriptType: bash\n      scriptLocation: inlineScript\n      inlineScript: |\n        APIKEY=$(az staticwebapp secrets list --name $(staticWebAppName) | jq -r '.properties.apiKey')\n        echo \"##vso[task.setvariable variable=apiKey;issecret=true]$APIKEY\"\n\n  - task: AzureStaticWebApp@0\n    name: DeployStaticWebApp\n    displayName: Deploy Static Web App\n    inputs:\n      app_location: 'static-web-app'\n      # api_location: 'api'\n      output_location: 'build'\n      azure_static_web_apps_api_token: $(apiKey)\n\n  - task: Npm@1\n    displayName: 'Pull request preview install'\n    condition: and(succeeded(), ne(variables.isMain, 'true'))\n    inputs:\n      command: 'install'\n      workingDir: pull-request-preview\n\n  - task: Npm@1\n    displayName: 'Pull request preview'\n    condition: and(succeeded(), ne(variables.isMain, 'true'))\n    inputs:\n      command: 'custom'\n      customCommand: 'run pull-request-preview -- --sat \"$(System.AccessToken)\" --project \"$(System.TeamProject)\" --repository \"$(Build.Repository.Name)\" --systemCollectionUri \"$(System.CollectionUri)\" --pullRequestId $(System.PullRequest.PullRequestId) --previewUrl \"https://$(staticWebAppDefaultHostName)\"'\n      workingDir: pull-request-preview\n")),(0,a.kt)("h2",{id:"updating-the-pr-with-a-preview-url"},"Updating the PR with a preview URL"),(0,a.kt)("p",null,"We want to be able to update our pull request with our deploy URL. To make that happen, we're going to whiz up a little node app using TypeScript, ts-node and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/azure-devops-node-api"},"the azure-devops-node-api package"),"."),(0,a.kt)("p",null,"Let's create our app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir pull-request-preview\ncd pull-request-preview\nnpm init --yes\nnpm install @types/node @types/yargs ts-node typescript azure-devops-node-api yargs --save\n")),(0,a.kt)("p",null,"We'll update our newly created ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file with a ",(0,a.kt)("inlineCode",{parentName:"p"},"pull-request-preview")," script which will be the entry point."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  "scripts": {\n    "pull-request-preview": "ts-node ./index.ts"\n  },\n')),(0,a.kt)("p",null,"We'll add a ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "target": "ES2015",\n    "module": "CommonJS",\n    "strict": true,\n    "esModuleInterop": true,\n    "moduleResolution": "node"\n  }\n}\n')),(0,a.kt)("p",null,"Finally we'll add our script in a new ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"#!/usr/bin/env node\nimport yargs from 'yargs/yargs';\nimport * as nodeApi from 'azure-devops-node-api';\nimport { IGitApi } from 'azure-devops-node-api/GitApi';\nimport { PullRequestStatus } from 'azure-devops-node-api/interfaces/GitInterfaces';\n\nconst parser = yargs(process.argv.slice(2)).options({\n  pat: { type: 'string', default: '' },\n  sat: { type: 'string', default: '' },\n  systemCollectionUri: { type: 'string', demandOption: true },\n  project: { type: 'string', demandOption: true },\n  repository: { type: 'string', demandOption: true },\n  pullRequestId: { type: 'number' },\n  previewUrl: { type: 'string', demandOption: true },\n});\n\n(async () => {\n  await run(await parser.argv);\n})();\n\nasync function run({\n  pat,\n  sat,\n  project,\n  repository,\n  systemCollectionUri,\n  pullRequestId,\n  previewUrl,\n}: {\n  pat: string;\n  sat: string;\n  systemCollectionUri: string;\n  project: string;\n  repository: string;\n  pullRequestId: number | undefined;\n  previewUrl: string;\n}) {\n  const config: Config = { project, repository };\n  const gitApi = await getGitApi({ pat, sat, systemCollectionUri });\n\n  if (!pullRequestId)\n    console.log(\n      'No pull request id supplied, so will look up latest active PR'\n    );\n\n  const pullRequestIdToUpdate =\n    pullRequestId || (await getActivePullRequestId({ gitApi, config }));\n  if (!pullRequestIdToUpdate) {\n    console.log('No pull request found');\n    return;\n  }\n\n  console.log(\n    `Updating ${systemCollectionUri}/${project}/_git/${repository}/pullrequest/${pullRequestIdToUpdate} with a preview URL of ${previewUrl}`\n  );\n\n  const pullRequest = await getPullRequest({\n    gitApi,\n    config,\n    pullRequestId: pullRequestIdToUpdate,\n  });\n\n  await updatePullRequestDescription({\n    gitApi,\n    config,\n    pullRequestId: pullRequestIdToUpdate,\n    description: makePreviewDescriptionMarkdown(\n      pullRequest.description!,\n      previewUrl\n    ),\n  });\n\n  console.log(\n    `Updated pull request description a preview URL of ${previewUrl}`\n  );\n}\n\ninterface Config {\n  project: string;\n  repository: string;\n}\n\nasync function getGitApi({\n  sat,\n  pat,\n  systemCollectionUri,\n}: {\n  pat: string;\n  sat: string;\n  systemCollectionUri: string;\n}) {\n  const authHandler = pat\n    ? nodeApi.getPersonalAccessTokenHandler(\n        pat,\n        /** allowCrossOriginAuthentication */ true\n      )\n    : nodeApi.getHandlerFromToken(\n        sat,\n        /** allowCrossOriginAuthentication */ true\n      );\n\n  const webApi = new nodeApi.WebApi(systemCollectionUri, authHandler);\n  const gitApi = await webApi.getGitApi();\n\n  return gitApi;\n}\n\nasync function getActivePullRequestId({\n  gitApi,\n  config,\n}: {\n  gitApi: IGitApi;\n  config: Config;\n}) {\n  const topActivePullRequest = await gitApi.getPullRequests(\n    config.repository, // repository.id!,\n    { status: PullRequestStatus.Active },\n    config.project,\n    undefined,\n    /** skip */ 0,\n    /** top */ 1\n  );\n\n  return topActivePullRequest.length > 0\n    ? topActivePullRequest[0].pullRequestId\n    : undefined;\n}\n\nasync function getPullRequest({\n  gitApi,\n  config,\n  pullRequestId,\n}: {\n  gitApi: IGitApi;\n  config: Config;\n  pullRequestId: number;\n}) {\n  const pullRequest = await gitApi.getPullRequest(\n    config.repository, // repository.id!,\n    pullRequestId,\n    config.project,\n    undefined,\n    /** skip */ 0,\n    /** top */ 1,\n    /** includeCommits */ false,\n    /** includeWorkItemRefs */ false\n  );\n  return pullRequest;\n}\n\nasync function updatePullRequestDescription({\n  gitApi,\n  config,\n  pullRequestId,\n  description,\n}: {\n  gitApi: IGitApi;\n  config: Config;\n  pullRequestId: number;\n  description: string;\n}) {\n  // To do an update with the API you must provide a new object with only the properties you are updating\n  const updatePullRequest = {\n    description,\n  };\n  await gitApi.updatePullRequest(\n    updatePullRequest,\n    config.repository,\n    pullRequestId,\n    config.project\n  );\n}\n\nfunction makePreviewDescriptionMarkdown(desc: string, previewUrl: string) {\n  const previewRegex = /(> -*\\n> # Preview:\\n.*\\n>.*\\n> -*\\n)/;\n\n  const makePreview = (previewUrl: string) => `> ---\n> # Preview:\n> ${previewUrl}\n> \n> ---\n`;\n\n  const alreadyHasPreview = desc.match(previewRegex);\n  return alreadyHasPreview\n    ? desc.replace(previewRegex, makePreview(previewUrl))\n    : makePreview(previewUrl) + desc;\n}\n")),(0,a.kt)("p",null,"The above code does two things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Looks up the pull request, using the details supplied from the pipeline. It's worth noting that the ",(0,a.kt)("inlineCode",{parentName:"li"},"System.PullRequest.PullRequestId")," variable is ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/build/variables?view=azure-devops&tabs=yaml"},"initialized only if the build ran because of a Git PR affected by a branch policy"),". If you don't have that set up, the script falls back to using the latest active pull request. This is generally useful when you're getting set up in the first place; you won't want to rely on this behaviour."),(0,a.kt)("li",{parentName:"ol"},'Updates the pull request description with a prefix piece of markdown that provides the link to the preview URL. This is our "browse the preview":\n',(0,a.kt)("img",{alt:"screenshot of rendered markdown with the preview link",src:n(51309).Z,width:"848",height:"268"}))),(0,a.kt)("p",null,"This script could be refactored into a dedicated Azure Pipelines custom task."),(0,a.kt)("h2",{id:"permissions"},"Permissions"),(0,a.kt)("p",null,"The first time you run this you may encounter a permissions error of the form:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Error: TF401027: You need the Git 'PullRequestContribute' permission to perform this action.\n")),(0,a.kt)("p",null,'To remedy this you need to give your build service the relevant permissions to update a pull request. You can do that by going to the security settings of your repo and setting "Contribute to pull requests" to "Allow" for your build service:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of &quot;Contribute to pull requests&quot; permission in Azure DevOps Git security being set to &quot;Allow&quot; ",src:n(92890).Z,width:"3566",height:"1744"})),(0,a.kt)("h2",{id:"enjoy-and-keep-azure-tidy"},"Enjoy! (and keep Azure tidy)"),(0,a.kt)("p",null,"When the pipeline is now run you can see that a deployment preview link is now updated onto the PR description:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of deployment preview on PR",src:n(34237).Z,width:"3566",height:"1046"})),(0,a.kt)("p",null,"This will happen whenever a PR is raised which is tremendous."),(0,a.kt)("p",null,"A thing to remember, is that there's nothing in this post that tears down the temporary deployment after the pull request has been merged. It will hang around. We happen to be using free resources in this post, but if we weren't there would be cost implications. Either way, you'll want to clean up unused environments as a matter of course. And I'd advise automating that."),(0,a.kt)("p",null,"So be tidy and cost aware with this approach."))}m.isMDXComponent=!0},51309:function(e,t){t.Z="data:image/png;base64,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"},34237:function(e,t,n){t.Z=n.p+"assets/images/screenshot-of-deploy-preview-25192d00408a8c8863e48cd1f5847b77.png"},92890:function(e,t,n){t.Z=n.p+"assets/images/screenshot-of-git-repository-security-settings-34ff609af82c5706a6de1601b9ad9c4c.png"},90502:function(e,t,n){t.Z=n.p+"assets/images/screenshot-of-netlify-deploy-preview-in-pull-request-4e4a9493cfb447004603a643550d9c70.png"},4490:function(e,t,n){t.Z=n.p+"assets/images/screenshot-of-staging-environments-not-available-yet-86278cf2342ae1f27918532917c2f2ab.png"},240:function(e,t,n){t.Z=n.p+"assets/images/title-image-4c8535c95c68e87400c0b6056bb705fa.png"}}]);