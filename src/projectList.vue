<template>
    <div>
        <!--项目列表页面-->
        <div class="nav-map-wrap">
            <div class="nav-map">项目管理<span class="flag">></span>项目列表</div>
        </div>
        <div class="content-fixed">
            <div class="awifi-padding-left20">
                <div class="awifi-form-sheet">
                    <div class="form-item-input awifi-Col-2 awifi-margin-right awifi-margin-right">
                        <input class="input-control" placeholder="请输入项目名称关键字" v-model="keywords">
                    </div>
                    <div class="form-item-input awifi-Col-2 awifi-margin-right awifi-margin-right">
                        <area-select></area-select>
                    </div>
                    <div class="awifi-left awifi-padding-left" permission="project_list_search">
                        <button class="form-primary" @click="searchList">
                            <span>查询</span>
                        </button>
                    </div>
                </div>
                <div class="listtitle">
                    <span class="list6">&emsp;序号</span>
                    <span class="list10" @click="orderMac('macAddr')">&nbsp;MAC地址</span>
                    <span class="list16">&nbsp;批次编号</span>
                    <span class="list12">&nbsp;地区</span>
                    <span class="list8">&nbsp;设备类型</span>
                    <span class="list8">&nbsp;设备业务状态</span>
                    <span class="list8">&nbsp;厂家</span>
                    <span class="list8">&nbsp;型号</span>
                    <span class="list8">&nbsp;组件版本</span>
                    <span class="list8">&nbsp;固件版本</span>
                    <span class="list8" @click="orderPing('pinCode')">&nbsp;Pin码</span>
                </div>
            </div>
        </div>
        <div class="content-one">
            <div class="datacontent" IE="8">
                <div class="listcontent" v-for="(item, index) of list">
                    <span class="list6">{{ index+1 }}</span>
                    <span class="list10 substring">{{ item.macAddr }}</span>
                    <span class="list16 substring">{{ item.batchNum }}</span>
                    <span class="list12 substring">{{ item.locationFullName }}</span>
                    <span class="list8 substring">{{ item.entityTypeDsp }}</span>
                    <span class="list8 substring">{{ item.statusDsp }}</span>
                    <span class="list8 substring">{{ item.corporation }}</span>
                    <span class="list8 substring">{{ item.model }}</span>
                    <span class="list8 substring">{{ item.cpVersion }}</span>
                    <span class="list8 substring">{{ item.fwVersion }}</span>
                    <span class="list8 substring">{{ item.pinCode }}</span>
                </div>
            </div>
        <div class="footer-fixed">

        </div>
    </div>
</template>

