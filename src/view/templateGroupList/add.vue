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
                        <el-form-item label="请选择行业：" >
							<el-cascader
                                :options="options"
                                v-model="selectedOptions"
                                @change="handleChange"
                                :props="listProps"
                                >
                            </el-cascader>
                        </el-form-item>

                        <el-form-item label="选择模版组类型：" prop="group_type">
							<el-select v-model="ruleForm.group_type" placeholder="请选择模版组类型">
								<el-option v-for="item in groupList" :key="item.group_type" :label="item.value" :value="item.group_type" ></el-option>
							</el-select>
                        </el-form-item>
						<el-form-item label="模版组名称：" prop="group_name">
                            <el-input v-model="ruleForm.group_name"></el-input>
                        </el-form-item>
                        
						<el-form-item label="备注：">
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
      listProps:{
          value:"category_id",
          label:"category_name",
          
          children:"category_sons"

      },
      
      
       
       breadcrumb: [
                //面包屑
                {
                    name: "网站管理" //名字
                  
                },
                {
                    name: "模版组管理", //名字
                    url: '/manage/templateGroupList/list'
                },
                
                {
                    name: "添加" //名字
                }
			],
			groupList:[
                {
                    group_type:1,
                    value:"评价"
                },
                {
                    group_type:2,
                    value:"档案"
                },
                {
                    group_type:3,
                    value:"案例"
                },
                {
                    group_type:4,
                    value:"服务购买须知"
                }
            ],
            selectedOptions:[],
            options:[],

      
      ruleForm:{
        reply_group_id:"",
        group_name:"",
        group_type:"",
        remark:"",
        category_id:""

        
      },
      rules: {
          group_name: [
				{ required: true, message: '请输入模版组名称', trigger: 'blur' }
          ],
          group_type:[
              { required: true, message: '请选择模版组类型', trigger: 'change' }
          ]
		
		  
        }

    };
  },
  methods:{
      handleChange(value){
          
          this.ruleForm.category_id = value[value.length-1]
          console.log(this.ruleForm.category_id,'this.ruleForm.category_id')
          
      },
    getAllCategory(){
        this.$axios.get("/api/admin/select/getAllCategory").then(res => {

			if(res.data.code == 0){

				
				this.options = res.data.data
				console.log(this.options,'options')

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
			this.$axios.post("/api/admin/replymodel/modifyGroup", this.ruleForm).then(res => {

				if(res.data.code == 0){

					this.$alert('操作成功')
					this.$router.push('/manage/templateGroupList/list')
					

				}else{
					this.$alert(res.data.msg)
				}


			}).catch((e)=>{

			this.$alert('操作失败'+e)

			})
    }else{
        
        this.$axios.post("/api/admin/replymodel/createGroup", this.ruleForm).then(res => {

			if(res.data.code == 0){

				this.$alert('操作成功')
				this.$router.push('/manage/templateGroupList/list')
				

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
        
        this.$axios.post("/api/admin/replymodel/groupDetail",params).then(res => {
          console.log(res.data.data,'data----data')
          //this.ruleForm.activity_status = res.data.data.activity_status
            this.ruleForm = res.data.data;
            this.selectedOptions[1]=res.data.data.category_id
            this.selectedOptions[0]=res.data.data.category_pid
            console.log(this.selectedOptions,'sssss')
  
        })
        
    }
    this.getAllCategory()
     
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


