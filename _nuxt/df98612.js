(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{407:function(t,e,r){"use strict";r.r(e);var n=r(470),o={props:{item:{type:Object,default:function(){}}},computed:{dateAgo:function(){console.log("this.item.createdAt: ",this.item.createdAt);var t=new Date(this.item.createdAt);return console.log("date: ",t),Object(n.a)(t,new Date)+" ago"}}},l=r(40),c=r(37),v=r.n(c),m=r(174),d=r(78),f=r(425),_=r(140),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("v-card",{attrs:{nuxt:"",to:t.localePath("/news/"+t.item.slug),color:"#fff1d0",elevation:n?12:2}},[r("v-img",{attrs:{contain:"",src:t.item.image}}),t._v(" "),r("v-card-title",[t._v(" "+t._s(t.item.title)+" ")]),t._v(" "),r("v-card-subtitle",[t._v(" "+t._s(t.dateAgo))]),t._v(" "),r("v-card-text",[t._v("\n      "+t._s(t.item.subtitle)+"\n    ")])],1)]}}])})}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCard:m.a,VCardSubtitle:d.b,VCardText:d.c,VCardTitle:d.d,VHover:f.a,VImg:_.a})},410:function(t,e,r){var content=r(429);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("5abffe7f",content,!0,{sourceMap:!1})},428:function(t,e,r){"use strict";r(410)},429:function(t,e,r){(e=r(12)(!1)).push([t.i,".rotate-24{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0.5);transform:rotate(24deg);display:inline-block}",""]),t.exports=e},474:function(t,e,r){"use strict";r.r(e);r(44);var n=r(14),o={components:{},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,n=t.$content,e.next=3,n(r.i18n.locale+"/news").where({draft:!1}).sortBy("createdAt").fetch();case 3:return o=e.sent,console.log("featured: ",o),e.abrupt("return",{news:o});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{colors:["indigo","red lighten-1","deep-purple accent-4"],slides:["First","Second","Third"]}},mounted:function(){console.log(this.$route),console.log(this.$router)}},l=(r(428),r(40)),c=r(37),v=r.n(c),m=r(174),d=r(394),f=r(166),_=r(140),w=r(169),h=r(112),V=r(171),x=r(56),y=r(395),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticStyle:{"background-color":"#fff1d0","padding-bottom":"80px"}},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[r("h1",{staticClass:"my-6"},[t._v("\n          "+t._s(t.$t("navigation.news"))+"\n        ")]),t._v(" "),r("p",[t._v("\n          "+t._s(t.$t("misc.ui.news_intro"))+"\n        ")])])],1)],1),t._v(" "),r("section",{staticStyle:{"margin-top":"-60px"}},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticClass:"ma-3",attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"8"}},[r("v-card",{staticClass:"pa-3",attrs:{color:"#bfaa78",flat:"",href:"http://eepurl.com/hgbB6f",target:"_blank"}},[r("v-row",[r("v-col",{attrs:{cols:"2",align:"right"}},[r("v-icon",{staticClass:"rotate-24 mr-3",attrs:{"x-large":"",color:"black"}},[t._v("mdi-email")])],1),t._v(" "),r("v-col",{attrs:{cols:"9"}},[t._v(" "+t._s(t.$t("misc.ui.subscribe2")))])],1)],1)],1)],1),t._v(" "),r("v-row",[t.$vuetify.breakpoint.mdAndUp?t._l(t.news,(function(t,e){return r("v-col",{key:e,attrs:{cols:"12",sm:"6",md:"4"}},[r("NewsItem",{attrs:{item:t}})],1)})):[r("v-list",{attrs:{"three-line":""}},[t._l(t.news,(function(e){return[r("v-list-item",{key:e.title},[r("v-list-item-avatar",{attrs:{tile:""}},[r("v-img",{attrs:{src:e.image}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{innerHTML:t._s(e.title)}},[t._v(t._s(e.title))]),t._v(" "),r("v-list-item-subtitle",[t._v(t._s(e.createdAt.split("T")[0]+" - "+e.subtitle))])],1)],1)]}))],2)]],2)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;v()(component,{NewsItem:r(407).default}),v()(component,{VCard:m.a,VCol:d.a,VIcon:f.a,VImg:_.a,VList:w.a,VListItem:h.a,VListItemAvatar:V.a,VListItemContent:x.a,VListItemSubtitle:x.b,VListItemTitle:x.c,VRow:y.a})}}]);