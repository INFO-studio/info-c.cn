<script setup lang="ts">
import { ref, onMounted } from 'vue'
const canvas = ref()
onMounted(() => {
  const ctx = canvas.value.getContext('2d')

  const drawPoint = (x: number, y: number, text: string, offsetX: number, offsetY: number) => {
    ctx.save()
    ctx.beginPath()
    ctx.lineWidth = 1
    ctx.strokeStyle = 'black'
    ctx.setLineDash([])
    ctx.arc(x, y, 2, 0, Math.PI * 2)
    ctx.stroke()
    ctx.fillText(text, x + offsetX, y + offsetY)
    ctx.restore()
  }

  ctx.beginPath()
  ctx.arc(120, 80, 50, 0, Math.PI / 3, true)
  ctx.lineWidth = 5
  ctx.stroke()

  ctx.beginPath()
  ctx.setLineDash([10, 5]);
  ctx.lineWidth = 1
  ctx.strokeStyle = 'red'
  ctx.moveTo(170, 80)
  ctx.lineTo(120, 80)
  ctx.stroke()
  ctx.lineTo(145, 80 + 25 * Math.sqrt(3))
  ctx.stroke()

  drawPoint(120, 80, '圆心', 10, 10)

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
