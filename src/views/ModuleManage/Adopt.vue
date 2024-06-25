<script setup>
import { ref,inject } from 'vue';
const categorys = ref([
    {
        "user": "kjj",
        "name": "kjj",
        "animalName":"狗子",
        "tel": 12341123441,
        "adopt": "aaa",
        "state":"是"
    }
])
// const isAdmin = ref()
const role = inject('role')
</script>

<template>
    <el-card class="page-container">
        <template #header>
            <div class="header">
               <el-form class="demo-form-inline" :inline="true" label-width="100px">
                    <el-form-item label="用户名" style="width: 300px;">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="领养人姓名" style="width: 300px;">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="动物名称" style="width: 300px;">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item style="width: 300px; margin-left: 50px">
                        <el-button type="primary" >查询</el-button>
                        <el-button type="primary" v-if="isAdmin" >重置</el-button>
                        <el-button type="primary" v-if="isAdmin">添加</el-button>
                        <el-button type="primary" v-if="isAdmin">删除</el-button>
                    </el-form-item>
                </el-form> 
            </div>
        </template>
        <el-table :data="categorys" style="width: 100%;">
            <el-table-column label="用户名" width="180" prop="user"></el-table-column>
            <el-table-column label="领养人名称" width="180" prop="name"></el-table-column>
            <el-table-column label="联系方式" width="180" prop="tel"></el-table-column>
            <el-table-column label="动物名称" width="180" prop="animalName"></el-table-column>
            <el-table-column label="领养备注" width="180" prop="adopt"></el-table-column>
            <el-table-column label="审核状态" width="180" prop="state"></el-table-column>
            <el-table-column label="操作" width="">
                <template #default="">
                    <el-button circle plain type="primary">详细</el-button>
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
    align-items: center;
    justify-content: space-between;
}
</style>