webpackJsonp([46],{ipa5:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("XLwt"),e=s.n(i),n=s("o7+X"),l={data:function(){return{getdaynum:7,israse:!0,data:[{title:"今日接待人数（人）",num:600,label:"总接待人数200人",lefttitle:"昨日接待人数",lfetnum:65,righttitle:"环比接待人数",rightnum:70},{title:"今日接待次数（人）",num:500,label:"总接待次数200次",lefttitle:"昨日接待人数",lfetnum:6555,righttitle:"环比接待次数",rightnum:70}]}},beforeCreate:function(){},mounted:function(){this.reinitchart()},components:{msg:s("9eeU").default,DataDisplay:n.a},computed:{datax:function(){return 7===this.getdaynum?["7-19","7-18","7-17","7-16","7-15","7-14"]:30===this.getdaynum?["7-19","7-18","7-17","7-16","7-15","7-14","7-18","7-17","7-16","7-15","7-14","7-18","7-17","7-16","7-15","7-14"]:void 0},datay:function(){return 7===this.getdaynum?[5,20,36,10,10,20]:[5,15,36,10,10,20,15,36,10,10,20,15,36,10,10,20]}},methods:{reinitchart:function(){var t=e.a.init(document.querySelector(".chartline"));console.log(this.datax);var a={title:{},tooltip:{},legend:{},xAxis:{data:this.datax},yAxis:{},grid:{x:60,y:60,x2:11,y2:50},series:[{type:"line",smooth:!0,data:this.datay,lineStyle:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#fff"},{offset:.1,color:"#7224D8"},{offset:.9,color:"#7224D8"},{offset:1,color:"#fff"}],globalCoord:!1}}}]};t.setOption(a)}}},c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t._m(0),t._v(" "),s("div",{staticClass:"panel textboxcontainer"},[s("data-display",{attrs:{data:t.data}})],1),t._v(" "),s("div",{staticClass:"panel"},[s("div",{staticClass:"panel-heading"},[s("h3",{staticClass:"panel-title"},[t._v("历史接待次数")]),t._v(" "),s("div",{staticClass:"panel-actions"},[s("div",{staticClass:"btnbox f12"},[s("div",{staticClass:"btnrightbox"},[s("a",{staticClass:"cbtn f9 color9",class:{currentbtn:7===t.getdaynum},on:{click:function(a){t.getdaynum=7,t.reinitchart()}}},[t._v("7天")]),t._v(" "),s("a",{staticClass:"cbtn f9 color9",class:{currentbtn:30===t.getdaynum},on:{click:function(a){t.getdaynum=30,t.reinitchart()}}},[t._v("30天")])])])])]),t._v(" "),s("div",{staticClass:"panel-body"},[s("div",{ref:"chart",staticClass:"echart chartline",staticStyle:{width:"100%",height:"376px"}})])]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"panel"},[s("msg",{attrs:{table:!1,url:1}})],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"sub-heading mt-n"},[a("h3",{staticClass:"sub-title"},[a("span",{staticClass:"title",staticStyle:{"font-size":"14px",color:"#666"}},[this._v("当前客服：钫钫  主管-17610639336")])]),this._v(" "),a("div",{staticClass:"sub-actions"},[a("a",{attrs:{href:""}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"sub-heading"},[a("h3",{staticClass:"sub-title"},[a("span",{staticClass:"sub-icon"},[a("img",{attrs:{src:"/static/img/sub_icon.png",width:"100%"}})]),this._v(" "),a("span",{staticClass:"title"},[this._v("接待用户")])]),this._v(" "),a("div",{staticClass:"sub-actions"},[a("a",{attrs:{href:""}})])])}]};var r=s("VU/8")(l,c,!1,function(t){s("ktbh")},"data-v-d99a7b0e",null);a.default=r.exports},ktbh:function(t,a){}});