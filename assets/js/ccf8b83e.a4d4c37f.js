"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[70708],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(h,l(l({ref:t},c),{},{components:n})):i.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87968:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return m}});var i=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],r={title:"Visual Studio, tsconfig.json and external TypeScript compilation",authors:"johnnyreilly",tags:["TFS","Visual Studio","tsconfig.json","TypeScript","Webpack"],hide_table_of_contents:!1},p=void 0,s={permalink:"/2016/02/19/visual-studio-tsconfigjson-and-external",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-02-19-visual-studio-tsconfigjson-and-external.md",source:"@site/blog/2016-02-19-visual-studio-tsconfigjson-and-external.md",title:"Visual Studio, tsconfig.json and external TypeScript compilation",description:"TypeScript first gained support for tsconfig.json back with the 1\\.5 release. However, to my lasting regret and surprise Visual Studio will not be gaining meaningful support for it until TypeScript 1.8 ships. However, if you want it now, it's already available to use in beta.",date:"2016-02-19T00:00:00.000Z",formattedDate:"February 19, 2016",tags:[{label:"TFS",permalink:"/tags/tfs"},{label:"Visual Studio",permalink:"/tags/visual-studio"},{label:"tsconfig.json",permalink:"/tags/tsconfig-json"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"Webpack",permalink:"/tags/webpack"}],readingTime:5.855,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Creating Angular UI Routes in the Controller",permalink:"/2016/02/29/creating-angular-ui-routes-in-controller"},nextItem:{title:"TFS 2012, .NET 4.5 and C# 6",permalink:"/2016/02/01/tfs-2012-net-45-and-c-6"}},c={authorsImageUrls:[void 0]},u=[{value:"External TypeScript Compilation and the VS build",id:"external-typescript-compilation-and-the-vs-build",children:[],level:2},{value:"Goodbye TypeScript Compilation in VS",id:"goodbye-typescript-compilation-in-vs",children:[],level:2},{value:"Hello TypeScript Compilation outside VS",id:"hello-typescript-compilation-outside-vs",children:[],level:2},{value:"The <code>WebClientBuild</code> Target",id:"the-webclientbuild-target",children:[],level:2},{value:"The <code>WebClientClean</code> Target",id:"the-webclientclean-target",children:[],level:2},{value:"The <code>CollectLegacyTypeScriptOutput</code> and <code>CollectGulpOutput</code> Targets",id:"the-collectlegacytypescriptoutput-and-collectgulpoutput-targets",children:[],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"TypeScript first gained support for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/wiki/tsconfig.json"},(0,a.kt)("inlineCode",{parentName:"a"},"tsconfig.json"))," back with the ",(0,a.kt)("a",{parentName:"p",href:"https://blogs.msdn.microsoft.com/typescript/2015/07/20/announcing-typescript-1-5/"},"1",".","5 release"),". However, to my lasting regret and surprise Visual Studio will not be gaining meaningful support for it until ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#improved-support-for-tsconfigjson-in-visual-studio-2015"},"TypeScript 1.8")," ships. However, if you want it now, it's already available to use in ",(0,a.kt)("a",{parentName:"p",href:"https://blogs.msdn.microsoft.com/typescript/2016/01/28/announcing-typescript-1-8-beta/"},"beta"),"."),(0,a.kt)("p",null,"I've already leapt aboard. Whilst there's a number of bugs in the beta it's still totally usable. So use it."),(0,a.kt)("h2",{id:"external-typescript-compilation-and-the-vs-build"},"External TypeScript Compilation and the VS build"),(0,a.kt)("p",null,"Whilst ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," is useful and super cool it has limitations. It allows you to deactivate compilation upon file saving using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/issues/2326#issuecomment-178294169"},(0,a.kt)("inlineCode",{parentName:"a"},"compileOnSave")),". ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/issues/7091"},"What it doesn't allow is deactivation of the TypeScript compilation that happens as part of a Visual Studio build.")," That may not matter for the vanilla workflow of just dropping TypeScript files in a Visual Studio web project and having VS invoke the TypeScript compilation. However it comes to matter when your workflow deviates from the norm, as mine does. Using external compilation of TypeScript within Visual Studio is a little tricky. My own use case is somewhat atypical but perhaps not uncommon."),(0,a.kt)("p",null,"I'm working on a project which has been built using TypeScript since TS 0.9. Not surprisingly, this started off using the default Visual Studio / TypeScript workflow. Active development on the project ceased around 9 months ago. Now it's starting up again. It's a reasonable sized web app and the existing functionality is, in the main, fine. But the users want to add some new screens."),(0,a.kt)("p",null,"Like any developer, I want to build with the latest and greatest. In my case, this means I want to write modular ES6 using TypeScript. With this approach my code can be leaner and I have less script ordering drama in my life. (Yay import statements!) This can be done by bringing together webpack, TypeScript (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},"ts-loader"),") and ",(0,a.kt)("a",{parentName:"p",href:"http://babeljs.io/"},"Babel")," (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/babel/babel-loader"},"babel-loader"),"). There's an example of this approach ",(0,a.kt)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2015/12/es6-typescript-babel-react-flux-karma.html"},"here"),". Given the size of the existing codebase I'd rather leave the legacy TypeScript as is and isolate my new approach to the screens I'm going to build. Obviously I'd like to have a common build process for all the codebase at some point but I've got a deadline to meet and so a half-old / half-new approach is called for (at least for the time being)."),(0,a.kt)("h2",{id:"goodbye-typescript-compilation-in-vs"},"Goodbye TypeScript Compilation in VS"),(0,a.kt)("p",null,"Writing modular ES6 TypeScript which is fully transpiled to old-school JS is ",(0,a.kt)("em",{parentName:"p"},"not possible")," using the Visual Studio tooling at present. For what it's worth I think that SystemJS compilation may make this more possible in the future but I don't really know enough about it to be sure. That's why I'm bringing webpack / Babel into the mix right now. I don't want Visual Studio to do anything for the ES6 code; I don't want it to compile. I want to deactivate my TypeScript compilation for the ES6 code. I can't do this from the ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," so I'm in a bit of a hole. What to do?"),(0,a.kt)("p",null,"Well, as of (I think) TypeScript 1.7 it's possible to deactivate TypeScript compilation in Visual Studio. To ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/issues/2294#issuecomment-129367578"},"quote"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"there is an easier way to disable TypeScriptCompile:"),(0,a.kt)("p",{parentName:"blockquote"},"Just add ",(0,a.kt)("inlineCode",{parentName:"p"},"&lt;TypeScriptCompileBlocked&gt;true&lt;/TypeScriptCompileBlocked&gt;")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},".csproj"),", e.g. in the first ",(0,a.kt)("inlineCode",{parentName:"p"},"&lt;PropertyGroup&gt;"),".")),(0,a.kt)("p",null,"Awesomeness!"),(0,a.kt)("p",null,"But wait, this means that the legacy TypeScript isn't being compiled any longer. Bear in mind, I'm totally happy with the existing / legacy TypeScript compilation. Nooooooooooooooo!!!!!!!!!!!!!!!"),(0,a.kt)("h2",{id:"hello-typescript-compilation-outside-vs"},"Hello TypeScript Compilation outside VS"),(0,a.kt)("p",null,"Have no fear, I gotcha. What we're going to do is ensure that Visual Studio triggers 2 external TypeScript builds as part of its own build process:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The modular ES6 TypeScript (new)"),(0,a.kt)("li",{parentName:"ul"},"The legacy TypeScript (old)")),(0,a.kt)("p",null,"How do we do this? Through the magic of build targets. We need to add this to our ",(0,a.kt)("inlineCode",{parentName:"p"},".csproj"),": (I add it near the end; I'm not sure if location matters though)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<PropertyGroup>\n    <CompileDependsOn>\n      $(CompileDependsOn);\n      WebClientBuild;\n    </CompileDependsOn>\n    <CleanDependsOn>\n      $(CleanDependsOn);\n      WebClientClean\n    </CleanDependsOn>\n    <CopyAllFilesToSingleFolderForPackageDependsOn>\n      CollectGulpOutput;\n      CollectLegacyTypeScriptOutput;\n      $(CopyAllFilesToSingleFolderForPackageDependsOn);\n    </CopyAllFilesToSingleFolderForPackageDependsOn>\n    <CopyAllFilesToSingleFolderForMsdeployDependsOn>\n      CollectGulpOutput;\n      CollectLegacyTypeScriptOutput;\n      $(CopyAllFilesToSingleFolderForPackageDependsOn);\n    </CopyAllFilesToSingleFolderForMsdeployDependsOn>\n  </PropertyGroup>\n  <Target Name="WebClientBuild">\n    <Exec Command="npm install" />\n    <Exec Command="npm run build-legacy-typescript" />\n    <Exec Command="npm run build -- --mode $(ConfigurationName)" />\n  </Target>\n  <Target Name="WebClientClean">\n    <Exec Command="npm run clean" />\n  </Target>\n  <Target Name="CollectGulpOutput">\n    <ItemGroup>\n      <_CustomFiles Include="dist\\**\\*" />\n      <FilesForPackagingFromProject Include="%(_CustomFiles.Identity)">\n        <DestinationRelativePath>dist\\%(RecursiveDir)%(Filename)%(Extension)</DestinationRelativePath>\n      </FilesForPackagingFromProject>\n    </ItemGroup>\n    <Message Text="CollectGulpOutput list: %(_CustomFiles.Identity)" />\n  </Target>\n  <Target Name="CollectLegacyTypeScriptOutput">\n    <ItemGroup>\n      <_CustomFiles Include="Scripts\\**\\*.js" />\n      <FilesForPackagingFromProject Include="%(_CustomFiles.Identity)">\n        <DestinationRelativePath>Scripts\\%(RecursiveDir)%(Filename)%(Extension)</DestinationRelativePath>\n      </FilesForPackagingFromProject>\n    </ItemGroup>\n    <Message Text="CollectLegacyTypeScriptOutput list: %(_CustomFiles.Identity)" />\n  </Target>\n')),(0,a.kt)("p",null,"There's a few things going on here; let's take them one by one."),(0,a.kt)("h2",{id:"the-webclientbuild-target"},"The ",(0,a.kt)("inlineCode",{parentName:"h2"},"WebClientBuild")," Target"),(0,a.kt)("p",null,"This target triggers our external builds. One by one it runs the following commands:"),(0,a.kt)("dl",null,(0,a.kt)("dt",null,(0,a.kt)("code",null,"npm install")),(0,a.kt)("dd",null,"Installs the npm packages."),(0,a.kt)("dt",null,(0,a.kt)("code",null,"npm run build-legacy-typescript")),(0,a.kt)("dd",null,"Runs the ",(0,a.kt)("code",null,'"build-legacy-typescript"'),(0,a.kt)("code",null,"script")," in our ",(0,a.kt)("code",null,"package.json")),(0,a.kt)("dt",null,(0,a.kt)("code",null,"npm run build -- --mode $(ConfigurationName)")),(0,a.kt)("dd",null,"Runs the ",(0,a.kt)("code",null,'"build"'),(0,a.kt)("code",null,"script")," in our ",(0,a.kt)("code",null,"package.json")," and passes through a ",(0,a.kt)("code",null,"mode")," parameter of either ",(0,a.kt)("code",null,'"Debug"')," or ",(0,a.kt)("code",null,'"Release"')," from MSBuild - indicating whether we're creating a debug or a release build.")),(0,a.kt)("p",null,"As you've no doubt gathered, I'm following the convention of using the ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," element of my ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," as repository for the various build tasks I might have for a web project. It looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // ...\n  "scripts": {\n    "test": "karma start --reporters mocha,junit --single-run --browsers PhantomJS",\n    "build-legacy-typescript": "tsc -v&&tsc --project Scripts",\n    "clean": "gulp delete-dist-contents",\n    "watch": "gulp watch",\n    "build": "gulp build"\n  }\n  // ...\n}\n')),(0,a.kt)("p",null,"As you can see, ",(0,a.kt)("inlineCode",{parentName:"p"},'"build-legacy-typescript"')," invokes ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc")," (which is registered as a ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependency"),") to print out the version of the compiler. Then it invokes ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc")," again using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/wiki/Compiler-Options"},(0,a.kt)("inlineCode",{parentName:"a"},"project"))," flag directly on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Scripts")," directory. This is where the legacy TypeScript and its associated ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," resides. Et voil\xe1, the old / existing TypeScript is compiled just as it was previously by VS itself."),(0,a.kt)("p",null,"Next, the ",(0,a.kt)("inlineCode",{parentName:"p"},'"build"')," invokes a ",(0,a.kt)("inlineCode",{parentName:"p"},"gulp")," task called, descriptively, ",(0,a.kt)("inlineCode",{parentName:"p"},'"build"'),". This task caters for our brand new codebase of modular ES6 TypeScript. When run, this task will invoke webpack, copy static files, build less etc. Quick digression: you can see there's a ",(0,a.kt)("inlineCode",{parentName:"p"},'"watch"')," script that does the same thing on a file-watching basis; I use that during development."),(0,a.kt)("h2",{id:"the-webclientclean-target"},"The ",(0,a.kt)("inlineCode",{parentName:"h2"},"WebClientClean")," Target"),(0,a.kt)("p",null,"The task that runs to clean up artefacts created by ",(0,a.kt)("inlineCode",{parentName:"p"},"WebClientBuild"),"."),(0,a.kt)("h2",{id:"the-collectlegacytypescriptoutput-and-collectgulpoutput-targets"},"The ",(0,a.kt)("inlineCode",{parentName:"h2"},"CollectLegacyTypeScriptOutput")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"CollectGulpOutput")," Targets"),(0,a.kt)("p",null,"Since we're compiling our TypeScript outside of VS we need to tell MSBuild / MSDeploy about the externally compiled assets in order that they are included in the publish pipeline. Here I'm standing on the shoulders of ",(0,a.kt)("a",{parentName:"p",href:"http://www.codecadwallader.com/2015/03/15/integrating-gulp-into-your-tfs-builds-and-web-deploy/"},"Steve Cadwallader's excellent post"),". Thanks Steve!"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CollectLegacyTypeScriptOutput")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CollectGulpOutput")," respectively include all the built files contained in the ",(0,a.kt)("inlineCode",{parentName:"p"},'"Scripts"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'"dist"')," folders when a publish takes place. You don't need this for when you're building on your own machine but if you're looking to publish (either from your machine or from TFS) then you will need exactly this. Believe me that last sentence was typed with a memory of ",(0,a.kt)("em",{parentName:"p"},"great")," pain and frustration."),(0,a.kt)("p",null,"So in the end, as far as TypeScript is concerned, I'm using Visual Studio solely as an editor. It's the hooks in the ",(0,a.kt)("inlineCode",{parentName:"p"},".csproj")," that ensure that compilation happens. It seems a little quirky that we still need to have the original TypeScript targets in the ",(0,a.kt)("inlineCode",{parentName:"p"},".csproj")," file as well; but it works. That's all that matters."))}m.isMDXComponent=!0}}]);