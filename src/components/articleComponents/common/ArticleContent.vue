<script setup lang="ts">
import { motion } from 'motion-v'
import { getRouteData } from '@/router/utils/getRoutePath.ts'
import { useRoute } from 'vue-router'
import { getRouteTree } from '@/router/utils/getRouteTree.ts'
import { routes } from '@/router/routes'
import ArticleDate from '@/components/articleComponents/common/ArticleDate.vue'
import ArticleTag from '@/components/articleComponents/common/ArticleTag.vue'
import ArticleAnchor from '@/components/articleComponents/common/ArticleAnchor.vue'
import { useWindowStore } from '@/stores/window.ts'

const windowStore = useWindowStore()

const route = useRoute()
const routeData = getRouteData(route.path, getRouteTree(routes))
</script>

<template>
  <article-anchor mode="fixed" />
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
      <motion.div
        :animate="windowStore.width <= 1200 ? { height : 'unset', opacity: 1} : { height: 0, opacity: 0 } "
      >
        <n-card size="small">
          <n-collapse>
            <n-collapse-item title="目录" name="1">
              <article-anchor mode="inline" />
            </n-collapse-item>
          </n-collapse>
        </n-card>
      </motion.div>
    </n-space>
    <slot />
  </motion.div>
</template>

<style scoped></style>
