//导入request.js请求工具
import request from '@/utils/request.js'

//提供调用注册接口的函数
export const userRegisterSeriice = (registerData) => {
    //借助UrlSearchParams完成传递
    const params = new URLSearchParams()
    for (let key in registerData) {
        params.append(key, registerData[key]);
    }
    return request.post('/register', params);
}

//提供调用登录
export const userLoginService = (loginData) => {
    const params = new URLSearchParams()
    for (let key in loginData) {
        params.append(key, registerData[key]);
    }
    return request.post('/login', loginData[key]).then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token)
    })
}

//退出登录
export const userLogoutService = () => {
    localStorage.removeItem('token');

}