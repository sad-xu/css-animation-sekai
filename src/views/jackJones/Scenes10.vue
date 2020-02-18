<template>
  <div class="stage">
    <div class="j-wrapper">
      <div class="line line-1"></div>
      <div class="box box-1"></div>
      <div class="box box-2"></div>
      <div class="line line-2"></div>
      <!-- <div class="line-3"></div> -->
    </div>
    <div class="cube"></div>
    <div class="big-j"></div>
    <!-- J -->
    <svg height="0" width="0">
      <defs>
        <clipPath id="shape-j" clipPathUnits="objectBoundingBox">
          <path d="m 0.3749614,0.97312494 c -0.0752791,-0.0133003 -0.14439644,-0.0459442 -0.18872294,-0.0891333 -0.0129848,-0.0126515 -0.0236089,-0.0244079 -0.0236089,-0.0261248 0,-0.003802 0.13927482,-0.13365267 0.14562619,-0.13577205 0.00248,-8.2779e-4 0.0164241,0.007624 0.0309858,0.0187835 0.080021,0.0613214 0.17852393,0.0677096 0.23346181,0.0151412 0.0291841,-0.0279256 0.0301263,-0.0369827 0.0301263,-0.28956841 V 0.23590143 H 0.43182344 0.26081713 l 0.001401,-0.0941371 0.001399,-0.09413709 H 0.5510425 0.83846733 l -5.832e-5,0.342523 c -5.172e-5,0.34017871 -1.3437e-4,0.34279847 -0.0117082,0.38278291 -0.0328831,0.11361236 -0.12076095,0.1830629 -0.25595136,0.20228092 -0.0445789,0.006332 -0.15475167,0.005161 -0.19579006,-0.00209 z" />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
  .stage {
    background-color: $j-black;
  }

  .j-wrapper {
    @include center;
    width: 85% / $j-ratio;
    height: 85%;
    clip-path: url(#shape-j);
    .line {
      position: absolute;
      width: 100%;
      height: 1.7em;
      transform-origin: right;
      background-color: $j-white;
    }
    .line-1 {
      bottom: 57%;
      transform: rotate(45deg);
    }
    .line-2 {
      top: 57%;
      transform: rotate(-45deg);
      background-color: $j-red;
    }
    .box {
      position: absolute;
      transform-origin: right;
      box-sizing: content-box;
      background: none;
      transform: rotate(45deg);
      border: 1.7em solid $j-white;
      border-left: 0;
      border-bottom: 0;
    }
    .box-1 {
      top: 34%;
      left: -57%;
      width: 100%;
      height: 100%;
    }
    .box-2 {
      top: 38%;
      left: -57%;
      width: 80%;
      height: 80%;
    }
  }
  .cube {
    position: absolute;
    left: 61.5%;
    top: 50%;
    width: 12.7%;
    height: 11%;
    background-color: $j-red;
    opacity: 0;
  }
  .big-j {
    position: absolute;
    right: 0;
    height: 120%;
    width: 120% / $j-ratio;
    clip-path: url(#shape-j);
    transform: scaleX(-1) translateX(-45%) translateY(-10%);
    background-color: $j-black;
    opacity: 0;
  }

  // animation 1124 - 1198  74 = 26 + 48
  .j-wrapper {
    animation:
      bg-black 1ms 26 * 16ms forwards,
      scale-j 48 * 16ms 26 * 16ms forwards;
    .box {
      animation:
        border-bolder 26 * 16ms forwards,
        border-white 1ms 26 * 16ms forwards;
    }
    .line {
      animation:
        line-bolder 26 * 16ms forwards,
        bg-white 1ms 26 * 16ms forwards;
    }
  }
  .stage {
    animation: bg-white 1ms 26 * 16ms forwards;
  }
  .cube {
    animation: move-cube 48 * 16ms 26 * 16ms forwards;
  }
  .big-j {
    animation: move-big-j 48 * 16ms 26 * 16ms forwards;
  }

  @keyframes border-bolder {
    100% {
      border-width: 3.8em;
    }
  }
  @keyframes line-bolder {
    100% {
      height: 3.8em;
    }
  }
  @keyframes bg-white {
    from, to {
      background-color: $j-white;
    }
  }
  @keyframes bg-black {
    from, to {
      background-color: $j-black;
    }
  }
  @keyframes border-white {
    from, to {
      border-color: $j-white;
    }
  }
  @keyframes move-cube {
    form {
      opacity: 1;
    }
    to {
      opacity: 1;
      left: 36%;
    }
  }
  @keyframes move-big-j {
    from {
      opacity: 1;
    }
    to {
      opacity: 1;
      transform: scaleX(-1) translateX(-31%) translateY(-10%);
    }
  }
  @keyframes scale-j {
    from {
      left: 23.1%;
    }
    to {
      left: 23.1%;
      transform: translateX(-50%) translateY(-50%) scale(0.8);
    }
  }
</style>
