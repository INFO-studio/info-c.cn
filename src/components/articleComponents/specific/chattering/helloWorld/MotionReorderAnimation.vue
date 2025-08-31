<script setup lang="ts">
import { motion } from "motion-v";
import { type CSSProperties, onBeforeUnmount, onMounted, ref } from "vue";

const initialOrder = ["#ff0088", "#dd00ee", "#9911ff", "#0d63f8"];

const order = ref([...initialOrder]);

let intervalId: number | null = null;

onMounted(() => {
	intervalId = window.setInterval(() => {
		order.value = shuffle(order.value);
	}, 1000);
});

onBeforeUnmount(() => {
	if (intervalId !== null) {
		clearInterval(intervalId);
	}
});

/**
 * ==============   Utils   ================
 */
function shuffle([...array]: string[]) {
	return array.sort(() => Math.random() - 0.5);
}

/**
 * ==============   Styles   ================
 */

const spring = {
	type: "spring",
	damping: 20,
	stiffness: 300,
};

const container: CSSProperties = {
	listStyle: "none",
	padding: "0px",
	margin: "0px",
	position: "relative",
	display: "flex",
	flexWrap: "wrap",
	gap: "10px",
	width: "200px",
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center",
};

const item = {
	width: "95px",
	height: "95px",
	borderRadius: "10px",
};
</script>

<template>
  <ul :style="container">
    <motion.li
      v-for="backgroundColor in order"
      :key="backgroundColor"
      layout
      :transition="spring"
      :style="{ ...item, backgroundColor }"
    />
  </ul>
</template>
