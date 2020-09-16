import { BANNER_API, RECOMMEND_LIST_API } from '../../api/url'
import http from '../../api/http'
export default {
  namespaced: true,
  state: {
    banner: [],
    recommend: [],
  },
  mutations: {
    setBanner(state, payload) {
      state.banner = payload
    },
    setRecommend(state, payload) {
      state.recommend = payload
    },
  },
  actions: {
    async requestBannerList(context) {
      const {
        data: { banners },
      } = await http.get(BANNER_API)
      const newData = banners.map((item) => item.imageUrl)
      context.commit('setBanner', newData)
    },
    async requestRecommendList(context) {
      const {
        data: { result },
      } = await http.get(RECOMMEND_LIST_API)
      const newData = result.map(({ id, name, picUrl, playCount }) => ({
        id,
        name,
        picUrl,
        playCount,
      }))
      context.commit('setRecommend', newData)
    },
  },
}
