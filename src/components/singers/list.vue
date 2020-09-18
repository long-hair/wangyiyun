<template>
  <div class="wrap">
    <scroll
      :arr="value"
      :reset="reset"
      v-model="rese"
      :up="true"
      @add="add"
      class="content"
      :upscroll="true"
    >
      <ul>
        <li v-for="item in sing" :key="item.id" @click="goAction(item)">
          <img :src="item.picUrl" alt="" />
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
export default {
  props: {
    sing: Array,
    value: Object,
    reset: Boolean,
  },
  data() {
    return {
      data: '',
      rese: false,
    }
  },
  watch: {
    reset: {
      handler() {
        // if (!this.reset) {
        //   return
        // }
        this.rese = this.reset
      },
      immediate: true,
    },
    rese() {
      if (this.rese) {
        return
      }
      this.change(this.rese)
    },
  },
  methods: {
    add(num) {
      this.data = this.value
      this.data.offset = num
      this.$emit('input', this.data)
    },
    change(bl) {
      this.$emit('changetop', bl)
    },
    goAction(item) {
      this.$router.push({
        name: 'singlist',
        params: { id: item.id, src: item.picUrl },
      })
    },
  },
}
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  position: absolute;
  top: 58px;
  bottom: 0;
  .content {
    width: 100%;
    height: 100%;
  }
  ul {
    width: 100%;
    li {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        display: block;
        margin-right: 20px;
      }
    }
  }
}
</style>
