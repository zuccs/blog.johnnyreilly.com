"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[19828],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(n),d=r,h=g["".concat(p,".").concat(d)]||g[d]||u[d]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},50025:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"NSwag: TypeScript and CSharp client generation based on an API",authors:"johnnyreilly",tags:["NSwag","TypeScript","CSharp","API"],image:"./use-generated-client.gif",hide_table_of_contents:!1},p=void 0,s={permalink:"/2021/03/06/generate-typescript-and-csharp-clients-with-nswag",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-03-06-generate-typescript-and-csharp-clients-with-nswag/index.md",source:"@site/blog/2021-03-06-generate-typescript-and-csharp-clients-with-nswag/index.md",title:"NSwag: TypeScript and CSharp client generation based on an API",description:"Generating clients for APIs is a tremendous way to reduce the amount of work you have to do when you're building a project. Why handwrite that code when it can be auto-generated for you quickly and accurately by a tool like NSwag? To quote the docs:",date:"2021-03-06T00:00:00.000Z",formattedDate:"March 6, 2021",tags:[{label:"NSwag",permalink:"/tags/n-swag"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"CSharp",permalink:"/tags/c-sharp"},{label:"API",permalink:"/tags/api"}],readingTime:8.505,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"NSwag: TypeScript and CSharp client generation based on an API",authors:"johnnyreilly",tags:["NSwag","TypeScript","CSharp","API"],image:"./use-generated-client.gif",hide_table_of_contents:!1},prevItem:{title:"Managed Identity, Azure SQL and Entity Framework",permalink:"/2021/03/10/managed-identity-azure-sql-entity-framework"},nextItem:{title:"Goodbye Client Affinity, Hello Data Protection with Azure",permalink:"/2021/02/27/goodbye-client-affinity-hello-data-protection-with-azure"}},c={image:n(81642).Z,authorsImageUrls:[void 0]},u=[{value:"Create an API",id:"create-an-api",level:2},{value:"The client generator project",id:"the-client-generator-project",level:2},{value:"Building a &quot;make a client&quot; script",id:"building-a-make-a-client-script",level:2},{value:"Consume our generated API client",id:"consume-our-generated-api-client",level:2}],g={toc:u};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Generating clients for APIs is a tremendous way to reduce the amount of work you have to do when you're building a project. Why handwrite that code when it can be auto-generated for you quickly and accurately by a tool like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/RicoSuter/NSwag"},"NSwag"),"? To quote the docs:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The NSwag project provides tools to generate OpenAPI specifications from existing ASP.NET Web API controllers and client code from these OpenAPI specifications. The project combines the functionality of Swashbuckle (OpenAPI/Swagger generation) and AutoRest (client generation) in one toolchain.")),(0,i.kt)("p",null,"There's some great posts out there that show you how to generate the clients with NSwag using an ",(0,i.kt)("inlineCode",{parentName:"p"},"nswag.json")," file directly from a .NET project."),(0,i.kt)("p",null,"However, what if you want to use NSwag purely for its client generation capabilities? You may have an API written with another language / platform that exposes a Swagger endpoint, that you simply wish to create a client for. How do you do that? Also, if you want to do some special customisation of the clients you're generating, you may find yourself struggling to configure that in ",(0,i.kt)("inlineCode",{parentName:"p"},"nswag.json"),". In that case, it's possible to hook into NSwag directly to do this with a simple .NET console app."),(0,i.kt)("p",null,"This post will:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a .NET API which exposes a Swagger endpoint. (Alternatively, you could use any other Swagger endpoint; ",(0,i.kt)("a",{parentName:"li",href:"https://blog.logrocket.com/documenting-your-express-api-with-swagger/"},"for example an Express API"),".)"),(0,i.kt)("li",{parentName:"ul"},"Create a .NET console app which can create both TypeScript and CSharp clients from a Swagger endpoint."),(0,i.kt)("li",{parentName:"ul"},"Create a script which, when run, creates a TypeScript client."),(0,i.kt)("li",{parentName:"ul"},"Consume the API using the generated client in a simple TypeScript application.")),(0,i.kt)("p",null,"You will need both ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/download"},".NET SDK")," installed."),(0,i.kt)("h2",{id:"create-an-api"},"Create an API"),(0,i.kt)("p",null,"We'll now create an API which exposes a ",(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/resources/open-api/"},"Swagger / Open API")," endpoint. Whilst we're doing that we'll create a TypeScript React app which we'll use later on. We'll drop to the command line and enter the following commands which use the .NET SDK, node and the ",(0,i.kt)("inlineCode",{parentName:"p"},"create-react-app")," package:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir src\ncd src\nnpx create-react-app client-app --template typescript\nmkdir server-app\ncd server-app\ndotnet new api -o API\ncd API\ndotnet add package NSwag.AspNetCore\n")),(0,i.kt)("p",null,"We now have a .NET API with a dependency on NSwag. We'll start to use it by replacing the ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup.cs")," that's been generated with the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace API\n{\n    public class Startup\n    {\n        const string ALLOW_DEVELOPMENT_CORS_ORIGINS_POLICY = "AllowDevelopmentSpecificOrigins";\n        const string LOCAL_DEVELOPMENT_URL = "http://localhost:3000";\n\n        public Startup(IConfiguration configuration)\n        {\n            Configuration = configuration;\n        }\n\n        public IConfiguration Configuration { get; }\n\n        // This method gets called by the runtime. Use this method to add services to the container.\n        public void ConfigureServices(IServiceCollection services)\n        {\n\n            services.AddControllers();\n\n            services.AddCors(options => {\n                options.AddPolicy(name: ALLOW_DEVELOPMENT_CORS_ORIGINS_POLICY,\n                    builder => {\n                        builder.WithOrigins(LOCAL_DEVELOPMENT_URL)\n                            .AllowAnyMethod()\n                            .AllowAnyHeader()\n                            .AllowCredentials();\n                    });\n            });\n\n            // Register the Swagger services\n            services.AddSwaggerDocument();\n        }\n\n        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.\n        public void Configure (IApplicationBuilder app, IWebHostEnvironment env)\n        {\n            if (env.IsDevelopment())\n            {\n                app.UseDeveloperExceptionPage();\n            }\n            else\n            {\n                app.UseExceptionHandler("/Error");\n                app.UseHsts ();\n                app.UseHttpsRedirection();\n            }\n\n            app.UseDefaultFiles();\n            app.UseStaticFiles();\n\n            app.UseRouting();\n\n            app.UseAuthorization();\n\n            // Register the Swagger generator and the Swagger UI middlewares\n            app.UseOpenApi();\n            app.UseSwaggerUi3();\n\n            if (env.IsDevelopment())\n                app.UseCors(ALLOW_DEVELOPMENT_CORS_ORIGINS_POLICY);\n\n            app.UseEndpoints(endpoints =>\n            {\n                endpoints.MapControllers();\n            });\n        }\n    }\n}\n')),(0,i.kt)("p",null,"The significant changes in the above ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup.cs")," are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Exposing a Swagger endpoint with ",(0,i.kt)("inlineCode",{parentName:"li"},"UseOpenApi")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"UseSwaggerUi3"),". NSwag will automagically create Swagger endpoints in your application for all your controllers. The .NET template ships with a ",(0,i.kt)("inlineCode",{parentName:"li"},"WeatherForecastController"),"."),(0,i.kt)("li",{parentName:"ol"},"Allowing ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/aspnet/core/security/cors"},"Cross-Origin Requests (CORS)")," which is useful during development (and will facilitate a demo later).")),(0,i.kt)("p",null,"Back in the root of our project we're going to initialise an npm project. We're going to use this to put in place a number of handy ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v6/using-npm/scripts"},(0,i.kt)("inlineCode",{parentName:"a"},"npm scripts"))," that will make our project easier to work with. So we'll ",(0,i.kt)("inlineCode",{parentName:"p"},"npm init")," and accept all the defaults."),(0,i.kt)("p",null,"Now we're going add some dependencies which our scripts will use: ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install cpx cross-env npm-run-all start-server-and-test")),(0,i.kt)("p",null,"We'll also add ourselves some ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts")," to our ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "postinstall": "npm run install:client-app && npm run install:server-app",\n    "install:client-app": "cd src/client-app && npm install",\n    "install:server-app": "cd src/server-app/API && dotnet restore",\n    "build": "npm run build:client-app && npm run build:server-app",\n    "build:client-app": "cd src/client-app && npm run build",\n    "postbuild:client-app": "cpx \\"src/client-app/build/**/*.*\\" \\"src/server-app/API/wwwroot/\\"",\n    "build:server-app": "cd src/server-app/API && dotnet build --configuration release",\n    "start": "run-p start:client-app start:server-app",\n    "start:client-app": "cd src/client-app && npm start",\n    "start:server-app": "cross-env ASPNETCORE_URLS=http://*:5000 ASPNETCORE_ENVIRONMENT=Development dotnet watch --project src/server-app/API run --no-launch-profile"\n  }\n')),(0,i.kt)("p",null,"Let's walk through what the above scripts provide us with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Running ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install")," in the root of our project will not only install dependencies for our root ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json"),", thanks to our ",(0,i.kt)("inlineCode",{parentName:"li"},"postinstall"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"install:client-app")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"install:server-app")," scripts it will install the React app and .NET app dependencies as well."),(0,i.kt)("li",{parentName:"ul"},"Running ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run build")," will build our client and server apps."),(0,i.kt)("li",{parentName:"ul"},"Running ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run start")," will start both our React app and our .NET app. Our React app will be started at ",(0,i.kt)("a",{parentName:"li",href:"http://localhost:3000"},"http://localhost:3000"),". Our .NET app will be started at ",(0,i.kt)("a",{parentName:"li",href:"http://localhost:5000"},"http://localhost:5000")," (some environment variables are passed to it with ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kentcdodds/cross-env"},(0,i.kt)("inlineCode",{parentName:"a"},"cross-env"))," ).")),(0,i.kt)("p",null,"Once ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run start")," has been run, you will find a Swagger endpoint at ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:5000/swagger"},"http://localhost:5000/swagger"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"swagger screenshot",src:n(54226).Z,width:"600",height:"362"})),(0,i.kt)("h2",{id:"the-client-generator-project"},"The client generator project"),(0,i.kt)("p",null,"Now we've scaffolded our Swagger-ed API, we want to put together the console app that will generate our typed clients."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd src/server-app\ndotnet new console -o APIClientGenerator\ncd APIClientGenerator\ndotnet add package NSwag.CodeGeneration.CSharp\ndotnet add package NSwag.CodeGeneration.TypeScript\ndotnet add package NSwag.Core\n")),(0,i.kt)("p",null,"We now have a console app with dependencies on the code generation portions of NSwag. Now let's change up ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs")," to make use of this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.IO;\nusing System.Threading.Tasks;\nusing NJsonSchema;\nusing NJsonSchema.CodeGeneration.TypeScript;\nusing NJsonSchema.Visitors;\nusing NSwag;\nusing NSwag.CodeGeneration.CSharp;\nusing NSwag.CodeGeneration.TypeScript;\n\nnamespace APIClientGenerator\n{\n    class Program\n    {\n        static async Task Main(string[] args)\n        {\n            if (args.Length != 3)\n                throw new ArgumentException("Expecting 3 arguments: URL, generatePath, language");\n\n            var url = args[0];\n            var generatePath = Path.Combine(Directory.GetCurrentDirectory(), args[1]);\n            var language = args[2];\n\n            if (language != "TypeScript" && language != "CSharp")\n                throw new ArgumentException("Invalid language parameter; valid values are TypeScript and CSharp");\n\n            if (language == "TypeScript")\n                await GenerateTypeScriptClient(url, generatePath);\n            else\n                await GenerateCSharpClient(url, generatePath);\n        }\n\n        async static Task GenerateTypeScriptClient(string url, string generatePath) =>\n            await GenerateClient(\n                document: await OpenApiDocument.FromUrlAsync(url),\n                generatePath: generatePath,\n                generateCode: (OpenApiDocument document) =>\n                {\n                    var settings = new TypeScriptClientGeneratorSettings();\n\n                    settings.TypeScriptGeneratorSettings.TypeStyle = TypeScriptTypeStyle.Interface;\n                    settings.TypeScriptGeneratorSettings.TypeScriptVersion = 3.5M;\n                    settings.TypeScriptGeneratorSettings.DateTimeType = TypeScriptDateTimeType.String;\n\n                    var generator = new TypeScriptClientGenerator(document, settings);\n                    var code = generator.GenerateFile();\n\n                    return code;\n                }\n            );\n\n        async static Task GenerateCSharpClient(string url, string generatePath) =>\n            await GenerateClient(\n                document: await OpenApiDocument.FromUrlAsync(url),\n                generatePath: generatePath,\n                generateCode: (OpenApiDocument document) =>\n                {\n                    var settings = new CSharpClientGeneratorSettings\n                    {\n                        UseBaseUrl = false\n                    };\n\n                    var generator = new CSharpClientGenerator(document, settings);\n                    var code = generator.GenerateFile();\n                    return code;\n                }\n            );\n\n        private async static Task GenerateClient(OpenApiDocument document, string generatePath, Func<OpenApiDocument, string> generateCode)\n        {\n            Console.WriteLine($"Generating {generatePath}...");\n\n            var code = generateCode(document);\n\n            await System.IO.File.WriteAllTextAsync(generatePath, code);\n        }\n    }\n}\n')),(0,i.kt)("p",null,"We've created ourselves a simple .NET console application that creates TypeScript and CSharp clients for a given Swagger URL. It expects three arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"url")," ","-"," the url of the ",(0,i.kt)("inlineCode",{parentName:"li"},"swagger.json")," file to generate a client for."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"generatePath")," ","-"," the path where the generated client file should be placed, relative to this project."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"language")," ","-",' the language of the client to generate; valid values are "TypeScript" and "CSharp".')),(0,i.kt)("p",null,"To create a TypeScript client with it then we'd use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet run --project src/server-app/APIClientGenerator http://localhost:5000/swagger/v1/swagger.json src/client-app/src/clients.ts TypeScript\n")),(0,i.kt)("p",null,"However, for this to run successfully, we'll first have to ensure the API is running. It would be great if we had a single command we could run that would:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"bring up the API"),(0,i.kt)("li",{parentName:"ul"},"generate a client"),(0,i.kt)("li",{parentName:"ul"},"bring down the API")),(0,i.kt)("p",null,"Let's make that."),(0,i.kt)("h2",{id:"building-a-make-a-client-script"},'Building a "make a client" script'),(0,i.kt)("p",null,"In the root of the project we're going to add the following ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"generate-client:server-app": "start-server-and-test generate-client:server-app:serve http-get://localhost:5000/swagger/v1/swagger.json generate-client:server-app:generate",\n    "generate-client:server-app:serve": "cross-env ASPNETCORE_URLS=http://*:5000 ASPNETCORE_ENVIRONMENT=Development dotnet run --project src/server-app/API --no-launch-profile",\n    "generate-client:server-app:generate": "dotnet run --project src/server-app/APIClientGenerator http://localhost:5000/swagger/v1/swagger.json src/client-app/src/clients.ts TypeScript",\n')),(0,i.kt)("p",null,"Let's walk through what's happening here. Running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run generate-client:server-app")," will:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/bahmutov/start-server-and-test"},(0,i.kt)("inlineCode",{parentName:"a"},"start-server-and-test"))," package to spin up our server-app by running the ",(0,i.kt)("inlineCode",{parentName:"li"},"generate-client:server-app:serve")," script."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start-server-and-test")," waits for the Swagger endpoint to start responding to requests. When it does start responding, ",(0,i.kt)("inlineCode",{parentName:"li"},"start-server-and-test")," runs the ",(0,i.kt)("inlineCode",{parentName:"li"},"generate-client:server-app:generate"),' script which runs our APIClientGenerator console app and provides it with the URL where our swagger can be found, the path of the file to generate and the language of "TypeScript"')),(0,i.kt)("p",null,"If you were wanting to generate a C# client (say if you were writing a ",(0,i.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/js-free-frontends-blazor/"},"Blazor")," app) then you could change the ",(0,i.kt)("inlineCode",{parentName:"p"},"generate-client:server-app:generate")," script as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"generate-client:server-app:generate": "dotnet run --project src/server-app/ApiClientGenerator http://localhost:5000/swagger/v1/swagger.json clients.cs CSharp",\n')),(0,i.kt)("h2",{id:"consume-our-generated-api-client"},"Consume our generated API client"),(0,i.kt)("p",null,"Let's run the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run generate-client:server-app")," command. It creates a ",(0,i.kt)("inlineCode",{parentName:"p"},"clients.ts")," file which nestles nicely inside our ",(0,i.kt)("inlineCode",{parentName:"p"},"client-app"),". We're going to exercise that in a moment. First of all, let's enable proxying from our ",(0,i.kt)("inlineCode",{parentName:"p"},"client-app")," to our ",(0,i.kt)("inlineCode",{parentName:"p"},"server-app")," following the instructions in the ",(0,i.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/proxying-api-requests-in-development/"},"Create React App docs")," and adding the following to our ",(0,i.kt)("inlineCode",{parentName:"p"},"client-app/package.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"proxy": "http://localhost:5000"\n')),(0,i.kt)("p",null,"Now let's start our apps with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run start"),". We'll then replace the contents of ",(0,i.kt)("inlineCode",{parentName:"p"},"App.tsx")," with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport "./App.css";\nimport { WeatherForecast, WeatherForecastClient } from "./clients";\n\nfunction App() {\n  const [weather, setWeather] = React.useState<WeatherForecast[] | null>();\n  React.useEffect(() => {\n    async function loadWeather() {\n      const weatherClient = new WeatherForecastClient(/* baseUrl */ "");\n      const forecast = await weatherClient.get();\n      setWeather(forecast);\n    }\n    loadWeather();\n  }, [setWeather]);\n\n  return (\n    <div className="App">\n      <header className="App-header">\n        {weather ? (\n          <table>\n            <thead>\n              <tr>\n                <th>Date</th>\n                <th>Summary</th>\n                <th>Centigrade</th>\n                <th>Fahrenheit</th>\n              </tr>\n            </thead>\n            <tbody>\n              {weather.map(({ date, summary, temperatureC, temperatureF }) => (\n                <tr key={date}>\n                  <td>{new Date(date).toLocaleDateString()}</td>\n                  <td>{summary}</td>\n                  <td>{temperatureC}</td>\n                  <td>{temperatureF}</td>\n                </tr>\n              ))}\n            </tbody>\n          </table>\n        ) : (\n          <p>Loading weather...</p>\n        )}\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,i.kt)("p",null,"Inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"React.useEffect")," above you can see we create a new instance of the auto-generated ",(0,i.kt)("inlineCode",{parentName:"p"},"WeatherForecastClient"),". We then call ",(0,i.kt)("inlineCode",{parentName:"p"},"weatherClient.get()")," which sends the ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," request to the server to acquire the data and provides it in a strongly typed fashion (",(0,i.kt)("inlineCode",{parentName:"p"},"get()")," returns an array of ",(0,i.kt)("inlineCode",{parentName:"p"},"WeatherForecast"),"). This is then displayed on the page like so:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"load data from server",src:n(81642).Z,width:"600",height:"354"})),(0,i.kt)("p",null,"As you an see we're loading data from the server using our auto-generated client. We're reducing the amount of code we have to write ",(0,i.kt)("em",{parentName:"p"},"and")," we're reducing the likelihood of errors."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This post was originally posted on ",(0,i.kt)("a",{parentName:"em",href:"https://blog.logrocket.com/generate-typescript-csharp-clients-nswag-api/"},"LogRocket"),".")))}d.isMDXComponent=!0},54226:function(e,t){t.Z="data:image/png;base64,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"},81642:function(e,t,n){t.Z=n.p+"assets/images/use-generated-client-68121118d8862aee3faf83860aeb6de9.gif"}}]);