(function(t){function e(e){for(var r,s,o=e[0],c=e[1],l=e[2],u=0,p=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},i=[];function s(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"521120d5"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,a[1](l)}n[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"048b":function(t,e,a){t.exports=a.p+"img/Salem.0c4ba93c.png"},"0892":function(t,e,a){},"0dec":function(t,e,a){t.exports=a.p+"img/Logo-gradient.ee80c30b.svg"},"204c":function(t,e,a){t.exports=a.p+"img/Kathrin.e47746b9.png"},3830:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}}),a("router-view")],1)},i=[],s=a("2877"),o={},c=Object(s["a"])(o,n,i,!1,null,null,null),l=c.exports,u=a("9483");Object(u["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("b0c0"),a("d3b7");var d=a("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg"},[r("v-app",{attrs:{id:"inspire"}},[r("v-navigation-drawer",{attrs:{app:"",fixed:"",temporary:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item-group",[r("v-list-item",[r("v-list-item-title",[t._v("Profile")])],1),r("v-list-item",[r("v-list-item-title",[t._v("Sign Up")])],1),r("v-list-item",[r("v-list-item-title",[t._v("Messages")])],1)],1)],1)],1),r("v-app-bar",{staticClass:"default-layout__navbar",attrs:{color:"grey lighten-5",app:"",extended:"","extension-height":"3"}},[r("span",{staticClass:"hidden-sm-and-up"},[r("v-app-bar-nav-icon",{attrs:{color:"grey"},on:{click:function(e){e.stopPropagation(),t.sidebar=!t.sidebar}}})],1),r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"YNOTCOLLAB Logo",contain:"",src:a("0dec"),transition:"scale-transition",width:"230"}})],1),r("v-spacer"),r("span",{staticClass:"hidden-xs-only"},[r("v-btn",{attrs:{to:"/profile",color:"grey",text:""}},[t._v("Profile")]),r("v-btn",{attrs:{color:"grey",text:""}},[t._v("Sign Up")]),r("v-btn",{attrs:{to:"/chat",color:"grey",text:""}},[t._v("Messages")])],1),r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"pink accent-4",dark:"",icon:""}},"v-btn",n,!1),a),[r("v-icon",[t._v("mdi-filter")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"pink darken-3"}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1),r("v-toolbar-title",[t._v("Filter")]),r("v-spacer"),r("v-toolbar-items",[r("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" SAVE ")])],1)],1),r("v-list",[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[t._v("Content filtering")]),r("v-list-item-subtitle",[t._v("Set the content filtering level to restrict apps that can be downloaded")])],1)],1),r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[t._v("Password")]),r("v-list-item-subtitle",[t._v("Require password for purchase or use password to restrict purchase")])],1)],1)],1)],1)],1)],1),r("v-main",[1==t.switch1?r("v-switch",{staticClass:"mr-10",staticStyle:{float:"right"},attrs:{color:"pink darken-1",label:t.label},model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}}):r("v-switch",{staticClass:"mr-10",staticStyle:{float:"right"},attrs:{color:"pink darken-1",label:"Users"},model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}}),r("SwipeCards",{attrs:{testingcards:t.projects}})],1)],1)],1)},v=[],g=(a("96cf"),a("1da1")),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"container"},[t.current?a("div",{staticClass:"fixed fixed--center",class:{transition:t.isVisible},staticStyle:{"z-index":"3"}},[t.isVisible?a("Vue2InteractDraggable",{staticClass:"rounded-borders card card--one",attrs:{"interact-out-of-sight-x-coordinate":500,"interact-max-rotation":15,"interact-x-threshold":200,"interact-y-threshold":200,"interact-event-bus-events":t.interactEventBus,"interact-block-drag-down":""},on:{draggedRight:function(e){return t.emitAndNext("match")},draggedLeft:function(e){return t.emitAndNext("reject")},draggedUp:function(e){return t.emitAndNext("skip")}}},[a("div",{staticStyle:{height:"100%"}},[a("div",{staticClass:"text"},[a("v-card-title",{attrs:{"primary-title":""}},[t._v(" "+t._s(t.current.p_name)+" ")]),a("v-card-title",{staticClass:"subtitle-1"},[t._v(" Requirements: ")]),a("v-card-text",[t._v(" "+t._s(t.current.p_zip_code)+" ")]),a("v-divider"),a("v-card-title",{staticClass:"subtitle-1"},[t._v(" Short description: ")]),a("v-card-text",[t._v(" "+t._s(t.current.p_short_description)+" ")]),a("v-card-actions",[a("v-btn",{style:{left:"50%",transform:"translateX(-50%)"},attrs:{absolute:"",bottom:"",color:"purple",outlined:"",width:"75%",to:"/detail/"+t.current.p_projectid}},[t._v("KNOW MORE")])],1)],1)])]):t._e()],1):t._e(),t.next?a("div",{staticClass:"rounded-borders card card--two fixed fixed--center",staticStyle:{"z-index":"2"}},[a("div",{staticStyle:{height:"100%"}},[a("div",{staticClass:"text"},[a("v-card-title",{attrs:{"primary-title":""}},[t._v(" "+t._s(t.next.p_name)+" ")]),a("v-card-title",{staticClass:"subtitle-1"},[t._v(" Requirements: ")]),a("v-card-text",[t._v(" "+t._s(t.next.p_zip_code)+" ")]),a("v-divider"),a("v-card-title",{staticClass:"subtitle-1"},[t._v(" Short description: ")]),a("v-card-text",[t._v(" "+t._s(t.next.p_short_description)+" ")]),a("v-card-actions",[a("v-btn",{style:{left:"50%",transform:"translateX(-50%)"},attrs:{absolute:"",bottom:"",color:"purple",outlined:"",width:"75%",to:"/detail/"+t.next.p_projectid}},[t._v("KNOW MORE")])],1)],1)])]):t._e(),a("div",{staticClass:"footer fixed"},[a("v-btn",{staticClass:"mr-10",attrs:{icon:"",color:"purple"},on:{click:t.reject}},[a("v-icon",[t._v("mdi-heart-off")])],1),a("v-btn",{staticClass:"mr-10",attrs:{icon:"",color:"purple"},on:{click:t.skip}},[a("v-icon",[t._v("mdi-debug-step-over")])],1),a("v-btn",{attrs:{icon:"",color:"purple"},on:{click:t.match}},[a("v-icon",[t._v("mdi-heart")])],1)],1)])},f=[],h=a("66b6"),b={MATCH:"match",SKIP:"skip",REJECT:"reject"},x={name:"Swipeabletestingcards",components:{Vue2InteractDraggable:h["Vue2InteractDraggable"]},data:function(){return{isVisible:!0,index:0,interactEventBus:{draggedRight:b.MATCH,draggedLeft:b.REJECT,draggedUp:b.SKIP}}},computed:{current:function(){return this.testingcards[this.index]},next:function(){return this.testingcards[this.index+1]}},methods:{match:function(){h["InteractEventBus"].$emit(b.MATCH),console.log("match")},reject:function(){h["InteractEventBus"].$emit(b.REJECT),console.log("rejected")},skip:function(){h["InteractEventBus"].$emit(b.SKIP),console.log("skip")},emitAndNext:function(t){var e=this;this.$emit(t,this.index),setTimeout((function(){return e.isVisible=!1}),200),setTimeout((function(){e.index++,e.isVisible=!0}),200)}},props:{testingcards:{type:Object}}},_=x,w=(a("a9f9"),a("6544")),y=a.n(w),C=a("8336"),k=a("99d9"),V=a("ce7e"),I=a("132d"),j=Object(s["a"])(_,m,f,!1,null,"24e78154",null),S=j.exports;y()(j,{VBtn:C["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:k["c"],VDivider:V["a"],VIcon:I["a"]});var L=a("bc3a"),O=a.n(L),A={data:function(){return{sidebar:!1,drawer:null,icons:["mdi-instagram"],projects:[],users:[],dialog:!1,switch1:!0,label:"Projects",error:"noerror"}},components:{SwipeCards:S},methods:{getUsers:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O()({url:"http://127.0.0.1:3001/users",method:"get"});case 3:a=e.sent,t.users=a.data,e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0),t.error=e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getProjects:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O()({url:"http://127.0.0.1:3001/projects",method:"get"});case 3:a=e.sent,t.projects=a.data.data,console.log(t.projects),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),t.error=e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},created:function(){this.getUsers(),this.getProjects()}},T=A,$=(a("cccb"),a("7496")),B=a("40dc"),N=a("5bc1"),E=a("b0af"),P=a("169a"),R=a("adda"),M=a("8860"),U=a("da13"),D=a("5d23"),q=a("1baa"),z=a("f6c4"),G=a("f774"),F=a("2fa4"),J=a("b73d"),Y=a("71d9"),K=a("2a7f"),H=Object(s["a"])(T,p,v,!1,null,null,null),W=H.exports;y()(H,{VApp:$["a"],VAppBar:B["a"],VAppBarNavIcon:N["a"],VBtn:C["a"],VCard:E["a"],VDialog:P["a"],VIcon:I["a"],VImg:R["a"],VList:M["a"],VListItem:U["a"],VListItemContent:D["a"],VListItemGroup:q["a"],VListItemSubtitle:D["b"],VListItemTitle:D["c"],VMain:z["a"],VNavigationDrawer:G["a"],VSpacer:F["a"],VSwitch:J["a"],VToolbar:Y["a"],VToolbarItems:K["a"],VToolbarTitle:K["b"]});var X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"bg"},[r("v-app",{attrs:{id:"inspire"}},[r("v-app-bar",{staticClass:"default-layout__navbar",attrs:{color:"grey lighten-5",dark:"",app:"",extended:"","extension-height":"3"}},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"YNOTCOLLAB Logo",contain:"",src:a("0dec"),transition:"scale-transition",width:"230"}})],1),r("v-spacer"),r("v-avatar",{staticClass:" mr-7",attrs:{size:"44"}},[r("v-img")],1)],1),r("section",{attrs:{id:"hero"}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-img",{attrs:{"min-height":"calc(100vh - "+t.$vuetify.application.top+"px)",src:"/img/teamwork.jpg",gradient:"to top right, rgba(48,39,39,.33), rgba(91,37,82,.7)"}},[r("v-theme-provider",{attrs:{dark:""}},[r("v-container",{attrs:{"fill-height":""}},[r("v-row",{staticClass:"white--text mx-auto",attrs:{align:"center",justify:"center"}},[r("v-col",{staticClass:"white--text text-center",attrs:{cols:"12",tag:"h1"}},[r("span",{staticClass:"font-weight-light",class:[t.$vuetify.breakpoint.smAndDown?"display-1":"display-2"]},[t._v(" WELCOME TO ")]),r("br"),r("span",{staticClass:"font-weight-black",class:[t.$vuetify.breakpoint.smAndDown?"display-3":"display-4"]},[t._v(" YNOTCOLLAB? ")])]),r("v-btn",{staticClass:"align-self-end mr-2",attrs:{outlined:""},on:{click:function(e){return t.$vuetify.goTo("#log-in")}}},[r("span",[t._v("LogIn")])]),r("v-btn",{staticClass:"align-self-end",attrs:{outlined:""},on:{click:function(e){return t.$vuetify.goTo("#about-us")}}},[r("span",[t._v("About Us")])])],1)],1)],1)],1)],1)],1),r("section",{attrs:{id:"about-us"}},[r("div",{staticClass:"py-12"}),r("v-container",{staticClass:"text-center"},[r("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("ABOUT US")]),r("v-responsive",{staticClass:"mx-auto mb-8",attrs:{width:"56"}},[r("v-divider",{staticClass:"mb-1"}),r("v-divider")],1),r("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8",attrs:{"max-width":"720"}},[t._v(" YNot is an innovative project made by a team of young and ambitious students of the HTL Wien West. The main idea of the project is to make it easier and faster for interested people in the IT niche to connect with other like-minded people. Our team is currently working on both the front- and the backend of the project. You can follow us on our social media for further information and updates. ")]),r("v-avatar",{staticClass:"elevation-12 mb-12",attrs:{size:"128"}},[r("v-img",{attrs:{src:a("940c")}})],1),r("v-avatar",{staticClass:"elevation-12 mb-12",attrs:{size:"128"}},[r("v-img",{attrs:{src:a("8f3d")}})],1),r("v-avatar",{staticClass:"elevation-12 mb-12",attrs:{size:"128"}},[r("v-img",{attrs:{src:a("204c")}})],1),r("v-avatar",{staticClass:"elevation-12 mb-12",attrs:{size:"128"}},[r("v-img",{attrs:{src:a("048b")}})],1),r("v-row")],1)],1),r("section",{attrs:{id:"log-in"}},[r("div",{staticClass:"py-12"}),r("v-sheet",{attrs:{color:"#333333",tile:""}},[r("v-container",{staticClass:"text-center",attrs:{id:"signinup-form"}},[r("h2",{staticClass:"display-2 font-weight-bold mb-3",staticStyle:{color:"white"}},[t._v(" LOG IN ")]),r("v-responsive",{staticClass:"mx-auto mb-8",attrs:{width:"56"}},[r("v-divider",{staticClass:"mb-1"}),r("v-divider")],1),r("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"8"}},[r("br"),r("br"),r("v-btn",{ref:"signinBtn",staticClass:"loginBtn w-full my-1 bg-black disabled:bg-opacity-50 hover:bg-opacity-50 text-white py-4 px-4 rounded-md mt-20",attrs:{disabled:!t.isInit},on:{click:t.handleGoogle}},[t.isInit?r("span",[t._v("Continue with Google")]):r("span",[t._v("Loading...")])])],1)],1)],1),r("div",{staticClass:"py-12"})],1)],1),r("v-footer",{staticClass:"justify-center",attrs:{color:"#292929",height:"100"}},[r("div",{staticClass:"title font-weight-light grey--text text--lighten-1 text-center"},[t._v(" © "+t._s((new Date).getFullYear())+" — Vuetify, LLC — YNOTCOLLAB? ")])])],1)],1)])},Q=[],Z=(a("ac1f"),a("5319"),{data:function(){return{step:1,profile:[],disable:!0,isInit:!1,isSignIn:!1,username:"",mode:"login"}},created:function(){this.checkConnection();var t=this,e=setInterval((function(){t.isInit=t.$gAuth.isInit,t.isInit&&clearInterval(e)}),1e3)},methods:{handleGoogle:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var a,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isInit=!1,e.prev=1,e.next=4,t.$gAuth.getAuthCode();case 4:return authCode=e.sent,e.next=7,t.$gAuth.signIn();case 7:if(a=e.sent,a){e.next=10;break}return e.abrupt("return",null);case 10:r=gapi.auth2.getAuthInstance(),r.isSignedIn.get()&&(n=r.currentUser.get().getBasicProfile(),console.log("ID: "+n.getId()),console.log("Full Name: "+n.getName()),console.log("Given Name: "+n.getGivenName()),console.log("Family Name: "+n.getFamilyName()),console.log("Image URL: "+n.getImageUrl()),console.log("Email: "+n.getEmail()),t.username=n.getName()),t.isSignIn=t.$gAuth.isAuthorized,e.next=19;break;case 15:return e.prev=15,e.t0=e["catch"](1),"popup_closed_by_user"==e.t0.error&&(t.isInit=!0),e.abrupt("return");case 19:t.$store.dispatch("setUser",n),t.$router.replace(t.$route.query.redirect||"/home"),console.log(n);case 22:case"end":return e.stop()}}),e,null,[[1,15]])})))()},checkConnection:function(){var t=this;setTimeout((function(){navigator.onLine?t.offline=!1:t.offline=!0,t.checkConnection()}),1e3)}}}),tt=Z,et=(a("f2d5"),a("8212")),at=a("62ad"),rt=a("a523"),nt=a("553a"),it=a("6b53"),st=a("0fd9"),ot=a("8dd9"),ct=a("480e"),lt=Object(s["a"])(tt,X,Q,!1,null,"3f7ef2c4",null),ut=lt.exports;y()(lt,{VApp:$["a"],VAppBar:B["a"],VAvatar:et["a"],VBtn:C["a"],VCol:at["a"],VContainer:rt["a"],VDivider:V["a"],VFooter:nt["a"],VImg:R["a"],VResponsive:it["a"],VRow:st["a"],VSheet:ot["a"],VSpacer:F["a"],VThemeProvider:ct["a"]});var dt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-app",[r("v-navigation-drawer",{attrs:{app:"",fixed:"",temporary:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item-group",[r("v-list-item",[r("v-list-item-title",[t._v("Profile")])],1),r("v-list-item",[r("v-list-item-title",[t._v("Sign Up")])],1),r("v-list-item",[r("v-list-item-title",[t._v("Messages")])],1)],1)],1)],1),r("v-app-bar",{staticClass:"default-layout__navbar",attrs:{color:"grey lighten-5",dark:"",app:"",extended:"","extension-height":"3"}},[r("span",{staticClass:"hidden-sm-and-up"},[r("v-app-bar-nav-icon",{attrs:{color:"grey"},on:{click:function(e){e.stopPropagation(),t.sidebar=!t.sidebar}}})],1),r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"YNOTCOLLAB Logo",contain:"",src:a("0dec"),transition:"scale-transition",width:"230"}})],1),r("v-spacer"),r("span",{staticClass:"hidden-xs-only"},[r("v-btn",{attrs:{to:"/profile",color:"grey",text:""}},[t._v("Profile")]),r("v-btn",{attrs:{color:"grey",text:""}},[t._v("Sign Up")]),r("v-btn",{attrs:{to:"/chat",color:"grey",text:""}},[t._v("Messages")])],1)],1),r("v-main",[r("h1",[t._v(t._s(t.$store.state.user.name))])])],1)],1)},pt=[],vt={data:function(){return{sidebar:!1}}},gt=vt,mt=Object(s["a"])(gt,dt,pt,!1,null,"3a042d5c",null),ft=mt.exports;y()(mt,{VApp:$["a"],VAppBar:B["a"],VAppBarNavIcon:N["a"],VBtn:C["a"],VImg:R["a"],VList:M["a"],VListItem:U["a"],VListItemGroup:q["a"],VListItemTitle:D["c"],VMain:z["a"],VNavigationDrawer:G["a"],VSpacer:F["a"]});var ht=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},bt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[t._v("chat")])])}],xt={},_t=xt,wt=Object(s["a"])(_t,ht,bt,!1,null,"9808306c",null),yt=wt.exports,Ct=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-app",[r("v-navigation-drawer",{attrs:{app:"",fixed:"",temporary:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item-group",[r("v-list-item",[r("v-list-item-title",[t._v("Profile")])],1),r("v-list-item",[r("v-list-item-title",[t._v("Sign Up")])],1),r("v-list-item",[r("v-list-item-title",[t._v("Messages")])],1)],1)],1)],1),r("v-app-bar",{staticClass:"default-layout__navbar",attrs:{color:"grey lighten-5",dark:"",app:"",extended:"","extension-height":"3"}},[r("span",{staticClass:"hidden-sm-and-up"},[r("v-app-bar-nav-icon",{attrs:{color:"grey"},on:{click:function(e){e.stopPropagation(),t.sidebar=!t.sidebar}}})],1),r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"YNOTCOLLAB Logo",contain:"",src:a("0dec"),transition:"scale-transition",width:"230"}})],1),r("v-spacer"),r("span",{staticClass:"hidden-xs-only"},[r("v-btn",{attrs:{to:"/profile",color:"grey",text:""}},[t._v("Profile")]),r("v-btn",{attrs:{color:"grey",text:""}},[t._v("Sign Up")]),r("v-btn",{attrs:{to:"/chat",color:"grey",text:""}},[t._v("Messages")])],1)],1),r("v-main",[r("h1",[t._v(t._s(t.projects.p_name))])])],1)],1)},kt=[],Vt={props:{id:{type:String}},data:function(){return{projects:[],sidebar:!1}},created:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O()("http://127.0.0.1:3001/projects/".concat(t.id));case 2:a=e.sent,t.projects=a.data.data,console.log(t.projects),t.$store.commit("increment"),console.log(t.$store.state.count);case 7:case"end":return e.stop()}}),e)})))()}},It=Vt,jt=Object(s["a"])(It,Ct,kt,!1,null,"398cf237",null),St=jt.exports;y()(jt,{VApp:$["a"],VAppBar:B["a"],VAppBarNavIcon:N["a"],VBtn:C["a"],VImg:R["a"],VList:M["a"],VListItem:U["a"],VListItemGroup:q["a"],VListItemTitle:D["c"],VMain:z["a"],VNavigationDrawer:G["a"],VSpacer:F["a"]});var Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex items-center justify-center"},[a("p",{staticClass:"text-3xl text-center"},[t._v(t._s(t.$t("resFromAPI.loading")))])])},Ot=[],At={components:{},created:function(){this.callAPI()},methods:{callAPI:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("http://localhost:3001/user/getuser/".concat(t.$route.query.id));case 2:a=e.sent,console.log("API "+a.data),t.$store.dispatch("setToken",{aT:t.$route.query.aT,rT:t.$route.query.rT,userId:t.$route.query.id}),t.$store.dispatch("setUser",a.data),t.$router.push("/home");case 7:case"end":return e.stop()}}),e)})))()}}},Tt=At,$t=Object(s["a"])(Tt,Lt,Ot,!1,null,"41e5a5b3",null),Bt=$t.exports,Nt=a("2f62");r["default"].use(Nt["a"]);var Et=new Nt["a"].Store({state:{user:JSON.parse(window.localStorage.getItem("user")),tokens:JSON.parse(window.localStorage.getItem("tokens"))},mutations:{setUser:function(t,e){this.state.user=e,window.localStorage.setItem("user",JSON.stringify(e))},setLogout:function(){this.state.user=void 0,window.localStorage.removeItem("user"),window.localStorage.removeItem("tokens")},setToken:function(t,e){this.state.tokens=e,window.localStorage.setItem("tokens",JSON.stringify(e))}},actions:{setUser:function(t,e){t.commit("setUser",e)},logout:function(t){t.commit("setLogout")},setToken:function(t,e){t.commit("setToken",e)}},modules:{}});r["default"].use(d["a"]);var Pt=[{path:"/home",name:"Home",component:W},{path:"/resAuth",name:"ResAuth",component:Bt},{path:"/detail/:id",name:"Detail",component:St,props:!0},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/",name:"Login",component:ut},{path:"/profile",name:"Profile",component:ft},{path:"/chat",name:"Chat",component:yt}],Rt=new d["a"]({mode:"history",base:"/",routes:Pt,scrollBehavior:function(t){if(t.hash)return{selector:t.hash,behavior:"smooth"}}});Rt.beforeEach((function(t,e,a){"Login"===t.name||"ResAuth"===t.name||Et.state.user?a():(console.log(t),a({name:"Login",query:{redirect:t.path}}))}));var Mt=Rt,Ut=a("f309");r["default"].use(Ut["a"]);var Dt=new Ut["a"]({}),qt=a("c9bf"),zt=(a("d81d"),a("5c96")),Gt=a("fcff"),Ft=a.n(Gt),Jt=a("4897"),Yt=a.n(Jt),Kt=(a("0fae"),[zt["Button"],zt["ButtonGroup"],zt["Row"]]),Ht=function t(e){t.installed||(Yt.a.use(Ft.a),Kt.map((function(t){e.component(t.name,t)})),e.use(zt["Loading"].directive),e.prototype.$msgbox=zt["MessageBox"],e.prototype.$alert=zt["MessageBox"].alert,e.prototype.$prompt=zt["MessageBox"].prompt,e.prototype.$confirm=zt["MessageBox"].confirm,e.prototype.$message=zt["Message"],e.prototype.$loading=zt["Loading"].service,e.prototype.$notify=zt["Notification"])},Wt={install:Ht};r["default"].config.productionTip=!1,r["default"].use(Wt);var Xt={clientId:"102213092219-df87d64b0gfcch43bkb02pi3s9g3j7do.apps.googleusercontent.com",scope:"profile email",prompt:"select_account"};r["default"].use(qt["a"],Xt),new r["default"]({router:Mt,vuetify:Dt,store:Et,render:function(t){return t(l)}}).$mount("#app")},"5ced":function(t,e,a){},"8f3d":function(t,e,a){t.exports=a.p+"img/Dominik.54867371.jpg"},"940c":function(t,e,a){t.exports=a.p+"img/Romina.69a4053e.png"},a9f9:function(t,e,a){"use strict";a("0892")},cccb:function(t,e,a){"use strict";a("5ced")},f2d5:function(t,e,a){"use strict";a("3830")}});