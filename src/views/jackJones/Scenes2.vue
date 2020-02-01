<template>
  <div>
    <div class="ring-1"></div>
    <div class="ring-2"></div>
    <div class="ring-3"></div>
    <div class="ring-4"></div>
    <div class="round"></div>
    <div class="cube"></div>
    <div class="sun">
      <div></div><div></div><div></div>
      <div></div><div></div><div></div>
      <div></div><div></div><div></div>
    </div>
    <div class="ball-1"></div>
    <div class="ball-2"></div>
  </div>
</template>

<style lang="scss" scoped>
  .ring-1, .ring-2, .ring-3, .ring-4 {
    @include center;
    border-radius: 100%;
    border: 4em solid $j-black;
  }
  .ring-1 {
    width: 25%;
    height: $j-ratio * 25%;
    background-color: $j-white;
  }
  .ring-2 {
    width: 40%;
    height: $j-ratio * 40%;
    opacity: 0;
  }
  .ring-3 {
    width: 55%;
    height: $j-ratio * 55%;
    opacity: 0;
  }
  .ring-4 {
    width: 70%;
    height: $j-ratio * 70%;
    opacity: 0;
  }

  .round {
    @include center;
    box-sizing: content-box;
    width: 9%;
    height: $j-ratio * 9%;
    background-color: $j-red;
    border-radius: 100%;
    border: 4.5em solid $j-white;
    opacity: 0;
    z-index: 2;
  }

  .cube {
    @include center;
    width: 77%;
    height: 5.8em;
    background-color: $j-white;
    z-index: 1;
    opacity: 0;
    &:before, &:after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 4em;
      background-color: $j-black;
    }
    &:before { top: -1px; }
    &:after { bottom: -1px; }
  }

  .sun {
    opacity: 0;
    div {
      position: absolute;
      width: 100%;
      height: 1.2em;
      background-color: $j-white;
    }
    @for $i from 1 through 9 {
      div:nth-child(#{$i}) {
        top: 12.5% + 9.375% * ($i - 1);
        transform: rotate($i * -2 + 10deg);
      }
    }
  }

  .ball-1, .ball-2 {
    position: absolute;
    border-radius: 100%;
    background-color: $j-red;
    opacity: 0;
  }
  .ball-1 {
    top: 50%;
    left: 50%;
    width: 5.6%;
    height: $j-ratio * 5.6%;
    transform: translateY(-50%);
  }
  .ball-2 {
    top: 50%;
    left: 40%;
    width: 9.6%;
    height: $j-ratio * 9.6%;
  }

  // animation 46-214
  .ring-1 {
    animation:
      hide-it 1ms 18 * 16ms forwards,
      show-it 1ms 32 * 16ms forwards,
      ring-scale 80 * 16ms linear 80 * 16ms forwards;
  }
  .ring-2 {
    animation:
      show-it 1ms 8 * 16ms forwards,
      hide-it 1ms 22 * 16ms forwards,
      show-it 1ms 40 * 16ms forwards,
      ring-scale 80 * 16ms linear 80 * 16ms forwards;
  }
  .ring-3 {
    animation:
      show-it 1ms 15 * 16ms forwards,
      hide-it 1ms 26 * 16ms forwards,
      show-it 1ms 47 * 16ms forwards,
      ring-scale 80 * 16ms linear 80 * 16ms forwards;
  }
  .ring-4 {
    animation:
      show-it 1ms 55 * 16ms forwards,
      hide-it 1ms 80 * 16ms forwards;
  }
  .round {
    animation:
      show-it 1ms 26 * 16ms forwards,
      hide-it 1ms 80 * 16ms forwards;
  }
  .cube {
    animation:
      show-it 1ms 32 * 16ms forwards,
      cube-higher 25 * 16ms cubic-bezier(1, 0, 1, 1)  55 * 16ms forwards,
      hide-it 1ms 80 * 16ms forwards;
  }
  .sun {
    animation: show-it 1ms 80 * 16ms forwards;
  }
  .ball-1 {
    animation: ball-1-move 80 *16ms 80 * 16ms forwards;
  }
  .ball-2 {
    animation: ball-2-move 80 *16ms  80 * 16ms forwards;
  }
  // 80

  @keyframes show-it {
    to { opacity: 1; }
  }
  @keyframes hide-it {
    to { opacity: 0; }
  }
  @keyframes cube-higher {
    to { height: 12.8em }
  }
  @keyframes ring-scale {
    0% {
      transform: translateX(-50%) translateY(-50%) scale(1.2);
      border-width: (4em / 1.2);
    }
    10% {
      transform: translateX(-50%) translateY(-50%) scale(1.5);
      border-width: (4em / 1.5);
    }
    75% {
      transform: translateX(-50%) translateY(-50%) scale(1.5);
      border-width: (4em / 1.5);
    }
    95% {
      transform: translateX(-50%) translateY(-50%) scale(1.2);
      border-width: (4em / 1.2);
    }
    100% {
      transform: translateX(-50%) translateY(-50%) scale(0.9);
      border-width: (4.5em / 0.9);
    }
  }
  @keyframes ball-1-move {
    0% {
      opacity: 1;
    }
    95% {
      left: 60%;
      opacity: 1;
    }
    100% {
      left: 54%;
      opacity: 1;
    }
  }
  @keyframes ball-2-move {
    0% {
      opacity: 1;
    }
    95% {
      top: 68%;
      left: 25%;
      opacity: 1;
    }
    100% {
      top: 58%;
      left: 30%;
      opacity: 1;
    }
  }
</style>
