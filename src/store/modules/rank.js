import { ALL_LIST_API } from '../../api/url'
import http from '../../api/http'
export default {
  namespaced: true,
  state: {
    offical: [],
    global: [],
  },
  mutations: {
    setOffical(state, payload) {
      state.offical = payload
    },
    setGlobal(state, payload) {
      state.global = payload
    },
  },
  actions: {
    async requestAll(context, payload) {
      const {
        data: { list },
      } = await http.get(ALL_LIST_API, payload)
      const newData = list.map(
        ({ id, coverImgUrl, name, tracks, updateFrequency }) => ({
          id,
          coverImgUrl,
          name,
          tracks,
          updateFrequency,
        })
      )
      const offical = newData.slice(0, 4)
      const global = newData.slice(4)
      context.commit('setOffical', offical)
      context.commit('setGlobal', global)

      // const {
      //   data: { artists },
      // } = await http.get(SINGER_LIST_API, payload)
      // const newData = artists.map(({ id, name, picUrl }) => ({
      //   id,
      //   name,
      //   picUrl,
      // }))
      // console.log(newData)
    },
  },
}
