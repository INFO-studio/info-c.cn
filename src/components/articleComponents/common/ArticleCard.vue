<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  NCard,
  NIcon,
  NSpace,
  NP
} from 'naive-ui'
import ArticleGlowContainer from '@/components/articleComponents/common/ArticleGlowContainer.vue'
import ArticleTag from '@/components/articleComponents/common/ArticleTag.vue'
import type { DocumentRouteTree } from '@/router/interfaces'
import { useRouter } from 'vue-router'
import { motion } from 'motion-v'

const props = defineProps<{
  article: DocumentRouteTree
  blur?: boolean
}>()

const router = useRouter()

const isHover = ref<boolean>(false)

const isBlur = computed(() => props.blur)
</script>

<template>
  <article-glow-container
    :glow-size="100"
    @click="() => router.push(props.article.path)"
    class="article-card-glow-container"
    :class="{ blur: isBlur }"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <motion.div
      :animate="
        isHover
          ? {
              scale: 0.99,
              y: -1.5,
            }
          : {
              filter: isBlur ? 'blur(2px)' : 'none',
              transition: {
                filter: { type: 'ease' },
              },
            }
      "
      :whilePress="{
        scale: 0.98,
        y: -1.5,
      }"
    >
      <n-card :title="props.article.title" class="article-card">
        <template #header-extra v-if="props.article.icon">
          <n-icon :component="props.article.icon" size="24"/>
        </template>
        <n-space vertical v-if="props.article.tags || props.article.description">
          <n-space v-if="props.article.tags">
            <article-tag v-for="tag in props.article.tags" :glow="false">{{ tag }}</article-tag>
          </n-space>
          <n-space v-if="props.article.description">
            <n-p>{{ article.description }}</n-p>
          </n-space>
        </n-space>
      </n-card>
    </motion.div>
  </article-glow-container>
</template>

<style scoped>
.article-card-glow-container {
  cursor: pointer;
}
</style>
