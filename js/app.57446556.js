(function(t){function e(e){for(var i,r,l=e[0],o=e[1],c=e[2],u=0,f=[];u<l.length;u++)r=l[u],s[r]&&f.push(s[r][0]),s[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,l=1;l<a.length;l++){var o=a[l];0!==s[o]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},s={app:0},n=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4678:function(t,e,a){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=n(t);return a(e)}function n(t){var e=i[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}s.keys=function(){return Object.keys(i)},s.resolve=n,t.exports=s,s.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d"),a("5363");var i=a("2b0e"),s=a("8c4f"),n=a("f309");i["a"].use(n["a"]);var r=new n["a"]({icons:{iconfont:"mdi"}}),l=a("59ca"),o=a.n(l),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[t.user?a("v-list-group",{attrs:{value:!0,"no-action":"","prepend-icon":"mdi-account-circle"},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-content",[a("v-list-item-title",[t._v("\n                            "+t._s(t.user.displayName)+"\n                        ")])],1)]},proxy:!0}],null,!1,2370341095)},[a("v-list-item",{attrs:{link:"",to:{name:"WeeklySummary"}}},[a("v-list-item-action",[a("v-icon",[t._v("mdi-calendar-week")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Weekly Summary")])],1)],1),a("v-list-item",{on:{click:t.logout}},[a("v-list-item-action",[a("v-icon",[t._v("mdi-logout")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Sign-out")])],1)],1)],1):a("v-list-item",{on:{click:function(e){t.dialogForSiginIn=!0}}},[a("v-list-item-action",[a("v-icon",[t._v("mdi-login")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Sign-in")])],1)],1),a("v-list-item",{attrs:{to:{name:"Calculator"}}},[a("v-list-item-action",[a("v-icon",[t._v("mdi-calculator")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Calculator")])],1)],1),a("v-list-group",{attrs:{"no-action":"",value:!1,"prepend-icon":"mdi-history"},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-content",[a("v-list-item-title",[t._v("Log")])],1)]},proxy:!0}])},[a("v-list-item",{attrs:{link:"",to:{name:"DailyLog"}}},[a("v-list-item-action",[a("v-icon",[t._v("mdi-calendar")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Daily Log")])],1)],1),a("v-list-item",{attrs:{link:"",to:{name:"ExerciseLog"}}},[a("v-list-item-action",[a("v-icon",[t._v("mdi-calendar-text")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Exercise Log")])],1)],1)],1)],1)],1),a("v-app-bar",{attrs:{app:"","clipped-left":""}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v(t._s(t.$route.meta.title))]),a("v-spacer"),"INOL Calculator"===t.$route.meta.title?[a("v-btn",{attrs:{icon:""},on:{click:t.clear}},[a("v-icon",[t._v("mdi-delete")])],1),a("v-btn",{attrs:{icon:""},on:{click:t.save}},[a("v-icon",[t._v("mdi-content-save")])],1)]:t._e(),"My Exercise"===t.$route.meta.title?[a("v-btn",{attrs:{icon:""},on:{click:t.deleteMyExercise}},[a("v-icon",[t._v("mdi-delete")])],1),a("v-btn",{attrs:{icon:""},on:{click:t.addMyExercise}},[a("v-icon",[t._v("mdi-plus")])],1)]:t._e()],2),a("v-content",[a("v-container",{attrs:{"text-center":"",fluid:"","pa-0":""}},[a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"500"},model:{value:t.dialogForSiginIn,callback:function(e){t.dialogForSiginIn=e},expression:"dialogForSiginIn"}},[a("v-card",[a("v-card-text",[a("v-container",[a("v-row",[a("v-btn",{attrs:{text:""},on:{click:function(e){return t.login("google")}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-google")]),t._v(" Sign in with Google ")],1)],1),a("v-row",[a("v-btn",{attrs:{text:""},on:{click:function(e){return t.login("facebook")}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-facebook")]),t._v(" Sign in with Facebook ")],1)],1),a("v-row",[a("v-btn",{attrs:{text:""},on:{click:function(e){return t.login("twitter")}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-twitter")]),t._v(" Sign in with Twitter ")],1)],1),a("v-row",[a("v-btn",{attrs:{text:""},on:{click:function(e){return t.login("github")}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-github-box")]),t._v(" Sign in with Github ")],1)],1)],1),t._v("\n                            No Sign-up is required\n                        ")],1)],1)],1),a("v-dialog",{attrs:{width:"500"},model:{value:t.dialogForLogin,callback:function(e){t.dialogForLogin=e},expression:"dialogForLogin"}},[a("v-card",[a("v-card-text",[t._v("\n                            Sign-in is needed\n                        ")]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(e){t.dialogForLogin=!1}}},[t._v("\n                                OK\n                            ")])],1)],1)],1)],1),a("v-fade-transition",{attrs:{mode:"out-in"}},[a("router-view")],1)],1)],1)],1)},d=[],u=(a("ea7b"),{bus:new i["a"]}),f={data:function(){return{dialogForSiginIn:!1,dialogForLogin:!1,drawer:null,user:null}},methods:{save:function(){u.bus.$emit("calculatorSave")},clear:function(){u.bus.$emit("calculatorClear")},addMyExercise:function(){u.bus.$emit("addMyExercise")},deleteMyExercise:function(){u.bus.$emit("deleteMyExercise")},login:function(t){var e,a=this;switch(t){case"google":e=new o.a.auth.GoogleAuthProvider;break;case"facebook":e=new o.a.auth.FacebookAuthProvider;break;case"twitter":e=new o.a.auth.TwitterAuthProvider;break;case"github":e=new o.a.auth.GithubAuthProvider;break;default:return}o.a.auth().signInWithPopup(e).then(function(){a.dialogForSiginIn=!1,a.drawer=!1}).catch(function(t){alert(t.message)})},logout:function(){this.user&&(o.a.auth().signOut(),this.drawer=!1)}},created:function(){var t=this;this.$vuetify.theme.dark=!0,o.a.auth().onAuthStateChanged(function(e){t.user=e||null}),this.$router.beforeEach(function(e,a,i){try{e.matched.some(function(t){return t.meta.requiresAuth})?t.user?i():(t.dialogForLogin=!0,i(!1)):i()}catch(s){console.log(JSON.stringify(s))}})}},v=f,h=a("2877"),g=a("6544"),m=a.n(g),x=a("7496"),b=a("40dc"),p=a("5bc1"),y=a("8336"),w=a("b0af"),_=a("99d9"),j=a("a523"),k=a("a75b"),C=a("169a"),S=a("ce7e"),L=a("0789"),V=a("132d"),D=a("8860"),E=a("56b0"),I=a("da13"),M=a("1800"),O=a("5d23"),F=a("f774"),N=a("0fd9"),Y=a("2fa4"),W=a("2a7f"),T=Object(h["a"])(v,c,d,!1,null,null,null),A=T.exports;m()(T,{VApp:x["a"],VAppBar:b["a"],VAppBarNavIcon:p["a"],VBtn:y["a"],VCard:w["a"],VCardActions:_["a"],VCardText:_["b"],VContainer:j["a"],VContent:k["a"],VDialog:C["a"],VDivider:S["a"],VFadeTransition:L["c"],VIcon:V["a"],VList:D["a"],VListGroup:E["a"],VListItem:I["a"],VListItemAction:M["a"],VListItemContent:O["a"],VListItemTitle:O["b"],VNavigationDrawer:F["a"],VRow:N["a"],VSpacer:Y["a"],VToolbarTitle:W["a"]});var z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"text-center":"",fluid:""}},[a("c-dialog",{attrs:{dialog:t.dialogYn,message:t.dialogMessage,"yes-text":t.yesText},on:{clickYes:function(e){t.dialogYn=!1}}}),a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"500"},model:{value:t.dialogForInol,callback:function(e){t.dialogForInol=e},expression:"dialogForInol"}},[a("v-card",[a("v-card-title",{staticClass:"subtitle-2"},[t._v("Single workout INOL of a single exercise")]),a("v-card-text",[a("div",{staticClass:"text-left"},[t._v("\n                        < 0.4 : Super easy "),a("br"),t._v("\n                        0.4 ~ 1 : Optimal in long run"),a("br"),t._v("\n                        1 ~ 2 : Tough "),a("br"),t._v("\n                        > 2 : Brutal\n                    ")])]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(e){t.dialogForInol=!1}}},[t._v("\n                        OK\n                    ")])],1)],1)],1),a("v-dialog",{attrs:{width:"500"},model:{value:t.dialogForLogin,callback:function(e){t.dialogForLogin=e},expression:"dialogForLogin"}},[a("v-card",[a("v-card-text",[t._v("\n                    Sign-in is required."),a("br"),t._v("\n                    You can sign-in with gmail, facebook, twitter, github.\n                ")]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(e){t.dialogForLogin=!1}}},[t._v("\n                        OK\n                    ")])],1)],1)],1),a("v-dialog",{attrs:{width:"500"},model:{value:t.dialogForSave,callback:function(e){t.dialogForSave=e},expression:"dialogForSave"}},[a("v-card",[a("v-card-text",[t._v("\n                    Save success."),a("br"),t._v("\n                    Are you want to clear?\n                ")]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(e){t.dialogForSave=!1}}},[t._v("\n                        NO\n                    ")]),a("v-btn",{attrs:{text:""},on:{click:function(e){t.dialogForSave=!1,t.clearRows()}}},[t._v("\n                        Yes\n                    ")])],1)],1)],1),a("v-dialog",{attrs:{width:"500"},model:{value:t.dialogForClear,callback:function(e){t.dialogForClear=e},expression:"dialogForClear"}},[a("v-card",[a("v-card-text",[t._v("\n                    Are you sure to clear?\n                ")]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(e){t.dialogForClear=!1}}},[t._v("\n                        No\n                    ")]),a("v-btn",{attrs:{text:""},on:{click:t.clearRows}},[t._v(" Yes ")])],1)],1)],1)],1),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"px-2 ma-0",attrs:{xs12:"",md6:""}},[a("v-combobox",{attrs:{label:"Exercise Name","prepend-inner-icon":"mdi-dumbbell",outlined:"",items:t.listOfExerciseNames},model:{value:t.exerciseName,callback:function(e){t.exerciseName=e},expression:"exerciseName"}})],1),a("v-flex",{staticClass:"px-2 ma-0",attrs:{xs12:"",md6:""}},[a("v-text-field",{attrs:{label:"1 RM Weight","prepend-inner-icon":"mdi-weight",outlined:""},model:{value:t.maxWeight,callback:function(e){t.maxWeight=t._n(e)},expression:"maxWeight"}})],1)],1),a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{"text-center":"",xs12:""}},[a("v-simple-table",{staticStyle:{"table-layout":"fixed"}},[a("thead",[a("tr",[a("th",{staticClass:"text-left",staticStyle:{width:"10%"}},[t._v("Set No.")]),a("th",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v("Weight")]),a("th",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v("Lifts")]),a("th",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v("INOL")])])]),a("tbody",t._l(t.rows,function(e){return a("tr",{key:e.set},[a("td",{staticClass:"text-left",staticStyle:{width:"10%"}},[t._v(t._s(e.set))]),a("td",{staticClass:"text-left",staticStyle:{width:"30%"}},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e["weight"],expression:"item['weight']",modifiers:{number:!0}}],staticStyle:{width:"100%"},attrs:{placeholder:"Weight"},domProps:{value:e["weight"]},on:{input:function(a){a.target.composing||t.$set(e,"weight",t._n(a.target.value))},blur:function(e){return t.$forceUpdate()}}})]),a("td",{staticClass:"text-left",staticStyle:{width:"30%"}},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e["lifts"],expression:"item['lifts']",modifiers:{number:!0}}],staticStyle:{width:"100%"},attrs:{placeholder:"Lifts"},domProps:{value:e["lifts"]},on:{input:function(a){a.target.composing||t.$set(e,"lifts",t._n(a.target.value))},blur:function(e){return t.$forceUpdate()}}})]),a("td",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v(t._s(e["inol"]))])])}),0)])],1)],1),a("v-footer",{attrs:{app:""}},[a("span",{staticClass:"white--text headline"},[t._v("Total INOL: "+t._s(t.totalInol)+" ")]),t.level?a("v-btn",{attrs:{text:""},on:{click:function(e){t.dialogForInol=!0}}},[t._v(" "+t._s(t.level)),a("v-icon",{attrs:{right:""}},[t._v("mdi-help-circle")])],1):t._e()],1)],1)},$=[],P=(a("7514"),a("7f7f"),a("c5f6"),a("5df2"),a("ac6a"),a("e71f"),a("c1df")),R=a.n(P),q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-text",[t._v("\n                "+t._s(t.message)+"\n            ")]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:t.clickYes}},[t._v("\n                "+t._s(t.yesText)+"\n                ")])],1)],1)],1)],1)},B=[],G={name:"Dialog",props:["dialog","message","yesText"],methods:{clickYes:function(){this.$emit("clickYes")}}},J=G,K=Object(h["a"])(J,q,B,!1,null,"44556adc",null),U=K.exports;m()(K,{VBtn:y["a"],VCard:w["a"],VCardActions:_["a"],VCardText:_["b"],VDialog:C["a"],VDivider:S["a"],VSpacer:Y["a"]});var Z=function(){var t=this;this.rows.forEach(function(e){var a=Number.parseFloat(e.lifts/(100-e.weight/t.maxWeight*100)).toFixed(2);e.weight>=t.maxWeight&&e.lifts>0&&(a=4),e.inol=isNaN(a)?0:a}),this.totalInol=Number.parseFloat(this.rows.reduce(function(t,e){return Number(t)+Number(e.inol)},0)).toFixed(2),this.totalInol>0?this.totalInol<=.4?this.level="Super Easy":this.totalInol<=1?this.level="Optimal":this.totalInol<=2?this.level="Tough":this.totalInol>2&&(this.level="Crazy"):this.level=null,this.rows[0].inol>0&&this.addRow()},H={name:"calculator",data:function(){return{dialogForInol:!1,dialogYn:!1,dialogMessage:null,noText:null,yesText:null,dialogForLogin:!1,dialogForSave:!1,dialogForClear:!1,exerciseName:null,listOfExercise:[],listOfExerciseNames:[],rows:[{set:1,weight:0,lifts:0,inol:0}],totalInol:0,maxWeight:0,user:null,level:null}},methods:{addRow:function(){this.rows.splice(0,0,{set:this.rows.length+1,weight:this.rows[0].weight,lifts:0,inol:0})},clearRows:function(){this.rows=[{set:1,weight:0,lifts:0,inol:0}],this.dialogForClear=!1,this.totalInol=0},alert:function(t,e){this.dialogYn=!0,this.dialogMessage=t,this.yesText=e},save:function(){var t=this;if(this.exerciseName)if(this.user){var e=o.a.firestore(),a=R()().format("YYYYMMDD"),i=Number.parseFloat(this.totalInol);if(e.collection("user").doc(this.user.uid).collection("exercise").doc(this.exerciseName).set({maxWeight:this.maxWeight,lastDate:a,lastInol:i}).then(function(){t.getExerciseList()}),i>0){var s=this.rows.filter(function(t){return t.weight&&t.lifts}),n={set:s.filter(function(t){return t.weight&&t.lifts}).length,lifts:s.reduce(function(t,e){return t+e.lifts},0),inol:i,date:a,exercise:this.exerciseName,detail:s},r={};r[this.exerciseName]=n,e.collection("dayLogs").doc(this.user.uid).collection("day").doc(a).update(r).catch(function(i){"not-found"===i.code&&e.collection("dayLogs").doc(t.user.uid).collection("day").doc(a).set(r)}),e.collection("exerciseLogs").doc(this.user.uid).collection("exercise").doc(this.exerciseName).collection("day").doc(a).set(n)}this.dialogForSave=!0}else this.dialogForLogin=!0;else this.alert("Set exercise name first.","OK")},getExerciseList:function(){var t=this;o.a.firestore().collection("user").doc(this.user.uid).collection("exercise").get().then(function(e){t.listOfExercise.length=0,e.forEach(function(e){t.listOfExercise.push({name:e.id,maxWeight:e.data().maxWeight,lastDate:e.data().lastDate,lastInol:e.data().lastInol})}),t.listOfExerciseNames=t.listOfExercise.map(function(t){return t.name})})},loginLogout:function(){if(this.user)o.a.auth().signOut();else{var t=new o.a.auth.GoogleAuthProvider;o.a.auth().signInWithPopup(t).then(function(){o.a.auth().setPersistence(o.a.auth.Auth.Persistence.SESSION)}).catch(function(t){alert(t.message)})}}},watch:{exerciseName:function(t){if(!(this.maxWeight>0&&this.totalInol>0)){"string"!==typeof t&&(t=t.text);var e=this.listOfExercise.find(function(e){return e.name===t});e&&(this.maxWeight=e.maxWeight)}},rows:{handler:function(){Z.call(this)},deep:!0},maxWeight:function(){Z.call(this)}},beforeCreate:function(){var t=this;o.a.auth().onAuthStateChanged(function(e){e?(t.user=e,t.getExerciseList()):t.user=null})},created:function(){var t=this;u.bus.$on("calculatorSave",this.save),u.bus.$on("calculatorClear",function(){t.dialogForClear=!0})},components:{"c-dialog":U}},Q=H,X=a("2b5d"),tt=a("0e8f"),et=a("553a"),at=a("a722"),it=a("1f4f"),st=a("8654"),nt=Object(h["a"])(Q,z,$,!1,null,"ccdb5bb0",null),rt=nt.exports;m()(nt,{VBtn:y["a"],VCard:w["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VCombobox:X["a"],VContainer:j["a"],VDialog:C["a"],VDivider:S["a"],VFlex:tt["a"],VFooter:et["a"],VIcon:V["a"],VLayout:at["a"],VSimpleTable:it["a"],VSpacer:Y["a"],VTextField:st["a"]});var lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"text-center":"",fluid:"","px-2":""}},[t.loading?a("div",{staticClass:"loading"},[t._v("\n        Loading...\n    ")]):t._e(),a("v-card",[a("v-subheader",[t._v(t._s(t.formatDate(t.weekBefore))+" ~ "+t._s(t.formatDate(t.today)))]),a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{"text-center":"",xs12:""}},[a("v-simple-table",{staticClass:"elevation-6"},[a("thead",[a("tr",[a("th",{staticClass:"text-left",staticStyle:{width:"40%"}},[t._v("Exercise")]),a("th",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v("Weekly INOL")]),a("th",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v("Last exercise")])])]),a("tbody",t._l(t.exercises,function(e,i){return a("tr",{key:i},[a("td",{staticClass:"text-left",staticStyle:{width:"40%"}},[t._v(t._s(e.name))]),a("td",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v(t._s(e.weeklyInol))]),a("td",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v(t._s(e.lastDate))])])}),0)])],1)],1)],1),a("v-layout",{staticClass:"mt-2",attrs:{"justify-center":""}},[a("v-flex",{attrs:{"text-center":"",xs12:""}},[a("v-card",{staticClass:"mx-auto"},[a("v-card-title",{staticClass:"subtitle-1"},[t._v("Total weekly INOL of a single exercise")]),a("v-card-text",[a("div",{staticClass:"text-left"},[t._v("\n                         < 2 : Easy "),a("br"),t._v("\n                        2 ~ 3 : Tough but doable"),a("br"),t._v("\n                        3 ~ 4 : Very hard "),a("br"),t._v("\n                         > 4 : Unsustainable\n                    ")])])],1)],1)],1)],1)},ot=[],ct={name:"WeeklySummary",data:function(){return{loading:!1,user:null,exercises:[],exerciseLogs:[],dayLogs:[],today:R()().format("YYYYMMDD"),weekBefore:R()().add(-6,"d").format("YYYYMMDD")}},beforeCreate:function(){var t=this;o.a.auth().onAuthStateChanged(function(e){e?(t.user=e,t.fetchData()):t.user=null})},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{formatDate:function(t){return R()(t).format("YY[.]MM[.]DD(ddd)")},fetchData:function(){var t=this;this.user&&(this.loading=!0,this.exerciseLogs.length=0,o.a.firestore().collection("user").doc(this.user.uid).collection("exercise").get().then(function(e){t.exercises.length=0,e.forEach(function(e){var a={name:e.id,weeklyInol:0};Object.assign(a,e.data()),a.lastDate=R()(a.lastDate).format("MM[.]DD ddd"),t.exercises.push(a)}),t.calculateWeeklyInol(),t.loading=!1}).catch(function(t){console.log(JSON.stringify(t))}))},calculateWeeklyInol:function(){var t=this;this.exercises.forEach(function(e){o.a.firestore().collection("exerciseLogs").doc(t.user.uid).collection("exercise").doc(e.name).collection("day").where("date",">=",t.weekBefore).get().then(function(t){t.forEach(function(t){e.weeklyInol=Number.parseFloat(e.weeklyInol+t.data().inol).toFixed(2)})}).catch(function(t){alert(JSON.stringify(t))})})}}},dt=ct,ut=a("e0c7"),ft=Object(h["a"])(dt,lt,ot,!1,null,null,null),vt=ft.exports;m()(ft,{VCard:w["a"],VCardText:_["b"],VCardTitle:_["c"],VContainer:j["a"],VFlex:tt["a"],VLayout:at["a"],VSimpleTable:it["a"],VSubheader:ut["a"]});var ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"text-center":"",fluid:""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-date-picker",{staticClass:"mt-2",attrs:{"full-width":"",events:t.exerciseDateList,"event-color":t.eventColor,"picker-date":t.pickerMonth,dark:""},on:{"update:pickerDate":function(e){t.pickerMonth=e},"update:picker-date":function(e){t.pickerMonth=e}},model:{value:t.pickerDate,callback:function(e){t.pickerDate=e},expression:"pickerDate"}})],1),a("v-flex",{attrs:{sm1:""}},[a("v-divider",{staticClass:"hidden-sm-and-down",attrs:{vertical:""}})],1),a("v-flex",{attrs:{xs12:"",sm5:""}},[t._l(t.exercises,function(e,i){return[a("v-card",{key:i,staticClass:"my-2 mx-auto",attrs:{dark:""}},[a("v-card-title",{staticClass:"subtitle-1"},[t._v(t._s(e.name))]),a("v-divider",{staticClass:"mx-1"}),a("div",{staticClass:"pa-1"},[a("v-simple-table",[a("thead",[a("tr",[a("th",{staticClass:"text-left",staticStyle:{width:"10%"}},[t._v("Set No.")]),a("th",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v("Weight")]),a("th",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v("Lifts")]),a("th",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v("INOL")])])]),a("tbody",t._l(e.detail,function(e){return a("tr",{key:e.set},[a("td",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v(t._s(e.set))]),a("td",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v(t._s(e.weight))]),a("td",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v(t._s(e.lifts))]),a("td",{staticClass:"text-left",staticStyle:{width:"40%"}},[t._v(t._s(e.inol))])])}),0),a("thead",[a("tr",[a("th",{staticClass:"text-right",staticStyle:{width:"50%"},attrs:{colspan:"2"}},[t._v("Total INOL")]),a("th",{staticClass:"text-center",staticStyle:{width:"50%"},attrs:{colspan:"2"}},[t._v("Intensity")])])]),a("tbody",[a("tr",[a("td",{staticClass:"text-right",staticStyle:{width:"50%"},attrs:{colspan:"2"}},[t._v(t._s(e.inol))]),a("td",{staticClass:"text-center",staticStyle:{width:"50%"},attrs:{colspan:"2"}},[t._v(t._s(t.getLevel(e.inol)))])])])])],1)],1)]})],2)],1)],1)},gt=[],mt=(a("a481"),{name:"DailyLog",data:function(){return{pickerMonth:null,pickerDate:R()().format("YYYY-MM-DD"),loading:!1,user:null,exerciseDateList:[],exercises:[],cacheList:{},colorMap:["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","blue-grey","grey","black"]}},beforeCreate:function(){var t=this;o.a.auth().onAuthStateChanged(function(e){e?(t.user=e,t.fetchEvent(R()().format("YYYY-MM"))):t.user=null})},watch:{pickerDate:function(t,e){t!==e&&(this.exercises.length=0,this.fetchData(t))},pickerMonth:function(t,e){t!==e&&(this.exerciseDateList.length=0,this.fetchEvent(t))}},methods:{getLevel:function(t){return t<=.4?"Super Easy":t<=1?"Optimal":t<=2?"Tough":t>2?"Crazy":void 0},eventColor:function(t){var e=this.cacheList[this.pickerMonth];if(!e)return!1;for(var a=e.find(function(e){return e.date===t})["exercises"].reduce(function(t,e){return t+e.name},""),i=0,s=0;s<a.length;s++)i+=a.charCodeAt(s);return i%=this.colorMap.length,this.colorMap[i]},fetchEvent:function(t){var e=this;if(this.user)if(this.cacheList[t])this.exerciseDateList=this.cacheList[t].map(function(t){return t.date});else{this.cacheList[t]=[];var a=this.cacheList[t];t=t.replace(/-/gi,"");var i=t+"00",s=t+"31";this.loading=!0,o.a.firestore().collection("dayLogs").doc(this.user.uid).collection("day").where(o.a.firestore.FieldPath.documentId(),">=",i).where(o.a.firestore.FieldPath.documentId(),"<=",s).get().then(function(t){t.forEach(function(t){var e={date:R()(t.id,"YYYYMMDD").format("YYYY-MM-DD"),exercises:[]},i=t.data();for(var s in i){var n={name:s};Object.assign(n,i[s]),e.exercises.push(n)}a.push(e)}),e.exerciseDateList=a.map(function(t){return t.date}),e.fetchData(e.pickerDate)}).catch(function(t){alert(JSON.stringify(t))}).finally(function(){e.loading=!1})}},fetchData:function(t){var e=this.cacheList[this.pickerMonth].find(function(e){return e.date===t});e&&(this.exercises=e.exercises.slice(0))}}}),xt=mt,bt=a("2e4b"),pt=Object(h["a"])(xt,ht,gt,!1,null,"6426a82f",null),yt=pt.exports;m()(pt,{VCard:w["a"],VCardTitle:_["c"],VContainer:j["a"],VDatePicker:bt["a"],VDivider:S["a"],VFlex:tt["a"],VLayout:at["a"],VSimpleTable:it["a"]});var wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[a("v-select",{attrs:{items:t.items,label:"Exercise"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1),t._l(t.logs,function(e,i){return[a("v-card",{key:i,staticClass:"my-2 mx-auto",attrs:{dark:""}},[a("v-card-title",{staticClass:"subtitle-1"},[t._v(t._s(t.formatDate(e.date)))]),a("v-divider",{staticClass:"mx-1"}),a("div",{staticClass:"pa-1"},[a("v-simple-table",[a("thead",[a("tr",[a("th",{staticClass:"text-left",staticStyle:{width:"10%"}},[t._v("Set No.")]),a("th",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v("Weight")]),a("th",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v("Lifts")]),a("th",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v("INOL")])])]),a("tbody",t._l(e.detail,function(e){return a("tr",{key:e.set},[a("td",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v(t._s(e.set))]),a("td",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v(t._s(e.weight))]),a("td",{staticClass:"text-left",staticStyle:{width:"30%"}},[t._v(t._s(e.lifts))]),a("td",{staticClass:"text-left",staticStyle:{width:"40%"}},[t._v(t._s(e.inol))])])}),0),a("thead",[a("tr",[a("th",{staticClass:"text-right",staticStyle:{width:"50%"},attrs:{colspan:"2"}},[t._v("Total INOL")]),a("th",{staticClass:"text-center",staticStyle:{width:"50%"},attrs:{colspan:"2"}},[t._v("Intensity")])])]),a("tbody",[a("tr",[a("td",{staticClass:"text-right",staticStyle:{width:"50%"},attrs:{colspan:"2"}},[t._v(t._s(e.inol))]),a("td",{staticClass:"text-center",staticStyle:{width:"50%"},attrs:{colspan:"2"}},[t._v(t._s(t.getLevel(e.inol)))])])])])],1)],1)]})],2)},_t=[],jt=(a("55dd"),{name:"ExerciseLog",data:function(){return{selected:null,loading:!1,user:null,items:[],logs:[]}},beforeCreate:function(){var t=this;o.a.auth().onAuthStateChanged(function(e){e?(t.user=e,t.getExerciseList()):t.user=null})},watch:{selected:function(t,e){t!==e&&this.getLog(t)}},methods:{getLevel:function(t){return t<=.4?"Super Easy":t<=1?"Optimal":t<=2?"Tough":t>2?"Crazy":void 0},formatDate:function(t){return R()(t,"YYYYMMDD").format("YY[.]MM[.]DD dddd")},getLog:function(t){var e=this;o.a.firestore().collection("exerciseLogs").doc(this.user.uid).collection("exercise").doc(t).collection("day").get().then(function(t){e.logs.length=0,t.forEach(function(t){e.logs.push(t.data())}),e.logs.sort(function(t,e){return parseInt(e.date)-parseInt(t.date)})})},getExerciseList:function(){var t=this;o.a.firestore().collection("user").doc(this.user.uid).collection("exercise").get().then(function(e){t.items.length=0,e.forEach(function(e){t.items.push(e.id)})})}}}),kt=jt,Ct=a("62ad"),St=a("b974"),Lt=Object(h["a"])(kt,wt,_t,!1,null,null,null),Vt=Lt.exports;m()(Lt,{VCard:w["a"],VCardTitle:_["c"],VCol:Ct["a"],VContainer:j["a"],VDivider:S["a"],VRow:N["a"],VSelect:St["a"],VSimpleTable:it["a"]});var Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"text-center":"",fluid:""}},[a("c-dialog",{attrs:{dialog:t.alertYn,message:t.alertMessage,"yes-text":"OK"},on:{clickYes:function(e){t.alertYn=!1}}}),a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"500"},model:{value:t.dialogForDelete,callback:function(e){t.dialogForDelete=e},expression:"dialogForDelete"}},[a("v-card",[a("v-card-text",[t._v("\n                    Are you sure to clear?\n                ")]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(e){t.dialogForDelete=!1}}},[t._v("\n                        No\n                    ")]),a("v-btn",{attrs:{text:""},on:{click:t.deleteExercise}},[t._v(" Yes ")])],1)],1)],1),a("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Add New Exercise")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{rules:t.nameRules,label:"Exercise Name",required:""},model:{value:t.newExercise,callback:function(e){t.newExercise=e},expression:"newExercise"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{rules:t.maxWeightRules,label:"1 RM Weight",required:""},model:{value:t.newExerciseMaxWeight,callback:function(e){t.newExerciseMaxWeight=e},expression:"newExerciseMaxWeight"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n                        Cancel\n                    ")]),a("v-btn",{attrs:{text:""},on:{click:t.add}},[t._v("\n                        Save\n                    ")])],1)],1)],1)],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,"show-select":"","item-key":"exercise","hide-default-footer":"","disable-pagination":"","disable-filtering":"",items:t.listOfWorkout,"items-per-page":1e3},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)},Et=[],It={name:"MyWorkout",data:function(){return{alertYn:!1,alertMessage:null,dialog:!1,dialogForDelete:!1,newExercise:null,newExerciseMaxWeight:0,nameRules:[function(t){return!!t||"Exercise Name is required"}],maxWeightRules:[function(t){return!(isNaN(t)||t<0)||"1 RM Weight must be a positive number"}],headers:[{text:"Exercise",align:"left",value:"exercise"},{text:"1 RM Weight",value:"maxWeight"}],listOfWorkout:[],selected:[],user:null}},beforeCreate:function(){var t=this;o.a.auth().onAuthStateChanged(function(e){e?(t.user=e,t.fetch()):t.user=null}),u.bus.$on("addMyExercise",function(){t.newExercise="",t.newExerciseMaxWeight=0,t.dialog=!0}),u.bus.$on("deleteMyExercise",function(){t.selected.length>0?t.dialogForDelete=!0:t.alert("No selected items")})},methods:{alert:function(t){this.alertYn=!0,this.alertMessage=t},add:function(){},deleteExercise:function(){},fetch:function(){var t=this;o.a.firestore().collection("user").doc(this.user.uid).collection("exercise").get().then(function(e){t.listOfWorkout.length=0,e.forEach(function(e){t.listOfWorkout.push({exercise:e.id,maxWeight:e.data().maxWeight})})})}},components:{"c-dialog":U}},Mt=It,Ot=a("8fea"),Ft=Object(h["a"])(Mt,Dt,Et,!1,null,null,null),Nt=Ft.exports;m()(Ft,{VBtn:y["a"],VCard:w["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VCol:Ct["a"],VContainer:j["a"],VDataTable:Ot["a"],VDialog:C["a"],VDivider:S["a"],VRow:N["a"],VSpacer:Y["a"],VTextField:st["a"]}),i["a"].config.productionTip=!1,i["a"].use(s["a"]);var Yt={apiKey:"AIzaSyAhjZhtId1T-VZkTISO-6_DqZKJHmNU3e4",authDomain:"inol-logger.firebaseapp.com",databaseURL:"https://inol-logger.firebaseio.com",projectId:"inol-logger",storageBucket:"",messagingSenderId:"411681502470",appId:"1:411681502470:web:7e8857ab742c1015"};o.a.initializeApp(Yt);var Wt=[{path:"/",component:rt,meta:{title:"INOL Calculator"}},{path:"/calculator",name:"Calculator",component:rt,meta:{title:"INOL Calculator"}},{path:"/weekly_summary",name:"WeeklySummary",component:vt,meta:{title:"Weekly Summary",requiresAuth:!0}},{path:"/daily_log",name:"DailyLog",component:yt,meta:{title:"Daily Log",requiresAuth:!0}},{path:"/exercise_log",name:"ExerciseLog",component:Vt,meta:{title:"Exercise Log",requiresAuth:!0}},{path:"/my_exercise",name:"MyExercise",component:Nt,meta:{title:"My Exercise",requiresAuth:!0}},{path:"*",redirect:"/"}],Tt=new s["a"]({routes:Wt});new i["a"]({vuetify:r,router:Tt,render:function(t){return t(A)}}).$mount("#app")}});
//# sourceMappingURL=app.57446556.js.map