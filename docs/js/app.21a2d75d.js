(function(t){function e(e){for(var r,i,c=e[0],s=e[1],l=e[2],v=0,d=[];v<c.length;v++)i=c[v],o[i]&&d.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,c=1;c<a.length;c++){var s=a[c];0!==o[s]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},o={app:0},n=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/go-music-movistar/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("19b3"),o=a.n(r);o.a},"0e15":function(t,e,a){t.exports=a.p+"img/texto_pie_new.7e91ac3d.png"},"19b3":function(t,e,a){},"2e92":function(t,e,a){},"393e":function(t,e,a){t.exports=a.p+"img/gmlogo.7f196371.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Header"),a("HeaderServicio"),a("Nav"),a("v-container",{staticClass:"align-start",attrs:{"fill-height":""}},[a("v-fade-transition",{attrs:{mode:"out-in"}},[a("router-view")],1)],1),"/suscripcion-envio"!=t.pagina?a("FooterServicio"):t._e(),a("Footer")],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{color:"#00A9E0",dark:""}},[a("v-spacer"),a("v-toolbar-title",[t._v("emocion")]),a("v-spacer")],1)},c=[],s={},l=s,u=(a("5b22"),a("2877")),v=a("6544"),d=a.n(v),p=a("40dc"),f=a("2fa4"),m=a("2a7f"),_=Object(u["a"])(l,i,c,!1,null,"e092a128",null),h=_.exports;d()(_,{VAppBar:p["a"],VSpacer:f["a"],VToolbarTitle:m["a"]});var g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{attrs:{color:"transparent",dark:"",flat:""}},[r("v-spacer"),r("v-layout",{attrs:{column:"","justify-center":""}},[r("router-link",{attrs:{to:"/"}},[r("v-img",{attrs:{src:a("393e"),alt:"Logo Go Music",contain:"",height:"3em"}})],1)],1),r("v-spacer")],1)},b=[],C={},V=C,x=(a("e5d3"),a("adda")),y=a("a722"),S=Object(u["a"])(V,g,b,!1,null,"5affd602",null),j=S.exports;d()(S,{VAppBar:p["a"],VImg:x["a"],VLayout:y["a"],VSpacer:f["a"]});var k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",{attrs:{padless:t.padless,color:"#00A9E0"}},[r("v-layout",{attrs:{column:"","justify-center":"","my-5":"","mx-3":""}},[r("v-img",{attrs:{src:a("0e15"),alt:"Logo Movistar",contain:"",height:"25",id:"movistar"}}),r("v-layout",{attrs:{"justify-space-around":"",row:"","mx-auto":""}},[r("a",{attrs:{href:"http://wap.movistar.com/que-es-emocion"}},[t._v("¿Qué es Emoción?")]),r("p",[t._v("|")]),r("a",{attrs:{href:"http://emocion.fonestarz.com/micuentamovil"}},[t._v("Mis suscripciones")]),r("p",[t._v("|")]),r("a",{attrs:{href:"http://wap.movistar.com/ayuda-emocion"}},[t._v("Ayuda")])])],1)],1)},w=[],E={data:function(){return{padless:!0,variant:"default"}},computed:{}},M=E,O=(a("ba49"),a("553a")),A=Object(u["a"])(M,k,w,!1,null,"202fc733",null),P=A.exports;d()(A,{VFooter:O["a"],VImg:x["a"],VLayout:y["a"]});var L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{padless:t.padless,color:"transparent"}},[a("v-layout",{attrs:{column:"","justify-center":"","mx-3":""}},[a("p",{attrs:{id:"gomusic"}},[t._v("Go Music")]),a("v-layout",{attrs:{"justify-space-around":"",row:"","mx-auto":""}},[a("router-link",{attrs:{to:"/Condiciones-Servicio"}},[t._v("Condiciones del servicio")]),a("p",[t._v("|")]),a("router-link",{attrs:{to:"/Aviso-Legal-Servicio"}},[t._v("Aviso legal")]),a("p",[t._v("|")]),a("router-link",{attrs:{to:"/Politica-Cookies"}},[t._v("Política de cookies")])],1)],1)],1)},G=[],$={data:function(){return{padless:!0,variant:"default"}},computed:{}},T=$,I=(a("e5c6"),Object(u["a"])(T,L,G,!1,null,"bacad8b8",null)),F=I.exports;d()(I,{VFooter:O["a"],VLayout:y["a"]});var B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-tabs",{attrs:{"show-arrows":"",dark:"",grow:"","slider-color":"white","background-color":"transparent"}},[a("v-tab",{attrs:{to:"/"}},[t._v("\n    Portada de Presentacion (3.3.3)\n  ")]),a("v-tab",{attrs:{to:"/suscripcion-envio"}},[t._v("\n    Envio de Suscripción (3.3.4)\n  ")]),a("v-tab",{attrs:{to:"/suscripcion-confirmacion"}},[t._v("\n    Confirmacion de Suscripción (3.3.5)\n  ")]),a("v-tab",{attrs:{to:"/Aviso-Legal-Servicio"}},[t._v("\n    Aviso Legal de Servicio\n  ")]),a("v-tab",{attrs:{to:"/Condiciones-Servicio"}},[t._v("\n    Condiciones de Servicio\n  ")]),a("v-tab",{attrs:{to:"/Politica-Cookies"}},[t._v("\n    Politica de Cookies\n  ")])],1)},H=[],R={},q=R,D=a("71a3"),N=a("fe57"),U=Object(u["a"])(q,B,H,!1,null,"2a63453c",null),z=U.exports;d()(U,{VTab:D["a"],VTabs:N["a"]});var J={name:"App",components:{Header:h,Nav:z,Footer:P,HeaderServicio:j,FooterServicio:F},data:function(){return{pagina:""}},beforeUpdate:function(){this.pagina=window.location.pathname}},Q=J,K=(a("034f"),a("7496")),W=a("a523"),X=a("0789"),Y=Object(u["a"])(Q,o,n,!1,null,null,null),Z=Y.exports;d()(Y,{VApp:K["a"],VContainer:W["a"],VFadeTransition:X["a"]});var tt=a("8c4f"),et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[t.suscription?t._e():r("v-col",{attrs:{cols:"12"}},[r("v-card",{attrs:{dark:"",color:"warning"}},[r("v-card-text",[t._v("Suscríbete a GoMusic por 7€/mes IVA incluido. Disfruta de forma ilimitada de todos nuestros contenidos.")])],1)],1),t.suscription?r("v-col",{attrs:{cols:"12"}},[r("v-card",{attrs:{dark:"",color:"success"}},[r("v-card-text",[t._v("Estás suscrito a GoMusic. Disfruta live streamings sin límites.")])],1)],1):t._e(),t.suscription?r("v-col",{attrs:{cols:"12"}},[r("v-card",{attrs:{dark:""}},[r("v-img",{attrs:{src:a("ca2e"),alt:"Logo Go Music",height:"8.5em"}}),r("v-card-text",[t._v('"Usuario suscrito" (por definir, preferiblemente enviar a portal de GoMusic con cookie tal vez)')]),r("v-card-actions",{staticClass:"justify-center"},[r("v-btn",{attrs:{dark:"",color:"success",href:"#"}},[t._v("Ver Contenido")])],1)],1)],1):t._e(),t.suscription?t._e():r("v-col",{attrs:{cols:"12"}},[r("v-card",{attrs:{dark:""}},[r("v-img",{attrs:{src:a("ca2e"),alt:"Logo Go Music",height:"8.5em"}}),r("v-card-text",[t._v('"Usuario NO suscrito" (texto por definir, preferiblemente enviar a 3.3.4)')]),r("v-card-actions",{staticClass:"justify-center"},[r("v-btn",{attrs:{dark:"",color:"warning",to:"./suscripcion-envio"}},[t._v("Suscribete")])],1)],1)],1)],1)},at=[],rt={data:function(){return{suscription:!0}}},ot=rt,nt=a("8336"),it=a("b0af"),ct=a("99d9"),st=a("62ad"),lt=a("0fd9"),ut=Object(u["a"])(ot,et,at,!1,null,"600ee1d4",null),vt=ut.exports;d()(ut,{VBtn:nt["a"],VCard:it["a"],VCardActions:ct["a"],VCardText:ct["b"],VCol:st["a"],VImg:x["a"],VRow:lt["a"]});var dt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[t.suscription?r("v-col",{attrs:{cols:"12"}},[r("v-card",{attrs:{dark:""}},[r("v-img",{attrs:{src:a("ca2e"),alt:"Logo Go Music",height:"8.5em"}}),r("v-card-title",{staticClass:"justify-center"},[t._v("Enhorabuena, ya estas suscrito.")]),r("v-card-actions",{staticClass:"justify-center"},[r("v-btn",{attrs:{dark:"",color:"success",href:"#"}},[t._v("Ver Contenido")])],1)],1)],1):t._e(),t.suscription?t._e():r("v-col",{attrs:{cols:"12"}},[r("v-card",{attrs:{dark:""}},[r("v-img",{attrs:{src:a("ca2e"),alt:"Logo Go Music",height:"8.5em"}}),r("v-card-text",{staticClass:"text-center"},[r("strong",[t._v("Suscríbete a GoMusic por 7€/mes")]),t._v(" IVA incluido. Disfruta de forma ilimitada de todos nuestros contenidos.")]),r("v-card-actions",{staticClass:"justify-center"},[r("v-btn",{attrs:{large:"",dark:"",color:"grey",to:""}},[t._v("Cancelar")]),r("v-btn",{attrs:{large:"",dark:"",color:"error",to:""}},[t._v("Activar")])],1),r("v-card-text",{staticClass:"text-center"},[t._v("Pulsando en “Activar” aceptas las "),r("router-link",{attrs:{to:"/Condiciones-Servicio"}},[t._v("Condiciones del Servicio")]),t._v(". El importe será cargado en tu tarjeta prepago o factura Movistar. Podrás cancelar la suscripción en cualquier momento desde el servicio o llamando al 1004.")],1)],1)],1)],1)},pt=[],ft={data:function(){return{suscription:!0}}},mt=ft,_t=Object(u["a"])(mt,dt,pt,!1,null,"b0df9848",null),ht=_t.exports;d()(_t,{VBtn:nt["a"],VCard:it["a"],VCardActions:ct["a"],VCardText:ct["b"],VCardTitle:ct["c"],VCol:st["a"],VImg:x["a"],VRow:lt["a"]});var gt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-card",{staticClass:"mb-3",attrs:{dark:"",color:"success"}},[r("v-card-text",[r("v-icon",[t._v("check_circle")]),r("strong",[t._v(" Te has suscrito a GoMusic por 7€/mes IVA incluido")])],1)],1),r("v-card",{attrs:{dark:""}},[r("v-img",{attrs:{src:a("ca2e"),alt:"Logo Go Music",height:"8.5em"}}),r("v-card-actions",{staticClass:"justify-center"},[r("v-btn",{attrs:{dark:"",color:"success",href:"#"}},[t._v("Ver Contenido")])],1),r("v-card-text",[r("ul",[r("li",[t._v("El coste del servicio  se cargará semanalmente en tu tarjeta prepago o factura Movistar.")]),r("li",[t._v("Puedes cancelar la suscripción en cualquier momento accediendo a "),r("a",{attrs:{href:"http://emocion.movistar.es/micuenta"}},[t._v("Gestionar Suscripciones")]),t._v(" o llamando gratis al 1004.")]),r("li",[t._v("Para volver a GoMusic las siguientes veces entra desde "),r("a",{attrs:{href:"http://wap.movistar.com/Musica"}},[t._v("Emocion Música")]),t._v(" o desde el SMS que has recibido.")])])])],1)],1)],1)},bt=[],Ct={data:function(){return{suscription:!0}}},Vt=Ct,xt=a("132d"),yt=Object(u["a"])(Vt,gt,bt,!1,null,"4645d7e6",null),St=yt.exports;d()(yt,{VBtn:nt["a"],VCard:it["a"],VCardActions:ct["a"],VCardText:ct["b"],VCol:st["a"],VIcon:xt["a"],VImg:x["a"],VRow:lt["a"]});var jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("Condiciones de Servicio")])},kt=[],wt={},Et=wt,Mt=Object(u["a"])(Et,jt,kt,!1,null,null,null),Ot=Mt.exports,At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("Politica de Cookies")])},Pt=[],Lt={},Gt=Lt,$t=Object(u["a"])(Gt,At,Pt,!1,null,null,null),Tt=$t.exports,It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("Aviso Legal  de Servicio")])},Ft=[],Bt={},Ht=Bt,Rt=Object(u["a"])(Ht,It,Ft,!1,null,null,null),qt=Rt.exports,Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("\nLo sentimos, no hemos encontrado la pagina.\nErr: 404\n")])},Nt=[],Ut={},zt=Ut,Jt=Object(u["a"])(zt,Dt,Nt,!1,null,null,null),Qt=Jt.exports;r["default"].use(tt["a"]);var Kt=new tt["a"]({routes:[{path:"/",name:"Home",component:vt},{path:"/Aviso-Legal-Servicio",name:"Aviso-Legal-Servicio",component:qt},{path:"/Condiciones-Servicio",name:"Condiciones-Servicio",component:Ot},{path:"/Politica-Cookies",name:"Politica-Cookies",component:Tt},{path:"/Suscripcion-Envio",name:"Suscripcion-Envio",component:ht},{path:"/Suscripcion-Confirmacion",name:"Suscripcion-Confirmacion",component:St},{path:"*",name:"ERR404",component:Qt}],mode:"history"}),Wt=a("ce5b"),Xt=a.n(Wt),Yt=(a("bf40"),a("f309"));r["default"].use(Yt["a"]);var Zt=new Yt["a"]({icons:{iconfont:"mdi"}});r["default"].use(Xt.a,{iconfont:"md"}),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(Z)},vuetify:Zt,router:Kt}).$mount("#app")},"5b22":function(t,e,a){"use strict";var r=a("e394"),o=a.n(r);o.a},ba49:function(t,e,a){"use strict";var r=a("ee0f"),o=a.n(r);o.a},ca2e:function(t,e,a){t.exports=a.p+"img/realidadvirtual.c5893839.jpg"},e394:function(t,e,a){},e5c6:function(t,e,a){"use strict";var r=a("e8ac"),o=a.n(r);o.a},e5d3:function(t,e,a){"use strict";var r=a("2e92"),o=a.n(r);o.a},e8ac:function(t,e,a){},ee0f:function(t,e,a){}});
//# sourceMappingURL=app.21a2d75d.js.map