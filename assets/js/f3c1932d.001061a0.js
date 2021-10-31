"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[17572],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22407:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Autofac 6, integration tests and .NET generic hosting",authors:"johnnyreilly",tags:["autofac","asp.net","ConfigureTestContainer","Integration Testing"],image:"blog/2020-10-02-autofac-6-integration-tests-and-generic-hosting/autofac-integration-tests.png",hide_table_of_contents:!1},c=void 0,u={permalink:"/2020/10/02/autofac-6-integration-tests-and-generic-hosting",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-10-02-autofac-6-integration-tests-and-generic-hosting.md",source:"@site/blog/2020-10-02-autofac-6-integration-tests-and-generic-hosting.md",title:"Autofac 6, integration tests and .NET generic hosting",description:"I blogged a little while ago around to support integration tests using Autofac. This was specific to Autofac but documented a workaround for a long standing issue with ConfigureTestContainer that was introduced into .NET core 3.0 which affects all third-party containers that use ConfigureTestContainer in their tests.",date:"2020-10-02T00:00:00.000Z",formattedDate:"October 2, 2020",tags:[{label:"autofac",permalink:"/tags/autofac"},{label:"asp.net",permalink:"/tags/asp-net"},{label:"ConfigureTestContainer",permalink:"/tags/configure-test-container"},{label:"Integration Testing",permalink:"/tags/integration-testing"}],readingTime:2.23,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Safari: The Mysterious Case of the Empty Download",permalink:"/2020/10/19/safari-empty-download-content-type"},nextItem:{title:"Why your team needs a newsfeed",permalink:"/2020/09/04/why-your-team-needs-newsfeed"}},l={authorsImageUrls:[void 0]},p=[{value:"Concern for third-party containers",id:"concern-for-third-party-containers",children:[],level:2}],d={toc:p};function f(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I ",(0,o.kt)("a",{parentName:"p",href:"/2020/05/21/autofac-webapplicationfactory-integration-tests"},"blogged a little while ago around to support integration tests using Autofac"),". This was specific to Autofac but documented a workaround for a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dotnet/aspnetcore/issues/14907"},"long standing issue with ",(0,o.kt)("inlineCode",{parentName:"a"},"ConfigureTestContainer")," that was introduced into .NET core 3.0")," which affects ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-3.1#default-service-container-replacement"},"all third-party containers")," that use ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigureTestContainer")," in their tests."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A title image for the blog featuring the Autofac logo",src:n(82580).Z})),(0,o.kt)("p",null,"I'll not repeat the contents of the previous post - it all still stands. However, with Autofac 6 the approach documented there will cease to work. This is because the previous approach relied upon ",(0,o.kt)("inlineCode",{parentName:"p"},"ContainerBuilder")," not being sealed. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/autofac/Autofac/issues/1120"},"As of Autofac 6 it is.")),(0,o.kt)("p",null,"Happily the tremendous ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/evocationist"},"Alistair Evans")," came up with an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/autofac/Autofac/issues/1207#issuecomment-701961371"},"alternative approach")," which is listed below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'/// <summary>\n/// Based upon https://github.com/dotnet/AspNetCore.Docs/tree/master/aspnetcore/test/integration-tests/samples/3.x/IntegrationTestsSample\n/// </summary>\n/// <typeparam name="TStartup"></typeparam>\npublic class AutofacWebApplicationFactory<TStartup> : WebApplicationFactory<TStartup> where TStartup : class\n{\n    protected override IHost CreateHost(IHostBuilder builder)\n    {\n        builder.UseServiceProviderFactory<ContainerBuilder>(new CustomServiceProviderFactory());\n        return base.CreateHost(builder);\n    }\n}\n\n/// <summary>\n/// Based upon https://github.com/dotnet/aspnetcore/issues/14907#issuecomment-620750841 - only necessary because of an issue in ASP.NET Core\n/// </summary>\npublic class CustomServiceProviderFactory : IServiceProviderFactory<ContainerBuilder>\n{\n    private AutofacServiceProviderFactory _wrapped;\n    private IServiceCollection _services;\n\n    public CustomServiceProviderFactory()\n    {\n        _wrapped = new AutofacServiceProviderFactory();\n    }\n\n    public ContainerBuilder CreateBuilder(IServiceCollection services)\n    {\n        // Store the services for later.\n        _services = services;\n\n        return _wrapped.CreateBuilder(services);\n    }\n\n    public IServiceProvider CreateServiceProvider(ContainerBuilder containerBuilder)\n    {\n        var sp = _services.BuildServiceProvider();\n#pragma warning disable CS0612 // Type or member is obsolete\n        var filters = sp.GetRequiredService<IEnumerable<IStartupConfigureContainerFilter<ContainerBuilder>>>();\n#pragma warning restore CS0612 // Type or member is obsolete\n\n        foreach (var filter in filters)\n        {\n            filter.ConfigureContainer(b => { })(containerBuilder);\n        }\n\n        return _wrapped.CreateServiceProvider(containerBuilder);\n    }\n}\n')),(0,o.kt)("p",null,"Using this in place of the previous approach should allow you continue running your integration tests with Autofac 6. Thanks Alistair!"),(0,o.kt)("h2",{id:"concern-for-third-party-containers"},"Concern for third-party containers"),(0,o.kt)("p",null,"Whilst this gets us back up and running, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/autofac/Autofac/issues/1207#issuecomment-702250044"},"Alistair pointed out that this approach depends upon a deprecated interface"),". This is the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.hosting.istartupconfigurecontainerfilter-1.configurecontainer?view=aspnetcore-3.1"},(0,o.kt)("inlineCode",{parentName:"a"},"IStartupConfigureContainerFilter"))," which ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dotnet/aspnetcore/pull/11505"},"has been marked as ",(0,o.kt)("inlineCode",{parentName:"a"},"Obsolete")," since mid 2019"),". What this means is, at some point, this approach will stop working."),(0,o.kt)("p",null,"The marvellous David Fowler has said that ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/autofac/Autofac/issues/1207#issuecomment-702361608"},(0,o.kt)("inlineCode",{parentName:"a"},"ConfigureTestContainer")," issue should be resolved in .NET"),". However it's worth noting that this has been an issue since .NET Core 3 shipped and unfortunately the wonderful ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dotnet/aspnetcore/issues/14907#issuecomment-702287717"},"Chris Ross has advised that it's not likely to be fixed for .NET 5"),"."),(0,o.kt)("p",null,"I'm very keen this does get resolved in .NET. Building tests upon an ",(0,o.kt)("inlineCode",{parentName:"p"},"Obsolete")," attribute doesn't fill me with confidence. I'm a long time user of Autofac and I'd like to continue to be. Here's hoping that's made possible by a fix landing in .NET. If this is something you care about, it may be worth upvoting / commenting on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dotnet/aspnetcore/issues/14907"},"the issue in GitHub")," so the team are aware of desire around this being resolved."))}f.isMDXComponent=!0},82580:function(e,t,n){t.Z=n.p+"assets/images/autofac-integration-tests-7950d2a75e653006ab8defd2c2f26740.png"}}]);