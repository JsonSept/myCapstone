import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => import('../views/Landing.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('../views/Store.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/CheckoutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue')
  }
  ,
  {
    path: '/userAdmin',
    name: 'userAdmin',
    component: () => import('../components/UserAdmin.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../components/CartComp.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.baseUrl),
  routes
})

export default router