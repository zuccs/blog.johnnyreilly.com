"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[50307],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,h=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});n(67294);var o=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={title:"Journalling the Migration of Jasmine Tests to TypeScript",authors:"johnnyreilly",tags:["Jasmine","TypeScript Language Service","TypeScript","javascript","implicit references"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2014/09/13/migrating-jasmine-tests-to-typescript",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2014-09-13-migrating-jasmine-tests-to-typescript/index.md",source:"@site/blog/2014-09-13-migrating-jasmine-tests-to-typescript/index.md",title:"Journalling the Migration of Jasmine Tests to TypeScript",description:"I previously attempted to migrate my Jasmine tests from JavaScript to TypeScript. The last time I tried it didn't go so well and I bailed. Thank the Lord for source control. But feeling I shouldn't be deterred I decided to have another crack at it.",date:"2014-09-13T00:00:00.000Z",formattedDate:"September 13, 2014",tags:[{label:"Jasmine",permalink:"/tags/jasmine"},{label:"TypeScript Language Service",permalink:"/tags/type-script-language-service"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"javascript",permalink:"/tags/javascript"},{label:"implicit references",permalink:"/tags/implicit-references"}],readingTime:9.495,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Journalling the Migration of Jasmine Tests to TypeScript",authors:"johnnyreilly",tags:["Jasmine","TypeScript Language Service","TypeScript","javascript","implicit references"],hide_table_of_contents:!1},prevItem:{title:"He tasks me; he heaps me.... I will wreak that MOQ upon him.",permalink:"/2014/10/03/he-tasks-me-he-heaps-me-i-will-wreak"},nextItem:{title:"Unit Testing an Angular Controller with Jasmine",permalink:"/2014/09/10/unit-testing-angular-controller-with"}},p={authorsImageUrls:[void 0]},c=[{value:"What to Migrate?",id:"what-to-migrate",level:2},{value:"Off we go",id:"off-we-go",level:2},{value:"Could not find symbol &#39;$q&#39;",id:"could-not-find-symbol-q",level:2},{value:"Typings? Where we&#39;re going, we need typings...",id:"typings-where-were-going-we-need-typings",level:2},{value:"So That&#39;s All Good...",id:"so-thats-all-good",level:2},{value:"Who Killed the TypeScript Language Service?",id:"who-killed-the-typescript-language-service",level:2},{value:"Solutions....",id:"solutions",level:2}],d={toc:c};function u(e){var{components:t}=e,i=a(e,["components"]);return(0,o.kt)("wrapper",r({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I previously attempted to migrate my Jasmine tests from JavaScript to TypeScript. The last time I tried it didn't go so well and I bailed. Thank the Lord for source control. But feeling I shouldn't be deterred I decided to have another crack at it."),(0,o.kt)("p",null,'I did manage it this time... Sort of. Unfortunately there was a problem which I discovered right at the end. An issue with the TypeScript / Visual Studio tooling. So, just to be clear, this is not a blog post of "do this and it will work perfectly". On this occasion there will be some rough edges. This post exists, as much as anything else, as a record of the problems I experienced - I hope it will prove useful. Here we go:'),(0,o.kt)("h2",r({},{id:"what-to-migrate"}),"What to Migrate?"),(0,o.kt)("p",null,"I'm going to use one of the test files in my my side project ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/johnnyreilly/Proverb"}),"Proverb"),". It's the tests for an AngularJS controller called ",(0,o.kt)("inlineCode",{parentName:"p"},"sageDetail")," ","-"," I've written about it ",(0,o.kt)("a",r({parentName:"p"},{href:"http://icanmakethiswork.blogspot.co.uk/2014/09/unit-testing-angular-controller-with.html"}),"before"),". Here it is in all it's JavaScript-y glory:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"describe('Proverb.Web -> app-> controllers ->', function () {\n  beforeEach(function () {\n    module('app');\n  });\n\n  describe('sageDetail ->', function () {\n    var $rootScope,\n      getById_deferred, // deferred used for promises\n      $location,\n      $routeParams_stub,\n      common,\n      datacontext, // controller dependencies\n      sageDetailController; // the controller\n\n    beforeEach(inject(function (\n      _$controller_,\n      _$rootScope_,\n      _$q_,\n      _$location_,\n      _common_,\n      _datacontext_\n    ) {\n      $rootScope = _$rootScope_;\n      $q = _$q_;\n\n      $location = _$location_;\n      common = _common_;\n      datacontext = _datacontext_;\n\n      $routeParams_stub = { id: '10' };\n      getById_deferred = $q.defer();\n\n      spyOn(datacontext.sage, 'getById').and.returnValue(\n        getById_deferred.promise\n      );\n      spyOn(common, 'activateController').and.callThrough();\n      spyOn(common.logger, 'getLogFn').and.returnValue(\n        jasmine.createSpy('log')\n      );\n      spyOn($location, 'path').and.returnValue(jasmine.createSpy('path'));\n\n      sageDetailController = _$controller_('sageDetail', {\n        $location: $location,\n        $routeParams: $routeParams_stub,\n        common: common,\n        datacontext: datacontext,\n      });\n    }));\n\n    describe('on creation ->', function () {\n      it(\"controller should have a title of 'Sage Details'\", function () {\n        expect(sageDetailController.title).toBe('Sage Details');\n      });\n\n      it('controller should have no sage', function () {\n        expect(sageDetailController.sage).toBeUndefined();\n      });\n\n      it('datacontext.sage.getById should be called', function () {\n        expect(datacontext.sage.getById).toHaveBeenCalledWith(10, true);\n      });\n    });\n\n    describe('activateController ->', function () {\n      var sage_stub;\n      beforeEach(function () {\n        sage_stub = { name: 'John' };\n      });\n\n      it('should set sages to be the resolved promise values', function () {\n        getById_deferred.resolve(sage_stub);\n        $rootScope.$digest(); // So Angular processes the resolved promise\n\n        expect(sageDetailController.sage).toBe(sage_stub);\n      });\n\n      it(\"should log 'Activated Sage Details View' and set title with name\", function () {\n        getById_deferred.resolve(sage_stub);\n        $rootScope.$digest(); // So Angular processes the resolved promise\n\n        expect(sageDetailController.log).toHaveBeenCalledWith(\n          'Activated Sage Details View'\n        );\n        expect(sageDetailController.title).toBe(\n          'Sage Details: ' + sage_stub.name\n        );\n      });\n    });\n\n    describe('gotoEdit ->', function () {\n      var sage_stub;\n      beforeEach(function () {\n        sage_stub = { id: 20 };\n      });\n\n      it('should set $location.path to edit URL', function () {\n        getById_deferred.resolve(sage_stub);\n        $rootScope.$digest(); // So Angular processes the resolved promise\n\n        sageDetailController.gotoEdit();\n\n        expect($location.path).toHaveBeenCalledWith(\n          '/sages/edit/' + sage_stub.id\n        );\n      });\n    });\n  });\n});\n")),(0,o.kt)("h2",r({},{id:"off-we-go"}),"Off we go"),(0,o.kt)("p",null,"Righteo. Let's flip the switch. ",(0,o.kt)("inlineCode",{parentName:"p"},"sageDetail.js")," you shall go to the ball! One wave of my magic wand and ",(0,o.kt)("inlineCode",{parentName:"p"},"sageDetail.js")," becomes ",(0,o.kt)("inlineCode",{parentName:"p"},"sageDetail.ts"),"... Alakazam!! Of course we've got to do the fiddling with the ",(0,o.kt)("inlineCode",{parentName:"p"},"csproj")," file to include the dependent JavaScript files. (I'll be very pleased when ASP.Net vNext ships and I don't have to do this anymore....) So find this:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-xml"}),'<TypeScriptCompile Include="app\\sages\\sageDetail.ts" />\n')),(0,o.kt)("p",null,"And add this:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-xml"}),'<Content Include="app\\sages\\sageDetail.js">\n  <DependentUpon>sageDetail.ts</DependentUpon>\n</Content>\n<Content Include="app\\sages\\sageDetail.js.map">\n  <DependentUpon>sageDetail.ts</DependentUpon>\n</Content>\n')),(0,o.kt)("p",null,"What next? I've a million red squigglies in my code. It's \"could not find symbol\" city. Why? Typings! We need typings! So let's begin - I'm needing the Jasmine typings for starters. So let's hit NuGet and it looks like we need ",(0,o.kt)("a",r({parentName:"p"},{href:"http://www.nuget.org/packages/jasmine.TypeScript.DefinitelyTyped/"}),"this"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Install-Package jasmine.TypeScript.DefinitelyTyped"),"That did no good at all. Still red squigglies. I'm going to hazard a guess that this is something to do with the fact my JavaScript Unit Test project doesn't contain the various TypeScript artefacts that Visual Studio kindly puts into the web csproj for you. This is because I'm keeping my JavaScript tests in a separate project from the code being tested. Also, the Visual Studio TypeScript tooling seems to work on the assumption that TypeScript will only be used within a web project; not a test project. Well I won't let that hold me back... Time to port the TypeScript artefacts in the web csproj over by hand. I'll take this:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-xml"}),'<Import Project="$(MSBuildExtensionsPath32)\\Microsoft\\VisualStudio\\v$(VisualStudioVersion)\\TypeScript\\Microsoft.TypeScript.Default.props" Condition="Exists(\'$(MSBuildExtensionsPath32)\\Microsoft\\VisualStudio\\v$(VisualStudioVersion)\\TypeScript\\Microsoft.TypeScript.Default.props\')" />\n')),(0,o.kt)("p",null,"And I'll also take this"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-xml"}),"<PropertyGroup Condition=\"'$(Configuration)' == 'Debug'\">\n  <TypeScriptNoImplicitAny>True</TypeScriptNoImplicitAny>\n</PropertyGroup>\n<Import Project=\"$(MSBuildExtensionsPath32)\\Microsoft\\VisualStudio\\v$(VisualStudioVersion)\\TypeScript\\Microsoft.TypeScript.targets\" Condition=\"Exists('$(MSBuildExtensionsPath32)\\Microsoft\\VisualStudio\\v$(VisualStudioVersion)\\TypeScript\\Microsoft.TypeScript.targets')\" />\n")),(0,o.kt)("p",null,"Bingo bango - a difference. I no longer have red squigglies under the Jasmine statements (",(0,o.kt)("inlineCode",{parentName:"p"},"describe"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"it")," etc). But alas, I do everywhere else. One in particular draws my eye..."),(0,o.kt)("h2",r({},{id:"could-not-find-symbol-q"}),"Could not find symbol '$q'"),(0,o.kt)("p",null,"Once again TypeScript picks up the hidden bugs in my JavaScript:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"$q = _$q_;\n")),(0,o.kt)("p",null,"That's right it's an implicit global. Quickly fixed:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"var $q = _$q_;\n")),(0,o.kt)("h2",r({},{id:"typings-where-were-going-we-need-typings"}),"Typings? Where we're going, we need typings..."),(0,o.kt)("p",null,"We need more types. We're going to need the types created by our application; our controllers / services / directives etc. As well that we need the types used in the creation of the app. So the Angular typings etc. Since we're going to need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"reference")," statements to pull in the types created by our application I might as well use them to pull in the required definition files as well (eg ",(0,o.kt)("inlineCode",{parentName:"p"},"angular.d.ts"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-xml"}),'/// <reference path="../../../proverb.web/scripts/typings/angularjs/angular.d.ts" />\n/// <reference path="../../../proverb.web/scripts/typings/angularjs/angular-mocks.d.ts" />\n/// <reference path="../../../proverb.web/app/sages/sagedetail.ts" />\n/// <reference path="../../../proverb.web/app/common/common.ts" />\n/// <reference path="../../../proverb.web/app/services/datacontext.ts" />\n/// <reference path="../../../proverb.web/app/services/repository.sage.ts" />\n')),(0,o.kt)("p",null,"Now we need to work our way through the \"variable 'x' implicitly has an 'any' type\" messages. One thing we need to do is to amend our original sageDetails.ts file so that the ",(0,o.kt)("inlineCode",{parentName:"p"},"sageDetailRouteParams")," interface and ",(0,o.kt)("inlineCode",{parentName:"p"},"SageDetail")," class are exported from the controllers module. We can't use the types otherwise. Now we can add typings to our file - once finished it looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"/// <reference path=\"../../../proverb.web/scripts/typings/angularjs/angular.d.ts\" />\n/// <reference path=\"../../../proverb.web/scripts/typings/angularjs/angular-mocks.d.ts\" />\n/// <reference path=\"../../../proverb.web/app/sages/sagedetail.ts\" />\n/// <reference path=\"../../../proverb.web/app/common/common.ts\" />\n/// <reference path=\"../../../proverb.web/app/services/datacontext.ts\" />\n/// <reference path=\"../../../proverb.web/app/services/repository.sage.ts\" />\ndescribe('Proverb.Web -> app-> controllers ->', function () {\n  beforeEach(function () {\n    module('app');\n  });\n\n  describe('sageDetail ->', function () {\n    var $rootScope: ng.IRootScopeService,\n      // deferred used for promises\n      getById_deferred: ng.IDeferred<sage>,\n      // controller dependencies\n      $location: ng.ILocationService,\n      $routeParams_stub: controllers.sageDetailRouteParams,\n      common: common,\n      datacontext: datacontext,\n      sageDetailController: controllers.SageDetail; // the controller\n\n    beforeEach(inject(function (\n      _$controller_: any,\n      _$rootScope_: ng.IRootScopeService,\n      _$q_: ng.IQService,\n      _$location_: ng.ILocationService,\n      _common_: common,\n      _datacontext_: datacontext\n    ) {\n      $rootScope = _$rootScope_;\n      var $q = _$q_;\n\n      $location = _$location_;\n      common = _common_;\n      datacontext = _datacontext_;\n\n      $routeParams_stub = { id: '10' };\n      getById_deferred = $q.defer();\n\n      spyOn(datacontext.sage, 'getById').and.returnValue(\n        getById_deferred.promise\n      );\n      spyOn(common, 'activateController').and.callThrough();\n      spyOn(common.logger, 'getLogFn').and.returnValue(\n        jasmine.createSpy('log')\n      );\n      spyOn($location, 'path').and.returnValue(jasmine.createSpy('path'));\n\n      sageDetailController = _$controller_('sageDetail', {\n        $location: $location,\n        $routeParams: $routeParams_stub,\n        common: common,\n        datacontext: datacontext,\n      });\n    }));\n\n    describe('on creation ->', function () {\n      it(\"controller should have a title of 'Sage Details'\", function () {\n        expect(sageDetailController.title).toBe('Sage Details');\n      });\n\n      it('controller should have no sage', function () {\n        expect(sageDetailController.sage).toBeUndefined();\n      });\n\n      it('datacontext.sage.getById should be called', function () {\n        expect(datacontext.sage.getById).toHaveBeenCalledWith(10, true);\n      });\n    });\n\n    describe('activateController ->', function () {\n      var sage_stub: sage;\n      beforeEach(function () {\n        sage_stub = {\n          name: 'John',\n          id: 10,\n          username: 'John',\n          email: 'john@',\n          dateOfBirth: new Date(),\n        };\n      });\n\n      it('should set sages to be the resolved promise values', function () {\n        getById_deferred.resolve(sage_stub);\n        $rootScope.$digest(); // So Angular processes the resolved promise\n\n        expect(sageDetailController.sage).toBe(sage_stub);\n      });\n\n      it(\"should log 'Activated Sage Details View' and set title with name\", function () {\n        getById_deferred.resolve(sage_stub);\n        $rootScope.$digest(); // So Angular processes the resolved promise\n\n        expect(sageDetailController.log).toHaveBeenCalledWith(\n          'Activated Sage Details View'\n        );\n        expect(sageDetailController.title).toBe(\n          'Sage Details: ' + sage_stub.name\n        );\n      });\n    });\n\n    describe('gotoEdit ->', function () {\n      var sage_stub: sage;\n      beforeEach(function () {\n        sage_stub = {\n          name: 'John',\n          id: 20,\n          username: 'John',\n          email: 'john@',\n          dateOfBirth: new Date(),\n        };\n      });\n\n      it('should set $location.path to edit URL', function () {\n        getById_deferred.resolve(sage_stub);\n        $rootScope.$digest(); // So Angular processes the resolved promise\n\n        sageDetailController.gotoEdit();\n\n        expect($location.path).toHaveBeenCalledWith(\n          '/sages/edit/' + sage_stub.id\n        );\n      });\n    });\n  });\n});\n")),(0,o.kt)("h2",r({},{id:"so-thats-all-good"}),"So That's All Good..."),(0,o.kt)("p",null,"Except it's not. When I run the tests using Chutzpah my ",(0,o.kt)("inlineCode",{parentName:"p"},"sageDetail")," controller tests aren't found. My spider sense is tingling. This is something to do with the ",(0,o.kt)("inlineCode",{parentName:"p"},"reference")," statements. They're throwing Chutzpah off. No bother, I can fix that with a quick tweak of the project file:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-xml"}),"<PropertyGroup Condition=\"'$(Configuration)' == 'Debug'\">\n    <TypeScriptNoImplicitAny>True</TypeScriptNoImplicitAny>\n    <TypeScriptRemoveComments>True</TypeScriptRemoveComments>\n  </PropertyGroup>\n")),(0,o.kt)("p",null,"The TypeScript compiler will now strip comments; which includes the ",(0,o.kt)("inlineCode",{parentName:"p"},"reference")," statements. Now my tests are detected ","*",(0,o.kt)("strong",{parentName:"p"},"and"),"*"," they run. Yay!"),(0,o.kt)("h2",r({},{id:"who-killed-the-typescript-language-service"}),"Who Killed the TypeScript Language Service?"),(0,o.kt)("p",null,"Yup it's dead. Whilst the compilation itself has no issues, take a look at the errors being presented for just one of the files back in the original web project:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(46022).Z,width:"640",height:"454"})),(0,o.kt)("p",null,"It looks like having one TypeScript project in a solution which uses ",(0,o.kt)("inlineCode",{parentName:"p"},"reference")," comments somehow breaks the implicit referencing behaviour built into Visual Studio for other TypeScript projects in the solution. I can say this with some confidence as if I pull out the ",(0,o.kt)("inlineCode",{parentName:"p"},"reference")," comments from the top of the test file that we've converted then it's business as usual - the TypeScript Language Service lives once more. I'm sure you can see the problem here though: the TypeScript test file doesn't compile. All rather unsatisfactory."),(0,o.kt)("p",null,"I suspect that if I added ",(0,o.kt)("inlineCode",{parentName:"p"},"reference")," comments throughout the web project the TypeScript Language Service would be just fine. But I rather like the implicit referencing functionality so I'm not inclined to do that. After reaching something of a brick wall and thinking I had encountered a bug in the TypeScript Language service I ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/Microsoft/TypeScript/issues/673"}),"raised an issue on GitHub"),"."),(0,o.kt)("h2",r({},{id:"solutions"}),"Solutions...."),(0,o.kt)("p",null,"Thanks to the help of ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/mhegazy"}),"Mohamed Hegazy")," it emerged that the problem was down to missing ",(0,o.kt)("inlineCode",{parentName:"p"},"reference")," comments in my ",(0,o.kt)("inlineCode",{parentName:"p"},"sageDetail")," controller tests. One thing I had not considered was the 2 different ways each of my TypeScript projects were working:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Proverb.Web uses the Visual Studio implicit referencing functionality. This means that I do not need to use ",(0,o.kt)("inlineCode",{parentName:"li"},"reference")," comments in the TypeScript files in Proverb.Web."),(0,o.kt)("li",{parentName:"ul"},"Proverb.Web.JavaScript does ","*",(0,o.kt)("strong",{parentName:"li"},"not"),"*"," uses the implicit referencing functionality. It needs ",(0,o.kt)("inlineCode",{parentName:"li"},"reference")," comments to resolve references.")),(0,o.kt)("p",null,"The important thing to take away from this (and the thing I had overlooked) was that Proverb.Web.JavaScript uses ",(0,o.kt)("inlineCode",{parentName:"p"},"reference")," comments to pull in Proverb.Web TypeScript files. Those files have dependencies which are ","*",(0,o.kt)("strong",{parentName:"p"},"not"),"*"," stated using ",(0,o.kt)("inlineCode",{parentName:"p"},"reference")," comments. So the compiler trips up when it tries to walk the dependency tree - there are no ",(0,o.kt)("inlineCode",{parentName:"p"},"reference")," comments to be followed! So for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"common.ts")," has a dependency upon ",(0,o.kt)("inlineCode",{parentName:"p"},"logger.ts"),". Fixing the TypeScript Language Service involves ensuring that the full dependency list is included in the ",(0,o.kt)("inlineCode",{parentName:"p"},"sageDetail")," controller tests file, like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),'/// <reference path="../../../proverb.web/scripts/typings/angularjs/angular.d.ts" />\n/// <reference path="../../../proverb.web/scripts/typings/angularjs/angular-mocks.d.ts" />\n/// <reference path="../../../proverb.web/scripts/typings/angularjs/angular-route.d.ts" />\n/// <reference path="../../../proverb.web/scripts/typings/toastr/toastr.d.ts" />\n/// <reference path="../../../proverb.web/scripts/typings/underscore/underscore.d.ts" />\n/// <reference path="../../../proverb.web/app/sages/sagedetail.ts" />\n/// <reference path="../../../proverb.web/app/common/logger.ts" />\n/// <reference path="../../../proverb.web/app/common/common.ts" />\n/// <reference path="../../../proverb.web/app/services/datacontext.ts" />\n/// <reference path="../../../proverb.web/app/services/repositories.ts" />\n/// <reference path="../../../proverb.web/app/services/repository.sage.ts" />\n/// <reference path="../../../proverb.web/app/services/repository.saying.ts" />\n/// <reference path="../../../proverb.web/app/app.ts" />\n/// <reference path="../../../proverb.web/app/config.route.ts" />\n')),(0,o.kt)("p",null,"With this in place you have a working solution, albeit one that is a little flaky. ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/Microsoft/TypeScript/issues/673#issuecomment-56024348"}),"An alternative solution was suggested by Noel Abrahams")," which I quote here:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Why not do the following?"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Compile Proverb.Web with --declarations and the option for combining output into a single file. This should create a Proverb.Web.d.ts in your output directory."),(0,o.kt)("li",{parentName:"ul"},"In Proverb.Web.Tests.JavaScript add a reference to this file."),(0,o.kt)("li",{parentName:"ul"},'Right-click Proverb.Web.Tests.JavaScript select "Build Dependencies" > "Project Dependencies" and add a reference to Proverb.Web.')),(0,o.kt)("p",{parentName:"blockquote"},"I don't think directly referencing TypeScript source files is a good idea, because it causes the file to be rebuilt every time the dependant project is compiled.")),(0,o.kt)("p",null,"Mohamed rather liked this solution. It looks like some more work is due to be done on the TypeScript tooling to make this less headache-y in future."))}u.isMDXComponent=!0},46022:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Screenshot-2014-09-12-23.15.22-83a0fa3cba8275cf16db06131f6d6029.png"}}]);