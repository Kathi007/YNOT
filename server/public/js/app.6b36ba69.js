(function(t){function e(e){for(var r,n,o=e[0],c=e[1],l=e[2],d=0,v=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&v.push(i[n][0]),i[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,n=1;n<a.length;n++){var c=a[n];0!==i[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},i={app:0},s=[];function n(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c5f76866"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=i[t]=[e,r]}));e.push(a[2]=r);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=n(t);var l=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(d);var a=i[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",l.name="ChunkLoadError",l.type=r,l.request=s,a[1](l)}i[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0dec":function(t,e,a){t.exports=a.p+"img/Logo-gradient.ee80c30b.svg"},"18e3":function(t,e,a){"use strict";a("9403")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Login")]),a("router-link",{attrs:{to:"/home"}},[t._v("Home")]),t._v(" | "),a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),a("router-view")],1)},s=[],n=a("2877"),o={},c=Object(n["a"])(o,i,s,!1,null,null,null),l=c.exports,d=a("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d3b7");var u=a("8c4f"),v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg"},[r("v-app",{attrs:{id:"inspire"}},[r("v-navigation-drawer",{attrs:{app:"",fixed:"",temporary:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item-group",[r("v-list-item",[r("v-list-item-title",[t._v("Profile")])],1),r("v-list-item",[r("v-list-item-title",[t._v("My Project")])],1),r("v-list-item",[r("v-list-item-title",[t._v("Messages")])],1)],1)],1)],1),r("v-app-bar",{staticClass:"default-layout__navbar",attrs:{color:"grey lighten-5",dark:"",app:"",extended:"","extension-height":"3"}},[r("span",{staticClass:"hidden-sm-and-up"},[r("v-app-bar-nav-icon",{attrs:{color:"grey"},on:{click:function(e){e.stopPropagation(),t.sidebar=!t.sidebar}}})],1),r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"YNOTCOLLAB Logo",contain:"",src:a("0dec"),transition:"scale-transition",width:"230"}})],1),r("v-spacer"),r("span",{staticClass:"hidden-xs-only"},[r("v-btn",{attrs:{to:"/profile",color:"grey",text:""}},[t._v("Profile")]),r("v-btn",{attrs:{color:"grey",text:""}},[t._v("Project")]),r("v-btn",{attrs:{color:"grey",text:""}},[t._v("Messages")])],1),r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"pink accent-4",dark:"",icon:""}},"v-btn",i,!1),a),[r("v-icon",[t._v("mdi-filter")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"pink darken-3"}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1),r("v-toolbar-title",[t._v("Filter")]),r("v-spacer"),r("v-toolbar-items",[r("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" SAVE ")])],1)],1),r("v-list",[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[t._v("Content filtering")]),r("v-list-item-subtitle",[t._v("Set the content filtering level to restrict apps that can be downloaded")])],1)],1),r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[t._v("Password")]),r("v-list-item-subtitle",[t._v("Require password for purchase or use password to restrict purchase")])],1)],1)],1)],1)],1)],1),r("v-main",[1==t.switch1?r("v-switch",{staticClass:"mr-10",staticStyle:{float:"right"},attrs:{color:"pink darken-1",label:t.label},model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}}):r("v-switch",{staticClass:"mr-10",staticStyle:{float:"right"},attrs:{color:"pink darken-1",label:"Users"},model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}}),r("SwipeCards",{attrs:{testingcards:t.projects}})],1)],1)],1)},p=[],m=(a("96cf"),a("1da1")),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"container"},[t.current?a("div",{staticClass:"fixed fixed--center",class:{transition:t.isVisible},staticStyle:{"z-index":"3"}},[t.isVisible?a("Vue2InteractDraggable",{staticClass:"rounded-borders card card--one",attrs:{"interact-out-of-sight-x-coordinate":500,"interact-max-rotation":15,"interact-x-threshold":200,"interact-y-threshold":200,"interact-event-bus-events":t.interactEventBus,"interact-block-drag-down":""},on:{draggedRight:function(e){return t.emitAndNext("match")},draggedLeft:function(e){return t.emitAndNext("reject")},draggedUp:function(e){return t.emitAndNext("skip")}}},[a("div",{staticStyle:{height:"100%"}},[a("div",{staticClass:"text"},[a("v-card-title",{attrs:{"primary-title":""}},[t._v(" "+t._s(t.current.projektname)+" ")]),a("v-card-title",{staticClass:"subtitle-1"},[t._v(" Requirements: ")]),a("v-card-text",[t._v(" "+t._s(t.current.Anforderungen.join(", "))+" ")]),a("v-divider"),a("v-card-title",{staticClass:"subtitle-1"},[t._v(" Short description: ")]),a("v-card-text",[t._v(" "+t._s(t.current.kurzbeschreibung)+" ")]),a("v-card-actions",[a("v-btn",{attrs:{color:"purple",outlined:"",width:"75%"}},[t._v("KNOW MORE")])],1)],1)])]):t._e()],1):t._e(),t.next?a("div",{staticClass:"rounded-borders card card--two fixed fixed--center",staticStyle:{"z-index":"2"}},[a("div",{staticStyle:{height:"100%"}},[a("div",{staticClass:"text"},[a("v-card-title",{attrs:{"primary-title":""}},[t._v(" "+t._s(t.next.projektname)+" ")]),a("v-card-title",{staticClass:"subtitle-1"},[t._v(" Requirements: ")]),a("v-card-text",[t._v(" "+t._s(t.next.Anforderungen.join(", "))+" ")]),a("v-divider"),a("v-card-title",{staticClass:"subtitle-1"},[t._v(" Short description: ")]),a("v-card-text",[t._v(" "+t._s(t.next.kurzbeschreibung)+" ")]),a("v-card-actions",[a("v-btn",{attrs:{color:"purple",outlined:"",width:"55%"}},[t._v("KNOW MORE")])],1)],1)])]):t._e(),a("div",{staticClass:"footer fixed"},[a("v-btn",{staticClass:"mr-10",attrs:{icon:"",color:"purple"},on:{click:t.reject}},[a("v-icon",[t._v("mdi-heart-off")])],1),a("v-btn",{staticClass:"mr-10",attrs:{icon:"",color:"purple"},on:{click:t.skip}},[a("v-icon",[t._v("mdi-debug-step-over")])],1),a("v-btn",{attrs:{icon:"",color:"purple"},on:{click:t.match}},[a("v-icon",[t._v("mdi-heart")])],1)],1)])},b=[],g=a("66b6"),h={MATCH:"match",SKIP:"skip",REJECT:"reject"},x={name:"Swipeabletestingcards",components:{Vue2InteractDraggable:g["Vue2InteractDraggable"]},data:function(){return{isVisible:!0,index:0,interactEventBus:{draggedRight:h.MATCH,draggedLeft:h.REJECT,draggedUp:h.SKIP}}},computed:{current:function(){return this.testingcards[this.index]},next:function(){return this.testingcards[this.index+1]}},methods:{match:function(){g["InteractEventBus"].$emit(h.MATCH)},reject:function(){g["InteractEventBus"].$emit(h.REJECT)},skip:function(){g["InteractEventBus"].$emit(h.SKIP)},emitAndNext:function(t){var e=this;this.$emit(t,this.index),setTimeout((function(){return e.isVisible=!1}),200),setTimeout((function(){e.index++,e.isVisible=!0}),200)}},props:{testingcards:{type:Array}}},w=x,y=(a("18e3"),a("6544")),C=a.n(y),_=a("8336"),k=a("99d9"),V=a("ce7e"),j=a("132d"),L=Object(n["a"])(w,f,b,!1,null,"4fcece78",null),O=L.exports;C()(L,{VBtn:_["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:k["c"],VDivider:V["a"],VIcon:j["a"]});var A=a("bc3a"),T=a.n(A),S={data:function(){return{sidebar:!1,drawer:null,icons:["mdi-instagram"],projects:[],employees:[],dialog:!1,switch1:!0,label:"Projects"}},components:{SwipeCards:O},methods:{getEmployees:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T()({url:"http://127.0.0.1:3000/employees",method:"get"});case 2:a=e.sent,t.employees=a.data;case 4:case"end":return e.stop()}}),e)})))()},getProjects:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T()({url:"http://127.0.0.1:3000/projects",method:"get"});case 2:a=e.sent,t.projects=a.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.getEmployees(),this.getProjects()}},E=S,I=(a("cccb"),a("7496")),P=a("40dc"),B=a("5bc1"),M=a("b0af"),N=a("169a"),R=a("adda"),$=a("8860"),D=a("da13"),U=a("5d23"),q=a("1baa"),F=a("f6c4"),H=a("f774"),J=a("2fa4"),W=a("b73d"),Y=a("71d9"),z=a("2a7f"),K=Object(n["a"])(E,v,p,!1,null,null,null),G=K.exports;C()(K,{VApp:I["a"],VAppBar:P["a"],VAppBarNavIcon:B["a"],VBtn:_["a"],VCard:M["a"],VDialog:N["a"],VIcon:j["a"],VImg:R["a"],VList:$["a"],VListItem:D["a"],VListItemContent:U["a"],VListItemGroup:q["a"],VListItemSubtitle:U["b"],VListItemTitle:U["c"],VMain:F["a"],VNavigationDrawer:H["a"],VSpacer:J["a"],VSwitch:W["a"],VToolbar:Y["a"],VToolbarItems:z["a"],VToolbarTitle:z["b"]});var Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"bg"},[r("v-app",{attrs:{id:"inspire"}},[r("v-app-bar",{staticClass:"default-layout__navbar",attrs:{color:"grey lighten-5",dark:"",app:"",extended:"","extension-height":"3"}},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"YNOTCOLLAB Logo",contain:"",src:a("0dec"),transition:"scale-transition",width:"230"}})],1),r("v-spacer"),r("v-btn",{attrs:{color:"purple",to:"/home",dark:""}},[t._v("DEMO")])],1),r("section",{attrs:{id:"hero"}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-img",{attrs:{"min-height":"calc(100vh - "+t.$vuetify.application.top+"px)",src:"https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"}},[r("v-theme-provider",{attrs:{dark:""}},[r("v-container",{attrs:{"fill-height":""}},[r("v-row",{staticClass:"white--text mx-auto",attrs:{align:"center",justify:"center"}},[r("v-col",{staticClass:"white--text text-center",attrs:{cols:"12",tag:"h1"}},[r("span",{staticClass:"font-weight-light",class:[t.$vuetify.breakpoint.smAndDown?"display-1":"display-2"]},[t._v(" WELCOME TO ")]),r("br"),r("span",{staticClass:"font-weight-black",class:[t.$vuetify.breakpoint.smAndDown?"display-3":"display-4"]},[t._v(" YNOTCOLLAB? ")])]),r("v-btn",{staticClass:"align-self-end mr-2",attrs:{outlined:""},on:{click:function(e){return t.$vuetify.goTo("#log-in")}}},[r("span",[t._v("LogIn")])]),r("v-btn",{staticClass:"align-self-end",attrs:{outlined:""},on:{click:function(e){return t.$vuetify.goTo("#about-us")}}},[r("span",[t._v("About Us")])])],1)],1)],1)],1)],1)],1),r("section",{attrs:{id:"about-us"}},[r("div",{staticClass:"py-12"}),r("v-container",{staticClass:"text-center"},[r("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("ABOUT US")]),r("v-responsive",{staticClass:"mx-auto mb-8",attrs:{width:"56"}},[r("v-divider",{staticClass:"mb-1"}),r("v-divider")],1),r("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8",attrs:{"max-width":"720"}},[t._v(" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ")]),r("v-avatar",{staticClass:"elevation-12 mb-12",attrs:{size:"128"}},[r("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.png"}})],1)],1)],1),r("section",{attrs:{id:"log-in"}},[r("div",{staticClass:"py-12"}),r("v-sheet",{attrs:{color:"#333333",tile:""}},[r("v-container",{staticClass:"text-center",attrs:{id:"signinup-form"}},[r("h2",{staticClass:"display-2 font-weight-bold mb-3",staticStyle:{color:"white"}},[t._v(" LOG IN ")]),r("v-responsive",{staticClass:"mx-auto mb-8",attrs:{width:"56"}},[r("v-divider",{staticClass:"mb-1"}),r("v-divider")],1),r("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"8"}},[r("v-card",{staticClass:"evelation-12 card"},[r("v-window",{model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[r("v-window-item",{attrs:{value:1}},[r("v-row",{staticClass:"fill-height"},[r("v-col",{staticClass:"pt-6 pb-6",attrs:{cols:"12",md:"8"}},[r("v-card-title",{staticClass:"text-center",attrs:{"primary-title":""}},[r("span",{staticClass:"headline"},[t._v(t._s(t.currentTitle))])]),r("v-card-text",[r("v-text-field",{attrs:{label:"Email",rules:t.emailRules,required:""},model:{value:t.useremail,callback:function(e){t.useremail=e},expression:"useremail"}}),r("v-text-field",{attrs:{label:"Password",type:"password",required:""},model:{value:t.userpassword,callback:function(e){t.userpassword=e},expression:"userpassword"}}),r("v-btn",{attrs:{disabled:t.disable,to:"/home",dark:"",color:"purple"},on:{click:function(e){return t.checkUser()}}},[t._v("LogIn")]),r("br"),r("div",{staticClass:"mt-4"},[t._v(" No Account yet? "),r("v-btn",{attrs:{color:"purple",text:""},on:{click:function(e){t.step=2}}},[t._v("Sign Up!")])],1)],1)],1)],1)],1),r("v-window-item",{attrs:{value:2}},[r("v-row",{staticClass:"fill-height"},[r("v-col",{staticClass:"pt-6 pb-6",attrs:{cols:"12",md:"8"}},[r("v-card-title",{staticClass:"text-center",attrs:{"primary-title":""}},[r("span",{staticClass:"headline"},[t._v(t._s(t.currentTitle))])]),r("v-card-text",[r("v-text-field",{attrs:{label:"Email",type:"text"}}),r("v-text-field",{attrs:{label:"Firstname",type:"text"}}),r("v-text-field",{attrs:{label:"Lastname",type:"text"}}),r("v-text-field",{attrs:{label:"Password",type:"password"}}),r("br"),r("v-btn",{staticClass:"mt-2",attrs:{to:"/home",dark:"",color:"purple"}},[t._v("Create Account")]),r("br"),r("div",{staticClass:"mt-4"},[r("v-btn",{attrs:{color:"purple",icon:""},on:{click:function(e){t.step=1}}},[r("v-icon",[t._v("mdi-arrow-left")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),r("div",{staticClass:"py-12"})],1)],1),r("v-footer",{staticClass:"justify-center",attrs:{color:"#292929",height:"100"}},[r("div",{staticClass:"title font-weight-light grey--text text--lighten-1 text-center"},[t._v(" © "+t._s((new Date).getFullYear())+" — Vuetify, LLC — YNOTCOLLAB? ")])])],1)],1)])},X=[],Z=a("b85c"),tt={data:function(){return{step:1,icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"],users:[],disable:!0,useremail:"",userpassword:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}]}},methods:{getUsers:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T()({url:"http://127.0.0.1:3000/users",method:"get"});case 2:a=e.sent,t.users=a.data;case 4:case"end":return e.stop()}}),e)})))()},checkUser:function(){var t,e=Object(Z["a"])(this.users);try{for(e.s();!(t=e.n()).done;){var a=t.value;return a.Email==this.useremail&&a.password==this.userpassword?this.disable=!1:this.disable}}catch(r){e.e(r)}finally{e.f()}},checkConnection:function(){var t=this;setTimeout((function(){navigator.onLine?t.offline=!1:t.offline=!0,t.checkConnection()}),1e3)}},computed:{currentTitle:function(){switch(this.step){case 1:return"Sign In";case 2:return"Sign Up";default:return"Sign In"}}},created:function(){this.getUsers(),this.checkConnection()}},et=tt,at=a("8212"),rt=a("62ad"),it=a("a523"),st=a("553a"),nt=a("6b53"),ot=a("0fd9"),ct=a("8dd9"),lt=a("8654"),dt=a("480e"),ut=a("f665"),vt=a("1e6c"),pt=Object(n["a"])(et,Q,X,!1,null,"64fb0d68",null),mt=pt.exports;C()(pt,{VApp:I["a"],VAppBar:P["a"],VAvatar:at["a"],VBtn:_["a"],VCard:M["a"],VCardText:k["b"],VCardTitle:k["c"],VCol:rt["a"],VContainer:it["a"],VDivider:V["a"],VFooter:st["a"],VIcon:j["a"],VImg:R["a"],VResponsive:nt["a"],VRow:ot["a"],VSheet:ct["a"],VSpacer:J["a"],VTextField:lt["a"],VThemeProvider:dt["a"],VWindow:ut["a"],VWindowItem:vt["a"]});var ft=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-app",[r("v-navigation-drawer",{attrs:{app:"",fixed:"",temporary:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item-group",[r("v-list-item",[r("v-list-item-title",[t._v("Profile")])],1),r("v-list-item",[r("v-list-item-title",[t._v("My Project")])],1),r("v-list-item",[r("v-list-item-title",[t._v("Messages")])],1)],1)],1)],1),r("v-app-bar",{staticClass:"default-layout__navbar",attrs:{color:"grey lighten-5",dark:"",app:"",extended:"","extension-height":"3"}},[r("span",{staticClass:"hidden-sm-and-up"},[r("v-app-bar-nav-icon",{attrs:{color:"grey"},on:{click:function(e){e.stopPropagation(),t.sidebar=!t.sidebar}}})],1),r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"YNOTCOLLAB Logo",contain:"",src:a("0dec"),transition:"scale-transition",width:"230"}})],1),r("v-spacer"),r("span",{staticClass:"hidden-xs-only"},[r("v-btn",{attrs:{to:"/profile",color:"grey",text:""}},[t._v("Profile")]),r("v-btn",{attrs:{color:"grey",text:""}},[t._v("Project")]),r("v-btn",{attrs:{color:"grey",text:""}},[t._v("Messages")])],1)],1),r("v-main",[r("v-card")],1)],1)],1)},bt=[],gt={},ht=gt,xt=Object(n["a"])(ht,ft,bt,!1,null,"fb96cb22",null),wt=xt.exports;C()(xt,{VApp:I["a"],VAppBar:P["a"],VAppBarNavIcon:B["a"],VBtn:_["a"],VCard:M["a"],VImg:R["a"],VList:$["a"],VListItem:D["a"],VListItemGroup:q["a"],VListItemTitle:U["c"],VMain:F["a"],VNavigationDrawer:H["a"],VSpacer:J["a"]}),r["a"].use(u["a"]);var yt=[{path:"/home",name:"Home",component:G},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/",name:"Login",component:mt},{path:"/profile",name:"Profile",component:wt}],Ct=new u["a"]({mode:"history",base:"/",routes:yt}),_t=Ct,kt=a("f309");r["a"].use(kt["a"]);var Vt=new kt["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:_t,vuetify:Vt,render:function(t){return t(l)}}).$mount("#app")},"5ced":function(t,e,a){},9403:function(t,e,a){},cccb:function(t,e,a){"use strict";a("5ced")}});