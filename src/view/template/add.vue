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
                        
                        <el-form-item label="选择模版组：" prop="reply_group_id">
							<el-select v-model="ruleForm.reply_group_id" placeholder="请选择模版组">
								<el-option v-for="item in groupList" :key="item._id" :label="item.group_name" :value="item.reply_group_id" ></el-option>
							</el-select>
                        </el-form-item>
						<el-form-item label="模版标题：" prop="title">
                            <el-input v-model="ruleForm.title"></el-input>
                        </el-form-item>
                        <el-form-item label="模版内容：" >
                            <el-input type="textarea" v-model="ruleForm.content" rows="7"></el-input>
                        </el-form-item>
						<el-form-item label="备注：" prop="search_colour">
                            <el-input v-model="ruleForm.remark"></el-input>
                            <!-- <el-input type="textarea" v-model="ruleForm.remark" rows="7"></el-input> -->
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
                    name: "模版管理", //名字
                    url: '/manage/template/list'
                },
                
                {
                    name: "添加" //名字
                }
			],
			groupList:[],
      
      ruleForm:{
        reply_group_id:"",
        title:"",
        content:"",
        remark:""

        
      },
      rules: {
          title: [
				{ required: true, message: '请输入模版标题', trigger: 'blur' }
          ],
          reply_group_id: [
            	{ required: true, message: '请选择模版组', trigger: 'change' }
		  ]
		
		  
        }

    };
  },
  methods:{
    getGroupList(){
        this.$axios.get("/api/admin/replymodel/groupList").then(res => {

			if(res.data.code == 0){

				
				this.groupList = res.data.data
				console.log(this.groupList,'groupList')

			}else{
				this.$alert(res.data.msg)
			}


		}).catch((e)=>{

		this.$alert('操作失败'+e)

		})
    },

         
    submit(){
    
    let params = this.$route.params;
    //如果是编辑
    if (Object.keys(params).length) {
		
    	this.ruleForm.id = params.id
			this.$axios.post("/api/admin/replymodel/modify", this.ruleForm).then(res => {

				if(res.data.code == 0){

					this.$alert('操作成功')
					this.$router.push('/manage/template/list')
					

				}else{
					this.$alert(res.data.msg)
				}


			}).catch((e)=>{

			this.$alert('操作失败'+e)

			})
    }else{
        
        this.$axios.post("/api/admin/replymodel/create", this.ruleForm).then(res => {

			if(res.data.code == 0){

				this.$alert('操作成功')
				this.$router.push('/manage/template/list')
				

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
        
        this.$axios.post("/api/admin/replymodel/detail",params).then(res => {
          console.log(res.data.data,'data----data')
          //this.ruleForm.activity_status = res.data.data.activity_status
            this.ruleForm = res.data.data;
  
        })
        
    }
    this.getGroupList()
     
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


