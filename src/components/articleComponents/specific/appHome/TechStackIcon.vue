<script setup lang="ts">
import { type Component, ref } from 'vue'
import { NFlex, NIcon } from 'naive-ui'
import { motionDiv } from '@/exports/motion.ts'

const props = defineProps<{
  title: string
  color?: string
  icon: Component
}>()

const isHover = ref(false)
</script>

<template>
  <n-flex
    :size="0"
    justify="center"
    align="center"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <n-icon :color="props.color" size="24">
      <component :is="props.icon" />
    </n-icon>
    <motion-div
      :initial="{
        opacity: 0,
      }"
      :animate="
        isHover
          ? {
              opacity: 1,
              y: 24,
            }
          : {
              opacity: 0,
              y: 0,
            }
      "
      class="tech-stack-icon-title"
    >
      {{ props.title }}
    </motion-div>
  </n-flex>
</template>

<style scoped>
.tech-stack-icon-title {
  position: absolute;
  white-space: nowrap;
  text-shadow: 0 0 10px;
  z-index: 1;
  user-select: none;
  pointer-events: none;
}
</style>
