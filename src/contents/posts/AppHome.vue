<script setup lang="ts">
import { ref, computed } from 'vue'
import { motionDiv } from '@/exports/motion.ts'
import { NFlex, NAvatar, NP, NSpace, NTag, NCard, NDivider, useThemeVars } from 'naive-ui'
import avatar from '@/assets/images/index/avatar.jpg'
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
import { ArticleCard, ArticleContent, ArticleGlowBreath, ArticleGlowContainer } from '@/components'
import { useThemeStore } from '@/stores/theme.ts'

const themeVars = useThemeVars()
const themeStore = useThemeStore()
const avatarBackgroundGlowColor1 = computed(() =>
  themeStore.isDarkTheme ? themeVars.value.primaryColor : themeVars.value.primaryColorPressed,
)
const avatarBackgroundGlowColor2 = computed(() =>
  themeStore.isDarkTheme ? themeVars.value.primaryColorPressed : themeVars.value.primaryColor,
)
const avatarBackgroundGlowOpacity = computed(() => (themeStore.isDarkTheme ? 0.4 : 0.8))

const isAvatarHover = ref(false)

const routeTree = getRouteTree(routes)

const articlesHome = [
  getRouteData('chattering', routeTree),
  getRouteData('projects', routeTree),
  getRouteData('learning', routeTree),
  getRouteData('conformities', routeTree),
]

const tagsMain = ['重庆大学', '前端小废物', '音游吃', '虚拟歌姬业余P', '字节跳动']

const tagsFavour = [
  'Vocaloid',
  '魔女之旅',
  'Project Sekai',
  'Maimai',
  '神椿',
  '任天堂',
  '空洞骑士',
  '月亮计划',
  '明日方舟',
  '海市蜃楼之馆',
  '以撒的结合',
  'Mili',
  '东方 Project',
  '鸣潮',
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
        <motion-div :animate="isAvatarHover ? { scale: 0.9, rotate: '-10deg' } : {}" class="avatar">
          <n-avatar
            round
            :size="200"
            :src="avatar"
            :img-props="{ draggable: false }"
            style="opacity: 0.9"
          />
          <article-glow-breath
            :color="avatarBackgroundGlowColor1"
            :opacity="avatarBackgroundGlowOpacity"
            reversed
          />
          <article-glow-breath
            :color="avatarBackgroundGlowColor2"
            :opacity="avatarBackgroundGlowOpacity"
            :blur-radius="40"
          />
        </motion-div>
        <motion-div
          class="hover-question"
          :initial="{ opacity: 0 }"
          :animate="isAvatarHover ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }"
        >
          ?
        </motion-div>
      </div>
      <n-flex vertical align="center" justify="center">
        <n-p class="name">茵符草</n-p>
        <n-space>
          <article-glow-container v-for="tag in tagsMain" :key="tag" class="main-tag-glow">
            <n-tag round :bordered="false">{{ tag }}</n-tag>
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
            <n-tag round v-for="tag in tagsFavour" :key="tag">{{ tag }}</n-tag>
          </n-space>
        </n-card>
        <n-card title="看导航" :bordered="false" class="no-background-card">
          <n-flex class="article-home-flex">
            <article-card v-for="article in articlesHome" :article="article" class="article-home" />
          </n-flex>
        </n-card>
        <n-card title="元信息" :bordered="false" class="no-background-card">
          <n-flex vertical>
            <n-text>最近更新时间：2025-07-22</n-text>
            <n-text>更新内容：首页标签</n-text>
          </n-flex>
        </n-card>
      </n-flex>
    </n-flex>
  </article-content>
</template>

<style scoped lang="scss">
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
}

.app-home {
  position: relative;
  z-index: 1;
}
</style>
