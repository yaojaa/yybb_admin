webpackJsonp([61],{FHvN:function(t,e){},Wu5c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("bOdI"),s=i.n(a),n=i("gRE1"),l=i.n(n),c=i("fZjL"),r=i.n(c),o=i("0qDT"),u=i("tVcc"),p={data:function(){return{breadcrumb:[{name:"营销管理/营销应用",url:"/marketing/markList"},{name:"新人红包",url:"/marketing/newPerson/list"}],dialog:!1,status_filter:"",activity_status:null,activity_title:"",activity_code:"",tagsListGroup:{"活动状态:":[{title:"下架",key:"activity_status",value:1},{title:"上架",key:"activity_status",value:2}],"活动分类:":[{title:"商品",key:"activity_goods_type",value:1},{title:"服务",key:"activity_goods_type",value:2}]},url:"/api/admin/activity/index?activity_rule_type=22",tableJson:{column:[{type:"text",align:"center",label:"活动ID",prop:"activity_code",width:"120px"},{type:"text",align:"center",label:"创建时间",prop:"activity_ctime",width:"200px"},{type:"text",align:"center",label:"活动标题",prop:"activity_title",width:""},{type:"text",align:"center",label:"创建人",prop:"admin_user_name",width:"120px"},{type:"text",align:"center",label:"活动时间",prop:"coupon_expire",width:"",formatter:function(t){return"<p style='text-align: center'>\n                            "+(t.activity_start_time||"")+"<br/>至<br/>\n                            "+(t.activity_end_time||"")+"</p>"}},{type:"text",label:"状态",align:"center",width:"",prop:"activity_status",formatter:function(t){return 1==t.activity_status?"<p style='text-align: center'>未发布</p>":"<p style='text-align: center'>已发布</p>"}},{type:"switch_button",label:"上线/下线",align:"center",width:"100",prop:"activity_status",value:["上线","下线"]},{type:"handle",label:"操作",align:"center",width:"",list:[{label:"已用门店",type:"edit",onClick:function(t,e,i){e.$router.push("/marketing/person/usedShop/"+i.activity_code)}},{label:"编辑",type:"edit",onClick:function(t,e,i){console.log(e,"self"),console.log(i,"row"),e.$router.push("/marketing/newPerson/personAdd/"+i.activity_code)}},{label:"详情",type:"detail",onClick:function(t,e,i){e.$router.push("/marketing/newPerson/personInfo/"+i.activity_code)}}]}]}}},components:{NomalTable:o.a,BreadCrumb:u.a},beforeRouteUpdate:function(t,e,i){console.log(t.query),this.status_filter=r()(t.query)[0]+l()(t.query)[0],this.$refs.table.getData(t.query),i()},created:function(){},computed:{},methods:{upperShelf:function(){var t=this,e={activity_code:this.activity_code};1==this.activity_status&&(console.log(11111),this.$axios.post("/api/admin/activity/close",e).then(function(e){0==e.data.code?(t.$alert("操作成功"),t.dialog=!1,t.$refs.table.getData({is_page:1,page:1})):t.$alert(e.data.msg)}).catch(function(e){t.$alert("操作失败"+e)})),2==this.activity_status&&this.$axios.post("/api/admin/activity/publish",e).then(function(e){0==e.data.code?(t.$alert("操作成功"),t.dialog=!1,t.$refs.table.getData({is_page:1,page:1})):t.$alert(e.data.msg)}).catch(function(e){t.$alert("操作失败"+e)})},listenSwitchChange:function(t){var e=t.value,i=e.activity_title,a=e.activity_status,s=e.activity_code;this.activity_status=2==a?1:2,this.activity_title=i,this.activity_code=s,this.dialog=!0},getData:function(t,e){this.$refs.table.getData(s()({},t,e))}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{staticClass:"page-header"},[i("div",{staticClass:"crumbs"},[i("bread-crumb",{attrs:{"bread-crumb":t.breadcrumb}})],1),t._v(" "),i("div",{staticClass:"page-header-actions"},[i("el-button",{attrs:{icon:"el-icon-plus",size:"mini",type:"primary"},on:{click:function(e){t.$router.push({path:"/marketing/newPerson/personAdd"})}}},[t._v("添加")])],1)]),t._v(" "),i("div",{staticClass:"page-content"},[i("div",{staticClass:"filter-tag-box"},t._l(t.tagsListGroup,function(e,a,s){return i("div",{key:s,staticClass:"filter-tag-item"},[i("div",{staticClass:"tag-hd"},[t._v(t._s(a))]),t._v(" "),i("div",{staticClass:"tag-bd"},t._l(e,function(e,a){return i("router-link",{key:e.value,staticClass:"tag",class:e.key+e.value==t.status_filter?"active":"",attrs:{to:{path:"/marketing/newPerson/list",query:(s={},s[e.key]=e.value,s)}}},[t._v("\n                        "+t._s(e.title))]);var s}))])})),t._v(" "),i("nomal-table",{ref:"table",attrs:{"table-json":t.tableJson,url:t.url},on:{listenSwitchChange:t.listenSwitchChange}}),t._v(" "),i("el-dialog",{attrs:{title:2==t.activity_status?"上线":"下线",visible:t.dialog,width:"30%"},on:{"update:visible":function(e){t.dialog=e}}},[i("p",{staticStyle:{color:"red"}},[t._v("此操作会"+t._s(2==t.activity_status?"上线":"下线")+t._s(t.activity_title)+"活动")]),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialog=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.upperShelf}},[t._v("确 定")])],1)])],1)])},staticRenderFns:[]};var v=i("VU/8")(p,d,!1,function(t){i("FHvN")},"data-v-b51574bc",null);e.default=v.exports}});