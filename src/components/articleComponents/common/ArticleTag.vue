<script setup lang="ts">
import { Tag } from 'lucide-vue-next'
import ArticleGlowContainer from '@/components/articleComponents/common/ArticleGlowContainer.vue'
</script>

<template>
  <article-glow-container class="container">
    <n-tag round :bordered="false">
      <n-flex align="center" size="small">
        <slot />
        <n-icon :component="Tag" :size="12" />
      </n-flex>
    </n-tag>
  </article-glow-container>
</template>

<style scoped>
.container {
  border-radius: max(100vh, 100vw);
}
</style>
