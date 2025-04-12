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
  ctx.moveTo(150, 170)
  ctx.quadraticCurveTo(50, 40, 50, 140)
  ctx.lineWidth = 5
  ctx.stroke()

  ctx.beginPath()
  ctx.setLineDash([10, 5]);
  ctx.lineWidth = 1
  ctx.strokeStyle = 'red'
  ctx.moveTo(150, 170)
  ctx.lineTo(50, 40)
  ctx.stroke()
  ctx.lineTo(50, 140)
  ctx.stroke()

  drawPoint(150, 170, '起点', 0, -10)
  drawPoint(50, 40, '控制点', -25, -10)
  drawPoint(50, 140, '终点', -15, 25)

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
