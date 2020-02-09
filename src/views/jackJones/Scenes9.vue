<template>
  <div>
    <div class="j-top"></div>
    <div class="j-bottom">
      <div></div>
    </div>
    <div class="dash"></div>
    <div class="stripe-1"></div>
    <div class="stripe-2"></div>
    <div class="red-cube-1"></div>
    <div class="red-cube-2"></div>
    <div class="cube"></div>
  </div>
</template>

<style lang="scss" scoped>
  .j-top {
    position: absolute;
    width: 18%;
    height: 61%;
    left: 44%;
    background-color: $j-black;
  }
  .j-bottom {
    position: absolute;
    top: 61%;
    left: -4%;
    width: 62%;
    height: $j-ratio * 62% / 2;
    overflow: hidden;
    div {
      transform: translateY(-50%);
      width: 100%;
      height: 200%;
      border-radius: 100%;
      background-color: $j-black;
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40%;
        height: 40%;
        border-radius: 100%;
        background-color: $j-white;
      }
    }
  }
  .dash {
    position: absolute;
    left: 14%;
    top: 87%;
    width: 4%;
    height: 1.5%;
    background-color: $j-white;
    &:before {
      content: '';
      position: absolute;
      left: 33%;
      height: 100%;
      width: 33%;
      background-color: $j-black;
    }
  }
  .stripe-1 {
    position: absolute;
    top: 18.3%;
    left: 12.5%;
    width: 25.3%;
    height: 25.6%;
    background-image: repeating-linear-gradient(45deg, $j-black, $j-black 2.8em, $j-white 2.8em, $j-white 3.45em);
  }
  .stripe-2 {
    position: absolute;
    top: 12.7%;
    left: 58%;
    width: 12.75%;
    height: 21%;
    background-image: repeating-linear-gradient(-45deg, $j-black, $j-black 2em, $j-white 2em, $j-white 2.7em);
  }
  .red-cube-1 {
    position: absolute;
    top: 41.2%;
    left: 45.5%;
    width: 4.2%;
    height: 8.7%;
    background-color: $j-red;
  }
  .red-cube-2 {
    position: absolute;
    top: 25%;
    left: 79%;
    width: 2.1%;
    height: 3.75%;
    background-color: $j-red;
  }
  .cube {
    position: absolute;
    top: 70%;
    left: 77%;
    width: 8.2%;
    height: 8.2% * $j-ratio;
    border: 1.15em solid $j-black;
    &:after {
      content: '';
      @include center;
      box-sizing: border-box;
      width: 0.3em;
      height: 0.3em;
      border: 0.2em solid $j-black;
    }
  }

  // animation 1084 - 1123 39
  $duration: 39 * 16ms;
  .stripe-1 {
    animation: move-stripe-1 $duration forwards;
  }
  .stripe-2 {
    animation: move-stripe-2 $duration forwards;
  }
  .j-top {
    animation: move-j-top $duration forwards;
  }
  .j-bottom {
    animation: move-j-bottom $duration forwards;
  }
  .red-cube-1 {
    animation: move-red-cube-1 $duration forwards;
  }
  .red-cube-2 {
    animation: move-red-cube-2 $duration forwards;
  }
  .cube {
    animation: bigger-cube $duration forwards;
    &:after {
      animation: bigger-inner-cube $duration forwards;
    }
  }

  @keyframes move-stripe-1 {
    30% { top: 50%; }
    100% { top: 27%; }
  }
  @keyframes move-stripe-2 {
    30% { left: 62.5%; }
    100% { left: 59.7%; }
  }
  @keyframes move-j-top {
    30% { left: 41%; }
    100% { left: 53.2%; }
  }
  @keyframes move-j-bottom {
    30% { left: 5.8%; }
    100% { left: 1.7%; }
  }
  @keyframes move-red-cube-1 {
    30% { left: 37.6%; }
    100% { left: 43.6%; }
  }
  @keyframes move-red-cube-2 {
    30% { top: 12.5%; }
    100% { top: 23.3%; }
  }
  @keyframes bigger-cube {
    100% {
      width: 12.3%;
      height: 12.3% * $j-ratio;
      border-width: 1.5em;
    }
  }
  @keyframes bigger-inner-cube {
    100% {
      width: 6.32em;
      height: 6.32em;
      border-width: 1.75em;
    }
  }
</style>
