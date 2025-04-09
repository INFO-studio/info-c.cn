<script setup lang="ts">
import { ref } from 'vue'
import { useConformities } from '@/hooks/conformities.ts'
import ArticleContent from '@/components/articleComponents/common/ArticleContent.vue'
import { useRouter } from 'vue-router'
import ArticleCard from '@/components/articleComponents/common/ArticleCard.vue'

const router = useRouter()

const conformities = useConformities()

const articleListConformitied = conformities.getArticleListConformitied(
  'createDate',
  (val: Date) => `${val.getFullYear()} - ${val.getMonth() + 1}`,
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
