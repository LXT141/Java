<script setup>
import { User, Lock, Phone } from '@element-plus/icons-vue'
import { ref } from 'vue'

const registerData = ref({
    loginName:'',
    username: '',   
    email: '',  
    phone: ''  
})
const rules =  {  
        // 可以在这里添加表单验证规则  
        loginName: [  
          { required: true, message: '请输入用户名', trigger: 'blur' }  
        ],  
        username: [  
          { required: true, message: '请输入用户昵称', trigger: 'blur' }  
        ],  
        email: [  
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },  
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }  
        ],  
        phone: [  
          { required: true, message: '请输入手机号码', trigger: 'blur' },  
          // 你可以添加更多的手机验证规则，例如使用正则表达式  
        ]  
    }  
const resetForm = () =>{
  registerData.value = {
        loginName:'',
        username: '',
        email: '',  
        phone: ''  
    }
}
</script>

<template>
  <div class="main-bgc">
    <el-container >
        <!-- 头部区域 -->
        <el-header >
                <span class="head font">基本资料</span>
        </el-header>
        <!-- 主要区域 -->
        <el-main class="main">
            <el-form ref="form" :model="registerData" label-width="120px" :rules="rules">
                <el-form-item label="登录名称" style="width: 300px;" prop="loginName">
                  <el-input class="input" v-model="registerData.loginName"></el-input>
                </el-form-item>
                <el-form-item label="用户昵称" style="width: 300px;" prop="username">
                  <el-input class="input" v-model="registerData.username"></el-input>
                </el-form-item>
                <el-form-item label="用户邮箱" style="width: 300px;" prop="email">
                  <el-input class="input" v-model="registerData.email"></el-input>
                </el-form-item>
                <el-form-item label="手机号" style="width: 300px;" prop="phone">
                  <el-input v-model="registerData.phone"></el-input>
                </el-form-item>
                <el-form-item class="btn">
                  <el-button round type="primary">提交</el-button>
                  <el-button round type="primary" style="margin-left: 40px" @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form> 
        </el-main>
    </el-container>
  </div>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
.main-bgc{
    background-color: white;
    height: 100%;
    overflow: hidden; 
}
.head{
    display: inline-block;
    font-size: 24px;
    margin: 20px 20px;
}
.main{
    margin: 50px 0 0 100px ;
}
.font{
    color: gray;
}
.input{
  margin-bottom: 30px;
}
.btn{
  margin-top: 30px;
}
</style>