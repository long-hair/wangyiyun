import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import scroll from './components/components/iscroll.vue'
import './assets/iconfont.css'
import singlist from './components/components/gedanlist.vue'
import play from './components/components/play/play.vue'

Vue.config.productionTip = false
Vue.component('scroll', scroll)
Vue.component('singlist', singlist)
Vue.component('play', play)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
