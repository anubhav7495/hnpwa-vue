webpackJsonp([3],[,,function(e,t,n){"use strict";var a=n(1),s=n(13);a.a.use(s.a);var r=function(){return n.e(0).then(n.bind(null,18))},i=function(){return n.e(1).then(n.bind(null,17))};t.a=new s.a({routes:[{path:"/",redirect:"/news"},{path:"/news/:page?",name:"news",component:r},{path:"/newest/:page?",name:"newest",component:r},{path:"/show/:page?",name:"show",component:r},{path:"/ask/:page?",name:"ask",component:r},{path:"/jobs/:page?",name:"jobs",component:r},{path:"/item/:id",name:"commentsList",component:i}],linkActiveClass:"header-link-active"})},function(e,t,n){function a(e){n(8)}var s=n(5)(n(7),n(12),a,null,null);e.exports=s.exports},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(4),s=(n.n(a),n(1)),r=n(3),i=n.n(r),o=n(2);s.a.config.productionTip=!1,new s.a({el:"#app",router:o.a,render:function(e){return e(i.a)}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},function(e,t){},,,,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"header"},[n("div",{staticClass:"container-fixed"},[n("router-link",{staticClass:"header-link brand",attrs:{to:"/"}},[e._v("HN")]),e._v(" "),n("router-link",{staticClass:"header-link",attrs:{to:"/news"}},[e._v("Top")]),e._v(" "),n("router-link",{staticClass:"header-link",attrs:{to:"/newest"}},[e._v("New")]),e._v(" "),n("router-link",{staticClass:"header-link",attrs:{to:"/show"}},[e._v("Show")]),e._v(" "),n("router-link",{staticClass:"header-link",attrs:{to:"/ask"}},[e._v("Ask")]),e._v(" "),n("router-link",{staticClass:"header-link",attrs:{to:"/jobs"}},[e._v("Jobs")])],1)]),e._v(" "),n("div",{staticClass:"container-fixed"},[n("router-view",{key:e.$route.path})],1)])},staticRenderFns:[]}}],[6]);
//# sourceMappingURL=app.c828e67b6c0daecc9819.js.map