<script setup lang="ts">
import { Tag } from "lucide-vue-next";
import { NFlex, NIcon, NTag } from "naive-ui";
import ArticleGlowContainer from "@/components/articleComponents/common/ArticleGlowContainer.vue";

const props = withDefaults(
	defineProps<{
		glow?: boolean;
	}>(),
	{
		glow: true,
	},
);
</script>

<template>
  <article-glow-container v-if="props.glow" class="rounded-full">
    <n-tag round :bordered="false">
      <n-flex align="center" size="small">
        <slot />
        <n-icon :component="Tag" :size="12" />
      </n-flex>
    </n-tag>
  </article-glow-container>
  <n-tag v-else round :bordered="false">
    <n-flex align="center" size="small">
      <slot />
      <n-icon :component="Tag" :size="12" />
    </n-flex>
  </n-tag>
</template>
