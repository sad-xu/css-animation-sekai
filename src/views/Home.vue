<template>
  <div class="home">
    <div
      v-for="item in pageList" :key="item.title"
      @click="selectStage(item)">
      <span>{{ item.title }}</span>
    </div>
    <div v-if="comp" class="stage">
      <span @click="goBack">back!</span>
      <span @click="replay">replay</span>
      <component :is="comp" :key="key"></component>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      pageList: [{
        title: 'lesson-1',
        path: 'LessonOne'
      }],
      comp: null,
      key: 0
    }
  },
  created() {
    // 用hash记录选中项
    let hash = window.location.hash.slice(1)
    if (hash) {
      let item = this.pageList.find(item => item.title === hash)
      if (item) {
        this.selectStage(item)
      }
    }
  },
  methods: {
    // 选中
    selectStage({ title, path }) {
      window.location.hash = title
      this.comp = require(`./stage/${path}`).default
    },
    // 返回
    goBack() {
      window.location.hash = ''
      this.comp = null
    },
    // 重播
    replay() {
      this.key++
    }
  }
}
</script>

<style lang="scss" scoped>
  .stage {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    z-index: 9;
  }
</style>
