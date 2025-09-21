<script setup lang="ts">
import { useMouse } from "@vueuse/core";
import { useThemeVars } from "naive-ui";
import { computed, onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
	glowSize: {
		type: Number,
		default: 75,
	},
});

const themeVars = useThemeVars();
const primaryColor = computed(() => themeVars.value.primaryColor);

const { x, y } = useMouse();

const glowContainer = ref<HTMLElement>();

const mouseX = computed(() => {
	if (!glowContainer.value) return "0%";
	const rect = glowContainer.value.getBoundingClientRect();
	return `${((x.value - rect.left) / rect.width) * 100}%`;
});

const mouseY = computed(() => {
	if (!glowContainer.value) return "0%";
	const rect = glowContainer.value.getBoundingClientRect();
	return `${((y.value - rect.top) / rect.height) * 100}%`;
});

const observer = ref<ResizeObserver>();
onMounted(() => {
	observer.value = new ResizeObserver(() => {
		const x = mouseX.value;
		const y = mouseY.value;
		return { x, y };
	});
	if (glowContainer.value) observer.value.observe(glowContainer.value);
});

onUnmounted(() => {
	observer.value?.disconnect();
});

const radialPos = computed(() => `${mouseX.value} ${mouseY.value}`);
const radialSize = computed(() => `${props.glowSize}px`);
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
