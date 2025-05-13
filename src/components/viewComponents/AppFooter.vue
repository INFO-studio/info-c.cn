<script setup lang="ts">
import { useRouter } from 'vue-router'
import {
  NFlex,
  NP,
  NDivider
} from 'naive-ui'
import { Mail, Link } from 'lucide-vue-next'
import { Github, Gitee, Bilibili } from '@/assets/icons/brand'
import FooterIconButton from '@/components/articleComponents/common/FooterIconButton.vue'

const yearNow: number = new Date().getFullYear()
const router = useRouter()
</script>

<template>
  <n-flex vertical align="center" justify="center" :size="2" class="footer">
    <n-p class="copyright">Copyright © 2024 - {{ yearNow }} 茵符草</n-p>
    <n-flex align="center" justify="center" :size="4">
      <footer-icon-button link="https://github.com/INFO-studio/info-c.cn" tooltip="Github">
        <Github />
      </footer-icon-button>
      <footer-icon-button link="https://gitee.com/info-studio/info-c.cn" tooltip="Gitee">
        <Gitee />
      </footer-icon-button>
      <footer-icon-button link="https://space.bilibili.com/397039149" tooltip="BiliBili">
        <Bilibili />
      </footer-icon-button>
      <footer-icon-button link="mailto:beta-s@oulook.com" tooltip="邮箱">
        <Mail />
      </footer-icon-button>
      <n-divider vertical />
      <footer-icon-button @click="router.push('/link_exchange')" tooltip="友情链接">
        <Link />
      </footer-icon-button>
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
