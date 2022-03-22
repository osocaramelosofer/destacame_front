import {createRouter, createWebHistory} from 'vue-router'

import ListPassengers from '../views/passengers/ListPassengers.vue'
import CreatePassenger from '../views/passengers/CreatePassenger.vue'

const routes = [
    {path: '/list-passengers', name:'passengers', component: ListPassengers},
    {path: '/create-passenger', name:'createPassengers', component: CreatePassenger},
    {path: '/detail-passenger/:id', component: ()=> import('../views/passengers/DetailPassenger.vue')},

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router