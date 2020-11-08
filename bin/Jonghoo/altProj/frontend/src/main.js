import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import cookies from 'vue-cookies'
import vuetify from './plugins/vuetify'
import vuex from 'vuex'
import VuePageTransition from 'vue-page-transition'
import ScrollAnimation from './directives/scrollAnimation'

import moment from 'moment'
import VueMoment from 'vue-moment'

Vue.directive('scrollAnimation', ScrollAnimation)

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
