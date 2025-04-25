<script setup lang="ts">
import { NEllipsis, NIcon } from 'naive-ui'
import { h, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { Component } from 'vue'
import type { MenuOption } from 'naive-ui'
import { useWindowSize } from '@vueuse/core'
import { File } from 'lucide-vue-next'
import { getRouteTree } from '@/router/utils/getRouteTree.ts'
import { routes } from '@/router/routes'
import type { DocumentRouteTree } from '@/router/interfaces'
import { useSidebarStore } from '@/stores/sidebar.ts'

const sidebarStore = useSidebarStore()
const windowSize = useWindowSize()

const collapsedWidth = computed(() => (windowSize.width.value < 600 ? 0 : 64))
const width = computed(() => (windowSize.width.value < 600 ? 180 : 240))
const indent = computed(() => (windowSize.width.value < 600 ? 16 : 32))

const handleCollapse = sidebarStore.handleCollapse
const handleExpand = sidebarStore.handleExpand

const collapsedIconSize = 22

const route = useRoute()
const router = useRouter()
const routeTree = getRouteTree(routes)
const routesSidebarTop = routeTree.children?.filter((route) => route.isSidebarTop)
const routesSidebarEnd = routeTree.children?.filter((route) => route.isSidebarEnd)

const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const transformRoute = (routes: DocumentRouteTree[]): MenuOption[] => {
  return routes.map((route) => ({
    label: () => h(NEllipsis, null, { default: () => route.name }),
    key: route.path,
    icon: route.icon ? renderIcon(route.icon) : renderIcon(File),
    children: route.children?.length
      ? transformRoute(route.children.filter((child) => !child.isSidebarHidden))
      : undefined,
  }))
}

const divider: MenuOption = {
  key: 'divider',
  type: 'divider',
}

const transformHome = (routeTree: DocumentRouteTree): MenuOption => {
  return {
    label: routeTree.name,
    key: routeTree.path,
    icon: routeTree.icon ? renderIcon(routeTree.icon) : renderIcon(File),
  }
}

const menuOptionsHome = transformHome(routeTree)

const menuOptionsSidebarTop = transformRoute(routesSidebarTop ?? [])

const menuOptionsSidebarEnd = transformRoute(routesSidebarEnd ?? [])

const menuOptions = computed(() => [menuOptionsHome, divider, ...menuOptionsSidebarTop, divider, ...menuOptionsSidebarEnd])

const activeKey = computed({
  get: () => route.path,
  set: (path: string) => router.push(path),
})
</script>

<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="collapsedWidth"
    :width="width"
    :collapsed="sidebarStore.isCollapsed"
    show-trigger
    @collapse="handleCollapse"
    @expand="handleExpand"
    class="sidebar"
  >
    <n-menu
      v-model:value="activeKey"
      :collapsed="sidebarStore.isCollapsed"
      :collapsed-width="collapsedWidth"
      :collapsed-icon-size="collapsedIconSize"
      :options="menuOptions"
      :indent="indent"
    />
  </n-layout-sider>
</template>

<style scoped>
.sidebar {
  z-index: auto;
}
</style>
