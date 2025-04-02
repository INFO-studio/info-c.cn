<script setup lang="ts">
import {useThemeStore} from '@/stores/theme.ts'
const themeStore = useThemeStore()
</script>

<template>
  <n-grid cols="4" class="header">
    <n-grid-item>
      <n-flex align="center" justify="left" class="header-item">
        <n-p>logo（还没）</n-p>
      </n-flex>
    </n-grid-item>
    <n-grid-item span="2">
      <n-flex align="center" justify="center" class="header-item">
        <n-h1 class="title">浮音华章</n-h1>
      </n-flex>
    </n-grid-item>
    <n-grid-item>
      <n-flex align="center" justify="right" class="header-item">
        <n-button @click="themeStore.changeTheme">更改主题</n-button>
      </n-flex>
    </n-grid-item>
  </n-grid>
</template>

<style scoped>
.header {
  height: 60px;
}

.header-item {
  height: 100%;
  padding: 0 20px;
}

.title {
  margin: 0;
  font-family: serif;
}
</style>
