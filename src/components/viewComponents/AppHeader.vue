<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  NGrid,
  NGridItem,
  NFlex,
  NButton,
  NIcon
} from 'naive-ui'
import { motion } from 'motion-v'
import { Sun, Moon } from 'lucide-vue-next'
import { useThemeStore } from '@/stores/theme.ts'
import logo from '@/assets/logos/logo.svg?component'
import titleInfoc from '@/assets/logos/title.svg?component'
import { themeOverrides } from '@/assets/theme'
import { useSidebarStore } from '@/stores/sidebar.ts'

const themeStore = useThemeStore()
const isDark = ref(themeStore.isDarkTheme)
const sidebar = useSidebarStore()

watch(
  () => themeStore.isDarkTheme,
  (value) => {
    isDark.value = value
  },
)
</script>

<template>
  <n-grid cols="4" class="header">
    <n-grid-item>
      <n-flex align="center" justify="left" class="header-item">
        <n-button text @click="sidebar.toggleCollapsed()">
          <n-icon :color="themeOverrides.common.primaryColor" size="24">
            <motion.div
              :animate="{ rotate: 0 }"
              :whileHover="{ rotate: sidebar.isCollapsed ? -20 : 20 }"
              :whilePress="{ rotate: sidebar.isCollapsed ? -90 : 90 }"
              style="display: inline-block"
            >
              <logo />
            </motion.div>
          </n-icon>
        </n-button>
      </n-flex>
    </n-grid-item>
    <n-grid-item span="2">
      <n-flex align="center" justify="center" class="header-item">
        <title-infoc />
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
            :whilePress="{ scale: 0.9, rotate: 180 }"
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
</style>
