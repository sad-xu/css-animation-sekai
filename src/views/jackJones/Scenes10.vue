<template>
  <div class="stage">
    <div class="j-wrapper">
      <div class="box"></div>
    </div>
    <svg height="0" width="0">
      <defs>
        <clipPath id="shape-j">
          <path
            fill="#FFFFFF" stroke="#000000"
            stroke-width="1.5794" stroke-miterlimit="10"
            d="M16 6 L16 14 L48 14 L48 48 C34 56 38 56 16 48 C16 64 52 64 56 48 L56 6" />        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
  .stage {
    background-color: $j-black;
  }

  .j-wrapper {
    width: 400px;
    height: 400px;
    background-color: pink;
    clip-path: url(#shape-j);
    .box {
      width: 200px;
      height: 200px;
      border: 10px solid red;
      background-color: purple;
    }
  }
</style>
