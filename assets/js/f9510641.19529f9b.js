"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[1476],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},97079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={title:"Angular UI Bootstrap Datepicker Weirdness",authors:"johnnyreilly",tags:["Angular UI Bootstrap Datepicker"],hide_table_of_contents:!1},l=void 0,p={permalink:"/2015/05/23/angular-ui-bootstrap-datepicker-weirdness",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2015-05-23-angular-ui-bootstrap-datepicker-weirdness/index.md",source:"@site/blog/2015-05-23-angular-ui-bootstrap-datepicker-weirdness/index.md",title:"Angular UI Bootstrap Datepicker Weirdness",description:"The Angular UI Bootstrap Datepicker is fan-dabby-dozy. But it has a ... pecularity. You can use the picker like this:",date:"2015-05-23T00:00:00.000Z",formattedDate:"May 23, 2015",tags:[{label:"Angular UI Bootstrap Datepicker",permalink:"/tags/angular-ui-bootstrap-datepicker"}],readingTime:2.48,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Angular UI Bootstrap Datepicker Weirdness",authors:"johnnyreilly",tags:["Angular UI Bootstrap Datepicker"],hide_table_of_contents:!1},prevItem:{title:"Back to the Future with Code First Migrations",permalink:"/2015/06/19/Back-to-the-Future-with-Code-First-Migrations"},nextItem:{title:"NgValidationFor Baby Steps",permalink:"/2015/05/11/ngvalidationfor-baby-steps"}},s={authorsImageUrls:[void 0]},c=[],u={toc:c};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",r({parentName:"p"},{href:"https://angular-ui.github.io/bootstrap/#/datepicker"}),"Angular UI Bootstrap Datepicker")," is fan-dabby-dozy. But it has a ... pecularity. You can use the picker like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<div ng-app="peskyDatepicker">\n  <div ng-controller="DatepickerDemoCtrl as vm">\n    <input\n      type="text"\n      class="form-control"\n      datepicker-popup="mediumDate"\n      is-open="vm.valuationDatePickerIsOpen"\n      ng-click="vm.valuationDatePickerOpen()"\n      ng-model="vm.valuationDate"\n    />\n  </div>\n</div>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"angular\n  .module('peskyDatepicker', ['ui.bootstrap'])\n  .controller('DatepickerDemoCtrl', [\n    function () {\n      var vm = this;\n\n      vm.valuationDate = new Date();\n      vm.valuationDatePickerIsOpen = false;\n\n      vm.valuationDatePickerOpen = function () {\n        this.valuationDatePickerIsOpen = true;\n      };\n    },\n  ]);\n")),(0,a.kt)("p",null,"The above code produces a textbox which, when clicked upon, renders the datepicker popup (which vanishes upon date selection). This works because the ",(0,a.kt)("inlineCode",{parentName:"p"},"ng-click")," directive calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"valuationDatePickerOpen")," function on the controller which sets the ",(0,a.kt)("inlineCode",{parentName:"p"},"valuationDatePickerIsOpen")," property to be ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," and that property happens to be bound to the ",(0,a.kt)("inlineCode",{parentName:"p"},"is-open")," attribute. Your knee bone connected to your thigh bone, Your thigh bone connected to your hip bone... This makes sense. This works. Great."),(0,a.kt)("p",null,"But I want something a little prettier - I want to use the lovely calendar glyph to trigger the datepicker popup like in the docs. That should be really easy right? I just tweak the HTML to add a calendar button and the associated ",(0,a.kt)("inlineCode",{parentName:"p"},'ng-click="vm.valuationDatePickerOpen()"'),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<div ng-app="peskyDatepicker">\n  <div ng-controller="DatepickerDemoCtrl as vm">\n    <p class="input-group">\n      <input\n        type="text"\n        class="form-control"\n        datepicker-popup="mediumDate"\n        is-open="vm.valuationDatePickerIsOpen"\n        ng-click="vm.valuationDatePickerOpen()"\n        ng-model="vm.valuationDate"\n      />\n      <span class="input-group-btn">\n        <button\n          type="button"\n          class="btn btn-default"\n          ng-click="vm.valuationDatePickerOpen()"\n        >\n          <i class="glyphicon glyphicon-calendar"></i>\n        </button>\n      </span>\n    </p>\n  </div>\n</div>\n')),(0,a.kt)("p",null,"Miraculously, this ",(0,a.kt)("em",{parentName:"p"},"doesn't")," work. Which is strange - I mean it ought to... The same ",(0,a.kt)("inlineCode",{parentName:"p"},"ng-click")," directive is sat on our new calendar button as is in place on the datepicker itself. So what's happening? Well let's do some investigation. If you take a look at the docs you'll see that their example with the calendar glyph is subtly different to our own. Namely, when the opener function is invoked, the official docs pass along ",(0,a.kt)("inlineCode",{parentName:"p"},"$event"),". To what end? Well, the docs opener function does something that our own does not. This:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"$scope.open = function ($event) {\n  $event.preventDefault();\n  $event.stopPropagation();\n\n  $scope.opened = true;\n};\n")),(0,a.kt)("p",null,"Ignore all the ",(0,a.kt)("inlineCode",{parentName:"p"},"$scope")," malarkey - I want you to pay attention to what is happening with ",(0,a.kt)("inlineCode",{parentName:"p"},"$event"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"preventDefault")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"stopPropogation")," are being called. This is probably relevant."),(0,a.kt)("p",null,"I decided to do a little experimentation. I created a Plunk which demonstrates the datepicker and uses ",(0,a.kt)("inlineCode",{parentName:"p"},"$watch")," to track what happens to ",(0,a.kt)("inlineCode",{parentName:"p"},"valuationDatePickerIsOpen"),". The Plunk featured 2 calendar glyphs - the left one doesn't pass along ",(0,a.kt)("inlineCode",{parentName:"p"},"$event")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"valuationDatePickerOpen")," when it is clicked and the right one does. When ",(0,a.kt)("inlineCode",{parentName:"p"},"$event")," is passed we call ",(0,a.kt)("inlineCode",{parentName:"p"},"preventDefault")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"stopPropogation"),"."),(0,a.kt)("iframe",{src:"https://embed.plnkr.co/dJyF531w0QRGiAScRf15/preview",width:"100%",height:"450"}),(0,a.kt)("p",null,"After a little experimentation of my own I discovered that calling ",(0,a.kt)("inlineCode",{parentName:"p"},"$event.stopPropogation()")," is the magic bullet. Without that in place ",(0,a.kt)("inlineCode",{parentName:"p"},"valuationDatePickerIsOpen")," gets set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," and then immediately back to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," again. I do not know why. There may be an entirely sane reason for this - if so then please do post a comment and let me know. It wouldn't hurt for the Angular UI Bootstrap Datepicker docs to mention this. ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/angular-ui/bootstrap/issues/3705"}),"Perhaps it's time to submit a PR....")))}d.isMDXComponent=!0}}]);