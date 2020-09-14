<template>
  <div class="reconmend page">
    <h1>推荐</h1>
    <banner></banner>
    <reconmend> </reconmend>
  </div>
</template>

<script>
import banner from '../components/recommend/banner-list'
import reconmend from '../components/recommend/recommend-list'
export default {
  components: {
    banner,
    reconmend,
  },
  created() {
    this.$store.dispatch('recommend/requestBannerList')
    this.$store.dispatch('recommend/requestRecommendList')
  },
}
</script>

<style></style>
