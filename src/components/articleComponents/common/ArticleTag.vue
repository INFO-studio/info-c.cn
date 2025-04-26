<script setup lang="ts">
import {
  NTag,
  NFlex,
  NIcon
} from 'naive-ui'
import { Tag } from 'lucide-vue-next'
import ArticleGlowContainer from '@/components/articleComponents/common/ArticleGlowContainer.vue'

const props = defineProps({
  glow: {
    type: Boolean,
    default: true,
  }
})
</script>

<template>
  <article-glow-container v-if="props.glow" class="container">
    <n-tag round :bordered="false">
      <n-flex align="center" size="small">
        <slot />
        <n-icon :component="Tag" :size="12" />
      </n-flex>
    </n-tag>
  </article-glow-container>
  <n-tag v-else round :bordered="false">
    <n-flex align="center" size="small">
      <slot />
      <n-icon :component="Tag" :size="12" />
    </n-flex>
  </n-tag>
</template>

<style scoped>
.container {
  border-radius: max(100vh, 100vw);
}
</style>
