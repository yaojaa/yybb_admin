<template>
    <div class="page">
        <div class="page-header">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>企业</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: $route.path }">{{$route.meta.title}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="page-content">
            

            
           
            <div class="page-column">
                <div class="page-main">

                <div class="panel-status text-justify">
                    <div><span>状态：</span><span class="f18 bold">
                        {{['','未处理','已处理'][info.handle_status]}}
                    </span></div>
                
                </div>

                    <div class="panel">
                        <div class="panel-heading">
                            <h3 class="panel-title bold">基本信息</h3>
                        </div>
                        <div class="panel-body">
                            <div class="item-list f14 four-text">
                                <div class="item">
                                    <div class="hd">投诉方：</div>
                                    <div class="bd">{{info.user_name}}</div>
                                </div>
                                <div class="item">
                                    <div class="hd">投诉门店：</div>
                                    <div class="bd">{{info.shop_name}}</div>
                                </div>
                                <div class="item">
                                    <div class="hd">投诉店长：</div>
                                    <div class="bd">{{info.shop_account_leader_name}}</div>
                                </div>
                                <div class="item">
                                    <div class="hd">投诉时间：</div>
                                    <div class="bd">{{info.create_time}}</div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="panel" v-if="detailFlag">
                        <div class="panel-heading">
                            <h3 class="panel-title bold">订单信息</h3>
                        </div>
                        <div class="panel-body">
                            <div class="item-list f14 four-text">
                                <div class="item">
                                    <div class="hd">订单编号：</div>
                                    <div class="bd">{{info.order_detail[0].order_code}}</div>
                                </div>
                                <div class="item">
                                    <div class="hd">下单时间：</div>
                                    <div class="bd">{{info.order_detail[0].order_ctime}}</div>
                                </div>
                                
                                <div class="good_list">
                                    <div class="flex_box">
                                        <div class="good_item_title">服务</div>
                                        <div class="good_item_title">数量</div>
                                        <div class="good_item_title">单价（元）</div>
                                    </div>
                                    <div :key="index" v-for="(item,index) in info.order_detail[0].goods_list" class="flex_box good_item">
                                        <div class="good_item_col">
                                            <img :src="item.goods_img" />
                                            <p>{{item.goods_name}}</p>
                                        </div>
                                        <div class="good_item_col">
                                            <p style="color: #999;margin-top:5px;">*{{item.goods_num}}</p>
                                        </div>
                                        <div class="good_item_col">
                                            <p>¥{{item.goods_price/100}}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="item">
                                    <div class="hd">商品总价：</div>
                                    <div class="bd">¥{{info.order_detail[0].order_total_price/100}}</div>
                                </div>
                                <div class="item">
                                    <div class="hd">优惠：</div>
                                    <div class="bd">¥{{info.order_detail[0].order_reduce_price/100}}</div>
                                </div>
                                <div class="item">
                                    <div class="hd">实付金额：</div>
                                    <div class="bd">¥{{info.order_detail[0].order_online_price}}</div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="panel">
                        <div class="panel-heading">
                            <h3 class="panel-title bold">投诉信息</h3>
                        </div>
                        <div class="panel-body">
                            <div class="item-list f14 four-text">
                                <div class="item">
                                    <div class="hd">投诉原因：</div>
                                    <div class="bd">{{info.complaint_cate}}</div>
                                </div>
                                <div class="item">
                                    <div class="hd">投诉内容：</div>
                                    <div class="bd">{{info.complaint_cause}}</div>
                                </div>

                                <div class="item">
                                    <div class="hd">投诉凭证：</div>
                                    <div class="bd">
                                         <img v-for="item in info.complaint_pic" :src="item" :key="item" width="100">
                                    </div>
                                </div>

 
                            </div>
                        </div>
                    </div>
                    <div class="panel" v-if="info.handle_status==2">
                        <div class="panel-heading">
                            <h3 class="panel-title bold">门店处理结果</h3>
                        </div>
                        <div class="panel-body">
                            <div class="item-list">
                                <div class="item" >
                                    <div class="hd">处理时间：</div>
                                    <div class="hd">{{info.handle_handle_time}}</div>
                                </div>
                                <div class="item" >
                                    <div class="hd">处理员工：</div>
                                    <div class="hd">{{info.handle_shop_account_name}}</div>
                                </div>
                                <div class="item" >
                                    <div class="hd">处理结果：</div>
                                    <div class="hd">{{info.handle_handle_result}}</div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="panel" v-if="info.comment_status==2">
                        <div class="panel-heading">
                            <h3 class="panel-title bold">顾客满意度</h3>
                        </div>
                        <div class="panel-body">
                            <div class="item-list">
                                <div class="item" >
                                    <div class="hd">您的投诉问题是否已全部解决：</div>
                                    <div class="hd">{{['','未解决','部分解决','全部解决'][info.comment_solve_level]}}</div>
                                </div>
                                <div class="item" >
                                    <div class="hd">处理员工：</div>
                                    <div class="hd">{{info.handle_shop_account_name}}</div>
                                </div>
                                <div class="item" >
                                    <div class="hd">处理结果：</div>
                                    <div class="hd">{{info.handle_handle_result}}</div>
                                </div>

                            </div>
                        </div>
                    </div>
                  
                </div>

                <!-- <div class="page-side">
                    <div class="panel">
                        <div class="panel-heading">
                            <h3 class="panel-title bold">审核记录</h3>
                        </div>
                        <div class="panel-body">
                            <div class="item-list f14" >
                                  <div class="item">
                                   <div class="hd">审核人：</div>
                                    <div class="bd">{{info.admin_user_name}}</div>
                                  </div>
                                  <div class="item">
                                   <div class="hd">审核时间：</div>
                                    <div class="bd">{{info.shop_ctime}}</div>
                                  </div>
                            </div>
                        </div>
                    </div>
                </div> -->

            </div>



            
        </div>
    </div>
