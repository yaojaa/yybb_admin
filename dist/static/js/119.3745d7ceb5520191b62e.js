webpackJsonp([119],{"3sxK":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={name:"detail",data:function(){return{breadcrumb:[{name:"营销管理",url:"/marketing/markList"},{name:"满减/立减优惠券",url:"/marketing/fullReducionCouponList"},{name:"详情"}],info:{rules:{is_full:0,price:1e3,reduce_price:1e3},limits:{limit_cycle:1,limit_times:10,limit_total_times:0},coupon_expire:{coupon_expire_day:10,coupon_expire_start_time:"2018-09-10 00:00:00",coupon_expire_end_time:"2018-12-10 00:00:00"},coupon_range:{category_id:1}},categoryList:{},category_name:"",goodsList:{},goodsInfo:{}}},beforeRouteUpdate:function(t,i,a){},created:function(){this.getData(this.$route.params),this.getCategoryList(),this.getGoodsList()},computed:{},mounted:function(){},components:{BreadCrumb:a("tVcc").a},methods:{formatPrice:function(t){return t/100},getCategoryList:function(){var t=this;this.$axios.get("/api/admin/select/categoryList").then(function(i){0==i.data.code&&(t.categoryList=i.data.data,t.categoryList.forEach(function(i){if(t.info.coupon_range.category_id==i.category_id)return t.category_name=i.category_name,console.log(t.category_name,"this.info"),t.category_name}))})},getGoodsList:function(){var t=this;this.$axios.get("/api/admin/select/goodsList").then(function(i){0==i.data.code?(t.goodsList=i.data.data,t.goodsList.forEach(function(i){t.info.coupon_range.goods_id==i.good_id&&(t.goodsInfo=i)})):t.$message({message:i.data.msg,type:"warning"})})},getData:function(t){var i=this;this.$axios({method:"get",url:"/api/admin/coupon/info",params:t}).then(function(t){0==t.data.code?i.info=t.data.data:i.$alert("接口返回错误")}).catch(function(t){i.$alert("接口返回错误"+t)})}}},s={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"page"},[a("div",{staticClass:"page-header"},[a("div",{staticClass:"crumbs"},[a("bread-crumb",{attrs:{"bread-crumb":t.breadcrumb}})],1)]),t._v(" "),a("div",{staticClass:"page-content"},[a("div",{staticClass:"page-column"},[a("div",{staticClass:"page-main"},[a("div",{staticClass:"panel"},[a("div",{staticClass:"panel-body"},[a("div",{staticClass:"item-list f14 four-text"},[a("div",{staticClass:"item"},[a("div",{staticClass:"hd"},[t._v("优惠券标题：")]),t._v(" "),a("div",{staticClass:"bd"},[t._v(t._s(t.info.coupon_title))])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"hd"},[t._v("面值：")]),t._v(" "),a("div",{staticClass:"bd"},[t._v(t._s(t.formatPrice(t.info.rules.reduce_price)))])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"hd"},[t._v("次数限制：")]),t._v(" "),0==t.info.limits.limit_total_times?a("div",{staticClass:"bd"},[a("div",[t._v("可使用次数："+t._s(t.info.limits.limit_times))]),t._v(" "),a("div",[t._v("可使用频率：不限制")])]):t._e(),t._v(" "),0!=t.info.limits.limit_total_times?a("div",{staticClass:"bd"},[a("div",[t._v("可使用次数：每\n                                        "),1==t.info.limits.limit_cycle?a("span",[t._v("日")]):t._e(),t._v(" "),2==t.info.limits.limit_cycle?a("span",[t._v("周")]):t._e(),t._v(" "),3==t.info.limits.limit_cycle?a("span",[t._v("月")]):t._e(),t._v(" "),a("span",[t._v(t._s(t.info.limits.limit_times)+"次")])]),t._v(" "),a("div",[t._v("可使用频率：限制")])]):t._e()]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"hd"},[t._v("最低消费：")]),t._v(" "),a("div",{staticClass:"bd"},[t._v(t._s(t.formatPrice(t.info.rules.price)))])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"hd"},[t._v("使用范围：")]),t._v(" "),1==t.info.coupon_range_type?a("div",{staticClass:"bd"},[t._v("通用")]):t._e(),t._v(" "),2==t.info.coupon_range_type?a("div",{staticClass:"bd"},[a("span",[t._v(t._s(t.category_name))])]):t._e(),t._v(" "),3==t.info.coupon_range_type?a("div",{staticClass:"bd"},[a("p",[t._v("商品")]),t._v(" "),t._l(t.goodsInfo,function(i){return a("div",{key:i.good_id},[a("img",{attrs:{src:i.good_ico,alt:"",width:"60px",height:"60px"}}),t._v(" "),a("span",{staticStyle:{"margin-left":"20px"}},[t._v(t._s(i.good_name))])])})],2):t._e(),t._v(" "),4==t.info.coupon_range_type?a("div",{staticClass:"bd"},[a("p",[t._v("服务")]),t._v(" "),t._l(t.goodsInfo,function(i){return a("div",{key:i.good_id},[a("img",{attrs:{src:i.good_ico,alt:"",width:"60px",height:"60px"}}),t._v(" "),a("span",{staticStyle:{"margin-left":"20px"}},[t._v(t._s(i.good_name))])])})],2):t._e(),t._v(" "),5==t.info.coupon_range_type?a("div",{staticClass:"bd"},[a("p",[t._v("虚拟卡券")]),t._v(" "),t._l(t.goodsInfo,function(i){return a("div",{key:i.good_id},[a("img",{attrs:{src:i.good_ico,alt:"",width:"60px",height:"60px"}}),t._v(" "),a("span",{staticStyle:{"margin-left":"20px"}},[t._v(t._s(i.good_name))])])})],2):t._e()]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"hd"},[t._v("使用有效期：")]),t._v(" "),t.info.coupon_expire.coupon_expire_start_time?a("div",{staticClass:"bd"},[t._v(t._s(t.info.coupon_expire.coupon_expire_start_time+"--"+t.info.coupon_expire.coupon_expire_end_time))]):a("div",{staticClass:"bd"},[t._v("领取后"+t._s(t.info.coupon_expire.coupon_expire_day)+"天内有效")])])])])])])])])])},staticRenderFns:[]};var o=a("VU/8")(e,s,!1,function(t){a("TIF7")},"data-v-459a608f",null);i.default=o.exports},TIF7:function(t,i){}});