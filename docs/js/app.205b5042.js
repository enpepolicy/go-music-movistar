(function(e){function t(t){for(var r,s,i=t[0],l=t[1],u=t[2],f=0,p=[];f<i.length;f++)s=i[f],a[s]&&p.push(a[s][0]),a[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/go-music-movistar/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("19b3"),a=n.n(r);a.a},"0e15":function(e,t,n){e.exports=n.p+"img/texto_pie_new.7e91ac3d.png"},"19b3":function(e,t,n){},"1f33":function(e,t,n){},"344c":function(e,t,n){"use strict";var r=n("1f33"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Header"),n("Nav"),n("v-layout",{attrs:{"justify-center":"",column:"","fill-height":"","ma-5":""}},[n("router-view")],1),n("Footer")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{color:"#00A9E0",dark:""}},[n("v-spacer"),n("v-toolbar-title",[e._v("emocion")]),n("v-spacer")],1)},i=[],l={},u=l,c=(n("59b8"),n("2877")),f=n("6544"),p=n.n(f),m=n("40dc"),v=n("2fa4"),d=n("2a7f"),b=Object(c["a"])(u,s,i,!1,null,"0dd37809",null),h=b.exports;p()(b,{VAppBar:m["a"],VSpacer:v["a"],VToolbarTitle:d["a"]});var _=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-footer",{attrs:{padless:e.padless,color:"#00A9E0"}},[r("v-layout",{attrs:{column:"","justify-center":"","ma-5":""}},[r("v-img",{attrs:{src:n("0e15"),alt:"Logo Movistar",contain:"",height:"30",id:"movistar"}}),r("v-layout",{attrs:{"justify-space-around":"",row:"","mx-auto":""}},[r("a",{attrs:{href:"#"}},[e._v("¿Qué es Emoción?")]),r("p",[e._v("|")]),r("a",{attrs:{href:"#"}},[e._v("Mis suscripciones")]),r("p",[e._v("|")]),r("a",{attrs:{href:"#"}},[e._v("Ayuda")])])],1)],1)},g=[],y={data:function(){return{padless:!0,variant:"default"}},computed:{}},x=y,E=(n("344c"),n("553a")),w=n("adda"),j=n("a722"),O=Object(c["a"])(x,_,g,!1,null,"e4ed7478",null),V=O.exports;p()(O,{VFooter:E["a"],VImg:w["a"],VLayout:j["a"]});var $=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-tabs",{attrs:{"show-arrows":"",dark:"",grow:"","slider-color":"white"}},[n("v-tab",{attrs:{to:"/"}},[e._v("\n    Home\n  ")]),n("v-tab",{attrs:{to:"/registro"}},[e._v("\n    Registro\n  ")]),n("v-tab",{attrs:{to:"/suscripcion-envio"}},[e._v("\n    Envio de Suscripción\n  ")]),n("v-tab",{attrs:{to:"/suscripcion-confirmacion"}},[e._v("\n    Confirmacion de Suscripción\n  ")]),n("v-tab",{attrs:{to:"/user-logged"}},[e._v("\n    Loggued User\n  ")]),n("v-tab",{attrs:{to:"/vista-extra-1"}},[e._v("\n    Vista 1\n  ")]),n("v-tab",{attrs:{to:"/vista-extra-2"}},[e._v("\n    Vista 2\n  ")])],1)},R=[],k={},S=k,q=n("71a3"),A=n("fe57"),T=Object(c["a"])(S,$,R,!1,null,"24ccf7f4",null),L=T.exports;p()(T,{VTab:q["a"],VTabs:A["a"]});var P={name:"App",components:{Header:h,Nav:L,Footer:V},data:function(){return{}}},M=P,C=(n("034f"),n("7496")),F=Object(c["a"])(M,a,o,!1,null,null,null),H=F.exports;p()(F,{VApp:C["a"],VLayout:j["a"]});var N=n("8c4f"),U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("Bienvenidos al Home Page")])},B=[],J={},z=J,I=Object(c["a"])(z,U,B,!1,null,"e7f4593e",null),Q=I.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{"align-center":"","justify-space-around":"",column:"","fill-height":""}},[n("h1",[e._v("ÚNETE...")]),n("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{label:"Nombre",rules:e.nameRules,solo:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),n("v-text-field",{attrs:{autocomplete:"",label:"E-mail",rules:e.emailRules,solo:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),n("v-text-field",{attrs:{label:"Celular",rules:e.numberRules,solo:""},model:{value:e.form.celular,callback:function(t){e.$set(e.form,"celular",t)},expression:"form.celular"}}),n("v-text-field",{attrs:{label:"Contraseña",type:"password",autocomplete:"",rules:e.nameRules,solo:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),n("v-btn",{attrs:{disabled:!e.valid,block:"",id:"btnRegistrar",color:"#d9527d"}},[e._v("\n        Registrarme\n      ")])],1)],1)},G=[],K={data:function(){return{valid:!0,nameRules:[function(e){return!!e||"Este campo es requerido"}],numberRules:[function(e){return!!e||"Este campo es requerido"},function(e){return/^[0-9]+$/i.test(e)||"Utiliza solo numeros, sin espacios"}],emailRules:[function(e){return!!e||" El E-mail es requerido"},function(e){return/.+@.+/.test(e)||"El E-mail debe ser valido"}],form:{name:"Enrique Peña",email:"enriquep36@hotmail.com",celular:"3164961184",password:"enriquep36@hotmail.com"},respuesta:"",error:""}},methods:{}},W=K,X=(n("a30b"),n("8336")),Y=n("4bd4"),Z=n("8654"),ee=Object(c["a"])(W,D,G,!1,null,"edf5f04a",null),te=ee.exports;p()(ee,{VBtn:X["a"],VForm:Y["a"],VLayout:j["a"],VTextField:Z["a"]});var ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("Acá enviamos los datos para la suscripcion")])},re=[],ae={},oe=ae,se=Object(c["a"])(oe,ne,re,!1,null,"11ad36c2",null),ie=se.exports,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("Acá recibimos los datos que confirman la suscripcion")])},ue=[],ce={},fe=ce,pe=Object(c["a"])(fe,le,ue,!1,null,"011c095e",null),me=pe.exports,ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("Acá recibimos la redireccion de los usuarios que ya se han logueado y que tenemos identificados (recibimos cookie)")])},de=[],be={},he=be,_e=Object(c["a"])(he,ve,de,!1,null,"c6b2939c",null),ge=_e.exports,ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("\nLo sentimos, no hemos encontrado la pagina.\nErr: 404\n")])},xe=[],Ee={},we=Ee,je=Object(c["a"])(we,ye,xe,!1,null,null,null),Oe=je.exports;r["default"].use(N["a"]);var Ve=new N["a"]({routes:[{path:"/",name:"Home",component:Q},{path:"/Registro",name:"Registro",component:te},{path:"/Suscripcion-Envio",name:"Suscripcion-Envio",component:ie},{path:"/Suscripcion-Confirmacion",name:"Suscripcion-Confirmacion",component:me},{path:"/User-Logged",name:"User-Logged",component:ge},{path:"*",name:"ERR404",component:Oe}],mode:"history"}),$e=n("ce5b"),Re=n.n($e),ke=(n("bf40"),n("f309"));r["default"].use(ke["a"]);var Se=new ke["a"]({icons:{iconfont:"mdi"}});r["default"].use(Re.a,{iconfont:"md"}),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(H)},vuetify:Se,router:Ve}).$mount("#app")},"59b8":function(e,t,n){"use strict";var r=n("6c2b"),a=n.n(r);a.a},"6c2b":function(e,t,n){},a30b:function(e,t,n){"use strict";var r=n("bc2d"),a=n.n(r);a.a},bc2d:function(e,t,n){}});
//# sourceMappingURL=app.205b5042.js.map