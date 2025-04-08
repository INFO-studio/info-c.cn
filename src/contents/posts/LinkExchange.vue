<script setup lang="ts">
import { type Component, ref } from 'vue'
import { Link } from 'lucide-vue-next'
import IconCharwind from '@/assets/images/link_exchange/icon-charwind.svg?component'

interface FriendLink {
  name: string
  url: string
  tag?: string[]
  icon?: Component
}

const friendLinks = ref<FriendLink[]>([
  {
    name: 'gy的笔记本',
    url: 'https://charwind.top/',
    tag: ['个人博客', '前端', '嵌入式'],
    icon: IconCharwind,
  },
])

const openLink = (url: string) => {
  window.open(url, '_blank', 'noopener')
}
</script>

<template>
  <n-list bordered hoverable clickable>
    <n-list-item v-for="link in friendLinks" :key="link.name" @click="openLink(link.url)">
      <n-thing>
        <template #avatar>
          <n-avatar>
            <n-icon :component="link.icon ?? Link" />
          </n-avatar>
        </template>
        <template #header>
          {{ link.name }}
        </template>
        <template #header-extra>
          <n-code>
            {{ link.url }}
          </n-code>
        </template>
        <template #description>
          <n-space>
          <n-tag v-for="tag in link.tag" round :bordered="false">
            {{ tag }}
          </n-tag>
          </n-space>
        </template>
      </n-thing>
    </n-list-item>
  </n-list>
</template>

<style scoped></style>
