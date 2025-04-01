<script setup lang="ts">
import MotionConicGradientPointer from '@/components/articleComponents/chattering/helloWorld/MotionConicGradientPointer.vue'
import MotionReorderAnimation from '@/components/articleComponents/chattering/helloWorld/MotionReorderAnimation.vue'
const writtenTime = new Date(2025, 3, 2, 0, 57)
</script>

<template>
  <div class="article">
    <n-h2 prefix="bar" class="article-title">
      <n-text>HelloWorld</n-text>
    </n-h2>
    <div>
      编写于：
      <n-time :time="writtenTime" format="yyyy-MM-dd HH:mm"/>
    </div>
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
      为此，我甚至往库里引入了 Motion 库，毕竟是个人网页，没有性能问题，所以还会添加各种炫酷的东西，可以看看下面的 Motion 官方演示效果
    </n-p>
    <n-grid cols="2">
      <n-grid-item>
        <n-flex align="center" justify="center" class="header-item">
          <motion-conic-gradient-pointer/>
        </n-flex>
      </n-grid-item>
      <n-grid-item>
        <n-flex align="center" justify="center" class="header-item">
          <motion-reorder-animation/>
        </n-flex>
      </n-grid-item>
    </n-grid>
    <n-p>
      总之就是先这样，后面再继续补充
    </n-p>
  </div>
</template>

<style>
</style>
