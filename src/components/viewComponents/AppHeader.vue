<script setup lang="ts">
import { Moon, Sun } from "lucide-vue-next";
import { NButton, NFlex, NGrid, NGridItem, NIcon, useThemeVars } from "naive-ui";
import { computed } from "vue";
import logo from "@/assets/logos/logo.svg?component";
import titleInfoc from "@/assets/logos/title.svg?component";
import { motionDiv } from "@/exports/motion.ts";
import { useSidebarStore } from "@/stores/sidebar.ts";
import { useThemeStore } from "@/stores/theme.ts";

const themeStore = useThemeStore();
const isDark = computed(() => themeStore.isDarkTheme);
const sidebar = useSidebarStore();
const themeVars = useThemeVars();
const primaryColor = computed(() => themeVars.value.primaryColor);
</script>

<template>
  <n-grid cols="4" class="h-60px">
    <n-grid-item>
      <n-flex align="center" justify="left" class="h-full px-20px">
        <n-button text @click="sidebar.toggleCollapsed()">
          <n-icon :color="primaryColor" size="24">
            <motion-div
              :animate="{ rotate: 0 }"
              :whileHover="{ rotate: sidebar.isCollapsed ? -20 : 20 }"
              :whilePress="{ rotate: sidebar.isCollapsed ? -90 : 90 }"
              style="display: inline-block"
            >
              <logo />
            </motion-div>
          </n-icon>
        </n-button>
      </n-flex>
    </n-grid-item>
    <n-grid-item span="2">
      <n-flex align="center" justify="center" class="h-full px-20px">
        <title-infoc />
      </n-flex>
    </n-grid-item>
    <n-grid-item>
      <n-flex align="center" justify="right" class="h-full px-20px">
        <n-button circle quaternary @click="themeStore.changeTheme">
          <motion-div
            :key="isDark ? 'moon' : 'sun'"
            :initial="{ opacity: 0, rotate: -180 }"
            :animate="{ opacity: 1, rotate: 0 }"
            :whileHover="{ scale: 1.1 }"
            :whilePress="{ scale: 0.9, rotate: 180 }"
          >
            <Moon v-if="isDark" />
            <Sun v-else />
          </motion-div>
        </n-button>
      </n-flex>
    </n-grid-item>
  </n-grid>
</template>
