webpackJsonp([128],{"6cOc":function(e,a){},p054:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=t("0qDT"),n=t("PMOO"),r=t("tVcc"),i={data:function(){return{form:{},url:"",breadcrumb:[{name:"展会管理"}],pageJson:{column:[{type:"text",align:"center",label:"展会活动",prop:"name"},{type:"text",align:"center",label:"展会时间",prop:"date",width:"200"},{type:"text",align:"center",label:"状态",prop:"name"},{type:"text",align:"center",label:"参展商",prop:"name",width:"200"},{type:"text",align:"center",label:"索票数",prop:"name"},{type:"text",align:"center",label:"创建时间",prop:"date",width:"200"},{type:"handle",label:"操作",align:"center",width:"200",list:[{label:"查看",type:"detail",url:"/exhibitioninfo"}]}]},searchs:{list:[{type:"input-text",label:"展会名称",name:"name",value:"",placeholder:"展会名称"},{type:"input-select",label:"展会城市",name:"city",value:"all",options:[{name:"全部",value:"all"},{name:"option2",value:"option2"},{name:"option3",value:"option3"}]},{type:"input-radio",label:"状态：",name:"status",value:"all",list:[{name:"全部",value:"all"},{name:"未开始",value:"notbegun"},{name:"进行中",value:"on"},{name:"已结束",value:"end"}]}]}}},beforeCreate:function(){},mounted:function(){},components:{NomalTable:l.a,BreadCrumb:r.a,TableSearch:n.a}},o={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"page"},[t("div",{staticClass:"page-header"},[t("div",{staticClass:"crumbs"},["/exhibitionmanage/info"!==e.$route.path?t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",[e._v("展会")]),e._v(" "),t("el-breadcrumb-item",{attrs:{to:{path:e.$route.path}}},[e._v(e._s(e.$route.meta.title))])],1):e._e()],1)]),e._v(" "),t("div",{staticClass:"page-content"},[t("div",{staticClass:"panel"},[t("nomal-table",{attrs:{"table-json":e.pageJson,url:e.url}},[t("table-search",{attrs:{searchs:e.searchs}})],1)],1)])])},staticRenderFns:[]};var s=t("VU/8")(i,o,!1,function(e){t("6cOc")},"data-v-390ad78c",null);a.default=s.exports}});