webpackJsonp([0],{KqQy:function(t,n,a){"use strict";var e=a("ZNsH");n.a={name:"default",metaInfo:{title:"Hometown Cab",titleTemplate:"%s | Hometown Cab Web App"},data:function(){return{clipped:!1,drawer:!1,fixed:!1,miniVariant:!1,right:!1,rightDrawer:!1,title:"Hometown Cab",items:[{icon:"home",title:"Home",target:"#app",options:'[ easing: "easeInOutQuad", duration: 800 ]'},{icon:"contact_phone",title:"Contact",target:"#contact",options:'[ easing: "easeInOutQuad", duration: 800 ]'},{icon:"access_time",title:"Hours",target:"#hours",options:'[ easing: "easeInOutQuad", duration: 800 ]'},{icon:"attach_money",title:"Pricing",target:"#pricing",options:'[ easing: "easeInOutQuad", duration: 800 ]'},{icon:"local_taxi",title:"Specials",target:"#specials",options:'[ easing: "easeInOutQuad", duration: 800 ]'},{icon:"record_voice_over",title:"Testimonials",target:"#testimonials",options:'[ easing: "easeInOutQuad", duration: 800 ]'}],companyname:e.a.companyname,telnum1:e.a.telnum1,telnum2:e.a.telnum2,Hours1:e.a.hours[0],Hours2:e.a.hours[1],Hours3:e.a.hours[2],Hours4:e.a.hours[3],oneWayPrice:e.a.onewayprice,roundTripPrice:e.a.roundtripprice,additionalStopPrice:e.a.additionalstopprice,Version:e.a.version,Owner:e.a.ownername}}}},MP1m:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-app",[a("v-navigation-drawer",{staticClass:"HometownMenu",attrs:{app:"",temporary:"","aria-label":"Navigation Menu"},model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}},[a("v-list",t._l(t.items,function(n,e){return a("v-list-tile",{key:e,attrs:{value:"true"}},[a("v-list-tile-action",{staticClass:"HometownLink"},[a("div",{staticClass:"HometownLink",on:{click:function(a){t.$vuetify.goTo(n.target,n.options)}}},[a("v-icon",{staticClass:"HometownLink",attrs:{"aria-label":"Navigation Button"},domProps:{innerHTML:t._s(n.icon)}})],1)]),a("div",{staticClass:"HometownLink",on:{click:function(a){t.$vuetify.goTo(n.target,n.options)}}},[a("v-list-tile-title",{staticClass:"HometownLink",attrs:{"aria-label":"Navigation Title"},domProps:{textContent:t._s(n.title)}})],1)],1)}))],1),a("v-toolbar",{staticClass:"white--text",attrs:{app:"",color:"primary"}},[a("v-toolbar-side-icon",{attrs:{"aria-label":"Navigation Button"},on:{click:function(n){n.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"black--text",domProps:{textContent:t._s(t.title)}}),a("v-spacer")],1),a("v-content",[a("nuxt")],1),a("v-footer",{staticClass:"black--text",attrs:{dark:"",color:"primary",height:"auto","aria-label":"Footer"}},[a("v-layout",{attrs:{column:""}},[a("div",{staticClass:"text-xs-center HometownFooter",attrs:{"aria-label":"Company Name"}},[t._v("Hometown Cab")]),a("div",{staticClass:"hidden-sm-and-down text-xs-center HometownFooter",attrs:{"aria-label":"Owned and Operated by"}},[t._v("Owned and Operated by")]),a("div",{staticClass:"hidden-sm-and-down text-xs-center HometownFooter",attrs:{"aria-label":"Owner"}},[t._v(t._s(t.Owner))]),a("div",{staticClass:"text-xs-center HometownFooter",attrs:{"aria-label":"Copyright"}},[t._v("© Copyright 2017 Hometown Cab")]),a("div",{staticClass:"text-xs-center HometownFooter",attrs:{"aria-label":"Version"}},[t._v("Version "+t._s(t.Version))])])],1)],1)};e._withStripped=!0;var o={render:e,staticRenderFns:[]};n.a=o},Ma2J:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("KqQy"),o=a("MP1m"),i=!1;var r=function(t){i||a("dcfn")},s=a("K60R")(e.a,o.a,!1,r,null,null);s.options.__file="layouts/default.vue",n.default=s.exports},WuN3:function(t,n,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},ZNsH:function(t,n,a){"use strict";n.a={companyname:"Hometown Cab",telnum1:"515-210-4111",telnum2:"641-275-9501",ownername:"Chad Hoffman",onewayprice:"$7 One-Way (Local)",roundtripprice:"$12 Roundtrip (Local)*",additionalstopprice:"$2 For Each Additional Stop (Local)*",companyslogan:"We're Taking you Places",hours:["Sunday - Thursday","5:30 AM - 12:00 AM","Friday - Saturday","5:30 AM - 2:30 AM"],version:"19"}},dcfn:function(t,n,a){var e=a("WuN3");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a("rjj0")("1586fa8a",e,!1,{sourceMap:!1})}});