<template>
  <div class="wrapper">
    <div class="images">
      <div class="img"></div>
      <div class="img"></div>
      <div class="img"></div>
      <div class="img"></div>
    </div>
    <div class="dot"></div>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    position: relative;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 70%;
    overflow: hidden;
    transform: translateX(-50%) translateY(-50%);
  }

  .dot {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translateX(-50%) translateY(-50%);
    background-color: #444;
  }

  .images {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .img {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      overflow: hidden;
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      &:nth-child(1) { background-color: #ff5722; }
      &:nth-child(2) { background-color: #26a69a; }
      &:nth-child(3) { background-color: #e57373; }
      &:nth-child(4) { background-color: #ba68c8; }
    }
  }

  /* animation */
  .dot {
    animation: fadeout-dot 1s ease 0.5s forwards;
  }
  .images .img {
    &:nth-child(1) { animation: show-img 0.6s ease 1.5s forwards; }
    &:nth-child(2) { animation: show-img 0.6s ease 1.8s forwards; }
    &:nth-child(3) { animation: show-img 0.6s ease 2.1s forwards; }
    &:nth-child(4) { animation: show-img 0.6s ease 2.4s forwards; }
  }

  @keyframes fadeout-dot {
    30% {
      width: 40px;
      height: 40px;
      transform: translateX(-50%) translateY(-50%) scale(1);
      border-radius: 50%;
    }
    50% {
      width: 40px;
      height: 40px;
      transform: translateX(-50%) translateY(-50%) scale(1.3);
      border-radius: 50%;
    }
    70% {
      width: 40px;
      height: 40px;
      left: 50%;
      transform: translateX(-50%) translateY(-50%) scale(1);
      border-radius: 50%;
    }
    100% {
      width: 40px;
      height: 40px;
      left: 0%;
      transform: translateX(-100%) translateY(-50%) scale(1);
      border-radius: 50%;
    }
  }

  @keyframes show-img {
    0% { width: 0; }
    100% { width: 100%; }
  }
</style>
