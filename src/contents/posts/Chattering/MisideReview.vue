<script setup lang="ts">
import { NImage, NP, NSpace } from "naive-ui";
import MisideHeyboxMedal from "@/assets/images/chattering/miside_review/miside_heybox_medal.png";
import { ArticleContent } from "@/components";
</script>

<template>
  <article-content>
    <n-p>用了三天时间完整通关了《米塔 MiSide》这款游戏</n-p>
    <n-space align="center" justify="center">
      <n-image :src="MisideHeyboxMedal" width="300" class="image"></n-image>
    </n-space>
    <n-p>俄罗斯工业！首先就是动画的流畅程度是在是二次元游戏的顶级水平，各种细节也十分的到位</n-p>
  </article-content>
</template>

<style scoped>
.image {

}
</style>
