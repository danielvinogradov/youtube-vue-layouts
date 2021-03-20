import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/auth',
        name: 'Auth',
        component: () => import('@/views/Auth.vue'),
        meta: {
            layout: 'AuthLayout'
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
        meta: {
            layout: 'DashboardLayout'
        }
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import('@/views/Test.vue'),
        meta: {
            layout: 'DashboardLayout'
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
