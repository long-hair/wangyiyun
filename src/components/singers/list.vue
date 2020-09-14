<template>
  <div class="wrap">
    <scroll :arr="arr" :up="true" @add="add" class="content">
      <ul>
        <li v-for="item in sing">
          <img :src="item.img1v1Url" alt="" />
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
    arr: Object,
  },
  data() {
    return {
      data: '',
    }
  },
  methods: {
    add(num) {
      console.log(num)
      this.data = this.arr
      this.data.offset = num
      this.$emit('input', this.data)
    },
  },
}
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  position: absolute;
  top: 45px;
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
        display: block;
        margin-right: 20px;
      }
    }
  }
}
</style>
