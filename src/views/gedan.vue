<template>
  <div class="gedan page" v-if="!load">
    <header class="header">
      <div class="cover" ref="cover"></div>
      <div class="span">
        <span ref="ico" class="iconfont icon-fanhui" @click="prev"></span>
        <span ref="title" class="text">{{
          showTitle ? gedannews.name : '歌单'
        }}</span>
      </div>
    </header>
    <scroll
      :upscroll="false"
      class="content"
      :handleScroll="handleScrollAction"
    >
      <div class="top">
        <div
          class="cover"
          :style="{ backgroundImage: `url(${gedannews.coverImgUrl})` }"
        ></div>
        <div class="img">
          <div class="sing">
            <img :src="gedannews.coverImgUrl" alt="" />
            <div class="count">
              <span class="iconfont icon-headset"></span>
              <span>{{ gedannews.subscribedCount | formatter }}</span>
            </div>
          </div>

          <div class="title">
            <span>{{ gedannews.name }}</span>
            <div>
              <img class="create" :src="gedannews.creator.avatarUrl" alt="" />
              <i>{{ gedannews.creator.nickname }}</i>
            </div>
          </div>
        </div>
        <div class="handler">
          <span class="iconfont icon-pinglun"><i>评论</i></span>
          <span class="iconfont icon-xihuan1"><i>点赞</i></span>
          <span class="iconfont icon-tianjia"><i>收藏</i></span>
          <span class="iconfont icon-youcecaidan"><i>更多</i></span>
        </div>
      </div>
      <singlist
        :count="gedannews.subscribedCount"
        :data="gedannews.tracks"
      ></singlist>
    </scroll>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      showTitle: false,
    }
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
  created() {
    console.log(this.$route.params.id)
    this.gedan({ id: this.$route.params.id })
  },
  methods: {
    ...mapActions({
      gedan: 'gedan/requestGedan',
    }),
    prev() {
      this.$router.go(-1)
    },
    handleScrollAction({ y }) {
      console.log(y)
      let num = -y / 200
      if (num >= 1) {
        num = 1
        this.showTitle = true
        this.$refs.ico.classList.add('act')
        this.$refs.title.classList.add('move')
      } else {
        this.showTitle = false
        this.$refs.ico.classList.remove('act')
        this.$refs.title.classList.remove('move')
      }
      this.$refs.cover.style.opacity = num
    },
  },
  computed: {
    ...mapState({
      gedannews: (state) => state.gedan.gedan,
      load: (state) => state.gedan.gedanloading,
    }),
  },
}
</script>

<style scoped lang="scss">
@keyframes move {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
.move {
  animation: move 8s linear infinite;
}

@import '../assets/global-style.scss';
.gedan {
  z-index: 10;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: white;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
}
.header {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 16px;
  color: $font-color-light-v2;
  position: relative;
  height: 44px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  .span {
    position: absolute;
    z-index: 5;
    width: 100%;
    display: flex;

    .iconfont {
      display: block;
      font-size: 20px;
      z-index: 5;
    }
    .act {
      display: block;
      // height: 20px;
      width: 30px;
      margin-left: 0;
      padding-left: 10px;
      // line-height: 30px;
      background-color: $theme-color;
    }
    .text {
      display: block;
      width: 100%;
    }
    span {
      margin: 0px 10px;
    }
  }
  .cover {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;

    background: $theme-color;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}
.top {
  position: relative;
  width: 100%;
  height: 275px;
  .cover {
    background-size: 120%;
    background-position: center;
    width: 100%;
    height: 100%;
    filter: blur(30px);
    position: absolute;
    z-index: -2;
  }

  box-sizing: border-box;
  .img {
    padding: 10px;
    padding-top: 44px;
    position: absolute;
    width: 100%;
    height: 140px;
    display: flex;

    .sing {
      width: 120px;
      height: 120px;
      position: relative;
      padding-top: 20px;
      img {
        width: 120px;
        height: 120px;
      }
      .count {
        color: $font-color-light-v2;
        position: absolute;
        top: 20px;
        right: 0px;
      }
    }
    .title {
      padding: 20px 25px;
      height: 100px;

      img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 5px;
      }
      span {
        display: block;
        font-size: 18px;
        color: rgb(241, 241, 241);
        line-height: 22px;
        margin-bottom: 40px;
        font-weight: 700;
      }
      i {
        color: $font-color-desc-v2;
        font-size: 14px;
      }
    }
  }
}
.handler {
  position: absolute;
  top: 195px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 75px;
  color: white;
  .iconfont {
    font-size: 20px;
    i {
      font-size: 14px;
    }
  }
  span {
    display: flex;
    height: 30px;
    flex-direction: column;
    align-items: center;
  }
}
</style>
