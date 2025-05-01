<script setup lang="ts">
import { motion } from 'motion-v'
import { ref, computed } from 'vue'
import {
  NFlex,
  NAvatar,
  NP,
  NSpace,
  NTag,
  NCard,
  NDivider,
  useThemeVars
} from 'naive-ui'
import avatar from '@/assets/images/index/avatar.jpg'
import ArticleGlowContainer from '@/components/articleComponents/common/ArticleGlowContainer.vue'
import {
  Vue,
  React,
  Node,
  TypeScript,
  Python,
  Rust,
  DavinciResolve,
  Electron,
  Vitest,
  Mysql,
} from '@/assets/icons/brand'
import { getRouteData } from '@/router/utils/getRoutePath.ts'
import { getRouteTree } from '@/router/utils/getRouteTree.ts'
import { routes } from '@/router/routes'
import TechStackIcon from '@/components/articleComponents/specific/appHome/TechStackIcon.vue'
import { ArticleCard, ArticleContent } from '@/components'
import { useThemeStore } from '@/stores/theme.ts'

const themeVars = useThemeVars()
const themeStore = useThemeStore()
const avatarBackgroundGlowColor = computed(() => themeStore.isDarkTheme ? themeVars.value.primaryColor : themeVars.value.primaryColorPressed)
const avatarBackgroundGlowOpacity = computed(() => themeStore.isDarkTheme ? 0.5 : 0.8)

const isAvatarHover = ref(false)

const routeTree = getRouteTree(routes)

const articlesHome = [
  getRouteData('chattering', routeTree),
  getRouteData('projects', routeTree),
  getRouteData('learning', routeTree),
  getRouteData('conformities', routeTree),
]
</script>

<template>
  <article-content>
    <n-flex vertical align="center" justify="center" class="app-home">
      <div
        class="avatar-wrapper"
        @mouseenter="isAvatarHover = true"
        @mouseleave="isAvatarHover = false"
      >
        <motion.div :animate="isAvatarHover ? { scale: 0.9, rotate: '-10deg' } : {}" class="avatar">
          <n-avatar round :size="200" :src="avatar" :img-props="{draggable: false}" />
        </motion.div>
        <motion.div
          class="hover-question"
          :initial="{ opacity: 0 }"
          :animate="isAvatarHover ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }"
        >
          ?
        </motion.div>
      </div>
      <n-flex vertical align="center" justify="center">
        <n-p class="name">茵符草</n-p>
        <n-space>
          <article-glow-container class="main-tag-glow">
            <n-tag round :bordered="false">重庆大学</n-tag>
          </article-glow-container>
          <article-glow-container class="main-tag-glow">
            <n-tag round :bordered="false">前端小废物</n-tag>
          </article-glow-container>
          <article-glow-container class="main-tag-glow">
            <n-tag round :bordered="false">音游吃</n-tag>
          </article-glow-container>
          <article-glow-container class="main-tag-glow">
            <n-tag round :bordered="false">Vocaloid 业余P</n-tag>
          </article-glow-container>
        </n-space>
        <n-card title="技术栈" :bordered="false" class="no-background-card">
          <n-space>
            <tech-stack-icon title="Vue" color="#4FC08D" :icon="Vue" />
            <tech-stack-icon title="React" color="#61DAFB" :icon="React" />
            <tech-stack-icon title="Node" color="#5FA04E" :icon="Node" />
            <n-divider vertical />
            <tech-stack-icon title="TypeScript" color="#3178C6" :icon="TypeScript" />
            <tech-stack-icon title="Python" color="#3776AB" :icon="Python" />
            <tech-stack-icon title="Rust" :icon="Rust" />
            <n-divider vertical />
            <tech-stack-icon title="Davinci Resolve" color="#233A51" :icon="DavinciResolve" />
            <n-divider vertical />
            <tech-stack-icon title="Electron" color="#47848F" :icon="Electron" />
            <tech-stack-icon title="Vitest" color="#6E9F18" :icon="Vitest" />
            <tech-stack-icon title="MySQL" color="#4479A1" :icon="Mysql" />
          </n-space>
        </n-card>
        <n-card title="查成分" :bordered="false" class="no-background-card">
          <n-space>
            <n-tag round>Vocaloid</n-tag>
            <n-tag round>魔女之旅</n-tag>
            <n-tag round>Project Sekai</n-tag>
            <n-tag round>Maimai</n-tag>
            <n-tag round>任天堂</n-tag>
            <n-tag round>空洞骑士</n-tag>
            <n-tag round>月亮计划</n-tag>
            <n-tag round>明日方舟</n-tag>
            <n-tag round>海市蜃楼之馆</n-tag>
            <n-tag round>以撒的结合</n-tag>
            <n-tag round>Mili</n-tag>
            <n-tag round>东方 Project</n-tag>
            <n-tag round>炉石传说</n-tag>
          </n-space>
        </n-card>
        <n-card title="看导航" :bordered="false" class="no-background-card">
          <n-flex class="article-home-flex">
            <article-card v-for="article in articlesHome" :article="article" class="article-home" />
          </n-flex>
        </n-card>
      </n-flex>
    </n-flex>
  </article-content>
</template>

<style scoped>
.avatar-wrapper {
  position: relative;
  padding: 10px 0;

  & > .hover-question {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    font-weight: bold;
    pointer-events: none;
  }
}

.name {
  font-size: 2em;
}

.main-tag-glow {
  border-radius: 1000px;
  padding: 2px;
}

.no-background-card {
  background: none;
}

.article-home {
  flex: 1;
  min-width: 10em;
}

.avatar {
  position: relative;
  &:before {
    content: "aaaaaa";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: v-bind(avatarBackgroundGlowColor);
    filter: blur(100px);
    opacity: v-bind(avatarBackgroundGlowOpacity);
    transition: opacity .5s, background-color .5s;
    will-change: opacity, background-color;
    z-index: -1;
  }
}
</style>
