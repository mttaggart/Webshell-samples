webpackJsonp([12],{"+87i":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o("teIl"),i=o("4s4v"),a=o("QLRF"),c={components:{Header:s.a},data:function(){return{phone:"",password:null,code:null,readonly_:!1,passwordType:"password",close:!1,close2:!1,eye:!1,protocol:!0,isGetCode:!0,getCodeText:"获取验证码",docmHeight:document.documentElement.clientHeight,showHeight:document.documentElement.clientHeight,hideClass:!1,click_btn:!0}},created:function(){},watch:{showHeight:"inputType",phone:function(e,t){this.phone=e.length>t.length?e.replace(/\s/g,"").replace(/(\d{3})(\d{0,4})(\d{0,4})/,"$1 $2 $3"):this.phone.trim()}},mounted:function(){var e=this;window.onresize=function(){return window.screenHeight=document.body.clientHeight,void(e.showHeight=window.screenHeight)}},methods:{inputType:function(){var e=this;if(!this.timer){this.timer=!0;var t=this;setTimeout(function(){t.docmHeight>t.showHeight?e.hideClass=!0:t.docmHeight<=t.showHeight&&(e.hideClass=!1),t.timer=!1},10)}},telNum:function(e){var t=e.target;if(8!=e.keyCode){var o=t.value;o=o.replace(/\s*/g,"");for(var s=[],i=0;i<o.length;i++)3==i||7==i?s.push(" "+o.charAt(i)):s.push(o.charAt(i));t.value=s.join("")}},getCode:function(){var e=this,t=this.phone;if(t=t.replace(/\s*/g,""),Object(i.b)(t)){var o={phone:a.a.encrypt(t),msg_sign:0,verify_type:"register"};this.isGetCode&&(this.isGetCode=!1,this.fetch.aesGetCode(o,function(t){var o=60,s=e;if(200===t.code){e.readonly_=!1,s.getCodeText="("+o+"s)重新获取";var i=setInterval(function(){o-=1,s.getCodeText="("+o+"s)重新获取",0===o&&(clearInterval(i),e.isGetCode=!0,s.getCodeText="重新获取")},1e3)}else{e.isGetCode=!0;e.$toast(t.info,2e3,1)}}))}else{this.throttle(function(){e.$toast("请输入正确的手机号",2e3,1)},2e3)}},register:function(){var e=this;if(this.click_btn){this.click_btn=!1,setTimeout(function(){e.click_btn=!0},500);var t=this.phone;if((t=t.replace(/\s*/g,""))&&this.code&&this.password&&this.protocol)if(this.password.length>5){var o={phone:a.a.encrypt(t),verification:this.code,verify_type:"register",package:"ddh",password:a.a.encrypt(this.password),product_id:localStorage.product_id_||0,credit_id:localStorage.credit_id_||0,page_id:localStorage.page_id||0};this.fetch.aesregister(o,function(t){if(setTimeout(function(){e.click_btn=!0},500),200===t.code){e.throttle(function(){e.$toast(t.info,1e3,2)},1e3),sessionStorage.userPhone=t.data.nick,localStorage.removeItem("product_id_"),localStorage.removeItem("credit_id_"),setTimeout(function(){e.$router.replace(localStorage.fromUrl)},500)}else{e.throttle(function(){e.$toast(t.info,1e3,1)},1e3)}})}else{this.throttle(function(){e.$toast("密码不能少于6位",2e3,1)},2e3)}}},eye_:function(e){this.passwordType=e?"text":"password",this.eye=e}}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login bgfff ls1"},[s("div",{staticClass:"header"},[s("div",{staticClass:"backClose"},[s("img",{staticClass:"back",attrs:{src:o("zy2Y"),alt:""},on:{click:function(t){e.$router.replace("/login")}}})]),e._v(" "),s("p",{staticClass:"ellipsis"},[e._v("注册")]),e._v(" "),s("div",{staticClass:"colSahare"})]),e._v(" "),s("div",{staticClass:"pl40 pr40"},[s("div",{staticClass:"item bor_b"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"tel",maxlength:"13",placeholder:"请输入手机号"},domProps:{value:e.phone},on:{focus:function(t){e.close=!0},blur:function(t){e.close=!1},keyup:function(t){e.telNum(t)},input:function(t){t.target.composing||(e.phone=t.target.value)}}}),e._v(" "),s("p",[s("img",{directives:[{name:"show",rawName:"v-show",value:e.close,expression:"close"}],staticClass:"close",attrs:{src:o("Bum3"),alt:""},on:{click:function(t){e.phone=""}}})])]),e._v(" "),s("div",{staticClass:"item bor_b"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"text",readonly:e.readonly_,placeholder:"请输入验证码",maxlength:"6"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),e._v(" "),s("span",{staticClass:"get_code",class:{on:e.phone},domProps:{textContent:e._s(e.getCodeText)},on:{click:e.getCode}})]),e._v(" "),s("div",{staticClass:"item bor_b"},["checkbox"===e.passwordType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"请输入密码（最少6位）",type:"checkbox"},domProps:{checked:Array.isArray(e.password)?e._i(e.password,null)>-1:e.password},on:{focus:function(t){e.close2=!0},blur:function(t){e.close2=!1},change:function(t){var o=e.password,s=t.target,i=!!s.checked;if(Array.isArray(o)){var a=e._i(o,null);s.checked?a<0&&(e.password=o.concat([null])):a>-1&&(e.password=o.slice(0,a).concat(o.slice(a+1)))}else e.password=i}}}):"radio"===e.passwordType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"请输入密码（最少6位）",type:"radio"},domProps:{checked:e._q(e.password,null)},on:{focus:function(t){e.close2=!0},blur:function(t){e.close2=!1},change:function(t){e.password=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"请输入密码（最少6位）",type:e.passwordType},domProps:{value:e.password},on:{focus:function(t){e.close2=!0},blur:function(t){e.close2=!1},input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),s("p",[s("img",{directives:[{name:"show",rawName:"v-show",value:e.close2,expression:"close2"}],staticClass:"close left",attrs:{src:o("Bum3"),alt:""},on:{click:function(t){e.password=null}}}),e._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:!e.eye,expression:"!eye"}],staticClass:"eye",attrs:{src:o("Mfo8"),alt:""},on:{click:function(t){e.eye_(!0)}}}),e._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:e.eye,expression:"eye"}],staticClass:"eye",attrs:{src:o("3q/n"),alt:""},on:{click:function(t){e.eye_(!1)}}})])]),e._v(" "),s("p",{staticClass:"login_btn",class:{on:e.phone&&e.code&&e.protocol&&e.password},on:{click:e.register}},[e._v("注册")])]),e._v(" "),s("div",{staticClass:"protocol",class:{"nav-hide":e.hideClass}},[s("span",{on:{click:function(t){e.protocol=!e.protocol}}},[s("img",{directives:[{name:"show",rawName:"v-show",value:e.protocol,expression:"protocol"}],attrs:{src:o("licf"),alt:""}})]),e._v("\n    注册即表示您同意\n    "),s("router-link",{attrs:{to:"/login/Protocol",replace:""}},[e._v("《注册协议》")])],1)])},staticRenderFns:[]};var l=o("VU/8")(c,n,!1,function(e){o("Qb7Q")},"data-v-d5b9a762",null);t.default=l.exports},Qb7Q:function(e,t){},licf:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk0RDYyQzhBRkNGNTExRTg4OEExRDY5QUY0QkQ0N0M1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk0RDYyQzhCRkNGNTExRTg4OEExRDY5QUY0QkQ0N0M1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTRENjJDODhGQ0Y1MTFFODg4QTFENjlBRjRCRDQ3QzUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTRENjJDODlGQ0Y1MTFFODg4QTFENjlBRjRCRDQ3QzUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Rsn9dAAABsklEQVR42rSVXU7CQBSFLxOgCTYBfFB+EiHqo4k+4R7UDcgC1EeX4w7YgC7CxBg1LEBAfnyANkgLbQl4L5kCQwktMJzkvEzb7/TeO+2E2poBXFH0A/oWfYZWYT310GV0Cf2EtmkxxAOy6Gf0BcjRB/oGXWf8zWXCgbNe0AoF3EuGuzpH31FAEXanIs3A4m3ahSwmC25ZFoxGo8VlJbwteIxuNJqg6zpEIhE4PTkGxtj0Ots2wIWTHMcBZzgUrjNZcNJ+MglKVOy4p0Wt1i+Y/T6kDg8gFouthGtz8GQiAel0ynOfUMFgMIB2pwN9DKhUa2AYRmB4JpNeeq8QEMXyaFAk2hHV2g+GmCK8GRzuCaDp53O5hRCsxDQ5vAWaNoMnfODuz268uGjbNnxXqpNd4Qar6h50u39z8DjCMxDy2QhLdxG1Kp87EioR4PFg8JXbdBoSFjfaBJ4NBvf9DiYh+dlM1oW7M/D92VGLaB6Koqz7LfaognffMnHIG8BJZcbP0F2pRC2iV3vlJ5BMfaELVAHN4Jof1LL0ib5yDxxSHX2JfkS/oY0NoAZ/lhgFzoR/AQYAzwqoIvBpcFIAAAAASUVORK5CYII="}});
//# sourceMappingURL=12.0a70829580419011e068.js.map