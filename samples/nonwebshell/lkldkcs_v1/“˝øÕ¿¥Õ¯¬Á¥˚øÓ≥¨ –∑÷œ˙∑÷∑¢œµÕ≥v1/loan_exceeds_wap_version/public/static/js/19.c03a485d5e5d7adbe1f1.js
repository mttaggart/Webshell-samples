webpackJsonp([19],{KGx5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={components:{Header:n("teIl").a},data:function(){return{content:"",show:!1,tel:0,opbtn:!0}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.fetch.about({},function(e){t.tel=e.data.company_phone,t.content=e.data.content,document.getElementsByClassName("ellipsis")[0].innerHTML=e.data.title,t.opbtn=!1})}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aboutUs bgfff pd40"},[n("Header"),t._v(" "),n("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("p",[t._v("呼叫"),n("span",{domProps:{textContent:t._s(t.tel)}})]),t._v(" "),n("p",{staticClass:"callOff",on:{click:function(e){t.show=!t.show}}},[t._v("取消")])]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.content)}},[t._v("内容 ")])],1)},staticRenderFns:[]};var s=n("VU/8")(o,a,!1,function(t){n("XLP4")},null,null);e.default=s.exports},XLP4:function(t,e){}});
//# sourceMappingURL=19.c03a485d5e5d7adbe1f1.js.map