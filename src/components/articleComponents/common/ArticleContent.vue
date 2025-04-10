<script setup lang="ts">
import { motion } from 'motion-v'
import { getRouteData } from '@/router/utils/getRoutePath.ts'
import { useRoute } from 'vue-router'
import { getRouteTree } from '@/router/utils/getRouteTree.ts'
import { routes } from '@/router/routes'
import ArticleDate from '@/components/articleComponents/common/ArticleDate.vue'
import ArticleTag from '@/components/articleComponents/common/ArticleTag.vue'

const route = useRoute()
const routeData = getRouteData(route.path, getRouteTree(routes))
</script>

<template>
  <motion.div :initial="{ opacity: 0, y: 100 }" :animate="{ opacity: 1, y: 0 }" class="article">
    <n-h2 v-if="routeData.title" prefix="bar" align-text class="article-title">
      <n-text>{{ routeData.title }}</n-text>
    </n-h2>
    <n-space vertical>
      <n-space>
        <article-date v-if="routeData.createDate" category="create" :date="routeData.createDate" />
        <article-date v-if="routeData.modifyDate" category="modify" :date="routeData.modifyDate" />
      </n-space>
      <n-space>
        <article-tag v-for="tag in routeData.tags">{{ tag }}</article-tag>
      </n-space>
    </n-space>
    <slot/>
  </motion.div>
</template>

<style scoped></style>
