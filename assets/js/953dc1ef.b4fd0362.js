"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[48560],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(n),h=r,d=g["".concat(p,".").concat(h)]||g[h]||u[h]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[g]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},27106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"NSwag: TypeScript and CSharp client generation based on an API",authors:"johnnyreilly",tags:["NSwag","TypeScript","CSharp","API"],image:"./use-generated-client.gif",hide_table_of_contents:!1},l=void 0,p={permalink:"/2021/03/06/generate-typescript-and-csharp-clients-with-nswag",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-03-06-generate-typescript-and-csharp-clients-with-nswag/index.md",source:"@site/blog/2021-03-06-generate-typescript-and-csharp-clients-with-nswag/index.md",title:"NSwag: TypeScript and CSharp client generation based on an API",description:"Generating clients for APIs is a tremendous way to reduce the amount of work you have to do when you're building a project. Why handwrite that code when it can be auto-generated for you quickly and accurately by a tool like NSwag? To quote the docs:",date:"2021-03-06T00:00:00.000Z",formattedDate:"March 6, 2021",tags:[{label:"NSwag",permalink:"/tags/n-swag"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"CSharp",permalink:"/tags/c-sharp"},{label:"API",permalink:"/tags/api"}],readingTime:8.535,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"NSwag: TypeScript and CSharp client generation based on an API",authors:"johnnyreilly",tags:["NSwag","TypeScript","CSharp","API"],image:"./use-generated-client.gif",hide_table_of_contents:!1},prevItem:{title:"Managed Identity, Azure SQL and Entity Framework",permalink:"/2021/03/10/managed-identity-azure-sql-entity-framework"},nextItem:{title:"Goodbye Client Affinity, Hello Data Protection with Azure",permalink:"/2021/02/27/goodbye-client-affinity-hello-data-protection-with-azure"}},s={image:n(81642).Z,authorsImageUrls:[void 0]},c=[{value:"Create an API",id:"create-an-api",level:2},{value:"The client generator project",id:"the-client-generator-project",level:2},{value:"Building a &quot;make a client&quot; script",id:"building-a-make-a-client-script",level:2},{value:"Consume our generated API client",id:"consume-our-generated-api-client",level:2}],g={toc:c};function u(e){var{components:t}=e,o=i(e,["components"]);return(0,a.kt)("wrapper",r({},g,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Generating clients for APIs is a tremendous way to reduce the amount of work you have to do when you're building a project. Why handwrite that code when it can be auto-generated for you quickly and accurately by a tool like ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/RicoSuter/NSwag"}),"NSwag"),"? To quote the docs:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The NSwag project provides tools to generate OpenAPI specifications from existing ASP.NET Web API controllers and client code from these OpenAPI specifications. The project combines the functionality of Swashbuckle (OpenAPI/Swagger generation) and AutoRest (client generation) in one toolchain.")),(0,a.kt)("p",null,"There's some great posts out there that show you how to generate the clients with NSwag using an ",(0,a.kt)("inlineCode",{parentName:"p"},"nswag.json")," file directly from a .NET project."),(0,a.kt)("p",null,"However, what if you want to use NSwag purely for its client generation capabilities? You may have an API written with another language / platform that exposes a Swagger endpoint, that you simply wish to create a client for. How do you do that? Also, if you want to do some special customisation of the clients you're generating, you may find yourself struggling to configure that in ",(0,a.kt)("inlineCode",{parentName:"p"},"nswag.json"),". In that case, it's possible to hook into NSwag directly to do this with a simple .NET console app."),(0,a.kt)("p",null,"This post will:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a .NET API which exposes a Swagger endpoint. (Alternatively, you could use any other Swagger endpoint; ",(0,a.kt)("a",r({parentName:"li"},{href:"https://blog.logrocket.com/documenting-your-express-api-with-swagger/"}),"for example an Express API"),".)"),(0,a.kt)("li",{parentName:"ul"},"Create a .NET console app which can create both TypeScript and CSharp clients from a Swagger endpoint."),(0,a.kt)("li",{parentName:"ul"},"Create a script which, when run, creates a TypeScript client."),(0,a.kt)("li",{parentName:"ul"},"Consume the API using the generated client in a simple TypeScript application.")),(0,a.kt)("p",null,"You will need both ",(0,a.kt)("a",r({parentName:"p"},{href:"https://nodejs.org/en/"}),"Node.js")," and the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://dotnet.microsoft.com/download"}),".NET SDK")," installed."),(0,a.kt)("h2",r({},{id:"create-an-api"}),"Create an API"),(0,a.kt)("p",null,"We'll now create an API which exposes a ",(0,a.kt)("a",r({parentName:"p"},{href:"https://swagger.io/resources/open-api/"}),"Swagger / Open API")," endpoint. Whilst we're doing that we'll create a TypeScript React app which we'll use later on. We'll drop to the command line and enter the following commands which use the .NET SDK, node and the ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," package:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-shell"}),"mkdir src\ncd src\nnpx create-react-app client-app --template typescript\nmkdir server-app\ncd server-app\ndotnet new api -o API\ncd API\ndotnet add package NSwag.AspNetCore\n")),(0,a.kt)("p",null,"We now have a .NET API with a dependency on NSwag. We'll start to use it by replacing the ",(0,a.kt)("inlineCode",{parentName:"p"},"Startup.cs")," that's been generated with the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cs"}),'using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace API\n{\n    public class Startup\n    {\n        const string ALLOW_DEVELOPMENT_CORS_ORIGINS_POLICY = "AllowDevelopmentSpecificOrigins";\n        const string LOCAL_DEVELOPMENT_URL = "http://localhost:3000";\n\n        public Startup(IConfiguration configuration)\n        {\n            Configuration = configuration;\n        }\n\n        public IConfiguration Configuration { get; }\n\n        // This method gets called by the runtime. Use this method to add services to the container.\n        public void ConfigureServices(IServiceCollection services)\n        {\n\n            services.AddControllers();\n\n            services.AddCors(options => {\n                options.AddPolicy(name: ALLOW_DEVELOPMENT_CORS_ORIGINS_POLICY,\n                    builder => {\n                        builder.WithOrigins(LOCAL_DEVELOPMENT_URL)\n                            .AllowAnyMethod()\n                            .AllowAnyHeader()\n                            .AllowCredentials();\n                    });\n            });\n\n            // Register the Swagger services\n            services.AddSwaggerDocument();\n        }\n\n        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.\n        public void Configure (IApplicationBuilder app, IWebHostEnvironment env)\n        {\n            if (env.IsDevelopment())\n            {\n                app.UseDeveloperExceptionPage();\n            }\n            else\n            {\n                app.UseExceptionHandler("/Error");\n                app.UseHsts ();\n                app.UseHttpsRedirection();\n            }\n\n            app.UseDefaultFiles();\n            app.UseStaticFiles();\n\n            app.UseRouting();\n\n            app.UseAuthorization();\n\n            // Register the Swagger generator and the Swagger UI middlewares\n            app.UseOpenApi();\n            app.UseSwaggerUi3();\n\n            if (env.IsDevelopment())\n                app.UseCors(ALLOW_DEVELOPMENT_CORS_ORIGINS_POLICY);\n\n            app.UseEndpoints(endpoints =>\n            {\n                endpoints.MapControllers();\n            });\n        }\n    }\n}\n')),(0,a.kt)("p",null,"The significant changes in the above ",(0,a.kt)("inlineCode",{parentName:"p"},"Startup.cs")," are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Exposing a Swagger endpoint with ",(0,a.kt)("inlineCode",{parentName:"li"},"UseOpenApi")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"UseSwaggerUi3"),". NSwag will automagically create Swagger endpoints in your application for all your controllers. The .NET template ships with a ",(0,a.kt)("inlineCode",{parentName:"li"},"WeatherForecastController"),"."),(0,a.kt)("li",{parentName:"ol"},"Allowing ",(0,a.kt)("a",r({parentName:"li"},{href:"https://docs.microsoft.com/en-us/aspnet/core/security/cors"}),"Cross-Origin Requests (CORS)")," which is useful during development (and will facilitate a demo later).")),(0,a.kt)("p",null,"Back in the root of our project we're going to initialise an npm project. We're going to use this to put in place a number of handy ",(0,a.kt)("a",r({parentName:"p"},{href:"https://docs.npmjs.com/cli/v6/using-npm/scripts"}),(0,a.kt)("inlineCode",{parentName:"a"},"npm scripts"))," that will make our project easier to work with. So we'll ",(0,a.kt)("inlineCode",{parentName:"p"},"npm init")," and accept all the defaults."),(0,a.kt)("p",null,"Now we're going add some dependencies which our scripts will use: ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install cpx cross-env npm-run-all start-server-and-test")),(0,a.kt)("p",null,"We'll also add ourselves some ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," to our ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-json"}),'"scripts": {\n    "postinstall": "npm run install:client-app && npm run install:server-app",\n    "install:client-app": "cd src/client-app && npm install",\n    "install:server-app": "cd src/server-app/API && dotnet restore",\n    "build": "npm run build:client-app && npm run build:server-app",\n    "build:client-app": "cd src/client-app && npm run build",\n    "postbuild:client-app": "cpx \\"src/client-app/build/**/*.*\\" \\"src/server-app/API/wwwroot/\\"",\n    "build:server-app": "cd src/server-app/API && dotnet build --configuration release",\n    "start": "run-p start:client-app start:server-app",\n    "start:client-app": "cd src/client-app && npm start",\n    "start:server-app": "cross-env ASPNETCORE_URLS=http://*:5000 ASPNETCORE_ENVIRONMENT=Development dotnet watch --project src/server-app/API run --no-launch-profile"\n  }\n')),(0,a.kt)("p",null,"Let's walk through what the above scripts provide us with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Running ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install")," in the root of our project will not only install dependencies for our root ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json"),", thanks to our ",(0,a.kt)("inlineCode",{parentName:"li"},"postinstall"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"install:client-app")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"install:server-app")," scripts it will install the React app and .NET app dependencies as well."),(0,a.kt)("li",{parentName:"ul"},"Running ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run build")," will build our client and server apps."),(0,a.kt)("li",{parentName:"ul"},"Running ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run start")," will start both our React app and our .NET app. Our React app will be started at ",(0,a.kt)("a",r({parentName:"li"},{href:"http://localhost:3000"}),"http://localhost:3000"),". Our .NET app will be started at ",(0,a.kt)("a",r({parentName:"li"},{href:"http://localhost:5000"}),"http://localhost:5000")," (some environment variables are passed to it with ",(0,a.kt)("a",r({parentName:"li"},{href:"https://github.com/kentcdodds/cross-env"}),(0,a.kt)("inlineCode",{parentName:"a"},"cross-env"))," ).")),(0,a.kt)("p",null,"Once ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run start")," has been run, you will find a Swagger endpoint at ",(0,a.kt)("a",r({parentName:"p"},{href:"http://localhost:5000/swagger"}),"http://localhost:5000/swagger"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"swagger screenshot",src:n(69506).Z,width:"600",height:"362"})),(0,a.kt)("h2",r({},{id:"the-client-generator-project"}),"The client generator project"),(0,a.kt)("p",null,"Now we've scaffolded our Swagger-ed API, we want to put together the console app that will generate our typed clients."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-shell"}),"cd src/server-app\ndotnet new console -o APIClientGenerator\ncd APIClientGenerator\ndotnet add package NSwag.CodeGeneration.CSharp\ndotnet add package NSwag.CodeGeneration.TypeScript\ndotnet add package NSwag.Core\n")),(0,a.kt)("p",null,"We now have a console app with dependencies on the code generation portions of NSwag. Now let's change up ",(0,a.kt)("inlineCode",{parentName:"p"},"Program.cs")," to make use of this:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cs"}),'using System;\nusing System.IO;\nusing System.Threading.Tasks;\nusing NJsonSchema;\nusing NJsonSchema.CodeGeneration.TypeScript;\nusing NJsonSchema.Visitors;\nusing NSwag;\nusing NSwag.CodeGeneration.CSharp;\nusing NSwag.CodeGeneration.TypeScript;\n\nnamespace APIClientGenerator\n{\n    class Program\n    {\n        static async Task Main(string[] args)\n        {\n            if (args.Length != 3)\n                throw new ArgumentException("Expecting 3 arguments: URL, generatePath, language");\n\n            var url = args[0];\n            var generatePath = Path.Combine(Directory.GetCurrentDirectory(), args[1]);\n            var language = args[2];\n\n            if (language != "TypeScript" && language != "CSharp")\n                throw new ArgumentException("Invalid language parameter; valid values are TypeScript and CSharp");\n\n            if (language == "TypeScript")\n                await GenerateTypeScriptClient(url, generatePath);\n            else\n                await GenerateCSharpClient(url, generatePath);\n        }\n\n        async static Task GenerateTypeScriptClient(string url, string generatePath) =>\n            await GenerateClient(\n                document: await OpenApiDocument.FromUrlAsync(url),\n                generatePath: generatePath,\n                generateCode: (OpenApiDocument document) =>\n                {\n                    var settings = new TypeScriptClientGeneratorSettings();\n\n                    settings.TypeScriptGeneratorSettings.TypeStyle = TypeScriptTypeStyle.Interface;\n                    settings.TypeScriptGeneratorSettings.TypeScriptVersion = 3.5M;\n                    settings.TypeScriptGeneratorSettings.DateTimeType = TypeScriptDateTimeType.String;\n\n                    var generator = new TypeScriptClientGenerator(document, settings);\n                    var code = generator.GenerateFile();\n\n                    return code;\n                }\n            );\n\n        async static Task GenerateCSharpClient(string url, string generatePath) =>\n            await GenerateClient(\n                document: await OpenApiDocument.FromUrlAsync(url),\n                generatePath: generatePath,\n                generateCode: (OpenApiDocument document) =>\n                {\n                    var settings = new CSharpClientGeneratorSettings\n                    {\n                        UseBaseUrl = false\n                    };\n\n                    var generator = new CSharpClientGenerator(document, settings);\n                    var code = generator.GenerateFile();\n                    return code;\n                }\n            );\n\n        private async static Task GenerateClient(OpenApiDocument document, string generatePath, Func<OpenApiDocument, string> generateCode)\n        {\n            Console.WriteLine($"Generating {generatePath}...");\n\n            var code = generateCode(document);\n\n            await System.IO.File.WriteAllTextAsync(generatePath, code);\n        }\n    }\n}\n')),(0,a.kt)("p",null,"We've created ourselves a simple .NET console application that creates TypeScript and CSharp clients for a given Swagger URL. It expects three arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"url")," ","-"," the url of the ",(0,a.kt)("inlineCode",{parentName:"li"},"swagger.json")," file to generate a client for."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"generatePath")," ","-"," the path where the generated client file should be placed, relative to this project."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"language")," ","-",' the language of the client to generate; valid values are "TypeScript" and "CSharp".')),(0,a.kt)("p",null,"To create a TypeScript client with it then we'd use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-shell"}),"dotnet run --project src/server-app/APIClientGenerator http://localhost:5000/swagger/v1/swagger.json src/client-app/src/clients.ts TypeScript\n")),(0,a.kt)("p",null,"However, for this to run successfully, we'll first have to ensure the API is running. It would be great if we had a single command we could run that would:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"bring up the API"),(0,a.kt)("li",{parentName:"ul"},"generate a client"),(0,a.kt)("li",{parentName:"ul"},"bring down the API")),(0,a.kt)("p",null,"Let's make that."),(0,a.kt)("h2",r({},{id:"building-a-make-a-client-script"}),'Building a "make a client" script'),(0,a.kt)("p",null,"In the root of the project we're going to add the following ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-json"}),'"generate-client:server-app": "start-server-and-test generate-client:server-app:serve http-get://localhost:5000/swagger/v1/swagger.json generate-client:server-app:generate",\n    "generate-client:server-app:serve": "cross-env ASPNETCORE_URLS=http://*:5000 ASPNETCORE_ENVIRONMENT=Development dotnet run --project src/server-app/API --no-launch-profile",\n    "generate-client:server-app:generate": "dotnet run --project src/server-app/APIClientGenerator http://localhost:5000/swagger/v1/swagger.json src/client-app/src/clients.ts TypeScript",\n')),(0,a.kt)("p",null,"Let's walk through what's happening here. Running ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run generate-client:server-app")," will:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use the ",(0,a.kt)("a",r({parentName:"li"},{href:"https://github.com/bahmutov/start-server-and-test"}),(0,a.kt)("inlineCode",{parentName:"a"},"start-server-and-test"))," package to spin up our server-app by running the ",(0,a.kt)("inlineCode",{parentName:"li"},"generate-client:server-app:serve")," script."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"start-server-and-test")," waits for the Swagger endpoint to start responding to requests. When it does start responding, ",(0,a.kt)("inlineCode",{parentName:"li"},"start-server-and-test")," runs the ",(0,a.kt)("inlineCode",{parentName:"li"},"generate-client:server-app:generate"),' script which runs our APIClientGenerator console app and provides it with the URL where our swagger can be found, the path of the file to generate and the language of "TypeScript"')),(0,a.kt)("p",null,"If you were wanting to generate a C# client (say if you were writing a ",(0,a.kt)("a",r({parentName:"p"},{href:"https://blog.logrocket.com/js-free-frontends-blazor/"}),"Blazor")," app) then you could change the ",(0,a.kt)("inlineCode",{parentName:"p"},"generate-client:server-app:generate")," script as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-json"}),'"generate-client:server-app:generate": "dotnet run --project src/server-app/ApiClientGenerator http://localhost:5000/swagger/v1/swagger.json clients.cs CSharp",\n')),(0,a.kt)("h2",r({},{id:"consume-our-generated-api-client"}),"Consume our generated API client"),(0,a.kt)("p",null,"Let's run the ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run generate-client:server-app")," command. It creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"clients.ts")," file which nestles nicely inside our ",(0,a.kt)("inlineCode",{parentName:"p"},"client-app"),". We're going to exercise that in a moment. First of all, let's enable proxying from our ",(0,a.kt)("inlineCode",{parentName:"p"},"client-app")," to our ",(0,a.kt)("inlineCode",{parentName:"p"},"server-app")," following the instructions in the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://create-react-app.dev/docs/proxying-api-requests-in-development/"}),"Create React App docs")," and adding the following to our ",(0,a.kt)("inlineCode",{parentName:"p"},"client-app/package.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-json"}),'"proxy": "http://localhost:5000"\n')),(0,a.kt)("p",null,"Now let's start our apps with ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run start"),". We'll then replace the contents of ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," with:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-jsx"}),'import React from "react";\nimport "./App.css";\nimport { WeatherForecast, WeatherForecastClient } from "./clients";\n\nfunction App() {\n  const [weather, setWeather] = React.useState<WeatherForecast[] | null>();\n  React.useEffect(() => {\n    async function loadWeather() {\n      const weatherClient = new WeatherForecastClient(/* baseUrl */ "");\n      const forecast = await weatherClient.get();\n      setWeather(forecast);\n    }\n    loadWeather();\n  }, [setWeather]);\n\n  return (\n    <div className="App">\n      <header className="App-header">\n        {weather ? (\n          <table>\n            <thead>\n              <tr>\n                <th>Date</th>\n                <th>Summary</th>\n                <th>Centigrade</th>\n                <th>Fahrenheit</th>\n              </tr>\n            </thead>\n            <tbody>\n              {weather.map(({ date, summary, temperatureC, temperatureF }) => (\n                <tr key={date}>\n                  <td>{new Date(date).toLocaleDateString()}</td>\n                  <td>{summary}</td>\n                  <td>{temperatureC}</td>\n                  <td>{temperatureF}</td>\n                </tr>\n              ))}\n            </tbody>\n          </table>\n        ) : (\n          <p>Loading weather...</p>\n        )}\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("p",null,"Inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"React.useEffect")," above you can see we create a new instance of the auto-generated ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherForecastClient"),". We then call ",(0,a.kt)("inlineCode",{parentName:"p"},"weatherClient.get()")," which sends the ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," request to the server to acquire the data and provides it in a strongly typed fashion (",(0,a.kt)("inlineCode",{parentName:"p"},"get()")," returns an array of ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherForecast"),"). This is then displayed on the page like so:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"load data from server",src:n(81642).Z,width:"600",height:"354"})),(0,a.kt)("p",null,"As you an see we're loading data from the server using our auto-generated client. We're reducing the amount of code we have to write ",(0,a.kt)("em",{parentName:"p"},"and")," we're reducing the likelihood of errors."),(0,a.kt)("p",null,"This post was originally posted on ",(0,a.kt)("a",r({parentName:"p"},{href:"https://blog.logrocket.com/generate-typescript-csharp-clients-nswag-api/"}),"LogRocket"),"."),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://blog.logrocket.com/generate-typescript-csharp-clients-nswag-api/"})))}u.isMDXComponent=!0},69506:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/webp;base64,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"},81642:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/use-generated-client-68121118d8862aee3faf83860aeb6de9.gif"}}]);