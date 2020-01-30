<template>
  <div class="stage">
    <div class="bg"></div>
    <div class="wrapper">
      <div class="cube-white"></div>
      <div class="cube-line">
        <div></div><div></div>
        <div></div><div></div>
        <div></div><div></div>
      </div>
      <div class="cube-dot"></div>
      <div class="round"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .stage {
    background-color: $j-white;
    .wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .bg {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100vw;
      height: 100vw;
      transform: translateX(-50%) translateY(-50%);
      background-color: $j-black;
    }
  }

  .cube-white {
    position: absolute;
    width: 12.5vw;
    height: 12.5vw;
    left: 57%;
    top: -10%;
    transform: rotate(43deg);
    background-color: $j-white;
  }
  .cube-line {
    position: absolute;
    top: 70%;
    left: 11%;
    width: 6.5vw;
    height: 6.5vw;
    transform: rotate(-45deg);
    div {
      height: 8%;
      margin-bottom: 9%;
      background-color: $j-white;
    }
  }
  .cube-dot {
    position: absolute;
    top: 38%;
    left: 66%;
    width: 22vw;
    height: 22vw;
    background-color: $j-white;
    background-image: radial-gradient($j-black 45%, rgba(0,0,0,0) 46%);
    background-size: 5% 5%;
    transform: rotate(43deg);
  }
  .round {
    position: absolute;
    left: 28%;
    top: 80%;
    width: 13vw;
    height: 13vw;
    border-radius: 100%;
    background-color: $j-red;
  }

  // animation
  // 20-37
  .bg {
    animation: bg-round 400ms linear 320ms forwards; // 20-45
  }
  .wrapper {
    animation: wrapper-zoom-out 272ms linear 320ms forwards;
    .cube-dot { animation: cube-dot-rotate 272ms linear 320ms forwards; }
    .cube-line { animation: cube-line-rotate 272ms linear 320ms forwards; }
    .cube-white { animation: cube-white-rotate 272ms linear 320ms forwards; }
  }

  @keyframes bg-round {
    70% {
      border-radius: 100%;
    }
    80% {
      width: 55vw;
      height: 55vw;
      border-radius: 100%;
    }
    90% {
      width: 25vw;
      height: 25vw;
      border-radius: 100%;
    }
    100% {
      width: 13vw;
      height: 13vw;
      border-radius: 100%;
    }
  }
  @keyframes wrapper-zoom-out {
    99% {
      transform: scale(0.5);
      opacity: 1;
    }
    100% { opacity: 0; }
  }
  @keyframes cube-line-rotate {
    to { transform: rotate(0deg);  }
  }
  @keyframes cube-white-rotate {
    to { transform: rotate(-13deg);  }
  }
  @keyframes cube-dot-rotate {
    to { transform: rotate(-13deg);  }
  }
</style>
