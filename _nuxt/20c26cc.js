(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{479:function(t,n,e){"use strict";e.r(n);e(44);var r=e(14),c={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r,c,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.app,r=t.$content,n.next=3,r(e.i18n.locale+"/pages/contest").fetch();case 3:return c=n.sent,n.next=6,r(e.i18n.locale+"/pages/index").fetch();case 6:return o=n.sent,n.abrupt("return",{contest:c,index:o});case 8:case"end":return n.stop()}}),n)})))()},data:function(){return{}},mounted:function(){},methods:{}},o=e(40),l=e(37),v=e.n(l),d=e(176),m=e(396),_=e(167),f=e(397),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("section",{class:{"px-3":t.$vuetify.breakpoint.smAndDown},staticStyle:{"background-color":"#fff1d0","padding-bottom":"80px"}},[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[e("p",{staticClass:"mt-12"},[t._v("\n          "+t._s(t.$t("misc.ui.theme"))+"\n        ")]),t._v(" "),e("h1",{},[t._v("\n          "+t._s(t.index.theme)+"\n        ")]),t._v(" "),e("p",[t._v("\n          "+t._s(t.contest.intro)+"\n        ")])])],1)],1),t._v(" "),e("section",{staticStyle:{"margin-top":"-60px"}},[e("v-row",{attrs:{justify:"center"}},[e("v-col",{staticClass:"ma-3",attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6"}},[e("v-card",{staticClass:"pa-3",attrs:{color:"#bfaa78",flat:"",target:"_blank",to:"/rules_"+t.$i18n.locale+".pdf"}},[e("v-row",[e("v-col",{attrs:{cols:"3",align:"right"}},[e("v-icon",{staticClass:"rotate-24 mr-3",attrs:{"x-large":"",color:"black"}},[t._v("mdi-file-pdf")])],1),t._v(" "),e("v-col",{attrs:{cols:"9"}},[t._v(" "+t._s(t.$t("misc.ui.download_rules")))])],1)],1)],1)],1),t._v(" "),e("nuxt-content",{staticClass:"pa-6",attrs:{document:t.contest}}),t._v(" "),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"9"}},[e("v-card",{staticClass:"pa-6",staticStyle:{"margin-bottom":"-120px"},attrs:{color:"#88cdea"}},[e("h1",[t._v("\n                "+t._s(t.$t("misc.ui.award"))+"\n              ")]),t._v("\n              "+t._s(t.contest.award)+"\n            ")])],1)],1)],1)],1)],1),t._v(" "),e("section",{staticStyle:{"background-color":"#b0e0f5","padding-top":"100px"}},[e("v-row",{attrs:{justify:"center"}},[e("v-col",{staticClass:"ma-3",attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[e("h1",{staticClass:"mt-6"},[t._v("\n          "+t._s(t.contest.criterions.title)+"\n        ")]),t._v("\n        "+t._s(t.contest.criterions.text)+"\n      ")])],1)],1)])}),[],!1,null,null,null);n.default=component.exports;v()(component,{VCard:d.a,VCol:m.a,VIcon:_.a,VRow:f.a})}}]);