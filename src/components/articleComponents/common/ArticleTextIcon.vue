<script setup lang="ts">
import type { Component } from 'vue'

const props = defineProps<{
  component: Component
  color?: string
  depth?: 1 | 2 | 3 | 4 | 5 | 6
  size?: number | string
}>()
</script>

<template>
  <n-icon
    :component="props.component"
    :color="props.color ?? undefined"
    :depth="props.depth ?? undefined"
    :size="props.size ?? undefined"
    class="article-text-icon"
  />
</template>

<style scoped>
.article-text-icon {
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  vertical-align: -0.2em;
}
</style>
