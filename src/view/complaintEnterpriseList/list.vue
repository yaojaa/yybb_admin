<template>
    <div class="page">
        <div class="page-header">
            <div class="crumbs">
                 <bread-crumb :bread-crumb="breadcrumb"></bread-crumb>
            </div>
            
            
        </div>
        <div class="page-content">
            <div class="filter-tag-box">
                <div class="filter-tag-item" v-for="(item,key,index) in tagsListGroup" :key="index">
                    <div class="tag-hd">{{key}}</div>
                    <div class="tag-bd">
                        <router-link class="tag" :class="tag.key+tag.value == status_filter?'active':''" v-for="(tag,i) in item" :key="tag.value" :to="{ path: '/shop/list', query: {[tag.key]: tag.value }}">
                            {{tag.title}}</router-link>
                    </div>
                </div>
            </div>
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
                    name: "投诉企业",
                    url: "/complaintEnterpriseList/list"
                }
            ],
            user: JSON.parse(localStorage.user),
            dialog: false,
            business_id: '',
            is_use: '',
            remark: '无',
            	currentItem: {},
            status_filter: "",
            tagsListGroup: {

                '选择状态:': [
                    { title: '全部', key: 'handle_status', value: '' },
                    { title: '待处理', key: 'handle_status', value: 1 },
                    { title: '已处理', key: 'handle_status', value: 2 }
                ]
            },
            searchs: {
                "list": [
                    {
                        "type": "input-text", //输入文本
                        "label": "投诉人",
                        "name": "shop_account_name",
                        "value": "",
                        "placeholder": "投诉人姓名",
                    },
                    
                    {
                        "type": "input-text", //选择器
                        "label": "被投诉企业名称",
                        "name": "business_name",
                        "value": ""
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
            url: "/api/admin/dispute/index",

            tableJson: {
                "column": [ //行
                    {
                        "type": "text",
                        "align": "center",
                        "label": "投诉人",
                        "prop": "shop_account_name",
                        "width": ""
                    },
                    {
                        "type": "text",
                        "align": "center",
                        "label": "投诉时间",
                        "prop": "create_time",
                        "width": "",

                    },
                    {
                        "type": "text",
                        "align": "center",
                        "label": "被投诉企业",
                        "prop": "business_name",
                        "width": "",

                    },
                   
                    
                    {
                        "type": "text",
                        "align": "center",
                        "label": "涉及金额",
                        "prop": "money",
                        "width": "200",
                        formatter(row) {
                            return row.money/100
                        }

                    },
                    {
                        "type": "text",
                        "align": "center",
                        "label": "投诉状态",
                        "prop": "money",
                        "width": "200",
                        formatter(row) {
                            return ['','企业未处理','企业已处理','店员确认解决'][row.handle_status]
                        }

                    },
                    {
                        "type": "text",
                        "align": "center",
                        "label": "处理结果",
                        "prop": "money",
                        "width": "200",
                        formatter(row) {
                            return row.handle_list[row.handle_list.length-1].business_reason
                        }

                    },
                    
                    
                    
                    

                    {
                        "type": "handle",
                        "label": "操作",
                        "align": "center",
                        "width": "150",
                        "list": [
                            
                            {
                            "label": "查看详情",
                            "type": "detail",
                            onClick(tablePage, self, row) {
                                self.$router.push("/manage/complaintEnterpriseList/detail/" + row.dispute_id)
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