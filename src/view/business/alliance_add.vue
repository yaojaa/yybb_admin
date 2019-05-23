<template>
	<div class="page">
        <div class="page-header">
            <div class="crumbs">
                <bread-crumb :bread-crumb="breadcrumb"></bread-crumb>
            </div>
        </div>
        <div class="page-content">

        	<div class="panel " id="business_ld">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm1" v-if="ruleForm.business_type==1"  label-width="140px" class="alliance_add_form">
					<h3 class="form_title_label color-red">登录信息</h3>
					<el-form-item label="注册人姓名：" prop="business_reg_name">
    					<el-input v-model="ruleForm.business_reg_name"></el-input>
  					</el-form-item>
					<el-form-item label="职位头衔：" prop="business_job">
    					<el-input v-model="ruleForm.business_job"></el-input>
  					</el-form-item>
					<el-form-item label="成立时间：" prop="business_set_time">
    					<el-input v-model="ruleForm.business_set_time"></el-input>
  					</el-form-item>
					<el-form-item label="企业地址：" prop="business_address">
    					<el-input v-model="ruleForm.business_address"></el-input>
  					</el-form-item>
					
					<el-form-item label="分成比例：" prop="business_divide">
    					<el-input v-model="ruleForm.business_divide"></el-input>
  					</el-form-item>
					<p class="business_tops">企业和店员的分成比例：推荐顾客购买某品牌收单，即完成某品牌的绑定，享受该顾客的终身提成</p>
				</el-form>
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm1" v-if="ruleForm.business_type!=1"  label-width="140px" class="alliance_add_form">
					<h3 class="form_title_label color-red">登录信息</h3>
					<el-form-item label="您的姓名：" prop="business_reg_name">
    					<el-input v-model="ruleForm.business_reg_name"></el-input>
  					</el-form-item>
					<el-form-item label="活跃平台：" prop="business_plate">
    					<el-checkbox-group v-model="ruleForm.business_plate">
							<el-checkbox label="抖音"></el-checkbox>
							<el-checkbox label="映客直播"></el-checkbox>
							<el-checkbox label="快手"></el-checkbox>
							<el-checkbox label="花椒直播"></el-checkbox>
							
  						</el-checkbox-group>
  					</el-form-item>
					<el-form-item label="粉丝量：" prop="business_fans">
    					<el-select v-model="ruleForm.business_fans"  placeholder="请选择" @change="fansChange" >
							<el-option
							v-for="item in fansList"
							:key="item.value"
							:label="item.name"
							:value="item.value">
							</el-option>
                    	</el-select>
  					</el-form-item>
					<el-form-item label="所属行业：" prop="expert_category_id" >
						<el-cascader
							:options="starOptions"
							v-model="ruleForm.expert_category_id"
							:props="props"
							@change="handleChange"
						></el-cascader>
							
    					
                    	
  					</el-form-item>
					
					<el-form-item label="填写地址：" prop="business_address">
    					<el-input v-model="ruleForm.business_address"></el-input>
  					</el-form-item>
					
				</el-form>
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm1" label-width="140px" class="alliance_add_form">
					<h3 class="form_title_label ">认证信息</h3>
					<el-form-item label="法人姓名：">
    					<el-input v-model="ruleForm.business_corporation"></el-input>
  					</el-form-item>
					<el-form-item label="身份证号：">
    					<el-input v-model="ruleForm.business_sfz_num"></el-input>
  					</el-form-item>
					<el-form-item label="企业名称：">
    					<el-input v-model="ruleForm.business_name"></el-input>
  					</el-form-item>
					<el-form-item label="企业电话：">
    					<el-input v-model="ruleForm.business_phone"></el-input>
  					</el-form-item>
					<el-form-item label="所属行业：" >
						<el-row :gutter="24">
							<el-col :span="10">
								<el-select v-model="ruleForm.category_id" multiple placeholder="请选择" @change="quickChange" >
									<el-option
									v-for="item in quickBuyColumnList"
									:key="item.category_id"
									:label="item.category_name"
									:value="item.category_id">
									</el-option>
                    			</el-select>
							</el-col>
							<el-col :span="7">
								<span class="business_tops ml0">可设置多个标签</span>
							</el-col>
						</el-row>
    					
                    	
  					</el-form-item>
					<el-form-item label="营业执照号：">
    					<el-input v-model="ruleForm.business_licence_num"></el-input>
  					</el-form-item>
					<el-form-item label="品牌介绍：">
    					 <el-input type="textarea" v-model="ruleForm.business_brand_introduce"></el-input>
  					</el-form-item>
					  
				</el-form>
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm1" label-width="140px" class="alliance_add_form">
					<h3 class="form_title_label ">身份信息</h3>
					    <el-form-item label="法人身份证">
							<el-upload
								class="avatar-uploader"
								action="/api/admin/fileupload/image"
								:show-file-list="false"
								:on-success="shop_sfz_pic_z">

							<img width="100%" v-if="ruleForm.business_sfz_pic_z" :src="ruleForm.business_sfz_pic_z" >
							
							<div  v-else style="padding-top: 10%">
								<i class="el-icon-plus" style="font-size: 48px"></i>
								<p>上传正面</p>
							</div> 

    						</el-upload>
  						</el-form-item>
						<el-form-item label="法人身份证">
							<el-upload
								class="avatar-uploader"
								action="/api/admin/fileupload/image"
								:show-file-list="false"
								:on-success="shop_sfz_pic_f">
								<img width="100%" v-if="ruleForm.business_sfz_pic_f" :src="ruleForm.business_sfz_pic_f" >
								
								<div  v-else style="padding-top: 10%">
									<i class="el-icon-plus" style="font-size: 48px"></i>
									<p>上传背面</p>
								</div>
							</el-upload>

						</el-form-item>
						   <el-form-item label="营业执照">


								<el-upload
								class="avatar-uploader"
								action="/api/admin/fileupload/image"
								:show-file-list="false"
								:on-success="shop_licence_pic"
								>
								<img width="360px" height="180px" v-if="ruleForm.business_licence_pic" :src="ruleForm.business_licence_pic" >
								
								<div  v-else style="padding-top: 10%">
								
								<i class="el-icon-plus" style="font-size: 48px">
								
								</i>
								<p>上传营业执照</p>
								</div>

							</el-upload>

  							</el-form-item>
							  <el-form-item label="企业logo">


								<el-upload
								class="avatar-uploader"
								action="/api/admin/fileupload/image"
								:show-file-list="false"
								:on-success="shop_logo_pic"
								>
								<img width="360px" height="180px" v-if="ruleForm.business_logo" :src="ruleForm.business_logo" >
								
								<div  v-else style="padding-top: 10%">
								
								<i class="el-icon-plus" style="font-size: 48px">
								
								</i>
								<p>上传企业logo</p>
								</div>

							</el-upload>

  							</el-form-item>
					  
				</el-form>
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm1" label-width="140px" class="alliance_add_form">
					<h3 class="form_title_label ">提成设置</h3>
					<!-- <p class="business_tops">不包括导流单</p> -->
					<el-form-item label="交易前：">
						<el-row :gutter="20">
							<el-col :span="16">
								<el-input v-model="ruleForm.percentage_orders"></el-input>
							</el-col>
							<el-col :span="4">
								<span class="business_tops ml0">单</span>
							</el-col>
						</el-row>
    					
						
  					</el-form-item>
					<el-form-item label="提成：">
						<el-row :gutter="20">
							<el-col :span="16">
								<el-input v-model="ruleForm.percentage_value"></el-input>
							</el-col>
							<el-col :span="4">
								<span class="business_tops ml0">%</span>
							</el-col>
						</el-row>

  					</el-form-item>
					  <p class="business_tops">终身提成:不包括导流单和以上设置的前几单，如果设置终身提成，对分销商吸引很大哦</p>
					<el-form-item label="奖励：">
						<el-row :gutter="20">
							<el-col :span="16">
								<el-input v-model="ruleForm.life_percentage_value"></el-input>
							</el-col>
							<el-col :span="4">
								<span class="business_tops ml0">%</span>
							</el-col>
						</el-row>

  					</el-form-item>

				</el-form>
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm1" label-width="140px" class="alliance_add_form">
					<h3 class="form_title_label ">引流期望</h3>
					
					<el-form-item label="引流行业：" >
						<el-row :gutter="24">
							<el-col :span="10">
								<el-select v-model="ruleForm.category_id" multiple placeholder="请选择" @change="quickChange" >
									<el-option
									v-for="item in quickBuyColumnList"
									:key="item.category_id"
									:label="item.category_name"
									:value="item.category_id">
									</el-option>
                    			</el-select>
							</el-col>
							<el-col :span="7">
								<span class="business_tops ml0">可设置多个标签</span>
							</el-col>
						</el-row>
    					
                    	
  					</el-form-item>
					<el-form-item label="期望企业：">
    					<el-input v-model="ruleForm.hope_business_name"></el-input>
  					</el-form-item>
					  <el-form-item label="顾客年龄：" >
						<el-row :gutter="24">
							<el-col :span="10">
								<el-select v-model="ruleForm.hope_user_age"  placeholder="请选择" @change="ageChange" >
									<el-option
									v-for="item in ageList"
									:key="item.value"
									:label="item.name"
									:value="item.value">
									</el-option>
                    			</el-select>
							</el-col>
							<el-col :span="7">
								<span class="business_tops ml0">可设置多个标签</span>
							</el-col>
						</el-row>
    					
                    	
  					</el-form-item>
					  
					<el-form-item label="平均客单价：">
    					 <el-input  v-model="ruleForm.hope_order_price"></el-input>
  					</el-form-item>
					  
				</el-form>
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm1" label-width="140px" class="alliance_add_form">
					<h3 class="form_title_label ">其他设置</h3>

					<el-form-item label="平台保证金：">
    					 <el-input  v-model="ruleForm.plate_deposit"></el-input>
  					</el-form-item>
						 <el-form-item>
                <el-button type="primary" @click="submit()">提交</el-button>
            </el-form-item>
					  
				</el-form>
        	</div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from "@/components/common/BreadCrumb";

