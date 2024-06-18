import { createRouter, createWebHistory } from 'vue-router'

//导入组件
import LoginVue from '@/views/Login.vue'
import LayoutVue from '@/views/Layout.vue'
import Userinfovue from '@/views/user/UserInfo.vue'
import UserAvatarVue from '@/views/user/UserAvatar.vue'
import UserResetPasswordVue from '@/views/user/UserResetPassword.vue'
import CarouselVue from '@/views/gongkaoneiro/Carousel.vue'
import ManageVue from '@/views/SystemUsers/Manage.vue'
import OrdinaryVue from '@/views/SystemUsers/Ordinary.vue'
import VolunteerVue from '@/views/SystemUsers/Volunteer.vue'
import AdoptVue from '@/views/ModuleManage/Adopt.vue'

const routes = [
    {
        path: '/login', component: LoginVue,
    },
    {
        path: '/', component: LayoutVue, redirect: '/gk/carousel',
        children: [
            { path: '/gk/carousel', component: CarouselVue },
            { path: '/user/info', component: Userinfovue },
            { path: '/user/avatar', component: UserAvatarVue },
            { path: '/user/reset', component: UserResetPasswordVue },
            { path: '/systemUsers/manage', component: ManageVue },
            { path: '/systemUsers/ordinary', component: OrdinaryVue },
            { path: '/systemUsers/volunteer', component: VolunteerVue },
            { path: '/ModuleManage/adopt', component: AdoptVue },
        ]
    },
]

//创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

//导出路由
export default router