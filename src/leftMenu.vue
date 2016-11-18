<template>
    <div>
        <div class="on-off">
            <div class="min"></div>
        </div>
        <div class="nav-wrap">
            <div class="nav-item icon-index branch">
                <a href="#/" class="nav-title" title="平台首页"><i class="icon"></i><span style="background-image: none">平台首页</span></a>
            </div>
            <div class="nav-item icon-project branch" permissionmenu="project">
                <a href="javascript:void(0);" class="nav-title" title="项目管理"><i class="icon"></i><span>项目管理</span></a>
                <ul class="nav-sub">
                    <li><a href="#/project/list" permissionmenu="project_list"><span>项目列表</span></a></li>
                </ul>
            </div>
            <div class="nav-item icon-home branch" permissionmenu="customer_manager">
                <a href="javascript:void(0);" class="nav-title" title="客户管理"><i class="icon"></i><span>客户管理</span></a>
                <ul class="nav-sub">
                    <li><a href="#/customer/list" permissionmenu="customer_manager_list"><span>客户列表</span></a></li>
                </ul>
            </div>
            <div class="nav-item icon-grid branch" permissionmenu="device_manager">
                <a href="javascript:void(0);" class="nav-title" title="设备管理"><i class="icon"></i><span>设备管理</span></a>
                <ul class="nav-sub">
                    <li><a href="#/device/list" permissionmenu="device_manager_list"><span>设备分配</span></a></li>
                    <li><a href="#/device/monitorList" permissionmenu="device_manager_monitor"><span>设备监控</span></a></li>
                    <li><a href="#/hotarea/list" permissionmenu="device_manager_hot"><span>热点管理</span></a></li>
                </ul>
            </div>
            <div class="nav-item icon-accounts branch" permissionmenu="account_manager">
                <a href="javascript:void(0);" class="nav-title" title="账号权限管理"><i class="icon"></i><span>账号权限管理</span></a>
                <ul class="nav-sub">
                    <li><a href="#/role/list" permissionmenu="account_manager_role"><span>角色管理</span></a></li>
                    <li><a href="#/accountcustomer/list" permissionmenu="account_manager_customer"><span>客户侧账号</span></a></li>
                </ul>
            </div>
            <div class="nav-item icon-users branch" permissionmenu="user_manager">
                <a href="javascript:void(0);" class="nav-title" title="用户管理"><i class="icon"></i><span>用户管理</span></a>
                <ul class="nav-sub">
                    <li><a href="#/staticUser/staticUserList" permissionmenu="user_manager_list"><span>用户列表</span></a></li>
                    <li><a href="#/staticuser/blackUserList" permissionmenu="user_manager_blacklist"><span>黑名单管理</span></a></li>
                    <li><a href="#/staticuser/whiteUserList" permissionmenu="user_manager_whitelist"><span>白名单管理</span></a></li>
                    <li><a href="#/staticuser/userAuthList" permissionmenu="auth_log"><span>用户认证记录</span></a></li>
                </ul>
            </div>
            <div class="nav-item icon-page branch" permissionmenu="portal_manager">
                <a href="javascript:void(0);" class="nav-title" title="Portal管理"><i class="icon"></i><span>Portal管理</span></a>
                <ul class="nav-sub">
                    <li><a href="#/portal/template/templateList" permissionmenu="templet_manager_list"><span>模板列表</span></a></li>
                    <li><a href="#/portal/site/siteList" permissionmenu="site_manager_list"><span>站点列表</span></a></li>
                    <li><a href="#/portal/strategy/strategyList" permissionmenu="strategy_manager_list"><span>策略列表</span></a></li>
                </ul>
            </div>
            <div class="nav-item icon-legend branch" permissionmenu="statistical_analysis">
                <a href="javascript:void(0);" class="nav-title" title="统计分析"><i class="icon"></i><span>统计分析</span></a>
                <ul class="nav-sub">
                    <li><a href="#/customer/mapWifi" permissionmenu="statistical_analysis_wifi"><span>WiFi地图</span></a></li>
                    <li><a href="#/report/portalReportList" permissionmenu="statistical_analysis_portal"><span>Portal统计</span></a></li>
                    <li><a href="#/report/userReportList" permissionmenu="statistical_analysis_user"><span>用户统计</span></a></li>
                    <li><a href="#/report/awifiCoverReport" permissionmenu="statistical_analysis_awificover"><span>爱WiFi覆盖</span></a></li>
                    <li><a href="#/report/awifiCoverReportDetail" permissionmenu="statistical_analysis_awifidetail"><span>爱WiFi明细</span></a></li>
                </ul>
            </div>
            <div class="nav-item icon-platform branch" permissionmenu="app_manager">
                <a href="javascript:void(0);" class="nav-title" title="应用管理"><i class="icon"></i><span>应用管理</span></a>
                <ul class="nav-sub">
                    <li><a href="#/customerAnalysis/list" permissionmenu="app_manager_passenger_analysis"><span>客流分析</span></a></li>
                    <li><a href="#/appManage/microShop" permissionmenu="app_manager_microshop"><span>微旺铺</span></a></li>
                    <li><a href="#/appManage/contentManage" permissionmenu="app_manager_content"><span>内容发布</span></a></li>
                    <li><a href="#/appManage/giantKey" permissionmenu="app_manager_giantkey"><span>集智集客</span></a></li>
                    <li><a href="#/appManage/juLaiBao" permissionmenu="app_manager_julaibao"><span>聚来宝</span></a></li>
                </ul>
            </div>
            <div class="nav-item icon-log branch" permissionmenu="log_manager">
                <a href="javascript:void(0);" class="nav-title" title="日志管理"><i class="icon"></i><span>日志管理</span></a>
                <ul class="nav-sub">
                    <li><a href="#/sysconfig/list" permissionmenu="log_manager_sysconfiger"><span>系统参数配置</span></a></li>
                    <li><a href="#/exceptionlog/list" permissionmenu="log_manager_exceptionlog"><span>异常日志</span></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        methods: {
        }
    };
</script>

<style>
    .nav-item ul, .nav-item>ul>li>a {
        display: block!important;
    }
</style>