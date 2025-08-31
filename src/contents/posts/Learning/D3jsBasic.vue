<script setup lang="ts">
import { NAlert, NFlex, NP } from "naive-ui";
import { ArticleContent, ArticleTitle } from "@/components";
import { D3js01 } from "@/components/articleComponents/specific/learning/d3jsBasic";
</script>

<template>
  <article-content>
    <n-p>
      <n-alert title="提醒" type="warning">目前文章完全没写</n-alert>
    </n-p>
    <article-title :h="3" href="1_简介">1. 简介</article-title>
    <n-flex justify="center">
      <d3js01 />
    </n-flex>
  </article-content>
</template>

<style scoped>

</style>
