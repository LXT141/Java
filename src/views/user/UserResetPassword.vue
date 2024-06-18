<script setup>
import { ref } from 'vue';
const registerData = ref({
    loginName:'',
    username: '',   
    email: '',  
    phone: ''  
})
const resetForm = () =>{
  registerData.value = {
        loginName:'',
        username: '',
        email: '',  
        phone: ''  
    }
}

const rules =  {  
        // 可以在这里添加表单验证规则  
        oldPassword: [  
          { required: true, message: '请输入旧密码', trigger: 'blur' }  
        ],  
        password: [  
          { required: true, message: '请输入新密码', trigger: 'blur' }  
        ],  
        rePassword: [  
          { required: true, message: '请再次输入密码', trigger: 'blur' },  
        ],  
        phone: [  
          { required: true, message: '请输入手机号码', trigger: 'blur' },  
          // 你可以添加更多的手机验证规则，例如使用正则表达式  
        ]  
    } 
</script>

<template>
    <div class="main-bgc">
    <el-container >
        <!-- 头部区域 -->
        <el-header >
                <span class="head font">重置密码</span>
        </el-header>
        <!-- 主要区域 -->
        <el-main class="main">
            <el-form ref="form" :model="registerData" label-width="120px" :rules="rules">
                <el-form-item label="原密码" style="width: 300px;" prop="loginName">
                  <el-input class="input" type="password" show-password v-model="registerData.oldPassword"></el-input>
                </el-form-item>
                <el-form-item label="新密码" style="width: 300px;" prop="username">
                  <el-input class="input" type="password" show-password v-model="registerData.password"></el-input>
                </el-form-item>
                <el-form-item label="确认新密码" style="width: 300px;" prop="email">
                  <el-input class="input" type="password" show-password v-model="registerData.rePassword"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button round type="primary">修改密码</el-button>
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

</style>
