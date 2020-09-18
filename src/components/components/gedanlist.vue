<template>
  <div class="singlist">
    <div class="content">
      <li>
        <span class="iconfont icon-bofang">播放全部</span>
        <span class="add">+ 收藏({{ count | formatter }})</span>
      </li>
      <ul>
        <li v-for="(item, index) in data" :key="index">
          <label for="">{{ index + 1 }}</label>
          <div class="singname">
            <h3>{{ item.al.name }}</h3>
            <span>{{ item.ar[0] }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
    count: Number,
  },
  filters: {
    formatter(count) {
      if (count < 10000) {
        //低于一万

        return (count / 10000).toFixed(2) + '万'
      } else if (count < 10000 * 10000) {
        //低于一亿
        return Math.floor(count / 10000) + '万'
      } else {
        //大于一亿
        return Math.floor(count / 10000 / 10000) + '亿'
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../assets/global-style.scss';
.content {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: white;
  li {
    box-sizing: border-box;
    display: block;
    width: 100%;
    padding: 0px 0px 0 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #999;

    .add {
      width: 130px;
      height: 45px;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $theme-color;
      // margin-right: -8px;
      border-radius: 5px;
    }
    .iconfont {
      font-size: 20px;
      width: 100px;
      display: flex;
    }
  }
  ul {
    li {
      height: 60px;
      padding: 5px 0px 0px 8px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border: 0;

      label {
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        font-size: 16px;
      }
      div {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        // padding-bottom: 5px;
        border-bottom: 1px solid #999;
        h3 {
          font-size: 20px;
          color: $font-color-desc;
        }
        span {
          color: $font-color-desc;
        }
      }
    }
  }
}
</style>
