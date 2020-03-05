import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueYoutube from 'vue-youtube'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueYoutube)

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
