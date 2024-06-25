import { createRouter, createWebHistory } from 'vue-router'

//导入组件
import LoginVue from '@/views/Login.vue'
import LayoutVue from '@/views/Layout.vue'
import UIVue from '@/views/UI.vue'
import Userinfovue from '@/views/user/UserInfo.vue'
import UserAvatarVue from '@/views/user/UserAvatar.vue'
import UserResetPasswordVue from '@/views/user/UserResetPassword.vue'
import CarouselVue from '@/views/gongkaoneiro/Carousel.vue'
import ManageVue from '@/views/SystemUsers/Manage.vue'
import OrdinaryVue from '@/views/SystemUsers/Ordinary.vue'
import VolunteerVue from '@/views/SystemUsers/Volunteer.vue'
import AdoptVue from '@/views/ModuleManage/Adopt.vue'
import NoticeVue from '@/views/gongkaoneiro/Notice.vue'
import AnimalNewsVue from '@/views/ModuleManage/AnimalNews.vue'

const routes = [
    {
        path: '/login', component: LoginVue,
    },
    //管理员界面
    {
        path: '/', component: LayoutVue, redirect: '/gk/adminCarousel',
        children: [
            { path: '/gk/adminCarousel', component: CarouselVue },
            { path: '/gk/adminNotice', component: NoticeVue },
            { path: '/user/adminInfo', component: Userinfovue },
            { path: '/user/adminAvatar', component: UserAvatarVue },
            { path: '/user/adminReset', component: UserResetPasswordVue },
            { path: '/systemUsers/adminManage', component: ManageVue },
            { path: '/systemUsers/adminOrdinary', component: OrdinaryVue },
            { path: '/systemUsers/adminVolunteer', component: VolunteerVue },
            { path: '/ModuleManage/adminAdopt', component: AdoptVue },
            { path: '/ModuleManage/adminAnimalNews', component: AnimalNewsVue },
        ]
    },
    //用户界面
    {
        path: '/uI', component: UIVue, redirect: '/ModuleManage/animalNews',
        children: [
            { path: '/gk/carousel', component: CarouselVue },
            { path: '/gk/notice', component: NoticeVue },
            { path: '/user/info', component: Userinfovue },
            { path: '/user/avatar', component: UserAvatarVue },
            { path: '/user/reset', component: UserResetPasswordVue },
            { path: '/ModuleManage/adopt', component: AdoptVue },
            { path: '/ModuleManage/animalNews', component: AnimalNewsVue },
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