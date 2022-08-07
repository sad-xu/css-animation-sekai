<template>
  <div>
    <div class="stripe-box">
      <div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>
    </div>
    <div class="red-ball"></div>
    <div class="black-ball"></div>
    <div class="line-ball"></div>
  </div>
</template>

<style lang="scss" scoped>
  .stripe-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleY(2.3);
    &:before, &:after {
      content: '';
      position: absolute;
      left: 48.2%;
      width: 3.7em;
      height: 50%;
      background-color: $j-red;
      z-index: 5;
    }
    &:before {
      top: 65%;
    }
    &:after {
      bottom: 63.6%;
    }
    div {
      position: absolute;
      width: 100%;
      height: 2.6%;
      background-color: $j-black;
    }
    @for $i from 1 through 20 {
      :nth-child(#{$i}) {
        top: ($i - 1) * 2 * 2.6%;
        @if $i < 10 {
          @if $i % 2 == 1 {
            z-index: 6;
          }
        }
        @else if $i % 2 == 0 {
          z-index: 6;
        }
      }
    }
  }

  // .red-ball {

  // }
  // .black-ball {
  //   position: absolute;
  //   width:
  // }

  // animation 1652 - 1834 183
  .stripe-box {
    animation:
      rotate-stripe-box 183 * 16ms forwards;
    &:before {
      animation: move-stripe-before 33 * 16ms 50 * 16ms forwards;
    }
    &:after {
      animation: move-stripe-after 33 * 16ms 50 * 16ms forwards;
    }
    div {
      animation: thin-line 83 * 16ms 80 * 16ms forwards;
    }
  }

  @keyframes rotate-stripe-box {
    27% {
      transform: scaleY(1);
    }
    100% {
      transform: scale(4, 2) rotate(-55deg);
    }
  }
  @keyframes thin-line {
    to {
      transform: scaleY(0.3);
    }
  }
  @keyframes move-stripe-before {
    100% {
      left: 61%;
    }
  }
  @keyframes move-stripe-after {
    100% {
      left: 35%;
    }
  }
</style>
