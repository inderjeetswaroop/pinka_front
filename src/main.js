// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSession from 'vue-session'
import VueMeta from 'vue-meta'

Vue.prototype.$flask_api_link = 'http://127.0.0.1:5000'


Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueMeta);
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
    color: '#3f69e2',
    failedColor: 'red',
    height: '50px',
    z_index: 99999
  })

var options = {
  persist: true
}
Vue.use(VueSession, options);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