<script>
    import baseFunc from "./baseFunc.js";

    export default{
        data(){
            return{
                msg:'hello vue',
                list: null,
                keywords: "我是关键"
            }
        },
        created: function () {
            console.log("==projectList created==");

            var RespData = {"message":"","result":"OK","pageNo":1,"pageSize":50,"records":[{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V102","macAddr":"9586D5704001","pinCode":"1564588959","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V103","macAddr":"9586D5704002","pinCode":"1564588960","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V98","macAddr":"9586D5704003","pinCode":"1564588955","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V99","macAddr":"9586D5704004","pinCode":"1564588956","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V100","macAddr":"9586D5704005","pinCode":"1564588957","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V101","macAddr":"9586D5704006","pinCode":"1564588958","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V102","macAddr":"9586D5704007","pinCode":"1564588959","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V103","macAddr":"9586D5704008","pinCode":"1564588960","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V98","macAddr":"9586D5704009","pinCode":"1564588955","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V99","macAddr":"9586D5704010","pinCode":"1564588956","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V100","macAddr":"9586D5704011","pinCode":"1564588957","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V101","macAddr":"9586D5704012","pinCode":"1564588958","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V102","macAddr":"9586D5704013","pinCode":"1564588959","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V103","macAddr":"9586D5704014","pinCode":"1564588960","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V98","macAddr":"9586D5704015","pinCode":"1564588955","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V99","macAddr":"9586D5704016","pinCode":"1564588956","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V100","macAddr":"9586D5704017","pinCode":"1564588957","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V101","macAddr":"9586D5704018","pinCode":"1564588958","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V102","macAddr":"9586D5704019","pinCode":"1564588959","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V103","macAddr":"9586D5704020","pinCode":"1564588960","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V98","macAddr":"9586D5704021","pinCode":"1564588955","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V99","macAddr":"9586D5704022","pinCode":"1564588956","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V100","macAddr":"9586D5704023","pinCode":"1564588957","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V101","macAddr":"9586D5704024","pinCode":"1564588958","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V102","macAddr":"9586D5704025","pinCode":"1564588959","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V103","macAddr":"9586D5704026","pinCode":"1564588960","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V98","macAddr":"9586D5704027","pinCode":"1564588955","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V99","macAddr":"9586D5704028","pinCode":"1564588956","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V100","macAddr":"9586D5704029","pinCode":"1564588957","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V101","macAddr":"9586D5704030","pinCode":"1564588958","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V102","macAddr":"9586D5704031","pinCode":"1564588959","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V103","macAddr":"9586D5704032","pinCode":"1564588960","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V98","macAddr":"9586D5704033","pinCode":"1564588955","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V99","macAddr":"9586D5704034","pinCode":"1564588956","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V100","macAddr":"9586D5704035","pinCode":"1564588957","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V101","macAddr":"9586D5704036","pinCode":"1564588958","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V102","macAddr":"9586D5704037","pinCode":"1564588959","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V103","macAddr":"9586D5704038","pinCode":"1564588960","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V98","macAddr":"9586D5704039","pinCode":"1564588955","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V99","macAddr":"9586D5704040","pinCode":"1564588956","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V100","macAddr":"9586D5704041","pinCode":"1564588957","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V101","macAddr":"9586D5704042","pinCode":"1564588958","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V102","macAddr":"9586D5704043","pinCode":"1564588959","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V103","macAddr":"9586D5704044","pinCode":"1564588960","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V98","macAddr":"9586D5704045","pinCode":"1564588955","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V99","macAddr":"9586D5704046","pinCode":"1564588956","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V100","macAddr":"9586D5704047","pinCode":"1564588957","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V101","macAddr":"9586D5704048","pinCode":"1564588958","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V102","macAddr":"9586D5704049","pinCode":"1564588959","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"},{"entityType":31,"corporation":"爱中兴","model":"M68","fwVersion":"V4","cpVersion":"V103","macAddr":"9586D5704050","pinCode":"1564588960","provinceId":31,"cityId":383,"countyId":3229,"locationFullName":"浙江杭州西湖区","status":3,"batchNum":"20161021-爱中兴-2","entityTypeDsp":"FAT_AP","statusDsp":"审核驳回"}],"totalRecord":136322,"totalPage":2727,"begin":0};

            this.list = RespData["records"];
            this.orderBy = "asc";
        },

        methods: {
            orderMac: function() {

                function entitySort(a, b) {
                    return baseFunc.baseSort(a, b, "macAddr");
                }

                var ret = this.list; //[{"macAddr":"a101", "name": "aaa"}, {"macAddr":"a102", "name": "bbb"}, {"macAddr":"a100", "name": "ccc"}];
                ret.sort(entitySort);
                if (this.orderBy == "asc") {
                    ret.reverse();
                }
                this.orderBy = this.orderBy == "asc" ? "desc" : "asc";
                this.list = ret;
            },

            orderPing: function() {

                function entitySort(a, b) {
                    return baseFunc.baseSort(a, b, "pinCode");
                }

                var ret = this.list; //[{"macAddr":"a101", "name": "aaa"}, {"macAddr":"a102", "name": "bbb"}, {"macAddr":"a100", "name": "ccc"}];
                ret.sort(entitySort);
                if (this.orderBy == "asc") {
                    ret.reverse();
                }
                this.orderBy = this.orderBy == "asc" ? "desc" : "asc";
                this.list = ret;
            },

            searchList: function() {
                console.log("==list==");
                console.log("keywords=>", this.keywords);
                console.log("selected_sheng=>", this.selected_sheng);
                console.log("selected_shi=>", this.selected_shi);
            }
        }
    }
</script>


<style>
    .content-fixed, .nav-map {
        position: static;
    }
    .awifi-form-sheet select {
        width: auto;
    }
</style>