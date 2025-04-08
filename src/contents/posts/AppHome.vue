<script setup lang="ts">
import avatar from '@/assets/images/index/avatar.jpg'
import { motion } from 'motion-v'
import { ref } from 'vue'
import ArticleGlowContainer from '@/components/articleComponents/common/ArticleGlowContainer.vue'
import { Vue, React, Node, Typescript, Python, Rust, DavinciResolve, Mysql } from '@/assets/icons/brand'
import ArticleContent from '@/components/articleComponents/common/ArticleContent.vue'
const isAvatarHover = ref(false)
</script>

<template>
  <article-content>
    <n-flex vertical align="center" justify="center">
      <div
        class="avatar-wrapper"
        @mouseenter="isAvatarHover = true"
        @mouseleave="isAvatarHover = false"
      >
        <motion.div
          :animate="isAvatarHover ? { scale: 0.9, rotate: '-10deg' } : {}"
        >
          <n-avatar draggable="false" round :size="200" :src="avatar" />
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
            <n-icon color="#4FC08D" size="24"><Vue/></n-icon>
            <n-icon color="#61DAFB" size="24"><React/></n-icon>
            <n-icon color="#5FA04E" size="24"><Node/></n-icon>
            <n-divider vertical/>
            <n-icon color="#3178C6" size="24"><Typescript/></n-icon>
            <n-icon color="#3776AB" size="24"><Python/></n-icon>
            <n-icon size="24"><Rust/></n-icon>
            <n-divider vertical/>
            <n-icon color="#233A51" size="24"><DavinciResolve/></n-icon>
            <n-divider vertical/>
            <n-icon color="#4479A1" size="24"><Mysql/></n-icon>
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

</style>
