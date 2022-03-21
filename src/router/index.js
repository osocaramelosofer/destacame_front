import {createRouter, createWebHistory} from 'vue-router'

import Buses from '../views/Buses.vue'

const routes = [
    {path: '/buses', name:'Buses', component: Buses},

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router