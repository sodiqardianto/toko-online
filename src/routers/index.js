import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Cart from '../views/ShoppingCart.vue'
import Success from '../views/Success.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/product',
        name: 'Product',
        component: Product
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/success',
        name: 'Success',
        component: Success
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router