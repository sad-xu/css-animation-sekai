<template>
  <div>
    <div class="left-wrapper">
      <div class="stripe">
        <span class="text">J</span>
        <div></div><div></div><div></div>
        <div></div><div></div><div></div>
        <div></div><div></div><div></div>
        <div></div><div></div><div></div>
        <div></div><div></div><div></div>
        <div></div><div></div><div></div>
      </div>
      <div class="dot">
        <div class="line"></div>
        <div class="dot-bg"></div>
      </div>
    </div>
    <!--  -->
    <div class="right-wrapper">
      <div class="dot">
        <div class="round"></div>
      </div>
      <div class="stripe">
        <span class="text">J</span>
        <div></div><div></div>
        <div></div><div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .left-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 51%;
    height: 100%;
    .stripe {
      height: 120%;
      background-color: $j-black;
      div {
        position: absolute;
        width: 99.5%;
        height: 5%;
        background-color: $j-black;
      }
      @for $i from 1 through 18 {
        div:nth-of-type(#{$i}) {
          top: ($i - 1) * 10%;
        }
      }
      .text {
        position: absolute;
        top: -29%;
        right: 0;
        font-size: 100em;
        color: $j-white;
        font-weight: bolder;
        font-family: -webkit-pictograph;
      }
    }
    .dot {
      position: relative;
      height: 200%;
      background-color: $j-black;
      overflow: hidden;
      .line {
        @include center;
        width: 3.7em;
        height: 34em;
        background-color: $j-red;
        transform:  translateX(-50%) translateY(-50%) rotate(-30deg);
      }
      .dot-bg {
        width: 200%;
        height: 100%;
        background-image: radial-gradient(#ececec 50%, transparent 51%);
        background-size: 5.5em 5.5em;
        transform: rotate(45deg) translateX(-28em) translateY(7.9em);
      }
    }
  }
  .right-wrapper {
    position: absolute;
    top: -200%;
    right: 0;
    width: 50%;
    height: 100%;
    .dot {
      position: relative;
      height: 150%;
      background-color: $j-white;
      .round {
        @include center;
        top: 30%;
        width: 14em;
        height: 14em;
        border-radius: 100%;
        background-color: $j-black;
      }
    }
    .stripe {
      position: relative;
      height: 150%;
      background-color: $j-black;
      div {
        position: absolute;
        right: 0;
        width: 99.5%;
        height: 10%;
        background-color: $j-black;
      }
      @for $i from 1 through 5 {
        div:nth-of-type(#{$i}) {
          top: ($i - 1) * 20%;
        }
      }
      .text {
        position: absolute;
        top: -70%;
        right: 0;
        font-size: 120em;
        color: #ececec;
        font-weight: bolder;
        transform: scale(-1, 1);
      }
    }
  }

  // animation 837 - 1083  246
  $bezier: cubic-bezier(0.5, 0.01, 0, 1.02);
  .left-wrapper {
    animation: left-wrapper-move 246 * 16ms $bezier forwards;
    .text {
      animation: left-text-move 130 * 16ms $bezier forwards;
    }
    .line {
      animation: left-line-move 118 * 16ms $bezier 128 * 16ms forwards;
    }
  }
  .right-wrapper {
    animation: right-wrapper-move 246 * 16ms $bezier forwards;
    .text {
      animation: right-text-move 130 * 16ms $bezier forwards;
    }
    .round {
      animation: right-round-move 118 * 16ms $bezier 128 * 16ms forwards;
    }
  }

  @keyframes left-wrapper-move {
    to { top: -170%; }
  }
  @keyframes left-text-move {
    to { top: -50%; }
  }
  @keyframes left-line-move {
    70% {
      left: 50%;
      transform: translateX(-50%) translateY(-50%) rotate(20deg);
    }
    100% {
      left: 66%;
      transform: translateX(-50%) translateY(-50%) rotate(-60deg);
    }
  }
  @keyframes right-wrapper-move {
    to { top: 0%; }
  }
  @keyframes right-text-move {
    to { top: -50%; }
  }
  @keyframes right-round-move {
    70% {
      left: 50%;
    }
    100% {
      left: 20%;
    }
  }
</style>
