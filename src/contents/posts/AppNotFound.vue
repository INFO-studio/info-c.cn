<script setup lang="ts">
import {
  NH2,
  NText,
  NSpace,
  NP,
  NUl,
  NLi,
  NA
} from 'naive-ui'
import { motion } from 'motion-v'
import { EmojiFaceWithMonocle } from '@/assets/emojis'
</script>

<template>
  <motion.div :initial="{ opacity: 0, y: 100 }" :animate="{ opacity: 1, y: 0 }" class="article">
    <n-h2 prefix="bar" align-text class="article-title">
      <n-text>
        <EmojiFaceWithMonocle />
        404 NOT FOUND
      </n-text>
    </n-h2>
    <n-space vertical size="large">
      <n-p>您访问了一个不存在的地址</n-p>
      <n-ul>
        <n-li>链接复制错误？可以查看一下地址栏</n-li>
        <n-li>
          点击跳转而来？
          <n-a
            href="https://github.com/INFO-studio/info-c.cn/issues/new/choose"
            target="_blank"
            class="link"
          >
            汇报给笨蛋版主
          </n-a>
        </n-li>
        <n-li>
          或许您想：
          <router-link to="/" class="link">
            <n-a>返回主页</n-a>
          </router-link>
        </n-li>
      </n-ul>
    </n-space>
  </motion.div>
</template>

<style scoped>
.link {
  text-decoration: none;
}
</style>