</template>
<script>
export default {
    name: 'detail',

    components: {},

    data() {
        return {
            info: {},
            detailFlag:false,
           
            value:"",
            id:'',
        
            ruleForm:{
               

            }
        }
    },

    beforeRouteUpdate(to, from, next) {

    },
    created() {},
    computed: {

    },
    mounted() {


        console.log(this.$route.params)

        this.id = this.$route.params.id

        this.getData(this.$route.params)

        //this.getShopList()
        // this.getBankList()//获取银行卡列表
        // this.getbankInfo()



    },
    methods: {

        handleTabsClick(e){
            console.log(this.tab)
        },

        getData(params) {

            this.$axios({
                method: 'get',
                url: '/api/admin/complaint/detail',
                params: params
            }).then((res) => {

                if(res.data.code ==0){
                    this.info = res.data.data;
                    if(res.data.data.order_detail.length>0){
                        this.detailFlag = true
                    }
                    console.log(this.info,'info')
                    //debugger;
                }else{
                    this.$alert('接口返回错误')
                }
                
            }).catch((error) => {
                this.$alert('接口返回错误'+error)
            });
        },



        formatPrice(price) {
            return (price / 100).toFixed(2);
        }
    }
}
</script>
<style scoped>
  .item-list.four-text .hd{
    width: 6em
  }
  .width600{
      width: 360px;
      margin: 0 auto;
  }
  .bank-info-box{
      width: 200px;
      height: 100rpx;
      padding:20px;
      border-radius:4px;
      border:1px solid #dedede;
      background-color: #dedede;
      margin-right:10px;
      margin-top: 10px;
  }
  .bank-info-box p{
      height:30px;
      line-height: 30px;
      color:#333;
  }
  .card-btn{
      padding:6px 10px;
      border:none;
      background: none;
      background-color: #fff;
      border:1px solid #dedede;
      border-radius:10px;
      color:#333;
      margin-top: 6px;
      width: 40%;
      margin: 0 auto;
      text-align: center;
      height: 26px;
      line-height: 26px;
      font-size: 16px;
      margin-top: 10px;
      cursor: pointer;
  }
  .clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}
  .fl{
      float: left;
  }
  .good_list {
		margin-bottom: 20px;
	}
	.good_item_title {
		flex: 1;
		border-top: 1px solid #ddd;
		text-align: center;
		background: #F9F9F9 100%;
		line-height: 38px;
		font-size: 14px;
	}
	.good_item_col {
		padding: 16px;
		flex: 1;
		border: 1px solid #ddd;
		text-align: center;
	}
	.good_item_col:nth-of-type(2) {
		border-left: 0px;
		border-right: 0px;
	}
	.good_item_col:first-of-type>img {
		display: inline-block;
		width: 90px;
		float: left;
		margin-right: 12px;
	}
	.good_item_col:first-of-type>p {
		float: left;
		margin-top: 20px;
		font-size: 14px;
	}

	.good_item_col:nth-of-type(2), .good_item_col:last-of-type {
		padding-top: 36px;
		font-size: 12px;
	}
</style>