<script setup lang="ts">
import { motion } from 'motion-v'
</script>

<template>
  <motion.div
    :initial="{ opacity: 0, y: 100 }"
    :animate="{ opacity: 1, y: 0 }"
    class="article"
  >
    <n-h2 prefix="bar" class="article-title">
      <n-text>小项目</n-text>
    </n-h2>
    <n-p>
      这里是我写过的一些项目
    </n-p>
  </motion.div>
</template>

<style>
</style>
