"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[78842],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={title:"Azure Easy Auth and Roles with .NET and Microsoft.Identity.Web",authors:"johnnyreilly",tags:["Azure","Easy Auth","Roles","ASP.NET","Microsoft.Identity.Web"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2021/01/17/azure-easy-auth-and-roles-with-net-and-microsoft-identity-web",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-01-17-azure-easy-auth-and-roles-with-net-and-microsoft-identity-web/index.md",source:"@site/blog/2021-01-17-azure-easy-auth-and-roles-with-net-and-microsoft-identity-web/index.md",title:"Azure Easy Auth and Roles with .NET and Microsoft.Identity.Web",description:"I wrote recently about how to get Azure Easy Auth to work with roles. This involved borrowing the approach used by MaximeRouiller.Azure.AppService.EasyAuth.",date:"2021-01-17T00:00:00.000Z",formattedDate:"January 17, 2021",tags:[{label:"Azure",permalink:"/tags/azure"},{label:"Easy Auth",permalink:"/tags/easy-auth"},{label:"Roles",permalink:"/tags/roles"},{label:"ASP.NET",permalink:"/tags/asp-net"},{label:"Microsoft.Identity.Web",permalink:"/tags/microsoft-identity-web"}],readingTime:2.35,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Azure Easy Auth and Roles with .NET and Microsoft.Identity.Web",authors:"johnnyreilly",tags:["Azure","Easy Auth","Roles","ASP.NET","Microsoft.Identity.Web"],hide_table_of_contents:!1},prevItem:{title:"Azure Pipelines Build Info in an ASP.NET React app",permalink:"/2021/01/29/surfacing-azure-pipelines-build-info-in-an-aspnet-react-app"},nextItem:{title:"Azure Easy Auth and Roles with .NET (and .NET Core)",permalink:"/2021/01/14/azure-easy-auth-and-roles-with-dotnet-and-core"}},p={authorsImageUrls:[void 0]},u=[{value:"Getting set up",id:"getting-set-up",level:2},{value:"You gotta <code>roles</code> with it",id:"you-gotta-roles-with-it",level:2},{value:"Claims transformation FTW",id:"claims-transformation-ftw",level:2}],c={toc:u};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"/2021/01/14/azure-easy-auth-and-roles-with-dotnet-and-core"}),"I wrote recently about how to get Azure Easy Auth to work with roles"),". This involved borrowing the approach used by ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/MaximRouiller/MaximeRouiller.Azure.AppService.EasyAuth"}),"MaximeRouiller.Azure.AppService.EasyAuth"),"."),(0,r.kt)("p",null,"As a consequence of writing that post I came to learn that official support for Azure Easy Auth had landed in October 2020 in v1.2 of ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/AzureAD/microsoft-identity-web/wiki/1.2.0#integration-with-azure-app-services-authentication-of-web-apps-running-with-microsoftidentityweb"}),"Microsoft.Identity.Web"),". This was great news; I was delighted."),(0,r.kt)("p",null,"However, it turns out that the same authorization issue that ",(0,r.kt)("inlineCode",{parentName:"p"},"MaximeRouiller.Azure.AppService.EasyAuth")," suffers from, is visited upon ",(0,r.kt)("inlineCode",{parentName:"p"},"Microsoft.Identity.Web")," as well."),(0,r.kt)("h2",a({},{id:"getting-set-up"}),"Getting set up"),(0,r.kt)("p",null,"We're using a .NET 5 project, running in an Azure App Service (Linux). In our ",(0,r.kt)("inlineCode",{parentName:"p"},".csproj")," we have:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-xml"}),'<PackageReference Include="Microsoft.Identity.Web" Version="1.4.1" />\n')),(0,r.kt)("p",null,"In our ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," we're using:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cs"}),"public void ConfigureServices(IServiceCollection services) {\n    //...\n    services.AddMicrosoftIdentityWebAppAuthentication(Configuration);\n    //...\n}\n\npublic void Configure(IApplicationBuilder app, IWebHostEnvironment env) {\n    //...\n    app.UseAuthentication();\n    app.UseAuthorization();\n    //...\n}\n")),(0,r.kt)("h2",a({},{id:"you-gotta-roles-with-it"}),"You gotta ",(0,r.kt)("inlineCode",{parentName:"h2"},"roles")," with it"),(0,r.kt)("p",null,"Whilst the authentication works, authorization does not. So whilst my app knows who I am - the authorization is not working with relation to ",(0,r.kt)("strong",{parentName:"p"},"roles"),"."),(0,r.kt)("p",null,"When directly using ",(0,r.kt)("inlineCode",{parentName:"p"},"Microsoft.Identity.Web")," when running locally, we see these claims:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-json"}),'[\n  // ...\n  {\n    "type": "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",\n    "value": "Administrator"\n  },\n  {\n    "type": "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",\n    "value": "Reader"\n  }\n  // ...\n]\n')),(0,r.kt)("p",null,"However, we get different behaviour with EasyAuth; it provides roles related claims with a ",(0,r.kt)("strong",{parentName:"p"},"different type"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-json"}),'[\n  // ...\n  {\n    "type": "roles",\n    "value": "Administrator"\n  },\n  {\n    "type": "roles",\n    "value": "Reader"\n  }\n  // ...\n]\n')),(0,r.kt)("p",null,"This means that roles related authorization ",(0,r.kt)("em",{parentName:"p"},"does not work")," with Easy Auth:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cs"}),'[Authorize(Roles = "Reader")]\n[HttpGet("api/reader")]\npublic string GetWithReader() =>\n    "this is a secure endpoint that users with the Reader role can access";\n')),(0,r.kt)("p",null,"This is because .NET is looking for claims with a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," of ",(0,r.kt)("inlineCode",{parentName:"p"},'"http://schemas.microsoft.com/ws/2008/06/identity/claims/role"')," and not finding them with Easy Auth."),(0,r.kt)("h2",a({},{id:"claims-transformation-ftw"}),"Claims transformation FTW"),(0,r.kt)("p",null,"There is a way to work around this issue .NET using ",(0,r.kt)("inlineCode",{parentName:"p"},"IClaimsTransformation"),". This is a poorly documented feature, but fortunately ",(0,r.kt)("a",a({parentName:"p"},{href:"https://gunnarpeipman.com/aspnet-core-adding-claims-to-existing-identity/"}),"Gunnar Peipman's blog does a grand job of explaining it"),"."),(0,r.kt)("p",null,"Inside our ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," I've registered a claims transformer:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cs"}),"services.AddScoped<IClaimsTransformation, AddRolesClaimsTransformation>();\n")),(0,r.kt)("p",null,"And that claims transformer looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cs"}),'public class AddRolesClaimsTransformation : IClaimsTransformation {\n    private readonly ILogger<AddRolesClaimsTransformation> _logger;\n\n    public AddRolesClaimsTransformation(ILogger<AddRolesClaimsTransformation> logger) {\n        _logger = logger;\n    }\n\n    public Task<ClaimsPrincipal> TransformAsync(ClaimsPrincipal principal) {\n        var mappedRolesClaims = principal.Claims\n            .Where(claim => claim.Type == "roles")\n            .Select(claim => new Claim(ClaimTypes.Role, claim.Value))\n            .ToList();\n\n        // Clone current identity\n        var clone = principal.Clone();\n\n        if (clone.Identity is not ClaimsIdentity newIdentity) return Task.FromResult(principal);\n\n        // Add role claims to cloned identity\n        foreach (var mappedRoleClaim in mappedRolesClaims)\n            newIdentity.AddClaim(mappedRoleClaim);\n\n        if (mappedRolesClaims.Count > 0)\n            _logger.LogInformation("Added roles claims {mappedRolesClaims}", mappedRolesClaims);\n        else\n            _logger.LogInformation("No roles claims added");\n\n        return Task.FromResult(clone);\n    }\n}\n')),(0,r.kt)("p",null,"The class above creates a new principal with ",(0,r.kt)("inlineCode",{parentName:"p"},'"roles"')," claims mapped across to ",(0,r.kt)("inlineCode",{parentName:"p"},'"http://schemas.microsoft.com/ws/2008/06/identity/claims/role"'),". This is enough to get .NET treating roles the way you'd hope."),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/AzureAD/microsoft-identity-web/issues/881"}),"I've raised an issue against the ",(0,r.kt)("inlineCode",{parentName:"a"},"Microsoft.Identity.Web")," repo")," about this. Perhaps one day this workaround will no longer be necessary."))}m.isMDXComponent=!0}}]);