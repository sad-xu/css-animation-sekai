<template>
  <div>
    <div class="logo">
      <span>JACK﹠JONES</span>
      <span class="trademark">®</span>
    </div>
    <div class="line-bg">
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
  .logo {
    @include center;
    font-weight: bold;
    font-style: italic;
    font-size: 8em;
    white-space: nowrap;
    .trademark {
      position: relative;
      top: -1.8em;
      font-size: 0.3em;
      right: -0.8em;
      font-style: initial;
    }
  }

  .line-bg {
    position: absolute;
    width: 200%;
    height: 100%;
    transform-style: preserve-3d;
    perspective: 100px;
    .line {
      position: absolute;
      width: 500%;
      height: 7.7%;
      background-color: $j-black;
    }
    @for $i from 1 through 7 {
      .line:nth-child(#{$i}) {
        top: 15.4% * ($i - 1);
      }
    }
  }

  // animation 350 - 628   278
  .line-bg {
    animation: wave 278 * 16ms 0s forwards;
    @for $i from 1 through 7 {
      .line:nth-child(#{$i}) {
        animation: wave-line-#{$i} 278 * 16ms 0s forwards;
      }
    }
  }

  @keyframes wave {
    0% {
      left: 0;
      perspective: 50px;
    }
    50% {
      left: -50%;
      perspective: 50px;
    }
    100% {
      left: -100%;
      perspective: 100px;
    }
  }
  @for $i from 1 through 7 {
    @keyframes wave-line-#{$i} {
      0% {

      }
      50% {
        transform: rotateY(abs($i - 4deg) / 2) rotateX(50deg);
      }
      100% {
        transform: rotateY(abs($i - 4deg) / -2) rotateX(0deg);
      }
    }
  }
</style>
