webpackJsonp([71],{"1dzR":function(e,t){},jO28:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("bOdI"),i=a.n(s),l=a("0qDT"),n=a("PMOO"),o={data:function(){return{user:JSON.parse(localStorage.user),dialog:!1,business_id:"",is_use:"",remark:"无",status_filter:"",tagsListGroup:{"购买渠道:":[{title:"全部",key:"business_type",value:""},{title:"加盟",key:"business_type",value:1},{title:"非加盟",key:"business_type",value:2}],"选择状态:":[{title:"全部",key:"shop_is_use",value:""},{title:"停用",key:"shop_is_use",value:0},{title:"启用",key:"shop_is_use",value:1}]},searchs:{list:[{type:"input-text",label:"企业名称",name:"business_name",value:"",placeholder:"企业名称"},{type:"input-text",label:"店长",name:"city",value:"",placeholder:""},{type:"input-text",label:"城市",name:"option",value:"all",options:[{name:"全部",value:"all"},{name:"option2",value:"option2"},{name:"option3",value:"option3"}]},{type:"input-singal-date",label:"开始时间",name:"start_time",value:""},{type:"input-singal-date",label:"结束时间",name:"end_time",value:""}]},url:"/api/admin/shop/reviewList",tableJson:{column:[{type:"text",align:"center",label:"创建时间",prop:"create_time",width:""},{type:"text",align:"center",label:"门店名称",prop:"shop_name",width:""},{type:"text",align:"center",label:"店长",prop:"shop_corporation",width:"200"},{type:"text",align:"center",label:"城市",prop:"shop_address",width:"200"},{type:"text",align:"center",label:"归属企业",prop:"business_name"},{type:"text",align:"center",label:"状态",width:"",formatter:function(e){return'<div style="color:red">\n                                '+(1==e.review_status?"审核中":"")+"\n                                "+(2==e.review_status?"审核通过":"")+"\n                                "+(3==e.review_status?"审核不通过":"")+"\n                                </div>"}},{type:"handle",label:"查看",align:"center",width:"50",list:[{label:"详情",type:"detail",onClick:function(e,t,a){t.$router.push("/audit/shop/"+a._id)}}]}]}}},components:{NomalTable:l.a,TableSearch:n.a},created:function(){},computed:{},methods:{listenSwitchChange:function(e){var t=e.value,a=t.business_id,s=t.shop_is_use;console.log(s),this.business_id=a,this.is_use=1==s?0:1,console.log(this.is_use),this.dialog=!0},doUpdateIsUse:function(){var e=this,t={id:this.business_id,is_use:this.is_use,remark:this.remark};this.$axios.post("/api/admin/shop/isUse",t).then(function(t){e.dialog=!1,console.log(t),0==t.data.code?(e.$alert("操作成功"+t.data.data),e.$refs.table.getData({is_page:1,page:1})):e.$alert("操作失败"+t.data.msg)}).catch(function(t){e.$alert("操作失败"+t)})},openModal:function(){console.log("openModal")},getData:function(e,t){this.$refs.table.getData(i()({},e,t))}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",{staticClass:"page-header"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[e._v("营销管理")]),e._v(" "),a("el-breadcrumb-item",{attrs:{to:{path:e.$route.path}}},[e._v(e._s(e.$route.meta.title))])],1)],1),e._v(" "),a("div",{staticClass:"page-content"},[a("div",{staticClass:"filter-tag-box"},e._l(e.tagsListGroup,function(t,s,i){return a("div",{key:i,staticClass:"filter-tag-item"},[a("div",{staticClass:"tag-hd"},[e._v(e._s(s))]),e._v(" "),a("div",{staticClass:"tag-bd"},e._l(t,function(t,s){return a("router-link",{key:t.value,staticClass:"tag",class:t.key+t.value==e.status_filter?"active":"",attrs:{to:{path:"/audit/shop",query:(i={},i[t.key]=t.value,i)}}},[e._v("\n                        "+e._s(t.title))]);var i}))])})),e._v(" "),a("nomal-table",{ref:"table",attrs:{"table-json":e.tableJson,url:e.url},on:{listenSwitchChange:e.listenSwitchChange}},[a("table-search",{attrs:{searchs:e.searchs}})],1),e._v(" "),a("el-dialog",{attrs:{title:0==e.is_use?"停用":"启用",visible:e.dialog,width:"30%"},on:{"update:visible":function(t){e.dialog=t}}},[a("p",{staticStyle:{color:"red"}},[e._v("此操作会"+e._s(0==e.is_use?"停用":"启用")+"门店")]),e._v(" "),a("p",[e._v("操作人:"+e._s(e.user.data.user_realname))]),e._v(" "),a("p",[e._v("操作备注:")]),e._v(" "),a("p",[a("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"请输入操作备注"},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialog=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.doUpdateIsUse}},[e._v("确 定")])],1)])],1)])},staticRenderFns:[]};var u=a("VU/8")(o,r,!1,function(e){a("1dzR")},"data-v-8138f8f4",null);t.default=u.exports}});