<script setup lang="ts">
import { ref, onMounted } from 'vue'
const canvas = ref()
onMounted(() => {
  const ctx = canvas.value.getContext('2d')
  ctx.beginPath()
  ctx.arc(120, 80, 50, 0, Math.PI / 3, true)
  ctx.lineWidth = 5
  ctx.stroke()
})
</script>

<template>
  <canvas ref="canvas" width="200" height="200" class="canvas"></canvas>
</template>

<style scoped>
.canvas {
  background-color: #f9f9f9;
}
</style>
