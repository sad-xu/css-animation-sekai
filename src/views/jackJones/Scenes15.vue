<template>
  <div class="stage">
    <div class="red-line"></div>
    <div class="white-line"></div>
    <div class="cube"></div>
    <div class="round"></div>
    <div class="bit bit-1"></div>
    <div class="bit bit-2"></div>
    <div class="stripe-box"></div>
  </div>
</template>

<style lang="scss" scoped>
  .stage {
    background-color: $j-black;
  }

  .red-line {
    position: absolute;
    top: 43%;
    left: 11%;
    width: 73%;
    height: 1em;
    background-color: $j-red;
    transform: rotate(-30deg);
  }
  .white-line {
    position: absolute;
    bottom: 0;
    right: -10%;
    width: 16%;
    height: 5%;
    background-color: $j-white;
  }
  .cube {
    position: absolute;
    top: 58%;
    left: 50%;
    width: 16%;
    height: 16% * $j-ratio;
    border: 1.5em solid $j-white;
    &:after {
      @include center;
      content: '';
      box-sizing: border-box;
      width: 50%;
      height: 50%;
      border: 1.5em solid $j-white;
    }
  }
  .round {
    position: absolute;
    top: 48%;
    left: 55%;
    height: 70%;
    width: 6.4%;
    height: 6.4% * $j-ratio;
    border-radius: 100%;
    background-color: $j-red;
  }
  .bit {
    position: absolute;
    width: 2%;
    height: 10%;
    background-color: $j-white;
    &:after {
      content: '';
      position: absolute;
      top: 33%;
      width: 100%;
      height: 33%;
      background-color: $j-black;
    }
  }
  .bit-1 {
    top: 60.2%;
    left: 30.5%;
  }
  .bit-2 {
    top: 88%;
    left: 85.3%;
  }

  .stripe-box {
    position: absolute;
    top: 8%;
    left: 17%;
    width: 14%;
    height: 44%;
    background-image: repeating-linear-gradient(-45deg, transparent, transparent 2.5em, $j-white 2.5em, $j-white 4em);
    background-size: 108%;
    transition: --linear-width 57 * 16ms;
  }

  // animation 1595 - 1651 57
  .red-line {
    animation: rotate-red-line 57 * 16ms forwards;
  }
  .white-line {
    animation: move-white-line 57 * 16ms forwards;
  }
  .cube {
    animation: scale-cube 57 * 16ms forwards;
  }
  .round {
    animation: move-round 57 * 16ms forwards;
  }
  .bit-1 {
    animation: move-bit-1 57 * 16ms forwards;
  }
  .bit-2 {
    animation: move-bit-2 57 * 16ms forwards;
  }
  .stripe-box {
    animation: move-stripe 57 * 16ms forwards;
  }

  @keyframes rotate-red-line {
    to {
      transform: rotate(-45deg);
    }
  }
  @keyframes move-white-line {
    to {
      right: 13%;
    }
  }
  @keyframes scale-cube {
    to {
      transform: scale(1.5);
    }
  }
  @keyframes move-round {
    to {
      top: 65.5%;
      left: 77%;
    }
  }
  @keyframes move-bit-1 {
    to {
      top: 66%;
    }
  }
  @keyframes move-bit-2 {
    to {
      top: 18%;
    }
  }
  @keyframes move-stripe {
    to {
      left: 32%;
    }
  }

</style>
