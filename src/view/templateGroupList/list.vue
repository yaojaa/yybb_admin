<template>
    <div class="page">
        <div class="page-header">
            <div class="crumbs">
                 <bread-crumb :bread-crumb="breadcrumb"></bread-crumb>
            </div>
            <div class="page-header-actions">
                
                <el-button icon="el-icon-plus" size="mini" type="primary" @click="$router.push({ path: '/manage/templateGroupList/add' })">添加模版组</el-button>
            </div>
        </div>
        <div class="page-content">
            <!-- <div class="filter-tag-box">
                <div class="filter-tag-item" v-for="(item,key,index) in tagsListGroup" :key="index">
                    <div class="tag-hd">{{key}}</div>
                    <div class="tag-bd">
                        <router-link class="tag" :class="tag.key+tag.value == status_filter?'active':''" v-for="(tag,i) in item" :key="tag.value" :to="{ path: '/shop/list', query: {[tag.key]: tag.value }}">
                            {{tag.title}}</router-link>
                    </div>
                </div>
            </div> -->
            <nomal-table v-on:listenSwitchChange="listenSwitchChange" ref="table" :table-json="tableJson" :url="url">
                <table-search :searchs="searchs"></table-search>
            </nomal-table>
            
        </div>
    </div>
</template>
<script>
import NomalTable from '@/components/common/NomalTable'
import TableSearch from '@/components/common/TableSearch'
import BreadCrumb from "@/components/common/BreadCrumb";

export default {
    data() {
        return {
            breadcrumb: [
                //面包屑
                {
                    name: "网站管理"
                },
                {
                    name: "模版组管理",
                    url: "/manage/templateGroupList/list"
                }
            ],
            user: JSON.parse(localStorage.user),
            dialog: false,
            business_id: '',
            is_use: '',
            remark: '无',
            	currentItem: {},
            status_filter: "",
            // tagsListGroup: {

            //     '选择状态:': [
            //         { title: '全部', key: 'handle_status', value: '' },
            //         { title: '待处理', key: 'handle_status', value: 1 },
            //         { title: '已处理', key: 'handle_status', value: 2 }
            //     ]
            // },
            searchs: {
                "list": [
                    {
                        "type": "input-text", //输入文本
                        "label": "模版组名称",
                        "name": "group_name",
                        "value": "",
                        "placeholder": "请输入",
                    },
                    
                   
                    
                    {
                        "type": "input-singal-date", //输入日期
                        "label": "开始时间",
                        "name": "start_time",
                        "value": "",
                    },
                    {
                        "type": "input-singal-date", //输入日期
                        "label": "结束时间",
                        "name": "end_time",
                        "value": "",
                    },
                ]
            },
            url: "/api/admin/replymodel/groupList",

            tableJson: {
                "column": [ //行
                   
                    {
                        "type": "text",
                        "align": "center",
                        "label": "模版组名称",
                        "prop": "group_name",
                        "width": "",

                    },
                    
                    {
                        "type": "text",
                        "align": "center",
                        "label": "创建时间",
                        "prop": "create_time",
                        "width": "200"

                    },
                    {
                        "type": "text",
                        "align": "center",
                        "label": "模版组备注",
                        "prop": "remark",
                        "width": "200"

                    },
                    {
                        "type": "text",
                        "align": "center",
                        "label": "模版组类型",
                        "prop": "group_type",
                        "width": "200",
                        formatter(row) {
                            
                            switch (row.group_type) {
                                case 1:
                                    return `<p>评价</p>`
                                    break;
                                case 2:
                                    return `<p>档案</p>`
                                    break;
                                case 3:
                                    return `<p>案例</p>`
                                    break;
                                case 4:
                                    return `<p>服务购买须知</p>`
                                    break;
                                default:
                                    break;
                            }
                        }

                    },
                    
                    {
                        "type": "handle",
                        "label": "查看",
                        "align": "center",
                        "width": "",
                        "list": [
                            {
                                "label": "编辑",
                                "type": "edit",
                                onClick(tablePage, self, row) {
                                    console.log(row,'row')
                                    self.$router.push("/manage/templateGroupList/add/" + row.reply_group_id)
                                }
                            },
                            {
                            "label": "删除",
                            "type": "remove",
                            onClick(tablePage, self, row) {
                                console.log(row,'row')
                                self.removeNews(row.reply_group_id)
                            }

                        }]
                    }


                ],
            }



        }
    },
    components: {
        NomalTable,
        TableSearch,
        BreadCrumb
    },
    beforeRouteUpdate(to, from, next) {
        console.log(to.query);

        this.status_filter = Object.keys(to.query)[0] + Object.values(to.query)[0];

        // console.log(this.status_filter);
        this.$refs.table.getData(to.query);
        next();
		},
    created() {

    },
    computed: {

    },
    methods: {
        //调用子组件的gatData方法
        //
        listenSwitchChange(data) {



            // const { shop_id, shop_is_use } = data.value
            // console.log(data.value,'data.value')

            // this.shop_id = shop_id
            // this.is_use = shop_is_use == 1 ? 0 : 1
            // console.log(this.is_use)

            // this.dialog = true
        },
        removeNews(id){
                 
            this.$axios.post("/api/admin/replymodel/removeGroup", {"id":id}).then(res => {

                if (res.data.code == 0) {

                    this.$alert('删除成功')

                    this.$refs.table.getData({
                        is_page: 1,
                        page: 1
                    });
                } else {
                    this.$alert('操作失败' + res.data.msg)

                }
            }).catch((e) => {

                this.$alert('操作失败' + e)

            })
            
        },
        // doUpdateIsUse() {
        //     const params = {
        //         id: this.shop_id,
        //         is_use: this.is_use,
        //         remark: this.remark
        //     }

        //     this.$axios.post("/api/admin/shop/isUse", params).then(res => {
        //         this.dialog = false;
        //         console.log(res)

        //         if (res.data.code == 0) {

        //             this.$alert( res.data.data)

        //             this.$refs.table.getData({
        //                 is_page: 1,
        //                 page: 1
        //             });
        //         } else {
        //             this.$alert(res.data.msg)

        //         }


        //     }).catch((e) => {

        //         this.$alert('操作失败' + e)

        //     })

        // },
        openModal() {

            console.log('openModal')
        },
        getData(k, v) {
            this.$refs.table.getData({
                [k]: v
            })
        }


    }
}
</script>
<style scoped>
</style>