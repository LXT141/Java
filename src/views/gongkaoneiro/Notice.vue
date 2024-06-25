<script setup>
import { ref } from 'vue';

 const alerts = ref([  
      { title: '新动物领养信息', type: 'info', description: '一只可爱的猫咪等待领养，详情请点击...' },  
      { title: '志愿者招募', type: 'success', description: '我们正在招募志愿者，欢迎加入我们的行列！' },  
      // ... 其他公告数据  
    ]);  
</script>

<template>
<div class="announcement-board">  
    <el-alert  
      v-for="(alert, index) in alerts"  
      :key="index"  
      :title="alert.title"  
      :type="alert.type"  
      :description="alert.description"  
      show-icon  
      closable  
      @close="handleClose(index)"  
    >  
      <!-- 如果需要额外的操作按钮，可以在这里添加 -->  
    </el-alert>  
  
    <!-- 加载更多公告的按钮（如果需要） -->  
    <el-button v-if="hasMore" type="primary" @click="loadMore">加载更多</el-button>  
  </div>  
</template>

<style>

</style>