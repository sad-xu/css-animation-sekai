<template>
  <div>
    <component
      :is="comp"
      class="stage"
      style="width: 854px;height: 480px;"
      @scenesEnd="pushScenes">
    </component>
  </div>
</template>

<script>
export default {
  name: 'JackJones',
  props: {
    scenesList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      comp: null,
      compList: []
    }
  },
  created() {
    console.log(this.scenesList)
    this.compList = this.scenesList.map(scenes => require(`./${scenes}.vue`).default)
    this.pushScenes()
  },
  methods: {
    pushScenes() {
      let comp = this.compList.shift()
      if (!comp) return true
      comp.mixins = [{
        mounted() {
          this.$nextTick(() => {
            let stack = [this.$el]
            let num = 0
            // 遍历所有节点，获取动画数量
            while (stack.length) {
              let node = stack.pop()
              if (this.hasAnimation(node)) num++
              if (this.hasAnimation(node, ':before')) num++
              if (this.hasAnimation(node, ':after')) num++
              for (let i = 0; i < node.children.length; i++) {
                stack.push(node.children[i])
              }
            }
            // 动画结束事件
            this.$el.addEventListener('animationend', e => {
              num--
              if (num === 0) {
                // 所有都结束后告知父组件切换下一个场景
                this.$emit('scenesEnd')
              }
            })
          })
        },
        methods: {
          // 判断节点是否有动画
          hasAnimation(element, pseudoElt = null) {
            let animation = window.getComputedStyle(element, pseudoElt).getPropertyValue('animation')
            return animation !== 'none 0s ease 0s 1 normal none running'
          }
        }
      }]
      this.comp = comp

      // let Constructor = Vue.extend(comp)
      // let instance = new Constructor({
      //   mounted() {
      //     this.$nextTick(() => {
      //       const self = this
      //       let stack = [this.$el]
      //       let num = 0
      //       // 遍历所有节点，获取动画数量
      //       while (stack.length) {
      //         let node = stack.pop()
      //         if (that.hasAnimation(node)) num++
      //         if (that.hasAnimation(node, ':before')) num++
      //         if (that.hasAnimation(node, ':after')) num++
      //         for (let i = 0; i < node.children.length; i++) {
      //           stack.push(node.children[i])
      //         }
      //       }
      //       // 动画结束事件
      //       this.$el.addEventListener('animationend', e => {
      //         num--
      //         // 所有都结束后切换下一个场景
      //         if (num === 0) {
      //           let isLast = that.pushScenes()
      //           if (!isLast) {
      //             // 清理与其它实例的连接，解绑全部指令及事件监听器
      //             self.$destroy()
      //             // 删除自身节点
      //             self.$el.parentNode.removeChild(self.$el)
      //           }
      //         }
      //       })
      //     })
      //   }
      // }).$mount()
      // let el = instance.$el
      // // TODO: 分离class
      // el.style.cssText = `width:854px;height:480px;position: absolute;
      //   top: 50%;
      //   left: 50%;
      //   transform: translateX(-50%) translateY(-50%);
      //   border: 1px solid red;
      //   overflow: hidden;`
      // this.$el.appendChild(el)
    }
  }
}
</script>

<style lang="scss" scoped>
  .stage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border: 1px solid red;
    overflow: hidden;
  }
</style>
