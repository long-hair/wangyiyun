<template>
  <div id="home">
    <header>
      <span class="iconfont icon-caidan"></span>
      <h1 class="title">云音乐</h1>
      <span class="iconfont icon-41"></span>
    </header>
    <nav class="menu">
      <router-link class="menu-item" to="/recommend">
        <span>推荐</span>
      </router-link>
      <router-link class="menu-item" to="/singers">
        <span>歌手</span>
      </router-link>
      <router-link class="menu-item" to="/rank">
        <span>排行榜</span>
      </router-link>
    </nav>

    <play class="pl" v-if="pageload"> </play>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      pageload: (state) => state.plays.pageload,
    }),
  },
  data() {
    return {}
  },
  methods: {
    ...mapMutations({}),
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
@import '../assets/global-style.scss';

header {
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background-color: $theme-color;
  color: $font-color-light;
  font-size: 20px;
  position: relative;
  z-index: 10;

  span {
    line-height: 40px;
  }
  .iconfont {
    font-size: 25px;
  }
}
.menu {
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  display: flex;
  background-color: $theme-color;
  align-items: center;
  justify-content: space-around;
  .menu-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    color: $font-color-light;
    text-align: center;

    &.router-link-active {
      font-weight: 700;
      span {
        border-bottom: 2px solid $font-color-light;
      }
    }
    span {
      padding-bottom: 3px;
      border-bottom: 2px solid $theme-color;
    }
  }
}
.pl {
  position: absolute;
  // background: red;
  z-index: 2000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
