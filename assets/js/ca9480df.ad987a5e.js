"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[32818],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||i;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},37409:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return h},default:function(){return d}});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],s={title:"Auth0, TypeScript and ASP.NET Core",authors:"johnnyreilly",tags:["ASP.Net Core","Auth0","TypeScript","OAuth","React"],hide_table_of_contents:!1},l=void 0,c={permalink:"/2018/01/14/auth0-typescript-and-aspnet-core",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-01-14-auth0-typescript-and-aspnet-core.md",source:"@site/blog/2018-01-14-auth0-typescript-and-aspnet-core.md",title:"Auth0, TypeScript and ASP.NET Core",description:"Most applications I write have some need for authentication and perhaps authorisation too. In fact, most apps most people write fall into that bracket. Here's the thing: Auth done well is a \\big\\ chunk of work. And the minute you start thinking about that you almost invariably lose focus on the thing you actually want to build and ship.",date:"2018-01-14T00:00:00.000Z",formattedDate:"January 14, 2018",tags:[{label:"ASP.Net Core",permalink:"/tags/asp-net-core"},{label:"Auth0",permalink:"/tags/auth-0"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"OAuth",permalink:"/tags/o-auth"},{label:"React",permalink:"/tags/react"}],readingTime:9.36,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"webpack 4 - ts-loader / fork-ts-checker-webpack-plugin betas",permalink:"/2018/01/28/webpack-4-ts-loader-fork-ts-checker"},nextItem:{title:"ts-loader 2017 retrospective",permalink:"/2017/12/24/ts-loader-2017-retrospective"}},u={authorsImageUrls:[void 0]},h=[{value:"What I wanted to build",id:"what-i-wanted-to-build",children:[],level:2},{value:"Boil a Plate",id:"boil-a-plate",children:[],level:2},{value:"The Walkthrough",id:"the-walkthrough",children:[],level:2},{value:"Setup Auth0",id:"setup-auth0",children:[{value:"Client",id:"client",children:[],level:3},{value:"API",id:"api",children:[],level:3}],level:2},{value:"Running the App",id:"running-the-app",children:[{value:"Production build",id:"production-build",children:[],level:3},{value:"Debugging",id:"debugging",children:[],level:3}],level:2},{value:"The Tour",id:"the-tour",children:[{value:"authStore.ts",id:"authstorets",children:[],level:3},{value:"UserController.cs",id:"usercontrollercs",children:[],level:3},{value:"UserController.cs",id:"usercontrollercs-1",children:[],level:3},{value:"Startup.cs",id:"startupcs",children:[],level:3}],level:2},{value:"Authorization",id:"authorization",children:[{value:"UserController.cs",id:"usercontrollercs-2",children:[],level:3},{value:"Scopes.cs",id:"scopescs",children:[],level:3},{value:"Startup.cs",id:"startupcs-1",children:[],level:3},{value:"HasScopeHandler.cs",id:"hasscopehandlercs",children:[],level:3}],level:2}],p={toc:h};function d(e){var t=e.components,s=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Most applications I write have some need for authentication and perhaps authorisation too. In fact, most apps most people write fall into that bracket. Here's the thing: Auth done well is a ","*","big","*"," chunk of work. And the minute you start thinking about that you almost invariably lose focus on the thing you actually want to build and ship."),(0,i.kt)("p",null,"So this Christmas I decided it was time to take a look into offloading that particular problem onto someone else. I knew there were third parties who provided Auth-As-A-Service - time to give them a whirl. On the recommendation of a friend, I made Auth0 my first port of call. Lest you be expecting a full breakdown of the various players in this space, let me stop you now; I liked Auth0 so much I strayed no further. Auth0 kicks AAAS. (I'm so sorry)"),(0,i.kt)("h2",{id:"what-i-wanted-to-build"},"What I wanted to build"),(0,i.kt)("p",null,'My criteria for "auth success" was this:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"I want to build a SPA, specifically a React SPA. Ideally, I shouldn't need a back end of my own at all"),(0,i.kt)("li",{parentName:"ul"},"I want to use TypeScript on my client.")),(0,i.kt)("p",null,"But, for when I do implement a back end:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"I want that to be able to use the client side's Auth tokens to allow access to Auth routes on my server."),(0,i.kt)("li",{parentName:"ul"},"\u200eI want to able to identify the user, given the token, to provide targeted data"),(0,i.kt)("li",{parentName:"ul"},"Oh, and I want to use .NET Core 2 for my server.")),(0,i.kt)("p",null,"And in achieving all of the I want to add minimal code to my app. Not War and Peace. My code should remain focused on doing what it does."),(0,i.kt)("h2",{id:"boil-a-plate"},"Boil a Plate"),(0,i.kt)("p",null,"I ended up with unqualified ticks for all my criteria, but it took some work to find out. I will say that Auth0 do travel the extra mile in terms of getting you up and running. When you create a new Client in Auth0 you're given the option to download a quick start using the technology of your choice."),(0,i.kt)("p",null,"This was a massive plus for me. I took the quickstart provided and ran with it to get me to the point of meeting my own criteria. You can use this boilerplate for your own ends. Herewith, a walkthrough:"),(0,i.kt)("h2",{id:"the-walkthrough"},"The Walkthrough"),(0,i.kt)("p",null,"Fork and clone the repo at this location: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/auth0-react-typescript-asp-net-core"},"https://github.com/johnnyreilly/auth0-react-typescript-asp-net-core"),"."),(0,i.kt)("p",null,"What have we got? 2 folders, ClientApp contains the React app, Web contains the ASP.NET Core app. Now we need to get setup with Auth0 and customise our config."),(0,i.kt)("h2",{id:"setup-auth0"},"Setup Auth0"),(0,i.kt)("p",null,"Here's how to get the app set up with Auth0; you're going to need to sign up for a (free) Auth0 account. Then login into Auth0 and go to the management portal."),(0,i.kt)("h3",{id:"client"},"Client"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a Client with the name of your choice and use the Single Page Web Applications template."),(0,i.kt)("li",{parentName:"ul"},"From the new Client Settings page take the Domain and Client ID and update the similarly named properties in the ",(0,i.kt)("inlineCode",{parentName:"li"},"appsettings.Development.json")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"appsettings.Production.json")," files with these settings."),(0,i.kt)("li",{parentName:"ul"},"To the Allowed Callback URLs setting add the URLs: ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/callback,http://localhost:5000/callback")," ","-"," the first of these faciliates running in Debug mode, the second in Production mode. If you were to deploy this you'd need to add other callback URLs in here too.")),(0,i.kt)("h3",{id:"api"},"API"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create an API with the name of your choice (I recommend the same as the Client to avoid confusion), an identifier which can be anything you like; I like to use the URL of my app but it's your call."),(0,i.kt)("li",{parentName:"ul"},"From the new API Settings page take the Identifier and update the Audience property in the ",(0,i.kt)("inlineCode",{parentName:"li"},"appsettings.Development.json")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"appsettings.Production.json")," files with that value.")),(0,i.kt)("h2",{id:"running-the-app"},"Running the App"),(0,i.kt)("h3",{id:"production-build"},"Production build"),(0,i.kt)("p",null,"Build the client app with ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn build")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientApp")," folder. (Don't forget to ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn install")," first.) Then, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Web")," folder ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet restore"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet run")," and open your browser to ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:5000"},(0,i.kt)("inlineCode",{parentName:"a"},"http://localhost:5000"))),(0,i.kt)("h3",{id:"debugging"},"Debugging"),(0,i.kt)("p",null,"Run the client app using webpack-dev-server using ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn start")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientApp")," folder. Fire up VS Code in the root of the repo and hit F5 to debug the server. Then open your browser to ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000"},(0,i.kt)("inlineCode",{parentName:"a"},"http://localhost:3000"))),(0,i.kt)("h2",{id:"the-tour"},"The Tour"),(0,i.kt)("p",null,'When you fire up the app you\'re presented with "you are not logged in!" message and the option to login. Do it, it\'ll take you to the Auth0 "lock" screen where you can sign up / login. Once you do that you\'ll be asked to confirm access:'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(14981).Z})),(0,i.kt)("p",null,"All this is powered by Auth0's ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/auth0-js"},"auth0-js")," npm package. (Excellent type definition files are available from Definitely Typed; I'm using the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@types/auth0-js"},"@types/auth0-js")," package DT publishes.) Usage of which is super simple; it exposes an ",(0,i.kt)("inlineCode",{parentName:"p"},"authorize")," method that when called triggers the Auth0 lock screen. Once you've \"okayed\" you'll be taken back to the app which will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"parseHash")," method to extract the access token that Auth0 has provided. Take a look at how our ",(0,i.kt)("inlineCode",{parentName:"p"},"authStore")," makes use of auth0-js: (don't be scared; it uses mobx - but you could use anything)"),(0,i.kt)("h3",{id:"authstorets"},"authStore.ts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Auth0UserProfile, WebAuth } from 'auth0-js';\nimport { action, computed, observable, runInAction } from 'mobx';\nimport { IAuth0Config } from '../../config';\nimport { StorageFacade } from '../storageFacade';\n\ninterface IStorageToken {\n  accessToken: string;\n  idToken: string;\n  expiresAt: number;\n}\n\nconst STORAGE_TOKEN = 'storage_token';\n\nexport class AuthStore {\n  @observable.ref auth0: WebAuth;\n  @observable.ref userProfile: Auth0UserProfile;\n  @observable.ref token: IStorageToken;\n\n  constructor(config: IAuth0Config, private storage: StorageFacade) {\n    this.auth0 = new WebAuth({\n      domain: config.domain,\n      clientID: config.clientId,\n      redirectUri: config.redirectUri,\n      audience: config.audience,\n      responseType: 'token id_token',\n      scope: 'openid email profile do:admin:thing', // the do:admin:thing scope is custom and defined in the scopes section of our API in the Auth0 dashboard\n    });\n  }\n\n  initialise() {\n    const token = this.parseToken(this.storage.getItem(STORAGE_TOKEN));\n    if (token) {\n      this.setSession(token);\n    }\n    this.storage.addEventListener(this.onStorageChanged);\n  }\n\n  parseToken(tokenString: string) {\n    const token = JSON.parse(tokenString || '{}');\n    return token;\n  }\n\n  onStorageChanged = (event: StorageEvent) => {\n    if (event.key === STORAGE_TOKEN) {\n      this.setSession(this.parseToken(event.newValue));\n    }\n  };\n\n  @computed get isAuthenticated() {\n    // Check whether the current time is past the\n    // access token's expiry time\n    return this.token && new Date().getTime() < this.token.expiresAt;\n  }\n\n  login = () => {\n    this.auth0.authorize();\n  };\n\n  handleAuthentication = () => {\n    this.auth0.parseHash((err, authResult) => {\n      if (authResult && authResult.accessToken && authResult.idToken) {\n        const token = {\n          accessToken: authResult.accessToken,\n          idToken: authResult.idToken,\n          // Set the time that the access token will expire at\n          expiresAt: authResult.expiresIn * 1000 + new Date().getTime(),\n        };\n\n        this.setSession(token);\n      } else if (err) {\n        // tslint:disable-next-line:no-console\n        console.log(err);\n        alert(`Error: ${err.error}. Check the console for further details.`);\n      }\n    });\n  };\n\n  @action\n  setSession(token: IStorageToken) {\n    this.token = token;\n    this.storage.setItem(STORAGE_TOKEN, JSON.stringify(token));\n  }\n\n  getAccessToken = () => {\n    const accessToken = this.token.accessToken;\n    if (!accessToken) {\n      throw new Error('No access token found');\n    }\n    return accessToken;\n  };\n\n  @action\n  loadProfile = async () => {\n    const accessToken = this.token.accessToken;\n    if (!accessToken) {\n      return;\n    }\n\n    this.auth0.client.userInfo(accessToken, (err, profile) => {\n      if (err) {\n        throw err;\n      }\n\n      if (profile) {\n        runInAction(() => (this.userProfile = profile));\n        return profile;\n      }\n\n      return undefined;\n    });\n  };\n\n  @action\n  logout = () => {\n    // Clear access token and ID token from local storage\n    this.storage.removeItem(STORAGE_TOKEN);\n\n    this.token = null;\n    this.userProfile = null;\n  };\n}\n")),(0,i.kt)("p",null,'Once you\'re logged in the app offers you more in the way of navigation options. A "Profile" screen shows you the details your React app has retrieved from Auth0 about you. This is backed by the ',(0,i.kt)("inlineCode",{parentName:"p"},"client.userInfo")," method on ",(0,i.kt)("inlineCode",{parentName:"p"},"auth0-js"),'. There\'s also a "Ping" screen which is where your React app talks to your ASP.NET Core server. The screenshot below illustrates the result of hitting the "Get Private Data" button:'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(61454).Z})),(0,i.kt)("p",null,"The \"Get Server to Retrieve Profile Data\" button is interesting as it illustrates that the server can get access to your profile data as well. There's nothing insecure here; it gets the details using the access token retrieved from Auth0 by the ClientApp and passed to the server. It's the API we set up in Auth0 that is in play here. The app uses the Domain and the access token to talk to Auth0 like so:"),(0,i.kt)("h3",{id:"usercontrollercs"},"UserController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// Retrieve the access_token claim which we saved in the OnTokenValidated event\n    var accessToken = User.Claims.FirstOrDefault(c => c.Type == "access_token").Value;\n\n    // If we have an access_token, then retrieve the user\'s information\n    if (!string.IsNullOrEmpty(accessToken))\n    {\n        var domain = _config["Auth0:Domain"];\n        var apiClient = new AuthenticationApiClient(domain);\n        var userInfo = await apiClient.GetUserInfoAsync(accessToken);\n\n        return Ok(userInfo);\n    }\n')),(0,i.kt)("p",null,"We can also access the ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," claim, which uniquely identifies the user:"),(0,i.kt)("h3",{id:"usercontrollercs-1"},"UserController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// We're not doing anything with this, but hey! It's useful to know where the user id lives\n    var userId = User.Claims.FirstOrDefault(c => c.Type == System.Security.Claims.ClaimTypes.NameIdentifier).Value; // our userId is the sub value\n")),(0,i.kt)("p",null,"The reason our ASP.NET Core app works with Auth0 and that we have access to the access token here in the first place is because of our startup code:"),(0,i.kt)("h3",{id:"startupcs"},"Startup.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'public void ConfigureServices(IServiceCollection services)\n    {\n        var domain = $"https://{Configuration["Auth0:Domain"]}/";\n        services.AddAuthentication(options =>\n        {\n            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;\n            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;\n        }).AddJwtBearer(options =>\n        {\n            options.Authority = domain;\n            options.Audience = Configuration["Auth0:Audience"];\n            options.Events = new JwtBearerEvents\n            {\n                OnTokenValidated = context =>\n                {\n                    if (context.SecurityToken is JwtSecurityToken token)\n                    {\n                        if (context.Principal.Identity is ClaimsIdentity identity)\n                        {\n                            identity.AddClaim(new Claim("access_token", token.RawData));\n                        }\n                    }\n\n                    return Task.FromResult(0);\n                }\n            };\n        });\n\n        // ....\n')),(0,i.kt)("h2",{id:"authorization"},"Authorization"),(0,i.kt)("p",null,"We're pretty much done now; just one magic button to investigate: \"Get Admin Data\". If you presently try and access the admin data you'll get a ",(0,i.kt)("inlineCode",{parentName:"p"},"403 Forbidden"),". It's forbidden because that endpoint relies on the ",(0,i.kt)("inlineCode",{parentName:"p"},'"do:admin:thing"')," scope in our claims:"),(0,i.kt)("h3",{id:"usercontrollercs-2"},"UserController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'[Authorize(Scopes.DoAdminThing)]\n    [HttpGet("api/userDoAdminThing")]\n    public IActionResult GetUserDoAdminThing()\n    {\n        return Ok("Admin endpoint");\n    }\n')),(0,i.kt)("h3",{id:"scopescs"},"Scopes.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'public static class Scopes\n    {\n         // the do:admin:thing scope is custom and defined in the scopes section of our API in the Auth0 dashboard\n        public const string DoAdminThing = "do:admin:thing";\n    }\n')),(0,i.kt)("p",null,"This wired up in our ASP.NET Core app like so:"),(0,i.kt)("h3",{id:"startupcs-1"},"Startup.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'services.AddAuthorization(options =>\n    {\n        options.AddPolicy(Scopes.DoAdminThing, policy => policy.Requirements.Add(new HasScopeRequirement(Scopes.DoAdminThing, domain)));\n    });\n\n    // register the scope authorization handler\n    services.AddSingleton<iauthorizationhandler, hasscopehandler="">();\n</iauthorizationhandler,>\n')),(0,i.kt)("h3",{id:"hasscopehandlercs"},"HasScopeHandler.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'public class HasScopeHandler : AuthorizationHandler<hasscoperequirement>\n    {\n        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, HasScopeRequirement requirement)\n        {\n            // If user does not have the scope claim, get out of here\n            if (!context.User.HasClaim(c => c.Type == "scope" && c.Issuer == requirement.Issuer))\n                return Task.CompletedTask;\n\n            // Split the scopes string into an array\n            var scopes = context.User.FindFirst(c => c.Type == "scope" && c.Issuer == requirement.Issuer).Value.Split(\' \');\n\n            // Succeed if the scope array contains the required scope\n            if (scopes.Any(s => s == requirement.Scope))\n                context.Succeed(requirement);\n\n            return Task.CompletedTask;\n        }\n    }\n</hasscoperequirement>\n')),(0,i.kt)("p",null,"The reason we're 403ing at present is because when our ",(0,i.kt)("inlineCode",{parentName:"p"},"HasScopeHandler")," executes, ",(0,i.kt)("inlineCode",{parentName:"p"},"requirement.Scope")," has the value of ",(0,i.kt)("inlineCode",{parentName:"p"},'"do:admin:thing"')," and our ",(0,i.kt)("inlineCode",{parentName:"p"},"scopes")," do not contain that value. To add it, go to your API in the Auth0 management console and add it:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(38549).Z})),(0,i.kt)("p",null,'Note that you can control how this scope is acquired using "Rules" in the Auth0 management portal.'),(0,i.kt)("p",null,"You won't be able to access the admin endpoint yet because you're still rocking with the old access token; pre-newly-added scope. But when you next login to Auth0 you'll see a prompt like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(67050).Z})),(0,i.kt)("p",null,"Which demonstrates that you're being granted an extra scope. With your new shiny access token you can now access the oh-so-secret Admin endpoint."),(0,i.kt)("p",null,"I had some more questions about Auth0 as I'm still new to it myself. To see my question (and the very helpful answer!) go here: ",(0,i.kt)("a",{parentName:"p",href:"https://community.auth0.com/questions/13786/get-user-data-server-side-what-is-a-good-approach"},"https://community.auth0.com/questions/13786/get-user-data-server-side-what-is-a-good-approach")))}d.isMDXComponent=!0},14981:function(e,t,n){t.Z=n.p+"assets/images/Screenshot%2B2018-01-13%2B18.40.21-8464aee2e4481446b6c2c72768bd5bac.png"},61454:function(e,t,n){t.Z=n.p+"assets/images/Screenshot%2B2018-01-13%2B18.47.49-edbbe3ddefa26149f9a447bdd023c381.png"},38549:function(e,t,n){t.Z=n.p+"assets/images/Screenshot%2B2018-01-14%2B08.26.54-d103f9b230a5d0c8a2dd8caf419781a1.png"},67050:function(e,t,n){t.Z=n.p+"assets/images/Screenshot%2B2018-01-14%2B08.32.59-98ad4ec6b457e0b72613c69c16706b33.png"}}]);