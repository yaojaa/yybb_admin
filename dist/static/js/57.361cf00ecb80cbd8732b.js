webpackJsonp([57],{"6XFy":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("bOdI"),r=a.n(n),l=a("gRE1"),i=a.n(l),s=a("fZjL"),c=a.n(s),o=a("0qDT"),u=a("PMOO"),d=a("tVcc"),p={name:"staffList",components:{NomalTable:o.a,TableSearch:u.a,BreadCrumb:d.a},data:function(){return{breadcrumb:[{name:"平台管理"},{name:"成员管理",url:"/admin/staffList"}],status_filter:"",searchs:{list:[{type:"input-text",label:"用户名",name:"user_name",value:"",placeholder:"例：张三"},{type:"input-text",label:"真实姓名",name:"user_realname",value:"",placeholder:"例：客服"}]},tableJson:{column:[{type:"text",align:"center",label:"序号",prop:"user_id",width:"50"},{type:"text",align:"center",label:"成员姓名",prop:"user_realname",width:""},{type:"text",align:"center",label:"角色名称",prop:"role_name",width:""},{type:"text",align:"center",label:"登录账号",prop:"user_name",width:""},{type:"text",align:"center",label:"创建时间",prop:"",width:"",formatter:function(e){return"<p style='text-align: center'>\n\t\t                                    "+(e.user_ctime||"--")+"\n\t\t                                </p>"}},{type:"text",align:"center",label:"最后登录",prop:"user_last_logintime",width:"",formatter:function(e){return"<p style='text-align: center'>\n\t\t                                    "+(e.user_last_logintime||"--")+"\n\t\t                                </p>"}},{type:"handle",label:"操作",align:"center",width:"200",list:[{label:"编辑",onClick:function(e,t,a){t.$router.push("/admin/addStaff/"+a.user_id)}},{label:"删除",onClick:function(e,t,a){t.removeUser(a.user_id)}}]}]}}},beforeRouteUpdate:function(e,t,a){console.log(e.query),this.status_filter=c()(e.query)[0]+i()(e.query)[0],console.log(this.status_filter),this.$refs.table.getData(e.query),a()},created:function(){console.log("created")},computed:{},methods:{removeUser:function(e){var t=this,a={user_id:e};this.$axios.post("/api/admin/adminUser/delete",a).then(function(e){0==e.data.code?(t.$alert("操作成功"),t.$refs.table.getData({is_page:1,page:1})):t.$alert("操作失败"+e.data.msg)}).catch(function(e){t.$alert("操作失败"+e)})},getData:function(e,t){this.$refs.table.getData(r()({},e,t))}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",{staticClass:"page-header"},[a("bread-crumb",{attrs:{"bread-crumb":e.breadcrumb}}),e._v(" "),a("div",{staticClass:"page-header-actions"},[a("el-button",{attrs:{icon:"el-icon-plus",size:"mini",type:"primary"},on:{click:function(t){e.$router.push({path:"/admin/addStaff"})}}},[e._v("添加成员")])],1)],1),e._v(" "),a("div",{staticClass:"page-content"},[a("nomal-table",{ref:"table",attrs:{"table-json":e.tableJson,url:"/api/admin/adminUser/list"}},[a("table-search",{attrs:{searchs:e.searchs}})],1)],1)])},staticRenderFns:[]};var m=a("VU/8")(p,f,!1,function(e){a("naXR")},"data-v-c32f1c1a",null);t.default=m.exports},naXR:function(e,t){}});