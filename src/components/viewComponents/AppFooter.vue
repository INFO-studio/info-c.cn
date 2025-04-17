<script setup lang="ts">
import { Github, Gitee, Bilibili } from '@/assets/icons/brand'
import { Mail, Link } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const yearNow: number = new Date().getFullYear()
const router = useRouter()
</script>

<template>
  <n-flex vertical align="center" justify="center" :size="2" class="footer">
    <n-p class="copyright">Copyright © 2024 - {{ yearNow }} 茵符草</n-p>
    <n-flex align="center" justify="center" :size="4">
      <n-tooltip :show-arrow="false" trigger="hover">
        <template #trigger>
          <n-button
            circle
            quaternary
            tag="a"
            target="_blank"
            href="https://github.com/INFO-studio/info-c.cn"
          >
            <n-icon size="24">
              <Github />
            </n-icon>
          </n-button>
        </template>
        <span> Github </span>
      </n-tooltip>
      <n-tooltip :show-arrow="false" trigger="hover">
        <template #trigger>
          <n-button
            circle
            quaternary
            tag="a"
            target="_blank"
            href="https://gitee.com/info-studio/info-c.cn"
          >
            <n-icon size="24">
              <Gitee />
            </n-icon>
          </n-button>
        </template>
        <span> Gitee </span>
      </n-tooltip>
      <n-tooltip :show-arrow="false" trigger="hover">
        <template #trigger>
          <n-button
            circle
            quaternary
            tag="a"
            target="_blank"
            href="https://space.bilibili.com/397039149"
          >
            <n-icon size="24">
              <Bilibili />
            </n-icon>
          </n-button>
        </template>
        <span> BiliBili </span>
      </n-tooltip>
      <n-tooltip :show-arrow="false" trigger="hover">
        <template #trigger>
          <n-button circle quaternary tag="a" target="_blank" href="mailto:beta-s@oulook.com">
            <n-icon size="24">
              <Mail />
            </n-icon>
          </n-button>
        </template>
        <span> 邮箱 </span>
      </n-tooltip>
      <n-divider vertical />
      <n-tooltip :show-arrow="false" trigger="hover">
        <template #trigger>
          <n-button circle quaternary @click="router.push('/link_exchange')">
            <n-icon size="24">
              <Link />
            </n-icon>
          </n-button>
        </template>
        <span> 友情链接 </span>
      </n-tooltip>
    </n-flex>
  </n-flex>
</template>

<style scoped>
.footer {
  padding: 0.5rem 0;

  & > .copyright {
    line-height: 1;
    padding: 0;
    margin: 0.5rem;
  }
}
</style>
