(function(t){function e(e){for(var i,o,c=e[0],l=e[1],d=e[2],u=e[3]||[],p=0,m=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);v&&v(e),n.push.apply(n,u);while(m.length)m.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,l=1;l<a.length;l++){var d=a[l];0!==r[d]&&(i=!1)}i&&(s.splice(e--,1),t=c(c.s=a[0]))}return 0===s.length&&(n.forEach((function(t){if(void 0===r[t]){r[t]=null;var e=document.createElement("link");c.nc&&e.setAttribute("nonce",c.nc),e.rel="prefetch",e.as="script",e.href=o(t),document.head.appendChild(e)}})),n.length=0),t}var i={},r={app:0},s=[],n=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0d6d35":"55b35f34"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,i){a=r[t]=[e,i]}));e.push(a[2]=i);var s,n=document.createElement("script");n.charset="utf-8",n.timeout=120,c.nc&&n.setAttribute("nonce",c.nc),n.src=o(t);var l=new Error;s=function(e){n.onerror=n.onload=null,clearTimeout(d);var a=r[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",l.name="ChunkLoadError",l.type=i,l.request=s,a[1](l)}r[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:n})}),12e4);n.onerror=n.onload=s,document.head.appendChild(n)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(a,i,function(e){return t[e]}.bind(null,i));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var v=d,p=function(){return s.push([0,"chunk-vendors"]),a()}();e([[],{},0,["chunk-2d0d6d35"]])})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"048b":function(t,e,a){t.exports=a.p+"img/Salem.0c4ba93c.png"},"0dec":function(t,e,a){t.exports=a.p+"img/Logo-gradient.ee80c30b.svg"},"204c":function(t,e,a){t.exports=a.p+"img/Kathrin.e47746b9.png"},"267f":function(t,e,a){"use strict";a("8ae3")},"53cc":function(t,e,a){"use strict";a("7a63")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("div",{attrs:{id:"nav"}}),a("router-view")],1)},s=[],n=(a("034f"),a("2877")),o={},c=Object(n["a"])(o,r,s,!1,null,null,null),l=c.exports,d=a("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d3b7");var u=a("8c4f"),v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("v-app",{attrs:{id:"inspire"}},[i("v-navigation-drawer",{attrs:{app:"",fixed:"",temporary:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[i("v-list",{attrs:{nav:"",dense:""}},[i("v-list-item-group",[i("v-list-item",[i("v-list-item-title",[t._v("Profile")])],1),i("v-list-item",[i("v-list-item-title",[t._v("Messages")])],1)],1)],1)],1),i("v-app-bar",{staticClass:"default-layout__navbar",attrs:{color:"grey lighten-5",app:"",extended:"","extension-height":"3"}},[i("span",{staticClass:"hidden-sm-and-up"},[i("v-app-bar-nav-icon",{attrs:{color:"grey"},on:{click:function(e){e.stopPropagation(),t.sidebar=!t.sidebar}}})],1),i("div",{staticClass:"d-flex align-center"},[i("v-img",{staticClass:"shrink mr-2",attrs:{alt:"YNOTCOLLAB Logo",contain:"",src:a("0dec"),transition:"scale-transition",width:"230"}})],1),i("v-spacer"),i("span",{staticClass:"hidden-xs-only"},[i("v-btn",{attrs:{to:"/profile",color:"grey",text:""}},[t._v("Profile")]),i("v-btn",{attrs:{to:"/chat",color:"grey",text:""}},[t._v("Messages")])],1),i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"pink accent-4",dark:"",icon:""}},"v-btn",r,!1),a),[i("v-icon",[t._v("mdi-filter")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-toolbar",{attrs:{dark:"",color:"pink darken-3"}},[i("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[i("v-icon",[t._v("mdi-close")])],1),i("v-toolbar-title",[t._v("Filter")]),i("v-spacer"),i("v-toolbar-items",[i("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" SAVE ")])],1)],1),[i("v-container",{attrs:{fluid:""}},[i("v-subheader",[t._v("Search by User Ability")]),i("v-row",{staticClass:"ml-5"},[i("v-col",[i("v-checkbox",{attrs:{label:"CSS",value:"CSS"},model:{value:t.u_abilities,callback:function(e){t.u_abilities=e},expression:"u_abilities"}})],1),i("v-col",[i("v-checkbox",{attrs:{label:"HTML",value:"HTML"},model:{value:t.u_abilities,callback:function(e){t.u_abilities=e},expression:"u_abilities"}})],1),i("v-col",[i("v-checkbox",{attrs:{label:"VUE",value:"VUE"},model:{value:t.u_abilities,callback:function(e){t.u_abilities=e},expression:"u_abilities"}})],1),i("v-col",[i("v-checkbox",{attrs:{label:"MYSQL",value:"MYSQL"},model:{value:t.u_abilities,callback:function(e){t.u_abilities=e},expression:"u_abilities"}})],1)],1)],1)]],2)],1)],1),i("v-main",[1==t.switch1?i("v-switch",{staticClass:"mr-10",staticStyle:{float:"right"},attrs:{color:"pink darken-1",label:t.label},model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}}):i("v-switch",{staticClass:"mr-10",staticStyle:{float:"right"},attrs:{color:"pink darken-1",label:"Users"},model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}}),i("SwipeCardsProjects",{directives:[{name:"show",rawName:"v-show",value:t.switch1,expression:"switch1"}],attrs:{testingcards:t.projects}}),0==t.switch1?i("SwipeCardsUsers",{attrs:{testingcards:t.users}}):t._e()],1)],1)],1)},p=[],m=(a("96cf"),a("1da1")),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"container"},[t.current?a("div",{staticClass:"fixed fixed--center",class:{transition:t.isVisible},staticStyle:{"z-index":"3"}},[t.isVisible?a("Vue2InteractDraggable",{staticClass:"rounded-borders card card--one",attrs:{"interact-out-of-sight-x-coordinate":500,"interact-max-rotation":15,"interact-x-threshold":200,"interact-y-threshold":200,"interact-event-bus-events":t.interactEventBus,"interact-block-drag-down":""},on:{draggedRight:function(e){return t.emitAndNext("match")},draggedLeft:function(e){return t.emitAndNext("reject")},draggedUp:function(e){return t.emitAndNext("skip")}}},[a("div",{staticStyle:{height:"100%"}},[a("div",{staticClass:"text"},[a("v-card-title",{attrs:{"primary-title":""}},[t._v(" "+t._s(t.current.p_name)+" ")]),a("v-card-title",{staticClass:"subtitle-1"},[t._v(" Coding languages required: ")]),a("v-card-text",{staticClass:"grey--text"},[t._v(" "+t._s(t.current.pl_name)+" ")]),a("v-divider"),a("v-card-title",{staticClass:"subtitle-1"},[t._v(" Short description: ")]),a("v-card-text",[t._v(" "+t._s(t.current.p_short_description)+" ")]),a("v-card-actions",[a("v-btn",{style:{left:"50%",transform:"translateX(-50%)"},attrs:{absolute:"",bottom:"",color:"purple",outlined:"",width:"75%",to:"/detailproject/"+t.current.p_projectid}},[t._v("KNOW MORE")])],1)],1)])]):t._e()],1):t._e(),t.next?a("div",{staticClass:"rounded-borders card card--two fixed fixed--center",staticStyle:{"z-index":"2"}},[a("div",{staticStyle:{height:"100%"}},[a("div",{staticClass:"text"},[a("v-card-title",{attrs:{"primary-title":""}},[t._v(" "+t._s(t.next.p_name)+" ")]),a("div",{staticClass:"py-12"}),a("v-card-title",{staticClass:"subtitle-1"},[t._v(" Coding languages required: ")]),a("v-card-text",{staticClass:"grey--text"},[t._v(" "+t._s(t.next.pl_name)+" ")]),a("v-divider"),a("v-card-title",{staticClass:"subtitle-1"},[t._v(" Short description: ")]),a("v-card-text",[t._v(" "+t._s(t.next.p_short_description)+" ")]),a("v-card-actions",[a("v-btn",{style:{left:"50%",transform:"translateX(-50%)"},attrs:{absolute:"",bottom:"",color:"purple",outlined:"",width:"75%",to:"/detailprojects/"+t.next.p_projectid}},[t._v("KNOW MORE")])],1)],1)])]):t._e(),a("div",{staticClass:"footer fixed"},[a("v-btn",{staticClass:"mr-10",attrs:{icon:"",color:"purple"},on:{click:t.reject}},[a("v-icon",[t._v("mdi-heart-off")])],1),a("v-btn",{staticClass:"mr-10",attrs:{icon:"",color:"purple"},on:{click:t.skip}},[a("v-icon",[t._v("mdi-debug-step-over")])],1),a("v-btn",{attrs:{icon:"",color:"purple"},on:{click:t.match}},[a("v-icon",[t._v("mdi-heart")])],1)],1)])},f=[],h=a("66b6"),b={MATCH:"match",SKIP:"skip",REJECT:"reject"},_={name:"Swipeabletestingcards",components:{Vue2InteractDraggable:h["Vue2InteractDraggable"]},data:function(){return{isVisible:!0,index:0,interactEventBus:{draggedRight:b.MATCH,draggedLeft:b.REJECT,draggedUp:b.SKIP}}},computed:{current:function(){return this.testingcards[this.index]},next:function(){return this.testingcards[this.index+1]}},methods:{match:function(){h["InteractEventBus"].$emit(b.MATCH),console.log("match")},reject:function(){h["InteractEventBus"].$emit(b.REJECT),console.log("rejected")},skip:function(){h["InteractEventBus"].$emit(b.SKIP),console.log("skip")},emitAndNext:function(t){var e=this;this.$emit(t,this.index),setTimeout((function(){return e.isVisible=!1}),200),setTimeout((function(){e.index++,e.isVisible=!0}),200)}},props:{testingcards:{type:Object}}},x=_,C=(a("53cc"),a("6544")),y=a.n(C),w=a("8336"),k=a("99d9"),V=a("ce7e"),j=a("132d"),L=Object(n["a"])(x,g,f,!1,null,"eacbc8ba",null),S=L.exports;y()(L,{VBtn:w["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:k["c"],VDivider:V["a"],VIcon:j["a"]});var O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"container"},[t.current?a("div",{staticClass:"fixed fixed--center",class:{transition:t.isVisible},staticStyle:{"z-index":"3"}},[t.isVisible?a("Vue2InteractDraggable",{staticClass:"rounded-borders card card--one",attrs:{"interact-out-of-sight-x-coordinate":500,"interact-max-rotation":15,"interact-x-threshold":200,"interact-y-threshold":200,"interact-event-bus-events":t.interactEventBus,"interact-block-drag-down":""},on:{draggedRight:function(e){return t.emitAndNext("match")},draggedLeft:function(e){return t.emitAndNext("reject")},draggedUp:function(e){return t.emitAndNext("skip")}}},[a("div",{staticStyle:{height:"100%"}},[a("div",{staticClass:"text"},[a("v-card-title",{attrs:{"primary-title":""}},[t._v(" "+t._s(t.current.u_firstname)+" "+t._s(t.current.u_surename)+" ")]),a("v-card-title",{staticClass:"subtitle-1"},[t._v(" Coding languages: ")]),a("v-card-text",{staticClass:"grey--text"},[t._v(" "+t._s(t.current.pl_name)+" ")]),a("v-divider"),a("v-card-title",{staticClass:"subtitle-1"},[t._v(" Short introduction: ")]),a("v-card-text",[t._v(" "+t._s(t.current.u_about_me)+" ")]),a("v-card-actions",[a("v-btn",{style:{left:"50%",transform:"translateX(-50%)"},attrs:{absolute:"",bottom:"",color:"purple",outlined:"",width:"75%",to:"/detailuser/"+t.current.u_userid}},[t._v("KNOW MORE")])],1)],1)])]):t._e()],1):t._e(),t.next?a("div",{staticClass:"rounded-borders card card--two fixed fixed--center",staticStyle:{"z-index":"2"}},[a("div",{staticStyle:{height:"100%"}},[a("div",{staticClass:"text"},[a("v-card-title",{attrs:{"primary-title":""}},[t._v(" "+t._s(t.next.u_firstname)+" "+t._s(t.next.u_surename)+" ")]),a("v-card-title",{staticClass:"subtitle-1"},[t._v(" Coding languages: ")]),a("v-card-text",{staticClass:"grey--text"},[t._v(" "+t._s(t.next.pl_name)+" ")]),a("v-divider"),a("v-card-title",{staticClass:"subtitle-1"},[t._v(" Short description: ")]),a("v-card-text",[t._v(" "+t._s(t.next.u_about_me)+" ")]),a("v-card-actions",[a("v-btn",{style:{left:"50%",transform:"translateX(-50%)"},attrs:{absolute:"",bottom:"",color:"purple",outlined:"",width:"75%",to:"/detail/"+t.current.u_userid}},[t._v("KNOW MORE")])],1)],1)])]):t._e(),a("div",{staticClass:"footer fixed"},[a("v-btn",{staticClass:"mr-10",attrs:{icon:"",color:"purple"},on:{click:t.reject}},[a("v-icon",[t._v("mdi-heart-off")])],1),a("v-btn",{staticClass:"mr-10",attrs:{icon:"",color:"purple"},on:{click:t.skip}},[a("v-icon",[t._v("mdi-debug-step-over")])],1),a("v-btn",{attrs:{icon:"",color:"purple"},on:{click:t.match}},[a("v-icon",[t._v("mdi-heart")])],1)],1)])},I=[],T={MATCH:"match",SKIP:"skip",REJECT:"reject"},A={name:"Swipeabletestingcards",components:{Vue2InteractDraggable:h["Vue2InteractDraggable"]},data:function(){return{isVisible:!0,index:0,interactEventBus:{draggedRight:T.MATCH,draggedLeft:T.REJECT,draggedUp:T.SKIP}}},computed:{current:function(){return this.testingcards[this.index]},next:function(){return this.testingcards[this.index+1]}},methods:{match:function(){h["InteractEventBus"].$emit(T.MATCH),console.log("match")},reject:function(){h["InteractEventBus"].$emit(T.REJECT),console.log("rejected")},skip:function(){h["InteractEventBus"].$emit(T.SKIP),console.log("skip")},emitAndNext:function(t){var e=this;this.$emit(t,this.index),setTimeout((function(){return e.isVisible=!1}),200),setTimeout((function(){e.index++,e.isVisible=!0}),200)}},props:{testingcards:{type:Object}}},E=A,B=(a("754a"),Object(n["a"])(E,O,I,!1,null,"1e6a352e",null)),P=B.exports;y()(B,{VBtn:w["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:k["c"],VDivider:V["a"],VIcon:j["a"]});var N=a("bc3a"),R=a.n(N),M={data:function(){return{sidebar:!1,drawer:null,icons:["mdi-instagram"],projects:[],users:[],dialog:!1,switch1:!0,label:"Projects",error:"noerror",u_abilities:[]}},components:{SwipeCardsProjects:S,SwipeCardsUsers:P},methods:{getUsers:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R()({url:"http://127.0.0.1:3001/users",method:"get"});case 3:a=e.sent,t.users=a.data.data,console.log(t.users),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),t.error=e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getProjects:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R()({url:"http://127.0.0.1:3001/projects",method:"get"});case 3:a=e.sent,t.projects=a.data.data,console.log(t.projects),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),t.error=e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},created:function(){this.getUsers(),this.getProjects()},computed:{u_selected:function(){return this.users},p_selected:function(){return this.projects}}},$=M,D=(a("cccb"),a("7496")),U=a("40dc"),Y=a("5bc1"),H=a("b0af"),K=a("ac7c"),z=a("62ad"),J=a("a523"),W=a("169a"),F=a("adda"),G=a("8860"),X=a("da13"),q=a("1baa"),Q=a("5d23"),Z=a("f6c4"),tt=a("f774"),et=a("0fd9"),at=a("2fa4"),it=a("e0c7"),rt=a("b73d"),st=a("71d9"),nt=a("2a7f"),ot=Object(n["a"])($,v,p,!1,null,null,null),ct=ot.exports;y()(ot,{VApp:D["a"],VAppBar:U["a"],VAppBarNavIcon:Y["a"],VBtn:w["a"],VCard:H["a"],VCheckbox:K["a"],VCol:z["a"],VContainer:J["a"],VDialog:W["a"],VIcon:j["a"],VImg:F["a"],VList:G["a"],VListItem:X["a"],VListItemGroup:q["a"],VListItemTitle:Q["c"],VMain:Z["a"],VNavigationDrawer:tt["a"],VRow:et["a"],VSpacer:at["a"],VSubheader:it["a"],VSwitch:rt["a"],VToolbar:st["a"],VToolbarItems:nt["a"],VToolbarTitle:nt["b"]});var lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"app"},[i("v-app",{attrs:{id:"inspire"}},[i("v-app-bar",{staticClass:"default-layout__navbar",attrs:{color:"grey lighten-5",dark:"",app:"",extended:"","extension-height":"3"}},[i("div",{staticClass:"d-flex align-center"},[i("v-img",{staticClass:"shrink mr-2",attrs:{alt:"YNOTCOLLAB Logo",contain:"",src:a("0dec"),transition:"scale-transition",width:"230"}})],1)]),i("section",{attrs:{id:"hero"}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-img",{attrs:{"min-height":"calc(100vh - "+t.$vuetify.application.top+"px)",src:"/img/teamwork.jpg",gradient:"to top right, rgba(48,39,39,.33), rgba(91,37,82,.7)"}},[i("v-theme-provider",{attrs:{dark:""}},[i("v-container",{attrs:{"fill-height":""}},[i("v-row",{staticClass:"white--text mx-auto",attrs:{align:"center",justify:"center"}},[i("v-col",{staticClass:"white--text text-center",attrs:{cols:"12",tag:"h1"}},[i("span",{staticClass:"font-weight-light",class:[t.$vuetify.breakpoint.smAndDown?"display-1":"display-2"]},[t._v(" WELCOME TO ")]),i("br"),i("v-img",{style:{left:"50%",transform:"translateX(-50%)"},attrs:{src:a("8af4"),width:"55%"}})],1),i("v-btn",{staticClass:"align-self-end mr-2",attrs:{outlined:""},on:{click:function(e){return t.$vuetify.goTo("#log-in")}}},[i("span",[t._v("LogIn")])]),i("v-btn",{staticClass:"align-self-end",attrs:{outlined:""},on:{click:function(e){return t.$vuetify.goTo("#about-us")}}},[i("span",[t._v("About Us")])])],1)],1)],1)],1)],1)],1),i("section",{attrs:{id:"about-us"}},[i("div",{staticClass:"py-12"}),i("v-container",{staticClass:"text-center"},[i("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("ABOUT US")]),i("v-responsive",{staticClass:"mx-auto mb-8",attrs:{width:"56"}},[i("v-divider",{staticClass:"mb-1"}),i("v-divider")],1),i("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8",attrs:{"max-width":"720"}},[t._v(" YNot is an innovative project made by a team of young and ambitious students of the HTL Wien West. The main idea of the project is to make it easier and faster for interested people in the IT niche to connect with other like-minded people. Our team is currently working on both the front- and the backend of the project. You can follow us on our social media for further information and updates. ")]),i("v-avatar",{staticClass:"elevation-12 mb-12",attrs:{size:"128"}},[i("v-img",{attrs:{src:a("940c")}})],1),i("v-avatar",{staticClass:"elevation-12 mb-12",attrs:{size:"128"}},[i("v-img",{attrs:{src:a("8f3d")}})],1),i("v-avatar",{staticClass:"elevation-12 mb-12",attrs:{size:"128"}},[i("v-img",{attrs:{src:a("204c")}})],1),i("v-avatar",{staticClass:"elevation-12 mb-12",attrs:{size:"128"}},[i("v-img",{attrs:{src:a("048b")}})],1),i("v-row")],1)],1),i("section",{attrs:{id:"log-in"}},[i("div",{staticClass:"py-12"}),i("v-sheet",{attrs:{color:"#333333",tile:""}},[i("v-container",{staticClass:"text-center",attrs:{id:"signinup-form"}},[i("h2",{staticClass:"display-2 font-weight-bold mb-3 mt-3",staticStyle:{color:"white"}},[t._v(" LOG IN ")]),i("v-responsive",{staticClass:"mx-auto mb-8",attrs:{width:"56"}},[i("v-divider",{staticClass:"mb-1"}),i("v-divider")],1),i("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[i("v-col",{attrs:{cols:"12",sm:"8"}},[i("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[i("v-card",[i("v-card-title",{staticClass:"pink darken-3 justify-center white--text mb-4",attrs:{"primary-title":""}},[t._v(" Welcome back! ")]),i("v-card-text",[i("v-form",[i("v-text-field",{attrs:{label:"Username","prepend-icon":"mdi-account-outline",name:"username",type:"username",color:"pink darken-3"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),i("v-text-field",{attrs:{id:"password",label:"Password","prepend-icon":"mdi-lock-outline",name:"password",type:"password",color:"pink darken-3"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),i("p",{staticClass:"mt-4 text-center"},[t._v(" No account? "),i("a",{attrs:{href:"/register"}},[t._v("Register here!")])])],1),i("v-card-actions",[i("v-btn",{style:{left:"50%",transform:"translateX(-50%)"},attrs:{color:"purple",width:"50%",dark:""},on:{click:t.login}},[t._v("LOG IN")])],1)],1)],1)])],1)],1),i("div",{staticClass:"py-12"})],1)],1),i("v-footer",{staticClass:"justify-center",attrs:{color:"#292929",height:"100"}},[i("div",{staticClass:"title font-weight-light grey--text text--lighten-1 text-center"},[t._v(" © "+t._s((new Date).getFullYear())+" — Vuetify, LLC — YNOTCOLLAB? ")])])],1)],1)])},dt=[],ut=(a("b0c0"),{data:function(){return{username:"",password:""}},methods:{login:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R()({url:"/login",method:"post",data:{username:t.username,password:t.password}});case 3:a=e.sent,t.$router.push("/home"),console.log(a.data),localStorage.setItem("id",a.data.id),localStorage.setItem("name",a.data.name),console.log(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},checkConnection:function(){var t=this;setTimeout((function(){navigator.onLine?t.offline=!1:t.offline=!0,t.checkConnection()}),1e3)}}}),vt=ut,pt=(a("267f"),a("8212")),mt=a("553a"),gt=a("4bd4"),ft=a("6b53"),ht=a("8dd9"),bt=a("8654"),_t=a("480e"),xt=Object(n["a"])(vt,lt,dt,!1,null,"10448636",null),Ct=xt.exports;y()(xt,{VApp:D["a"],VAppBar:U["a"],VAvatar:pt["a"],VBtn:w["a"],VCard:H["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:k["c"],VCol:z["a"],VContainer:J["a"],VDivider:V["a"],VFooter:mt["a"],VForm:gt["a"],VImg:F["a"],VResponsive:ft["a"],VRow:et["a"],VSheet:ht["a"],VTextField:bt["a"],VThemeProvider:_t["a"]});var yt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bg"},[i("v-app",[i("v-navigation-drawer",{attrs:{app:"",fixed:"",temporary:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[i("v-list",{attrs:{nav:"",dense:""}},[i("v-list-item-group",[i("v-list-item",[i("v-list-item-title",[t._v("Profile")])],1),i("v-list-item",[i("v-list-item-title",[t._v("Messages")])],1)],1)],1)],1),i("v-app-bar",{staticClass:"default-layout__navbar",attrs:{color:"grey lighten-5",dark:"",app:"",extended:"","extension-height":"3"}},[i("span",{staticClass:"hidden-sm-and-up"},[i("v-app-bar-nav-icon",{attrs:{color:"grey"},on:{click:function(e){e.stopPropagation(),t.sidebar=!t.sidebar}}})],1),i("div",{staticClass:"d-flex align-center"},[i("v-img",{staticClass:"shrink mr-2",attrs:{alt:"YNOTCOLLAB Logo",contain:"",src:a("0dec"),transition:"scale-transition",width:"230"}})],1),i("v-spacer"),i("span",{staticClass:"hidden-xs-only"},[i("v-btn",{attrs:{to:"/profile",color:"grey",text:""}},[t._v("Profile")]),i("v-btn",{attrs:{to:"/chat",color:"grey",text:""}},[t._v("Messages")])],1)],1),i("h1",{staticClass:"text-center my-3"},[t._v(t._s(t.user.name)+"'s Account")]),i("div",{staticClass:"mx-auto d-block"},[i("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),i("router-link",{attrs:{to:"/logout"}},[t._v("Logout")])],1)],1)],1)},wt=[],kt={data:function(){return{sidebar:!1,user:{id:"",name:""}}},created:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.user.id=localStorage.getItem("id"),t.user.name=localStorage.getItem("name");case 2:case"end":return e.stop()}}),e)})))()}},Vt=kt,jt=Object(n["a"])(Vt,yt,wt,!1,null,"74590662",null),Lt=jt.exports;y()(jt,{VApp:D["a"],VAppBar:U["a"],VAppBarNavIcon:Y["a"],VBtn:w["a"],VImg:F["a"],VList:G["a"],VListItem:X["a"],VListItemGroup:q["a"],VListItemTitle:Q["c"],VNavigationDrawer:tt["a"],VSpacer:at["a"]});var St=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ot=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("p",[t._v("chat")])])}],It={},Tt=It,At=Object(n["a"])(Tt,St,Ot,!1,null,"9338cd66",null),Et=At.exports,Bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container d-flex flex-column min-vh-100"},[i("v-app",[i("v-navigation-drawer",{attrs:{app:"",fixed:"",temporary:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[i("v-list",{attrs:{nav:"",dense:""}},[i("v-list-item-group",[i("v-list-item",[i("v-list-item-title",[t._v("Profile")])],1),i("v-list-item",[i("v-list-item-title",[t._v("Messages")])],1)],1)],1)],1),i("v-app-bar",{staticClass:"default-layout__navbar",attrs:{color:"grey lighten-5",dark:"",app:"",extended:"","extension-height":"3"}},[i("span",{staticClass:"hidden-sm-and-up"},[i("v-app-bar-nav-icon",{attrs:{color:"grey"},on:{click:function(e){e.stopPropagation(),t.sidebar=!t.sidebar}}})],1),i("div",{staticClass:"d-flex align-center"},[i("v-img",{staticClass:"shrink mr-2",attrs:{alt:"YNOTCOLLAB Logo",contain:"",src:a("0dec"),transition:"scale-transition",width:"230"}})],1),i("v-spacer"),i("span",{staticClass:"hidden-xs-only"},[i("v-btn",{attrs:{to:"/profile",color:"grey",text:""}},[t._v("Profile")]),i("v-btn",{attrs:{to:"/chat",color:"grey",text:""}},[t._v("Messages")])],1)],1),i("v-main",{staticClass:"elevation-1",attrs:{height:"100%"}},[i("div",{staticClass:"col-8 d-flex flex-column justify-content-center "},[i("h1",[t._v(t._s(t.projects.p_name))]),i("v-divider"),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v("Programming languages required:")]),i("v-list-item-subtitle",{staticClass:"body-2 grey--text"},[t._v(t._s(t.projects.pl_name))])],1)],1),i("v-divider"),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v("Language:")]),i("v-list-item-subtitle",{staticClass:"body-2 grey--text"},[t._v(t._s(t.projects.p_language))])],1)],1),i("v-divider"),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v("Country:")]),i("v-list-item-subtitle",{staticClass:"body-2 grey--text"},[t._v(t._s(t.projects.p_country))])],1)],1),i("v-divider"),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v("Time Zone:")]),i("v-list-item-subtitle",{staticClass:"body-2 grey--text"},[t._v(t._s(t.projects.p_time_zone))])],1)],1),i("v-divider"),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v("Short description:")]),i("v-list-item-subtitle",{staticClass:"body-2 grey--text"},[t._v(t._s(t.projects.p_short_description))])],1)],1),i("v-divider"),i("v-list-item",[i("v-list-tile-action",[i("v-btn",{attrs:{to:"/home",dark:"",color:"purple"}},[t._v("Back")])],1)],1)],1)])],1)],1)},Pt=[],Nt={props:{id:{type:String}},data:function(){return{projects:[],sidebar:!1}},created:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R()("http://193.170.162.166:3001/projects/".concat(t.id));case 2:a=e.sent,t.projects=a.data.data,console.log(t.projects);case 5:case"end":return e.stop()}}),e)})))()}},Rt=Nt,Mt=Object(n["a"])(Rt,Bt,Pt,!1,null,"7dfeebf8",null),$t=Mt.exports;y()(Mt,{VApp:D["a"],VAppBar:U["a"],VAppBarNavIcon:Y["a"],VBtn:w["a"],VDivider:V["a"],VImg:F["a"],VList:G["a"],VListItem:X["a"],VListItemContent:Q["a"],VListItemGroup:q["a"],VListItemSubtitle:Q["b"],VListItemTitle:Q["c"],VMain:Z["a"],VNavigationDrawer:tt["a"],VSpacer:at["a"]});var Dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container d-flex flex-column min-vh-100"},[i("v-app",[i("v-navigation-drawer",{attrs:{app:"",fixed:"",temporary:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[i("v-list",{attrs:{nav:"",dense:""}},[i("v-list-item-group",[i("v-list-item",[i("v-list-item-title",[t._v("Profile")])],1),i("v-list-item",[i("v-list-item-title",[t._v("Messages")])],1)],1)],1)],1),i("v-app-bar",{staticClass:"default-layout__navbar",attrs:{color:"grey lighten-5",dark:"",app:"",extended:"","extension-height":"3"}},[i("span",{staticClass:"hidden-sm-and-up"},[i("v-app-bar-nav-icon",{attrs:{color:"grey"},on:{click:function(e){e.stopPropagation(),t.sidebar=!t.sidebar}}})],1),i("div",{staticClass:"d-flex align-center"},[i("v-img",{staticClass:"shrink mr-2",attrs:{alt:"YNOTCOLLAB Logo",contain:"",src:a("0dec"),transition:"scale-transition",width:"230"}})],1),i("v-spacer"),i("span",{staticClass:"hidden-xs-only"},[i("v-btn",{attrs:{to:"/profile",color:"grey",text:""}},[t._v("Profile")]),i("v-btn",{attrs:{to:"/chat",color:"grey",text:""}},[t._v("Messages")])],1)],1),i("v-main",{staticClass:"elevation-1",attrs:{height:"100%"}},[i("div",{staticClass:"col-8 d-flex flex-column justify-content-center",attrs:{"fill-height":""}},[i("h1",[t._v(t._s(t.users.u_firstname)+" "+t._s(t.users.u_surename))]),i("v-divider"),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v("Programming languages mastered:")]),i("v-list-item-subtitle",{staticClass:"body-2 grey--text"},[t._v(t._s(t.users.pl_name))])],1)],1),i("v-divider"),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v("Contact:")]),i("v-list-item-subtitle",{staticClass:"body-2 grey--text"},[t._v(t._s(t.users.u_email))])],1)],1),i("v-divider"),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v("Country:")]),i("v-list-item-subtitle",{staticClass:"body-2 grey--text"},[t._v(t._s(t.users.u_country))])],1)],1),i("v-divider"),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v("Time Zone:")]),i("v-list-item-subtitle",{staticClass:"body-2 grey--text"},[t._v(t._s(t.users.u_time_zone))])],1)],1),i("v-divider"),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v("Short Introduction:")]),i("v-list-item-subtitle",{staticClass:"body-2 grey--text"},[t._v(t._s(t.users.u_about_me))])],1)],1),i("v-divider"),i("v-list-item",[i("v-list-tile-action",[i("v-btn",{attrs:{to:"/home",dark:"",color:"purple"}},[t._v("Back")])],1)],1)],1)])],1)],1)},Ut=[],Yt={props:{id:{type:String}},data:function(){return{users:[],sidebar:!1}},created:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R()("/users/".concat(t.id));case 2:a=e.sent,t.users=a.data.data,console.log(t.users);case 5:case"end":return e.stop()}}),e)})))()}},Ht=Yt,Kt=Object(n["a"])(Ht,Dt,Ut,!1,null,"90d3db56",null),zt=Kt.exports;y()(Kt,{VApp:D["a"],VAppBar:U["a"],VAppBarNavIcon:Y["a"],VBtn:w["a"],VDivider:V["a"],VImg:F["a"],VList:G["a"],VListItem:X["a"],VListItemContent:Q["a"],VListItemGroup:q["a"],VListItemSubtitle:Q["b"],VListItemTitle:Q["c"],VMain:Z["a"],VNavigationDrawer:tt["a"],VSpacer:at["a"]});var Jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"d-flex flex-column justify-content-center"},[a("div",{staticClass:"mx-auto"},[a("router-link",{attrs:{to:"/"}},[t._v("Back to Login Page")]),t._v(" | "),a("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1),a("h5",{staticClass:"text-center my-3 text-danger"},[t._v(" You are are logged out! ")]),a("p",{staticClass:"text-center mt-3"},[t._v("Bye!")])])])},Wt=[],Ft={created:function(){return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:localStorage.clear();case 1:case"end":return t.stop()}}),t)})))()}},Gt=Ft,Xt=Object(n["a"])(Gt,Jt,Wt,!1,null,null,null),qt=Xt.exports;function Qt(){return!!i["a"].$cookies.get("sid")}i["a"].use(u["a"]);var Zt=[{path:"/home",name:"Home",component:ct},{path:"/detailproject/:id",name:"DetailProject",component:$t,props:!0},{path:"/detailuser/:id",name:"DetailUser",component:zt,props:!0},{path:"/",name:"Login",component:Ct},{path:"/logout",name:"Logout",component:qt},{path:"/register",name:"Register",component:function(){return a.e("chunk-2d0d6d35").then(a.bind(null,"73cf"))}},{path:"/account",name:"Account",component:Lt,beforeEnter:function(t,e,a){Qt()||a({name:"Login"}),a()}},{path:"/chat",name:"Chat",component:Et}],te=new u["a"]({mode:"history",base:"/",routes:Zt}),ee=te,ae=a("f309");i["a"].use(ae["a"]);var ie=new ae["a"]({});i["a"].config.productionTip=!1,new i["a"]({router:ee,vuetify:ie,render:function(t){return t(l)}}).$mount("#app")},"5ced":function(t,e,a){},6576:function(t,e,a){},"754a":function(t,e,a){"use strict";a("6576")},"7a63":function(t,e,a){},"85ec":function(t,e,a){},"8ae3":function(t,e,a){},"8af4":function(t,e,a){t.exports=a.p+"img/Logo-weiß.72397786.svg"},"8f3d":function(t,e,a){t.exports=a.p+"img/Dominik.54867371.jpg"},"940c":function(t,e,a){t.exports=a.p+"img/Romina.69a4053e.png"},cccb:function(t,e,a){"use strict";a("5ced")}});