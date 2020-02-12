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
            d="M215,100.3c97.8-32.6,90.5-71.9,336-77.6 c92.4-2.1,98.1,81.6,121.8,116.4c101.7,149.9,53.5,155.9,14.7,178c-96.4,54.9,5.4,269-257,115.1c-57-33.5-203,46.3-263.7,20.1 c-33.5-14.5-132.5-45.5-95-111.1C125.9,246.6,98.6,139.1,215,100.3z" />
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
