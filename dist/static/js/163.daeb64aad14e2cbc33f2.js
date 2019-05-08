webpackJsonp([163],{"4osP":function(t,s){},urf8:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});a("7agB");var e={name:"orderPurchaseDetail",components:{BreadCrumb:a("tVcc").a},data:function(){return{breadcrumb:[{name:"订单管理"},{name:"采购品项",url:"/order/purchaseOrderList"},{name:"报货信息",url:"/order/order_purchase_detail"}],purchaseId:this.$route.params.purchase_id,purchase:{}}},beforeRouteUpdate:function(t,s,a){},created:function(){},computed:{},mounted:function(){this.getData(this.$route.params)},methods:{getData:function(t){var s=this;this.$axios({method:"get",url:"/api/admin/purchase/info",params:t}).then(function(t){s.purchase=t.data.data,console.log(s.purchase)}).catch(function(t){})},formatPrice:function(t){return(t/100).toFixed(2)}}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page"},[a("div",{staticClass:"page-header"},[a("bread-crumb",{attrs:{"bread-crumb":t.breadcrumb}})],1),t._v(" "),a("div",{staticClass:"page-content"},[a("div",{staticClass:"panel"},[a("div",{staticClass:"panel-heading"},[a("h3",{staticClass:"panel-title"},[t._v("报货信息状态："+t._s(t.purchase.purchase_status_name))])])]),t._v(" "),a("div",{staticClass:"panel"},[t._m(0),t._v(" "),a("div",{staticClass:"panel-body"},[a("div",{staticClass:"purchase-info"},[a("p",[t._v("采购人员："+t._s(t.purchase.shop_user_name))]),t._v(" "),a("p",[t._v("联系电话"+t._s(t.purchase.shop_user_phone))]),t._v(" "),a("p",[t._v("提成归属:"),t._l(t.purchase.recipients,function(s,e){return a("span",{key:e,staticClass:"recipient-item"},[t._v(t._s(s))])})],2),t._v(" "),a("p",[t._v("采购时间："+t._s(t.purchase.purchase_ctime))]),t._v(" "),a("p",[t._v("采购单号："+t._s(t.purchase.business_id))])])])]),t._v(" "),a("div",{staticClass:"panel"},[t._m(1),t._v(" "),a("div",{staticClass:"panel-body"},[a("div",{staticClass:"goods_list"},[t._m(2),t._v(" "),t._l(t.purchase.goods_list,function(s,e){return a("div",{key:e,staticClass:"flex_box good_item"},[a("div",{staticClass:"good_item_col"},[a("img",{attrs:{src:s.goods_img}}),t._v(" "),a("p",[t._v(t._s(s.goods_name))]),a("br"),t._v(" "),a("p",{staticClass:"sku-list"},t._l(s.sku_type,function(s,e){return a("span",{key:e,staticClass:"sku-item"},[t._v(t._s(s))])}))]),t._v(" "),a("div",{staticClass:"good_item_col"},[a("p",{staticStyle:{color:"#999","margin-top":"5px"}},[t._v("✖️"+t._s(s.goods_num))])]),t._v(" "),a("div",{staticClass:"good_item_col"},[a("p",[t._v("¥"+t._s(t.formatPrice(s.goods_original_price)))])]),t._v(" "),a("div",{staticClass:"good_item_col"},[a("p",[t._v("¥"+t._s(t.formatPrice(s.goods_total_price)))])])])})],2)])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"panel-heading"},[s("h3",{staticClass:"panel-title"},[this._v("基本信息")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"panel-heading"},[s("h3",{staticClass:"panel-title"},[this._v("采购商品")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"flex_box"},[s("div",{staticClass:"good_item_title"},[this._v("商品")]),this._v(" "),s("div",{staticClass:"good_item_title"},[this._v("数量")]),this._v(" "),s("div",{staticClass:"good_item_title"},[this._v("单价（原价）")]),this._v(" "),s("div",{staticClass:"good_item_title"},[this._v("小计金额（原价）")])])}]};var c=a("VU/8")(e,i,!1,function(t){a("4osP")},"data-v-09642fbc",null);s.default=c.exports}});