(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6d35"],{"73cf":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("v-app",{attrs:{id:"inspire"}},[i("v-app-bar",{staticClass:"default-layout__navbar",attrs:{color:"grey lighten-5",dark:"",app:"",extended:"","extension-height":"3"}},[i("div",{staticClass:"d-flex align-center"},[i("v-img",{staticClass:"shrink mr-2",attrs:{alt:"YNOTCOLLAB Logo",contain:"",src:a("0dec"),transition:"scale-transition",width:"230"}})],1)]),i("v-main",[i("section",{staticClass:"register"},[i("v-container",{attrs:{fluid:""}},[i("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[i("v-col",{attrs:{cols:"12",sm:"8"}},[i("form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[i("v-card",{staticClass:"mt-5"},[i("v-card-title",{staticClass:"pink darken-3 justify-center white--text mb-4",attrs:{"primary-title":""}},[e._v(" Welcome! ")]),i("v-card-text",[i("v-form",[i("v-row",[i("v-text-field",{attrs:{label:"Firstname",name:"firstname","prepend-icon":"mdi-account-outline",type:"text",color:"pink darken-3"},model:{value:e.u_firstname,callback:function(t){e.u_firstname=t},expression:"u_firstname"}}),i("v-text-field",{attrs:{label:"Lastname",name:"lastname","prepend-icon":"mdi-account-outline",type:"text",color:"pink darken-3"},model:{value:e.u_surename,callback:function(t){e.u_surename=t},expression:"u_surename"}})],1),i("v-row",[i("v-text-field",{attrs:{label:"Username","prepend-icon":"mdi-account-outline",name:"username",type:"username",color:"pink darken-3"},model:{value:e.u_username,callback:function(t){e.u_username=t},expression:"u_username"}}),i("v-text-field",{attrs:{id:"password",label:"Password","prepend-icon":"mdi-lock-outline",name:"password",type:"password",color:"pink darken-3"},model:{value:e.u_password,callback:function(t){e.u_password=t},expression:"u_password"}})],1),i("v-row",[i("v-text-field",{attrs:{id:"email",label:"Email","prepend-icon":"mdi-email-outline",name:"email",type:"email",color:"pink darken-3"},model:{value:e.u_email,callback:function(t){e.u_email=t},expression:"u_email"}})],1),i("v-subheader",[e._v("Select the programming languages you master:")]),i("v-row",{staticClass:"ml-3"},[i("v-col",[i("v-checkbox",{attrs:{label:"CSS",value:"CSS"},model:{value:e.u_abilities,callback:function(t){e.u_abilities=t},expression:"u_abilities"}})],1),i("v-col",[i("v-checkbox",{attrs:{label:"HTML",value:"HTML"},model:{value:e.u_abilities,callback:function(t){e.u_abilities=t},expression:"u_abilities"}})],1),i("v-col",[i("v-checkbox",{attrs:{label:"VUE",value:"VUE"},model:{value:e.u_abilities,callback:function(t){e.u_abilities=t},expression:"u_abilities"}})],1),i("v-col",[i("v-checkbox",{attrs:{label:"MYSQL",value:"MYSQL"},model:{value:e.u_abilities,callback:function(t){e.u_abilities=t},expression:"u_abilities"}})],1)],1),i("v-subheader",[e._v("Write a short introduction about yourself:")]),i("v-row",[i("v-col",[i("v-text-field",{attrs:{id:"introduction",label:"Introduction","prepend-icon":"mdi-pencil-outline",name:"introduction",type:"text",color:"pink darken-3"},model:{value:e.short_introduction,callback:function(t){e.short_introduction=t},expression:"short_introduction"}})],1)],1)],1),i("p",{staticClass:"mt-4 text-center"},[e._v(" Already got an account? "),i("a",{attrs:{href:"/"}},[e._v("Login here!")])])],1),i("v-card-actions",[i("v-btn",{style:{left:"50%",transform:"translateX(-50%)"},attrs:{color:"purple",width:"50%",dark:""}},[e._v("SIGN UP")])],1)],1)],1)])],1)],1)],1)])],1)],1)},r=[],n=(a("96cf"),a("1da1")),s=a("bc3a"),l=a.n(s),o={data:function(){return{username:"",firstname:"",surename:"",email:"",password:"",short_introduction:"",message:"",u_abilities:[]}},methods:{register:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l()({url:"http://127.0.0.1:3000/register",method:"post",data:{u_username:e.username,u_email:e.email,u_password:e.password,u_about_me:e.short_introduction,pl_user:e.u_abilities}});case 3:a=t.sent,e.$router.push("/"),console.log(a.data),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}},c=o,u=a("2877"),d=a("6544"),m=a.n(d),p=a("7496"),v=a("40dc"),b=a("8336"),_=a("b0af"),f=a("99d9"),k=a("ac7c"),x=a("62ad"),h=a("a523"),w=a("4bd4"),g=a("adda"),C=a("f6c4"),V=a("0fd9"),y=a("e0c7"),L=a("8654"),S=Object(u["a"])(c,i,r,!1,null,"08a2ec45",null);t["default"]=S.exports;m()(S,{VApp:p["a"],VAppBar:v["a"],VBtn:b["a"],VCard:_["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VCheckbox:k["a"],VCol:x["a"],VContainer:h["a"],VForm:w["a"],VImg:g["a"],VMain:C["a"],VRow:V["a"],VSubheader:y["a"],VTextField:L["a"]})}}]);