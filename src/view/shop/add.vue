<template>
   <div class="page">
        <div class="page-header">
            <div class="crumbs">
                <bread-crumb :bread-crumb="breadcrumb"></bread-crumb>
            </div>
        </div>
        <div class="page-content">
			<div class="panel " id="shop_ld">

				<div class="form-panel p-xl"  >
                   <!--form start-->
					<el-form :model="ruleForm" :rules="rules" ref="ruleForm1" label-width="100px" class="demo-ruleForm" >
						<el-form-item label="所属企业：" >
							<el-select v-model="ruleForm.business_id"  placeholder="请选择" @change="businessChange" >
									<el-option
									v-for="item in businessList"
									:key="item.business_id"
									:label="item.business_name"
									:value="item.business_id">
									</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="门店名称：" prop="shop_name">
							<el-input v-model="ruleForm.shop_name"></el-input>
						</el-form-item>
						<el-form-item label="门店电话：" prop="shop_phone">
							<el-input v-model="ruleForm.shop_phone"></el-input>
						</el-form-item>

					<!-- 地图如下 -->
						<el-form-item label="地图：" >
							<div id="atlas"></div>
							<p style="margin:5px">
								<input style="width:200px;padding:3px 4px;" type="text" id="place" /> <span class='shop-add-city-message'>输入地址，回车确认</span>
							</p>
						</el-form-item>
						
						
						<el-form-item label="公司地址：" >
							<el-input v-model="ruleForm.shop_address_model"></el-input>
						</el-form-item>

						<el-form-item label="详细地址：" >
							<el-input v-model="ruleForm.shop_address_edit"></el-input>
						</el-form-item>
						<el-form-item label="企业特色：">
							<el-input v-model="ruleForm.shop_expert"></el-input>
						</el-form-item>
						<el-form-item label="营业时间：" prop="shop_business">
							<el-input v-model="ruleForm.shop_business"></el-input>
						</el-form-item>
						<el-form-item label="成立时间：">
							<el-input v-model="ruleForm.shop_found"></el-input>
						</el-form-item>
						<el-form-item label="门店面积：">
							<el-input v-model="ruleForm.shop_area"></el-input>
						</el-form-item>


						

						<el-button size="large" type="primary" @click="submit()" >提交</el-button>

					</el-form>

			</div>

        </div>
    </div>
</div>
   
</template>

