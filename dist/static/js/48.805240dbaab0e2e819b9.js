webpackJsonp([48],{"S/7v":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("bOdI"),l=a.n(r),s=a("gRE1"),i=a.n(s),n=a("fZjL"),o=a.n(n),d=a("0qDT"),u=a("PMOO"),c=a("tVcc"),_={data:function(){return{breadcrumb:[{name:"订单管理"},{name:"商品订单",url:"/order/list_goods"}],status_filter:"",tagsListGroup:{"利润归属:":[{title:"全部",key:"profit",value:0},{title:"利润归平台",key:"profit",value:1},{title:"利润归门店",key:"profit",value:2}],"订单状态:":[{title:"全部",key:"status",value:0},{title:"未付款",key:"status",value:1},{title:"已付款/待发货",key:"status",value:2},{title:"已发货",key:"status",value:3},{title:"完成",key:"status",value:4},{title:"已取消",key:"status",value:5}]},searchs:{list:[{type:"input-text",label:"用户名",name:"user_name",value:"",placeholder:"用户名"},{type:"input-text",label:"手机号",name:"phone",value:"",placeholder:""},{type:"input-singal-date",label:"开始时间",name:"start_time",value:""},{type:"input-singal-date",label:"结束时间",name:"end_time",value:""}]},tableJson:{column:[{type:"text",align:"center",label:"商品名称",prop:"business_ctime",width:"300",formatter:function(e){var t="";return e.goods_list&&(e.goods_list.forEach(function(e){t+='<div class="flex_box"><div class="flex_item"><img width="30" height="30" src="'+e.goods_img+'"/></div><div class="flex_item">'+e.goods_name+'</div><div class="flex_item">¥'+e.goods_price+"✖️ "+e.goods_num+"</div></div>"}),t+="</div>"),t}},{type:"text",align:"center",label:"创建时间",prop:"order_ctime",width:""},{type:"text",align:"center",label:"用户/手机号",prop:"order_user_name",width:"",formatter:function(e){return e.order_user_name+"<br/>"+e.order_user_phone}},{type:"text",align:"center",label:"实付金额",prop:"order_online_price",width:""},{type:"text",align:"center",label:"订单状态",prop:"order_name",width:"",formatter:function(e){var t=e.order_status_all;return 1==t&&(e.order_name="创建"),2==t&&(e.order_name="已支付"),3==t&&(e.order_name="已发货"),4==t&&(e.order_name="已完成"),5==t&&(e.order_name="已评价"),8==t&&(e.order_name="已取消"),e.order_name}},{type:"text",label:"操作",align:"center",width:"200",formatter:function(e){var t='<div style="text-align:right">';return 2==e.order_status_all&&(t+='<a href="/order/send_goods/'+e.order_code+'" class="el-button reset el-button--default el-button--small" >去发货</a>'),t+='<a href="/order/order_detail/'+e.order_code+'" class="el-button reset el-button--default el-button--small is-plain" >详情</a>',t+="</div>"}}]}}},components:{NomalTable:d.a,TableSearch:u.a,BreadCrumb:c.a},beforeRouteUpdate:function(e,t,a){console.log(e.query),this.status_filter=o()(e.query)[0]+i()(e.query)[0],console.log(this.status_filter),this.$refs.table.getData(e.query),a()},created:function(){console.log("created")},computed:{},methods:{getData:function(e,t){this.$refs.table.getData(l()({},e,t))}}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",{staticClass:"page-header"},[a("bread-crumb",{attrs:{"bread-crumb":e.breadcrumb}})],1),e._v(" "),a("div",{staticClass:"page-content"},[a("div",{staticClass:"filter-tag-box"},e._l(e.tagsListGroup,function(t,r,l){return a("div",{key:l,staticClass:"filter-tag-item"},[a("div",{staticClass:"tag-hd"},[e._v(e._s(r))]),e._v(" "),a("div",{staticClass:"tag-bd"},e._l(t,function(t){return a("router-link",{key:t.value,staticClass:"tag",class:t.key+t.value==e.status_filter?"active":"",attrs:{to:{path:"/order/list_goods",query:(r={},r[t.key]=t.value,r)}}},[e._v("\n                        "+e._s(t.title))]);var r}))])})),e._v(" "),a("nomal-table",{ref:"table",attrs:{"table-json":e.tableJson,url:"/api/admin/order/index"}},[a("table-search",{attrs:{searchs:e.searchs}})],1)],1)])},staticRenderFns:[]};var m=a("VU/8")(_,v,!1,function(e){a("ndc+")},"data-v-d3e8af08",null);t.default=m.exports},"ndc+":function(e,t){}});