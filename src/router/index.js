import {createRouter, createWebHistory} from 'vue-router'

import ListPassengers from '../views/passengers/ListPassengers.vue'
import CreatePassenger from '../views/passengers/CreatePassenger.vue'

const routes = [
    {path: '/list-passengers', name:'passengers', component: ListPassengers},
    {path: '/create-passenger', name:'createPassengers', component: CreatePassenger},
    {path: '/detail-passenger/:id', name:'detail.passenger', component: ()=> import('../views/passengers/DetailPassenger.vue')},

    {path: '/list-drivers', name:'drivers', component: ()=> import('../views/drivers/ListDrivers.vue')},
    {path: '/detail-driver/:id', name:'detail.driver', component: ()=> import('../views/drivers/DetailDriver.vue')},
    {path: '/create-driver', name:'create.driver', component: ()=> import('../views/drivers/CreateDriver.vue')},

    {path: '/list-routes', name:'routes', component: ()=> import('../views/routes/ListRoutes.vue')},
    {path: '/detail-route/:id', name:'detail.route', component: ()=> import('../views/routes/DetailRoute.vue')},
    {path: '/create-route', name:'create.route', component: ()=> import('../views/routes/CreateRoute.vue')},

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router