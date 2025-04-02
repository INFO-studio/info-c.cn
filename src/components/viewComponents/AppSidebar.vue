<script setup lang="ts">
import { NEllipsis, NIcon } from 'naive-ui'
import { h, computed, ref } from 'vue'
import { useRoute, useRouter, type RouteRecord } from 'vue-router'
import type { Component } from 'vue'
import type { MenuOption } from 'naive-ui'
import { FileAltRegular } from '@vicons/fa'

const collapsed = ref(true)
const collapsedWidth = 64
const collapsedIconSize = 22

const handleCollapse = () => (collapsed.value = true)
const handleExpand = () => (collapsed.value = false)

const router = useRouter()
const routes = router.getRoutes()
const routesSidebarTop = routes.filter((route) => route.meta?.isSidebarTop)
const route = useRoute()

const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const transformRoute = (routes: RouteRecord[]): MenuOption[] => {
  return routes.map((route) => ({
    label: () => h(NEllipsis, null, { default: () => route.name }),
    key: route.path,
    icon: route.meta?.icon ? renderIcon(route.meta.icon) : renderIcon(FileAltRegular),
    children: route.children?.length
      ? transformRoute(route.children.filter((child) => !child.meta?.hideInMenu) as RouteRecord[])
      : undefined,
  }))
}

const divider: MenuOption = {
  key: 'divider',
  type: 'divider',
}

const transformHome = (routes: RouteRecord[]): MenuOption[] => {
  return routes
    .filter((route) => route.meta?.isSidebarHome)
    .map((route) => ({
      label: route.name,
      key: route.path,
      icon: route.meta?.icon ? renderIcon(route.meta.icon) : renderIcon(FileAltRegular),
    }))
}

const menuOptions = computed(() => [
  ...transformHome(routes),
  divider,
  ...transformRoute(routesSidebarTop),
])

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
    :width="240"
    :collapsed="collapsed"
    show-trigger
    @collapse="handleCollapse"
    @expand="handleExpand"
  >
    <n-menu
      v-model:value="activeKey"
      :collapsed="collapsed"
      :collapsed-width="collapsedWidth"
      :collapsed-icon-size="collapsedIconSize"
      :options="menuOptions"
    />
  </n-layout-sider>
</template>
