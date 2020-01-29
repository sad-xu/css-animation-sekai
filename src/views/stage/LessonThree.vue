<template>
  <div class="stage">
    <div class="stage-filter"></div>
    <div class="stage-inner">
      <div class="clock">
        <div class="clock-frame">
          <div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div>
        </div>
        <div class="clock-hands">
          <div></div>
          <div></div>
        </div>
        <div class="clock-image"></div>
      </div>
      <div class="memories memories-layer-1">
        <div class="memories-image memories-image-type-1"></div>
        <div class="memories-frame"></div>
      </div>
      <div class="memories memories-layer-2">
        <div class="memories-image memories-image-type-2"></div>
        <div class="memories-frame"></div>
      </div>
      <div class="memories memories-layer-3">
        <div class="memories-image memories-image-type-3"></div>
        <div class="memories-frame"></div>
      </div>
      <div class="memories memories-layer-4">
        <div class="memories-image memories-image-type-4"></div>
        <div class="memories-frame"></div>
      </div>
      <div class="memories memories-layer-5">
        <div class="memories-image memories-image-type-5"></div>
        <div class="memories-frame"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .stage {
    perspective: 20px;
  }
  .stage-inner, .stage-filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .stage-inner {
    transform-style: preserve-3d;
  }
  .stage-filter {
    box-shadow: 0 0 300px #444 inset;
  }

  .clock {
    position: absolute;
    top: calc(50% - 250px);
    left: calc(50% - 250px);
    width: 500px;
    height: 500px;
    background-color: rgba(100, 100, 100, 0.1);
    border-radius: 50%;
    transform: translateZ(50px) scale(calc(1 - (50 / 100)));
    .clock-frame {
      position: absolute;
      top: 20px;
      left: 20px;
      width: calc(100% - 40px);
      height: calc(100% - 40px);
      &:before, &:after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: solid 1px #444;
        border-radius: 50%;
        box-sizing: border-box;
      }
      &:after {
        top: 10px;
        left: 10px;
        width: calc(100% - 20px);
        height: calc(100% - 20px);
      }
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        &:after {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: calc(50% - 2.5px);
          width: 5px;
          height: 10px;
          background-color: #444;
        }
        @for $i from 1 through 24 {
          &:nth-child(#{$i}) {
            transform: rotate(($i - 1) * 15deg);
          }
        }
      }
    }
    .clock-hands {
      position: absolute;
      top: 35px;
      left: 35px;
      width: calc(100% - 70px);
      height: calc(100% - 70px);
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: calc(50% - 5px);
        left: calc(50% - 5px);
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background-color: #444;
      }
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        &:after {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: calc(50% - 5px);
          width: 10px;
          height: 100%;
          background-color: #444;
          border-radius: 5px;
        }
        &:nth-child(1):after {
          height: 50%;
        }
        &:nth-child(2):after {
          height: 40%;
          top: 10%;
        }
      }
    }
    .clock-image {
      position: absolute;
      top: 45px;
      left: 45px;
      width: calc(100% - 90px);
      height: calc(100% - 90px);
      // background-image: url();
      background-size: auto 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  .memories {
    position: absolute;
    top: calc(50% - 250px);
    left: calc(50% - 250px);
    width: 500px;
    height: 500px;
    .memories-image {
      position: absolute;
      top: 50px;
      left: 50px;
      width: calc(100% - 100px);
      height: calc(100% - 100px);
      border-radius: 50%;
      background-size: cover;
      background-position: center;
      opacity: 0.8;
      &:after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-shadow: 0 0 40px #333 inset;
      }
    }
    // .memories-image-type-1 {
    //   // background-image: url();
    // }
    // .memories-image-type-2 {
    //   // background-image: url();
    // }
    // .memories-image-type-3 {
    //   // background-image: url();
    // }
    // .memories-image-type-4 {
    //   // background-image: url();
    // }
    // .memories-image-type-5 {
    //   // background-image: url();
    // }
    .memories-frame {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      &:before, &:after {
        content: "";
        display: block;
        position: absolute;
        border-radius: 50%;
        box-sizing: border-box;
      }
      &:before {
        top: 25px;
        left: 25px;
        width: calc(100% - 50px);
        height: calc(100% - 50px);
        border: solid 1px #444;
      }
      &:after {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top: solid 10px #444;
        border-bottom: solid 10px #444;
      }
    }
  }
  .memories-layer-1 { transform: translateZ(150px) scale(calc(1 - (150 / 200))); }
  .memories-layer-2 { transform: translateZ(250px) scale(calc(1 - (250 / 300))); }
  .memories-layer-3 { transform: translateZ(350px) scale(calc(1 - (350 / 400))); }
  .memories-layer-4 { transform: translateZ(450px) scale(calc(1 - (450 / 500))); }
  .memories-layer-5 { transform: translateZ(550px) scale(calc(1 - (550 / 600))); }

  // animation
  .clock-hands div {
    &:nth-child(1) {
      animation: rotate4320 30s linear 0s infinite;
    }
    &:nth-child(2) {
      animation: rotate360 30s linear 0s infinite;
    }
  }
  .memories-frame {
    animation: rotate360 3.5s linear 0s infinite;
  }
  .stage {
    animation:
      camera 8s ease-in-out 0s forwards,
      camera 4s ease 8s reverse forwards;
  }
  .stage-inner {
    animation: sway 0.7s ease-in-out 0s alternate infinite;
  }

  @keyframes rotate360 {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes rotate4320 {
    from { transform: rotate(0deg); }
    to   { transform: rotate(4320deg); }
  }
  @keyframes camera {
    from { perspective: 20px; }
    to   { perspective: 600px; }
  }
  @keyframes sway {
    from { transform: translate(3px, 3px); }
    to   { transform: translate(-3px, -3px); }
  }
</style>
