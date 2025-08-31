<script setup lang="ts">
import { NIcon } from "naive-ui";
import type { Component } from "vue";

const props = withDefaults(
	defineProps<{
		component: Component;
		color?: string;
		depth?: 1 | 2 | 3 | 4 | 5;
		size?: number | string;
	}>(),
	{
		color: undefined,
		depth: undefined,
		size: undefined,
	},
);
</script>

<template>
  <n-icon
    :component="props.component"
    :color="props.color"
    :depth="props.depth"
    :size="props.size"
    class="inline-block w-1.2em h-1.2em vertical--0.2em"
  />
</template>
