<template>
  <div>
    <div class="viewport">
      <div class="line-box">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>

      <span class="word A">A</span>
      <span class="word J">J</span>
      <span class="word C">C</span>
      <span class="word K">K</span>
      <span class="word E">E</span>
      <span class="word S">S</span>
      <span class="word OO">O</span>
      <span class="word NN">N</span>
      <span class="word JJ">J</span>

      <div class="round"></div>
      <div class="ring"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .viewport {
    height: 100%;
    transform: scale(4);
  }

  .line-box {
    position: absolute;
    top: 20%;
    left: 12.9%;
    width: 75%;
    height: 24%;
    .line {
      position: absolute;
      width: 100%;
      height: 0.3em;
      background-color: $j-black;
    }
    @for $i from 1 through 9 {
      .line:nth-child(#{$i}) {
        top: ($i - 1) * 11%;
        transform: rotate((5 - $i) * 0.6deg);
      }
    }
  }

  .word {
    position: absolute;
    font-size: 20em;
    font-weight: bold;
    color: $j-black;
  }
  .A {
    left: 18%;
    top: 8%;
  }
  .J {
    left: 34%;
    top: 8%;
  }
  .C {
    left: 44%;
    top: 8%;
  }
  .K {
    left: 71%;
    top: 8%;
  }
  .E {
    left: 6%;
    top: 42%;
  }
  .S {
    left: 82%;
    top: 42%;
  }

  .OO, .NN, .JJ {
    width: 1em;
    height: 1em;
    font-family: cursive;
    background-image: radial-gradient($j-black 50%, $j-white 51%);
    background-size: 4% 4%;
    background-clip: text;
    color: transparent;
  }
  .OO {
    left: 32%;
    top: 46%;
    z-index: 6;
  }
  .NN {
    left: 46%;
    top: 46%;
  }
  .JJ {
    left: 58%;
    top: 46%;
  }

  .round {
    position: absolute;
    top: 28%;
    left: 58%;
    width: 7em;
    height: 7em;
    border-radius: 100%;
    background-color: $j-red;
    z-index: 6;
  }
  .ring {
    @include center;
    width: 88% / $j-ratio;
    height: 88%;
    border-radius: 100%;
    border: 3em solid $j-black;
    z-index: 5;
  }

  // animation
  // 1340 - 1375 36
  // 1376 - 1422 47
  // 1423 - 1514  92
  // 0 - 20  21 - 47  48 - 100
  .viewport {
    animation: viewport-scale 175 * 16ms forwards;
  }
  .OO {
    animation: move-OO 175 * 16ms  forwards;
  }
  .NN {
    animation: move-NN 175 * 16ms forwards;
  }
  .J {
    animation: move-J 175 * 16ms forwards;
  }
  .C {
    animation: move-C 175 * 16ms forwards;
  }
  .JJ {
    animation: move-JJ 175 * 16ms forwards;
  }
  .round {
    animation: move-round 175 * 16ms forwards;
  }
  .line-box {
    animation: move-line-box 175 * 16ms forwards;
  }
  .ring {
    animation: resize-ring 175 * 16ms forwards;
  }

  @keyframes viewport-scale {
    20% {
      transform: scale(4);
    }
    21% {
      transform: scale(1.8);
    }
    47% {
      transform: scale(1.8);
    }
    48% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.7);
    }
  }

  @keyframes move-OO {
    20% {
      left: 31%;
    }
    21% {
      left: 32%;
    }
    47% {
      left: 30%;
    }
  }
  @keyframes move-NN {
    20% {
      top: 50%;
    }
    21% {
      top: 54%;
    }
  }
  @keyframes move-J {
    20% {
      left: 32%;
      top: 7%;
    }
  }
  @keyframes move-C {
    20% {
      left: 46%;
      top: 5%;
    }
  }
  @keyframes move-JJ {
    20% {
      left: 58%;
      top: 46%;
    }
    21% {
      left: 60%;
      top: 46%;
    }
  }
  @keyframes move-line-box {
    20% {
      transform: rotateZ(3deg);
    }
  }
  @keyframes resize-ring {
    21% {
      transform: translateX(-50%) translateY(-50%) scale(0.9);
    }
    47% {
      transform: translateX(-50%) translateY(-50%) scale(0.9);
    }
    100% {
      transform: translateX(-50%) translateY(-50%) scale(0.9);
    }
  }
</style>
