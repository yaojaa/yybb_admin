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
                        <el-form-item label="搜索名：">
                            <el-input v-model="ruleForm.search_words"></el-input>
                        </el-form-item>
                    </el-form>
                    <el-form-item label="活动区域">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>

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
      
      ruleForm:{
        search_words:""
        
      },
      rules: {
          search_words: [
            { required: true, message: '请输入搜索关键词', trigger: 'blur' },
          ],
          content: [
            { required: true, message: '请输入活动规则', trigger: 'blur' }
          ]
        }

    };
  },
  methods:{
      

         
    submit(){
    let params = this.$route.params;
    this.ruleForm.id = params.id
    
    //如果是编辑
    if (Object.keys(params).length) {
                    this.$axios.post("/api/admin/news/modify", this.ruleForm).then(res => {

                    if(res.data.code == 0){

                        this.$alert('操作成功')
                        this.$router.push('/admin/news/list')
                        

                    }else{
                        this.$alert(res.data.msg)
                    }


                }).catch((e)=>{

                this.$alert('操作失败'+e)

                })
    }else{
        
        this.$axios.post("/api/admin/news/create", this.ruleForm).then(res => {

                    if(res.data.code == 0){

                        this.$alert('操作成功')
                        this.$router.push('/admin/news/list')
                        

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
        this.dialogVisible=true
        this.$axios.post("/api/admin/news/detail",params).then(res => {
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


