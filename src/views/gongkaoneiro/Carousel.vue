<script setup>
import
{ HomeFilled, ArrowLeft, ArrowRight, User, Crop, EditPen, SwitchButton,CaretBottom }
    from '@element-plus/icons-vue'
import { ref } from 'vue'

const activity = ref(1)
function prev() {
    if (activity.value == 1) {
        activity.value = activity.value + 1
    } else if (activity.value == 2) {
        activity.value = activity.value + 1
    } else if (activity.value == 3) {
        activity.value = 1
    }
}
function next() {
    if (activity.value == 1) {
        activity.value = activity.value + 1
    } else if (activity.value == 2) {
        activity.value = activity.value + 1
    } else if (activity.value == 3) {
        activity.value = 1
    }
}
</script>

<template>
    <el-container class="main-bgc">
            <div  class="main-img">
                 <img v-if="activity==1" src="../../assets/images/1.jpg" alt="" >
                <img v-if="activity==2" src="../../assets/images/2.jpg" alt="" >
                <img v-if="activity==3" src="../../assets/images/3.jpg" alt="" >
                <img src="" alt="">
                <el-icon style="position: absolute; top: 55%; left: 0;" size="35px" color="white" @click="prev"><ArrowLeft /></el-icon>
                <el-icon style="position: absolute; top: 55%; right:0;" size="35px" color="white" @click="next"><ArrowRight /></el-icon>
            </div>
    </el-container>
</template>

<style>
.main-bgc{
    background-color: white;
    width: 100%;
    height: 100%;
    overflow: hidden; 
}
.main-img{
    position: relative;
    background-size: cover;
    top: 100px;
    left: 250px;
    height: 400px;
    width: 700px;
}
.main-img img{
    position: absolute;
    height: 100%;
    width: 100%;
}
</style>