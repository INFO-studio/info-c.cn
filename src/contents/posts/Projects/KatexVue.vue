<script setup lang="ts">
import { ref, watch } from 'vue'
import ArticleDate from '@/components/articleComponents/common/ArticleDate.vue'
import EmojiNerdFace from '@/assets/emojis/implements/EmojiNerdFace.vue'
import EmojiBackhandIndexPointingUp from '@/assets/emojis/implements/EmojiBackhandIndexPointingUp.vue'
import Npm from '@/assets/icons/brand/npm.svg?component'
import Github from '@/assets/icons/brand/github.svg?component'
import { FileCode2 } from 'lucide-vue-next'

const createDate = new Date(2025, 3, 7, 20, 8)

const testKatexVueExpression = ref("\\underbrace{\\overbrace{a+b}^6 \\cdot \\overbrace{c+d}^7}_\\text{example of text} = 42\\prod_{\\substack{p \\leq x \\\\\\text{p prime}}} \\left( 1 - \\dfrac{1}{p} \\right)")

watch(testKatexVueExpression, (value)=>{
  if(!value) {
    testKatexVueExpression.value = "\\LaTeX"
  }
})

</script>

<template>
  <div class="article">
    <n-h2 prefix="bar" class="article-title">
      <n-text>没有轮子？那造一个 - Katex Vue</n-text>
    </n-h2>
    <n-flex>
      <article-date category="create" :date="createDate" />
    </n-flex>
    <n-p>
      正在丰富这个博客的时候忽然灵机一动。
    </n-p>
    <n-p>
      哎<emoji-nerd-face/><emoji-backhand-index-pointing-up/>，你说我往博客里加入一个<katex-vue expression="\LaTeX"/>公式的功能是不是很酷！
    </n-p>
    <n-p>
      然后一查，<n-a href="https://github.com/lucpotage/vue-katex">vue-katex</n-a> 只能用 Vue2 版本，<n-a href="https://github.com/Shimada666/VaTex">VaTex</n-a> 功能写的又不是很尽如人意……
    </n-p>
    <n-p>
      所以我自己造了个轮子 ── Katex Vue
    </n-p>
    <n-ul>
      <n-li><n-a href="https://www.npmjs.com/package/katex-vue"><n-icon><Npm/></n-icon> npm 官网链接</n-a></n-li>
      <n-li><n-a href="https://github.com/INFO-studio/katex-vue"><n-icon><Github/></n-icon> 项目 Github</n-a></n-li>
      <n-li><n-a href="https://katex-vue.info-c.cn/"><n-icon><FileCode2/></n-icon> 项目文档</n-a></n-li>
    </n-ul>
    <n-p>
      你也可以在这里试一试
    </n-p>
    <katex-vue :expression="testKatexVueExpression" displayMode/>
    <n-input
      type="textarea"
      placeholder="LaTeX"
      v-model:value="testKatexVueExpression"
      :autosize="{
        minRows: 3,
      }"
    />
  </div>
</template>

<style>
</style>
