<script setup lang="ts">
import { NH2, NP, NSpace } from "naive-ui";
import { ref } from "vue";
import { useRoute } from "vue-router";
import ArticleCard from "@/components/articleComponents/common/ArticleCard.vue";
import { motionDiv } from "@/exports/motion";
import { routes } from "@/router/routes";
import { getRouteData } from "@/router/utils/getRoutePath.ts";
import { getRouteTree } from "@/router/utils/getRouteTree.ts";

const route = useRoute();
const routeData = getRouteData(route.path, getRouteTree(routes));
const hoverPath = ref<string | null>(null);
</script>

<template>
  <motion-div :initial="{ opacity: 0, y: 100 }" :animate="{ opacity: 1, y: 0 }" class="article">
    <n-h2 v-if="routeData.title" prefix="bar" class="article-title">
      <n-text>{{ routeData.title }}</n-text>
    </n-h2>
    <n-space vertical>
      <n-p v-if="routeData.indexContent">{{ routeData.indexContent }}</n-p>
      <article-card
        v-for="article in routeData.children"
        :article="article"
        :blur="hoverPath !== null && hoverPath !== article.path"
        @mouseenter="hoverPath = article.path"
        @mouseleave="hoverPath = null"
      />
    </n-space>
  </motion-div>
</template>
