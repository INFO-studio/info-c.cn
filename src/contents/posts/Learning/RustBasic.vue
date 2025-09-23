<script setup lang="ts">
import { NAlert, NP } from "naive-ui";
import { ArticleContent, ArticleTitle } from "@/components";
</script>

<template>
  <article-content>
    <n-p>
      <n-alert title="提醒" type="warning">目前文章完全没写</n-alert>
    </n-p>
    <article-title :h="3" title="1. 啥也没有"/>
    <n-p>
      啥也没有
    </n-p>
  </article-content>
</template>

<style scoped>

</style>
