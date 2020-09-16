<template>
  <div class="rank page">
    <global-a :offical="offical" :global="global"> </global-a>
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

<style></style>
