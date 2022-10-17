"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[7432],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(n),m=o,g=h["".concat(l,".").concat(m)]||h[m]||c[m]||i;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},84482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>u});n(67294);var a=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const r={title:"Deploying from ASP.Net MVC to GitHub Pages using AppVeyor part 2",authors:"johnnyreilly",tags:["GitHub Personal Access Token","Continuous Integration","powershell","github pages","AppVeyor"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2015/01/07/deploying-aspnet-mvc-to-github-pages-with-appveyor-part-2",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2015-01-07-deploying-aspnet-mvc-to-github-pages-with-appveyor-part-2/index.md",source:"@site/blog/2015-01-07-deploying-aspnet-mvc-to-github-pages-with-appveyor-part-2/index.md",title:"Deploying from ASP.Net MVC to GitHub Pages using AppVeyor part 2",description:'"Automation, automation, automation." Those were and are Tony Blair\'s priorities for keeping open source projects well maintained.',date:"2015-01-07T00:00:00.000Z",formattedDate:"January 7, 2015",tags:[{label:"GitHub Personal Access Token",permalink:"/tags/git-hub-personal-access-token"},{label:"Continuous Integration",permalink:"/tags/continuous-integration"},{label:"powershell",permalink:"/tags/powershell"},{label:"github pages",permalink:"/tags/github-pages"},{label:"AppVeyor",permalink:"/tags/app-veyor"}],readingTime:4.775,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Deploying from ASP.Net MVC to GitHub Pages using AppVeyor part 2",authors:"johnnyreilly",tags:["GitHub Personal Access Token","Continuous Integration","powershell","github pages","AppVeyor"],hide_table_of_contents:!1},prevItem:{title:"TypeScript: In Praise of Union Types",permalink:"/2015/01/20/typescript-using-functions-with-union-types"},nextItem:{title:"Deploying from ASP.Net MVC to GitHub Pages using AppVeyor part 1",permalink:"/2014/12/29/deploying-aspnet-mvc-to-github-pages-with-appveyor-part-1"}},p={authorsImageUrls:[void 0]},u=[{value:"GitHub Personal Access Token",id:"github-personal-access-token",level:2},{value:"<code>appveyor.yml</code>",id:"appveyoryml",level:2},{value:"<code>pushStatic.ps1</code>",id:"pushstaticps1",level:2}],c={toc:u};function h(e){var{components:t}=e,r=i(e,["components"]);return(0,a.kt)("wrapper",o({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'"Automation, automation, automation." Those were and are Tony Blair\'s priorities for keeping open source projects well maintained.'),(0,a.kt)("p",null,"OK, that's not quite true... But what is certainly true is that maintaining an open source project takes time. And there's only so much free time that anyone has. For that reason, wherever you can it makes sense to ",(0,a.kt)("em",{parentName:"p"},"AUTOMATE"),"!"),(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"https://blog.johnnyreilly.com/2014/12/deploying-aspnet-mvc-to-github-pages-with-appveyor-part-1.html"}),"Last time")," we looked at how you can take an essentially static ASP.Net MVC site (in this case my jVUNDemo documentation site) and generate an entirely static version using Wget. This static site has been pushed to ",(0,a.kt)("a",o({parentName:"p"},{href:"https://pages.github.com/"}),"GitHub Pages")," and is serving as the documentation for ",(0,a.kt)("a",o({parentName:"p"},{href:"http://johnnyreilly.github.io/jQuery.Validation.Unobtrusive.Native/"}),"jQuery Validation Unobtrusive Native")," (and for bonus points is costing me no money at all)."),(0,a.kt)("p",null,"So what next? Well, automation clearly! If I make a change to jQuery Validation Unobtrusive Native then AppVeyor already bounds in and performs a ",(0,a.kt)("a",o({parentName:"p"},{href:"https://ci.appveyor.com/project/JohnReilly/jquery-validation-unobtrusive-native"}),"continuous integration build")," for me. It picks up the ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native"}),"latest source")," from GitHub, pulls in my dependencies, performs a build and runs my tests. Lovely."),(0,a.kt)("p",null,"So the obvious thing to do is to take this process and plug in the generation of my static site and the publication thereof to GitHub pages. The minute a change is made to my project the documentation should be updated without me having to break sweat. That's the goal."),(0,a.kt)("h2",o({},{id:"github-personal-access-token"}),"GitHub Personal Access Token"),(0,a.kt)("p",null,"In order to complete our chosen mission we're going to need a GitHub Personal Access Token. We're going to use it when we clone, update and push our GitHub Pages branch. To get one we biff over to Settings / Applications in GitHub and click the \"Generate New Token\" button."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3717).Z,width:"640",height:"435"})),(0,a.kt)("p",null,"The token I'm using for my project has the following scopes selected:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(41366).Z,width:"640",height:"435"})),(0,a.kt)("h2",o({},{id:"appveyoryml"}),(0,a.kt)("inlineCode",{parentName:"h2"},"appveyor.yml")),(0,a.kt)("p",null,"With our token in hand we turn our attention to AppVeyor build configuration. This is possible using a file called ",(0,a.kt)("a",o({parentName:"p"},{href:"http://www.appveyor.com/docs/build-configuration"}),(0,a.kt)("inlineCode",{parentName:"a"},"appveyor.yml"))," stored in the root of your repo. You can also use the AppVeyor web UI to do this. However, for the purposes of ease of demonstration I'm using the file approach. The ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native/blob/master/appveyor.yml"}),"jQuery Validation Unobtrusive Native ",(0,a.kt)("inlineCode",{parentName:"a"},"appveyor.yml"))," looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-yml"}),"---\n#---------------------------------#\n#      general configuration      #\n#---------------------------------#\n\n# version format\nversion: 1.0.{build}\n\n#---------------------------------#\n#    environment configuration    #\n#---------------------------------#\n\n# environment variables\nenvironment:\n  GithubEmail: johnny_reilly@hotmail.com\n  GithubUsername: johnnyreilly\n  GithubPersonalAccessToken:\n    secure: T4M/N+e/baksVoeWoYKPWIpfahOsiSFw/+Zc81VuThZmWEqmrRtgEHUyin0vCWhl\n\nbranches:\n  only:\n    - master\n\ninstall:\n  - ps: choco install wget\n\nbuild:\n  verbosity: minimal\n\nafter_test:\n  - ps: ./makeStatic.ps1 $env:APPVEYOR_BUILD_FOLDER\n  - ps: ./pushStatic.ps1 $env:APPVEYOR_BUILD_FOLDER $env:GithubEmail $env:GithubUsername $env:GithubPersonalAccessToken\n")),(0,a.kt)("p",null,"There's a number of things you should notice from the yml file:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We create 3 environment variables: GithubEmail, GithubUsername and GithubPersonalAccessToken (more on this in a moment)."),(0,a.kt)("li",{parentName:"ul"},"We only build the master branch."),(0,a.kt)("li",{parentName:"ul"},"We use ",(0,a.kt)("a",o({parentName:"li"},{href:"https://chocolatey.org/packages/Wget"}),"Chocolatey")," to install Wget which is used by the ",(0,a.kt)("inlineCode",{parentName:"li"},"makeStatic.ps1")," Powershell script."),(0,a.kt)("li",{parentName:"ul"},"After the tests have completed we run 2 Powershell scripts. First ",(0,a.kt)("a",o({parentName:"li"},{href:"https://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native/blob/master/makeStatic.ps1"}),(0,a.kt)("inlineCode",{parentName:"a"},"makeStatic.ps1"))," which builds the static version of our site. This is the exact same script we discussed in the previous post - we're just passing it the build folder this time (one of AppVeyor's environment variables). Second, we run ",(0,a.kt)("a",o({parentName:"li"},{href:"https://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native/blob/master/pushStatic.ps1"}),(0,a.kt)("inlineCode",{parentName:"a"},"pushStatic.ps1"))," which publishes the static site to GitHub Pages.")),(0,a.kt)("p",null,"We pass 4 arguments to ",(0,a.kt)("inlineCode",{parentName:"p"},"pushStatic.ps1"),": the build folder, my email address, my username and my personal access token. For the sake of security the GithubPersonalAccessToken has been encrypted as indicated by the ",(0,a.kt)("inlineCode",{parentName:"p"},"secure")," keyword. This is a capability available in AppVeyor ",(0,a.kt)("a",o({parentName:"p"},{href:"https://ci.appveyor.com/tools/encrypt"}),"here"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(59480).Z,width:"640",height:"369"})),(0,a.kt)("p",null,"This allows me to mask my personal access token rather than have it available as free text for anyone to grab."),(0,a.kt)("h2",o({},{id:"pushstaticps1"}),(0,a.kt)("inlineCode",{parentName:"h2"},"pushStatic.ps1")),(0,a.kt)("p",null,"Finally we can turn our attention to how our Powershell script ",(0,a.kt)("inlineCode",{parentName:"p"},"pushStatic.ps1")," goes about pushing our changes up to GitHub Pages:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-ps"}),'param([string]$buildFolder, [string]$email, [string]$username, [string]$personalAccessToken)\n\nWrite-Host "- Set config settings...."\ngit config --global user.email $email\ngit config --global user.name $username\ngit config --global push.default matching\n\nWrite-Host "- Clone gh-pages branch...."\ncd "$($buildFolder)\\..\\"\nmkdir gh-pages\ngit clone --quiet --branch=gh-pages https://$($username):$($personalAccessToken)@github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native.git .\\gh-pages\\\ncd gh-pages\ngit status\n\nWrite-Host "- Clean gh-pages folder...."\nGet-ChildItem -Attributes !r | Remove-Item -Recurse -Force\n\nWrite-Host "- Copy contents of static-site folder into gh-pages folder...."\ncopy-item -path ..\\static-site\\* -Destination $pwd.Path -Recurse\n\ngit status\n$thereAreChanges = git status | select-string -pattern "Changes not staged for commit:","Untracked files:" -simplematch\nif ($thereAreChanges -ne $null) {\n    Write-host "- Committing changes to documentation..."\n    git add --all\n    git status\n    git commit -m "skip ci - static site regeneration"\n    git status\n    Write-Host "- Push it...."\n    git push --quiet\n    Write-Host "- Pushed it good!"\n}\nelse {\n    write-host "- No changes to documentation to commit"\n}\n')),(0,a.kt)("p",null,"So what's happening here? Let's break it down:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Git is configured with the passed in username and email address."),(0,a.kt)("li",{parentName:"ul"},'A folder is created that sits alongside the build folder called "gh-pages".'),(0,a.kt)("li",{parentName:"ul"},'We clone the "gh-pages" branch of jQuery Validation Unobtrusive Native into our "gh-pages" directory. You\'ll notice that we are using our GitHub personal access token in the clone URL itself.'),(0,a.kt)("li",{parentName:"ul"},'We delete the contents of the "gh-pages" directory leaving it empty.'),(0,a.kt)("li",{parentName:"ul"},'We copy across the contents of the "static-site" folder (created by ',(0,a.kt)("inlineCode",{parentName:"li"},"makeStatic.ps1"),') into the "gh-pages".'),(0,a.kt)("li",{parentName:"ul"},"We use ",(0,a.kt)("inlineCode",{parentName:"li"},"git status")," to check if there are any changes. (This method is completely effective but a little crude to my mind - there's probably better approaches to this.... shout me in the comments if you have a suggestion.)"),(0,a.kt)("li",{parentName:"ul"},"If we have no changes then we do nothing."),(0,a.kt)("li",{parentName:"ul"},"If we have changes then we stage them, commit them and push them to GitHub Pages. Then we sign off with an allusion to ",(0,a.kt)("a",o({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Push_It_(Salt-n-Pepa_song)"}),"80's East Coast hip-hop"),"... 'Cos that's how we roll.")),(0,a.kt)("p",null,'With this in place, any changes to the docs will be automatically published out to our "gh-pages" branch. Our documentation will always be up to date thanks to the goodness of AppVeyor\'s Continuous Integration service.'))}h.isMDXComponent=!0},59480:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/AppVeyor-encrypt-e1caa3f4eb00b6b2a70ed0a33d1ed023.png"},41366:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/GitHub-Personal-Access-Token-062bb8b5b1a2c648811e9ba13f77aeba.png"},3717:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/GitHubApplicationSettings-1a592788f15c243eb372db1a1799633b.png"}}]);