# Jack & Jones

纯CSS完美还原映像设计视频

Pure CSS Perfect Restore Motion Graphic Design Video

## Video Source

  from Frame.

  [https://vimeo.com/255425275](https://vimeo.com/255425275)

  (or [https://www.bilibili.com/video/av21122909](https://www.bilibili.com/video/av21122909))

## Info

视频时长`34.016`秒，以`60fps`为标准，即每`16ms`为一帧，则总帧数为`2126`

一帧一帧的分析，视频可以分为以下几段演出

1. 0 - 45 ✌
2. 46 - 214 ✌
3. 215 - 271 ✌
4. 272 - 349 ✌
5. 350 - 628 🤷‍♂️
6. 629 - 775 ✌
7. 776 - 836 ✌
8. 837 - 1083 ✌
9. 1084 - 1123 ✌
10. 1124 - 1198 ✌
11. 1199 - 1324 ✌
12. 1325 - 1339 ✌
13. 1340 - 1514 🤔
14. 1515 - 1594 ✌
15. 1595 - 1651 ✌
16. 1652 - 1834
17. 1835 - 1993
18. 1994 - 2039
19. 2040 - 2125

## TODO

1. 暂停功能？

## 注意点

* 场景切分组件，组件所有动画结束后，自动切换下一场景

* 如何结合播放所有场景和指定场景，外层`Home.vue`添加`mixins`申明播放什么场景，内层`JackJones.vue`添加`mixins`控制各个场景顺序

`Home.vue`用`mixins`时,对同一个组件有多种情况,就需要设置不同的`mixins`,但只会保持第一次设置的状态
解决:不用`mixins`,使用场景不对,改用`props`,将配置传进去,缺点时有些动态组件不需要这个配置,有些冗余,但这是我能想到的最简单的实现方法了

`JackJones.vue`多个场景的页面重播时，无法切换到第二个场景。
原因：上次的状态被记录了，用`key`和`v-if`等方法均无法消除
解决一：`Vue.extend`手动实例化组件并挂载，且当前场景结束时需要手动销毁，麻烦，`devtools`看不到，不利于调试
解决二：依然用动态组件，在子组件触发所有动画结束事件时，不在当前函数里调递归，而是向父组件发起`emit`通知，在父组件里处理，好

* 根据不同屏幕尺寸，调整舞台长宽，不过长宽比应始终为`16：9`，所以不得不弃用`vw`、`vh`

* 移动端应提示横屏

* 优先百分比，以宽度为准，高度以`16:9`换算
不能用百分比的如`border`等，在最外层加上了`font-size`为宽度的`1/100`，在内部用`em`替代`px`

* 制作自适应的`clip-path` - `scenes-10`
工具`Inkscape`
若要用`path`,`SVG`制作时以`1px`的长宽为画布，导出后的值则均为`[0,1]`
使用时加上`clipPathUnits="objectBoundingBox"`

* `scenes10`clip-path有边框，如何去除?

* 直死魔眼

* css命名

* 15

 `linear-gradient` - 条纹

  `radial-gradient` - 斑点

* 15

  houdini 动态渐变 `https://css-houdini.rocks/animating-gradient`