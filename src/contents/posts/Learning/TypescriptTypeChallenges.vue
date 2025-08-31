<script setup lang="ts">
import { NAlert, NP } from "naive-ui";
import { ArticleContent } from "@/components";
</script>

<template>
  <article-content>
    <n-p>
      <n-alert title="提醒" type="warning">目前文章完全没写</n-alert>
    </n-p>
    <n-p>
      类型体操，即是 TypeScript 进行类型编程的各种技巧
    </n-p>
    <n-p>
      keyof extends typeof ...
    </n-p>
  </article-content>
</template>

<style scoped>

</style>
