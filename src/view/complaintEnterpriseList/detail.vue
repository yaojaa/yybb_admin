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
                                    <div class="bd">{{info.shop_account_name}}</div>
                                </div>
                                <div class="item">
                                    <div class="hd">被投诉企业：</div>
                                    <div class="bd">{{info.business_name}}</div>
                                </div>
                                <div class="item">
                                    <div class="hd">涉及金额：</div>
                                    <div class="bd">{{info.money/100}}</div>
                                </div>
                                    <div class="item">
                                    <div class="hd">涉及顾客：</div>
                                    <div class="bd">{{info.user_nick_name}}</div>
                                </div>
                                    <div class="item">
                                    <div class="hd">投诉时间：</div>
                                    <div class="bd">{{info.create_time}}</div>
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
                                    <div class="hd">投诉备注：</div>
                                    <div class="bd">{{info.remark}}</div>
                                </div>

                                <div class="item">
                                    <div class="hd">投诉凭证：</div>
                                    <div class="bd">
                                         <img v-for="item in info.dispute_pic" :src="item" :key="item" width="100">
                                    </div>
                                </div>

 
                            </div>
                        </div>
                    </div>
                    <div class="panel">
                        <div class="panel-heading">
                            <h3 class="panel-title bold">处理过程</h3>
                        </div>
                        <div class="panel-body">
                            <div class="item-list f14 four-text" v-for="(item,index) in info.handle_list"  :key="index">
                                <div class="item" >
                                    <div class="hd">{{item.business_reason}}</div>
                                    <div class="hd">{{item.business_remark}}</div>
                                    <div class="bd">{{item.business_handle_time}}</div>
                                   
                                </div>
                                <div class="item" >
                                    <div class="hd">{{item.process_reason}}</div>
                                    <div class="hd">{{['','企业未处理','企业已处理','店员确认解决'][item.process_status]}}</div>
                                    <div class="bd">{{item.process_time}}</div>
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
                url: '/api/admin/dispute/detail',
                params: params
            }).then((res) => {

                if(res.data.code ==0){
                    this.info = res.data.data;
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
</style>