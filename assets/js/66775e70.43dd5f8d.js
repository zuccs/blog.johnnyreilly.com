"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[88997],{3905:function(t,e,o){o.d(e,{Zo:function(){return c},kt:function(){return m}});var n=o(67294);function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){i(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function r(t,e){if(null==t)return{};var o,n,i=function(t,e){if(null==t)return{};var o,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(i[o]=t[o]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}var l=n.createContext({}),p=function(t){var e=n.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):s(s({},e),t)),o},c=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var o=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,c=r(t,["components","mdxType","originalType","parentName"]),u=p(o),m=i,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||a;return o?n.createElement(d,s(s({ref:e},c),{},{components:o})):n.createElement(d,s({ref:e},c))}));function m(t,e){var o=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=o.length,s=new Array(a);s[0]=u;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=t,r.mdxType="string"==typeof t?t:i,s[1]=r;for(var p=2;p<a;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},11002:function(t,e,o){o.r(e),o.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return h}});var n=o(87462),i=o(63366),a=(o(67294),o(3905)),s=["components"],r={title:"Deploying from ASP.Net MVC to GitHub Pages using AppVeyor part 1",authors:"johnnyreilly",tags:["wget","powershell","github pages","AppVeyor"],hide_table_of_contents:!1},l=void 0,p={permalink:"/2014/12/29/deploying-aspnet-mvc-to-github-pages-with-appveyor-part-1",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-12-29-deploying-aspnet-mvc-to-github-pages-with-appveyor-part-1/index.md",source:"@site/blog/2014-12-29-deploying-aspnet-mvc-to-github-pages-with-appveyor-part-1/index.md",title:"Deploying from ASP.Net MVC to GitHub Pages using AppVeyor part 1",description:"There's a small open source project I'm responsible for called jQuery Validation Unobtrusive Native. (A catchy name is a must for any good open source project. Alas I'm not quite meeting my own exacting standards on this particular point... I should have gone with my gut and called it \"Livingstone\" instead. Too late now...)",date:"2014-12-29T00:00:00.000Z",formattedDate:"December 29, 2014",tags:[{label:"wget",permalink:"/tags/wget"},{label:"powershell",permalink:"/tags/powershell"},{label:"github pages",permalink:"/tags/github-pages"},{label:"AppVeyor",permalink:"/tags/app-veyor"}],readingTime:5.8,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Deploying from ASP.Net MVC to GitHub Pages using AppVeyor part 1",authors:"johnnyreilly",tags:["wget","powershell","github pages","AppVeyor"],hide_table_of_contents:!1},prevItem:{title:"Deploying from ASP.Net MVC to GitHub Pages using AppVeyor part 2",permalink:"/2015/01/07/deploying-aspnet-mvc-to-github-pages-with-appveyor-part-2"},nextItem:{title:"Gulp, npm, long paths and Visual Studio.... Fight!",permalink:"/2014/12/12/gulp-npm-long-paths-and-visual-studio-fight"}},c={authorsImageUrls:[void 0]},h=[{value:"I&#39;m quite cheap",id:"im-quite-cheap",level:2},{value:"You Wget me?",id:"you-wget-me",level:2}],u={toc:h};function m(t){var e=t.components,r=(0,i.Z)(t,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There's a small open source project I'm responsible for called ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native"},"jQuery Validation Unobtrusive Native"),'. (A catchy name is a must for any good open source project. Alas I\'m not quite meeting my own exacting standards on this particular point... I should have gone with my gut and called it "Livingstone" instead. Too late now...)'),(0,a.kt)("p",null,"The project itself is fairly simple in purpose. It's essentially a bridge between ASP.Net MVC's inbuilt support for driving validation from data attributes and jQuery Validation's native support for the same. It is, in the end, a collection of ASP.Net MVC HTML helper extensions. It is not massively complicated."),(0,a.kt)("p",null,'I believe it was Tony Blair that said "documentation, documentation, documentation" were his priorities for open source projects. Or maybe it was someone else... Anyway, the point stands. Documentation is supremely important if you want your project to be in any way useful to anyone other than yourself. A project, no matter how fantastic, which lacks decent documentation is a missed opportunity.'),(0,a.kt)("p",null,"Anyway I'm happy to say that jQuery Validation Unobtrusive Native ",(0,a.kt)("em",{parentName:"p"},"has")," documentation! And pretty good documentation at that. The documentation takes the form of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native/tree/master/jVUNDemo"},"jVUNDemo")," project which is part of the jQuery Validation Unobtrusive Native repo. jVUNDemo is an ASP.Net MVC web application which is built on top of the jQuery Validation Unobtrusive Native helpers. It demonstrates the helpers in action and documents how you might go about using them. It looks a bit like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(60299).Z,width:"640",height:"525"})),(0,a.kt)("p",null,"When I first put jVUNDemo together I hosted it on Azure so the world could see it in all it's finery. And that worked just fine. However, there's something you ought to know about me:"),(0,a.kt)("h2",{id:"im-quite-cheap"},"I'm quite cheap"),(0,a.kt)("p",null,'No really, I am. My attention was grabbed by the essentially "free" nature of ',(0,a.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"GitHub Pages"),". I was immediately seized by the desire to somehow deploy jVUNDemo to GitHub Pages and roll around joyfully in all that lovely free hosting."),(0,a.kt)("p",null,'"But", I hear you cry, "you can\'t deploy an ASP.Net MVC application to Git Hub Pages... It only hosts static sites!" Quite right. Sort of. This is where I get to pull my ace of spades: jVUNDemo is not really an "app" so much as a static site. Yup, once the HTML that makes up each page is generated there isn\'t any app like business to do. It\'s just a collection of text and 1 screen demo\'s really.'),(0,a.kt)("p",null,"That being the case, there's no reason why I shouldn't be able to make use of GitHub Pages. So that's what I decided to do. Whilst I was at it I also wanted to automate the deployment process. When I tweak jVUNDemo I don't want to have to manually push out a new version of jVUNDemo to wherever it's being hosted. No, I'm a developer so I'll automate it."),(0,a.kt)("p",null,"I've broken this up into 2 posts. This first one will cover how you generate a static site from an ASP.Net MVC site. The second will be about how to use ",(0,a.kt)("a",{parentName:"p",href:"http://www.appveyor.com/"},"AppVeyor")," to ensure that on each build your documentation is getting republished."),(0,a.kt)("h2",{id:"you-wget-me"},"You Wget me?"),(0,a.kt)("p",null,"So, static site generation. There's a well known Unix utility called ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Wget"},"Wget"),' which covers exactly that ground and so we\'re going to use it. It downloads and saves HTML, it recursively walks the links inside the site and grabs those pages too and it converts our routes so they are locally browsable ("Demo/Required" becomes "Demo/Required.html").'),(0,a.kt)("p",null,"You can use ",(0,a.kt)("a",{parentName:"p",href:"https://chocolatey.org/packages/Wget"},"Chocolatey")," to get a copy of Wget. We're also going to need IIS Express to host jVUNDemo whilst Wget converts it. Once jVUNDemo has been built successfully you should be be able to kick off the process like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ps"},"cd C:\\projects\\jquery-validation-unobtrusive-native\n.\\makeStatic.ps1 $pwd.path\n")),(0,a.kt)("p",null,"This invokes the ",(0,a.kt)("inlineCode",{parentName:"p"},"makeStatic")," Powershell script in the root of the jQuery Validation Unobtrusive Native repo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ps"},'param([string]$buildFolder)\n\n$jVUNDemo = "$($buildFolder)\\jVUNDemo"\n$staticSiteParentPath = (get-item $buildFolder).Parent.FullName\n$staticSite = "static-site"\n$staticSitePath = "$($staticSiteParentPath)\\$($staticSite)"\n$wgetLogPath = "$($staticSiteParentPath)\\wget.log"\n$port = 57612\n$servedAt = "http://localhost:$($port)/"\nwrite-host "jVUNDemo location: $jVUNDemo"\nwrite-host "static site parent location: $staticSiteParentPath"\nwrite-host "static site location: $staticSitePath"\nwrite-host "wget log path: $wgetLogPath"\n\nwrite-host "Spin up jVUNDemo site at $($servedAt)"\n$process = Start-Process \'C:\\Program Files (x86)\\IIS Express\\iisexpress.exe\' -NoNewWindow -ArgumentList "/path:$($jVUNDemo) /port:$($port)"\n\nwrite-host "Wait a moment for IIS to startup"\nStart-sleep -s 15\n\nif (Test-Path $staticSitePath) {\n    write-host "Removing $($staticSitePath)..."\n    Remove-Item -path $staticSitePath -Recurse -Force\n}\n\nwrite-host "Create static version of demo site here: $($staticSitePath)"\nPush-Location $staticSiteParentPath\n# 2>&1 used to combine stderr and stdout\nwget.exe --recursive --convert-links -E --directory-prefix=$staticSite --no-host-directories $servedAt > $wgetLogPath 2>&1\nwrite-host "lastExitCode: $($lastExitCode)"\ncat $wgetLogPath\nPop-Location\n\nwrite-host "Shut down jVUNDemo site"\nstop-process -Name iisexpress\n\nif (Test-Path $staticSitePath) {\n    write-host "Contents of $($staticSitePath)"\n    ls $staticSitePath\n}\n')),(0,a.kt)("p",null,"The above Powershell does the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Starts up IIS Express serving jVUNDemo on http://localhost:57612/"),(0,a.kt)("li",{parentName:"ol"},"Waits 15 seconds for IIS Express to get itself together (probably a shorter wait time would be sufficient)"),(0,a.kt)("li",{parentName:"ol"},'Points Wget at jVUNDemo and bellows "go!!!!"'),(0,a.kt)("li",{parentName:"ol"},'Wget downloads and saves the static version of jVUNDemo to a directory called "static-site"'),(0,a.kt)("li",{parentName:"ol"},"Stops IIS Express"),(0,a.kt)("li",{parentName:"ol"},'Prints out the contents of the "static-site" directory')),(0,a.kt)("p",null,"When run, it pumps something like this out:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"jVUNDemo location: C:\\projects\\jquery-validation-unobtrusive-native\\jVUNDemo\nstatic site parent location: C:\\projects\nstatic site location: C:\\projects\\static-site\nwget log path: C:\\projects\\wget.log\nSpin up jVUNDemo site at http://localhost:57612/\nWait a moment for IIS to startup\nCreate static version of demo site here: C:\\projects\\static-site\nwget.exe : --2014-12-29 07:49:56--  http://localhost:57612/\nResolving localhost...\n127.0.0.1\nConnecting to localhost|127.0.0.1|:57612... connected.\nHTTP request sent, awaiting response...\n200 OK\n\n..... lots of HTTP requests.....\n\nDownloaded: 30 files, 1.0M in 0.09s (10.8 MB/s)\nConverting static-site/Demo/CreditCard.html... 34-0\nConverting static-site/Demo/Number.html... 34-0\nConverting static-site/Demo/Range.html... 34-0\nConverting static-site/Demo/Email.html... 34-0\nConverting static-site/AdvancedDemo/CustomValidation.html... 35-0\nConverting static-site/Demo/Date.html... 36-0\nConverting static-site/Home/License.html... 27-0\nConverting static-site/index.html... 29-0\nConverting static-site/AdvancedDemo/Dynamic.html... 35-0\nConverting static-site/Demo/MaxLengthMinLength.html... 34-0\nConverting static-site/Demo/Required.html... 34-0\nConverting static-site/AdvancedDemo.html... 32-0\nConverting static-site/Demo/Remote.html... 35-0\nConverting static-site/Demo/EqualTo.html... 34-0\nConverting static-site/AdvancedDemo/Globalize.html... 38-0\nConverting static-site/Demo/Url.html... 34-0\nConverting static-site/Demo.html... 37-0\nConverting static-site/Home/GettingStarted.html... 29-0\nConverting static-site/Home/Download.html... 27-0\nConverting static-site/AdvancedDemo/Tooltip.html... 34-0\nConverted 20 files in 0.03 seconds.\n\nShut down jVUNDemo site\nContents of C:\\projects\\static-site\n\n\n    Directory: C:\\projects\\static-site\n\n\nMode                LastWriteTime     Length Name\n----                -------------     ------ ----\nd----        12/29/2014   7:50 AM            AdvancedDemo\nd----        12/29/2014   7:50 AM            Content\nd----        12/29/2014   7:50 AM            Demo\nd----        12/29/2014   7:50 AM            Home\nd----        12/29/2014   7:50 AM            Scripts\n-a---        12/29/2014   7:50 AM       5967 AdvancedDemo.html\n-a---        12/29/2014   7:50 AM       6802 Demo.html\n-a---        12/29/2014   7:47 AM      12862 favicon.ico\n-a---        12/29/2014   7:50 AM       8069 index.html\n")),(0,a.kt)("p",null,"And that's it for part 1 my friends! You now have a static version of the ASP.Net MVC site to dazzle the world with. I should say for the purposes of full disclosure that there are 2 pages in the site which are not entirely \"static\" friendly. For these 2 pages I've put messages in that are displayed when the page is served up in a static format explaining the limitations. Their full glory can still be experienced by cloning the project and running locally."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2015/01/deploying-aspnet-mvc-to-github-pages-with-appveyor-part-2.html"},"Next time")," we'll take the mechanism detailed above and plug it into AppVeyor for some Continuous Integration happiness."))}m.isMDXComponent=!0},60299:function(t,e,o){e.Z=o.p+"assets/images/Screenshot-2014-12-29-06.22.46-d83322e55005175b54579103878f44cc.png"}}]);