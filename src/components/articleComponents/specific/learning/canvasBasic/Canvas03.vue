<script setup lang="ts">
import { onMounted, ref } from "vue";

const canvas = ref();
onMounted(() => {
	const ctx = canvas.value.getContext("2d");
	ctx.beginPath();
	ctx.rect(80, 20, 70, 150);
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = "purple";
	ctx.lineWidth = 5;
	ctx.strokeRect(50, 90, 120, 30);

	ctx.beginPath();
	ctx.fillStyle = "#ff6600cc";
	ctx.fillRect(20, 30, 80, 80);
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
