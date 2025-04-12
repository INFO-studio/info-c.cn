<script setup lang="ts">
import { type Component, ref } from 'vue'
import { motion } from 'motion-v'

const props = defineProps<{
  title: string
  color?: string
  icon: Component
}>()

const isHover = ref(false)
</script>

<template>
  <n-flex vertical align="center" justify="center" style="position: relative">
    <motion.div
      :initial="{
        opacity: 0,
      }"
      :animate="
        isHover
          ? {
              opacity: 1,
              y: 30
            }
          : {
              opacity: 0,
              y: 0,
            }
      "
      class="tech-stack-icon-title"
    >
      <n-tag round :bordered="false">
        {{ props.title }}
      </n-tag>
    </motion.div>
    <n-icon
      :color="props.color"
      size="24"
      @mouseenter="isHover = true"
      @mouseleave="isHover = false"
    >
      <component :is="props.icon" />
    </n-icon>
  </n-flex>
</template>

<style scoped>
.tech-stack-icon-title {
  position: absolute;
  white-space: nowrap;
  z-index: -1;
  user-select: none;
}
</style>
