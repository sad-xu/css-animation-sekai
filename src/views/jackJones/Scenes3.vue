<template>
  <div ckass="stage">
    <div class="cube-line">
      <div></div><div></div>
      <div></div><div></div>
    </div>
    <div class="cube-white"></div>
    <div class="round-red"></div>
    <div class="round-white"></div>
  </div>
</template>

<style lang="scss" scoped>
  .stage {
    background-color: $j-black;
  }
  .cube-line {
    position: absolute;
    top: 8.3%;
    right: 8.5%;
    width: 49%;
    height: 11.25%;
    > div {
      height: 14%;
      margin-bottom: 11.25em * 0.14 / $j-ratio;
      background-color: $j-white;
    }
  }
  .cube-white {
    position: absolute;
    left: 8.5%;
    bottom: 8.3%;
    height: 11.25%;
    width: 49%;
    background-color: $j-white;
  }
  .round-red {
    position: absolute;
    top: 50%;
    left: 23%;
    transform: translateY(-50%);
    width: 8.5%;
    height: $j-ratio * 8.5%;
    border-radius: 100%;
    background-color: $j-red;
  }
  .round-white {
    @include center;
    width: 28%;
    height: $j-ratio * 28%;
    border-radius: 100%;
    background-color: $j-white;
  }

  // animation 215 - 271  56
  .round-white {
    animation: round-simaller 56 * 16ms cubic-bezier(0.79, 0.01, 0.23, 1.02) 0s forwards;
  }
  .cube-line, .cube-white {
    animation: cube-longer 56 * 16ms cubic-bezier(0.79, 0.01, 0.23, 1.02) 0s forwards;
  }

  @keyframes round-simaller {
    to {
      width: 18.2%;
      height: $j-ratio * 18.2%;
    }
  }
  @keyframes cube-longer {
    to {
      width: 83%;
    }
  }
</style>
