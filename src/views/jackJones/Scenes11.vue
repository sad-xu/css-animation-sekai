<template>
  <div>
    <div class="black-round"></div>
    <div class="line-wrapper">
      <div class="red-round"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .black-round {
    position: absolute;
    top: 50%;
    left: 64%;
    width: 14.5%;
    height: $j-ratio * 14.5%;
    transform: translateX(-50%) translateY(-50%) scale(0);
    background-color: $j-black;
    border-radius: 50%;
  }

  .line-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    transform: rotate(45deg) translateY(-18%) translateX(-28%);
    .red-round {
      position: absolute;
      top: 50%;
      left: 36%;
      width: 32%;
      height: $j-ratio * 32% / 2;
      transform: translateX(-12%) translateY(-18%) scale(0);
      background-color: $j-red;
      border-radius: 50%;
    }
    .line {
      position: absolute;
      top: 0;
      height: 100%;
      width: 7%;
      background-color: $j-black;
      transform-origin: left;
      transform: scaleX(0);
    }
    .line:nth-child(3) {
      z-index: -1;
    }
    @for $i from 1 through 8 {
      .line:nth-child(#{$i}) {
        left: ($i - 1) * 15%;
      }
    }
  }

  // animation 1199 - 1324  125
  .black-round {
    animation: black-round-scale 125 * 16ms forwards;
  }
  .line-wrapper {
    .red-round {
      animation: red-round-scale 125 * 16ms forwards;
    }
     @for $i from 1 through 8 {
      .line:nth-child(#{$i}) {
        animation: line-scale 125 * 16ms   (9 - $i)  * 5 * 16ms forwards;
      }
    }
  }

  @keyframes line-scale {
    50% {
      transform-origin: left;
      transform: scaleX(1);
    }
    51% {
      transform-origin: right;
      transform: scaleX(1);
    }
    80%, 100% {
      transform-origin: right;
      transform: scaleX(0);
    }
  }
  @keyframes red-round-scale {
    50%, 100% {
      transform: translateX(-12%) translateY(-18%) scale(1);
    }
  }
  @keyframes black-round-scale {
    25% {
      transform: translateX(-50%) translateY(-50%) scale(0);
    }
    80% {
      transform: translateX(-50%) translateY(-50%) scale(1);
    }
    100% {
      transform: translateX(-50%) translateY(-50%) scale(0);
    }
  }
</style>
