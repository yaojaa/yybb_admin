webpackJsonp([62],{GYGP:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t={data:function(){var e=this;return{self:this,breadcrumb:[{name:"设置"},{name:"账号管理"}],inputType:{type:["password","text"],oldpassword:0,newpassword:0,new_password:0},ruleForm:{phone:"",oldpassword:"",newpassword:"",new_password:""},rules:{phone:[{required:!0,message:"请输入手机号码",trigger:"blur"},{min:11,max:11,message:"检查手机号是否正确",trigger:"blur"}],oldpassword:[{required:!0,message:"请输入旧密码",trigger:"blur"}],newpassword:[{required:!0,message:"请输入新密码",trigger:"blur"}],new_password:[{required:!0,message:"请再次输入新密码",trigger:"blur"},{validator:function(r,s,t){s!=e.ruleForm.newpassword?t(new Error("两次密码不一样")):t()},trigger:"blur"}]}}},components:{BreadCrumb:s("tVcc").a},created:function(){},computed:{},methods:{inputTypeClick:function(e){this.inputType[e]=0==this.inputType[e]?1:0},submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})}}},o={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"page add-member"},[s("div",{staticClass:"page-header"},[s("div",{staticClass:"crumbs"},[s("bread-crumb",{attrs:{"bread-crumb":e.breadcrumb}})],1)]),e._v(" "),s("div",{staticClass:"page-content"},[s("div",{staticClass:"panel"},[s("div",{staticClass:"panel-body"},[s("div",{staticClass:"form-panel form"},[s("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"手机号码",prop:"phone"}},[s("el-input",{attrs:{type:"tel",placeholder:"请输入手机号"},model:{value:e.ruleForm.phone,callback:function(r){e.$set(e.ruleForm,"phone",r)},expression:"ruleForm.phone"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"旧密码",prop:"oldpassword"}},[s("el-input",{attrs:{type:e.inputType.type[e.inputType.oldpassword],placeholder:"请输入旧密码"},model:{value:e.ruleForm.oldpassword,callback:function(r){e.$set(e.ruleForm,"oldpassword",r)},expression:"ruleForm.oldpassword"}},[s("a",{directives:[{name:"show",rawName:"v-show",value:e.ruleForm.oldpassword,expression:"ruleForm.oldpassword"}],staticClass:"el-input__icon el-icon-view",attrs:{slot:"suffix",href:"javascript:;"},on:{click:function(r){e.inputTypeClick("oldpassword")}},slot:"suffix"})])],1),e._v(" "),s("el-form-item",{attrs:{label:"新密码",prop:"newpassword"}},[s("el-input",{attrs:{type:e.inputType.type[e.inputType.newpassword],placeholder:"请输入新密码"},model:{value:e.ruleForm.newpassword,callback:function(r){e.$set(e.ruleForm,"newpassword",r)},expression:"ruleForm.newpassword"}},[s("a",{directives:[{name:"show",rawName:"v-show",value:e.ruleForm.newpassword,expression:"ruleForm.newpassword"}],staticClass:"el-input__icon el-icon-view",attrs:{slot:"suffix",href:"javascript:;"},on:{click:function(r){e.inputTypeClick("newpassword")}},slot:"suffix"})])],1),e._v(" "),s("el-form-item",{attrs:{label:"确认新密码",prop:"new_password"}},[s("el-input",{attrs:{type:e.inputType.type[e.inputType.new_password],placeholder:"请再次输入新密码"},model:{value:e.ruleForm.new_password,callback:function(r){e.$set(e.ruleForm,"new_password",r)},expression:"ruleForm.new_password"}},[s("a",{directives:[{name:"show",rawName:"v-show",value:e.ruleForm.new_password,expression:"ruleForm.new_password"}],staticClass:"el-input__icon el-icon-view",attrs:{slot:"suffix",href:"javascript:;"},on:{click:function(r){e.inputTypeClick("new_password")}},slot:"suffix"})])],1),e._v(" "),s("el-form-item",{staticClass:"submit"},[s("el-button",{staticClass:"w-80",attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("提交")])],1)],1)],1)])])])])},staticRenderFns:[]};var a=s("VU/8")(t,o,!1,function(e){s("L8V2")},"data-v-a0b7fabc",null);r.default=a.exports},L8V2:function(e,r){}});