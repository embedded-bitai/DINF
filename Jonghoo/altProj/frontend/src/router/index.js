import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home.vue'
<<<<<<< HEAD
import upload from '../views/upload.vue'
import signUp from '../views/signUp.vue'
import signIn from '../views/signIn.vue'
import Logout from '../views/Logout.vue'
import apply from '../views/apply.vue'
import adminSetup from '../views/adminSetup.vue'
=======
import signUp from '../views/signUp.vue'
import signIn from '../views/signIn.vue'
import Logout from '../views/Logout.vue'
import archive from '../views/archive.vue'
import success from '../views/success.vue'
import apply from '../views/apply.vue'
import adminSetup from '../views/adminSetup.vue'
import archiveRegister from '../views/archiveRegister.vue'
>>>>>>> f8a0168b3f3dd0bf6abaa5cadbe652ea0ce8a101
import login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
<<<<<<< HEAD
    path: '/upload',
    name: 'upload',
    component: upload
  },
  {
=======
>>>>>>> f8a0168b3f3dd0bf6abaa5cadbe652ea0ce8a101
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
<<<<<<< HEAD
=======
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
>>>>>>> f8a0168b3f3dd0bf6abaa5cadbe652ea0ce8a101
    path: '/apply',
    name: 'apply',
    component: apply
  },
  {
    path: '/adminSetup',
    name: 'adminSetup',
    component: adminSetup
<<<<<<< HEAD
=======
  },
  {
    path: '/archiveRegister',
    name: 'archiveRegister',
    component: archiveRegister
>>>>>>> f8a0168b3f3dd0bf6abaa5cadbe652ea0ce8a101
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
