<template>
  <div class="home">
    <div v-show="!comp" class="page-wrapper">
      <div
        v-for="item in pageList" :key="item.title"
        class="page" @click="selectStage(item)">
        <span>{{ item.title }}</span>
      </div>
    </div>
    <div v-if="comp" class="content">
      <div class="menu">
        <span class="back" @click="goBack">↩</span>
        <span class="replay" @click="replay">R</span>
      </div>
      <component
        :is="comp" :key="key"
        class="component-wrapper"
        :scenes-list="scenesList">
      </component>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      comp: null,
      // 刷新key
      key: 0,
      pageList: [{
        title: 'lesson-1',
        path: './stage/LessonOne'
      }, {
        title: 'lesson-2',
        path: './stage/LessonTwo'
      }, {
        title: 'lesson-3',
        path: './stage/LessonThree'
      }, {
        title: 'Jack & Jones',
        path: './jackJones/JackJones',
        scenes: ['Scenes1', 'Scenes2', 'Scenes1']
      }, {
        title: 'Jack & Jones Scenes-1',
        path: './jackJones/JackJones',
        scenes: ['Scenes1']
      }],
      // 指定场景列表
      scenesList: []
    }
  },
  created() {
    // 用hash记录选中项
    let hash = window.decodeURIComponent(window.location.hash.slice(1))
    if (hash) {
      let item = this.pageList.find(item => item.title === hash)
      if (item) {
        this.selectStage(item)
      }
    }
  },
  methods: {
    // 选中
    selectStage({ title, path, scenes }) {
      window.location.hash = title
      let comp = require(`${path}.vue`).default
      // 指定某个场景
      if (scenes) {
        this.scenesList = scenes
      }
      this.comp = comp
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
  .page-wrapper {
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    padding: 3% 10%;
    height: 100vh;
    background-color: #e0e0e0;
    .page {
      width: 100px;
      height: 100px;
      margin: 20px;
      border: 1px solid red;
      cursor: pointer;
    }
  }

  .content {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    overflow: hidden;
    .menu {
      .back {
        position: fixed;
        top: 10px;
        left: 20px;
        padding: 3px 10px;
        border-radius: 5px;
        background-color: #607D8B;
        color: #fff;
        cursor: pointer;
        z-index: 99999;
      }
      .replay {
        position: fixed;
        top: 10px;
        right: 20px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 50%;
        background-color: #607D8B;
        color: #fff;
        cursor: pointer;
        z-index: 99999;
      }
    }
  }
  .component-wrapper {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
