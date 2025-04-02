<script setup lang="ts">
import Github from '/public/icons/brand/github.svg?component'
import Bilibili from '/public/icons/brand/bilibili.svg?component'
import { Mail } from 'lucide-vue-next'
const yearNow: number = new Date().getFullYear()
</script>

<template>
  <n-flex vertical align="center" justify="center" :size="2" class="footer">
    <n-p class="copyright">Copyright © 2024 - {{ yearNow }} 茵符草</n-p>
    <n-flex align="center" justify="center" :size="4">
      <n-button circle quaternary tag="a" target="_blank" href="https://github.com/INFO-studio/info-c.cn">
        <n-icon size="24">
          <Github />
        </n-icon>
      </n-button>
      <n-button circle quaternary tag="a" target="_blank" href="https://space.bilibili.com/397039149">
        <n-icon size="24">
          <Bilibili />
        </n-icon>
      </n-button>
      <n-button circle quaternary tag="a" target="_blank" href="mailto:beta-s@oulook.com">
        <n-icon size="24">
          <Mail />
        </n-icon>
      </n-button>
    </n-flex>
  </n-flex>
</template>

<style scoped>
.footer {
  padding: 0.5rem 0;

  & > .copyright {
    line-height: 1;
    padding: 0;
    margin: .5rem;
  }
}
</style>
