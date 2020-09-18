<template>
  <div>
    <div class="singers page">
      <type v-model="arr" :arr="arr"></type>
      <list :sing="singers" v-model="arr" :reset="top" @changetop="ctop"></list>
    </div>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import list from '../components/singers/list'
import type from '../components/singers/type'
export default {
  components: {
    list,
    type,
  },
  watch: {
    'arr.type'() {
      this.arr.offset = 0
    },
    'arr.initial'() {
      this.arr.offset = 0
    },
    arr: {
      handler() {
        if (this.arr.offset !== 0) {
          this.push(this.arr)
          return
        }
        this.req(this.arr)
        this.top = true
      },
      deep: true,
    },
  },
  data() {
    return {
      top: false,
      arr: { type: '', area: '', initial: '', offset: 0 },
    }
  },
  computed: {
    ...mapState({
      singers: (state) => state.singers.singers,
    }),
  },
  created() {
    this.$store.dispatch('singers/requestSingerList')
  },
  methods: {
    ...mapActions({
      req: 'singers/requestSingerList',
      push: 'singers/pushSingerList',
    }),
    reset(bl) {
      this.up = bl
    },
    ctop(bl) {
      this.top = bl
    },
  },
}
</script>

<style></style>
