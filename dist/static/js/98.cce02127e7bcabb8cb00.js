webpackJsonp([98],{"7rl/":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={data:function(){return{isLoading:!0,shadownbox:!1,data:{},showdata2:[{type:7,label:"地理位置"}],showdata3:[{type:7,label:"银行卡信息",title:["持卡人：胡豆豆","银行卡号：6284 8463 4532 7587"],imgurl:"/static/img/card.png"},{type:7,label:"",imgurl:"/static/img/card.png"},{type:7,label:"身份证信息",imgurl:["/static/img/idcard.png","/static/img/idcard.png"]},{type:7,label:"营业执照",imgurl:["/static/img/idcard.png"]}]}},created:function(){this.createdDate()},methods:{createdDate:function(){var t=this;this.$axios.post("/api/admin/shop/info?shop_id="+this.$route.params.id).then(function(a){t.isLoading=!1,t.data=a.data.data}).catch(function(t){console.log(t)})}},components:{},mounted:function(){},computed:{}},e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"panel"},[s("div",{staticClass:"panel-body info-box"},[s("el-row",{attrs:{gutter:5}},[s("el-col",{staticClass:"hd",attrs:{span:6}},[s("img",{staticClass:"shop-logo",attrs:{src:t.data.shop_logo}})]),t._v(" "),s("el-col",{staticClass:"bd",attrs:{span:18}},[s("h2",{staticClass:"shop-name f18 text-purple"},[t._v("卡琪儿婚纱摄影")])])],1),t._v(" "),s("el-row",{attrs:{gutter:5}},[s("el-col",{staticClass:"hd",attrs:{span:6}},[t._v("品牌名称：")]),t._v(" "),s("el-col",{staticClass:"bd",attrs:{span:18}},[t._v(t._s(t.data.shop_name))])],1),t._v(" "),s("el-row",{attrs:{gutter:5}},[s("el-col",{staticClass:"hd",attrs:{span:6}},[t._v("经营范围：")]),t._v(" "),s("el-col",{staticClass:"bd",attrs:{span:18}},[t._v(t._s(t.data.shop_category_name))])],1),t._v(" "),s("el-row",{attrs:{gutter:5}},[s("el-col",{staticClass:"hd",attrs:{span:6}},[t._v("门店电话：")]),t._v(" "),s("el-col",{staticClass:"bd",attrs:{span:18}},[t._v(t._s(t.data.shop_phone))])],1),t._v(" "),s("el-row",{attrs:{gutter:5}},[s("el-col",{staticClass:"hd",attrs:{span:6}},[t._v("电子邮箱：")]),t._v(" "),s("el-col",{staticClass:"bd",attrs:{span:18}},[t._v(t._s(t.data.shop_email))])],1),t._v(" "),s("el-row",{attrs:{gutter:5}},[s("el-col",{staticClass:"hd",attrs:{span:6}},[t._v("所在地区：")]),t._v(" "),s("el-col",{staticClass:"bd",attrs:{span:18}},[t._v(t._s(t.data.shop_name))])],1),t._v(" "),s("el-row",{attrs:{gutter:5}},[s("el-col",{staticClass:"hd",attrs:{span:6}},[t._v("联系地址：")]),t._v(" "),s("el-col",{staticClass:"bd",attrs:{span:18}},[t._v(t._s(t.data.shop_address))])],1),t._v(" "),s("el-row",{attrs:{gutter:5}},[s("el-col",{staticClass:"hd",attrs:{span:6}},[t._v("商家简介：")]),t._v(" "),s("el-col",{staticClass:"bd",attrs:{span:18}},[t._v(t._s(t.data.shop_introduce))])],1),t._v(" "),s("el-row",{attrs:{gutter:5}},[s("el-col",{staticClass:"hd",attrs:{span:6}},[t._v("商家封面：")]),t._v(" "),s("el-col",{staticClass:"bd",attrs:{span:18}},[s("img",{staticStyle:{"max-width":"400px"},attrs:{src:t.data.shop_cover_img}})])],1),t._v(" "),s("el-row",{attrs:{gutter:5}},[s("el-col",{staticClass:"hd",attrs:{span:6}},[t._v("店铺环境：")]),t._v(" "),s("el-col",{staticClass:"bd",attrs:{span:18}},[s("el-row",{attrs:{gutter:20}},t._l(t.data.shop_environment_data,function(t,a){return s("el-col",{key:a,attrs:{span:6}},[s("img",{attrs:{src:t,width:"100%"}})])}))],1)],1),t._v(" "),s("el-row",{staticClass:"mb-n",attrs:{gutter:5}},[s("el-col",{staticClass:"hd",attrs:{span:6}},[t._v("地理位置：")]),t._v(" "),s("el-col",{staticClass:"bd",attrs:{span:18}},[s("div",{staticClass:"location"},[s("baidu-map",{staticClass:"map",attrs:{center:{lng:t.data.shop_longitude,lat:t.data.shop_latitude},zoom:14}})],1)])],1)],1)]),t._v(" "),s("div",{staticClass:"panel"},[s("div",{staticClass:"panel-body info-box"},[t.data.bank_info?[s("el-row",{attrs:{gutter:5}},[s("el-col",{staticClass:"hd",attrs:{span:6}},[t._v("持卡人姓名：")]),t._v(" "),s("el-col",{staticClass:"bd",attrs:{span:18}},[t._v(t._s(t.data.bank_info.shop_bank_user))])],1),t._v(" "),s("el-row",{attrs:{gutter:5}},[s("el-col",{staticClass:"hd",attrs:{span:6}},[t._v("银行卡号：")]),t._v(" "),s("el-col",{staticClass:"bd",attrs:{span:18}},[t._v(t._s(t.data.bank_info.shop_bank_card_number))])],1),t._v(" "),s("el-row",{attrs:{gutter:5}},[s("el-col",{staticClass:"hd",attrs:{span:6}},[t._v("银行卡照：")]),t._v(" "),s("el-col",{staticClass:"bd",attrs:{span:18}},[s("img",{staticStyle:{"max-width":"400px"},attrs:{src:t.data.bank_info.shop_bank_front_img}})])],1)]:t._e(),t._v(" "),t.data.verify_info?[s("el-row",{attrs:{gutter:5}},[s("el-col",{staticClass:"hd",attrs:{span:6}},[t._v("营业执照：")]),t._v(" "),s("el-col",{staticClass:"bd",attrs:{span:18}},[s("img",{staticStyle:{"max-width":"400px"},attrs:{src:t.data.verify_info.shop_info_licence}})])],1),t._v(" "),s("el-row",{staticClass:"mb-n",attrs:{gutter:5}},[s("el-col",{staticClass:"hd",attrs:{span:6}},[t._v("身份证照：")]),t._v(" "),s("el-col",{staticClass:"bd",attrs:{span:18}},[s("el-row",{staticClass:"mb-n",attrs:{gutter:20}},[s("el-col",{attrs:{span:6}},[s("img",{attrs:{src:t.data.verify_info.shop_info_id_card_front,width:"100%"}})]),t._v(" "),s("el-col",{attrs:{span:6}},[s("img",{attrs:{src:t.data.verify_info.shop_info_id_card_con,width:"100%"}})])],1)],1)],1)]:t._e()],2)])])},staticRenderFns:[]};var r=s("VU/8")(l,e,!1,function(t){s("uFZc")},"data-v-5c75175c",null);a.default=r.exports},uFZc:function(t,a){}});