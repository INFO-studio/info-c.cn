<script setup lang="ts">
import { useThemeStore } from '@/stores/theme.ts'
import { Sun, Moon } from 'lucide-vue-next'
import { ref, watch } from 'vue'
import logo from '@/assets/logos/logo.svg?component'
import { motion } from 'motion-v'

const themeStore = useThemeStore()
const isDark = ref(themeStore.isDarkTheme)

watch(
  () => themeStore.isDarkTheme,
  (newVal) => {
    isDark.value = newVal
  },
)
</script>

<template>
  <n-grid cols="4" class="header">
    <n-grid-item>
      <n-flex align="center" justify="left" class="header-item">
        <n-icon color="#6CBDED" size="24">
          <logo />
        </n-icon>
      </n-flex>
    </n-grid-item>
    <n-grid-item span="2">
      <n-flex align="center" justify="center" class="header-item">
        <n-h1 class="title">浮音华章</n-h1>
      </n-flex>
    </n-grid-item>
    <n-grid-item>
      <n-flex align="center" justify="right" class="header-item">
        <n-button circle quaternary @click="themeStore.changeTheme">
          <motion.div
            :key="isDark ? 'moon' : 'sun'"
            :initial="{ opacity: 0, rotate: -180 }"
            :animate="{ opacity: 1, rotate: 0 }"
            :whileHover="{ scale: 1.1 }"
            :whilePress="{ scale: 0.9 }"
          >
            <Moon v-if="isDark" />
            <Sun v-else />
          </motion.div>
        </n-button>
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
