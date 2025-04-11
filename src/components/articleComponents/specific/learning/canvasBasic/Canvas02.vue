<script setup lang="ts">
import { ref, onMounted } from 'vue'
const canvas = ref()
onMounted(() => {
  const ctx = canvas.value.getContext('2d')
  ctx.beginPath()
  ctx.moveTo(10, 10)
  ctx.lineTo(190, 190)
  ctx.lineTo(120, 180)
  ctx.lineTo(150, 40)
  ctx.fillStyle = 'yellow'
  ctx.fill()
  ctx.lineTo(20, 100)
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
