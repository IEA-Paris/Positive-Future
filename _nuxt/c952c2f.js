(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{441:function(e,t,r){"use strict";var strong=r(250),n=r(193);e.exports=r(251)("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return strong.def(n(this,"Set"),e=0===e?0:e,e)}},strong)},448:function(e,t,r){"use strict";r.r(t);var n={props:{items:{type:Array,required:!0},label:{type:Boolean,default:!0},relatedKey:{type:String,default:"true"},filters:{type:Array,required:!1}},data:function(){return{showMore:!1}},computed:{}},l=r(36),o=r(43),c=r.n(o),v=r(180),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"ma-n1"},e._l(e.items,(function(t,n){return r("v-chip",{key:n,staticClass:"ma-1",attrs:{color:"relatedKey === 'issues'?'primary':'secondary'",outlined:e.filters&&e.filters.includes(t)}},[e._v("\n      "+e._s(e.$t("resources."+e.relatedKey+"."+t))+"\n    ")])})),1)])}),[],!1,null,null,null);t.default=component.exports;c()(component,{VChip:v.a})},453:function(e,t,r){"use strict";r.r(t);r(10);var n=r(219);function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,r){return(o=l()?Reflect.construct:function(e,t,r){var a=[null];a.push.apply(a,t);var l=new(Function.bind.apply(e,a));return r&&Object(n.a)(l,r.prototype),l}).apply(null,arguments)}r(6),r(5),r(32),r(441);var c=r(30),v=(r(52),r(19)),d={asyncData:function(e){return Object(v.a)(regeneratorRuntime.mark((function t(){var r,n,l,v,d,f,m,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.app,n=e.$content,console.log("app: ",r),t.next=4,n(r.i18n.locale+"/pages/resources").fetch();case 4:return l=t.sent,t.next=7,n("resources").where().fetch();case 7:return v=t.sent,d=Object(c.a)(new Set(v.map((function(e){return e.type})))).sort(),f=Object(c.a)(new Set(v.map((function(e){return e.lang})))).sort(),m=Object(c.a)(o(Set,Object(c.a)(v.map((function(e){return e.issues}))))).sort(),h=Object(c.a)(o(Set,Object(c.a)(v.map((function(e){return e.perspectives}))))).sort(),t.abrupt("return",{types:d,issues:m,languages:f,perspectives:h,resources:l,items:v});case 13:case"end":return t.stop()}}),t)})))()},data:function(){return{browsing:!1,itemsPerPageArray:[10,20,50,100],filter:{},sortDesc:!1,page:1,itemsPerPage:4,sortBy:"name",categories:[{name:"imagine_a_far_away_future",icon:"head-cog"},{name:"stimulate_your_creativity",icon:"creation"},{name:"stay_positive",icon:"arm-flex"},{name:"think_of_your_ideal_city",icon:"city"},{name:"face_our_challenges_today",icon:"white-balance-sunny"},{name:"learn_from_the_past",icon:"rewind"}],filters:{search:"",category:!1,type:[],issues:[],perspectives:[],lang:[]}}},computed:{},watch:{filters:{deep:!0,immediate:!0,handler:function(e){var t=this;return Object(v.a)(regeneratorRuntime.mark((function r(){var n,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("v: ",e),l={},Object.keys(e).map((function(filter){var t;console.log("filter: ",filter),null!==(t=e[filter])&&void 0!==t&&t.length&&(console.log("filter length: ",filter),l[filter]={$in:e[filter]})})),console.log("query: ",l),null!==(n=e.category)&&void 0!==n&&n.length&&(t.browsing=!0),r.next=7,t.$content("resources").where(l).fetch();case 7:t.items=r.sent;case 8:case"end":return r.stop()}}),r)})))()}}},mounted:function(){},methods:{}},f=r(36),m=r(43),h=r.n(m),y=r(179),_=r(183),x=r(67),C=r(180),w=r(420),k=r(461),$=r(172),V=r(93),j=r(29),S=r(4),O=r(8),P=Object(S.a)(V.a,j.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(O.c)("v-hover should only contain a single element",this),element)):(Object(O.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}}),R=r(173),A=r(146),L=r(117),D=r(178),I=r(50),T=r(175),E=r(422),M=r(407),B=r(87),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",{staticClass:"text-h2 pt-6 text-uppercase text-center"},[e._v("\n    "+e._s(e.resources.title)+"\n  ")]),e._v(" "),r("v-responsive",{staticClass:"mx-auto my-6",attrs:{width:"56"}},[r("v-divider",{staticClass:"mb-1"}),e._v(" "),r("v-divider")],1),e._v(" "),r("nuxt-content",{staticClass:"pa-3",attrs:{document:e.resources}}),e._v(" "),e.browsing?r("v-data-iterator",{attrs:{items:e.items,"items-per-page":e.itemsPerPage,page:e.page,search:e.filters.search},on:{"update:itemsPerPage":function(t){e.itemsPerPage=t},"update:items-per-page":function(t){e.itemsPerPage=t}},scopedSlots:e._u([{key:"header",fn:function(){return[r("v-row",{staticClass:"mx-3"},[r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{clearable:"",multiple:"",outlined:"","hide-details":"","prepend-inner-icon":"mdi-magnify",label:"Search"},model:{value:e.filters.search,callback:function(t){e.$set(e.filters,"search",t)},expression:"filters.search"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-select",{attrs:{outlined:"",multiple:"","hide-details":"",items:e.categories.map((function(t){return{text:e.$t("resources.categories."+t.name),value:t.name}})),label:"Category"},model:{value:e.filters.category,callback:function(t){e.$set(e.filters,"category",t)},expression:"filters.category"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-select",{attrs:{outlined:"",multiple:"","hide-details":"",items:e.types.map((function(t){return{text:e.$t("resources.types."+t),value:t}})),label:"Type"},model:{value:e.filters.type,callback:function(t){e.$set(e.filters,"type",t)},expression:"filters.type"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-select",{attrs:{outlined:"",multiple:"","hide-details":"",items:e.perspectives.map((function(t){return{text:e.$t("resources.perspectives."+t),value:t}})),label:"Perspectives and approaches"},model:{value:e.filters.perspective,callback:function(t){e.$set(e.filters,"perspective",t)},expression:"filters.perspective"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-select",{attrs:{outlined:"",multiple:"","hide-details":"",items:e.issues.map((function(t){return{text:e.$t("resources.issues."+t),value:t}})),label:"Issues and challenges"},model:{value:e.filters.issue,callback:function(t){e.$set(e.filters,"issue",t)},expression:"filters.issue"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-select",{attrs:{outlined:"",multiple:"","hide-details":"",items:e.languages.map((function(t){return{text:e.$t("misc.languages."+t.toLowerCase()),value:t}})),label:"Languages"},model:{value:e.filters.lang,callback:function(t){e.$set(e.filters,"lang",t)},expression:"filters.lang"}})],1)],1)]},proxy:!0},{key:"no-results",fn:function(){return[r("div",{staticClass:"ml-6"},[e._v("{{$t('resources.noResultsTex}t')}")])]},proxy:!0},{key:"no-data",fn:function(){return[r("div",{staticClass:"ml-6"},[e._v(e._s(e.$t("resources.noDataText")))])]},proxy:!0},{key:"default",fn:function(t){return[r("v-row",{staticClass:"mx-3"},e._l(t.items,(function(t){return r("v-col",{key:t.name,attrs:{cols:"12"}},[r("v-card",{attrs:{link:"",href:t.url,to:t.file,target:t.url&&t.url.length?"_blank":"self"}},[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("div",{staticClass:"overline mb-4"},[e._v("\n                  "+e._s(t.category)+"\n                ")]),e._v(" "),r("v-list-item-title",{staticClass:"headline mb-1"},[e._v("\n                  "+e._s(t.name)+"\n                ")]),e._v(" "),r("v-list-item-subtitle",[r("v-img",{staticClass:"d-inline-block",attrs:{src:"EN"===t.lang?"https://cdn.vuetifyjs.com/images/flags/us.png":"https://cdn.vuetifyjs.com/images/flags/fr.png",width:"30",height:"20"}}),e._v(" "),r("v-chip",{staticClass:"ma-1",attrs:{label:"",outlined:""}},[e._v("\n                    "+e._s(e.$t("resources.types."+t.type))+"\n                  ")]),e._v("\n                  "+e._s(t.author))],1)],1),e._v(" "),r("v-list-item-avatar",[r("v-icon",[e._v("mdi-"+e._s(t.icon))])],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-text",[r("p",[e._v("\n                "+e._s(t["description_"+e.$i18n.locale.toLowerCase()])+"\n              ")]),e._v(" "),r("ChipsContainer",{attrs:{filters:e.filters.perspective,"related-key":"perspectives",items:t.perspectives.sort()}}),e._v(" "),r("ChipsContainer",{attrs:{"related-key":"issues",items:t.issues.sort(),filters:e.filters.issue}})],1)],1)],1)})),1)]}}])}):r("v-row",{staticClass:"mx-3"},e._l(e.categories,(function(t,n){return r("v-col",{key:n,attrs:{cols:"12",sm:"6",md:"4"}},[r("v-hover",{scopedSlots:e._u([{key:"default",fn:function(n){var l=n.hover;return[r("v-card",{staticClass:"pa-6 text-center",attrs:{flat:"",elevation:l?12:2,height:"100%"},on:{click:function(r){e.filters.category=[t.name]}}},[r("v-avatar",{attrs:{color:"#00c2cb",size:"44"}},[r("v-icon",{attrs:{dark:""}},[e._v(" mdi-"+e._s(t.icon)+" ")])],1),e._v(" "),r("v-card-title",{staticClass:"justify-center font-weight-black text-uppercase",staticStyle:{"word-break":"normal"}},[e._v("\n            "+e._s(e.$t("resources.categories."+t.name))+"\n          ")]),e._v(" "),r("v-card-text",{staticClass:"text-left"},[e._v(e._s(e.$t("resources.categoriesTexts."+t.name))+"\n          ")])],1)]}}],null,!0)})],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{ChipsContainer:r(448).default}),h()(component,{VAvatar:y.a,VCard:_.a,VCardText:x.b,VCardTitle:x.c,VChip:C.a,VCol:w.a,VDataIterator:k.a,VDivider:$.a,VHover:P,VIcon:R.a,VImg:A.a,VListItem:L.a,VListItemAvatar:D.a,VListItemContent:I.a,VListItemSubtitle:I.b,VListItemTitle:I.c,VResponsive:T.a,VRow:E.a,VSelect:M.a,VTextField:B.a})}}]);