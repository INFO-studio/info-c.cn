<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/viewComponents/AppHeader.vue'
import AppSidebar from '@/components/viewComponents/AppSidebar.vue'
import AppBreadcrumb from '@/components/viewComponents/AppBreadcrumb.vue'
import { type CSSProperties } from 'vue'
import AppFooter from '@/components/viewComponents/AppFooter.vue'
import { useThemeStore } from '@/stores/theme.ts'
import { themeOverrides } from '@/assets/theme'
import ArticleFloatButton from '@/components/articleComponents/common/ArticleFloatButton.vue'

const themeStore = useThemeStore()
const LayoutStyle: CSSProperties = {
  minHeight: '100vh',
  maxHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
}
const BodyStyle: CSSProperties = {
  flex: 1,
}
const MainStyle: CSSProperties = {
  padding: '2rem',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}
const ContentStyle: CSSProperties = {
  width: '100%',
  maxWidth: '800px',
  minWidth: '200px',
  margin: '0 auto',
}
</script>

<template>
  <n-config-provider :theme="themeStore.theme" :theme-overrides="themeOverrides">
    <n-layout vertical :content-style="LayoutStyle">
      <n-layout-header bordered>
        <app-header />
      </n-layout-header>
      <n-layout has-sider class="body" :content-style="BodyStyle">
        <app-sidebar />
        <n-layout :content-style="MainStyle">
          <n-layout-header class="content-breadcrumb">
            <app-breadcrumb />
          </n-layout-header>
          <n-layout :native-scrollbar="false" class="content-layout" :content-style="ContentStyle">
            <router-view/>
            <article-float-button/>
          </n-layout>
        </n-layout>
      </n-layout>
      <n-layout-footer bordered>
        <app-footer />
      </n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
}

.content-breadcrumb {
  background-color: unset;
}

.content-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
