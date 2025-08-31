<script setup lang="ts">
import { Link, Mail } from "lucide-vue-next";
import { NDivider, NFlex, NP } from "naive-ui";
import { useRouter } from "vue-router";
import { Bilibili, Gitee, Github } from "@/assets/icons/brand";
import FooterIconButton from "@/components/articleComponents/common/FooterIconButton.vue";

const yearNow: number = new Date().getFullYear();
const router = useRouter();
</script>

<template>
  <n-flex vertical align="center" justify="center" :size="2" class="py-2">
    <n-p class="leading-none p-0 m-2">Copyright © 2024 - {{ yearNow }} 茵符草</n-p>
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
