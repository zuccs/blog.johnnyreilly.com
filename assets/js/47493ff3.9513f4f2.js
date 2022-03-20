"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[95966],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(n),g=i,m=h["".concat(l,".").concat(g)]||h[g]||c[g]||a;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},50626:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var o=n(87462),i=n(63366),a=(n(67294),n(3905)),r=["components"],s={title:"Lighthouse meet GitHub Actions",authors:"johnnyreilly",tags:["Azure Static Web Apps","GitHub Actions","Docusaurus"],image:"./title-image.png",hide_table_of_contents:!1},l=void 0,u={permalink:"/2022/03/20/lighthouse-meet-github-actions",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2022-03-20-lighthouse-meet-github-actions/index.md",source:"@site/blog/2022-03-20-lighthouse-meet-github-actions/index.md",title:"Lighthouse meet GitHub Actions",description:"Lighthouse is a tremendous tool for auditing the performance and usability of websites. Rather than having to perform these audits manually, it's helpful to be able to plug it into your CI pipeline. This post illustrates how to integrate Lighthouse into a GitHub Actions workflow for an Azure Static Web App, and report findings directly in pull requests that are raised.",date:"2022-03-20T00:00:00.000Z",formattedDate:"March 20, 2022",tags:[{label:"Azure Static Web Apps",permalink:"/tags/azure-static-web-apps"},{label:"GitHub Actions",permalink:"/tags/git-hub-actions"},{label:"Docusaurus",permalink:"/tags/docusaurus"}],readingTime:11.4,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Lighthouse meet GitHub Actions",authors:"johnnyreilly",tags:["Azure Static Web Apps","GitHub Actions","Docusaurus"],image:"./title-image.png",hide_table_of_contents:!1},nextItem:{title:"Swashbuckle & inheritance: Give. Me. The. Types",permalink:"/2022/03/06/swashbuckle-inheritance-multiple-return-types"}},p={image:n(15182).Z,authorsImageUrls:[void 0]},c=[{value:"What we&#39;ll do",id:"what-well-do",level:2},{value:"Create our application",id:"create-our-application",level:2},{value:"Creating a Static Web App in Azure",id:"creating-a-static-web-app-in-azure",level:2},{value:"Preparing to plug in Lighthouse",id:"preparing-to-plug-in-lighthouse",level:2},{value:"Custom domain",id:"custom-domain",level:3},{value:"Location",id:"location",level:3},{value:"Plugging in Lighthouse",id:"plugging-in-lighthouse",level:2},{value:"Static Web App - get preview URL",id:"static-web-app---get-preview-url",level:3},{value:"Static Web App - wait for preview",id:"static-web-app---wait-for-preview",level:3},{value:"Audit URLs using Lighthouse",id:"audit-urls-using-lighthouse",level:3},{value:"Format lighthouse score",id:"format-lighthouse-score",level:3},{value:"Add Lighthouse stats as comment",id:"add-lighthouse-stats-as-comment",level:3},{value:"Putting it all together",id:"putting-it-all-together",level:2}],h={toc:c};function g(e){var t=e.components,s=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Lighthouse is a tremendous tool for auditing the performance and usability of websites. Rather than having to perform these audits manually, it's helpful to be able to plug it into your CI pipeline. This post illustrates how to integrate Lighthouse into a GitHub Actions workflow for an Azure Static Web App, and report findings directly in pull requests that are raised."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"title image reading &quot;Lighthouse meet GitHub Actions&quot; with the Lighthouse logo and a screenshot of the results in a GitHub comment`",src:n(15182).Z,width:"1600",height:"900"})),(0,a.kt)("h2",{id:"what-well-do"},"What we'll do"),(0,a.kt)("p",null,"This post isn't a walkthrough of how to use Lighthouse effectively. There is already ",(0,a.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/lighthouse-and-how-to-use-it-more-effectively/"},"great guidance out there on this topic"),"."),(0,a.kt)("p",null,"Instead, we're going build a simple web application, in the context of a GitHub repo. We'll wire it up to deploy via GitHub Actions to Azure Static Web Apps. Static Web Apps is a free hosting option for static websites and it comes with ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/review-publish-pull-requests"},"staging environments")," or deployment previews built in. This feature deploys a fully functional version of a site each time a pull request is raised, built upon the changes implemented in that pull request."),(0,a.kt)("p",null,"The staging environment is a perfect place to implement our Lighthouse checks. If a pull request impacts usability or performance, seeing those details in the context of our pull request is exactly where we'd like to learn this. This kind of check gives us the opportunity to ensure we only merge when we're happy that the changes do not negatively impact our Lighthouse scores."),(0,a.kt)("p",null,"In this post we'll start from the point of an empty GitHub repo and build up from there."),(0,a.kt)("h2",{id:"create-our-application"},"Create our application"),(0,a.kt)("p",null,"Inside the root of our repository we're going to create a ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus site"),". Docusaurus is a good example of a static site, the kind of which is a natural fit for Jamstack. We could equally use something else like ",(0,a.kt)("a",{parentName:"p",href:"https://gohugo.io/"},"Hugo")," for instance."),(0,a.kt)("p",null,"At the command line we'll enter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx create-docusaurus@latest website classic\n")),(0,a.kt)("p",null,"And Docusaurus will create a new site in the ",(0,a.kt)("inlineCode",{parentName:"p"},"website")," directory. Let's commit and push this and turn our attention to Azure."),(0,a.kt)("h2",{id:"creating-a-static-web-app-in-azure"},"Creating a Static Web App in Azure"),(0,a.kt)("p",null,"There's a number of ways to create a Static Web App in Azure. It's possible to use ",(0,a.kt)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2021/08/15/bicep-azure-static-web-apps-azure-devops#bicep-template"},"infrastructure as code with a language like Bicep"),". But for this post let's use the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"Azure Portal")," instead. If you don't have an account already, you can set one up for free very quickly."),(0,a.kt)("p",null,'Once you\'ve logged in, click "Create a resource" and look up Static Web App:'),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Screenshot of the Azure Portal, &quot;Create a resource&quot; Azure Static Web Apps section",src:n(35962).Z,width:"1073",height:"640"})),(0,a.kt)("p",null,'Click on "Create" and you\'ll be take to the creation dialog:'),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Screenshot of the Azure Portal, &quot;Create a resource&quot; Azure Static Web Apps dialog",src:n(82180).Z,width:"1218",height:"1429"})),(0,a.kt)("p",null,'You\'ll need to create a resource group for your SWA to live in, give the app a name, the "Free" plan and a deployment source of GitHub.'),(0,a.kt)("p",null,'Click on the "Sign in with GitHub" button and authorize Azure to access your GitHub account for Static Web Apps.'),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Screenshot of the Azure Portal, &quot;Create a resource&quot; Azure Static Web Apps dialog - repository settings",src:n(34048).Z,width:"1182",height:"1425"})),(0,a.kt)("p",null,"At this point Azure will query GitHub on your behalf and look up the organisations and repositories you have access to. Select the repository that you'd like to deploy to your Static Web App and select the branch you'd like to deploy."),(0,a.kt)("p",null,'You also need to provide Azure with some build details that help it understand how your app is built. We\'ll provide a preset of "Custom". We\'ll set the "App location" (the root of our front end app) to be ',(0,a.kt)("inlineCode",{parentName:"p"},'"/website"')," to tally up with the application we just created. We'll leave \"Api location\" blank and we'll set the output location to be ",(0,a.kt)("inlineCode",{parentName:"p"},'"build"')," - this is the directory under ",(0,a.kt)("inlineCode",{parentName:"p"},"website")," where Docusaurus will create our site."),(0,a.kt)("p",null,'Finally click "Review + create" and then "Create".'),(0,a.kt)("p",null,"Azure will now:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create an Azure Static Web app resource in Azure"),(0,a.kt)("li",{parentName:"ul"},"Update your repository to add a GitHub Actions workflow to deploy your static web app"),(0,a.kt)("li",{parentName:"ul"},"Kick off a first run of the GitHub Actions workflow to deploy your SWA.")),(0,a.kt)("p",null,"Pretty amazing, right?"),(0,a.kt)("p",null,"When you look at the resource in Azure it will look something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Screenshot of the Azure Portal, your Azure Static Web Apps resource",src:n(49060).Z,width:"1426",height:"715"})),(0,a.kt)("p",null,"If you click on the GitHub Action runs you'll be presented with your GitHub Action:"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Screenshot of the GitHub Action",src:n(9451).Z,width:"1433",height:"1097"})),(0,a.kt)("p",null,"And when that finishes running you'll be able to see your deployed Static Web App by clicking on the URL in the Azure Portal:"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Screenshot of your Static Web App running in a browser",src:n(16180).Z,width:"1573",height:"1140"})),(0,a.kt)("p",null,"We now have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a GitHub repo"),(0,a.kt)("li",{parentName:"ul"},"which contains a simple web application"),(0,a.kt)("li",{parentName:"ul"},"and a GitHub Actions workflow which:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"deploys to an Azure Static Web App"),(0,a.kt)("li",{parentName:"ul"},"spins up a staging environment for pull requests")))),(0,a.kt)("h2",{id:"preparing-to-plug-in-lighthouse"},"Preparing to plug in Lighthouse"),(0,a.kt)("p",null,"With this groundwork in place we're ready to add Lighthouse into the mix. If you look in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/.github/workflows")," folder of your repo, you'll find a workflow file with contents along these lines:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"name: Azure Static Web Apps CI/CD\n\non:\n  push:\n    branches:\n      - main\n  pull_request:\n    types: [opened, synchronize, reopened, closed]\n    branches:\n      - main\n\njobs:\n  build_and_deploy_job:\n    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')\n    runs-on: ubuntu-latest\n    name: Build and Deploy Job\n    steps:\n      - uses: actions/checkout@v2\n        with:\n          submodules: true\n      - name: Build And Deploy\n        id: builddeploy\n        uses: Azure/static-web-apps-deploy@v1\n        with:\n          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN_AGREEABLE_ROCK_039A51810 }}\n          repo_token: ${{ secrets.GITHUB_TOKEN }} # Used for Github integrations (i.e. PR comments)\n          action: 'upload'\n          ###### Repository/Build Configurations - These values can be configured to match your app requirements. ######\n          # For more information regarding Static Web App workflow configurations, please visit: https://aka.ms/swaworkflowconfig\n          app_location: '/website' # App source code path\n          api_location: '' # Api source code path - optional\n          output_location: 'build' # Built app content directory - optional\n          ###### End of Repository/Build Configurations ######\n\n  close_pull_request_job:\n    if: github.event_name == 'pull_request' && github.event.action == 'closed'\n    runs-on: ubuntu-latest\n    name: Close Pull Request Job\n    steps:\n      - name: Close Pull Request\n        id: closepullrequest\n        uses: Azure/static-web-apps-deploy@v1\n        with:\n          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN_AGREEABLE_ROCK_039A51810 }}\n          action: 'close'\n")),(0,a.kt)("p",null,"This was created for us when we set up our SWA in Azure. We're now going to update the contents to add some Lighthouse jobs."),(0,a.kt)("p",null,"Before we do that, we need to acquire two things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"the custom domain of our static web app"),(0,a.kt)("li",{parentName:"ol"},"the location of the resource group where the SWA resides")),(0,a.kt)("p",null,"These two pieces of information are required such that we can determine the URL of our staging environments."),(0,a.kt)("h3",{id:"custom-domain"},"Custom domain"),(0,a.kt)("p",null,'We acquire the custom domain of our static web app in the "Custom Domains" screen of the Azure Portal:'),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"screenshot of the custom domain screen in the Azure Portal",src:n(15091).Z,width:"2043",height:"589"})),(0,a.kt)("p",null,"The custom domain is the auto-generated custom domain - it's highlighted in the screenshot above. For the SWA we're building here the custom domain is ",(0,a.kt)("inlineCode",{parentName:"p"},"agreeable-rock-039a51810.1.azurestaticapps.net"),"."),(0,a.kt)("h3",{id:"location"},"Location"),(0,a.kt)("p",null,'We acquire the location by looking at the resource group in the Azure Portal. For the SWA we\'ve been building the location is "Central US". However, rather than the "display name" variant of the location, what we want is the "code" which will be used in the URL. You can see what this is by clicking on the "JSON view" in the Azure Portal:'),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"screenshot of the resource group JSON view with location highlighted",src:n(73986).Z,width:"2505",height:"598"})),(0,a.kt)("p",null,"As the screenshot above demonstrates, the code we need is ",(0,a.kt)("inlineCode",{parentName:"p"},"centralus"),"."),(0,a.kt)("h2",{id:"plugging-in-lighthouse"},"Plugging in Lighthouse"),(0,a.kt)("p",null,"We now have all we need to plug in Lighthouse. Let's create a branch:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout -b lighthouse\n")),(0,a.kt)("p",null,'We\'re going to add a new "Lighthouse report" job to our GitHub Actions workflow file:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"lighthouse_report_job:\n  name: Lighthouse report\n  if: github.event_name == 'pull_request' && github.event.action != 'closed'\n  runs-on: ubuntu-latest\n  steps:\n    - uses: actions/checkout@v2\n\n    - name: Static Web App - get preview URL\n      id: static_web_app_preview_url\n      uses: azure/CLI@v1\n      with:\n        inlineScript: |\n          CUSTOM_DOMAIN='agreeable-rock-039a51810.1.azurestaticapps.net'\n          LOCATION='centralus'\n\n          PREVIEW_URL=\"https://${CUSTOM_DOMAIN/.[1-9]./-${{github.event.pull_request.number }}.$LOCATION.1.}\"\n\n          echo \"::set-output name=PREVIEW_URL::$PREVIEW_URL\"\n\n    - name: Static Web App - wait for preview\n      id: static_web_app_wait_for_preview\n      uses: nev7n/wait_for_response@v1\n      with:\n        url: '${{ steps.static_web_app_preview_url.outputs.PREVIEW_URL }}'\n        responseCode: 200\n        timeout: 600000\n        interval: 1000\n\n    - name: Audit URLs using Lighthouse\n      id: lighthouse_audit\n      uses: treosh/lighthouse-ci-action@v8\n      with:\n        urls: |\n          ${{ steps.static_web_app_preview_url.outputs.PREVIEW_URL }}\n        configPath: ./.github/workflows/lighthousesrc.json\n        uploadArtifacts: true\n        temporaryPublicStorage: true\n        runs: 5\n\n    - name: Format lighthouse score\n      id: format_lighthouse_score\n      uses: actions/github-script@v5\n      with:\n        script: |\n          const lighthouseCommentMaker = require('./.github/workflows/lighthouseCommentMaker.js');\n\n          const lighthouseOutputs = {\n            manifest: ${{ steps.lighthouse_audit.outputs.manifest }},\n            links: ${{ steps.lighthouse_audit.outputs.links }}\n          };\n\n          const comment = lighthouseCommentMaker({ lighthouseOutputs });\n          core.setOutput(\"comment\", comment);\n\n    - name: Add Lighthouse stats as comment\n      id: comment_to_pr\n      uses: marocchino/sticky-pull-request-comment@v2.0.0\n      with:\n        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n        number: ${{ github.event.pull_request.number }}\n        header: lighthouse\n        message: ${{ steps.format_lighthouse_score.outputs.comment }}\n")),(0,a.kt)("p",null,"There's a number of things happening in this workflow. Let's walk through them."),(0,a.kt)("h3",{id:"static-web-app---get-preview-url"},"Static Web App - get preview URL"),(0,a.kt)("p",null,"Here we construct the preview URL of our static web app using:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the custom domain"),(0,a.kt)("li",{parentName:"ul"},"the location"),(0,a.kt)("li",{parentName:"ul"},"the pull request number eg 123")),(0,a.kt)("p",null,"Given a custom domain of ",(0,a.kt)("inlineCode",{parentName:"p"},"agreeable-rock-039a51810.1.azurestaticapps.net"),", a location of ",(0,a.kt)("inlineCode",{parentName:"p"},"centralus")," and a pull request number of ",(0,a.kt)("inlineCode",{parentName:"p"},"123"),", the preview url would be ",(0,a.kt)("inlineCode",{parentName:"p"},"agreeable-rock-039a51810-123.centralus.1.azurestaticapps.net"),". Using a little bash magic we create an output variable named ",(0,a.kt)("inlineCode",{parentName:"p"},"PREVIEW_URL")," containing that value. We'll re-use it later in the workflow."),(0,a.kt)("h3",{id:"static-web-app---wait-for-preview"},"Static Web App - wait for preview"),(0,a.kt)("p",null,"We don't want to run our test until the static web app is up and running. To cater for this we're going to pull in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nev7n/wait_for_response"},(0,a.kt)("inlineCode",{parentName:"a"},"wait_for_response"))," GitHub Action. This polls until a website returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"200"),", we're going to point it at our SWA."),(0,a.kt)("h3",{id:"audit-urls-using-lighthouse"},"Audit URLs using Lighthouse"),(0,a.kt)("p",null,"The big moment has arrived! We're going to plug Lighthouse into our workflow using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/treosh/lighthouse-ci-action"},(0,a.kt)("inlineCode",{parentName:"a"},"lighthouse-ci-action"))," GitHub Action."),(0,a.kt)("p",null,"We provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"configPath: ./.github/workflows/lighthousesrc.json")," which points to file that configures our Lighthouse configuration. We'll create that file as well and populate it with this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ci": {\n    "collect": {\n      "settings": {\n        "configPath": "./.github/workflows/lighthouse-config.js"\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"This in turn hands off the specific configuration to a ",(0,a.kt)("inlineCode",{parentName:"p"},"lighthouse-config.js")," file that we also need to create:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// see https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md\nmodule.exports = {\n  extends: 'lighthouse:default',\n  settings: {\n    // audits can be found here:\n    // https://github.com/GoogleChrome/lighthouse/blob/eba2a4d19c5786dc37e993858ff4b663181f81e5/lighthouse-core/config/default-config.js#L174\n    skipAudits: [\n      'canonical', // for staging sites this will always be incorrect\n      'maskable-icon',\n      'valid-source-maps',\n      'unsized-images',\n      'offline-start-url',\n    ],\n  },\n};\n")),(0,a.kt)("p",null,"The configuration above can be amended based upon the various links in the comments. Generally it's a good idea to roll with the defaults; however skipping the ",(0,a.kt)("inlineCode",{parentName:"p"},"canonical")," audit is sensible as it will reliably be incorrect for staging sites."),(0,a.kt)("p",null,"Along side the Lighthouse configuration, there's config for the GitHub Action itself:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uploadArtifacts: true")," - will save results as an action artifacts"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"temporaryPublicStorage: true")," - will upload lighthouse report to the temporary storage"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"runs: 5")," - will run Lighthouse 5 times to get more reliable performance results")),(0,a.kt)("h3",{id:"format-lighthouse-score"},"Format lighthouse score"),(0,a.kt)("p",null,"We've run Lighthouse at this point. What we want to do next is take the results of the run and build up some text that we can add to our pull request as a comment."),(0,a.kt)("p",null,"For this we're going to use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/actions/github-script"},(0,a.kt)("inlineCode",{parentName:"a"},"github-script"))," GitHub Action, grab the outputs of the previous step and call out to a ",(0,a.kt)("inlineCode",{parentName:"p"},"lighthouseCommentMaker.js")," file we're going to write to make the comment we'd like to publish to our PR:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// @ts-check\n\n/**\n * @typedef {Object} Summary\n * @prop {number} performance\n * @prop {number} accessibility\n * @prop {number} best-practices\n * @prop {number} seo\n * @prop {number} pwa\n */\n\n/**\n * @typedef {Object} Manifest\n * @prop {string} url\n * @prop {boolean} isRepresentativeRun\n * @prop {string} htmlPath\n * @prop {string} jsonPath\n * @prop {Summary} summary\n */\n\n/**\n * @typedef {Object} LighthouseOutputs\n * @prop {Record<string, string>} links\n * @prop {Manifest[]} manifest\n */\n\nconst formatScore = (/** @type { number } */ score) => Math.round(score * 100);\nconst emojiScore = (/** @type { number } */ score) =>\n  score >= 0.9 ? '\ud83d\udfe2' : score >= 0.5 ? '\ud83d\udfe0' : '\ud83d\udd34';\n\nconst scoreRow = (\n  /** @type { string } */ label,\n  /** @type { number } */ score\n) => `| ${emojiScore(score)} ${label} | ${formatScore(score)} |`;\n\n/**\n * @param {LighthouseOutputs} lighthouseOutputs\n */\nfunction makeComment(lighthouseOutputs) {\n  const { summary } = lighthouseOutputs.manifest[0];\n  const [[testedUrl, reportUrl]] = Object.entries(lighthouseOutputs.links);\n\n  const comment = `## \u26a1\ufe0f\ud83c\udfe0 Lighthouse report\n\nWe ran Lighthouse against the changes and produced this [report](${reportUrl}). Here's the summary:\n\n| Category | Score |\n| -------- | ----- |\n${scoreRow('Performance', summary.performance)}\n${scoreRow('Accessibility', summary.accessibility)}\n${scoreRow('Best practices', summary['best-practices'])}\n${scoreRow('SEO', summary.seo)}\n${scoreRow('PWA', summary.pwa)}\n\n*Lighthouse ran against [${testedUrl}](${testedUrl})*\n`;\n\n  return comment;\n}\n\nmodule.exports = ({ lighthouseOutputs }) => {\n  return makeComment(lighthouseOutputs);\n};\n")),(0,a.kt)("p",null,"The above code takes the Lighthouse outputs and creates some Markdown to represent the results. It uses some nice emoji as well. Wonderfully, we're entirely free to customise this as much as we'd like; it's just code! All that matters is that a string is pumped out at the end."),(0,a.kt)("h3",{id:"add-lighthouse-stats-as-comment"},"Add Lighthouse stats as comment"),(0,a.kt)("p",null,"Finally we're ready to add the comment to the PR. We'll do this using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/marocchino/sticky-pull-request-comment"},(0,a.kt)("inlineCode",{parentName:"a"},"sticky-pull-request-comment"))," GitHub Action. We pass in the comment we've just made in the previous step, as well as some other parameters, and this will write the comment to the PR."),(0,a.kt)("h2",{id:"putting-it-all-together"},"Putting it all together"),(0,a.kt)("p",null,"When we commit our changes and raise a pull request, we see our GitHub Action run, and then once it has we see a Lighthouse report being attached to our pull request:"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"screenshot of GitHub pull request showing the Lighthouse results as a comment",src:n(29557).Z,width:"1857",height:"1082"})),(0,a.kt)("p",null,"Note you can also click on a link in the comment to go directly to the full report."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"screenshot of Lighthouse report",src:n(85178).Z,width:"3008",height:"1441"})),(0,a.kt)("p",null,"Now, with each PR that is raised, any regressions in performance can be observed and resolved ",(0,a.kt)("em",{parentName:"p"},"before")," they make get in front of customer's eyes!"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/lighthouse-meets-github-actions-use-lighthouse-ci/"},"This post was originally published on LogRocket.")))}g.isMDXComponent=!0},34048:function(e,t,n){t.Z=n.p+"assets/images/screenshot-azure-portal-create-a-resource-dialog-repo-30e69b65ef18951c83d5da76db4a3e63.png"},82180:function(e,t,n){t.Z=n.p+"assets/images/screenshot-azure-portal-create-a-resource-dialog-268b26c4cae1910b5389c1669e40224c.png"},35962:function(e,t,n){t.Z=n.p+"assets/images/screenshot-azure-portal-create-a-resource-669ec9b2896df1cceff60ed97e143ee0.png"},15091:function(e,t,n){t.Z=n.p+"assets/images/screenshot-azure-portal-static-web-app-custom-domain-01c5006416e2f32e8abd7d6ad5b63660.png"},49060:function(e,t,n){t.Z=n.p+"assets/images/screenshot-azure-portal-static-web-app-resource-74134a8113e6cd6bba5eb0501d2a3467.png"},73986:function(e,t,n){t.Z=n.p+"assets/images/screenshot-azure-portal-static-web-app-rg-location-365ddb7efff78cb93200df17397e262a.png"},9451:function(e,t,n){t.Z=n.p+"assets/images/screenshot-github-action-50c36cec629e143cce5556963112c43d.png"},29557:function(e,t,n){t.Z=n.p+"assets/images/screenshot-lighthouse-github-comment-2ec95ab3ae5a917a152b89f1aa54e74d.png"},85178:function(e,t,n){t.Z=n.p+"assets/images/screenshot-lighthouse-report-b0bbf2eae9955184266ebd7bd3c09e98.png"},16180:function(e,t,n){t.Z=n.p+"assets/images/screenshot-static-web-app-2c0d50f760d773a40c145cd79e6c4546.png"},15182:function(e,t,n){t.Z=n.p+"assets/images/title-image-71d327509012cdc524b03e49eb12bba8.png"}}]);