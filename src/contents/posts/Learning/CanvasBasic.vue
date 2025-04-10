<script setup lang="ts">
import ArticleContent from '@/components/articleComponents/common/ArticleContent.vue'
import ArticleTitle from '@/components/articleComponents/common/ArticleTitle.vue'
import ArticleCodeCard from '@/components/articleComponents/common/ArticleCodeCard.vue'

const code_01 = `
<canvas id="canvas" width="800" height="800"></canvas>
`

const code_02 = `
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');     // 2D画板
const ctx = canvas.getContext('webgl');  // 3D画板
`
</script>

<template>
  <article-content>
    <n-p>
      <n-alert title="Warning" type="warning">
        目前标题导航组件存在响应式异常，请等待处理
      </n-alert>
    </n-p>
    <n-p>
      <n-alert title="Warning" type="warning">
        目前文章尚未完成
      </n-alert>
    </n-p>
    <article-title :h="3" href="1_安装"> 1. 背景 </article-title>
    <n-p>
      <n-text code>canvas</n-text>
      是
      <n-text code>HTML5</n-text>
      标准新提供的标签，通过强大的绘图接口绘制图形
    </n-p>
    <article-title :h="3" href="2_基础"> 2. 基础 </article-title>
    <article-code-card title="定义标签" language="html" :code="code_01" />
    <article-code-card title="获取画板" language="javascript" :code="code_02" />
    <n-p>
      先不写了，吃饭去（）
    </n-p>
  </article-content>
</template>

<style scoped></style>
