webpackJsonp([8],{m1sH:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("fZjL"),s=i.n(a),r=i("mvHQ"),l=i.n(r),o={name:"tabletest",data:function(){return{dataList:[],goodShow:!1,index:"1",goodsVisible:!1,imageUrl:"",checkedList:[],limitsStatus:"",goodsData:[],activeId:"",goodsList:{},tabPosition:"left",limit_total_times:"",step:1,industryForm:[{name:"通用券",type:1},{name:"行业券",type:2},{name:"服务券",type:3},{name:"商品券",type:4},{name:"虚拟商品券",type:5}],itemLIst:[{name:"商品",index:1},{name:"最高优惠",index:2},{name:"新用户砍价",index:3},{name:"老用户砍价",index:4},{name:"新用户奖励",index:5},{name:"老用户奖励",index:6}],breadcrumb:[{name:"营销管理/营销应用",url:"/marketing/markList"},{name:"帮砍",url:"/marketing/helpCut/list"},{name:"添加"}],ruleForm:{activity_title:"",activity_subject:"",activity_desc:"",activity_img:"",activity_status:2,activity_start_time:"",activity_end_time:"",rules:{bargain_type:1,days:""}},rules:{activity_title:[{required:!0,message:"请输入活动名称",trigger:"blur"}],activity_subject:[{required:!0,message:"请输入活动描述",trigger:"blur"}],activity_desc:[{required:!0,message:"请输入活动卖点",trigger:"blur"}]}}},methods:{choiceGoodsClick:function(){var t=this;this.goodsVisible=!0,this.goodsData=[],this.checkedList=[],this.$axios.get("/api/admin/select/goodsList?type=1&category_id="+this.index+"&good_type="+this.ruleForm.rules.bargain_type).then(function(e){0==e.data.code&&(t.goodsList=e.data.data,console.log(t.goodsList,"goodsList55555"))})},helpSure:function(){this.goodsVisible=!1,this.ruleForm.rules.bargain=this.goodsData;for(var t=0;t<this.ruleForm.rules.bargain.length;t++)this.ruleForm.rules.bargain[t].goods_id=this.goodsData[t].good_id,this.ruleForm.rules.bargain[t].max_price="",this.ruleForm.rules.bargain[t].reduce_solid_price="",this.ruleForm.rules.bargain[t].reduce_min_price="",this.ruleForm.rules.bargain[t].reduce_max_price="",this.ruleForm.rules.bargain[t].first_solid_price="",this.ruleForm.rules.bargain[t].first_min_price="",this.ruleForm.rules.bargain[t].first_max_price=""},goodsCancal:function(){this.goodsData=[],this.checkedList=[],this.goodsVisible=!1},uploadActivityImg:function(t){this.ruleForm.activity_img=t.data.url},handleFaceUploadSuccess:function(){},goNextStep:function(t){this.step=t},getCategoryList:function(){var t=this;this.$axios.get("/api/admin/select/categoryList").then(function(e){0==e.data.code&&(t.industryForm=e.data.data,console.log(t.industryForm,"industryForm"))})},submit:function(){for(var t=this,e=this.$route.params,i=JSON.parse(l()(this.ruleForm)),a=0;a<this.ruleForm.rules.bargain.length;a++)i.rules.bargain[a].max_price=100*this.ruleForm.rules.bargain[a].max_price,i.rules.bargain[a].reduce_solid_price=100*this.ruleForm.rules.bargain[a].reduce_solid_price,i.rules.bargain[a].reduce_min_price=100*this.ruleForm.rules.bargain[a].reduce_min_price,i.rules.bargain[a].reduce_max_price=100*this.ruleForm.rules.bargain[a].reduce_max_price,i.rules.bargain[a].first_solid_price=100*this.ruleForm.rules.bargain[a].first_solid_price,i.rules.bargain[a].first_min_price=100*this.ruleForm.rules.bargain[a].first_min_price,i.rules.bargain[a].first_max_price=100*this.ruleForm.rules.bargain[a].first_max_price;s()(e).length?(i.activity_code=e.activity_code,this.$axios.post("/api/admin/activity/edit",i).then(function(e){0==e.data.code?(t.$alert("编辑成功"),t.$router.push("/marketing/helpCut/list")):t.$alert("接口返回错误")})):this.$axios.post("/api/admin/activity/addBargain",i).then(function(e){0==e.data.code?(t.$alert("添加成功！"),t.$router.push("/marketing/helpCut/list")):t.$alert(e.data.msg)}).catch(function(e){t.$alert("操作失败"+e)})}},watch:{activeId:function(t){var e=this;t=Number(t)+1,this.index=t,this.$axios.get("/api/admin/select/goodsList?type=1&good_type="+this.ruleForm.rules.bargain_type+"&category_id="+t).then(function(t){0==t.data.code&&(e.goodsList=t.data.data,console.log(e.goodsList,"goodsList111111"))})},checkedList:function(t){console.log(t,"eee"),this.goodsData=[];for(var e=0;e<this.goodsList.length;e++)for(var i=0;i<t.length;i++)this.goodsList[e].sku==t[i]&&(this.goodsList[e].sku_code=t[i],this.goodsData.push(this.goodsList[e]));console.log(this.goodsData,"this.goodsData22222"),this.goodShow=!0}},mounted:function(){},components:{BreadCrumb:i("tVcc").a},created:function(){var t=this,e=this.$route.params;console.log(e,"3333"),s()(e).length&&(console.log(e,"params"),this.$axios.post("/api/admin/activity/info",e).then(function(e){console.log(e.data.data,"data----data");for(var i=0;i<t.ruleForm.rules.bargain.length;i++)t.ruleForm.rules.bargain[i].max_price=t.ruleForm.rules.bargain[i].max_price/100,t.ruleForm.rules.bargain[i].reduce_solid_price=t.ruleForm.rules.bargain[i].reduce_solid_price/100,t.ruleForm.rules.bargain[i].reduce_min_price=t.ruleForm.rules.bargain[i].reduce_min_price/100,t.ruleForm.rules.bargain[i].reduce_max_price=t.ruleForm.rules.bargain[i].reduce_max_price/100,t.ruleForm.rules.bargain[i].first_solid_price=t.ruleForm.rules.bargain[i].first_solid_price/100,t.ruleForm.rules.bargain[i].first_min_price=t.ruleForm.rules.bargain[i].first_min_price/100,t.ruleForm.rules.bargain[i].first_max_price=t.ruleForm.rules.bargain[i].first_max_price/100;0==e.data.data.limits.limit_total_times?t.limitsStatus=0:t.limitsStatus=1})),this.getCategoryList()},computed:{}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{staticClass:"page-header"},[i("div",{staticClass:"crumbs"},[i("bread-crumb",{attrs:{"bread-crumb":t.breadcrumb}})],1)]),t._v(" "),i("div",{staticClass:"page-content"},[i("el-steps",{attrs:{active:t.step,simple:""}},[i("el-step",{attrs:{title:"编辑基本信息",icon:"el-icon-edit"},nativeOn:{click:function(e){t.goNextStep(1)}}}),t._v(" "),i("el-step",{attrs:{title:"编辑详情信息",icon:"el-icon-edit"},nativeOn:{click:function(e){t.goNextStep(2)}}})],1),t._v(" "),i("div",{staticClass:"panel"},[1==t.step?i("div",{staticClass:"form-panel p-xl"},[i("el-form",{ref:"ruleForm1",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"活动名称：",prop:"activity_title"}},[i("el-input",{model:{value:t.ruleForm.activity_title,callback:function(e){t.$set(t.ruleForm,"activity_title",e)},expression:"ruleForm.activity_title"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"活动卖点：",prop:"activity_subject"}},[i("el-input",{model:{value:t.ruleForm.activity_subject,callback:function(e){t.$set(t.ruleForm,"activity_subject",e)},expression:"ruleForm.activity_subject"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"封面图："}},[i("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/api/admin/fileupload/image","show-file-list":!1,"on-success":t.uploadActivityImg}},[t.ruleForm.activity_img?i("img",{staticClass:"avatar help-upload-img",attrs:{src:t.ruleForm.activity_img}}):i("i",{staticClass:"el-icon-plus avatar-uploader-icon",staticStyle:{"font-size":"48px","margin-top":"15%"}})]),t._v(" "),i("div",{staticClass:"upload-title"},[i("p",{staticClass:"upload-title-red"},[t._v("支持上传一张图片，图片宽高比为1242*1242，支持JPEG、PNG 等大部分图片格式")])])],1),t._v(" "),i("el-form-item",{attrs:{label:"活动规则：",prop:"activity_desc"}},[i("el-input",{attrs:{type:"textarea",rows:"7"},model:{value:t.ruleForm.activity_desc,callback:function(e){t.$set(t.ruleForm,"activity_desc",e)},expression:"ruleForm.activity_desc"}})],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{size:"large",type:"primary"},on:{click:function(e){t.goNextStep(2)}}},[t._v("下一步")])],1)],1)],1):t._e(),t._v(" "),2==t.step?i("div",{staticClass:"form-panel p-xl"},[i("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"160px"}},[i("el-form-item",{attrs:{label:"活动时间："}},[i("el-col",{attrs:{span:11}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.ruleForm.activity_start_time,callback:function(e){t.$set(t.ruleForm,"activity_start_time",e)},expression:"ruleForm.activity_start_time"}})],1),t._v(" "),i("el-col",{staticClass:"line-center",attrs:{span:2}},[t._v("至")]),t._v(" "),i("el-col",{attrs:{span:11}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.ruleForm.activity_end_time,callback:function(e){t.$set(t.ruleForm,"activity_end_time",e)},expression:"ruleForm.activity_end_time"}})],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"有效时间："}},[i("el-col",{attrs:{span:5}},[t._v("\n                            领取后\n                        ")]),t._v(" "),i("el-col",{staticStyle:{"margin-right":"10px"},attrs:{span:6}},[i("el-input",{model:{value:t.ruleForm.rules.days,callback:function(e){t.$set(t.ruleForm.rules,"days",e)},expression:"ruleForm.rules.days"}})],1),t._v(" "),i("el-col",{attrs:{span:6}},[t._v("\n                            天内有效\n                        ")])],1),t._v(" "),i("el-form-item",{attrs:{label:"状态："}},[i("el-radio-group",{model:{value:t.ruleForm.activity_status,callback:function(e){t.$set(t.ruleForm,"activity_status",e)},expression:"ruleForm.activity_status"}},[i("el-radio",{attrs:{label:1}},[t._v("下架")]),t._v(" "),i("el-radio",{attrs:{label:2}},[t._v("上架")])],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"类型："}},[i("el-radio-group",{model:{value:t.ruleForm.rules.bargain_type,callback:function(e){t.$set(t.ruleForm.rules,"bargain_type",e)},expression:"ruleForm.rules.bargain_type"}},[i("el-radio",{attrs:{label:1}},[t._v("服务")]),t._v(" "),i("el-radio",{attrs:{label:2}},[t._v("商品")]),t._v(" "),i("el-radio",{attrs:{label:4}},[t._v("虚拟商品")])],1)],1),t._v(" "),i("el-form-item",[i("el-button",{on:{click:t.choiceGoodsClick}},[t._v("请选择")])],1),t._v(" "),i("div",{staticClass:"gift-table gift-person width980"},[i("div",{staticClass:"table-th"},t._l(t.itemLIst,function(e){return i("div",{key:e.index,staticClass:"th-item"},[t._v(t._s(e.name))])})),t._v(" "),t._l(t.ruleForm.rules.bargain,function(e){return i("div",{key:e.good_id,staticClass:"table-body table-full "},[i("div",{staticClass:"full-item  "},[i("div",{staticClass:"full-item-left"},[e.good_ico?i("img",{attrs:{src:e.good_ico,alt:"",width:"50px",height:"50px"}}):t._e()]),t._v(" "),i("div",{staticClass:"full-item-right"},[e.good_name?i("p",[t._v(t._s(e.good_name))]):t._e(),t._v(" "),e.price?i("p",[t._v("¥"+t._s(e.price))]):t._e()])]),t._v(" "),i("div",{staticClass:"full-item"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.max_price,expression:"item.max_price"}],staticClass:"input-val",attrs:{type:"text"},domProps:{value:e.max_price},on:{input:function(i){i.target.composing||t.$set(e,"max_price",i.target.value)}}})]),t._v(" "),i("div",{staticClass:"full-item"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.reduce_solid_price,expression:"item.reduce_solid_price"}],staticClass:"input-val",attrs:{type:"text"},domProps:{value:e.reduce_solid_price},on:{input:function(i){i.target.composing||t.$set(e,"reduce_solid_price",i.target.value)}}})]),t._v(" "),i("div",{staticClass:"full-item"},[i("p",{staticStyle:{display:"flex","margin-top":"20px","margin-bottom":"10px"}},[i("span",{staticStyle:{"margin-left":"20px"}},[t._v("最大值：")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.reduce_max_price,expression:"item.reduce_max_price"}],staticClass:"max-input-val",attrs:{type:"text"},domProps:{value:e.reduce_max_price},on:{input:function(i){i.target.composing||t.$set(e,"reduce_max_price",i.target.value)}}})]),t._v(" "),i("p",{staticStyle:{display:"flex","margin-top":"20px","margin-bottom":"10px"}},[i("span",{staticStyle:{"margin-left":"20px"}},[t._v("最小值：")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.reduce_min_price,expression:"item.reduce_min_price"}],staticClass:"max-input-val",attrs:{type:"text"},domProps:{value:e.reduce_min_price},on:{input:function(i){i.target.composing||t.$set(e,"reduce_min_price",i.target.value)}}})])]),t._v(" "),i("div",{staticClass:"full-item"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.first_solid_price,expression:"item.first_solid_price"}],staticClass:"input-val",attrs:{type:"text"},domProps:{value:e.first_solid_price},on:{input:function(i){i.target.composing||t.$set(e,"first_solid_price",i.target.value)}}})]),t._v(" "),i("div",{staticClass:"full-item"},[i("p",{staticStyle:{display:"flex","margin-top":"20px","margin-bottom":"10px"}},[i("span",{staticStyle:{"margin-left":"20px"}},[t._v("最大值：")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.first_max_price,expression:"item.first_max_price"}],staticClass:"max-input-val",attrs:{type:"text"},domProps:{value:e.first_max_price},on:{input:function(i){i.target.composing||t.$set(e,"first_max_price",i.target.value)}}})]),t._v(" "),i("p",{staticStyle:{display:"flex","margin-top":"20px","margin-bottom":"10px"}},[i("span",{staticStyle:{"margin-left":"20px"}},[t._v("最小值：")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.first_min_price,expression:"item.first_min_price"}],staticClass:"max-input-val",attrs:{type:"text"},domProps:{value:e.first_min_price},on:{input:function(i){i.target.composing||t.$set(e,"first_min_price",i.target.value)}}})])])])})],2),t._v(" "),i("div",{staticClass:"finish"},[i("el-button",{attrs:{size:"large",type:"primary"},on:{click:function(e){t.goNextStep(1)}}},[t._v("上一步")]),t._v(" "),i("el-button",{attrs:{size:"large",type:"primary"},on:{click:t.submit}},[t._v("上架")])],1)],1),t._v(" "),i("el-form",{ref:"ruleForm3",staticClass:"bottom-form",attrs:{model:t.ruleForm}},[i("div",{staticClass:"tab-overflow"},[i("el-dialog",{staticClass:"person-box",attrs:{title:"选择指定商品",visible:t.goodsVisible},on:{"update:visible":function(e){t.goodsVisible=e}}},[i("el-form-item",[t.goodShow?i("div",{staticClass:"good_show"},t._l(t.goodsData,function(e){return i("div",{key:e.sku,staticClass:"goods-div "},[i("div",{staticClass:"goods-div-right"},[e.good_ico?i("img",{attrs:{src:e.good_ico,width:"70px",height:"70px"}}):i("p",{staticClass:"no-img"},[t._v("暂无图片")])]),t._v(" "),i("div",{staticClass:"goods-div-left"},[i("p",{staticClass:"color-blue"},[t._v(t._s(e.good_name))]),t._v(" "),i("p",{staticClass:"color-black"},[t._v("¥"+t._s(e.price/100))]),t._v(" "),i("p",{staticClass:"color-black"},[t._v(t._s(e.sku_str))])])])})):t._e()]),t._v(" "),i("el-tabs",{staticStyle:{height:"200px"},attrs:{type:"border-card","tab-position":t.tabPosition},model:{value:t.activeId,callback:function(e){t.activeId=e},expression:"activeId"}},t._l(t.industryForm,function(e){return i("el-tab-pane",{key:e.category_id,attrs:{label:e.category_name,value:e.category_name}},t._l(t.goodsList,function(e){return i("el-checkbox",{key:e.sku,attrs:{label:e.sku},model:{value:t.checkedList,callback:function(e){t.checkedList=e},expression:"checkedList"}},[i("div",{staticClass:"goods-div "},[i("div",{staticClass:"goods-div-right"},[e.good_ico?i("img",{attrs:{src:e.good_ico,width:"70px",height:"70px"}}):i("p",{staticClass:"no-img"},[t._v("暂无图片")])]),t._v(" "),i("div",{staticClass:"goods-div-left"},[i("p",{staticClass:"color-blue"},[t._v(t._s(e.good_name))]),t._v(" "),i("div",[i("p",{staticClass:" color-black"},[t._v("¥"+t._s(e.price/100))]),t._v(" "),i("p",{staticClass:" color-black"},[t._v(t._s(e.sku_str))])])])])])}))})),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.goodsCancal}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.helpSure}},[t._v("确 定")])],1)],1)],1)])],1):t._e()])],1)])},staticRenderFns:[]};var n=i("VU/8")(o,c,!1,function(t){i("nc8S")},"data-v-60b1d7cd",null);e.default=n.exports},nc8S:function(t,e){}});