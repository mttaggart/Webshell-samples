webpackJsonp([5],{"4YaL":function(t,a){},MyV9:function(t,a){},Rcv1:function(t,a){},qkWq:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={data:function(){return{data_list:[],loading:!1,finished:!1,no_list_btn:!1,next_page:1}},created:function(){},methods:{getCollection:function(){var t=this;this.fetch.collectionProduct(this.next_page,{},function(a){200===a.code?(console.log(a),t.next_page+=1,a.data&&a.data.data.length?t.data_list=t.data_list.concat(a.data.data):t.no_list_btn=!0,t.loading=!1,a.data&&null==a.data.next_page_url&&(t.finished=!0)):2004===a.code&&(t.loading=!1,t.no_list_btn=!0,t.finished=!0)})},onLoad:function(){var t=this;setTimeout(function(){t.getCollection()},800)},goLoanDetail:function(t){0===t.status?this.$toast("该产品已下架，如有疑问请联系客服。",2e3):this.$router.push("/LoanDetail/0/"+t.id)}}},i={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"loanList"},[n("ul",{staticClass:"listBox",class:{none:t.no_list_btn}},[n("van-list",{attrs:{finished:t.finished},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.data_list,function(a,i){return n("li",{key:i,staticClass:"on"},[a.mark&&a.mark.url?n("img",{staticClass:"zuixin",attrs:{src:t.imgUrl+a.mark.url,alt:""}}):t._e(),t._v(" "),0===a.status?n("span",{staticClass:"sold_out"},[t._v("已下架")]):t._e(),t._v(" "),n("div",{staticClass:"list_item",on:{click:function(s){t.goLoanDetail(a)}}},[n("p",{staticClass:"head "},[n("img",{staticClass:"logo",attrs:{src:t.imgUrl+a.logo,alt:""}}),t._v(" "),n("span",{domProps:{textContent:t._s(a.name)}},[t._v("优借")]),t._v(" "),t._l(a.market_element,function(i,e){return a.market_element?n("em",{key:e},["fire"===i?n("img",{staticClass:"effect",attrs:{src:s("Y6tM"),alt:""}}):t._e(),t._v(" "),"money"===i?n("img",{staticClass:"effect",attrs:{src:s("HF8g"),alt:""}}):t._e()]):t._e()})],2),t._v(" "),n("div",{staticClass:"loan_msg clearfix"},[n("div",{staticClass:"left money"},[n("p",{domProps:{textContent:t._s(a.quota_min+"-"+a.quota_max)}},[t._v("3000-300000")]),t._v(" "),n("span",[t._v("可贷金额(元)")])]),t._v(" "),n("p",{staticClass:"rightLine"}),t._v(" "),n("div",{staticClass:"left tag"},t._l(a.tags.slice(0,3),function(a,s){return n("p",{key:s,domProps:{textContent:t._s(a)}},[t._v("白条信用贷")])})),t._v(" "),n("div",{staticClass:"right apply"},[t._v("\n              立即申请\n            ")])])]),t._v(" "),n("p",{staticClass:"describe",domProps:{textContent:t._s(a.slogan)}},[t._v("三十秒批，一分钟下款，无需下载")])])}))],1),t._v(" "),n("div",{staticClass:"collect_none",class:{none:!t.no_list_btn}},[n("p",[t._v("您还没有收藏的贷款哦~")])])])},staticRenderFns:[]};var e={data:function(){return{data_list:[],loading:!1,finished:!1,no_list_btn:!1,next_page:1}},methods:{getCollection:function(){var t=this;this.fetch.collectionCredit(this.next_page,{},function(a){200===a.code?(console.log("信用卡收藏",a),t.next_page+=1,a.data&&a.data.data.length?t.data_list=t.data_list.concat(a.data.data):t.no_list_btn=!0,t.loading=!1,a.data&&null==a.data.next_page_url&&(t.finished=!0)):2004===a.code&&(t.loading=!1,t.no_list_btn=!0,t.finished=!0)})},goProductDetail:function(t){0===t.status?this.$toast("该信用卡已下架，如有疑问请联系客服。",2e3):this.$router.push("/CardDetail/"+t.id)},onLoad:function(){var t=this;setTimeout(function(){t.getCollection()},800)}}},l={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("p",{staticClass:"bor_"}),t._v(" "),s("div",{staticClass:"cardList bgfff"},[s("ul",{staticClass:"cardBox"},[s("van-list",{attrs:{finished:t.finished},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.data_list,function(a,n){return s("li",{key:n,staticClass:"clearfix"},[s("p",{staticClass:"card_img"},[s("img",{staticClass:"left cardimg",attrs:{src:t.imgUrl+a.logo,alt:""}}),t._v(" "),a.mark&&a.mark.url?s("img",{staticClass:"left redu",attrs:{src:t.imgUrl+a.mark.url,alt:""}}):t._e(),t._v(" "),0===a.status?s("span",[t._v("已下架")]):t._e()]),t._v(" "),s("div",{staticClass:"card_msg",on:{click:function(s){t.goProductDetail(a)}}},[s("p",{staticClass:"title ellipsis",domProps:{textContent:t._s(a.name)}},[t._v("中信i白金信用卡中信i白金信用卡中信i白金信用卡")]),t._v(" "),s("p",{staticClass:"brief",domProps:{textContent:t._s(a.introduce)}},[t._v("不要年费的白金信用卡；最长50天免息还款期；挂失卡...")]),t._v(" "),s("p",{staticClass:"apply_num"},[s("em",{domProps:{textContent:t._s(a.num)}},[t._v("123456")]),t._v("人申请")])])])}))],1),t._v(" "),s("div",{staticClass:"collect_none",class:{none:!t.no_list_btn}},[s("p",[t._v("您还没有收藏的信用卡哦~")])])])])},staticRenderFns:[]};var o={data:function(){return{data_list:[],loading:!1,finished:!1,no_list_btn:!1,next_page:1,is_read:0}},created:function(){},methods:{onLoad:function(){var t=this;setTimeout(function(){t.getCollection()},800)},getCollection:function(){var t=this;this.fetch.collectionArticle(this.next_page,{},function(a){200===a.code?(console.log("收藏发现",a),t.next_page+=1,a.data&&a.data.data.length?t.data_list=t.data_list.concat(a.data.data):t.no_list_btn=!0,t.loading=!1,a.data&&null==a.data.data.next_page_url&&(t.finished=!0)):2004===a.code&&(t.loading=!1,t.no_list_btn=!0,t.finished=!0)})},goFindDetail:function(t){0===t.status?this.$toast("该文章已下架，如有疑问请联系客服。",2e3):this.$router.push("/findDetails/"+t.id)}}},c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bgfff collFind"},[s("div",{staticClass:"line"}),t._v(" "),s("div",{staticClass:"findList bgfff"},[s("ul",{staticClass:"listAritcle"},[s("van-list",{attrs:{finished:t.finished},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.data_list,function(a,n){return s("li",{key:n,staticClass:"bor_b"},[s("div",{staticClass:"content",on:{click:function(s){t.goFindDetail(a)}}},[s("div",{staticClass:"note"},[s("p",{staticClass:"cont",class:{clicked:a.is_read,not:0===a.is_read}},[t._v("\n                    "+t._s(a.title)+"\n                    ")]),t._v(" "),s("div",{staticClass:"hot_date_num"},[a.mark?s("p",{staticClass:"hot"},[t._v(t._s(a.mark.name))]):t._e(),t._v(" "),s("span",[t._v(t._s(t._f("YTD")(a.created_at,"")))]),t._v(" "),s("span",{staticClass:"read"},[t._v(t._s(a.num)+"阅读")])])]),t._v(" "),s("div",{staticClass:"def-img findImg"},[s("img",{attrs:{src:t.imgUrl+a.cover,alt:""},on:{load:t.successLoadImg,error:t.errorLoadImg}})]),t._v(" "),0===a.status?s("p",{staticClass:"soldOut"},[t._v("已下架")]):t._e()])])}))],1),t._v(" "),s("div",{staticClass:"collect_none",class:{none:!t.no_list_btn}},[s("p",[t._v("您还没有收藏的文章哦~")])])])])},staticRenderFns:[]};var d={components:{Loan:s("VU/8")(n,i,!1,function(t){s("qxmd")},"data-v-26f7549a",null).exports,CreditCard:s("VU/8")(e,l,!1,function(t){s("4YaL")},"data-v-41bcf153",null).exports,Find:s("VU/8")(o,c,!1,function(t){s("Rcv1")},"data-v-773c4445",null).exports,Header:s("teIl").a},data:function(){return{listBox:"loan",active:0,article:[],credit:[],product:[]}},watch:{active:function(t){}},created:function(){},methods:{getCollection:function(){var t=this;this.fetch.collection({},function(a){t.product=a.data.product})}}},r={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"collect"},[s("Header"),t._v(" "),s("van-tabs",{class:{bg_white:1===t.active},attrs:{swipeable:""},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[s("van-tab",{attrs:{title:"贷款产品"}},[s("Loan")],1),t._v(" "),s("van-tab",{attrs:{title:"信用卡"}},[s("CreditCard")],1),t._v(" "),s("van-tab",{attrs:{title:"发现"}},[s("Find")],1)],1)],1)},staticRenderFns:[]};var _=s("VU/8")(d,r,!1,function(t){s("MyV9")},"data-v-415af41c",null);a.default=_.exports},qxmd:function(t,a){}});
//# sourceMappingURL=5.32c8e192c6b09a08db5b.js.map