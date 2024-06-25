<script setup>
import { User, Lock,Phone } from '@element-plus/icons-vue'
import { ref,provide } from 'vue'
import { ElMessage } from 'element-plus';
//控制注册与登录界面的显示
const enroll = ref(false);
//定义数据模型
const registerData = ref({
    username: '',
    password: '',
    rePassword: '',
})
//校验密码的函数  rule是规则 value是值 callback是回调函数 
const checkRePassword = ( value, callback ) => {
    if (value === '') {
        callback(new Error('请再次输入密码'))
    }
    else if (value !== registerData.value.password) {
        callback(new Error('请确保两次输入的密码一样'))
    }
    else {
        callback()
    }
}
//定义表单校验规则
const rules = {
        //require是必须传数据  message 提示信息 trigger触发时机是失去焦点的时候
    username: [
        { required: true,message:'请输入用户名',trigger: 'blur'},
        { min: 5, max:16,message:'长度为5到16位非空字符',trigger: 'blur'}
    ],
    password: [
        { required: true,message:'请输入密码',trigger: 'blur'},
        { min: 5, max:16,message:'长度为5到16位非空字符 ',trigger: 'blur'}
    ], 
    rePassword: [
        { validator:checkRePassword, trigger:'blur'}
    ],
}

//调用后天接口，完成注册
import { userRegisterSeriice, userLoginService } from '@/api/user.js'
const regist = async () => {
    //registData 是一个响应式数据对象，如果要获取值，需要.value
    let result = await userRegisterSeriice(registerData.value);
   /*  if (result.code === 0) {
        //成功了
        alert(result.msg ? result.msg : '注册成功')
    }
    else {
        //失败了
        alert('注册失败')
    } */
   ElMessage.success(result.msg ? result.msg : '注册成功') 
}

//绑定数据，复用注册表单的数据模型
//表单数据校验
//登录函数
import { useRouter } from 'vue-router'
const router = useRouter()

const role = ref()
function login1() {
    if (selectedUserType.value == 'User') {
        //跳转首页 路由完成跳转
        ElMessage({
            type: 'success',
            message: '登录成功',
            showClose: true
        })
        //身份为用户
        role.value = "user"
        provide(role)
        //进入用户界面
         router.push('/uI')
    }
    else if (selectedUserType.value == 'admin') {
        //跳转首页 路由完成跳转
        ElMessage({
            type: 'success',
            message: '登录成功',
            showClose: true
        })
        //进入管理员界面
         router.push('/')
    }
     else {
        ElMessage({
            type: 'warning',  
            message: '请选择一个用户类型！',  
            showClose: true  
        })
    }
}
const login = async() => {
    //调用接口，完成登录
    let result = await userLoginService(registerData.value);
   /*  if (result.code === 0) {
         alert(result.msg ? result.msg : '登录成功')
    }
    else {
        //失败了
        alert('注册失败')
    } */
    ElMessage.success(result.msg ? result.msg : '登录成功') 
    //跳转首页 路由完成跳转
   router.push('/')
}

//定义函数，清空数据模型的数据
const cleanRegistData = () => {
    registerData.value={
        username: '',
        password: '',
        rePassword: '',
    }
}
//定义存储用户类型
const selectedUserType = ref("User","admin")
const radio2 = ref('1')
</script>
<template>
    <div class="login-page">
        <!-- 注册界面 -->
        <div class="login-enroll" v-if="enroll">
            <h1 style="margin: 20px 0; text-align: center; font-size: 24px; font-weight: normal;">注册</h1>
               <!-- 注册表单 -->
            <el-form ref="form" size="large" autocomplete="off" :model="registerData" :rules="rules">
                <el-form-item prop="username">
                    <el-input  size="medium" :prefix-icon="User" placeholder="请输入用户名" v-model="registerData.username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input class="input" size="medium" type="password" show-password :prefix-icon="Lock" placeholder="请输入密码" v-model="registerData.password"></el-input>
                </el-form-item>
                <el-form-item prop="rePassword">
                    <el-input class="input" size="medium" type="password" :prefix-icon="Lock" show-password placeholder="请再次输入密码" v-model="registerData.rePassword"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-radio-group v-model="radio2" style="margin-top: 10px">
                        <el-radio value="1" size="large" class="ml-4">普通用户</el-radio>
                        <el-radio value="3" size="large" class="ml-4">管理员</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button class="button" type="warning" size="small" @click="register">注册</el-button>
                </el-form-item>
                <el-form-item>
                    <el-link class="back" type="info" underline="false" @click="enroll = false;cleanRegistData()" >
                        返回 ->
                    </el-link>
                </el-form-item>
            </el-form>
        </div>
        <!-- 登录界面 -->
        <div class=" login">
            <h1 style="margin: 20px 0; text-align: center; font-size: 24px; font-weight: normal;">登录</h1>
            <el-form ref="form" size="large" autocomplete="off" :model="registerData" :rules="rules">
                <el-form-item prop="username"> 
                    <el-input  size="medium" :prefix-icon="User" placeholder="请输入用户名" v-model="registerData.username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input class="input" size="medium" type="password" :prefix-icon="Lock" show-password placeholder="请输入密码" v-model="registerData.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-radio-group v-model="selectedUserType" style="margin-top: 10px;">
                        <el-radio value="User" size="large" class="ml-4">普通用户</el-radio>
                        <el-radio value="admin" size="large" class="ml-4">管理员</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button class="button" type="primary" size="small" @click="login1">登录</el-button>
                </el-form-item>
                <el-form-item>
                    <el-link class="back" type="info" underline="false" @click="enroll = true;cleanRegistData()">
                        注册 ->
                    </el-link>
                </el-form-item>
            </el-form>
        </div>
    </div>

</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
.login-page {
    height: 100vh;
    /* background-image: linear-gradient(to bottom right, #0860b8, #dce3ea); */
    background-image:url(../assets/images/Login.png);
    background-repeat: no-repeat ;
    background-size: cover;
    overflow: hidden;
}
.login{
    margin: 200px auto;
    background: rgba(255, 255, 255, 0.7);
    width: 350px; 
    height: 300px; 
    padding: 20px; 
    border-radius: 10px;
}
.login-enroll{
    margin: 200px auto;
    background: rgba(255, 255, 255, 0.7);
    width: 350px; 
    height: 350px; 
    padding: 20px; 
    border-radius: 10px;
}
.input{
    margin-top: 20px;
}
.button{
    font-size: 16px;
    width: 100%;
    height: 36px;
    margin: 0 auto;
    margin-top: 20px;
}
.back{
    color: rgb(27, 27, 28);
}
.ml-4{
    padding-left: 10px;
    color: #0c0c0c;
}
</style>