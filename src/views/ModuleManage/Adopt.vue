<script setup>
import { Edit, Delete } from '@element-plus/icons-vue'
import { ref } from 'vue';
const categorys = ref([
    
])
</script>

<template>
    <el-card class="page-container">
        <template #header>
            <div class="header">
                <el-form>

                </el-form>
                <div class="extra">
                    <el-button type="primary">查询</el-button>
                </div>
            </div>
        </template>
        <el-table :data="categorys" style="width: 100%;">
            <el-table-column label="昵称" width="200" type="index" prop="name"></el-table-column>
            <el-table-column label="用户名" width="200" prop="user"></el-table-column>
            <el-table-column label="用户组" width="200" prop="usergroup"></el-table-column>
            <el-table-column label="手机号码" width="200" prop="tel"></el-table-column>
            <el-table-column label="邮箱" width="200" prop="email"></el-table-column>
            <el-table-column label="操作" width="200">
                <template #default="">
                    <el-button :icon="Edit" circle plain type="primary"></el-button>
                    <el-button :icon="Delete" circle plain type="primary"></el-button>
                </template>
            </el-table-column>
            <template #empty>
                <el-empty description="没有数据"/>
            </template>
        </el-table>
    </el-card>
</template>

<style scoped>
.extra{
    float: right;
}
.page-container{
    min-height: 100%;
    box-sizing: border-box;
}
.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>