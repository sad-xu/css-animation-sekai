<template>
  <div>
    <component :is="comp"></component>
  </div>
</template>

<script>
import Scenes1 from './Scenes1'
import Scenes2 from './Scenes2'

export default {
  name: 'JackJones',
  data() {
    return {
      comp: null,
      compList: [Scenes1, Scenes2]
    }
  },
  created() {
    this.pushScenes()
  },
  methods: {
    pushScenes() {
      const that = this
      let comp = this.compList.shift()
      if (!comp) return
      comp.mixins = [{
        mounted() {
          let stack = [this.$el]
          let num = 0
          // 遍历所有节点，获取动画数量
          while (stack.length) {
            let node = stack.pop()
            if (that.hasAnimation(node)) num++
            if (that.hasAnimation(node, ':before')) num++
            if (that.hasAnimation(node, ':after')) num++
            for (let i = 0; i < node.children.length; i++) {
              stack.push(node.children[i])
            }
          }
          // 动画结束事件
          this.$el.addEventListener('animationend', e => {
            num--
            // 所有都结束后切换下一个场景
            if (num === 0) {
              that.pushScenes()
            }
          })
        }
      }]
      this.comp = comp
    },
    // 判断节点是否有动画
    hasAnimation(element, pseudoElt = null) {
      let animation = window.getComputedStyle(element, pseudoElt).getPropertyValue('animation')
      return animation !== 'none 0s ease 0s 1 normal none running'
    }
  }
}
</script>
