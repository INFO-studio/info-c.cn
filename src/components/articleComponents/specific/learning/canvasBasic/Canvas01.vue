<script setup lang="ts">
import { onMounted, ref } from "vue";

const canvas = ref();
onMounted(() => {
	const ctx = canvas.value.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(10, 10);
	ctx.lineTo(190, 190);
	ctx.lineTo(120, 180);
	ctx.closePath();
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(190, 10);
	ctx.lineTo(10, 190);
	ctx.lineWidth = 10;
	ctx.strokeStyle = "red";
	ctx.stroke();
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
