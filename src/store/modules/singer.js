import { SINGER_LIST_API } from '../../api/url'
import http from '../../api/http'
export default {
  namespaced: true,
  state: {
    singers: [],
  },
  mutations: {
    setSinger(state, payload) {
      state.singers = payload
    },
    pushSinger(state, payload) {
      state.singers.push(...payload)
    },
  },
  actions: {
    async requestSingerList(context, payload) {
      const {
        data: { artists },
      } = await http.get(SINGER_LIST_API, payload)
      const newData = artists.map(({ id, name, picUrl }) => ({
        id,
        name,
        picUrl,
      }))
      context.commit('setSinger', newData)
    },
    async pushSingerList(context, payload) {
      const {
        data: { artists },
      } = await http.get(SINGER_LIST_API, payload)
      const newData = artists.map(({ id, name, picUrl }) => ({
        id,
        name,
        picUrl,
      }))
      context.commit('pushSinger', newData)
    },
  },
}
