webpackJsonp([31],{"+EPG":function(e,t){},"4/oe":function(e,t){},XVCe:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("tVcc"),l=a("0qDT"),s={name:"tabletest",data:function(){return{dialogVisible:!1,url:"",breadcrumb:[{name:"广告"},{name:"广告管理",url:"/ad/admin"},{name:"添加广告位"}],addForm:{id:"",name:"",type:"",size:"",minprice:"",maxprice:""},size:{width:"",height:""},rules:{id:[{required:!0,message:"请输广告位编号",trigger:"blur"}],name:[{required:!0,message:"请输入广告位名称",trigger:"blur"}],minprice:[{required:!0,message:"请填写价格",trigger:"blur"}],maxprice:[{required:!0,message:"请填写价格",trigger:"blur"}]},tableJson:{formatter:function(e){return e.splice(0,5)},column:[{type:"text",label:"编号",prop:"id",width:"100",align:"center"},{type:"text",label:"广告位名称",prop:"name",width:"",align:"center"}]}}},components:{BreadCrumb:i.a,NomalTable:l.a},created:function(){},computed:{},methods:{submitForm:function(e){console.log(this.addForm)}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",{staticClass:"page-header"},[a("div",{staticClass:"crumbs"},[a("bread-crumb",{attrs:{"bread-crumb":e.breadcrumb}})],1)]),e._v(" "),a("div",{staticClass:"page-content"},[a("div",{staticClass:"panel"},[a("div",{staticClass:"form-panel p-xl"},[a("el-form",{ref:"addForm",attrs:{rules:e.rules,model:e.addForm,"label-width":"96px"}},[a("div",{staticClass:"ad-form-cell"},[a("div",{staticClass:"cell",staticStyle:{position:"relative"}},[a("el-form-item",{attrs:{label:"广告位编号",prop:"id"}},[a("el-input",{attrs:{placeholder:"请输入广告位编号"},model:{value:e.addForm.id,callback:function(t){e.$set(e.addForm,"id","string"==typeof t?t.trim():t)},expression:"addForm.id"}})],1),e._v(" "),a("div",{staticStyle:{position:"absolute",right:"-100px",top:"0px"}},[a("a",{staticClass:"ad-ID-btn",attrs:{href:"javascript:;"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("查看广告位编号")])])],1)]),e._v(" "),a("div",{staticClass:"ad-form-cell"},[a("div",{staticClass:"cell"},[a("el-form-item",{attrs:{label:"广告位名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入广告位名称"},model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name","string"==typeof t?t.trim():t)},expression:"addForm.name"}})],1)],1)]),e._v(" "),a("div",{staticClass:"ad-form-cell"},[a("div",{staticClass:"cell"},[a("el-form-item",{attrs:{label:"广告位类型",prop:"type"}},[a("el-radio",{attrs:{label:"1"},model:{value:e.addForm.type,callback:function(t){e.$set(e.addForm,"type",t)},expression:"addForm.type"}},[e._v("图片")]),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.addForm.type,callback:function(t){e.$set(e.addForm,"type",t)},expression:"addForm.type"}},[e._v("视频")])],1)],1)]),e._v(" "),a("div",{staticClass:"ad-form-cell"},[a("div",{staticClass:"cell"},[a("el-form-item",{attrs:{label:"广告位尺寸",prop:"size"}},[a("div",{staticClass:"ad-size"},[a("div",{staticClass:"input-box"},[a("el-input",{attrs:{placeholder:"广告位宽度"},model:{value:e.size.width,callback:function(t){e.$set(e.size,"width",t)},expression:"size.width"}},[a("template",{slot:"append"},[e._v("px")])],2)],1),e._v(" "),a("div",{staticClass:"input-box"},[a("el-input",{attrs:{placeholder:"广告位高度"},model:{value:e.size.height,callback:function(t){e.$set(e.size,"height",t)},expression:"size.height"}},[a("template",{slot:"append"},[e._v("px")])],2)],1),e._v(" "),a("div",{staticClass:"add-btn"},[a("el-button",{attrs:{plain:""},on:{click:function(t){e.submitForm("addForm")}}},[e._v("+")])],1)]),e._v(" "),a("div",{staticClass:"add-radio"},[a("el-radio",{attrs:{label:"0"},model:{value:e.addForm.size,callback:function(t){e.$set(e.addForm,"size",t)},expression:"addForm.size"}},[e._v("640*720")]),e._v(" "),a("el-radio",{attrs:{label:"1"},model:{value:e.addForm.size,callback:function(t){e.$set(e.addForm,"size",t)},expression:"addForm.size"}},[e._v("1980*1240")]),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.addForm.size,callback:function(t){e.$set(e.addForm,"size",t)},expression:"addForm.size"}},[e._v("960*850")]),e._v(" "),a("el-radio",{attrs:{label:"3"},model:{value:e.addForm.size,callback:function(t){e.$set(e.addForm,"size",t)},expression:"addForm.size"}},[e._v("640*320")]),e._v(" "),a("el-radio",{attrs:{label:"4"},model:{value:e.addForm.size,callback:function(t){e.$set(e.addForm,"size",t)},expression:"addForm.size"}},[e._v("1980*1240")]),e._v(" "),a("el-radio",{attrs:{label:"5"},model:{value:e.addForm.size,callback:function(t){e.$set(e.addForm,"size",t)},expression:"addForm.size"}},[e._v("960*850")]),e._v(" "),a("el-radio",{attrs:{label:"6"},model:{value:e.addForm.size,callback:function(t){e.$set(e.addForm,"size",t)},expression:"addForm.size"}},[e._v("640*320")])],1)])],1)]),e._v(" "),a("div",{staticClass:"ad-form-cell"},[a("div",{staticClass:"cell"},[a("el-form-item",{attrs:{label:"价格",required:""}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"minprice"}},[a("el-input",{staticStyle:{width:"100%"},attrs:{type:"text",placeholder:"请输入价格"},model:{value:e.addForm.minprice,callback:function(t){e.$set(e.addForm,"minprice",e._n("string"==typeof t?t.trim():t))},expression:"addForm.minprice"}})],1)],1),e._v(" "),a("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"maxprice"}},[a("el-input",{staticStyle:{width:"100%"},attrs:{type:"text",placeholder:"请输入价格"},model:{value:e.addForm.maxprice,callback:function(t){e.$set(e.addForm,"maxprice",e._n("string"==typeof t?t.trim():t))},expression:"addForm.maxprice"}})],1)],1)],1)],1)]),e._v(" "),a("div",{staticClass:"ad-form-cell"},[a("div",{staticClass:"cell right-cell"},[a("el-form-item",{staticClass:"mb-n"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("addForm")}}},[e._v("提交")])],1)],1)])])],1)])]),e._v(" "),a("el-dialog",{attrs:{title:"广告位编号",visible:e.dialogVisible,width:"520px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("nomal-table",{attrs:{"table-json":e.tableJson,url:e.url}}),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确定")])],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(s,r,!1,function(e){a("+EPG"),a("4/oe")},"data-v-413ab59b",null);t.default=o.exports}});