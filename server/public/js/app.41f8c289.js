(function(t){function e(e){for(var i,s,o=e[0],c=e[1],l=e[2],d=0,v=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&v.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(v.length)v.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},r={app:0},n=[];function s(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"521120d5"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,i){a=r[t]=[e,i]}));e.push(a[2]=i);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(t);var l=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(d);var a=r[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",l.name="ChunkLoadError",l.type=i,l.request=n,a[1](l)}r[t]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"048b":function(t,e,a){t.exports=a.p+"img/Salem.0c4ba93c.png"},"0dec":function(t,e,a){t.exports=a.p+"img/Logo-gradient.ee80c30b.svg"},"204c":function(t,e,a){t.exports=a.p+"img/Kathrin.e47746b9.png"},"24f7":function(t,e,a){},"3e85":function(t,e,a){"use strict";a("24f7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}}),a("router-view")],1)},n=[],s=a("2877"),o={},c=Object(s["a"])(o,r,n,!1,null,null,null),l=c.exports,d=a("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d3b7");var u=a("8c4f"),v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bg"},[i("v-app",{attrs:{id:"inspire"}},[i("v-navigation-drawer",{attrs:{app:"",fixed:"",temporary:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[i("v-list",{attrs:{nav:"",dense:""}},[i("v-list-item-group",[i("v-list-item",[i("v-list-item-title",[t._v("Profile")])],1),i("v-list-item",[i("v-list-item-title",[t._v("My Project")])],1),i("v-list-item",[i("v-list-item-title",[t._v("Messages")])],1)],1)],1)],1),i("v-app-bar",{staticClass:"default-layout__navbar",attrs:{color:"grey lighten-5",dark:"",app:"",extended:"","extension-height":"3"}},[i("span",{staticClass:"hidden-sm-and-up"},[i("v-app-bar-nav-icon",{attrs:{color:"grey"},on:{click:function(e){e.stopPropagation(),t.sidebar=!t.sidebar}}})],1),i("div",{staticClass:"d-flex align-center"},[i("v-img",{staticClass:"shrink mr-2",attrs:{alt:"YNOTCOLLAB Logo",contain:"",src:a("0dec"),transition:"scale-transition",width:"230"}})],1),i("v-spacer"),i("span",{staticClass:"hidden-xs-only"},[i("v-btn",{attrs:{to:"/profile",color:"grey",text:""}},[t._v("Profile")]),i("v-btn",{attrs:{color:"grey",text:""}},[t._v("Project")]),i("v-btn",{attrs:{to:"/chat",color:"grey",text:""}},[t._v("Messages")])],1),i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"pink accent-4",dark:"",icon:""}},"v-btn",r,!1),a),[i("v-icon",[t._v("mdi-filter")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-toolbar",{attrs:{dark:"",color:"pink darken-3"}},[i("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[i("v-icon",[t._v("mdi-close")])],1),i("v-toolbar-title",[t._v("Filter")]),i("v-spacer"),i("v-toolbar-items",[i("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" SAVE ")])],1)],1),i("v-list",[i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v("Content filtering")]),i("v-list-item-subtitle",[t._v("Set the content filtering level to restrict apps that can be downloaded")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v("Password")]),i("v-list-item-subtitle",[t._v("Require password for purchase or use password to restrict purchase")])],1)],1)],1)],1)],1)],1),i("v-main",[1==t.switch1?i("v-switch",{staticClass:"mr-10",staticStyle:{float:"right"},attrs:{color:"pink darken-1",label:t.label},model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}}):i("v-switch",{staticClass:"mr-10",staticStyle:{float:"right"},attrs:{color:"pink darken-1",label:"Users"},model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}}),i("SwipeCards",{attrs:{testingcards:t.projects}}),t._v(" "+t._s(t.error)+" ")],1)],1)],1)},p=[],f=(a("96cf"),a("1da1")),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"container"},[t.current?a("div",{staticClass:"fixed fixed--center",class:{transition:t.isVisible},staticStyle:{"z-index":"3"}},[t.isVisible?a("Vue2InteractDraggable",{staticClass:"rounded-borders card card--one",attrs:{"interact-out-of-sight-x-coordinate":500,"interact-max-rotation":15,"interact-x-threshold":200,"interact-y-threshold":200,"interact-event-bus-events":t.interactEventBus,"interact-block-drag-down":""},on:{draggedRight:function(e){return t.emitAndNext("match")},draggedLeft:function(e){return t.emitAndNext("reject")},draggedUp:function(e){return t.emitAndNext("skip")}}},[a("div",{staticStyle:{height:"100%"}},[a("div",{staticClass:"text"},[a("v-card-title",{attrs:{"primary-title":""}},[t._v(" "+t._s(t.current.p_name)+" ")]),a("v-card-title",{staticClass:"subtitle-1"},[t._v(" Requirements: ")]),a("v-card-text",[t._v(" "+t._s(t.current.p_zip_code)+" ")]),a("v-divider"),a("v-card-title",{staticClass:"subtitle-1"},[t._v(" Short description: ")]),a("v-card-text",[t._v(" "+t._s(t.current.p_short_description)+" ")]),a("v-card-actions",[a("v-btn",{attrs:{color:"purple",outlined:"",width:"75%"}},[t._v("KNOW MORE")])],1)],1)])]):t._e()],1):t._e(),t.next?a("div",{staticClass:"rounded-borders card card--two fixed fixed--center",staticStyle:{"z-index":"2"}},[a("div",{staticStyle:{height:"100%"}},[a("div",{staticClass:"text"},[a("v-card-title",{attrs:{"primary-title":""}},[t._v(" "+t._s(t.next.p_name)+" ")]),a("v-card-title",{staticClass:"subtitle-1"},[t._v(" Requirements: ")]),a("v-card-text",[t._v(" "+t._s(t.next.p_zip_code)+" ")]),a("v-divider"),a("v-card-title",{staticClass:"subtitle-1"},[t._v(" Short description: ")]),a("v-card-text",[t._v(" "+t._s(t.next.p_short_description)+" ")]),a("v-card-actions",[a("v-btn",{attrs:{color:"purple",outlined:"",width:"55%"}},[t._v("KNOW MORE")])],1)],1)])]):t._e(),a("div",{staticClass:"footer fixed"},[a("v-btn",{staticClass:"mr-10",attrs:{icon:"",color:"purple"},on:{click:t.reject}},[a("v-icon",[t._v("mdi-heart-off")])],1),a("v-btn",{staticClass:"mr-10",attrs:{icon:"",color:"purple"},on:{click:t.skip}},[a("v-icon",[t._v("mdi-debug-step-over")])],1),a("v-btn",{attrs:{icon:"",color:"purple"},on:{click:t.match}},[a("v-icon",[t._v("mdi-heart")])],1)],1)])},g=[],h=a("66b6"),b={MATCH:"match",SKIP:"skip",REJECT:"reject"},x={name:"Swipeabletestingcards",components:{Vue2InteractDraggable:h["Vue2InteractDraggable"]},data:function(){return{isVisible:!0,index:0,interactEventBus:{draggedRight:b.MATCH,draggedLeft:b.REJECT,draggedUp:b.SKIP}}},computed:{current:function(){return this.testingcards[this.index]},next:function(){return this.testingcards[this.index+1]}},methods:{match:function(){h["InteractEventBus"].$emit(b.MATCH),console.log("match")},reject:function(){h["InteractEventBus"].$emit(b.REJECT),console.log("rejected")},skip:function(){h["InteractEventBus"].$emit(b.SKIP),console.log("skip")},emitAndNext:function(t){var e=this;this.$emit(t,this.index),setTimeout((function(){return e.isVisible=!1}),200),setTimeout((function(){e.index++,e.isVisible=!0}),200)}},props:{testingcards:{type:Object}}},_=x,y=(a("3e85"),a("6544")),w=a.n(y),C=a("8336"),k=a("99d9"),V=a("ce7e"),j=a("132d"),O=Object(s["a"])(_,m,g,!1,null,"0b5a7348",null),I=O.exports;w()(O,{VBtn:C["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:k["c"],VDivider:V["a"],VIcon:j["a"]});var L=a("bc3a"),A=a.n(L),T={data:function(){return{sidebar:!1,drawer:null,icons:["mdi-instagram"],projects:[],employees:[],dialog:!1,switch1:!0,label:"Projects",error:"noerror"}},components:{SwipeCards:I},methods:{getUsers:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A()({url:"http://127.0.0.1:3001/users",method:"get"});case 3:a=e.sent,t.employees=a.data,e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0),t.error=e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getProjects:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A()({url:"http://127.0.0.1:3001/projects",method:"get"});case 3:a=e.sent,t.projects=a.data.data,console.log(t.projects),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),t.error=e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},created:function(){this.getUsers(),this.getProjects()}},S=T,B=(a("cccb"),a("7496")),P=a("40dc"),$=a("5bc1"),E=a("b0af"),M=a("169a"),N=a("adda"),R=a("8860"),D=a("da13"),z=a("5d23"),U=a("1baa"),Y=a("f6c4"),G=a("f774"),q=a("2fa4"),K=a("b73d"),F=a("71d9"),H=a("2a7f"),J=Object(s["a"])(S,v,p,!1,null,null,null),W=J.exports;w()(J,{VApp:B["a"],VAppBar:P["a"],VAppBarNavIcon:$["a"],VBtn:C["a"],VCard:E["a"],VDialog:M["a"],VIcon:j["a"],VImg:N["a"],VList:R["a"],VListItem:D["a"],VListItemContent:z["a"],VListItemGroup:U["a"],VListItemSubtitle:z["b"],VListItemTitle:z["c"],VMain:Y["a"],VNavigationDrawer:G["a"],VSpacer:q["a"],VSwitch:K["a"],VToolbar:F["a"],VToolbarItems:H["a"],VToolbarTitle:H["b"]});var Q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"bg"},[i("v-app",{attrs:{id:"inspire"}},[i("v-app-bar",{staticClass:"default-layout__navbar",attrs:{color:"grey lighten-5",dark:"",app:"",extended:"","extension-height":"3"}},[i("div",{staticClass:"d-flex align-center"},[i("v-img",{staticClass:"shrink mr-2",attrs:{alt:"YNOTCOLLAB Logo",contain:"",src:a("0dec"),transition:"scale-transition",width:"230"}})],1),i("v-spacer"),i("v-avatar",{staticClass:" mr-7",attrs:{size:"44"}},[i("v-img")],1)],1),i("section",{attrs:{id:"hero"}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-img",{attrs:{"min-height":"calc(100vh - "+t.$vuetify.application.top+"px)",src:"/img/teamwork.jpg",gradient:"to top right, rgba(48,39,39,.33), rgba(91,37,82,.7)"}},[i("v-theme-provider",{attrs:{dark:""}},[i("v-container",{attrs:{"fill-height":""}},[i("v-row",{staticClass:"white--text mx-auto",attrs:{align:"center",justify:"center"}},[i("v-col",{staticClass:"white--text text-center",attrs:{cols:"12",tag:"h1"}},[i("span",{staticClass:"font-weight-light",class:[t.$vuetify.breakpoint.smAndDown?"display-1":"display-2"]},[t._v(" WELCOME TO ")]),i("br"),i("span",{staticClass:"font-weight-black",class:[t.$vuetify.breakpoint.smAndDown?"display-3":"display-4"]},[t._v(" YNOTCOLLAB? ")])]),i("v-btn",{staticClass:"align-self-end mr-2",attrs:{outlined:""},on:{click:function(e){return t.$vuetify.goTo("#log-in")}}},[i("span",[t._v("LogIn")])]),i("v-btn",{staticClass:"align-self-end",attrs:{outlined:""},on:{click:function(e){return t.$vuetify.goTo("#about-us")}}},[i("span",[t._v("About Us")])])],1)],1)],1)],1)],1)],1),i("section",{attrs:{id:"about-us"}},[i("div",{staticClass:"py-12"}),i("v-container",{staticClass:"text-center"},[i("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("ABOUT US")]),i("v-responsive",{staticClass:"mx-auto mb-8",attrs:{width:"56"}},[i("v-divider",{staticClass:"mb-1"}),i("v-divider")],1),i("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8",attrs:{"max-width":"720"}},[t._v(" YNot is an innovative project made by a team of young and ambitious students of the HTL Wien West. The main idea of the project is to make it easier and faster for interested people in the IT niche to connect with other like-minded people. Our team is currently working on both the front- and the backend of the project. You can follow us on our social media for further information and updates. ")]),i("v-avatar",{staticClass:"elevation-12 mb-12",attrs:{size:"128"}},[i("v-img",{attrs:{src:a("940c")}})],1),i("v-avatar",{staticClass:"elevation-12 mb-12",attrs:{size:"128"}},[i("v-img",{attrs:{src:a("8f3d")}})],1),i("v-avatar",{staticClass:"elevation-12 mb-12",attrs:{size:"128"}},[i("v-img",{attrs:{src:a("204c")}})],1),i("v-avatar",{staticClass:"elevation-12 mb-12",attrs:{size:"128"}},[i("v-img",{attrs:{src:a("048b")}})],1),i("v-row")],1)],1),i("section",{attrs:{id:"log-in"}},[i("div",{staticClass:"py-12"}),i("v-sheet",{attrs:{color:"#333333",tile:""}},[i("v-container",{staticClass:"text-center",attrs:{id:"signinup-form"}},[i("h2",{staticClass:"display-2 font-weight-bold mb-3",staticStyle:{color:"white"}},[t._v(" LOG IN ")]),i("v-responsive",{staticClass:"mx-auto mb-8",attrs:{width:"56"}},[i("v-divider",{staticClass:"mb-1"}),i("v-divider")],1),i("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[i("v-col",{attrs:{cols:"12",sm:"8"}},[i("br"),i("br"),i("v-btn",{ref:"signinBtn",staticClass:"loginBtn w-full my-1 bg-black disabled:bg-opacity-50 hover:bg-opacity-50 text-white py-4 px-4 rounded-md mt-20",attrs:{disabled:!t.isInit},on:{click:t.handleGoogle}},[t.isInit?i("span",[t._v("Continue with Google")]):i("span",[t._v("Loading...")])])],1)],1)],1),i("div",{staticClass:"py-12"})],1)],1),i("v-footer",{staticClass:"justify-center",attrs:{color:"#292929",height:"100"}},[i("div",{staticClass:"title font-weight-light grey--text text--lighten-1 text-center"},[t._v(" © "+t._s((new Date).getFullYear())+" — Vuetify, LLC — YNOTCOLLAB? ")])])],1)],1)])},X=[],Z=(a("ac1f"),a("5319"),{data:function(){return{step:1,icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"],profile:[],disable:!0,useremail:"",isInit:!1,username:"",mode:"login"}},created:function(){this.checkConnection();var t=this,e=setInterval((function(){t.isInit=t.$gAuth.isInit,t.isInit&&clearInterval(e)}),1e3)},methods:{handleGoogle:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isInit=!1,null,e.prev=2,e.next=5,t.$gAuth.getAuthCode();case 5:e.sent,e.next=12;break;case 8:return e.prev=8,e.t0=e["catch"](2),"popup_closed_by_user"==e.t0.error&&(t.isInit=!0),e.abrupt("return");case 12:t.$router.replace(t.$route.query.redirect||"/home");case 13:case"end":return e.stop()}}),e,null,[[2,8]])})))()},checkConnection:function(){var t=this;setTimeout((function(){navigator.onLine?t.offline=!1:t.offline=!0,t.checkConnection()}),1e3)}}}),tt=Z,et=(a("feb6"),a("8212")),at=a("62ad"),it=a("a523"),rt=a("553a"),nt=a("6b53"),st=a("0fd9"),ot=a("8dd9"),ct=a("480e"),lt=Object(s["a"])(tt,Q,X,!1,null,"6950d368",null),dt=lt.exports;w()(lt,{VApp:B["a"],VAppBar:P["a"],VAvatar:et["a"],VBtn:C["a"],VCol:at["a"],VContainer:it["a"],VDivider:V["a"],VFooter:rt["a"],VImg:N["a"],VResponsive:nt["a"],VRow:st["a"],VSheet:ot["a"],VSpacer:q["a"],VThemeProvider:ct["a"]});var ut=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-app",[i("v-navigation-drawer",{attrs:{app:"",fixed:"",temporary:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[i("v-list",{attrs:{nav:"",dense:""}},[i("v-list-item-group",[i("v-list-item",[i("v-list-item-title",[t._v("Profile")])],1),i("v-list-item",[i("v-list-item-title",[t._v("My Project")])],1),i("v-list-item",[i("v-list-item-title",[t._v("Messages")])],1)],1)],1)],1),i("v-app-bar",{staticClass:"default-layout__navbar",attrs:{color:"grey lighten-5",dark:"",app:"",extended:"","extension-height":"3"}},[i("span",{staticClass:"hidden-sm-and-up"},[i("v-app-bar-nav-icon",{attrs:{color:"grey"},on:{click:function(e){e.stopPropagation(),t.sidebar=!t.sidebar}}})],1),i("div",{staticClass:"d-flex align-center"},[i("v-img",{staticClass:"shrink mr-2",attrs:{alt:"YNOTCOLLAB Logo",contain:"",src:a("0dec"),transition:"scale-transition",width:"230"}})],1),i("v-spacer"),i("span",{staticClass:"hidden-xs-only"},[i("v-btn",{attrs:{to:"/profile",color:"grey",text:""}},[t._v("Profile")]),i("v-btn",{attrs:{color:"grey",text:""}},[t._v("Project")]),i("v-btn",{attrs:{to:"/chat",color:"grey",text:""}},[t._v("Messages")])],1)],1),i("v-main",[i("v-card")],1)],1)],1)},vt=[],pt={},ft=pt,mt=Object(s["a"])(ft,ut,vt,!1,null,"77a695b2",null),gt=mt.exports;w()(mt,{VApp:B["a"],VAppBar:P["a"],VAppBarNavIcon:$["a"],VBtn:C["a"],VCard:E["a"],VImg:N["a"],VList:R["a"],VListItem:D["a"],VListItemGroup:U["a"],VListItemTitle:z["c"],VMain:Y["a"],VNavigationDrawer:G["a"],VSpacer:q["a"]});var ht=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},bt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[t._v("chat")])])}],xt={},_t=xt,yt=Object(s["a"])(_t,ht,bt,!1,null,"9808306c",null),wt=yt.exports;i["default"].use(u["a"]);var Ct=[{path:"/home",name:"Home",component:W},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/",name:"Login",component:dt},{path:"/profile",name:"Profile",component:gt},{path:"/chat",name:"Chat",component:wt}],kt=new u["a"]({mode:"history",base:"/",routes:Ct}),Vt=kt,jt=a("f309");i["default"].use(jt["a"]);var Ot=new jt["a"]({}),It=a("c9bf"),Lt=(a("d81d"),a("b0c0"),a("5c96")),At=a("fcff"),Tt=a.n(At),St=a("4897"),Bt=a.n(St),Pt=(a("0fae"),[Lt["Button"],Lt["ButtonGroup"],Lt["Row"]]),$t=function t(e){t.installed||(Bt.a.use(Tt.a),Pt.map((function(t){e.component(t.name,t)})),e.use(Lt["Loading"].directive),e.prototype.$msgbox=Lt["MessageBox"],e.prototype.$alert=Lt["MessageBox"].alert,e.prototype.$prompt=Lt["MessageBox"].prompt,e.prototype.$confirm=Lt["MessageBox"].confirm,e.prototype.$message=Lt["Message"],e.prototype.$loading=Lt["Loading"].service,e.prototype.$notify=Lt["Notification"])},Et={install:$t};i["default"].config.productionTip=!1,i["default"].use(Et);var Mt={clientId:"102213092219-df87d64b0gfcch43bkb02pi3s9g3j7do.apps.googleusercontent.com",scope:"profile email",prompt:"select_account"};i["default"].use(It["a"],Mt),new i["default"]({router:Vt,vuetify:Ot,render:function(t){return t(l)}}).$mount("#app")},"5ced":function(t,e,a){},"8b63":function(t,e,a){},"8f3d":function(t,e,a){t.exports=a.p+"img/Dominik.54867371.jpg"},"940c":function(t,e,a){t.exports=a.p+"img/Romina.69a4053e.png"},cccb:function(t,e,a){"use strict";a("5ced")},feb6:function(t,e,a){"use strict";a("8b63")}});