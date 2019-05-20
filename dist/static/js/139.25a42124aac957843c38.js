webpackJsonp([139],{r11j:function(s,t){},w6ed:function(s,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"detail",components:{},data:function(){return{tab:"info",info:{},id:"",shopList:{}}},beforeRouteUpdate:function(s,t,i){},created:function(){},computed:{},mounted:function(){console.log(this.$route.params),this.id=this.$route.params.id,this.getData(this.$route.params),this.getShopList()},methods:{handleTabsClick:function(s){console.log(this.tab)},getData:function(s){var t=this;this.$axios({method:"get",url:"/api/admin/business/getOneById",params:s}).then(function(s){0==s.data.code?t.info=s.data.data:t.$alert("接口返回错误")}).catch(function(s){t.$alert("接口返回错误"+s)})},getShopList:function(){var s=this;this.$axios({method:"get",url:"/api/admin/business/getBusinessShop",params:{id:this.id,page_size:100}}).then(function(t){0==t.data.code?s.shopList=t.data.data:s.$alert("接口返回错误")}).catch(function(t){s.$alert("接口返回错误"+t)})},formatPrice:function(s){return(s/100).toFixed(2)}}},e={render:function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"page"},[i("div",{staticClass:"page-header"},[i("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[i("el-breadcrumb-item",[s._v("企业")]),s._v(" "),i("el-breadcrumb-item",{attrs:{to:{path:s.$route.path}}},[s._v(s._s(s.$route.meta.title))])],1)],1),s._v(" "),i("div",{staticClass:"page-content"},[i("el-tabs",{staticClass:"primary-tab",on:{"tab-click":s.handleTabsClick},model:{value:s.tab,callback:function(t){s.tab=t},expression:"tab"}},[i("el-tab-pane",{attrs:{label:"基本信息",name:"info"}}),s._v(" "),i("el-tab-pane",{attrs:{label:"拥有门店",name:"shop"}})],1),s._v(" "),"shop"==s.tab?i("div",{staticClass:"page-column"},[i("div",{staticClass:"p-xl"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:s.shopList}},[i("el-table-column",{attrs:{prop:"shop_name",label:"门店",width:"280"}}),s._v(" "),i("el-table-column",{attrs:{prop:"shop_ctime",label:"创建时间",width:"180"}}),s._v(" "),i("el-table-column",{attrs:{prop:"shop_service_phone",label:"类型"}}),s._v(" "),i("el-table-column",{attrs:{prop:"shop_service_phone",label:"店长"}}),s._v(" "),i("el-table-column",{attrs:{prop:"shop_service_phone",label:"手机号"}})],1)],1)]):s._e(),s._v(" "),"info"==s.tab?i("div",{staticClass:"page-column"},[i("div",{staticClass:"page-main"},[i("div",{staticClass:"panel-status text-justify"},[i("div",[i("span",[s._v("状态：")]),i("span",{staticClass:"f18 bold"},[s._v("\n                "+s._s(["删除","正常"][s.info.business_status])+"\n            ")])])]),s._v(" "),i("div",{staticClass:"panel"},[s._m(0),s._v(" "),i("div",{staticClass:"panel-body"},[i("div",{staticClass:"item-list f14 four-text"},[i("div",{staticClass:"item"},[i("div",{staticClass:"hd"},[s._v("企业logo：")]),s._v(" "),s.info.business_logo?i("div",{staticClass:"bd"},[i("img",{attrs:{src:s.info.business_logo,width:"200"}})]):i("div",{staticClass:"bd"},[s._v("\n                                    暂无logo\n                                ")])]),s._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"hd"},[s._v("法人代表：")]),s._v(" "),i("div",{staticClass:"bd"},[s._v(s._s(s.info.business_corporation)+"\n\n                                    拥有"+s._s(s.info.shop_total)+"家门店\n                                ")])]),s._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"hd"},[s._v("联系电话：")]),s._v(" "),i("div",{staticClass:"bd"},[s._v(s._s(s.info.business_phone))])]),s._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"hd"},[s._v("公司名称：")]),s._v(" "),i("div",{staticClass:"bd"},[s._v(s._s(s.info.business_name))])]),s._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"hd"},[s._v("企业类型：")]),s._v(" "),i("div",{staticClass:"bd"},[s._v(s._s(1===s.info.business_type?"加盟":"非加盟"))])]),s._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"hd"},[s._v("行业：")]),s._v(" "),i("div",{staticClass:"bd"},[s._v(s._s(s.info.category_name))])]),s._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"hd"},[s._v("推荐人：")]),s._v(" "),i("div",{staticClass:"bd"},[s._v(s._s(s.info.referee_phone))])]),s._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"hd"},[s._v("法人身份证：")]),s._v(" "),i("div",{staticClass:"bd"},[i("img",{attrs:{src:s.info.business_sfz_pic_z,width:"200"}}),s._v(" "),i("img",{attrs:{src:s.info.business_sfz_pic_f,width:"200"}})])])])])]),s._v(" "),i("div",{staticClass:"panel"},[s._m(1),s._v(" "),i("div",{staticClass:"panel-body"},[i("div",{staticClass:"item-list f14 four-text"},[i("div",{staticClass:"item"},[i("div",{staticClass:"hd"},[s._v("经营状态：")]),s._v(" "),i("div",{staticClass:"bd"},[s._v(s._s(1===s.info.business_is_use?"启用":"不启用"))])]),s._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"hd"},[s._v("加盟时间：")]),s._v(" "),i("div",{staticClass:"bd"},[s._v(s._s(s.info.business_ctime))])]),s._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"hd"},[s._v("加盟费：")]),s._v(" "),i("div",{staticClass:"bd"},[s._v(s._s(s.info.business_join_money))])]),s._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"hd"},[s._v("公司地址：")]),s._v(" "),i("div",{staticClass:"bd"},[s._v(s._s(s.info.business_company_adress))])]),s._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"hd"},[s._v("营业执照号：")]),s._v(" "),i("div",{staticClass:"bd"},[s._v(s._s(s.info.business_licence_num))])]),s._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"hd"},[s._v("营业执照：")]),s._v(" "),i("div",{staticClass:"bd"},[i("img",{attrs:{src:s.info.business_licence_pic,width:"200"}})])])])])])]),s._v(" "),i("div",{staticClass:"page-side"},[i("div",{staticClass:"panel"},[s._m(2),s._v(" "),i("div",{staticClass:"panel-body"},[i("div",{staticClass:"item-list f14"},[i("div",{staticClass:"item"},[i("div",{staticClass:"hd"},[s._v("审核人：")]),s._v(" "),i("div",{staticClass:"bd"},[s._v(s._s(s.info.admin_user_name))])]),s._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"hd"},[s._v("审核时间：")]),s._v(" "),i("div",{staticClass:"bd"},[s._v(s._s(s.info.business_ctime))])])])])])])]):s._e()],1)])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"panel-heading"},[t("h3",{staticClass:"panel-title bold"},[this._v("基本信息")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"panel-heading"},[t("h3",{staticClass:"panel-title bold"},[this._v("公司信息")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"panel-heading"},[t("h3",{staticClass:"panel-title bold"},[this._v("审核记录")])])}]};var l=i("VU/8")(a,e,!1,function(s){i("r11j")},"data-v-2f409053",null);t.default=l.exports}});