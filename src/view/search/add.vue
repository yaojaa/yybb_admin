<template>
    <div class="page">
        <div class="page-header">
            <div class="crumbs">
                <bread-crumb :bread-crumb="breadcrumb"></bread-crumb>
            </div>
        </div>
        <div class="page-content">

            <div class="panel invite-box">

                <div class="form-panel p-xl  width480">
                    <!--form start-->
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm1" label-width="140px" class="demo-ruleForm" >
                        <el-form-item label="搜索名：" prop="search_words">
                            <el-input v-model="ruleForm.search_words"></el-input>
                        </el-form-item>
                        <el-form-item label="搜索类型：" prop="search_type">
							<el-select v-model="ruleForm.search_type" placeholder="请选择搜索类型">
								<el-option v-for="item in typeList" :key="item.type" :label="item.value" :value="item.type" ></el-option>
							</el-select>
                        </el-form-item>
						<el-form-item label="跳转地址：" prop="search_url">
                            <el-input v-model="ruleForm.search_url"></el-input>
                        </el-form-item>
						<el-form-item label="颜色值：" prop="search_colour">
                            <el-input v-model="ruleForm.search_colour"></el-input>
                        </el-form-item>
						<el-form-item>
							<el-button type="primary" @click="submit()">提交</el-button>
							
  						</el-form-item>
                    </el-form>
                    

                </div>

                
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
      
      
       
       breadcrumb: [
                //面包屑
                {
                    name: "网站管理" //名字
                  
                },
                {
                    name: "搜索", //名字
                    url: '/manage/search/list'
                },
                
                {
                    name: "添加" //名字
                }
			],
			typeList:[
				{
					type:1,
					value:"服务"
				},
				{
					type:2,
					value:"商品"
				},
				{
					type:3,
					value:"专题"
				},
				{
					type:4,
					value:"案例"
				},
				{
					type:5,
					value:"标签"
				},
				{
					type:6,
					value:"活动推广页"
				},
				{
					type:7,
					value:"搜索商品/服务"
				}
			],
      
      ruleForm:{
        search_words:"",
        search_type:"",
        search_url:"",
        search_colour:""

        
      },
      rules: {
          search_words: [
				{ required: true, message: '请输入搜索关键词', trigger: 'blur' }
          ],
          search_type: [
            	{ required: true, message: '请选择搜索类型', trigger: 'change' }
		  ],
		  search_url:[
			   { required: true, message: '请输入跳转地址', trigger: 'blur' }
		  ],
		  search_colour:[
			   { required: true, message: '请输入跳转地址', trigger: 'blur' }
		  ]
		  
        }

    };
  },
  methods:{
      

         
    submit(){
    
    let params = this.$route.params;
    //如果是编辑
    if (Object.keys(params).length) {
		
    	this.ruleForm.id = params.id
			this.$axios.post("/api/admin/search/modify", this.ruleForm).then(res => {

				if(res.data.code == 0){

					this.$alert('操作成功')
					this.$router.push('/manage/search/list')
					

				}else{
					this.$alert(res.data.msg)
				}


			}).catch((e)=>{

			this.$alert('操作失败'+e)

			})
    }else{
        
        this.$axios.post("/api/admin/search/create", this.ruleForm).then(res => {

			if(res.data.code == 0){

				this.$alert('操作成功')
				this.$router.push('/manage/search/list')
				

			}else{
				this.$alert(res.data.msg)
			}


		}).catch((e)=>{

		this.$alert('操作失败'+e)

		})
    }
    

    },
      
      
    },
    


  mounted() {
   
    

  },
  components: {
    BreadCrumb
    // formlist
  },

  created() {
    console.log(this.$route.params,'this.$route.params')
    let params = this.$route.params;
   
    //如果是编辑
    if (Object.keys(params).length) {
        
        this.$axios.post("/api/admin/search/detail",params).then(res => {
          console.log(res.data.data,'data----data')
          //this.ruleForm.activity_status = res.data.data.activity_status
            this.ruleForm = res.data.data;
  
        })
        
    }
     
  },
  computed: {
    // editor() {
    //     return this.$refs.myQuillEditor.quill;
    // }
  }
};
</script>

<style scoped>
.width480{
    width:480px
}
.invite-upload-img{
  max-width: 360px;
  width: 358px;
  height: 176px;
  max-height: 176px
}
.remove-img{
  cursor: pointer;
}
</style>


