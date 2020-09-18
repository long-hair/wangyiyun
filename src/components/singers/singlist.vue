<template>
  <div class="singlist" v-if="!login">
    <div class="control">
      <span ref="ico" class="iconfont icon-fanhui" @click="prev"></span>
      <span>{{ song[0].singer[0] }}</span>
    </div>

    <header ref="head" :style="{ backgroundImage: `url(${src})` }"></header>
    <div class="wrap">
      <div class="cover"></div>
      <scroll
        class="contentWrap"
        :upscroll="true"
        :handleScroll="handleScrollAction"
      >
        <div class="content">
          <div ref="sc" class="sc">
            + 收藏
          </div>
          <li>
            <span class="iconfont icon-bofang">播放全部</span>
            <span>(共{{ song.length }}首)</span>
          </li>
          <ul>
            <li v-for="(item, index) in song" :key="index" @click="play(item)">
              <label for="">{{ index + 1 }}</label>
              <div class="singname">
                <h3>{{ item.name }}</h3>
                <span>
                  <i v-for="(i, index) in item.singer" :key="index">
                    {{ i }}
                    <span v-show="index + 1 !== item.singer.length">/</span>
                  </i>
                  -{{ item.name }}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      src: unescape(this.$route.params.src),
    }
  },
  computed: {
    ...mapState({
      song: (state) => state.singers.songs,
      login: (state) => state.singers.login,
    }),
  },
  created() {
    this.list({ id: this.$route.params.id })
  },
  methods: {
    ...mapActions({
      list: 'singers/requestSingList',
      singcontent: 'plays/requestSing',
      pageload: 'plays/requestPageLoad',
    }),

    prev() {
      this.$router.go(-1)
    },
    play(item) {
      this.singcontent(item)
      this.pageload(true)
    },

    handleScrollAction({ y }) {
      if (y > 0) {
        // console.log(y)

        const a = y / 400
        this.$refs.head.style.transform = `scale(${1 + a})`
        console.log(this.he)
      }
      if (y < 0) {
        let op = 1 + y / 100
        if (op == 0) {
          op == 0
        }

        this.$refs.sc.style.opacity = op
      }
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss">
@import '../../assets/global-style.scss';
// .cover {
//   position: absolute;
//   bottom: 0;
//   top: 400px;
//   width: 100%;
//   background-color: white;
// }
.wrap {
  position: absolute;
  top: 44px;
  bottom: 0px;
  left: 0;
  right: 0;
  z-index: 15;
}
.sc {
  width: 120px;
  height: 40px;
  border-radius: 20px;
  background-color: rgb(212, 68, 57);
  position: absolute;
  // top: 200px;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  text-align: center;
  font-size: 20px;
  line-height: 40px;
  color: white;
}
.control {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  font-size: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  span {
    line-height: 44px;
    margin: 5px;
  }
}
.contentWrap {
  height: 100%;
}
.singlist {
  position: absolute;
  z-index: 15;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgb(0, 0, 0, 0.3);
}
header {
  width: 100%;
  height: 280px;
  background-size: cover;
  transform-origin: top center;
  // position: absolute;
  // z-index: 5;
}

.content {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: white;
  margin-top: 220px;
  li {
    box-sizing: border-box;
    height: 40px;
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
