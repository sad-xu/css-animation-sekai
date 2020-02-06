<template>
  <div>
    <div class="col">
      <div></div><div></div>
      <div></div><div></div>
    </div>
    <div class="col">
      <div></div><div></div>
      <div></div><div></div>
    </div>
    <div class="col">
      <div></div><div></div>
      <div></div><div></div>
    </div>
    <div class="col">
      <div></div><div></div>
      <div></div><div></div>
    </div>
    <div class="col">
      <div></div><div class="black-ball"></div>
      <div></div><div></div>
    </div>
    <div class="col">
      <div></div><div></div>
      <div></div><div></div>
    </div>
    <div class="col">
      <div></div><div></div>
      <div></div><div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .col {
    float: left;
    width: 9.3%;
    height: 100%;
    margin-right: 3%;
    div {
      width: 100%;
      height: 9.3em;
      border-radius: 100%;
      margin-bottom: 3.27em;
      background-color: $j-red;
      transform: scale(0);
    }
    .black-ball {
      background-color: $j-black;
    }
  }

  .col:nth-child(1) {
    margin-left: 8.5%;
  }
  .col:nth-child(even) {
    margin-top: 1.4em;
  }
  .col:nth-child(odd) {
    margin-top: 8em;
  }

  .col:nth-child(5) div {
    transform: scale(0.43);
  }
  .col:nth-child(6) div {
    transform: scale(0.62);
  }
  .col:nth-child(7) div {
    transform: scale(0.7);
  }

  // animation 629 - 775 146
  @for $i from 1 through 7 {
    .col:nth-child(#{$i}) div {
      animation: ball-scale-#{$i} 146 * 16ms 0s forwards;
    }
  }

  @keyframes ball-scale-7 {
    30%, 60% {
      transform: scale(1);
    }
    70%, 100% {
      transform: scale(0);
    }
  }
  @keyframes ball-scale-6 {
    40%, 60% {
      transform: scale(1);
    }
    80%, 100% {
      transform: scale(0);
    }
  }
  @keyframes ball-scale-5 {
    50%, 60% {
      transform: scale(1);
    }
    90%, 100% {
      transform: scale(0);
    }
  }
  @keyframes ball-scale-4 {
    30%, 60% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes ball-scale-3 {
    30%, 60% {
      transform: scale(1);
    }
    70%, 100% {
      transform: scale(0.43);
    }
  }
  @keyframes ball-scale-2 {
    40%, 60% {
      transform: scale(1);
    }
    80%, 100% {
      transform: scale(0.62);
    }
  }
  @keyframes ball-scale-1 {
    50%, 60% {
      transform: scale(1);
    }
    90%, 100% {
      transform: scale(0.7);
    }
  }

  // @for $i from 1 through 7 {
  //   @keyframes ball-scale-#{$i} {
  //     0% {

  //     }
  //     50% {

  //     }
  //     100% {

  //     }
  //   }
  // }
</style>
