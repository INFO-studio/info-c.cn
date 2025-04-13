<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/viewComponents/AppHeader.vue'
import AppSidebar from '@/components/viewComponents/AppSidebar.vue'
import AppBreadcrumb from '@/components/viewComponents/AppBreadcrumb.vue'
import { type CSSProperties, computed, onMounted, onUnmounted } from 'vue'
import AppFooter from '@/components/viewComponents/AppFooter.vue'
import { useThemeStore } from '@/stores/theme.ts'
import { useMouseStore } from '@/stores/mouse.ts'
import { useWindowStore } from '@/stores/window.ts'
import { themeOverrides } from '@/assets/theme'
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import ArticleFloatButton from '@/components/articleComponents/common/ArticleFloatButton.vue'

const themeStore = useThemeStore()
const mouseStore = useMouseStore()
const windowStore = useWindowStore()

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
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}
const ContentStyle = computed((): CSSProperties => ({
  padding: '0 2rem 2rem 2rem',
  width: '100%',
  maxWidth: windowStore.width < 1800 ? '800px' : '1200px',
  minWidth: '200px',
  margin: '0 auto',
}))

hljs.registerLanguage('vue', xml)

onMounted(() => {
  window.addEventListener('mousemove', mouseStore.updateMouse)
  windowStore.updateWindow()
  window.addEventListener('resize', windowStore.updateWindow)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', mouseStore.updateMouse)
  window.removeEventListener('resize', windowStore.updateWindow)
})
</script>

<template>
  <n-config-provider :theme="themeStore.theme" :theme-overrides="themeOverrides" :hljs="hljs">
    <n-message-provider>
      <n-dialog-provider>
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
              <n-layout
                :native-scrollbar="false"
                class="content-layout"
                :content-style="ContentStyle"
              >
                <router-view />
                <article-float-button />
              </n-layout>
            </n-layout>
          </n-layout>
          <n-layout-footer bordered>
            <app-footer />
          </n-layout-footer>
        </n-layout>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
}

.content-breadcrumb {
  background-color: unset;
  padding: 2rem 2rem 0 2rem;
}

.content-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translate(0);
}
</style>
