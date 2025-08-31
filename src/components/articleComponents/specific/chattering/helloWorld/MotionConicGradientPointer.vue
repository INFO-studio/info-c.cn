<script setup lang="ts">
import { motion } from "motion-v";

const draw = {
	hidden: { pathLength: 0, opacity: 0 },
	visible: (j: unknown) => {
		const i = j as number;
		const delay = i * 0.5;
		return {
			pathLength: 1,
			opacity: 1,
			transition: {
				pathLength: {
					delay,
					type: "spring",
					duration: 1.5,
					bounce: 0,
					repeat: Infinity,
					repeatType: "reverse",
				},
				opacity: { delay, duration: 0.01 },
			},
		};
	},
};

/**
 * ==============   Styles   ================
 */

const image = {
	maxWidth: "80vw",
};

const shape = {
	strokeWidth: 5,
	strokeLinecap: "round",
	fill: "transparent",
};
</script>

<template>
  <motion.svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    initial="hidden"
    animate="visible"
    :style="image"
  >
    <motion.circle
      class="circle-path"
      :cx="100 / 3"
      :cy="100 / 3"
      :r="80 / 3"
      stroke="#ff0088"
      :variants="draw"
      :custom="1"
      :style="shape"
    />
    <motion.line
      :x1="220 / 3"
      :y1="30 / 3"
      :x2="360 / 3"
      :y2="170 / 3"
      stroke="#4ff0b7"
      :variants="draw"
      :custom="2"
      :style="shape"
    />
    <motion.line
      :x1="220 / 3"
      :y1="170 / 3"
      :x2="360 / 3"
      :y2="30 / 3"
      stroke="#4ff0b7"
      :variants="draw"
      :custom="2.5"
      :style="shape"
    />
    <motion.rect
      :width="140 / 3"
      :height="140 / 3"
      :x="410 / 3"
      :y="30 / 3"
      :rx="20 / 3"
      stroke="#0d63f8"
      :variants="draw"
      :custom="3"
      :style="shape"
    />
    <motion.circle
      :cx="100 / 3"
      :cy="300 / 3"
      :r="80 / 3"
      stroke="#0d63f8"
      :variants="draw"
      :custom="2"
      :style="shape"
    />
    <motion.line
      :x1="220 / 3"
      :y1="230 / 3"
      :x2="360 / 3"
      :y2="370 / 3"
      stroke="#ff0088"
      :custom="3"
      :variants="draw"
      :style="shape"
    />
    <motion.line
      :x1="220 / 3"
      :y1="370 / 3"
      :x2="360 / 3"
      :y2="230 / 3"
      stroke="#ff0088"
      :custom="3.5"
      :variants="draw"
      :style="shape"
    />
    <motion.rect
      :width="140 / 3"
      :height="140 / 3"
      :x="410 / 3"
      :y="230 / 3"
      :rx="20 / 3"
      stroke="#4ff0b7"
      :custom="4"
      :variants="draw"
      :style="shape"
    />
    <motion.circle
      :cx="100 / 3"
      :cy="500 / 3"
      :r="80 / 3"
      stroke="#4ff0b7"
      :variants="draw"
      :custom="3"
      :style="shape"
    />
    <motion.line
      :x1="220 / 3"
      :y1="430 / 3"
      :x2="360 / 3"
      :y2="570 / 3"
      stroke="#0d63f8"
      :variants="draw"
      :custom="4"
      :style="shape"
    />
    <motion.line
      :x1="220 / 3"
      :y1="570 / 3"
      :x2="360 / 3"
      :y2="430 / 3"
      stroke="#0d63f8"
      :variants="draw"
      :custom="4.5"
      :style="shape"
    />
    <motion.rect
      :width="140 / 3"
      :height="140 / 3"
      :x="410 / 3"
      :y="430 / 3"
      :rx="20 / 3"
      stroke="#ff0088"
      :variants="draw"
      :custom="5"
      :style="shape"
    />
  </motion.svg>
</template>
