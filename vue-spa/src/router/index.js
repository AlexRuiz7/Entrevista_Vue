import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import store from '@/store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (!store.getters.isLogged)
        next('/login');
      else 
        next();
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  { path: '*', redirect: '/home' }
]

const router = new VueRouter({
  routes
})

export default router
