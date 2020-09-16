import Vue from 'vue'
import Vuex from 'vuex'
import recommend from './modules/home'
import singers from './modules/singer'
import all from './modules/rank'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    recommend,
    singers,
    all,
  },
})
