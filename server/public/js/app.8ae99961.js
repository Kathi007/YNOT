(function(t){function e(e){for(var i,s,o=e[0],c=e[1],l=e[2],u=0,v=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&v.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(v.length)v.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function s(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e78cfaf2"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=r[t]=[e,i]}));e.push(n[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(t);var l=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,n[1](l)}r[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0dec":function(t,e,n){t.exports=n.p+"img/Logo-gradient.ee80c30b.svg"},"18e3":function(t,e,n){"use strict";n("9403")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Login")]),n("router-link",{attrs:{to:"/home"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},a=[],s=n("2877"),o={},c=Object(s["a"])(o,r,a,!1,null,null,null),l=c.exports,u=n("9483");Object(u["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var d=n("8c4f"),v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bg"},[i("v-app",{attrs:{id:"inspire"}},[i("v-navigation-drawer",{attrs:{app:"",fixed:"",temporary:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[i("v-list",{attrs:{nav:"",dense:""}},[i("v-list-item-group",[i("v-list-item",[i("v-list-item-title",[t._v("Profile")])],1),i("v-list-item",[i("v-list-item-title",[t._v("My Project")])],1),i("v-list-item",[i("v-list-item-title",[t._v("Messages")])],1)],1)],1)],1),i("v-app-bar",{staticClass:"default-layout__navbar",attrs:{color:"grey lighten-5",dark:"",app:"",extended:"","extension-height":"3"}},[i("span",{staticClass:"hidden-sm-and-up"},[i("v-app-bar-nav-icon",{attrs:{color:"grey"},on:{click:function(e){e.stopPropagation(),t.sidebar=!t.sidebar}}})],1),i("div",{staticClass:"d-flex align-center"},[i("v-img",{staticClass:"shrink mr-2",attrs:{alt:"YNOTCOLLAB Logo",contain:"",src:n("0dec"),transition:"scale-transition",width:"230"}})],1),i("v-spacer"),i("span",{staticClass:"hidden-xs-only"},[i("v-btn",{attrs:{to:"/profile",color:"grey",text:""}},[t._v("Profile")]),i("v-btn",{attrs:{color:"grey",text:""}},[t._v("Project")]),i("v-btn",{attrs:{color:"grey",text:""}},[t._v("Messages")])],1),i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"pink accent-4",dark:"",icon:""}},"v-btn",r,!1),n),[i("v-icon",[t._v("mdi-filter")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-toolbar",{attrs:{dark:"",color:"pink darken-3"}},[i("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[i("v-icon",[t._v("mdi-close")])],1),i("v-toolbar-title",[t._v("Filter")]),i("v-spacer"),i("v-toolbar-items",[i("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" SAVE ")])],1)],1),i("v-list",[i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v("Content filtering")]),i("v-list-item-subtitle",[t._v("Set the content filtering level to restrict apps that can be downloaded")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v("Password")]),i("v-list-item-subtitle",[t._v("Require password for purchase or use password to restrict purchase")])],1)],1)],1)],1)],1)],1),i("v-main",[1==t.switch1?i("v-switch",{staticClass:"mr-10",staticStyle:{float:"right"},attrs:{color:"pink darken-1",label:t.label},model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}}):i("v-switch",{staticClass:"mr-10",staticStyle:{float:"right"},attrs:{color:"pink darken-1",label:"Users"},model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}}),i("SwipeCards",{attrs:{testingcards:t.projects}})],1)],1)],1)},p=[],g=(n("96cf"),n("1da1")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[t.current?n("div",{staticClass:"fixed fixed--center",class:{transition:t.isVisible},staticStyle:{"z-index":"3"}},[t.isVisible?n("Vue2InteractDraggable",{staticClass:"rounded-borders card card--one",attrs:{"interact-out-of-sight-x-coordinate":500,"interact-max-rotation":15,"interact-x-threshold":200,"interact-y-threshold":200,"interact-event-bus-events":t.interactEventBus,"interact-block-drag-down":""},on:{draggedRight:function(e){return t.emitAndNext("match")},draggedLeft:function(e){return t.emitAndNext("reject")},draggedUp:function(e){return t.emitAndNext("skip")}}},[n("div",{staticStyle:{height:"100%"}},[n("div",{staticClass:"text"},[n("v-card-title",{attrs:{"primary-title":""}},[t._v(" "+t._s(t.current.projektname)+" ")]),n("v-card-title",{staticClass:"subtitle-1"},[t._v(" Requirements: ")]),n("v-card-text",[t._v(" "+t._s(t.current.Anforderungen.join(", "))+" ")]),n("v-divider"),n("v-card-title",{staticClass:"subtitle-1"},[t._v(" Short description: ")]),n("v-card-text",[t._v(" "+t._s(t.current.kurzbeschreibung)+" ")]),n("v-card-actions",[n("v-btn",{attrs:{color:"purple",outlined:"",width:"75%"}},[t._v("KNOW MORE")])],1)],1)])]):t._e()],1):t._e(),t.next?n("div",{staticClass:"rounded-borders card card--two fixed fixed--center",staticStyle:{"z-index":"2"}},[n("div",{staticStyle:{height:"100%"}},[n("div",{staticClass:"text"},[n("v-card-title",{attrs:{"primary-title":""}},[t._v(" "+t._s(t.next.projektname)+" ")]),n("v-card-title",{staticClass:"subtitle-1"},[t._v(" Requirements: ")]),n("v-card-text",[t._v(" "+t._s(t.next.Anforderungen.join(", "))+" ")]),n("v-divider"),n("v-card-title",{staticClass:"subtitle-1"},[t._v(" Short description: ")]),n("v-card-text",[t._v(" "+t._s(t.next.kurzbeschreibung)+" ")]),n("v-card-actions",[n("v-btn",{attrs:{color:"purple",outlined:"",width:"55%"}},[t._v("KNOW MORE")])],1)],1)])]):t._e(),n("div",{staticClass:"footer fixed"},[n("v-btn",{staticClass:"mr-10",attrs:{icon:"",color:"purple"},on:{click:t.reject}},[n("v-icon",[t._v("mdi-heart-off")])],1),n("v-btn",{staticClass:"mr-10",attrs:{icon:"",color:"purple"},on:{click:t.skip}},[n("v-icon",[t._v("mdi-debug-step-over")])],1),n("v-btn",{attrs:{icon:"",color:"purple"},on:{click:t.match}},[n("v-icon",[t._v("mdi-heart")])],1)],1)])},h=[],m=n("66b6"),b={MATCH:"match",SKIP:"skip",REJECT:"reject"},w={name:"Swipeabletestingcards",components:{Vue2InteractDraggable:m["Vue2InteractDraggable"]},data:function(){return{isVisible:!0,index:0,interactEventBus:{draggedRight:b.MATCH,draggedLeft:b.REJECT,draggedUp:b.SKIP}}},computed:{current:function(){return this.testingcards[this.index]},next:function(){return this.testingcards[this.index+1]}},methods:{match:function(){m["InteractEventBus"].$emit(b.MATCH)},reject:function(){m["InteractEventBus"].$emit(b.REJECT)},skip:function(){m["InteractEventBus"].$emit(b.SKIP)},emitAndNext:function(t){var e=this;this.$emit(t,this.index),setTimeout((function(){return e.isVisible=!1}),200),setTimeout((function(){e.index++,e.isVisible=!0}),200)}},props:{testingcards:{type:Array}}},x=w,_=(n("18e3"),n("6544")),y=n.n(_),C=n("8336"),k=n("99d9"),V=n("ce7e"),A=n("132d"),I=Object(s["a"])(x,f,h,!1,null,"4fcece78",null),j=I.exports;y()(I,{VBtn:C["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:k["c"],VDivider:V["a"],VIcon:A["a"]});var S=n("bc3a"),O=n.n(S),L={data:function(){return{sidebar:!1,drawer:null,icons:["mdi-instagram"],projects:[],employees:[],dialog:!1,switch1:!0,label:"Projects"}},components:{SwipeCards:j},methods:{getEmployees:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O()({url:"http://127.0.0.1:3000/employees",method:"get"});case 2:n=e.sent,t.employees=n.data;case 4:case"end":return e.stop()}}),e)})))()},getProjects:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O()({url:"http://127.0.0.1:3000/projects",method:"get"});case 2:n=e.sent,t.projects=n.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.getEmployees(),this.getProjects()}},T=L,E=(n("cccb"),n("7496")),P=n("40dc"),R=n("5bc1"),B=n("b0af"),$=n("169a"),M=n("adda"),N=n("8860"),D=n("da13"),U=n("5d23"),z=n("1baa"),Y=n("f6c4"),q=n("f774"),H=n("2fa4"),J=n("b73d"),W=n("71d9"),F=n("2a7f"),G=Object(s["a"])(T,v,p,!1,null,null,null),K=G.exports;y()(G,{VApp:E["a"],VAppBar:P["a"],VAppBarNavIcon:R["a"],VBtn:C["a"],VCard:B["a"],VDialog:$["a"],VIcon:A["a"],VImg:M["a"],VList:N["a"],VListItem:D["a"],VListItemContent:U["a"],VListItemGroup:z["a"],VListItemSubtitle:U["b"],VListItemTitle:U["c"],VMain:Y["a"],VNavigationDrawer:q["a"],VSpacer:H["a"],VSwitch:J["a"],VToolbar:W["a"],VToolbarItems:F["a"],VToolbarTitle:F["b"]});var Q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"bg"},[i("v-app",{attrs:{id:"inspire"}},[i("v-app-bar",{staticClass:"default-layout__navbar",attrs:{color:"grey lighten-5",dark:"",app:"",extended:"","extension-height":"3"}},[i("div",{staticClass:"d-flex align-center"},[i("v-img",{staticClass:"shrink mr-2",attrs:{alt:"YNOTCOLLAB Logo",contain:"",src:n("0dec"),transition:"scale-transition",width:"230"}})],1),i("v-spacer"),i("v-btn",{attrs:{color:"purple",to:"/home",dark:""}},[t._v("DEMO")])],1),i("section",{attrs:{id:"hero"}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-img",{attrs:{"min-height":"calc(100vh - "+t.$vuetify.application.top+"px)",src:"https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"}},[i("v-theme-provider",{attrs:{dark:""}},[i("v-container",{attrs:{"fill-height":""}},[i("v-row",{staticClass:"white--text mx-auto",attrs:{align:"center",justify:"center"}},[i("v-col",{staticClass:"white--text text-center",attrs:{cols:"12",tag:"h1"}},[i("span",{staticClass:"font-weight-light",class:[t.$vuetify.breakpoint.smAndDown?"display-1":"display-2"]},[t._v(" WELCOME TO ")]),i("br"),i("span",{staticClass:"font-weight-black",class:[t.$vuetify.breakpoint.smAndDown?"display-3":"display-4"]},[t._v(" YNOTCOLLAB? ")])]),i("v-btn",{staticClass:"align-self-end mr-2",attrs:{outlined:""},on:{click:function(e){return t.$vuetify.goTo("#log-in")}}},[i("span",[t._v("LogIn")])]),i("v-btn",{staticClass:"align-self-end",attrs:{outlined:""},on:{click:function(e){return t.$vuetify.goTo("#about-us")}}},[i("span",[t._v("About Us")])])],1)],1)],1)],1)],1)],1),i("section",{attrs:{id:"about-us"}},[i("div",{staticClass:"py-12"}),i("v-container",{staticClass:"text-center"},[i("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("ABOUT US")]),i("v-responsive",{staticClass:"mx-auto mb-8",attrs:{width:"56"}},[i("v-divider",{staticClass:"mb-1"}),i("v-divider")],1),i("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8",attrs:{"max-width":"720"}},[t._v(" YNot is an innovative project made by a team of young and ambitious students of the HTL Wien West. The main idea of the project is to make it easier and faster for interested people in the IT niche to connect with other like-minded people. Our team is currently working on both the front- and the backend of the project. You can follow us on our social media for further information and updates. ")]),i("v-avatar",{staticClass:"elevation-12 mb-12",attrs:{size:"128"}},[i("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.png"}})],1),i("v-row")],1)],1),i("section",{attrs:{id:"log-in"}},[i("div",{staticClass:"py-12"}),i("v-sheet",{attrs:{color:"#333333",tile:""}},[i("v-container",{staticClass:"text-center",attrs:{id:"signinup-form"}},[i("h2",{staticClass:"display-2 font-weight-bold mb-3",staticStyle:{color:"white"}},[t._v(" LOG IN ")]),i("v-responsive",{staticClass:"mx-auto mb-8",attrs:{width:"56"}},[i("v-divider",{staticClass:"mb-1"}),i("v-divider")],1),i("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[i("v-col",{attrs:{cols:"12",sm:"8"}},[t.isSignIn?t._e():i("v-btn",{attrs:{type:"primary",disabled:!t.isInit},on:{click:t.handleClickSignIn}},[t._v("sign in with google")]),t.isSignIn?i("v-btn",{attrs:{type:"primary",disabled:!t.isInit},on:{click:t.handleClickSignOut}},[t._v("sign out")]):t._e(),i("br"),i("p",[t._v("isInit: "+t._s(t.isInit))]),i("p",[t._v("isSignIn: "+t._s(t.isSignIn))])],1)],1)],1),i("div",{staticClass:"py-12"})],1)],1),i("v-footer",{staticClass:"justify-center",attrs:{color:"#292929",height:"100"}},[i("div",{staticClass:"title font-weight-light grey--text text--lighten-1 text-center"},[t._v(" © "+t._s((new Date).getFullYear())+" — Vuetify, LLC — YNOTCOLLAB? ")])])],1)],1)])},X=[],Z={data:function(){return{step:1,icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"],users:[],disable:!0,useremail:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],isInit:!1,isSignIn:!1}},methods:{getUsers:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O()({url:"http://127.0.0.1:3000/users",method:"get"});case 2:n=e.sent,t.users=n.data;case 4:case"end":return e.stop()}}),e)})))()},handleClickUpdateScope:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new window.gapi.auth2.SigninOptionsBuilder,n.setScope("email https://www.googleapis.com/auth/drive.file"),i=t.$gAuth.GoogleAuth.currentUser.get(),e.prev=3,e.next=6,i.grant(n);case 6:console.log("success"),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](3),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})))()},handleClickLogin:function(){this.$gAuth.getAuthCode().then((function(t){console.log("authCode",t)})).catch((function(){}))},handleClickSignIn:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$gAuth.signIn();case 3:if(n=e.sent,n){e.next=6;break}return e.abrupt("return",null);case 6:console.log("googleUser",n),console.log("getId",n.getId()),console.log("getBasicProfile",n.getBasicProfile()),console.log("getAuthResponse",n.getAuthResponse()),console.log("getAuthResponse",t.$gAuth.GoogleAuth.currentUser.get().getAuthResponse()),t.isSignIn=t.$gAuth.isAuthorized,e.next=18;break;case 14:return e.prev=14,e.t0=e["catch"](0),console.error(e.t0),e.abrupt("return",null);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))()},handleClickSignOut:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$gAuth.signOut();case 3:t.isSignIn=t.$gAuth.isAuthorized,console.log("isSignIn",t.$gAuth.isAuthorized),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},handleClickDisconnect:function(){window.location.href="https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=".concat(window.location.href)},checkConnection:function(){var t=this;setTimeout((function(){navigator.onLine?t.offline=!1:t.offline=!0,t.checkConnection()}),1e3)}},computed:{currentTitle:function(){switch(this.step){case 1:return"Sign In";case 2:return"Sign Up";default:return"Sign In"}}},created:function(){this.getUsers(),this.checkConnection();var t=this,e=setInterval((function(){t.isInit=t.$gAuth.isInit,t.isSignIn=t.$gAuth.isAuthorized,t.isInit&&clearInterval(e)}),1e3)}},tt=Z,et=n("8212"),nt=n("62ad"),it=n("a523"),rt=n("553a"),at=n("6b53"),st=n("0fd9"),ot=n("8dd9"),ct=n("480e"),lt=Object(s["a"])(tt,Q,X,!1,null,"59485748",null),ut=lt.exports;y()(lt,{VApp:E["a"],VAppBar:P["a"],VAvatar:et["a"],VBtn:C["a"],VCol:nt["a"],VContainer:it["a"],VDivider:V["a"],VFooter:rt["a"],VImg:M["a"],VResponsive:at["a"],VRow:st["a"],VSheet:ot["a"],VSpacer:H["a"],VThemeProvider:ct["a"]});var dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-app",[i("v-navigation-drawer",{attrs:{app:"",fixed:"",temporary:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[i("v-list",{attrs:{nav:"",dense:""}},[i("v-list-item-group",[i("v-list-item",[i("v-list-item-title",[t._v("Profile")])],1),i("v-list-item",[i("v-list-item-title",[t._v("My Project")])],1),i("v-list-item",[i("v-list-item-title",[t._v("Messages")])],1)],1)],1)],1),i("v-app-bar",{staticClass:"default-layout__navbar",attrs:{color:"grey lighten-5",dark:"",app:"",extended:"","extension-height":"3"}},[i("span",{staticClass:"hidden-sm-and-up"},[i("v-app-bar-nav-icon",{attrs:{color:"grey"},on:{click:function(e){e.stopPropagation(),t.sidebar=!t.sidebar}}})],1),i("div",{staticClass:"d-flex align-center"},[i("v-img",{staticClass:"shrink mr-2",attrs:{alt:"YNOTCOLLAB Logo",contain:"",src:n("0dec"),transition:"scale-transition",width:"230"}})],1),i("v-spacer"),i("span",{staticClass:"hidden-xs-only"},[i("v-btn",{attrs:{to:"/profile",color:"grey",text:""}},[t._v("Profile")]),i("v-btn",{attrs:{color:"grey",text:""}},[t._v("Project")]),i("v-btn",{attrs:{color:"grey",text:""}},[t._v("Messages")])],1)],1),i("v-main",[i("v-card")],1)],1)],1)},vt=[],pt={},gt=pt,ft=Object(s["a"])(gt,dt,vt,!1,null,"fb96cb22",null),ht=ft.exports;y()(ft,{VApp:E["a"],VAppBar:P["a"],VAppBarNavIcon:R["a"],VBtn:C["a"],VCard:B["a"],VImg:M["a"],VList:N["a"],VListItem:D["a"],VListItemGroup:z["a"],VListItemTitle:U["c"],VMain:Y["a"],VNavigationDrawer:q["a"],VSpacer:H["a"]}),i["a"].use(d["a"]);var mt=[{path:"/home",name:"Home",component:K},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/",name:"Login",component:ut},{path:"/profile",name:"Profile",component:ht}],bt=new d["a"]({mode:"history",base:"/",routes:mt}),wt=bt,xt=n("f309");i["a"].use(xt["a"]);var _t=new xt["a"]({}),yt=n("c9bf");i["a"].config.productionTip=!1,i["a"].use(yt["a"],{clientId:"102213092219-df87d64b0gfcch43bkb02pi3s9g3j7do.apps.googleusercontent.com",scope:"email",prompt:"consent",fetch_basic_profile:!1}),new i["a"]({router:wt,vuetify:_t,render:function(t){return t(l)}}).$mount("#app")},"5ced":function(t,e,n){},9403:function(t,e,n){},cccb:function(t,e,n){"use strict";n("5ced")}});