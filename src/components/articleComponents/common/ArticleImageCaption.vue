<script setup lang="ts">
import { NP } from 'naive-ui'
</script>

<template>
  <n-p :depth="3" class="article-image-caption">
    <slot />
  </n-p>
</template>

<style scoped>
.article-image-caption {
  font-size: .9em;
}
</style>
