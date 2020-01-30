<template>
  <div>
    scenes2
    <div class="test">
      rrrr
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .test {
    width: 200px;
    height: 200px;
    background-color: pink;
    animation: test-color 3s forwards;
  }

  @keyframes test-color {
    to {
      background-color: yellow;
    }
  }
</style>
