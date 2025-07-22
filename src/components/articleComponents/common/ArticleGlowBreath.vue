<script setup lang="ts">
import { computed } from 'vue'
import { motionDiv } from '@/exports/motion.ts'

interface Props {
  color?: string
  opacity?: number
  blurRadius?: number
  reversed?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  opacity: 0.5,
  blurRadius: 100,
  reversed: false
})

const glowStyle = computed(() => ({
  background: props.color,
  filter: `blur(${props.blurRadius}px)`,
  opacity: props.opacity
}))
</script>

<template>
  <motion-div
    class="glow-effect"
    :style="glowStyle"
    :animate="{
      scale: props.reversed ? [1, 0.9, 1] : [0.9, 1, 0.9],
      x: ['-50%', '-50%', '-50%'],
      y: ['-50%', '-50%', '-50%']
    }"
    :transition="{
      duration: 2,
      repeat: Infinity,
    }"
  />
</template>

<style scoped>
.glow-effect {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  z-index: -1;
  will-change: transform, opacity;
  transform: translate(-50%, -50%);
}
</style>
