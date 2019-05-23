webpackJsonp([104],{BuIR:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i={name:"detail",components:{},data:function(){return{tab:"info",info:{},flag:!1,bankLIst:[],bankInfo:{},value:"",id:"",shopList:{},ruleForm:{id:"",user:"",num:"",branch:"",code:""}}},beforeRouteUpdate:function(t,a,s){},created:function(){},computed:{},mounted:function(){console.log(this.$route.params),this.id=this.$route.params.id,this.getData(this.$route.params),this.getShopList(),this.getBankList(),this.getbankInfo()},methods:{handleTabsClick:function(t){console.log(this.tab)},getData:function(t){var a=this;this.$axios({method:"get",url:"/api/admin/shop/detail",params:t}).then(function(t){0==t.data.code?(a.info=t.data.data,console.log(a.info,"info")):a.$alert("接口返回错误")}).catch(function(t){a.$alert("接口返回错误"+t)})},submit:function(){var t=this;this.ruleForm.id=this.id,console.log(this.ruleForm,"ruleForm"),this.$axios.post("/api/admin/shop/bindCard",this.ruleForm).then(function(a){0==a.data.code?(t.flag=!0,t.$alert("绑定成功"),t.getbankInfo()):t.$alert("接口返回错误")})},unBindCard:function(){var t=this;this.$axios({method:"get",url:"/api/admin/shop/unBindCard",params:{id:this.id}}).then(function(a){0==a.data.code?(t.flag=!1,t.$alert("解绑成功")):t.$alert("接口返回错误")}).catch(function(a){t.$alert("接口返回错误"+a)})},getBankList:function(){var t=this;this.$axios({method:"get",url:"/api/admin/select/bankList"}).then(function(a){0==a.data.code?t.bankLIst=a.data.data:t.$alert("接口返回错误")}).catch(function(a){t.$alert("接口返回错误"+a)})},bankChange:function(t){console.log(t),this.ruleForm.code=t},getbankInfo:function(){var t=this;this.$axios({method:"get",url:"/api/admin/shop/bindCardInfo",params:{id:this.id}}).then(function(a){0==a.data.code?(t.bankInfo=a.data.data,0!=a.data.data.length&&(t.flag=!0)):t.$alert("接口返回错误")}).catch(function(a){t.$alert("接口返回错误"+a)})},getShopList:function(){var t=this;this.$axios({method:"get",url:"/api/admin/business/getBusinessShop",params:{id:this.id,page_size:100}}).then(function(a){0==a.data.code?t.shopList=a.data.data:t.$alert("接口返回错误")}).catch(function(a){t.$alert("接口返回错误"+a)})},formatPrice:function(t){return(t/100).toFixed(2)}}},e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page"},[s("div",{staticClass:"page-header"},[s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[s("el-breadcrumb-item",[t._v("企业")]),t._v(" "),s("el-breadcrumb-item",{attrs:{to:{path:t.$route.path}}},[t._v(t._s(t.$route.meta.title))])],1)],1),t._v(" "),s("div",{staticClass:"page-content"},[s("el-tabs",{staticClass:"primary-tab",on:{"tab-click":t.handleTabsClick},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[s("el-tab-pane",{attrs:{label:"基本信息",name:"info"}}),t._v(" "),s("el-tab-pane",{attrs:{label:"拥有门店",name:"shop"}}),t._v(" "),s("el-tab-pane",{attrs:{label:"银行卡",name:"bankCard"}})],1),t._v(" "),"shop"==t.tab?s("div",{staticClass:"page-column"},[s("div",{staticClass:"p-xl"},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.shopList}},[s("el-table-column",{attrs:{prop:"shop_name",label:"门店",width:"280"}}),t._v(" "),s("el-table-column",{attrs:{prop:"shop_ctime",label:"创建时间",width:"180"}}),t._v(" "),s("el-table-column",{attrs:{prop:"shop_service_phone",label:"类型"}}),t._v(" "),s("el-table-column",{attrs:{prop:"shop_service_phone",label:"店长"}}),t._v(" "),s("el-table-column",{attrs:{prop:"shop_service_phone",label:"手机号"}})],1)],1)]):t._e(),t._v(" "),"info"==t.tab?s("div",{staticClass:"page-column"},[s("div",{staticClass:"page-main"},[s("div",{staticClass:"panel-status text-justify"},[s("div",[s("span",[t._v("状态：")]),s("span",{staticClass:"f18 bold"},[t._v("\n                "+t._s(["删除","正常"][t.info.business_status])+"\n            ")])])]),t._v(" "),s("div",{staticClass:"panel"},[t._m(0),t._v(" "),s("div",{staticClass:"panel-body"},[s("div",{staticClass:"item-list f14 four-text"},[s("div",{staticClass:"item"},[s("div",{staticClass:"hd"},[t._v("法人代表：")]),t._v(" "),s("div",{staticClass:"bd"},[t._v(t._s(t.info.shop_corporation))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"hd"},[t._v("联系电话：")]),t._v(" "),s("div",{staticClass:"bd"},[t._v(t._s(t.info.shop_phone))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"hd"},[t._v("公司名称：")]),t._v(" "),s("div",{staticClass:"bd"},[t._v(t._s(t.info.shop_name))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"hd"},[t._v("企业类型：")]),t._v(" "),s("div",{staticClass:"bd"},[t._v(t._s(1===t.info.shop_type?"母店":"子店"))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"hd"},[t._v("行业：")]),t._v(" "),s("div",{staticClass:"bd"},[t._v(t._s(t.info.category_name))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"hd"},[t._v("归属企业：")]),t._v(" "),s("div",{staticClass:"bd"},[t._v(t._s(t.info.business_name))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"hd"},[t._v("法人身份证：")]),t._v(" "),s("div",{staticClass:"bd"},[s("img",{attrs:{src:t.info.shop_sfz_pic_z,width:"200"}}),t._v(" "),s("img",{attrs:{src:t.info.shop_sfz_pic_f,width:"200"}})])])])])]),t._v(" "),s("div",{staticClass:"panel"},[t._m(1),t._v(" "),s("div",{staticClass:"panel-body"},[s("div",{staticClass:"item-list f14 four-text"},[s("div",{staticClass:"item"},[s("div",{staticClass:"hd"},[t._v("经营状态：")]),t._v(" "),s("div",{staticClass:"bd"},[t._v(t._s(1===t.info.shop_is_use?"启用":"不启用"))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"hd"},[t._v("加盟时间：")]),t._v(" "),s("div",{staticClass:"bd"},[t._v(t._s(t.info.shop_ctime))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"hd"},[t._v("公司地址：")]),t._v(" "),s("div",{staticClass:"bd"},[t._v(t._s(t.info.shop_address))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"hd"},[t._v("营业执照号：")]),t._v(" "),s("div",{staticClass:"bd"},[t._v(t._s(t.info.shop_licence_num))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"hd"},[t._v("营业执照：")]),t._v(" "),s("div",{staticClass:"bd"},[s("img",{attrs:{src:t.info.shop_licence_pic,width:"200"}})])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"hd"},[t._v("门店环境图：")]),t._v(" "),s("div",{staticClass:"bd"},t._l(t.info.shop_environment,function(t){return s("img",{key:t,attrs:{src:t,width:"200"}})}))])])])])]),t._v(" "),s("div",{staticClass:"page-side"},[s("div",{staticClass:"panel"},[t._m(2),t._v(" "),s("div",{staticClass:"panel-body"},[s("div",{staticClass:"item-list f14"},[s("div",{staticClass:"item"},[s("div",{staticClass:"hd"},[t._v("审核人：")]),t._v(" "),s("div",{staticClass:"bd"},[t._v(t._s(t.info.admin_user_name))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"hd"},[t._v("审核时间：")]),t._v(" "),s("div",{staticClass:"bd"},[t._v(t._s(t.info.shop_ctime))])])])])])])]):t._e(),t._v(" "),"bankCard"==t.tab?s("div",{staticClass:"page-column"},[s("div",{staticClass:"page-main"},[s("div",{staticClass:"panel "},[s("div",{staticClass:"panel-body width600 "},[s("el-form",{staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"姓名："}},[s("el-input",{model:{value:t.ruleForm.user,callback:function(a){t.$set(t.ruleForm,"user",a)},expression:"ruleForm.user"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"所属银行："}},[s("el-select",{attrs:{placeholder:"请选择所属银行"},on:{change:t.bankChange},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}},t._l(t.bankLIst,function(t){return s("el-option",{key:t.code,attrs:{label:t.name,value:t.code}})}))],1),t._v(" "),s("el-form-item",{attrs:{label:"银行卡号："}},[s("el-input",{model:{value:t.ruleForm.num,callback:function(a){t.$set(t.ruleForm,"num",a)},expression:"ruleForm.num"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"开户行"}},[s("el-input",{model:{value:t.ruleForm.branch,callback:function(a){t.$set(t.ruleForm,"branch",a)},expression:"ruleForm.branch"}})],1),t._v(" "),s("el-form-item",{staticClass:"margin-auto"},[s("el-button",{attrs:{size:"large",type:"primary"},on:{click:function(a){t.submit()}}},[t._v("提交")])],1)],1)],1)]),t._v(" "),s("div",{staticClass:"panel"},[s("div",{staticClass:"panel-body"},[t.flag?s("div",{staticClass:"bank-info-box"},[s("p",[t._v(t._s(t.bankInfo.bank_name))]),t._v(" "),s("p",[t._v(t._s(t.bankInfo.bind_card_nu))]),t._v(" "),s("p",{staticClass:"card-btn",on:{click:function(a){t.unBindCard()}}},[t._v("解除绑定")])]):t._e()])])])]):t._e()],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"panel-heading"},[a("h3",{staticClass:"panel-title bold"},[this._v("基本信息")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"panel-heading"},[a("h3",{staticClass:"panel-title bold"},[this._v("公司信息")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"panel-heading"},[a("h3",{staticClass:"panel-title bold"},[this._v("审核记录")])])}]};var l=s("VU/8")(i,e,!1,function(t){s("ep99")},"data-v-53c7a7c0",null);a.default=l.exports},ep99:function(t,a){}});