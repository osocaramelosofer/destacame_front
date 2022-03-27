<template>
  <div class="wave-container">
    <div class="wave -one"/>
    <div class="wave -two"/>
    <div class="wave -three"/>
  </div>
</template>

<style scoped>
.wave-container {
  width: 300vw;
  height: 100%;
  position: fixed;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}

.wave {
  opacity: 1;
  position: absolute;
  top: 60%;
  left: -28%;
  background: #18DFAD;
  width: 100%;
  height: 300vw;
  transform-origin: 50% 49%;
  border-radius: 49%;
  -webkit-animation: drift 5000ms infinite linear;
  animation: drift 7000ms infinite linear;
  will-change: transform;
  /*// z-index: 3;*/
}

.wave.-two {
  animation: drift 10000ms infinite linear;
  opacity: 1;
  background: #2F6690;
  top: 60%;
  left: -32%;
}

.wave.-three {
  animation: drift 4000ms infinite linear;
  opacity: 1;
  /*background: #F12645;*/
  background: #FFB700;
  top: 60%;
  left: -36%;
  z-index: -2;
}

@keyframes drift {
  from {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
}

</style>
