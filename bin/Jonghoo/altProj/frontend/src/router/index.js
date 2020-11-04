import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home.vue'
import signUp from '../views/signUp.vue'
import signIn from '../views/signIn.vue'
import Logout from '../views/Logout.vue'
import archive from '../views/archive.vue'
import success from '../views/success.vue'
import apply from '../views/apply.vue'
import adminSetup from '../views/adminSetup.vue'
import archiveRegister from '../views/archiveRegister.vue'
import login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: signUp
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: signIn
  },
  {
    path: '/Logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/archive',
    name: 'archive',
    component: archive
  },
  {
    path: '/success',
    name: 'success',
    component: success
  },
  {
    path: '/apply',
    name: 'apply',
    component: apply
  },
  {
    path: '/adminSetup',
    name: 'adminSetup',
    component: adminSetup
  },
  {
    path: '/archiveRegister',
    name: 'archiveRegister',
    component: archiveRegister
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
