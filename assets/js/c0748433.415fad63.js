"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[82832],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},77761:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],s={title:"Cypress and Auth0",authors:"johnnyreilly",tags:["auth0-js","Auth0","cypress","login"],hide_table_of_contents:!1},l=void 0,u={permalink:"/2018/07/09/cypress-and-auth0",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-07-09-cypress-and-auth0/index.md",source:"@site/blog/2018-07-09-cypress-and-auth0/index.md",title:"Cypress and Auth0",description:"Cypress is a fantastic way to write UI tests for your web apps. Just world class. Wait, no. Galaxy class. I'm going to go one further: universe class. You get my drift.",date:"2018-07-09T00:00:00.000Z",formattedDate:"July 9, 2018",tags:[{label:"auth0-js",permalink:"/tags/auth-0-js"},{label:"Auth0",permalink:"/tags/auth-0"},{label:"cypress",permalink:"/tags/cypress"},{label:"login",permalink:"/tags/login"}],readingTime:4.435,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Cypress and Auth0",authors:"johnnyreilly",tags:["auth0-js","Auth0","cypress","login"],hide_table_of_contents:!1},prevItem:{title:"Azure App Service: nested configuration for ASP.NET running in Web App for Containers using Application Settings",permalink:"/2018/07/28/azure-app-service-web-app-containers-asp-net-nested-configuration"},nextItem:{title:"VSTS and EF Core Migrations",permalink:"/2018/06/24/vsts-and-ef-core-migrations"}},p={authorsImageUrls:[void 0]},c=[{value:"Commanding Auth0",id:"commanding-auth0",level:2},{value:"Using It",id:"using-it",level:2},{value:"One More Thing...",id:"one-more-thing",level:2}],h={toc:c};function d(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.cypress.io/"},"Cypress")," is a fantastic way to write UI tests for your web apps. Just world class. Wait, no. Galaxy class. I'm going to go one further: universe class. You get my drift."),(0,i.kt)("p",null,"Here's a pickle for you. You have functionality that lies only behind the walled garden of authentication. You want to write tests for these capabilities. Assuming that authentication takes place within your application that's no great shakes. Authentication is part of your app; it's no big deal using Cypress to automate logging in."),(0,i.kt)("p",null,"Auth is a serious business and, as Cypress is best in class for UI testing, I'll say that Auth0 is romping home with the same title in the auth-as-a-service space. My app is using Auth0 for authentication. What's important to note about this is the flow. Typically when using auth-as-a-service, the user is redirected to the auth provider's site to authenticate and then be redirected back to the application post-login."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/brian-mann"},"Brian Mann")," (of Cypress fame) has been ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cypress-io/cypress/issues/1342#issuecomment-366747803"},"fairly clear when talking about testing with this sort of authentication flow"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You're trying to test SSO - and we have recipes showing you exactly how to do this."),(0,i.kt)("p",{parentName:"blockquote"},"Also best practice is never to visit or test 3rd party sites not under your control. You don't control ",(0,i.kt)("inlineCode",{parentName:"p"},"microsoftonline"),", so there's no reason to use the UI to test this. You can programmatically test the integration between it and your app with ",(0,i.kt)("inlineCode",{parentName:"p"},"cy.request")," ","-"," which is far faster, more reliable, and still gives you 100% confidence.")),(0,i.kt)("p",null,"I want to automate logging into Auth0 from my Cypress tests. But hopefully in a good way. Not a bad way. Wouldn't want to make Brian sad."),(0,i.kt)("h2",{id:"commanding-auth0"},"Commanding Auth0"),(0,i.kt)("p",null,"To automate our login, we're going to use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/auth0/auth0.js"},"auth0-js client library"),". This is the same library the application uses; but we're going to do something subtly different with it."),(0,i.kt)("p",null,"The application uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/auth0/auth0.js#api"},(0,i.kt)("inlineCode",{parentName:"a"},"authorize"))," to log users in. This function redirects the user into the Auth0 lock screen, and then, post authentication, redirects the user back to the application with a token in the URL. The app parses the token (using the auth0 client library) and sets the token and the expiration of said token in the browser sessionStorage."),(0,i.kt)("p",null,"What we're going to do is automate our login by using ",(0,i.kt)("inlineCode",{parentName:"p"},"login")," instead. First of all, we need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"auth0-js")," as a dependency of our e2e tests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"yarn add auth0-js --dev\n")),(0,i.kt)("p",null,"Next, we're going to create ourselves a custom command called loginAsAdmin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const auth0 = require('auth0-js');\n\nCypress.Commands.add('loginAsAdmin', (overrides = {}) => {\n  Cypress.log({\n    name: 'loginAsAdminBySingleSignOn',\n  });\n\n  const webAuth = new auth0.WebAuth({\n    domain: 'my-super-duper-domain.eu.auth0.com', // Get this from https://manage.auth0.com/#/applications and your application\n    clientID: 'myclientid', // Get this from https://manage.auth0.com/#/applications and your application\n    responseType: 'token id_token',\n  });\n\n  webAuth.client.login(\n    {\n      realm: 'Username-Password-Authentication',\n      username: 'mytestemail@something.co.uk',\n      password: 'SoVeryVeryVery$ecure',\n      audience: 'myaudience', // Get this from https://manage.auth0.com/#/apis and your api, use the identifier property\n      scope: 'openid email profile',\n    },\n    function (err, authResult) {\n      // Auth tokens in the result or an error\n      if (authResult && authResult.accessToken && authResult.idToken) {\n        const token = {\n          accessToken: authResult.accessToken,\n          idToken: authResult.idToken,\n          // Set the time that the access token will expire at\n          expiresAt: authResult.expiresIn * 1000 + new Date().getTime(),\n        };\n\n        window.sessionStorage.setItem(\n          'my-super-duper-app:storage_token',\n          JSON.stringify(token)\n        );\n      } else {\n        console.error('Problem logging into Auth0', err);\n        throw err;\n      }\n    }\n  );\n});\n")),(0,i.kt)("p",null,"This command logs in using the ",(0,i.kt)("inlineCode",{parentName:"p"},"auth0-js")," API and then sets the result into ",(0,i.kt)("inlineCode",{parentName:"p"},"sessionStorage")," in the same way that our app does. This allows our app to read the value out of ",(0,i.kt)("inlineCode",{parentName:"p"},"sessionStorage")," and use it. We're also going to put together one other command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Cypress.Commands.add('visitHome', (overrides = {}) => {\n  cy.visit('/', {\n    onBeforeLoad: (win) => {\n      win.sessionStorage.clear();\n    },\n  });\n});\n")),(0,i.kt)("p",null,"This visits the root of our application and wipes the ",(0,i.kt)("inlineCode",{parentName:"p"},"sessionStorage"),". This is necessary because Cypress doesn't clear down ",(0,i.kt)("inlineCode",{parentName:"p"},"sessionStorage")," between tests. (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cypress-io/cypress/issues/413"},"That's going to change though."),")"),(0,i.kt)("h2",{id:"using-it"},"Using It"),(0,i.kt)("p",null,"Let's write a test that uses our new commands to see if it gets access to our admin functionality:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"describe('access secret admin functionality', () => {\n  it('should be able to navigate to', () => {\n    cy.visitHome()\n      .loginAsAdmin()\n      .get('[href=\"/secret-adminny-stuff\"]') // This link should only be visible to admins\n      .click()\n      .url()\n      .should('contain', 'secret-adminny-stuff/'); // non-admins should be redirected away from this url\n  });\n});\n")),(0,i.kt)("p",null,"Well, the test looks good but it's failing. If I fire up the Chrome Dev Tools in Cypress (did I mention that Cypress is absolutely fabulous?) then I see this response tucked away in the network tab:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{error: "unauthorized_client",\u2026} error : "unauthorized_client" error_description : "Grant type \'http://auth0.com/oauth/grant-type/password-realm\' not allowed for the client."\n')),(0,i.kt)("p",null,"Hmmm... So sad. If you go to ",(0,i.kt)("a",{parentName:"p",href:"https://manage.auth0.com/#/applications"},"https://manage.auth0.com/#/applications"),", select your application, ",(0,i.kt)("inlineCode",{parentName:"p"},"Show Advanced Settings")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Grant Types")," you'll see a ",(0,i.kt)("inlineCode",{parentName:"p"},"Password")," option is unselected."),(0,i.kt)("p",null,"Select it, Save Changes and try again."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(27240).Z,width:"640",height:"449"})),(0,i.kt)("p",null,"You now have a test which automates your Auth0 login using Cypress and goes on to test your application functionality with it!"),(0,i.kt)("h2",{id:"one-more-thing"},"One More Thing..."),(0,i.kt)("p",null,"It's worth saying that it's worth setting up different tenants in Auth0 to support your testing scenarios. This is generally a good idea so you can separate your testing accounts from Production accounts. Further to that, you don't need to have your Production setup supporting the ",(0,i.kt)("inlineCode",{parentName:"p"},"Password``Grant Type"),"."),(0,i.kt)("p",null,"Also, if you're curious about what the application under test is like then read ",(0,i.kt)("a",{parentName:"p",href:"/2018/01/14/auth0-typescript-and-aspnet-core"},"this"),"."))}d.isMDXComponent=!0},27240:function(e,t,n){t.Z=n.p+"assets/images/auth0-enable-password-grant-type-d1ee245b0e059914635e5dada9942ab4.png"}}]);