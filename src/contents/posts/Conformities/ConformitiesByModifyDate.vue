<script setup lang="ts">
import { NSpace, NTabPane, NTabs } from "naive-ui";
import { ref } from "vue";
import { ArticleCard, ArticleContent } from "@/components";
import { useConformities } from "@/hooks/conformities.ts";

const conformities = useConformities();

const articleListConformitied = conformities.getArticleListConformitied(
	"modifyDate",
	(val: Date) => `${val.getFullYear()} - ${val.getMonth() + 1}`,
	(val: string) => val.split(" - "),
);

const hoverPath = ref<string | null>(null);
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
