<template>
  <div>
    <transition enter-active-class="moveUp" leave-active-class="moveDown">
      <div class="box" @click="showChange" v-if="show">
        <div class="left">
          <img :src="sing.img" alt="" />
        </div>
        <div class="title">
          <h3>{{ sing.name }}</h3>
          <span v-for="(item, index) in sing.singer" :key="index"
            >{{ item }}<i v-if="sing.singer.length !== index + 1">/</i></span
          >
        </div>
        <div class="right" @click="stop($event)">
          <span
            class="iconfont  play"
            :class="iconchange ? playcon : waitcon"
            @click="change"
          ></span>
          <span class="iconfont icon-liebiao list"></span>
        </div>
      </div>
    </transition>
    <transition enter-active-class="yu" leave-active-class="yd">
      <playS
        class="plays"
        :sing="sing"
        :singText="singText"
        v-model="show"
        v-if="!show"
      >
      </playS>
    </transition>
  </div>
</template>

<script>
import { mapState, maoActions, mapActions } from 'vuex'
import playS from './playcontrol'
export default {
  components: {
    playS,
  },
  data() {
    return {
      show: true,
      playcon: 'icon-zanting1',
      waitcon: 'icon-stop',
      iconchange: true,
      // show: true,
    }
  },
  computed: {
    ...mapState({
      sing: (state) => state.plays.sing,
      pageload: (state) => state.plays.pageload,
      singText: (state) => state.plays.singText,
    }),
  },
  methods: {
    change() {
      this.iconchange = !this.iconchange
    },
    showChange() {
      this.show = !this.show
    },
    stop(ev) {
      ev.stopPropagation()
    },
    ...mapActions({}),
  },
}
</script>

<style scoped lang="scss">
@keyframes Up {
  0% {
    transform: translateY(100%);
  }
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(0);
  }
}
.moveUp {
  animation: Up 300ms linear;
}
@keyframes moveDown {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}
.moveDown {
  animation: moveDown 300ms ease-in;
}
@keyframes yu {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.yu {
  animation: yu 300ms ease-in;
  // animation-name: pd;
  // animation
  // animation-delay: 3000ms;
}
@keyframes yd {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.yd {
  animation: yd 300ms ease-in;
  // animation-name: pd;
  // animation
  // animation-delay: 3000ms;
}

.title {
  width: 100%;
  height: 100%;
  padding-left: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  h3 {
    width: 100%;
    font-size: 14px;
    color: #2e3030;
  }
  span {
    font-size: 12px;
    color: #bba8a8;
  }
}
.box {
  box-sizing: border-box;
  padding: 5px 10px;
  width: 100%;
  height: 60px;
  background-color: white;
  position: absolute;
  bottom: 0;
  z-index: 20000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    // width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      border-radius: 50%;
      width: 40px;
      height: 40px;
    }
  }
  .right {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    span {
      border-radius: 50%;
      padding: 10px;
      margin-left: 10px;
      border: 1px solid yellow;
      font-size: 20px;
      text-align: center;
      color: #d44439;
    }
  }
}
</style>
