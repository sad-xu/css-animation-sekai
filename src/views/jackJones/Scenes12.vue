<template>
  <div class="stage">
    <div class="j j-1"></div>
    <div class="j j-2"></div>
    <div class="cube"></div>
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
  .j {
    @include center;
    width: 45% / $j-ratio;
    height: 50%;
    clip-path: url(#shape-j);
    background-color: $j-white;
    opacity: 0;
  }
  .j-1 {
    left: 25%;
  }
  .j-2 {
    left: 48%;
  }
  .cube {
    @include center;
    width: 23%;
    height: 53%;
    left: 25%;
    background-color: $j-white;
    opacity: 0;
  }

  // animation 1325-1339  16 = 6 + 5 + 2 + 3
  .j-1 {
    animation: show-j 1ms 6 * 16ms forwards;
  }
  .j-2 {
    animation: show-j  1ms 11 * 16ms forwards;
  }
  .cube {
    animation: move-cube 10 * 16ms  6 * 16ms linear forwards;
  }

  @keyframes show-j {
    0%, 100% {
      opacity: 1;
    }
  }
  @keyframes move-cube {
    0%, 29% {
      opacity: 1;
      left: 25%;
    }
    40%, 69% {
      opacity: 1;
      left: 48%;
    }
    70%, 100% {
      opacity: 1;
      left: 75%;
    }
  }
</style>
