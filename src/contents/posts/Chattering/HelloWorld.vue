<script setup lang="ts">
import {
  NP,
  NGrid,
  NGridItem,
  NFlex,
  NA
} from 'naive-ui'

import MotionConicGradientPointer from '@/components/articleComponents/specific/chattering/helloWorld/MotionConicGradientPointer.vue'
import MotionReorderAnimation from '@/components/articleComponents/specific/chattering/helloWorld/MotionReorderAnimation.vue'
import ArknightsParticle
  from '@/components/articleComponents/specific/chattering/helloWorld/ArknightsParticle.vue'
import ArticleImageCaption from '@/components/articleComponents/common/ArticleImageCaption.vue'
import ArticleContent from '@/components/articleComponents/common/ArticleContent.vue'
</script>

<template>
  <article-content>
    <n-p>
      历经两天（？）的艰苦卓绝的奋斗，做了一个比较简陋的个人博客页面出来。
    </n-p>
    <n-p>
      内容很简陋，用法很粗糙，过程很扭曲，只当是一个探索 Vue3 的过程了。后面我会把自己的经历等等一并放上来，就作为正式的博客使用，目前只是一个小小小预览。
    </n-p>
    <n-p>
      那至于为什么不用诸如 MKdocs、VitePress 的一体成形的博客结构呢？因为我想要最纯粹的「高定制化」！
    </n-p>
    <n-p>
      我可以改变页面的所有元素，让他们呈现所有我能想出来的效果，这种一切尽在掌握的感觉是所有的博客结构所不能比拟的。
    </n-p>
    <n-p>
      为此，我甚至往库里引入了 Motion 库，毕竟是个人网页，没有性能问题，所以还会添加各种炫酷的东西，可以看看下面的 Motion 官方演示效果。
    </n-p>
    <n-grid cols="1 500:2" :x-gap="10" :y-gap="10">
      <n-grid-item class="test-motion-grid-item">
        <n-flex vertical align="center" justify="center">
          <motion-conic-gradient-pointer/>
          <article-image-caption>
            example <n-a href="https://examples.motion.dev/vue/path-drawing">Path drawing</n-a> @motion
          </article-image-caption>
        </n-flex>
      </n-grid-item>
      <n-grid-item class="test-motion-grid-item">
        <n-flex vertical align="center" justify="center">
          <motion-reorder-animation/>
          <article-image-caption>
            example <n-a href="https://examples.motion.dev/vue/reorder-items">Reorder items</n-a> @motion
          </article-image-caption>
        </n-flex>
      </n-grid-item>
    </n-grid>
    <n-p>
      包括右上角主题的切换动画也是使用 Motion 制作的。
    </n-p>
    <n-p>
      ps: 这不是 gif 图，这都是在你的设备上真实渲染的，你甚至可以这样（可以戳一戳下面）。
    </n-p>
    <n-grid cols="1">
      <n-grid-item class="test-particle-grid-item">
        <n-flex vertical align="center" justify="center" class="header-item">
          <arknights-particle/>
          <article-image-caption>
            <n-a href="https://github.com/XIwE1/ark-particle-animation">Ark particle animation</n-a> @ 西维
          </article-image-caption>
        </n-flex>
      </n-grid-item>
    </n-grid>
    <n-p>
      总之就是先这样，你可以翻看一下这个博客的其他内容，我也会持续书写自己的点点滴滴所思所想
    </n-p>
  </article-content>
</template>

<style>
.test-motion-grid-item {
  min-width: 200px;
}
.test-particle-grid-item {
  position: relative;
}
</style>
