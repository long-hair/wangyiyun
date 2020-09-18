import { SINGER_LIST_API, SING_LIST_API } from '../../api/url'
import http from '../../api/http'
export default {
  namespaced: true,
  state: {
    singers: [],
    songs: [],
    login: true,
  },
  mutations: {
    setSinger(state, payload) {
      state.singers = payload
    },
    pushSinger(state, payload) {
      state.singers.push(...payload)
    },
    setSongs(state, payload) {
      state.songs = payload
    },
    setlogin(state, payload) {
      state.login = payload
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

    async requestSingList(context, payload) {
      context.commit('setlogin', true)
      const {
        data: { songs },
      } = await http.get(SING_LIST_API, payload)
      console.log(songs)
      const newData = songs.map(({ id, name, ar, al }) => ({
        id,
        name,
        img: al.picUrl,
        singer: ar.map(
          ({ name }) =>
            ({
              name,
            }.name)
        ),
      }))
      context.commit('setSongs', newData)
      context.commit('setlogin', false)
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
