"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[5898],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),v=o,m=u["".concat(l,".").concat(v)]||u[v]||d[v]||a;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=v;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},32350:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={title:"My Unrequited Love for Isolate Scope",authors:"johnnyreilly",tags:["Directives","TypeScript","javascript","UI Bootstrap","Isolated Scope","AngularJS"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2014/08/12/my-unrequited-love-for-isolate-scope",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2014-08-12-my-unrequited-love-for-isolate-scope/index.md",source:"@site/blog/2014-08-12-my-unrequited-love-for-isolate-scope/index.md",title:"My Unrequited Love for Isolate Scope",description:"I wrote a little while ago about creating a directive to present server errors on the screen in an Angular application. In my own (not so humble opinion), it was really quite nice. I was particularly proud of my usage of isolate scope. However, pride comes before a fall.",date:"2014-08-12T00:00:00.000Z",formattedDate:"August 12, 2014",tags:[{label:"Directives",permalink:"/tags/directives"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"javascript",permalink:"/tags/javascript"},{label:"UI Bootstrap",permalink:"/tags/ui-bootstrap"},{label:"Isolated Scope",permalink:"/tags/isolated-scope"},{label:"AngularJS",permalink:"/tags/angular-js"}],readingTime:4.51,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"My Unrequited Love for Isolate Scope",authors:"johnnyreilly",tags:["Directives","TypeScript","javascript","UI Bootstrap","Isolated Scope","AngularJS"],hide_table_of_contents:!1},prevItem:{title:"Running JavaScript Unit Tests in AppVeyor",permalink:"/2014/09/06/running-javascript-unit-tests-in-appveyor"},nextItem:{title:"Getting more RESTful with Web API and IHttpActionResult",permalink:"/2014/08/08/getting-more-RESTful-with-Web-API"}},c={authorsImageUrls:[void 0]},p=[{value:"A New Hope",id:"a-new-hope",level:2},{value:"serverError.ts",id:"servererrorts",level:3},{value:"serverError.js",id:"servererrorjs",level:3},{value:"My Plea",id:"my-plea",level:2}],u={toc:p};function d(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/2014/08/01/angularjs-meet-aspnet-server-validation"}),"I wrote a little while ago about creating a directive to present server errors on the screen in an Angular application"),". In my own (not so humble opinion), it was really quite nice. I was particularly proud of my usage of isolate scope. However, pride comes before a fall."),(0,n.kt)("p",null,"It turns out that using isolate scope in a directive is not always wise. Or rather \u2013 not always possible. And this is why:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),'Error: [$compile:multidir] Multiple directives [datepickerPopup, serverError] asking for new/isolated scope on: <input name="sage.dateOfBirth" class="col-xs-12 col-sm-9" type="text" value="" ng-click="vm.dateOfBirthDatePickerOpen()" server-error="vm.errors" ng-model="vm.sage.dateOfBirth" is-open="vm.dateOfBirthDatePickerIsOpen" datepicker-popup="dd MMM yyyy">\n')),(0,n.kt)("p",null,"Ug. What happened here? Well, I had a date field that I was using my serverError directive on. Nothing too controversial there. The problem came when I tried to plug in ",(0,n.kt)("a",o({parentName:"p"},{href:"http://angular-ui.github.io/bootstrap/"}),"UI Bootstrap\u2019s datepicker")," as well. That\u2019s right the directives are fighting. Sad face."),(0,n.kt)("p",null,"To be more precise, it turns out that only one directive on an element is allowed to create an isolated scope. So if I want to use UI Bootstrap\u2019s datepicker (and I do) \u2013 well my serverError directive is toast."),(0,n.kt)("h2",o({},{id:"a-new-hope"}),"A New Hope"),(0,n.kt)("p",null,"So ladies and gentlemen, let me present serverError 2.0 \u2013 this time without isolated scope:"),(0,n.kt)("h3",o({},{id:"servererrorts"}),"serverError.ts"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"(function () {\n  'use strict';\n\n  var app = angular.module('app');\n\n  // Plant a validation message to the right of the element when it is declared invalid by the server\n  app.directive('serverError', [\n    function () {\n      // Usage:\n      // <input class=\"col-xs-12 col-sm-9\"\n      //        name=\"sage.name\" ng-model=\"vm.sage.name\" server-error=\"vm.errors\" />\n\n      var directive = {\n        link: link,\n        restrict: 'A',\n        require: 'ngModel', // supply the ngModel controller as the 4th parameter in the link function\n      };\n      return directive;\n\n      function link(\n        scope: ng.IScope,\n        element: ng.IAugmentedJQuery,\n        attrs: ng.IAttributes,\n        ngModelController: ng.INgModelController\n      ) {\n        // Extract values from attributes (deliberately not using isolated scope)\n        var errorKey: string = attrs['name']; // eg \"sage.name\"\n        var errorDictionaryExpression: string = attrs['serverError']; // eg \"vm.errors\"\n\n        // Bootstrap alert template for error\n        var template =\n          '<div class=\"alert alert-danger col-xs-9 col-xs-offset-2\" role=\"alert\"><i class=\"glyphicon glyphicon-warning-sign larger\"></i> %error%</div>';\n\n        // Create an element to hold the validation message\n        var decorator = angular.element('<div></div>');\n        element.after(decorator);\n\n        // Watch ngModelController.$error.server & show/hide validation accordingly\n        scope.$watch(\n          safeWatch(() => ngModelController.$error.server),\n          showHideValidation\n        );\n\n        function showHideValidation(serverError: boolean) {\n          // Display an error if serverError is true otherwise clear the element\n          var errorHtml = '';\n          if (serverError) {\n            var errorDictionary: { [field: string]: string } = scope.$eval(\n              errorDictionaryExpression\n            );\n            errorHtml = template.replace(\n              /%error%/,\n              errorDictionary[errorKey] || 'Unknown error occurred...'\n            );\n          }\n          decorator.html(errorHtml);\n        }\n\n        // wipe the server error message upon keyup or change events so can revalidate with server\n        element.on('keyup change', (event) => {\n          scope.$apply(() => {\n            ngModelController.$setValidity('server', true);\n          });\n        });\n      }\n    },\n  ]);\n\n  // Thanks @Basarat! http://stackoverflow.com/a/24863256/761388\n  function safeWatch<T extends Function>(expression: T) {\n    return () => {\n      try {\n        return expression();\n      } catch (e) {\n        return null;\n      }\n    };\n  }\n})();\n")),(0,n.kt)("h3",o({},{id:"servererrorjs"}),"serverError.js"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-js"}),"(function () {\n  'use strict';\n\n  var app = angular.module('app');\n\n  // Plant a validation message to the right of the element when it is declared invalid by the server\n  app.directive('serverError', [\n    function () {\n      // Usage:\n      // <input class=\"col-xs-12 col-sm-9\"\n      //        name=\"sage.name\" ng-model=\"vm.sage.name\" server-error=\"vm.errors\" />\n      var directive = {\n        link: link,\n        restrict: 'A',\n        require: 'ngModel',\n      };\n      return directive;\n\n      function link(scope, element, attrs, ngModelController) {\n        // Extract values from attributes (deliberately not using isolated scope)\n        var errorKey = attrs['name'];\n        var errorDictionaryExpression = attrs['serverError'];\n\n        // Bootstrap alert template for error\n        var template =\n          '<div class=\"alert alert-danger col-xs-9 col-xs-offset-2\" role=\"alert\"><i class=\"glyphicon glyphicon-warning-sign larger\"></i> %error%</div>';\n\n        // Create an element to hold the validation message\n        var decorator = angular.element('<div></div>');\n        element.after(decorator);\n\n        // Watch ngModelController.$error.server & show/hide validation accordingly\n        scope.$watch(\n          safeWatch(function () {\n            return ngModelController.$error.server;\n          }),\n          showHideValidation\n        );\n\n        function showHideValidation(serverError) {\n          // Display an error if serverError is true otherwise clear the element\n          var errorHtml = '';\n          if (serverError) {\n            var errorDictionary = scope.$eval(errorDictionaryExpression);\n            errorHtml = template.replace(\n              /%error%/,\n              errorDictionary[errorKey] || 'Unknown error occurred...'\n            );\n          }\n          decorator.html(errorHtml);\n        }\n\n        // wipe the server error message upon keyup or change events so can revalidate with server\n        element.on('keyup change', function (event) {\n          scope.$apply(function () {\n            ngModelController.$setValidity('server', true);\n          });\n        });\n      }\n    },\n  ]);\n\n  // Thanks @Basarat! http://stackoverflow.com/a/24863256/761388\n  function safeWatch(expression) {\n    return function () {\n      try {\n        return expression();\n      } catch (e) {\n        return null;\n      }\n    };\n  }\n})();\n")),(0,n.kt)("p",null,"This version of the serverError directive is from a users perspective identical to the previous version. But it doesn\u2019t use isolated scope \u2013 this means it can be used in concert with other directives which do."),(0,n.kt)("p",null,"It works by pulling the ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"serverError")," values off the attrs parameter. ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," is just a string - the value of which never changes so it can be used as is. ",(0,n.kt)("inlineCode",{parentName:"p"},"serverError")," is an expression that represents the error dictionary that is used to store the server error messages. This is accessed through use of ",(0,n.kt)("inlineCode",{parentName:"p"},"scope.$eval")," as an when it needs to."),(0,n.kt)("h2",o({},{id:"my-plea"}),"My Plea"),(0,n.kt)("p",null,"What I\u2019ve outlined here works. I\u2019ll admit that usage of ",(0,n.kt)("inlineCode",{parentName:"p"},"$eval")," makes me feel a little bit dirty (I\u2019ve got ",(0,n.kt)("a",o({parentName:"p"},{href:"http://www.jslint.com/lint.html#evil"}),"\u201ceval is evil\u201d")," running through my head). Whilst it works, I\u2019m not sure what I\u2019ve done is necessarily best practice. After all ",(0,n.kt)("a",o({parentName:"p"},{href:"https://docs.angularjs.org/guide/directive"}),"the Angular docs themselves say"),":"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"*","Best Practice:")," Use the scope option to create isolate scopes when making components that you want to reuse throughout your app. ","*")),(0,n.kt)("p",null,"But as we\u2019ve seen this isn\u2019t always an option. I\u2019ve written this post to document my own particular struggle and ask the question \u201cis there a better way?\u201d If you know then please tell me!"))}d.isMDXComponent=!0}}]);