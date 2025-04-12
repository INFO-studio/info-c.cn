<script setup lang="ts">
import { ref, onMounted } from 'vue'
const canvas = ref()

onMounted(() => {
  const ctx = canvas.value.getContext('2d')

  const drawPoint = (x: number, y: number, text: string, offsetX: number, offsetY: number) => {
    ctx.save()
    ctx.beginPath()
    ctx.lineWidth = 1
    ctx.fillStyle = 'black'
    ctx.font = 'normal 1.5em sans-serif'
    ctx.setLineDash([])
    ctx.arc(x, y, 2, 0, Math.PI * 2)
    ctx.stroke()
    ctx.fillText(text, x + offsetX, y + offsetY)
    ctx.restore()
  }

  ctx.beginPath()
  ctx.moveTo(20, 40)
  ctx.arcTo(150, 20, 30, 170, 40)
  ctx.lineTo(120, 140)
  ctx.lineWidth = 5
  ctx.stroke()

  ctx.beginPath()
  ctx.setLineDash([10, 5]);
  ctx.lineWidth = 1
  ctx.strokeStyle = 'red'
  ctx.moveTo(20, 40)
  ctx.lineTo(150, 20)
  ctx.stroke()
  ctx.lineTo(30, 170)
  ctx.stroke()

  drawPoint(20, 40, '当前点', -10, -15)
  drawPoint(150, 20, '点1', 10, 5)
  drawPoint(30, 170, '点2', 10, 10)
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
