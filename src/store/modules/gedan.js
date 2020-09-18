import { GEDAN_LIST_API } from '../../api/url'
import http from '../../api/http'
export default {
  namespaced: true,
  state: {
    gedan: [],
    // recommend: [],
    gedanloading: false,
  },
  mutations: {
    setgedan(state, payload) {
      state.gedan = payload
    },
    setgedanloading(state, payload) {
      state.gedanloading = payload
    },
  },
  actions: {
    async requestGedan(context, payload) {
      context.commit('setgedanloading', true)
      const {
        data: { playlist },
      } = await http.get(GEDAN_LIST_API, payload)

      const obj = {
        //歌单名字
        name: playlist.name,
        //歌单收藏
        subscribedCount: playlist.subscribedCount,
        //歌单图片
        coverImgUrl: playlist.coverImgUrl,
        //创建者信息
        creator: {
          nickname: playlist.creator.nickname,
          avatarUrl: playlist.creator.avatarUrl,
        },
        //歌单歌曲列表
        tracks: playlist.tracks.map((item) => ({
          title: item.name,
          id: item.id,
          //歌手
          ar: item.ar.map((arItem) => arItem.name),
          //专辑
          al: {
            name: item.al.name,
            picUrl: item.al.picUrl,
          },
        })),
      }
      context.commit('setgedan', obj)
      context.commit('setgedanloading', false)
    },
    // async requestRecommendList(context) {
    //   const {
    //     data: { result },
    //   } = await http.get(RECOMMEND_LIST_API)
    // const newData = result.map(({ id, name, picUrl, playCount }) => ({
    //   id,
    //   name,
    //   picUrl,
    //   playCount,
    // }))
    //   context.commit('setRecommend', newData)
    // },
  },
}
