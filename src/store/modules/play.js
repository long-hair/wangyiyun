import { SING_TEXT_API } from '../../api/url'
import http from '../../api/http'
export default {
  namespaced: true,
  state: {
    sing: {},
    singText: {},
    pageload: false,
    songlist: [],
  },
  mutations: {
    setsing(state, payload) {
      state.sing = payload
    },
    setsingText(state, payload) {
      state.setsingText = payload
    },
    setsingpage(state, payload) {
      state.pageload = payload
    },
    setsonList(state, payload) {
      state.songlist = payload
    },
  },
  actions: {
    async requestSingtext(context, payload) {
      const result = await http.get(SING_TEXT_API, payload)
      // const newData = list.map(
      //   ({ id, coverImgUrl, name, tracks, updateFrequency }) => ({
      //     id,
      //     coverImgUrl,
      //     name,
      //     tracks,
      //     updateFrequency,
      //   })
      // )
      context.commit('setsingText', result)
    },
    requestPageLoad(context, payload) {
      context.commit('setsingpage', payload)
    },
    requestSing(context, payload) {
      context.commit('setsing', payload)
    },
    requestSongList(context, payload) {
      context.commit('setsonList', payload)
    },
  },
}
