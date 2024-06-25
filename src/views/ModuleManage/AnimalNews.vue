<script setup>
import { ref } from 'vue';
// import imageUrl from '@/assets/images/2.jpg'
const categorys = ref([
    {
        "imageUrl":"/src/assets/images/2.jpg",
        "animalName": "猫",
        "age": "10",
        "sex": "雄性",
        "healthy": "健康",
        "place": "XXX街区XXXXX大道"
    },
     {
        "imageUrl":"/src/assets/images/1.jpg",
        "animalName": "猫",
        "age": "10",
        "sex": "雄性",
        "healthy": "健康",
        "place": "XXX街区XXXXX大道"
    },
     {
        "imageUrl":"/src/assets/images/3.jpg",
        "animalName": "猫",
        "age": "10",
        "sex": "雄性",
        "healthy": "健康",
        "place": "XXX街区XXXXX大道"
    },
]);


</script>

<template>
    <el-card class="page-container">
        <template #header>
            <div class="header">
               <el-form class="demo-form-inline" :inline="true" label-width="100px">
                    <el-form-item label="动物名称" style="width: 300px;">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="是否被领养" style="width: 300px;">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item style="width: 300px; margin-left: 50px">
                        <el-button type="primary">查询</el-button>
                        <el-button type="primary">重置</el-button>
                        <el-button type="primary">添加</el-button>
                        <el-button type="primary">删除</el-button>
                    </el-form-item>
                </el-form> 
            </div>
        </template>
        <el-table :data="categorys" style="width: 100%;">
            <el-table-column label="照片" width="180">
                <template #default="{ row }">  
                    <img :src="row.imageUrl">  
                </template>  
            </el-table-column>
            <el-table-column label="动物名称" width="180" prop="animalName"></el-table-column>
            <el-table-column label="年龄" width="180" prop="age"></el-table-column>
            <el-table-column label="性别" width="180" prop="sex"></el-table-column>
            <el-table-column label="健康状态" width="180" prop="healthy"></el-table-column>
            <el-table-column label="发现地点" width="180" prop="place"></el-table-column>
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
img{
    width: 150px;
    height: 110px;
}
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