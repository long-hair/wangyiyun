<template>
  <div class="playbox">
    <transition enter-active-class="moveUp" leave-active-class="moveDown">
      <header v-if="show">
        <span class="iconfont icon-jiantou1 sup" @click="showchange"></span>
        <div class="title">
          <h3>{{ sing.name }}</h3>
          <span v-for="(item, index) in sing.singer" :key="index">
            {{ item }}
            <i v-if="sing.singer.length !== index + 1">/</i>
          </span>
        </div>
      </header>
    </transition>
    <!-- <transition enter-active-class="moveUp" leave-active-class="moveDown"> -->
    <div class="center">
      <div class="cd">
        <img ref="myImg" class="my-img" :src="sing.img" alt="" />
      </div>
    </div>
    <!-- </transition> -->
    <transition enter-active-class="moveUp" leave-active-class="moveDown">
      <div class="control" v-if="show">
        <div class="speed">
          <label for="">倍速听歌:</label>
          <li
            v-for="(item, index) in speed"
            :key="index"
            :class="{ active: index == speedIndex }"
            @click="act(index)"
          >
            x{{ item }}
          </li>
        </div>
        <div class="bar"></div>
        <div class="btn">
          <span
            class="iconfont"
            :class="{
              'icon-shunxubofang': playPattern == 1,
              'icon-danquxunhuan1': 2 == playPattern,
              'icon-suiji': 3 == playPattern,
            }"
          ></span>
          <span class="iconfont icon-shangyiqu101"></span>
          <span
            class="iconfont  play"
            :class="playBl ? iconplay : iconstop"
          ></span>
          <span class="iconfont icon-xiayiqu101"></span>
          <span class="iconfont icon-liebiao"></span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import animations from 'create-keyframe-animation'
export default {
  props: {
    sing: Object,
    singText: Object,
    value: Boolean,
  },
  data() {
    return {
      speed: [0.75, 1, 1.25, 1.5, 2],
      speedIndex: 1,
      iconplay: 'icon-zanting1',
      iconstop: 'icon-stop',
      show: false,
      playBl: true,
      playPattern: 1,
    }
  },
  mounted() {
    this.show = !this.show
    const { x, y, scale } = this.getPositionAndScale()
    const animation = {
      0: {
        transform: `translate(${-x}px, ${y}px) scale(${scale})`,
      },
      100: {
        transform: `translate(0, 0) scale(1)`,
      },
    }

    // this creates the animation above
    animations.registerAnimation({
      name: 'cd-enter-ani',
      // the actual array of animation changes
      animation: animation,
      // optional presets for when actually running the animation
      presets: {
        duration: 3000,
        easing: 'cubic-bezier(0.35, 0.46, 0.63, 1.32)',
      },
    })
    animations.runAnimation(this.$refs.myImg, 'cd-enter-ani', function() {
      // callback gets called when its done
      console.log('结束')
    })
  },
  methods: {
    showchange() {
      this.show = !this.show

      setTimeout(() => {
        this.$emit('input', true)
      }, 310)
    },
    act(index) {
      this.speedIndex = index
    },
    getPositionAndScale() {
      //计算cd偏移量
      let x1 = 60
      let x2 = document.documentElement.offsetWidth / 2
      let x = x2 - x1
      let y1 = 60
      let y2 = (document.documentElement.offsetHeight - 450) / 2 + 320
      let y = y2 - y1
      const scale = 80 / 360
      return { x, y, scale }
    },
  },
}
</script>

<style scoped lang="scss">
.my-img {
  position: absolute;
  z-index: 10000;
}
@import '../../../assets/global-style.scss';
@keyframes Up {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}
.moveUp {
  animation: Up 300ms cubic-bezier(0.35, 0.46, 0.63, 2);
}
@keyframes moveDown {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
.moveDown {
  animation: moveDown 300ms ease-in;
}

.playbox {
  width: 100%;
  height: 100%;
  background-color: blue;
  position: absolute;
  z-index: 200;
  header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 5px;
    background-color: red;
    height: 55px;
    z-index: 2000;

    .sup {
      font-size: 24px;
      display: inline-block;
      transform: rotate(90deg);
    }
    .title {
      flex: auto;
      font-size: 14px;
      padding-left: 10px;
      color: $font-color-desc-v2;
      h3 {
        color: $font-color-desc;
        font-size: 16px;
      }
    }
  }
  .center {
    position: absolute;
    top: 55px;
    width: 100%;
    background: orange;
    bottom: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    .cd {
      box-sizing: border-box;
      width: 270px;
      height: 270px;
      border-radius: 50%;
      border: 45px solid black;
      img {
        border-radius: 50%;

        width: 180px;
        height: 180px;
      }
    }
  }
  .control {
    position: absolute;
    bottom: 0;
    height: 160px;
    width: 100%;
    background: chartreuse;
    display: flex;
    flex-direction: column;
    align-items: center;
    .speed {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      color: $font-color-desc-v2;
      .active {
        border: 1px solid $theme-color;
        border-radius: 40%;
      }

      li {
        margin-top: 5px;
        padding: 5px;
        border: 1px solid transparent;
        font-size: 14px;
      }
    }
    .bar {
      margin-top: 5px;
      width: 300px;
      height: 50px;
      background: turquoise;
    }
    .btn {
      box-sizing: border-box;
      padding: 0 10px;
      margin-top: 10px;
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $font-color-desc;
      .play {
        font-size: 26px;
        width: 30px;
        height: 30px;
        padding: 5px;
        border-radius: 50%;
        margin: 0 30px;
        border: 1px solid $font-color-desc;
        text-align: center;
        line-height: 30px;
      }
      span {
        // flex: auto;
        margin: 0 10px;
        text-align: center;
        font-size: 30px;
      }
    }
  }
}
</style>
