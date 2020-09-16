<template>
  <div class="wrap">
    <div class="reconmend page">
      <scroll>
        <banner :data="banners"></banner>
        <reconmend :data="recommends"> </reconmend>
      </scroll>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import banner from '../components/recommend/banner-list'
import reconmend from '../components/recommend/recommend-list'
export default {
  components: {
    banner,
    reconmend,
  },
  computed: {
    ...mapState({
      banners: (state) => state.recommend.banner,
      recommends: (state) => state.recommend.recommend,
    }),
  },
  created () {
    this.$store.dispatch('recommend/requestBannerList')
    this.$store.dispatch('recommend/requestRecommendList')
  },
}
</script>

<style scoped lang="scss">
.wrap {
  // position: absolute;
  // width: 100%;
  // height: 100%;
  // .page {
  //   position: absolute;
  //   top: 0;
  // }
}
</style>
