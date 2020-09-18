<template>
  <div>
    <div class="rank page">
      <global-a :offical="offical" :global="global"> </global-a>
    </div>
    <transition enter-active-class="fly-in" leave-active-class="fly-out">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import glob from '../components/rank/global'
export default {
  components: {
    'global-a': glob,
  },
  created() {
    this.$store.dispatch('all/requestAll')
  },
  computed: {
    ...mapState({
      offical: (state) => state.all.offical,
      global: (state) => state.all.global,
    }),
  },
}
</script>

<style>
.page {
  /* position: static; */
}
</style>
