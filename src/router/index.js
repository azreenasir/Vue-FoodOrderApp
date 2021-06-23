import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Foods from '../views/Foods.vue'
import Cart from '../views/Cart.vue'
import FoodDetail from '../views/FoodDetail.vue'
import OrderSuccess from '../views/OrderSuccess.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/foods',
        name: 'Foods',
        component: Foods
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/foods/:id',
        name: 'FoodDetail',
        component: FoodDetail,
        meta: {
            hideFooter: true,
        }
    },
    {
        path: '/orders-success',
        name: 'OrderSuccess',
        component: OrderSuccess
    }
]

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    base: process.env.BASE_URL,
    routes
})

export default router