<script>
import BreadCrumb from "@/components/common/BreadCrumb";
import formlist from "@/components/formlist";
// import { CATEGORYOPTIONS } from "../../constans/createdGood";
import {TMap} from "../../../static/js/TMap"
export default {
  name: "tabletest",

  data() {
    return {
      businessList:[], //企业列表  
    //   CATEGORYOPTIONS,
      breadcrumb: [
        //面包屑
        {
          name: "企业管理" //名字
         
        },
       {
          name: "门店列表",
          url: "/shop/list"
        },
        {
          name: "添加门店",
          url: "/shop/add"
        },

      ],

      ruleForm:{
        "id":"",
        "shop_name" : "",//公司名称
        "shop_address" : "公司地址",//公司地址
        "shop_corporation" : "",//法人
        "shop_address_model":"",
        "shop_phone" : "18668991178",//手机号
        "address_code" : "",//地址编码
        "shop_longitude" : "",//门店经度
        "shop_latitude" : "",//门店纬度
        
        "business_id" : "",//企业审核信息的business_id
        // "shop_environment":[],
        address_code2:[]
      },

        rules: {
          shop_name: [
            { required: true, message: '请输入门店名称', trigger: 'blur' },
          ],
          shop_phone: [
            { required: true, message: '请输入门店电话', trigger: 'blur' }
          ],
          shop_address:[
            { required: true, message: '请输入公司地址', trigger: 'blur' }
		  ],
		  shop_business:[
			 { required: true, message: '请输入营业时间', trigger: 'blur' }
		  ]
        }
      
    };
  },
  methods:{
    businessChange(e){
     this.ruleForm.business_id = e
    },
    getBuinessList(){
      this.$axios.get("/api/admin/select/businessList").then(res => {
         
            this.businessList = res.data.data;
            
        })
    },

    // handleChange(event){
    //   this.ruleForm.address_code = event[event.length-1];
    //   console.log(this.ruleForm.address_code,'this.ruleForm.address_code')
    // },
 
      
      submit(){
        let params = this.$route.params;
        this.ruleForm.id = params.id
        if (Object.keys(params).length) {
                      this.$axios.post("/api/admin/shop/modify", this.ruleForm).then(res => {

                      if(res.data.code == 0){

                          this.$alert('编辑门店成功！')

                          this.$router.push('/shop/list')

                      }else{
                          this.$alert(res.data.msg)
                      }


                  }).catch((e)=>{

                    this.$alert('操作失败'+e)

                  })
        }else{
            console.log(this.ruleForm,'this.ruleForm');
            this.$axios.post("/api/admin/shop/create", this.ruleForm).then(res => {

                      if(res.data.code == 0){

                          this.$alert('添加门店成功！')

                          this.$router.push('/shop/list')

                      }else{
                          this.$alert(res.data.msg)
                      }


                  }).catch((e)=>{

                    this.$alert('操作失败'+e)

                  })
        }
        
      },
      mapTX(lat,lng) {
        var that = this;
        TMap().then(qq => {
          var map = new qq.maps.Map(document.getElementById("atlas"),{
            center: new qq.maps.LatLng(lat||39.916527,lng||116.397128),
            zoom: 10
		  });
		  	
            qq.maps.event.addListener(map, 'click', function(event) {
              var marker=new qq.maps.Marker({
                        position:event.latLng, 
                        map:map
              });    
              qq.maps.event.addListener(map, 'click', function(e) {
                marker.setMap(null);
                info.close();
                return
              });

              var info = new qq.maps.InfoWindow({
                map: map
              });
              
              //经度
              that.ruleForm.shop_longitude = event.latLng.lng;
              //维度
              that.ruleForm.shop_latitude = event.latLng.lat; 
            });
           
            //实例化自动完成
            var ap = new qq.maps.place.Autocomplete(document.getElementById('place'), {
              offset: new qq.maps.Size(0, 5),
              location: '北京市'
            });
            var keyword = "";
            var that = this;
            //调用Poi检索类。用于进行本地检索、周边检索等服务。
            var searchService = new qq.maps.SearchService({
				
                complete : function(results){
					var citylocation = new qq.maps.CityService();
						citylocation.searchCityByName(searchService.keyword)
						
					console.log(searchService,'searchService')
					
                

                  
                  if(results.type === "CITY_LIST") {
                        searchService.setLocation(results.detail.cities[0].cityName);
                        searchService.search(keyword);
                        return;
					}
					if(results.type === "POI_LIST") {
                       that.ruleForm.shop_address_model = results.detail.pois[0].name;
                    }
                  
                    var pois = results.detail.pois;
                    var latlngBounds = new qq.maps.LatLngBounds();
                    for(var i = 0,l = pois.length;i < l; i++){
                        var poi = pois[i];
                        latlngBounds.extend(poi.latLng);  
                    }
                    map.fitBounds(latlngBounds);
                }
			});
			
			
			
			
            //添加监听事件
            qq.maps.event.addListener(ap, "confirm", function(res){
                keyword = res.value;
                searchService.search(keyword);
            });
          })
        },
       getReviewData(id) {

            this.$axios({
                method: 'get',
                url: '/api/admin/shop/reviewDetail?id='+id,
                
            }).then((res) => {

                if(res.data.code ==0){
                    Object.assign(this.ruleForm,res.data.data) 
                }else{
                    this.$alert('接口返回错误')
                }
                
            }).catch((error) => {
                this.$alert('接口返回错误'+error)
            });
        }
      
    },


  mounted() {
    //this.getBusinessList();

    //如果是从审核门店中过来
    if(this.$route.query.review){
      this.getReviewData(this.$route.query.review)
    }
    
    

  },
  components: {
    BreadCrumb,
    formlist
  },

  created() {
    this.getBuinessList()
    let params = this.$route.params;
    //如果是编辑门店
    if (Object.keys(params).length) {
        
        this.dialogVisible = true;
        this.params = params;
        console.log(params,'params')
        this.$axios.get("/api/admin/shop/detail", { params: params }).then(res => {
          console.log(res.data.data,'data----data')
            this.ruleForm = res.data.data;
            this.mapTX(this.ruleForm.position.latitude,this.ruleForm.position.longitude)
           


        })
    }else{
      this.mapTX()
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
.el-upload--picture-card {
  width: 120px;
  height: 120px;
  display: inline-block;
}
#atlas {
  width:100%;
  height:300px;
}
.avatar-uploader .el-upload--text {
  /* width: 146px;
  height: 146px; */
  font-size: 12px;
}
.shop-add-city-message{
  color:#606266;
  font-size:12px;
}
.remove-img{
  cursor: pointer;
}
#shop_ld .el-select{
  width: 370px !important;
}
#shop_ld .el-select>.el-input{
  width: 370px !important;
}
/* #shop_ld .shop-add-city{
  padding-top: 10px;
} */
#shop_ld .area-select{
  line-height: 22px !important;
}
</style>


