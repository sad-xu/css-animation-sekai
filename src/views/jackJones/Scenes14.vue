<template>
  <div>
    <div class="bg-box"></div>
    <div class="window"></div>
    <span class="text">
      JCK<br>JNS
    </span>
    <div class="round"></div>
  </div>
</template>

<style lang="scss" scoped>
  .bg-box {
    @include center;
    width: 71%;
    height: 71% * $j-ratio;
    border: 4em solid $j-black;
    transform: translateX(-50%) translateY(-50%) rotate(32deg) scale(1.3);
    &:before, &:after {
      @include center;
      content: '';
      box-sizing: border-box;
      border: 4em solid $j-black;
    }
    &:before {
      width: 80%;
      height: 80%;
    }
    &:after {
      width: 30em;
      height: 30em;
    }
  }

  .window {
    @include center;
    width: 80%;
    height: 80% * $j-ratio;
    border: 15em solid $j-black;
    &:after {
      @include center;
      content: '';
      width: 13em;
      height: 13em;
      border: 20em solid $j-black;
    }
  }

  .text {
    @include center;
    font-size: 8.5em;
    line-height: 0.9em;
    font-weight: bold;
    color: $j-black;
    transform: translateX(-50%) translateY(-50%) scale(0.8);
  }

  .round {
    position: absolute;
    top: 28.3%;
    left: 60%;
    width: 6.5%;
    height: 6.5% * $j-ratio;
    border-radius: 100%;
    background-color: $j-red;
  }

  // animation 1515 - 1594 80
  .bg-box {
    animation: rotate-bg-box 80 * 16ms forwards;
    &:before {
      animation: rotate-bg-before 80 * 16ms forwards;
    }
    &:after {
      animation: rotate-bg-after 80 * 16ms forwards;
    }
  }

  .window {
    animation: move-window 80 * 16ms forwards;
    &:after {
      animation: move-window-after 80 * 16ms forwards;
    }
  }

  .text {
    animation: scale-text 80 * 16ms forwards;
  }
  .round {
    animation: move-round 80 * 16ms forwards;
  }

  @keyframes rotate-bg-box {
    60% {
      transform: translateX(-50%) translateY(-50%) rotate(45deg) scale(1);
    }
    100% {
      transform: translateX(-50%) translateY(-50%) rotate(45deg) scale(1.3);
      border-width: 19em;
    }
  }
  @keyframes bg-box-before {
    60% {
      border-width: 4em;
    }
    100% {
      border-width: 7em;
    }
  }
  @keyframes bg-box-after {
    60% {
      transform: translateX(-50%) translateY(-50%) scale(1);
      border-width: 4em;
    }
    100% {
      transform: translateX(-50%) translateY(-50%) scale(0.8);
      border-width: 6em;
    }
  }

  @keyframes move-window {
    60% {
      width: 70%;
      height: 70% * $j-ratio;
      border-width: 4em;
    }
    100% {
      width: 103%;
      border-width: 4em;
    }
  }
  @keyframes move-window-after {
    60% {
      box-sizing: content-box;
      border-width: 4em;
    }
    61% {
      box-sizing: border-box;
      width: 30em;
      height: 30em;
      border-width: 4em;
    }
    100% {
      box-sizing: border-box;
      width: 30em;
      height: 30em;
      border-width: 11em;
    }
  }

  @keyframes scale-text {
    60% {
      transform: translateX(-50%) translateY(-50%) scale(1);
    }
    100% {
      transform: translateX(-50%) translateY(-50%) scale(0.5);
    }
  }

  @keyframes move-round {
    60% {
      left: 22.5%;
    }
    100% {
      left: 46%;
      top: 44%;
    }
  }
</style>
