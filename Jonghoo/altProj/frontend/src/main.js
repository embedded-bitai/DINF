import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import cookies from 'vue-cookies'
import vuetify from './plugins/vuetify'
import vuex from 'vuex'
import VuePageTransition from 'vue-page-transition'
import ScrollAnimation from './directives/scrollAnimation'
<<<<<<< HEAD
import ScrollBtnAnimation from './directives/scrollBtnAnimation'
=======
>>>>>>> f8a0168b3f3dd0bf6abaa5cadbe652ea0ce8a101

import moment from 'moment'
import VueMoment from 'vue-moment'

<<<<<<< HEAD
Vue.directive('scrollanimation', ScrollAnimation)
Vue.directive('scrollanimation', ScrollBtnAnimation)
=======
Vue.directive('scrollAnimation', ScrollAnimation)
>>>>>>> f8a0168b3f3dd0bf6abaa5cadbe652ea0ce8a101

Vue.config.productionTip = false

Vue.use(VueMoment, { moment })
Vue.use(VuePageTransition)
Vue.use(cookies)
Vue.use(vuex)

function init () {
  const savedToken = null
  // const savedToken = cookies.get('accessToken')

  if (savedToken) {
    return store.dispatch('loginByToken', savedToken)
  } else {
  // Promise는 비동기 처리
    return Promise.resolve()
  }
}

init().then(() => {
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
})
