webpackJsonp([17],{PvOB:function(t,e){},Quh5:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={components:{Header:s("teIl").a},data:function(){return{msg:{created_at:new Date}}},created:function(){this.getMsgId()},methods:{getMsgId:function(){var t=this;this.fetch.messageId(this.$route.params.id,{},function(e){200===e.code?(document.getElementsByClassName("ellipsis")[0].innerHTML=e.data.title,t.msg=e.data):e.code})},messageSet:function(){var t={id:this.$route.params.id,action:"read"};this.fetch.messageSet(t,function(t){200===t.code||t.code})}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"infoDetail"},[s("Header"),t._v(" "),s("div",{staticClass:"main"},[s("p",{staticClass:"title",domProps:{textContent:t._s(t.msg.title)}}),t._v(" "),s("p",{staticClass:"date"},[t._v(t._s(t._f("YTD")(t.msg.created_at,"")))]),t._v(" "),s("div",{staticClass:"content",domProps:{innerHTML:t._s(t.msg.content)}})])],1)},staticRenderFns:[]};var i=s("VU/8")(a,n,!1,function(t){s("PvOB")},null,null);e.default=i.exports}});
//# sourceMappingURL=17.062fb450b79c389cb53e.js.map