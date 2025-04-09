<script setup lang="ts">
import { type Component, onUnmounted, ref, markRaw } from 'vue'
import { Link } from 'lucide-vue-next'
import IconCharwind from '@/assets/images/link_exchange/icon-charwind.svg?component'
import IconSealParadise from '@/assets/images/link_exchange/icon-sealparadise.png'
import IconAzrmedit0x from '@/assets/images/link_exchange/icon-AzrMedit0x.jpg'
import ArticleContent from '@/components/articleComponents/common/ArticleContent.vue'

interface FriendLink {
  name: string
  url: string
  tag?: string[]
  icon?: Component
  favicon?: string
}

const friendLinks = ref<FriendLink[]>([
  {
    name: 'gy的笔记本',
    url: 'https://charwind.top/',
    tag: ['个人博客', '前端', '嵌入式'],
    icon: markRaw(IconCharwind),
  },
  {
    name: 'SealParadise',
    url: 'https://sealparadise.github.io/',
    tag: ['个人博客', '路边小熊'],
    favicon: IconSealParadise,
  },
  {
    name: 'AzrMedit0x,冥思构造体',
    url: 'https://www.azrmedit0x.top/',
    tag: ['个人博客', 'AI4DB'],
    favicon: IconAzrmedit0x,
  },
])

const displayHeaderExtra = ref<boolean>(window.innerWidth > 600)

const updateDisplayHeaderExtra = () => {
  displayHeaderExtra.value = window.innerWidth > 600
}

window.addEventListener('resize', updateDisplayHeaderExtra)

const openLink = (url: string) => {
  window.open(url, '_blank', 'noopener')
}

onUnmounted(() => {
  window.removeEventListener('resize', updateDisplayHeaderExtra)
})
</script>

<template>
  <article-content>
    <n-list bordered hoverable clickable>
      <n-list-item v-for="link in friendLinks" :key="link.name" @click="openLink(link.url)">
        <n-thing>
          <template #avatar>
            <n-avatar v-if="link.favicon" :src="link.favicon" />
            <n-avatar v-else>
              <n-icon :component="link.icon ?? Link" />
            </n-avatar>
          </template>
          <template #header class="link-change-item-header">
            <n-p>
              {{ link.name }}
            </n-p>
          </template>
          <template v-if="displayHeaderExtra" #header-extra>
            <n-code>
              {{ link.url }}
            </n-code>
          </template>
          <template #description>
            <n-p v-if="!displayHeaderExtra">
              <n-code>
                {{ link.url }}
              </n-code>
            </n-p>
            <n-space>
              <n-tag v-for="tag in link.tag" round :bordered="false">
                {{ tag }}
              </n-tag>
            </n-space>
          </template>
        </n-thing>
      </n-list-item>
    </n-list>
  </article-content>
</template>

<style scoped>
.link-change-item-header {
  min-width: 10em;
}
</style>
