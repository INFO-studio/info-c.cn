<script setup lang="ts">
import { motion } from 'motion-v'
import { getRouteData } from '@/router/utils/getRoutePath.ts'
import { useRoute } from 'vue-router'
import { getRouteTree } from '@/router/utils/getRouteTree.ts'
import { routes } from '@/router/routes'
import ArticleDate from '@/components/articleComponents/common/ArticleDate.vue'
import ArticleTag from '@/components/articleComponents/common/ArticleTag.vue'
import ArticleAnchor from '@/components/articleComponents/common/ArticleAnchor.vue'

const route = useRoute()
const routeData = getRouteData(route.path, getRouteTree(routes))
</script>

<template>
  <article-anchor mode="fixed" />
  <motion.div :initial="{ opacity: 0, y: 100 }" :animate="{ opacity: 1, y: 0 }" class="article">
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
  </motion.div>
</template>

<style scoped></style>
