import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.use(ElementUI)
Vue.config.productionTip = false

let token = sessionStorage.getItem('token')
axios.defaults.headers.common['token'] = token

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')