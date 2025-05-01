<script setup lang="ts">
import { ref } from 'vue'
import {
  NTabs,
  NTabPane,
  NSpace,
} from 'naive-ui'
import { useConformities } from '@/hooks/conformities.ts'
import { ArticleCard, ArticleContent } from '@/components'
const conformities = useConformities()

const articleListConformitied = conformities.getArticleListConformitied(
  'tags',
)

const hoverPath = ref<string | null>(null)
</script>

<template>
  <article-content>
    <n-tabs type="line" animated>
      <n-tab-pane
        v-for="articleList in articleListConformitied"
        :name="articleList.key"
        :tab="articleList.key"
      >
        <n-space vertical>
          <article-card
            v-for="article in articleList.articles"
            :article="article"
            :blur="hoverPath !== null && hoverPath !== article.path"
            @mouseenter="hoverPath = article.path"
            @mouseleave="hoverPath = null"
          />
        </n-space>
      </n-tab-pane>
    </n-tabs>
  </article-content>
</template>

<style scoped></style>
