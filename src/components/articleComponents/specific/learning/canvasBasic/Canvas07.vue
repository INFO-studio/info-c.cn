<script setup lang="ts">
import { onMounted, ref } from "vue";

const canvas = ref();
onMounted(() => {
	const ctx = canvas.value.getContext("2d");

	const drawPoint = (x: number, y: number, text: string, offsetX: number, offsetY: number) => {
		ctx.save();
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.fillStyle = "black";
		ctx.font = "normal 1.5em sans-serif";
		ctx.setLineDash([]);
		ctx.arc(x, y, 2, 0, Math.PI * 2);
		ctx.stroke();
		ctx.fillText(text, x + offsetX, y + offsetY);
		ctx.restore();
	};

	ctx.beginPath();
	ctx.moveTo(150, 30);
	ctx.bezierCurveTo(160, 150, 30, 40, 50, 140);
	ctx.lineWidth = 5;
	ctx.stroke();

	ctx.beginPath();
	ctx.setLineDash([10, 5]);
	ctx.lineWidth = 1;
	ctx.strokeStyle = "red";
	ctx.moveTo(150, 30);
	ctx.lineTo(160, 150);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(30, 40);
	ctx.lineTo(50, 140);
	ctx.stroke();

	drawPoint(150, 30, "起点", -30, -5);
	drawPoint(160, 150, "控制点1", -40, 25);
	drawPoint(30, 40, "控制点2", -20, -10);
	drawPoint(50, 140, "终点", -15, 25);
});
</script>

<template>
  <canvas ref="canvas" width="200" height="200" class="canvas"></canvas>
</template>

<style scoped>
.canvas {
  background-color: #f9f9f9;
}
</style>
