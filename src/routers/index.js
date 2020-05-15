import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../pages/Index.vue'

const routes = [{
    path: '/',
    redirect: '/index'
}, {
    path: '/index',
    component: Index
}]

export default createRouter({
    history: createWebHashHistory(),
    routes
})
