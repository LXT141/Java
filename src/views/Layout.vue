<script setup>
import
{ HomeFilled, ArrowLeft, ArrowRight, User, Crop, EditPen, SwitchButton,CaretBottom }
    from '@element-plus/icons-vue'
import { ref, reactive, onMounted } from 'vue'
import { ElMessage } from 'element-plus';

import { useRouter } from 'vue-router'
const router = useRouter()
function exit() {
    //跳转首页 路由完成跳转
    ElMessage({
        type: 'success',
        message: '退出登录',
        showClose:true
    })
    router.push('/login')
}
</script>

<template>
    <!-- 主页面 -->
    <div class="layout-container">
         <!-- element-plus 中的容器 -->
        <el-container>
            <!-- 顶部区域 -->
            <el-header class="head">
                <div style="width: 15%; " >
                    <el-icon style="margin: 10px 10px 0px 15px;" color="white" size="20"><HomeFilled /></el-icon>
                    <span style="color: white;">后台首页</span>
                    <!-- 下拉菜单 -->
                    <el-dropdown>
                        <span class="el-dropdown-box">
                            <el-avatar :src="avatar"/>
                                <el-icon><CaretBottom /></el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item :icon="User">基本资料</el-dropdown-item>
                                <el-dropdown-item :icon="Crop">更换头像</el-dropdown-item>
                                <el-dropdown-item :icon="EditPen">重置密码</el-dropdown-item>
                                <el-dropdown-item :icon="SwitchButton" @click="exit">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </el-header>
             <!-- 底部区域 -->
            <el-container>
                <!-- 左侧区域 -->
                <el-aside class="left">
                    <el-menu class="bg" :default-active="1-1" router>
                        <!-- 公告内容 -->
                        <el-sub-menu index="1">
                            <template #title><p style="color: white;">公告内容</p></template>
                            <el-menu-item class="bgc" index="/gk/carousel">轮播图</el-menu-item>
                            <el-menu-item class="bgc" index="1-2">公告栏</el-menu-item>
                        </el-sub-menu>
                        <!-- 系统用户 -->
                        <el-sub-menu index="2">
                            <template #title ><p style="color: white;">系统用户</p></template>
                            <el-menu-item class="bgc" index="/systemUsers/manage">管理员</el-menu-item>
                            <el-menu-item class="bgc" index="/systemUsers/ordinary">普通用户</el-menu-item>
                            <el-menu-item class="bgc" index="/systemUsers/volunteer">志愿者用户</el-menu-item>
                        </el-sub-menu>
                        <!-- 内容模块 -->
                        <el-sub-menu index="3">
                            <template #title ><p style="color: white;">内容模块</p></template>
                            <el-menu-item class="bgc" index="3-1">流浪动物社区分享</el-menu-item>
                            <el-menu-item class="bgc" index="3-2">社区分享分类列表</el-menu-item>
                            <el-menu-item class="bgc" index="3-3">救助咨询</el-menu-item>
                            <el-menu-item class="bgc" index="3-4">咨询分类列表</el-menu-item>
                        </el-sub-menu>
                        <!-- 模块管理 -->
                         <el-sub-menu index="4">
                            <template #title ><p style="color: white;">模块管理</p></template>
                            <el-menu-item class="bgc" index="4-1">流浪动物消息</el-menu-item>
                            <el-menu-item class="bgc" index="/ModuleManage/adopt">领养消息</el-menu-item>
                            <el-menu-item class="bgc" index="4-3">救助站信息</el-menu-item>
                            <el-menu-item class="bgc" index="4-4">爱心募捐</el-menu-item>
                            <el-menu-item class="bgc" index="4-5">加入志愿者</el-menu-item>
                        </el-sub-menu>
                        <!-- 个人中心 -->
                        <el-sub-menu index="5">
                            <template #title ><span style="color: white;">个人中心</span></template>
                            <el-menu-item class="bgc" index="/user/info">
                                <el-icon><User/></el-icon>
                                <span>基本资料</span>
                            </el-menu-item>
                            <el-menu-item class="bgc" index="/user/avatar">
                                <el-icon><Crop/></el-icon>
                                <span>更换头像</span>
                            </el-menu-item>
                            <el-menu-item class="bgc" index="/user/reset">
                                <el-icon><EditPen/></el-icon>
                                <span>重置密码</span>
                            </el-menu-item>
                        </el-sub-menu>
                    </el-menu>
                </el-aside>
                <!-- 主要区域 -->
                <el-main class="main">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.layout-container{
    height: 100vh;
}
.head{
    position: relative;
    height: 50px;
    background-color: #60748f;
    line-height: 50px;
}
.el-dropdown-box{
    position: absolute;
    top: 5px;
    right: -1350px;
}
.left{
    height: 662px;
    width: 15%;
    background-color: #60748f;
}
.bg{
    background-color: #60748f;
    color: white;
}
.bgc{
    background-color: #4D5E74;
    color: rgb(153, 151, 151);
}
.bg .bgc:hover{
    background-color: #7088a8;
}
.main{
    padding: 10px;
    background-color: #f0eff4;
}

</style>