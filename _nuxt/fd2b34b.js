(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{188:function(t,e,n){"use strict";e.a=function(t){t.app.i18n.beforeLanguageSwitch=function(t,e){}}},213:function(t,e,n){var content=n(284);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("69884628",content,!0,{sourceMap:!1})},220:function(t,e,n){var content=n(311);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("63434fe0",content,!0,{sourceMap:!1})},221:function(t,e,n){var content=n(313);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("6ea81be6",content,!0,{sourceMap:!1})},235:function(t,e,n){"use strict";n.r(e);var o={computed:{languages:function(){return[{value:"en",text:this.$t("common.en"),flagSrc:"https://cdn.vuetifyjs.com/images/flags/us.png"},{value:"fr",text:this.$t("common.fr"),flagSrc:"https://cdn.vuetifyjs.com/images/flags/fr.png"}]}}},r=n(37),c=n(43),l=n.n(c),v=n(146),d=n(405),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"max-width":"80px"},attrs:{id:"language-picker"}},[n("v-select",{attrs:{value:t.$i18n.locale,"hide-details":"",items:t.languages,outlined:"",flat:"",text:""},on:{change:function(e){return t.$i18n.setLocale(e)}},scopedSlots:t._u([{key:"selection",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(n.text.substring(0,2).toUpperCase())+"\n    ")]}},{key:"item",fn:function(e){var o=e.item;return[n("v-img",{attrs:{src:o.flagSrc,width:"30",height:"20"}}),t._v(" \n      "+t._s(o.text)+"\n    ")]}}])})],1)}),[],!1,null,"04e12ece",null);e.default=component.exports;l()(component,{VImg:v.a,VSelect:d.a})},244:function(t,e,n){"use strict";var o={data:function(){return{drawer:!1}},computed:{languages:function(){return[{value:"en",text:this.$t("common.en"),flagSrc:"https://cdn.vuetifyjs.com/images/flags/us.png"},{value:"fr",text:this.$t("common.fr"),flagSrc:"https://cdn.vuetifyjs.com/images/flags/fr.png"}]}},created:function(){},methods:{onScroll:function(t){this.$store.commit("setOffsetTop",t.target.scrollingElement.scrollTop)}}},r=(n(310),n(37)),c=n(43),l=n.n(c),v=n(414),d=n(183),f=n(181),m=n(418),h=n(56),_=n(173),x=n(146),y=n(177),w=n(117),k=n(64),C=n(422),$=n(423),V=n(420),S=n(421),P=n(238),F=n.n(P),T=n(150),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}]},[n("v-main",[t.$vuetify.breakpoint.mdAndUp?n("TopBar"):t._e(),t._v(" "),t.$vuetify.breakpoint.smAndDown?n("LanguagePicker"):t._e(),t._v(" "),t.$vuetify.breakpoint.smAndDown?n("v-btn",{attrs:{id:"menu_btn",large:"",icon:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[n("v-icon",{attrs:{large:"",color:"black"}},[t._v("mdi-menu")])],1):t._e(),t._v(" "),n("Particles"),t._v(" "),n("v-navigation-drawer",{staticClass:"text-right",attrs:{fixed:"",temporary:"",right:"",color:"rgb(217, 217, 217)","overlay-color":"white"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("div",{staticClass:"d-flex flex-row-reverse"},[n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"ma-3",attrs:{large:"",icon:""},on:{click:function(e){t.drawer=!1}}},o),[n("v-icon",{attrs:{color:"black"}},[t._v("mdi-close")])],1)]}}])},[t._v(" "),n("span",[t._v("Close the menu")])])],1),t._v(" "),n("v-list",[n("v-list-item",{attrs:{link:"",to:t.localePath("/contest")}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h5"},[t._v("\n              "+t._s(t.$t("common.contest.title")))])],1)],1),t._v(" "),n("v-list-item",{attrs:{link:"",to:t.localePath("/who")}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h5"},[t._v("\n              "+t._s(t.$t("common.who.title")))])],1)],1),t._v(" "),n("v-list-item",{attrs:{link:"",to:t.localePath("/resources")}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h5"},[t._v("\n              "+t._s(t.$t("common.resources.title")))])],1)],1)],1)],1),t._v(" "),n("v-row",{attrs:{align:"center","no-gutters":"",justify:"center"}},[t.$vuetify.breakpoint.smAndDown?n("nuxt-link",{attrs:{to:t.localePath("index")}},[n("v-img",{staticClass:"logo my-12",attrs:{src:"/logo.svg",contain:""}})],1):t._e(),t._v(" "),n("v-col",{staticClass:"ma-3",attrs:{xs:"12",sm:"11",md:"9",lg:"9",xl:"8"}},[n("v-card",{staticClass:"mx-auto",attrs:{id:"content","max-width":"1000"}},[n("nuxt")],1)],1)],1)],1),t._v(" "),n("Footer"),t._v(" "),n("v-fab-transition",[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.offsetTop>600,expression:"$store.state.offsetTop > 600"}],attrs:{color:"secondary",fixed:"",bottom:"",right:"",contained:"",fab:""},on:{click:function(e){return t.$vuetify.goTo(0)}}},[n("v-icon",{attrs:{color:t.$vuetify.theme.isDark?"primary":"white"}},[t._v("\n        mdi-arrow-up\n      ")])],1)],1)],1)}),[],!1,null,"693388f1",null);e.a=component.exports;l()(component,{TopBar:n(401).default,LanguagePicker:n(235).default,Particles:n(400).default,Footer:n(398).default}),l()(component,{VApp:v.a,VBtn:d.a,VCard:f.a,VCol:m.a,VFabTransition:h.c,VIcon:_.a,VImg:x.a,VList:y.a,VListItem:w.a,VListItemContent:k.a,VListItemTitle:k.c,VMain:C.a,VNavigationDrawer:$.a,VRow:V.a,VTooltip:S.a}),F()(component,{Scroll:T.b})},258:function(t,e,n){n(259),t.exports=n(260)},283:function(t,e,n){"use strict";n(213)},284:function(t,e,n){(e=n(13)(!1)).push([t.i,"h1[data-v-c2a714d4]{font-size:20px}",""]),t.exports=e},310:function(t,e,n){"use strict";n(220)},311:function(t,e,n){(e=n(13)(!1)).push([t.i,'.layout-enter-active[data-v-693388f1],.layout-leave-active[data-v-693388f1]{transition:opacity .3s}.layout-enter[data-v-693388f1],.layout-leave-active[data-v-693388f1]{opacity:0}.page-enter-active[data-v-693388f1],.page-leave-active[data-v-693388f1]{transition:opacity .3s}.page-enter[data-v-693388f1],.page-leave-active[data-v-693388f1]{opacity:0}.fade-enter-active[data-v-693388f1],.fade-leave-active[data-v-693388f1]{transition:opacity .3s}.fade-enter[data-v-693388f1],.fade-leave-active[data-v-693388f1]{opacity:0}.nuxt-content h1[data-v-693388f1]{font-weight:700;font-size:28px}.nuxt-content h2[data-v-693388f1]{font-weight:400;line-height:2rem;font-family:"Roboto",sans-serif;font-size:1.5rem;letter-spacing:normal;padding:12px;margin-left:12px}@media(max-width:800px){.nuxt-content h2[data-v-693388f1]{padding:6px;margin-left:6px}}@media(max-width:600px){.nuxt-content h2[data-v-693388f1]{padding:0;margin-left:0}}.nuxt-content hr[data-v-693388f1]{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.nuxt-content h3[data-v-693388f1]{font-weight:700;font-size:22px}.nuxt-content li[data-v-693388f1],.nuxt-content p[data-v-693388f1]{padding:12px;margin-left:12px;flex:1 1 auto;max-width:100%;font-family:"Roboto",sans-serif;font-size:16px;line-height:24px}@media(max-width:800px){.nuxt-content li[data-v-693388f1],.nuxt-content p[data-v-693388f1]{padding:6px;margin-left:6px}}@media(max-width:600px){.nuxt-content li[data-v-693388f1],.nuxt-content p[data-v-693388f1]{padding:0;margin-left:0}}.logo[data-v-693388f1]{max-height:15vh;z-index:2}#menu_btn[data-v-693388f1]{position:fixed;z-index:3;right:0;margin-top:10px;margin-right:10px}#language-picker[data-v-693388f1]{position:absolute;top:0;left:0;z-index:3;width:80px;margin-top:10px;margin-left:10px}#content[data-v-693388f1]{z-index:2}#content.sm[data-v-693388f1]{padding-top:5vh;height:40vh}#content.sm .public_logo[data-v-693388f1]{max-height:20vh}#content.md[data-v-693388f1]{padding-top:7vh;height:44vh}#content.md .public_logo[data-v-693388f1]{max-height:20vh}#content.lg[data-v-693388f1]{padding-top:7vh;height:44vh}#content.lg .public_logo[data-v-693388f1]{max-height:20vh}#content.xl[data-v-693388f1]{padding-top:7vh;height:44vh}#content.xl .public_logo[data-v-693388f1]{max-height:20vh}div[id^=particles-instance-][data-v-693388f1]{height:100vh!important;width:100vw!important;position:fixed!important;top:0!important;margin:0!important;padding:0!important;overflow:hidden!important;z-index:2!important}',""]),t.exports=e},312:function(t,e,n){"use strict";n(221)},313:function(t,e,n){(e=n(13)(!1)).push([t.i,".v-sheet.v-app-bar.v-toolbar{transition:background-color .3s ease-out!important}",""]),t.exports=e},385:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r}));var o=function(){return{offsetTop:0,tab:"",scrolling:!1,contactOnly:!1}},r={setContactOnly:function(t,e){t.contactOnly=e},setOffsetTop:function(t,e){t.offsetTop=e},setTab:function(t,e){void 0!==e&&(t.tab=e,1===e&&(t.contactOnly=!1),3===e&&(t.contactOnly=!0))},lockScrolling:function(t){t.scrolling=!0},unlockScrolling:function(t){t.scrolling=!1}}},390:function(t,e,n){var map={"./en-US":[251,0],"./en-US.js":[251,0],"./fr-FR":[252,1],"./fr-FR.js":[252,1],"./languages":[253,2],"./languages.js":[253,2]};function o(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],o=e[0];return n.e(e[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(map)},o.id=390,t.exports=o},398:function(t,e,n){"use strict";n.r(e);var o=[{url:"https://github.com/IEA_Paris/positive_future",text:"See this website source code and contribute",icon:"github"},{url:"https://twitter.com/positive_future",text:"Follow us on Twitter",icon:"twitter"},{url:"https://www.linkedin.com/company/positive_future/",text:"Visit our Linkedin page",icon:"linkedin"},{url:"https://www.facebook.com/positive_future/",text:"Visit our Facebook page",icon:"facebook"}],r={data:function(){return{showCredits:!1,socialIcons:o}},created:function(){},methods:{storeTheme:function(){console.log("this.$vuetify.theme.isDark: ",this.$vuetify.theme.isDark),localStorage.setItem("darkMode",this.$vuetify.theme.isDark)}}},c=n(37),l=n(43),v=n.n(l),d=n(183),f=n(418),m=n(419),h=n(173),_=n(420),x=n(421),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticStyle:{"z-index":"2"}},[n("v-row",{attrs:{align:"center","no-gutters":"",justify:"center"}},[n("v-col",{staticClass:"text-center",attrs:{xs:"12",sm:"11",md:"9",lg:"9",xl:"8"}},[n("a",{staticClass:"black--text",staticStyle:{"text-decoration":"none",cursor:"pointer"},attrs:{href:"mailto:info@positive-future.org"}},[t._v(t._s(t.$t("common.contact_us")))]),t._v(" - \n      "),n("a",{staticClass:"black--text",staticStyle:{"text-decoration":"none"},attrs:{href:"http://eepurl.com/hgbB6f"}},[t._v("\n        "+t._s(t.$t("common.subscribe")))]),t._v(" - \n      "),n("a",{staticClass:"black--text",staticStyle:{"text-decoration":"none"},on:{click:function(e){t.showCredits=!0}}},[t._v("\n        "+t._s(t.$t("common.seeCredits")))]),t._v(" "),n("br"),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{text:"",icon:""}},o),[n("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"http://creativecommons.org/licenses/by-sa/4.0/",target:"_blank",rel:"noopener noreferrer"}},[n("v-icon",{attrs:{color:t.$vuetify.theme.isDark?"white":"secondary"}},[t._v("mdi-creative-commons")])],1)])]}}])},[t._v(" "),n("span",[t._v("This website is licenced under Creative Commons")])]),t._v("\n      "+t._s((new Date).getFullYear())+" - "+t._s(t.$t("common.maintained"))+"\n      "),n("a",{staticStyle:{"text-decoration":"none"},attrs:{href:t.$t("common.who.iea.url"),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.$t("common.maintainer")))]),t._v(".\n    ")],1)],1),t._v(" "),n("Credits",{attrs:{credits:t.showCredits},on:{"close-credits":function(e){t.showCredits=!1}}})],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{Credits:n(399).default}),v()(component,{VBtn:d.a,VCol:f.a,VFooter:m.a,VIcon:h.a,VRow:_.a,VTooltip:x.a})},399:function(t,e,n){"use strict";n.r(e);var o={props:{credits:{type:Boolean,default:!1,required:!1}}},r=n(37),c=n(43),l=n.n(c),v=n(179),d=n(183),f=n(181),m=n(67),h=n(417),_=n(172),x=n(173),y=n(146),w=n(415),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{scrollable:"","max-width":"700px",light:""},on:{"click:outside":function(e){return t.$emit("close-credits")}},model:{value:t.credits,callback:function(e){t.credits=e},expression:"credits"}},[n("v-card",[n("v-card-title",[n("v-avatar",{staticClass:"mr-3",attrs:{small:"",tile:"",color:"grey lighten-5",size:"72"}},[n("v-img",{attrs:{contain:"","max-height":"100%",src:"/logo.svg"}})],1),t._v("Credits\n      "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$emit("close-credits")}}},[n("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"pt-6 px-6 subtitle-1"},[t._v("\n      Positive-future is a collective effort that originated from\n      "),n("a",{attrs:{href:"https://www.paris-iea.fr",target:"_blank"}},[t._v("IAS Paris - IEA de Paris")]),t._v(".\n      "),n("br"),t._v(" "),n("b",[t._v("Thanks")]),t._v("\n      to all those whose contribution and collective intelligence provides us\n      all with this shared resource.\n      "),n("br"),t._v("This is a non-profit initiative. We welcome donations.\n      "),n("br"),t._v(" "),n("nuxt-link",{staticClass:"blue--text",attrs:{to:t.localePath("privacy_policy")}},[t._v("Privacy Policy")]),t._v(" - \n      "),n("nuxt-link",{staticClass:"blue--text",attrs:{to:t.localePath("who")}},[t._v(t._s(t.$t("common.who.title")))]),t._v(" - \n      "),n("nuxt-link",{staticClass:"blue--text",attrs:{to:t.localePath("contest")}},[t._v(t._s(t.$t("common.contest.title")))]),t._v(" - \n      "),n("a",{staticClass:"blue--text",staticStyle:{"text-decoration":"underline",cursor:"pointer"},attrs:{href:"mailto:info@positive-future.org"}},[t._v("Contact us")]),t._v(" "),n("br"),t._v(" "),n("v-divider"),t._v("This website and logo as well as its infrastructure have\n      been designed by IAS Paris. It is powered by\n      "),n("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank"}},[t._v("Nuxt")]),t._v(" and\n      "),n("a",{attrs:{href:"http://vuetifyjs.com",target:"_blank"}},[t._v("Vuetify")]),t._v("\n      ."),n("br"),t._v("All the images used are free of rights (or distributed as such).\n      "),n("br"),t._v(" "),n("span",{staticClass:"caption"},[n("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by-sa/4.0/"}},[n("img",{staticStyle:{"border-width":"0"},attrs:{alt:"Creative Commons License",src:"https://i.creativecommons.org/l/by-sa/4.0/88x31.png"}})]),t._v(" "),n("br"),t._v(" "),n("span",{attrs:{"xmlns:dct":"http://purl.org/dc/terms/",property:"dct:title"}},[t._v("Positive-Future")]),t._v("\n        by\n        "),n("a",{attrs:{"xmlns:cc":"http://creativecommons.org/ns#",href:"https://wprn.org",property:"cc:attributionName",rel:"cc:attributionURL"}},[t._v("IAS Paris")]),t._v("\n        is licensed under a\n        "),n("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by-sa/4.0/"}},[t._v("\n          Creative Commons Attribution-ShareAlike 4.0 International License ")]),t._v(". "),n("br"),t._v("Based on a work at\n        "),n("a",{attrs:{"xmlns:dct":"http://purl.org/dc/terms/",href:"https://github.com/IEA-Paris/Positive-Future",rel:"dct:source"}},[t._v("https://github.com/IEA-Paris/Positive-Future")]),t._v("\n        By Antoine Cordelois.\n      ")])],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.$emit("close-credits")}}},[t._v("\n        Close\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAvatar:v.a,VBtn:d.a,VCard:f.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VDialog:h.a,VDivider:_.a,VIcon:x.a,VImg:y.a,VSpacer:w.a})},400:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{id:"particles-instance-"+Math.floor(5e3*Math.random())}},mounted:function(){var t=this;n(371),this.$nextTick((function(){t.initParticleJS()}))},methods:{initParticleJS:function(){particlesJS(this.id,{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:this.$vuetify.theme.isDark?"#FFFFFF":"#000000"},shape:{type:"circle",stroke:{width:0,color:this.$vuetify.theme.isDark?"#000000":"#FFFFFF"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:20,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:this.$vuetify.theme.isDark?"#FFFFFF":"#000000",opacity:.4,width:1},move:{enable:!0,speed:3,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},r=n(37),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"particles-js",attrs:{id:this.id}})}),[],!1,null,null,null);e.default=component.exports},401:function(t,e,n){"use strict";n.r(e);var o={props:{},computed:{},mounted:function(){},methods:{}},r=(n(312),n(37)),c=n(43),l=n.n(c),v=n(425),d=n(179),f=n(183),m=n(173),h=n(146),_=n(415),x=n(416),y=n(424),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{dense:t.$vuetify.breakpoint.smAndDown,app:"",fixed:""}},[n("nuxt-link",{staticClass:"mx-0 px-0 d-flex",attrs:{to:t.localePath("index")}},[n("v-avatar",{staticClass:"mr-2",attrs:{tile:""}},[n("v-img",{attrs:{contain:"",nuxt:"",src:t.$router.options.base+"/logo.svg"}})],1)],1),t._v(" "),n("v-spacer"),t._v(" "),t.$vuetify.breakpoint.mdAndUp?[n("v-tabs",{staticStyle:{"max-width":"600px"},attrs:{right:"",optional:""}},[n("v-tab",{attrs:{nuxt:"",to:t.localePath("/contest")}},[t._v("\n        "+t._s(t.$t("common.contest.title"))+"\n      ")]),t._v(" "),n("v-tab",{attrs:{nuxt:"",to:t.localePath("/resources")}},[t._v(t._s(t.$t("common.resources.title")))]),t._v(" "),n("v-tab",{attrs:{nuxt:"",to:t.localePath("/who")}},[t._v("\n        "+t._s(t.$t("common.who.title"))+"\n      ")])],1),t._v(" "),n("LanguagePicker")]:t._e(),t._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.smAndDown,expression:"$vuetify.breakpoint.smAndDown"}],attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.$emit("toggle-drawer")}}},[n("v-icon",[t._v("mdi-menu")])],1)],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{LanguagePicker:n(235).default}),l()(component,{VAppBar:v.a,VAvatar:d.a,VBtn:f.a,VIcon:m.a,VImg:h.a,VSpacer:_.a,VTab:x.a,VTabs:y.a})},81:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(283),n(37)),c=n(43),l=n.n(c),v=n(414),d=n(172),f=n(173),m=n(174),h=n(175),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-overlay",{staticClass:"text-center headline",attrs:{value:t.error}},[n("div",{staticClass:"display-1"},[t._v("Sorry for the inconvenience!")]),t._v(" "),n("v-responsive",{staticClass:"mx-auto",attrs:{width:"56"}},[n("v-divider",{staticClass:"mb-1 mt-3"}),t._v(" "),n("v-divider",{staticClass:"mb-3"})],1),t._v(" "),n("br"),t._v(" "),404===t.error.statusCode?n("v-icon",{staticClass:"mb-3",attrs:{"x-large":""}},[t._v("\n      mdi-link-variant-off\n    ")]):n("v-icon",{staticClass:"mb-3",attrs:{"x-large":""}},[t._v(" mdi-ladybug ")]),t._v(" "),n("br"),t._v(" "),404===t.error.statusCode?[t._v("\n      This page does not exist. "),n("br"),t._v(" "),n("div",{staticClass:"body-1 mt-3"},[n("NuxtLink",{attrs:{to:"/"}},[t._v(" Go back to Positive-Future Home page ")])],1)]:[t._v("\n      An error happened while loading this page. "),n("br"),t._v("You can try again and\n      refresh this page or\n      "),n("a",{attrs:{href:"mailto:info@positive-future.org"}},[t._v("contact us")]),t._v("\n      to report this error.\n    ")]],2)],1)}),[],!1,null,"c2a714d4",null);e.a=component.exports;l()(component,{VApp:v.a,VDivider:d.a,VIcon:f.a,VOverlay:m.a,VResponsive:h.a})}},[[258,12,5,13]]]);