import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import scroll from './components/components/iscroll.vue'
import './assets/iconfont.css'
Vue.config.productionTip = false
Vue.component('scroll', scroll)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
