<script setup lang="ts">
import { useThemeVars } from 'naive-ui'
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useMouseStore } from '@/stores/mouse.ts'

const themeVars = useThemeVars()
const primaryColor = computed(() => themeVars.value.primaryColor)
const borderRadius = computed(() => themeVars.value.borderRadius)

const mouse = useMouseStore()

const glowContainer = ref<HTMLElement>()
const lightSize = 50

const mouseX = computed(() => {
  if (!glowContainer.value) return '0%'
  const rect = glowContainer.value.getBoundingClientRect()
  return `${((mouse.x - rect.left) / rect.width) * 100}%`
})

const mouseY = computed(() => {
  if (!glowContainer.value) return '0%'
  const rect = glowContainer.value.getBoundingClientRect()
  return `${((mouse.y - rect.top) / rect.height) * 100}%`
})

const observer = ref<ResizeObserver>()
onMounted(() => {
  observer.value = new ResizeObserver(() => {
    const x = mouseX.value
    const y = mouseY.value
  })
  if (glowContainer.value) observer.value.observe(glowContainer.value)
})

onUnmounted(() => {
  observer.value?.disconnect()
})

const radialPos = computed(() => `${mouseX.value} ${mouseY.value}`)
const radialSize = computed(() => `${lightSize * 1.5}px`)
</script>

<template>
  <div class="glow-container" ref="glowContainer">
    <slot />
  </div>
</template>

<style scoped>
.glow-container {
  position: relative;
  padding: 1px;
  border-radius: v-bind(borderRadius);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background-image: radial-gradient(
      v-bind(radialSize) circle at v-bind(radialPos),
      v-bind(primaryColor),
      transparent
    );
    background-blend-mode: hue, color-dodge;
    opacity: 1;
    transition: opacity 0.3s;
  }
}
</style>
