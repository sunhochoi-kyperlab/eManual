import Vue from 'vue'
import i18n from './i18n'
import App from './App'
import ObigoUI from 'obigo-js-ui'
import router from './router'

import 'obigo-js-webapi/vehicle/vehicle'
import 'obigo-js-ui/features/commonPopup'

Vue.use(ObigoUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
