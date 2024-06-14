<script setup>
import {HomeFilled} from '@element-plus/icons-vue'
</script>

<template>
    <!-- 主页面 -->
    <div class="layout-container">
         <!-- element-plus 中的容器 -->
        <el-container>
            <!-- 顶部区域 -->
            <el-header class="head">
                <div style="width: 15%; " >
                    <el-icon style="margin: 10px 10px 0px 15px;" color="#193441" size="20"><HomeFilled /></el-icon>
                    <span style="color: white;">后台首页</span>
                </div>
            </el-header>
        <!-- 底部区域 -->
            <el-container>
                <!-- 左侧区域 -->
                <el-aside class="left">
                    <el-menu class="bgc" :default-active="1">
                        <!-- 公告内容 -->
                        <el-sub-menu index="1">
                            <template #title ><p style="color: white;">公告内容</p></template>
                            <el-menu-item class="bgc" index="1-1">轮播图</el-menu-item>
                            <el-menu-item class="bgc" index="1-2">公告栏</el-menu-item>
                        </el-sub-menu>
                        <!-- 系统用户 -->
                        <el-sub-menu index="2">
                            <template #title ><p style="color: white;">系统用户</p></template>
                            <el-menu-item class="bgc" index="2-1">管理员</el-menu-item>
                            <el-menu-item class="bgc" index="2-2">普通用户</el-menu-item>
                            <el-menu-item class="bgc" index="2-2">志愿者用户</el-menu-item>
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
                            <el-menu-item class="bgc" index="4-2">领养消息</el-menu-item>
                            <el-menu-item class="bgc" index="4-3">救助站信息</el-menu-item>
                            <el-menu-item class="bgc" index="4-4">爱心募捐</el-menu-item>
                            <el-menu-item class="bgc" index="4-5">加入志愿者</el-menu-item>
                        </el-sub-menu>
                    </el-menu>
                </el-aside>
                <!-- 主要区域 -->
                <el-main>Main</el-main>
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
    height: 50px;
    background-image:linear-gradient(to bottom right, #3E606F, #FCFFF5);
    line-height: 50px;
}
.left{
    height: 662px;
    width: 15%;
    background-image:linear-gradient(to bottom right, #3E606F, #FCFFF5);
}
.bgc{
    background-image:linear-gradient(to bottom right, #3E606F, #FCFFF5);
    color: white;
}
</style>