webpackJsonp([27],{"J5/+":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("mzjM");var s={name:"OrderRefundInfo",components:{},data:function(){return{refundType:{1:"退款",2:"退货",3:"换货"},totalPrice:0,totalOriginalPrice:0,user:JSON.parse(localStorage.user),refundModel:!1,doRefundType:0,refundRemark:""}},props:{refundInfo:{type:Object,default:function(){}},backUrl:{type:String,default:function(){return""}},from:{type:String,default:function(){return""}}},computed:{},created:function(){},mounted:function(){this.getTotalPrice()},methods:{formatPrice:function(t){return(t/100).toFixed(2)},getTotalPrice:function(){var t=this.refundInfo.goods_list;console.log(t);var e=0,n=0;if(t){for(var s=0;s<t.length;s++)n+=t[s].goods_price,e+=t[s].goods_original_price;this.totalPrice=n,this.totalOriginalPrice=e}},acceptRefund:function(){this.refundModel=!0,this.doRefundType=1},refuceRefund:function(){this.refundModel=!0,this.doRefundType=0},doRefund:function(){var t=this,e=this.doRefundType?"/api/admin/refundReview/pass":"/api/admin/refundReview/reject",n={refund_id:this.refundInfo.order_refund_id,remark:this.refundRemark};this.$axios({method:"post",url:e,params:n}).then(function(e){0==+e.data.code?(t.refundModel=!1,t.$alert("操作成功"),console.log(t.backUrl),t.$router.push(t.backUrl)):t.$alert(e.data.msg)}).catch(function(t){})}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel-heading"},[n("h3",{staticClass:"panel-title",staticStyle:{"line-height":"28px",background:"#FBFBFF 100%"}},[t._v("\n                状态："+t._s(t.refundInfo.refund_status_name)+"\n                "),5==+t.refundInfo.order_refund_review_status&&+t.from?n("div",{staticClass:"text-right"},[n("el-button",{attrs:{size:"mini",plain:""},on:{click:t.refuceRefund}},[t._v("拒绝退款")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.acceptRefund}},[t._v("同意退款")])],1):t._e()])])]),t._v(" "),n("div",{staticClass:"panel"},[n("div",{staticClass:"panel-body"},[n("div",{staticClass:"info_p"},[t._v("\n                退款编号："+t._s(t.refundInfo.order_refund_id)),n("br"),t._v(" 申请时间："+t._s(t.refundInfo.order_refund_ctime)+"\n                "),n("br"),t._v(" 订单编号："+t._s(t.refundInfo.order_code)+"\n            ")])])]),t._v(" "),n("div",{staticClass:"panel"},[t._m(0),t._v(" "),n("div",{staticClass:"panel-body"},[n("div",{staticClass:"info_p"},[t._v("\n                申请类型："+t._s(t.refundType[t.refundInfo.order_refund_type])+"\n                "),n("br")]),t._v(" "),n("div",{staticClass:"good_list"},[t._m(1),t._v(" "),t._l(t.refundInfo.goods_list,function(e,s){return n("div",{key:s,staticClass:"flex_box good_item"},[n("div",{staticClass:"good_item_col"},[n("img",{attrs:{src:e.goods_img}}),t._v(" "),n("p",[t._v(t._s(e.goods_name))])]),t._v(" "),n("div",{staticClass:"good_item_col"},[n("p",[t._v("¥"+t._s(t.formatPrice(e.goods_original_price)))])]),t._v(" "),n("div",{staticClass:"good_item_col"},[n("p",[t._v("¥"+t._s(t.formatPrice(e.goods_price)))])]),t._v(" "),n("div",{staticClass:"good_item_col"},[n("p",[t._v(t._s(e.goods_num))])])])}),t._v(" "),n("p",{staticClass:"goods_total_refund_price"},[t._v("退款原价：¥"+t._s(t.formatPrice(t.totalOriginalPrice)))]),t._v(" "),n("p",{staticClass:"goods_total_refund_price"},[t._v("退款总价：¥"+t._s(t.formatPrice(t.totalPrice)))])],2)])]),t._v(" "),n("div",{staticClass:"panel"},[n("div",{staticClass:"panel-body"},[n("div",{staticClass:"info_p"},[t._v("\n                退款原因："+t._s(t.refundInfo.refund_reason?t.refundInfo.refund_reason:"--")+"\n                "),n("br"),t._v(" 备注："+t._s(t.refundInfo.refund_remark?t.refundInfo.refund_remark:"--")+"\n                "),n("br"),t._v(" 凭证：\n                "),t._l(t.refundInfo.refund_images,function(t,e){return n("img",{key:e,staticClass:"refund_img",attrs:{src:t,alt:""}})})],2)])]),t._v(" "),n("div",{staticClass:"panel"},[t._m(2),t._v(" "),n("div",{staticClass:"panel-body"},[n("div",{staticClass:"log-list"},t._l(t.refundInfo.logs_list,function(e,s){return n("div",{key:s,staticClass:"log-item"},[n("span",{staticClass:"log-title"},[t._v(t._s(e.order_refund_log_title))]),n("br"),t._v(" "),n("span",[t._v("处理人："+t._s(e.admin_user_name||"--"))]),n("br"),t._v(" "),n("span",[t._v("处理时间："+t._s(e.order_refund_log_ctime||"--"))]),n("br"),t._v(" "),n("span",[t._v("备注信息："+t._s(e.order_refund_log_content||"--"))])])}))])]),t._v(" "),n("el-dialog",{attrs:{title:t.doRefundType?"同意退款":"拒绝退款",visible:t.refundModel,width:"40%"},on:{"update:visible":function(e){t.refundModel=e}}},[n("p",[t._v("确定要给"+t._s(t.refundInfo.order_user_name||"用户")+"退款吗?")]),t._v(" "),n("p",[t._v("操作人："+t._s(t.user.data.user_realname))]),t._v(" "),n("p",[t._v("\n            操作备注：\n            "),n("el-input",{staticClass:"refund-remark",attrs:{type:"textarea",placeholder:"请填写操作备注",rows:"3"},model:{value:t.refundRemark,callback:function(e){t.refundRemark=e},expression:"refundRemark"}})],1),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.refundModel=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.doRefund}},[t._v("确定")])],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel-heading"},[e("h3",{staticClass:"panel-title"},[this._v("退货申请内容")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex_box"},[e("div",{staticClass:"good_item_title"},[this._v("商品")]),this._v(" "),e("div",{staticClass:"good_item_title"},[this._v("原价（元）")]),this._v(" "),e("div",{staticClass:"good_item_title"},[this._v("申请退款金额（元）")]),this._v(" "),e("div",{staticClass:"good_item_title"},[this._v("数量")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel-heading"},[e("h3",{staticClass:"panel-title"},[this._v("审核记录")])])}]};var i={name:"RefundDetail",components:{RefundInfo:n("VU/8")(s,a,!1,function(t){n("JTAJ")},"data-v-62465ec8",null).exports,BreadCrumb:n("tVcc").a},data:function(){return{breadcrumb:[{name:"审核管理"},{name:"退款复审",url:"/refundReview/list"},{name:"复审详情",url:"/refundReview/refundReviewDetail"}],refundId:this.$route.params.refund_id,refundInfo:{},backurl:location.pathname}},beforeRouteUpdate:function(t,e,n){},created:function(){},computed:{},mounted:function(){this.getData(this.$route.params)},methods:{getData:function(t){var e=this;this.$axios({method:"get",url:"/api/admin/refundReview/info",params:t}).then(function(t){e.refundInfo=t.data.data}).catch(function(t){})},formatPrice:function(t){return(t/100).toFixed(2)}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("div",{staticClass:"page-header"},[e("bread-crumb",{attrs:{"bread-crumb":this.breadcrumb}})],1),this._v(" "),e("div",{staticClass:"page-content"},[e("RefundInfo",{attrs:{refundInfo:this.refundInfo,backUrl:this.backurl,from:"1"}})],1)])},staticRenderFns:[]};var o=n("VU/8")(i,r,!1,function(t){n("vqhg")},"data-v-3ebfa012",null);e.default=o.exports},JTAJ:function(t,e){},mzjM:function(t,e,n){"use strict";e.a={purchase_status:{1:"未审核",2:"已拒绝",3:"已同意",4:"已修改",5:"已删除"},goods_score:{1:"一星",2:"二星",3:"三星",4:"四星",5:"五星"},order_status:{1:"待处理",2:"待发货",3:"已发货",4:"已完成",5:"已评价",8:"已取消"},option:{1:"下架",2:"上架"},refundType:{1:"退款",2:"退货",3:"换货"},payType:{0:"--",1:"支付宝",2:"微信",3:"银联"},refundStatus:{1:"待审核",2:"初级审核失败",3:"等待收获",4:"收获失败",5:"审核通过"}}},vqhg:function(t,e){}});