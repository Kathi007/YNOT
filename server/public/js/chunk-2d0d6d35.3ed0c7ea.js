(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6d35"],{"73cf":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{attrs:{id:"app"}},[i("v-app",{attrs:{id:"inspire"}},[i("v-app-bar",{staticClass:"default-layout__navbar",attrs:{color:"grey lighten-5",dark:"",app:"",extended:"","extension-height":"3"}},[i("div",{staticClass:"d-flex align-center"},[i("v-img",{staticClass:"shrink mr-2",attrs:{alt:"YNOTCOLLAB Logo",contain:"",src:t("0dec"),transition:"scale-transition",width:"230"}})],1)]),i("v-main",[i("section",{staticClass:"register"},[i("v-container",{attrs:{fluid:""}},[i("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[i("v-col",{attrs:{cols:"12",sm:"8"}},[i("form",{on:{submit:function(a){return a.preventDefault(),e.register(a)}}},[i("v-card",{staticClass:"mt-5"},[i("v-card-title",{staticClass:"pink darken-3 justify-center white--text mb-4",attrs:{"primary-title":""}},[e._v(" Welcome! ")]),i("v-card-text",[i("v-form",[i("v-row",[i("v-text-field",{attrs:{label:"Firstname",name:"firstname","prepend-icon":"mdi-account-outline",type:"text",color:"pink darken-3"},model:{value:e.u_firstname,callback:function(a){e.u_firstname=a},expression:"u_firstname"}}),i("v-text-field",{attrs:{label:"Lastname",name:"lastname","prepend-icon":"mdi-account-outline",type:"text",color:"pink darken-3"},model:{value:e.u_surename,callback:function(a){e.u_surename=a},expression:"u_surename"}})],1),i("v-row",[i("v-text-field",{attrs:{label:"Username","prepend-icon":"mdi-account-outline",name:"username",type:"username",color:"pink darken-3"},model:{value:e.u_username,callback:function(a){e.u_username=a},expression:"u_username"}}),i("v-text-field",{attrs:{id:"password",label:"Password","prepend-icon":"mdi-lock-outline",name:"password",type:"password",color:"pink darken-3"},model:{value:e.u_password,callback:function(a){e.u_password=a},expression:"u_password"}})],1),i("v-row",[i("v-text-field",{attrs:{id:"email",label:"Email","prepend-icon":"mdi-email-outline",name:"email",type:"email",color:"pink darken-3"},model:{value:e.u_email,callback:function(a){e.u_email=a},expression:"u_email"}})],1),i("v-subheader",[e._v("Select the programming languages you master:")]),i("v-row",{staticClass:"ml-3"},[i("v-col",[i("v-checkbox",{attrs:{label:"CSS",value:"CSS"},model:{value:e.u_abilities,callback:function(a){e.u_abilities=a},expression:"u_abilities"}})],1),i("v-col",[i("v-checkbox",{attrs:{label:"HTML",value:"HTML"},model:{value:e.u_abilities,callback:function(a){e.u_abilities=a},expression:"u_abilities"}})],1),i("v-col",[i("v-checkbox",{attrs:{label:"VUE",value:"VUE"},model:{value:e.u_abilities,callback:function(a){e.u_abilities=a},expression:"u_abilities"}})],1),i("v-col",[i("v-checkbox",{attrs:{label:"MYSQL",value:"MYSQL"},model:{value:e.u_abilities,callback:function(a){e.u_abilities=a},expression:"u_abilities"}})],1)],1),i("v-subheader",[e._v("Write a short introduction about yourself:")]),i("v-row",[i("v-col",[i("v-text-field",{attrs:{id:"introduction",label:"Introduction","prepend-icon":"mdi-pencil-outline",name:"introduction",type:"text",color:"pink darken-3"},model:{value:e.short_introduction,callback:function(a){e.short_introduction=a},expression:"short_introduction"}})],1)],1)],1),i("p",{staticClass:"mt-4 text-center"},[e._v(" Already got an account? "),i("a",{attrs:{href:"/"}},[e._v("Login here!")])])],1),i("v-card-actions",[i("v-btn",{style:{left:"50%",transform:"translateX(-50%)"},attrs:{color:"purple",width:"50%",dark:""}},[e._v("SIGN UP")])],1)],1)],1)])],1)],1)],1)])],1)],1)},r=[],n=(t("96cf"),t("1da1")),s=t("bc3a"),l=t.n(s),o={data:function(){return{username:"",firstname:"",surename:"",email:"",password:"",short_introduction:"",message:"",u_abilities:[]}},methods:{register:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,l()({url:"/register",method:"post",data:{u_username:e.username,u_email:e.email,u_password:e.password,u_about_me:e.short_introduction,pl_user:e.u_abilities}});case 3:t=a.sent,e.$router.push("/"),console.log(t.data),a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()}}},c=o,u=t("2877"),d=t("6544"),m=t.n(d),p=t("7496"),v=t("40dc"),b=t("8336"),_=t("b0af"),f=t("99d9"),k=t("ac7c"),x=t("62ad"),h=t("a523"),w=t("4bd4"),g=t("adda"),C=t("f6c4"),V=t("0fd9"),y=t("e0c7"),L=t("8654"),S=Object(u["a"])(c,i,r,!1,null,"208ac01b",null);a["default"]=S.exports;m()(S,{VApp:p["a"],VAppBar:v["a"],VBtn:b["a"],VCard:_["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VCheckbox:k["a"],VCol:x["a"],VContainer:h["a"],VForm:w["a"],VImg:g["a"],VMain:C["a"],VRow:V["a"],VSubheader:y["a"],VTextField:L["a"]})}}]);