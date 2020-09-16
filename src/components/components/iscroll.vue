<template>
  <div class="scroll-wrap" ref="scroll">
    <div :class="{ 'scroll-content': true, scrollX: scrollX }">
      <slot />

      <div class="uprefresh" ref="up" v-if="up">
        <img ref="img" :class="{ turn: tu }" :src="img" alt="" />
        <span ref="title">{{ upt }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import loadi from '../../assets/load.gif'
import upi from '../../assets/up.png'
export default {
  props: {
    scrollX: Boolean,
    up: Boolean,
    arr: Object,
    reset: Boolean,
  },
  data() {
    return {
      tu: false,
      show: false,
      img: upi,
      upi: upi,
      loadi: loadi,
      upt: '上滑刷新',
      max: '',
    }
  },
  watch: {
    reset: {
      handler() {
        if (this.reset) {
          console.log(4545)
          this.scroll.scrollTo(0, 0, 0)
          // this.reset = false
          this.$emit('input', false)
        }
        deep: true
        immediate: true
      },
    },
  },
  mounted() {
    const scroll = new IScroll(this.$refs.scroll, {
      click: true,
      tap: true,
      probeType: 3,
      scrollX: this.scrollX,
    })

    scroll.on('beforeScrollStart', () => {
      scroll.refresh()
    })
    /* *********上滑刷新************* */
    scroll.on('scroll', () => {
      let y = scroll.y
      this.max = scroll.maxScrollY
      let max = this.max

      if (y - max > 0 && y - max < 50) {
        this.tu = false

        this.upt = '上滑刷新'
        this.img = this.upi
      } else if (y - max < 0) {
        this.upt = '释放刷新'
        this.tu = true
      }
    })
    scroll.on('scrollEnd', () => {
      let y = scroll.y
      scroll.refresh()
      let max = this.max
      if (y - max > 0 && y - max < 100) {
        scroll.scrollTo(0, max + 100, 300)
      } else if (y - max == 0) {
        this.img = loadi
        this.upt = '正在加载'
        if (this.arr) {
          this.$emit('add', this.arr.offset + 30)
        }
      }
    })
  },
}
</script>

<style scoped lang="scss">
.scrollX {
  min-width: 120%;
  max-width: 8000%;
  float: left;
}
.scroll-wrap {
  height: 100%;
  overflow: hidden;
}
.uprefresh {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 20px;
    height: 20px;
    transition: 300ms;
  }
  .turn {
    transform: rotate(180deg);
  }
  span {
    font-size: 20px;
  }
}
</style>
