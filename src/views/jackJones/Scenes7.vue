<template>
  <div>
    <div class="rail">
      <div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>
    </div>
    <div class="rode-1"></div>
    <div class="rode-2"></div>
    <div class="spot-window">
      <div class="spot"></div>
    </div>
    <div class="stripes">
      <div></div><div></div><div></div>
      <div></div><div></div><div></div>
      <div></div>
    </div>
    <div class="right-line"></div>
    <div class="line"></div>
  </div>
</template>

<style lang="scss" scoped>
  .rail {
    position: absolute;
    left: 16.5%;
    height: 100%;
    width: 12%;
    &:before, &:after {
      content: '';
      position: absolute;
      height: 100%;
      background-color: $j-black;
    }
    &:before {
      width: 0.5em;
      right: 100%;
    }
    &:after {
      width: 1em;
      right: 0;
    }
    div {
      position: absolute;
      width: 100%;
      height: 1em;
      background-color: $j-black;
    }
    @for $i from 1 through 8 {
      div:nth-child(#{$i}) {
        bottom: ($i - 1) * 12.5% - 0.5%;
      }
    }
  }

  .rode-1, .rode-2 {
    position: absolute;
    width: 12%;
    height: 100%;
    &:before, &:after {
      content: "";
      position: absolute;
      height: 100%;
      background-color: $j-black;
    }
     &:before {
      width: 0.5em;
      right: 100%;
    }
    &:after {
      width: 0.5em;
      right: 0;
    }
  }
  .rode-1 {
    left: 41%;
  }
  .rode-2 {
    left: 77.5%;
  }

  .spot-window {
    position: absolute;
    right: 34%;
    width: 1.6%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
    .spot {
      position: absolute;
      right: 0;
      width: 100em;
      height: 200%;
      background-image: radial-gradient(#0f0f0f 45%, rgba(0, 0, 0, 0) 46%);
      background-size: 2.2em 2.2em;
      transform-origin: right;
      transform: translateX(19.2em) rotate(45deg) translateY(25em);      transform-origin: right;
   }
  }

  .right-line {
    position: absolute;
    right: -1%;
    width: 0.5%;
    height: 100%;
    background-color: $j-black;
  }

  .stripes {
    position: absolute;
    width: 50%;
    left: 77.5%;
    height: 100%;
    overflow: hidden;
    div {
      position: absolute;
      width: 100%;
      height: 2em;
      background-color: $j-black;
      transform-origin: left;
      transform: rotate(-40deg) translateX(-5em);
    }
    @for $i from 1 through 7 {
      div:nth-child(#{$i}) {
        bottom: ($i - 1) * 19% - 31%;
      }
    }
  }

  .line {
    @include center;
    width: 62.5%;
    height: 9%;
    background-color: $j-red;
    transform: translateX(-50%) translateY(-50%) rotate(-5deg);
  }

  // animation 776 - 836  60
  .rail:before, .rail:after,
  .rode-1:before, .rode-1:after,
  .rode-2:before, .rode-2:after,
  .spot-window, .right-line{
    animation: to-bolder 60 * 16ms forwards;
  }

  .rail div, .stripes div{
    animation: to-bold 60 * 16ms forwards;
  }

  .line {
    animation: line-rotate 60 * 16ms forwards;
  }

  @keyframes to-bold {
    to {
      height: 4.2em;
    }
  }
  @keyframes to-bolder {
    to {
      width: 6em;
    }
  }
  @keyframes line-rotate {
    to {
      transform: translateX(-50%) translateY(-50%) rotate(30deg);
    }
  }
</style>
