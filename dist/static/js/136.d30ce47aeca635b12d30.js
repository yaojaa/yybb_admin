webpackJsonp([136],{FVLG:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,s=a("bOdI"),n=a.n(s),l=a("gRE1"),r=a.n(l),o=a("fZjL"),c=a.n(o),d=a("0qDT"),u=a("tVcc"),p=a("PMOO"),h=(a("y5RH"),{data:function(){return{breadcrumb:[{name:"加盟商管理"},{name:"培训列表",url:"/training/list"}],user:JSON.parse(localStorage.user),dialog:!1,business_id:"",is_use:"",remark:"无",status_filter:"",searchs:{list:[{type:"input-text",label:"培训id",name:"id",value:"",placeholder:"请输入培训id"},{type:"input-text",label:"培训标题",name:"train_title",value:"",placeholder:"请输入培训标题"}]},url:"/api/admin/train/index",tableJson:{column:[{type:"text",align:"center",label:"培训ID",prop:"train_id",width:""},{type:"text",align:"center",label:"创建时间",prop:"train_ctime",width:""},{type:"text",align:"center",label:"培训标题",prop:"train_title",width:"200"},{type:"text",align:"center",label:"培训内容",prop:"train_content"},{type:"text",align:"center",label:"报名链接",prop:"train_url"},{type:"handle",label:"操作",align:"center",width:"",list:[{label:"删除",type:"delete",url:"",params:{name:"id",data:"train_id"},axiosUrl:"/api/admin/train/remove",axiosType:"post",callback:function(e,t,a){console.log(a,"!!!!!!"),t.nomal=!t.nomal,e.isShow=!e.isShow}},{label:"编辑",type:"edit",onClick:function(e,t,a){console.log(a,"row"),t.$router.push("/training/add/"+a.train_id)}}]}]}}},components:{NomalTable:d.a,TableSearch:p.a,BreadCrumb:u.a},beforeRouteUpdate:function(e,t,a){console.log(e.query),this.status_filter=c()(e.query)[0]+r()(e.query)[0],this.$refs.table.getData(e.query),a()},created:function(){},computed:{},methods:(i={openModal:function(e){this.currentItem=e,this.visible=!0},doUpdateIsUse:function(){var e=this,t=this.currentItem,a=t.good_id,i=t.is_use,s=void 0;1===i?s=2:2===i&&(s=1);var n={id:a,is_use:s};this.$axios.post("/api/admin/shopgoods/isUse",n).then(function(t){e.visible=!1,e.$refs.table.getData({good_type:1})})},listenSwitchChange:function(e){var t=e.value,a=t.business_id,i=t.shop_is_use;console.log(i),this.business_id=a,this.is_use=1==i?0:1,console.log(this.is_use),this.dialog=!0}},n()(i,"doUpdateIsUse",function(){var e=this,t={id:this.business_id,is_use:this.is_use,remark:this.remark};this.$axios.post("/api/admin/shop/isUse",t).then(function(t){e.dialog=!1,console.log(t),0==t.data.code?(e.$alert("操作成功"+t.data.data),e.$refs.table.getData({is_page:1,page:1})):e.$alert("操作失败"+t.data.msg)}).catch(function(t){e.$alert("操作失败"+t)})}),n()(i,"openModal",function(){console.log("openModal")}),n()(i,"getData",function(e,t){this.$refs.table.getData(n()({},e,t))}),i)}),b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",{staticClass:"page-header"},[a("div",{staticClass:"crumbs"},[a("bread-crumb",{attrs:{"bread-crumb":e.breadcrumb}})],1),e._v(" "),a("div",{staticClass:"page-header-actions"},[a("el-button",{attrs:{icon:"el-icon-plus",size:"mini",type:"primary"},on:{click:function(t){e.$router.push({path:"/training/add"})}}},[e._v("添加干货培训")])],1)]),e._v(" "),a("div",{staticClass:"page-content"},[a("nomal-table",{ref:"table",attrs:{"table-json":e.tableJson,url:e.url},on:{listenSwitchChange:e.listenSwitchChange}},[a("table-search",{attrs:{searchs:e.searchs}})],1)],1)])},staticRenderFns:[]};var g=a("VU/8")(h,b,!1,function(e){a("sXnn")},"data-v-33bd7a40",null);t.default=g.exports},sXnn:function(e,t){}});