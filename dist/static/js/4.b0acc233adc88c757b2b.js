webpackJsonp([4],{"8Drb":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r("Dd8w"),n=r.n(i),o=r("uUlv"),s={name:"adminUser",components:{BreadCrumb:r("tVcc").a},data:function(){return{breadcrumb:[{name:"平台管理"},{name:"成员管理",url:"/admin/staffList"},{name:"添加成员",url:"/admin/addStaff"}],form:{user_name:"",user_pwd:"",user_realname:"",role_id:"",user_division:"",user_img:"",user_is_use:""},user_pwd:"",modifiy:!1}},computed:n()({},Object(o.a)("adminUser",["roleList","userInfo"])),created:function(){this.user_id=this.$route.params.id,+this.user_id?this.modifiy=!0:this.modifiy=!1,this.modifiy&&this.$store.dispatch("adminUser/fetchGetUserInfo",{user_id:this.user_id}),this.roleList.length||this.$store.dispatch("adminUser/fetchGetRoleList"),this.form=n()({},this.form,this.userInfo)},methods:{onSubmit:function(){var t=this;if(this.form.user_pwd===this.user_pwd){var e=this.modifiy?"/api/admin/adminUser/edit":"/api/admin/adminUser/add";this.$axios({method:"post",url:e,params:n()({},this.form)}).then(function(e){console.log(e,"res"),0===e.data.code?(t.$alert("操作成功"),t.$router.push("/admin/staffList")):t.$alert(e.data.msg)})}else alert("两次输入密码不一致")}}},a={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page"},[r("div",{staticClass:"page-header"},[r("bread-crumb",{attrs:{"bread-crumb":t.breadcrumb}})],1),t._v(" "),r("div",{staticClass:"page-moment"},[r("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px",id:"adminUser"}},[r("el-form-item",{attrs:{label:"角色名称"}},[r("el-select",{attrs:{placeholder:"请选择角色"},model:{value:t.form.role_id,callback:function(e){t.$set(t.form,"role_id",e)},expression:"form.role_id"}},t._l(t.roleList,function(t){return r("el-option",{key:""+t.role_name+t.role_id,attrs:{label:t.role_name,value:t.role_id}})}))],1),t._v(" "),r("el-form-item",{attrs:{label:"成员姓名"}},[r("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:t.form.user_realname,callback:function(e){t.$set(t.form,"user_realname",e)},expression:"form.user_realname"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"登陆账号"}},[r("el-input",{attrs:{placeholder:"请输入账号名称"},model:{value:t.form.user_name,callback:function(e){t.$set(t.form,"user_name",e)},expression:"form.user_name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"登陆密码"}},[r("el-input",{attrs:{ype:"password",autocomplete:"off"},model:{value:t.form.user_pwd,callback:function(e){t.$set(t.form,"user_pwd",e)},expression:"form.user_pwd"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"确认密码"}},[r("el-input",{attrs:{ype:"password",autocomplete:"off"},model:{value:t.user_pwd,callback:function(e){t.user_pwd=e},expression:"user_pwd"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("确定")])],1)],1)],1)])},staticRenderFns:[]};var u=r("VU/8")(s,a,!1,function(t){r("nxQ7")},null,null);e.default=u.exports},nxQ7:function(t,e){},uUlv:function(t,e,r){"use strict";r.d(e,"a",function(){return g});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var i=function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:r});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,e.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},n="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t,e){Object.keys(t).forEach(function(r){return e(t[r],r)})}var s=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var r=t.state;this.state=("function"==typeof r?r():r)||{}},a={namespaced:{configurable:!0}};a.namespaced.get=function(){return!!this._rawModule.namespaced},s.prototype.addChild=function(t,e){this._children[t]=e},s.prototype.removeChild=function(t){delete this._children[t]},s.prototype.getChild=function(t){return this._children[t]},s.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},s.prototype.forEachChild=function(t){o(this._children,t)},s.prototype.forEachGetter=function(t){this._rawModule.getters&&o(this._rawModule.getters,t)},s.prototype.forEachAction=function(t){this._rawModule.actions&&o(this._rawModule.actions,t)},s.prototype.forEachMutation=function(t){this._rawModule.mutations&&o(this._rawModule.mutations,t)},Object.defineProperties(s.prototype,a);var u=function(t){this.register([],t,!1)};u.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},u.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,r){return t+((e=e.getChild(r)).namespaced?r+"/":"")},"")},u.prototype.update=function(t){!function t(e,r,i){0;r.update(i);if(i.modules)for(var n in i.modules){if(!r.getChild(n))return void 0;t(e.concat(n),r.getChild(n),i.modules[n])}}([],this.root,t)},u.prototype.register=function(t,e,r){var i=this;void 0===r&&(r=!0);var n=new s(e,r);0===t.length?this.root=n:this.get(t.slice(0,-1)).addChild(t[t.length-1],n);e.modules&&o(e.modules,function(e,n){i.register(t.concat(n),e,r)})},u.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),r=t[t.length-1];e.getChild(r).runtime&&e.removeChild(r)};var c;var f=function(t){var e=this;void 0===t&&(t={}),!c&&"undefined"!=typeof window&&window.Vue&&y(window.Vue);var r=t.plugins;void 0===r&&(r=[]);var i=t.strict;void 0===i&&(i=!1);var o=t.state;void 0===o&&(o={}),"function"==typeof o&&(o=o()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new u(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new c;var s=this,a=this.dispatch,f=this.commit;this.dispatch=function(t,e){return a.call(s,t,e)},this.commit=function(t,e,r){return f.call(s,t,e,r)},this.strict=i,m(this,o,[],this._modules.root),h(this,o),r.forEach(function(t){return t(e)}),c.config.devtools&&function(t){n&&(t._devtoolHook=n,n.emit("vuex:init",t),n.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){n.emit("vuex:mutation",t,e)}))}(this)},l={state:{configurable:!0}};function p(t,e){return e.indexOf(t)<0&&e.push(t),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function d(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var r=t.state;m(t,r,[],t._modules.root,!0),h(t,r,e)}function h(t,e,r){var i=t._vm;t.getters={};var n={};o(t._wrappedGetters,function(e,r){n[r]=function(){return e(t)},Object.defineProperty(t.getters,r,{get:function(){return t._vm[r]},enumerable:!0})});var s=c.config.silent;c.config.silent=!0,t._vm=new c({data:{$$state:e},computed:n}),c.config.silent=s,t.strict&&function(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}(t),i&&(r&&t._withCommit(function(){i._data.$$state=null}),c.nextTick(function(){return i.$destroy()}))}function m(t,e,r,i,n){var o=!r.length,s=t._modules.getNamespace(r);if(i.namespaced&&(t._modulesNamespaceMap[s]=i),!o&&!n){var a=_(e,r.slice(0,-1)),u=r[r.length-1];t._withCommit(function(){c.set(a,u,i.state)})}var f=i.context=function(t,e,r){var i=""===e,n={dispatch:i?t.dispatch:function(r,i,n){var o=v(r,i,n),s=o.payload,a=o.options,u=o.type;return a&&a.root||(u=e+u),t.dispatch(u,s)},commit:i?t.commit:function(r,i,n){var o=v(r,i,n),s=o.payload,a=o.options,u=o.type;a&&a.root||(u=e+u),t.commit(u,s,a)}};return Object.defineProperties(n,{getters:{get:i?function(){return t.getters}:function(){return function(t,e){var r={},i=e.length;return Object.keys(t.getters).forEach(function(n){if(n.slice(0,i)===e){var o=n.slice(i);Object.defineProperty(r,o,{get:function(){return t.getters[n]},enumerable:!0})}}),r}(t,e)}},state:{get:function(){return _(t.state,r)}}}),n}(t,s,r);i.forEachMutation(function(e,r){!function(t,e,r,i){(t._mutations[e]||(t._mutations[e]=[])).push(function(e){r.call(t,i.state,e)})}(t,s+r,e,f)}),i.forEachAction(function(e,r){var i=e.root?r:s+r,n=e.handler||e;!function(t,e,r,i){(t._actions[e]||(t._actions[e]=[])).push(function(e,n){var o,s=r.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e,n);return(o=s)&&"function"==typeof o.then||(s=Promise.resolve(s)),t._devtoolHook?s.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):s})}(t,i,n,f)}),i.forEachGetter(function(e,r){!function(t,e,r,i){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return r(i.state,i.getters,t.state,t.getters)}}(t,s+r,e,f)}),i.forEachChild(function(i,o){m(t,e,r.concat(o),i,n)})}function _(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function v(t,e,r){var i;return null!==(i=t)&&"object"==typeof i&&t.type&&(r=e,e=t,t=t.type),{type:t,payload:e,options:r}}function y(t){c&&t===c||i(c=t)}l.state.get=function(){return this._vm._data.$$state},l.state.set=function(t){0},f.prototype.commit=function(t,e,r){var i=this,n=v(t,e,r),o=n.type,s=n.payload,a=(n.options,{type:o,payload:s}),u=this._mutations[o];u&&(this._withCommit(function(){u.forEach(function(t){t(s)})}),this._subscribers.forEach(function(t){return t(a,i.state)}))},f.prototype.dispatch=function(t,e){var r=this,i=v(t,e),n=i.type,o=i.payload,s={type:n,payload:o},a=this._actions[n];if(a)return this._actionSubscribers.forEach(function(t){return t(s,r.state)}),a.length>1?Promise.all(a.map(function(t){return t(o)})):a[0](o)},f.prototype.subscribe=function(t){return p(t,this._subscribers)},f.prototype.subscribeAction=function(t){return p(t,this._actionSubscribers)},f.prototype.watch=function(t,e,r){var i=this;return this._watcherVM.$watch(function(){return t(i.state,i.getters)},e,r)},f.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},f.prototype.registerModule=function(t,e,r){void 0===r&&(r={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),m(this,this.state,t,this._modules.get(t),r.preserveState),h(this,this.state)},f.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var r=_(e.state,t.slice(0,-1));c.delete(r,t[t.length-1])}),d(this)},f.prototype.hotUpdate=function(t){this._modules.update(t),d(this,!0)},f.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(f.prototype,l);var g=w(function(t,e){var r={};return b(e).forEach(function(e){var i=e.key,n=e.val;r[i]=function(){var e=this.$store.state,r=this.$store.getters;if(t){var i=$(this.$store,"mapState",t);if(!i)return;e=i.context.state,r=i.context.getters}return"function"==typeof n?n.call(this,e,r):e[n]},r[i].vuex=!0}),r});w(function(t,e){var r={};return b(e).forEach(function(e){var i=e.key,n=e.val;r[i]=function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];var i=this.$store.commit;if(t){var o=$(this.$store,"mapMutations",t);if(!o)return;i=o.context.commit}return"function"==typeof n?n.apply(this,[i].concat(e)):i.apply(this.$store,[n].concat(e))}}),r}),w(function(t,e){var r={};return b(e).forEach(function(e){var i=e.key,n=e.val;n=t+n,r[i]=function(){if(!t||$(this.$store,"mapGetters",t))return this.$store.getters[n]},r[i].vuex=!0}),r}),w(function(t,e){var r={};return b(e).forEach(function(e){var i=e.key,n=e.val;r[i]=function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];var i=this.$store.dispatch;if(t){var o=$(this.$store,"mapActions",t);if(!o)return;i=o.context.dispatch}return"function"==typeof n?n.apply(this,[i].concat(e)):i.apply(this.$store,[n].concat(e))}}),r});function b(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function w(t){return function(e,r){return"string"!=typeof e?(r=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,r)}}function $(t,e,r){return t._modulesNamespaceMap[r]}}});