export default {
  name: "tabletest",

  data() {
    return {
		starOptions:[],
		businessOptions:[],
		quickList:[],
		quickBuyColumnList:[],
		props:{
			value:"category_id",
			label:"category_name",
			children:"category_sons"

			
		},
		fansList:[
			{
				name:"0-2000",
				value:"0-2000"
			},
			{
				name:"2000-5000",
				value:"2000-5000"
			},
			{
				name:"5000-1000",
				value:"5000-1000"
			},
			{
				name:"10000-50000",
				value:"10000-50000"
			},
			{
				name:"50000以上",
				value:"50000以上"
			}
		],
		ageList:[
			{
				name:"15岁到18岁",
				value:"15-18"
			},
			{
				name:"18岁到25岁",
				value:"18-25"
			},
			{
				name:"25岁到30岁",
				value:"25-30"
			},
			{
				name:"30岁到35岁",
				value:"30-35"
			},
			{
				name:"35岁到40岁",
				value:"35-40"
			},
			{
				name:"40岁到45岁",
				value:"40-45"
			},
			{
				name:"45岁到60岁",
				value:"45-60"
			},
			{
				name:"60岁到99岁",
				value:"66-99"
			}
		],
      
      breadcrumb: [
        //面包屑
        {
          name: "企业管理" //名字
         
        },
        {
          name: "企业列表", //名字
          url:"/business/alliance"
        },
        {
          name: "企业认证", //名字
          url:"/business/alliance_add"
        }
      ],

      ruleForm:{
		  business_name:"", //企业名字
	  },

        rules: {
			
		  business_reg_name: [
            { required: true, message: '请输入注册人姓名', trigger: 'blur' },
          ],
          business_job: [
            { required: true, message: '请输入职位头衔', trigger: 'blur' },
          ],
          business_set_time: [
            { required: true, message: '请输入成立时间', trigger: 'blur' }
          ],
          business_address: [
             { required: true, message: '请输入企业地址', trigger: 'blur' }
		  ],
		  business_divide: [
             { required: true, message: '请输入分成比例', trigger: 'blur' }
		  ],
		  business_plate:[
			   {type: 'array', required: true, message: '请选择活跃平台', trigger: 'change' }
		  ],
		  business_fans:[
			  { required: true, message: '请选择粉丝数量', trigger: 'change' }
		  ],
		  expert_category_id:[
			  { required: true, message: '请选择擅长行业', trigger: 'change' }
		  ]
          
          
        }
    };
  },
  methods:{
	  handleChange(value){
		  this.ruleForm.expert_category_id = value[1]
	  },
	  fansChange(e){
		  this.ruleForm.business_fans = e
	  },
    quickChange(e){
		
		  this.ruleForm.category_id = e;
		  console.log(this.ruleForm,'this.ruleForm')
		
	  },
	  //获取所属行业
	  getCategorylist(){
		  this.$axios.get("/api/admin/select/getAllCategory").then(res => {
              if(res.data.code==0){
									this.starOptions = res.data.data;
									this.businessOptions = res.data.data;
									console.log(this.starOptions,'starOptions')  
              	}
                
            })
	  },
	  //身份证正面
	  shop_sfz_pic_z(res){
        this.ruleForm.business_sfz_pic_z = res.data.url
	  },
	  //身份证反面
	  shop_sfz_pic_f(res){
		  this.ruleForm.business_sfz_pic_f = res.data.url
	  },
	  //营业执照
	  shop_licence_pic(res){
		  this.ruleForm.business_licence_pic = res.data.url
	  },
	  //企业logo
	  shop_logo_pic(res){
		  this.ruleForm.business_logo = res.data.url
	  },
	  ageChange(e){
		  console.log(e,'eeee')
		},
		submit(){
			if (Object.keys(params).length&&this.ruleForm.business_auth_status!=0) {
                      this.$axios.post("/api/admin/business/modify", this.ruleForm).then(res => {

                      if(res.data.code == 0){

                          this.$alert(res.data.msg)
                         this.$router.push('/business/alliance')
                          

                      }else{
                          this.$alert(res.data.msg)
                      }


                  }).catch((e)=>{

                    this.$alert('操作失败'+e)

                  })
        }else{
                  console.log(this.ruleForm,'choiceLIst')
        // console.log(this.ruleForm,'this.ruleForm');
            this.$axios.post("/api/admin/business/editBusinessAuth", this.ruleForm).then(res => {

                      if(res.data.code == 0){

                          this.$alert(res.data.msg)
                          this.$router.push('/business/alliance')
                          

                      }else{
                          this.$alert(res.data.msg)
                      }


                  }).catch((e)=>{

                    this.$alert('操作失败'+e)

                  })
        }
		}
  },
  components: {
    BreadCrumb
  },
  created() {
		//this.getCategorylist()
	//this.getBusinessList()
	// this.getCategorylist()
    
	// 	let params = this.$route.params;
    //     if (Object.keys(params).length) {
    //         this.$axios.get("/api/admin/business/detail",{params}).then(res => {
    //           if(res.data.code==0){
    //               this.ruleForm = res.data.data;    
    //           	}
                
    //         })

    //     }
  },
  mounted(){
		
		
		
    //编辑企业
		let params = this.$route.params;
	


        if (Object.keys(params).length) {
            this.$axios.get("/api/admin/business/detail",{params}).then(res => {
              if(res.data.code==0){
									this.ruleForm = res.data.data;
									//debugger
									console.log(this.ruleForm,'ruleForm')

									// if(this.ruleForm.business_type==undefined||this.ruleForm.business_type=)

								}
								
                
            })

        }else{
					// this.ruleForm.business_type = 1;
				}
  },
  computed: {}
};
</script>

<style scoped>
.area-select .area-selected-trigger{
  padding: 0px 20px 7px 12px
}
.search {
  background-color: #fff;
  padding: 20px 20px 4px 10px;
}
.alliance_add_form{
	width: 580px;
}
.form_title_label{
	margin-left: 20px;
	
	margin-bottom:20px;
}
.color-red{
	color: #fc0d1b;
}
.business_tops{
	font-size: 14px;
	color: #999;
	line-height: 1.5em;
	margin-left: 140px;
}
.fz12{
	font-size: 12px;
}
.ml0{
	margin-left: 0px;
}
#business_ld .el-col{
	padding-left: 0px !important;
	padding-right:5px !important;
}
</style>
