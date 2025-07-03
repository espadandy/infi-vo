import { createRouter, createWebHistory } from 'vue-router'
import ProductGrid from '../views/ProductGrid.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/Profile.vue'
import ProductDetail from '../views/ProductDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ProductGrid
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail
  }
]

const router = createRouter({
  history: createWebHistory('/infi-vo/'),
  routes
})

export default router 