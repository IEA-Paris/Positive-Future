(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{473:function(e,t,r){"use strict";r.r(t);var o=r(41),n=r(39),l=r.n(n),c=r(474),d=r(458),m=r(460),f=r(59),component=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-data-iterator",{attrs:{items:e.items,"items-per-page":e.itemsPerPage,page:e.page,search:e.search,"sort-by":e.sortBy.toLowerCase(),"sort-desc":e.sortDesc,"hide-default-footer":""},on:{"update:itemsPerPage":function(t){e.itemsPerPage=t},"update:items-per-page":function(t){e.itemsPerPage=t}},scopedSlots:e._u([{key:"header",fn:function(){return[r("v-toolbar",{staticClass:"mb-1"},[r("v-text-field",{attrs:{clearable:"",flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",label:"Search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),r("v-select",{attrs:{flat:"","solo-inverted":"","hide-details":"",items:e.keys,"prepend-inner-icon":"mdi-magnify",label:"Sort by"},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}}),e._v(" "),r("v-select",{attrs:{flat:"","solo-inverted":"","hide-details":"",items:e.keys,"prepend-inner-icon":"mdi-magnify",label:"Sort by"},model:{value:e.sortBy,callback:function(t){e.sortBy=t},expression:"sortBy"}}),e._v(" "),r("v-select",{attrs:{flat:"","solo-inverted":"","hide-details":"",items:e.keys,"prepend-inner-icon":"mdi-magnify",label:"Sort by"},model:{value:e.sortBy,callback:function(t){e.sortBy=t},expression:"sortBy"}})],1)]},proxy:!0}])})],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VDataIterator:c.a,VSelect:d.a,VTextField:m.a,VToolbar:f.a})}}]);