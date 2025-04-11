<script setup lang="ts">
import { ref, onMounted } from 'vue'
const canvas = ref()
onMounted(() => {
  const ctx = canvas.value.getContext('2d')
  ctx.beginPath()
  ctx.moveTo(20, 40)
  ctx.arcTo(150, 20, 30, 170, 40)
  ctx.lineTo(120, 140)
  ctx.lineWidth = 5
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(20, 40)
  ctx.lineTo(150, 20)
  ctx.lineTo(30, 170)
  ctx.setLineDash([10, 5]);
  ctx.lineWidth = 1
  ctx.strokeStyle = 'red'
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
