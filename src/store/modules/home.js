import { BANNER_API, RECOMMEDN_LIST_API } from '../../api/url'
import http from '../../api/http'
export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async requestBannerList() {
      const result = await http.get(BANNER_API)
      console.log(result)
    },
    async requestRecommendList() {
      const result = await http.get(RECOMMEDN_LIST_API)
      console.log(result)
    },
  },
}
