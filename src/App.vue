<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style>
.page {
  width: 100%;
  position: absolute;
  top: 90px;
  bottom: 0;
  left: 0;
}
@keyframes fly-in {
  0% {
    transform: rotate(30deg) translateX(100%);
  }
  100% {
    transform: rotate(0) translateX(0);
  }
}
.fly-in {
  transform-origin: right bottom;
  animation: fly-in 300ms ease-in;
}
@keyframes fly-out {
  0% {
    transform: rotate(0) translateX(0);
  }
  100% {
    transform: rotate(30deg) translateX(100%);
  }
}
.fly-out {
  transform-origin: right bottom;
  animation: fly-out 300ms ease-in;
}
</style>
