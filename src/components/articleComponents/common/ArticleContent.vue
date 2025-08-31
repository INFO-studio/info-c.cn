<script setup lang="ts">
import { NH2, NSpace, NText } from "naive-ui";
import { useRoute } from "vue-router";
import ArticleAnchor from "@/components/articleComponents/common/ArticleAnchor.vue";
import ArticleDate from "@/components/articleComponents/common/ArticleDate.vue";
import ArticleTag from "@/components/articleComponents/common/ArticleTag.vue";
import { motionDiv } from "@/exports/motion.ts";
import { routes } from "@/router/routes";
import { getRouteData } from "@/router/utils/getRoutePath.ts";
import { getRouteTree } from "@/router/utils/getRouteTree.ts";

const route = useRoute();
const routeData = getRouteData(route.path, getRouteTree(routes));
</script>

<template>
  <article-anchor mode="fixed" />
  <motion-div :initial="{ opacity: 0, y: 100 }" :animate="{ opacity: 1, y: 0 }" class="article">
    <n-h2 v-if="routeData.title" prefix="bar" align-text class="article-title">
      <n-text>{{ routeData.title }}</n-text>
    </n-h2>
    <n-space vertical size="large">
      <n-space v-if="routeData.createDate && routeData.modifyDate">
        <article-date v-if="routeData.createDate" category="create" :date="routeData.createDate" />
        <article-date v-if="routeData.modifyDate" category="modify" :date="routeData.modifyDate" />
      </n-space>
      <n-space v-if="routeData.tags">
        <article-tag v-for="tag in routeData.tags">{{ tag }}</article-tag>
      </n-space>
      <article-anchor mode="inline" />
      <div>
        <slot />
      </div>
    </n-space>
  </motion-div>
</template>
