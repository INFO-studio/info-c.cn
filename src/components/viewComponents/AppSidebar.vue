<script setup lang="ts">
import { NEllipsis, NIcon } from 'naive-ui'
import { h, computed, ref, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { Component } from 'vue'
import type { MenuOption } from 'naive-ui'
import { File } from 'lucide-vue-next'
import { getRouteTree } from '@/router/utils/getRouteTree.ts'
import { routes } from '@/router/routes'
import type { DocumentRouteTree } from '@/router/interfaces'

const collapsed = ref(true)
const collapsedWidth = ref(64)
const width = ref(240)
const indent = ref(32)

const handleCollapse = () => {
  collapsed.value = true
}

const handleExpand = () => {
  collapsed.value = false
}

const updateCollapsedWidth = () => {
  collapsedWidth.value = window.innerWidth < 600 ? 0 : 64
  width.value = window.innerWidth < 600 ? 180 : 240
  indent.value = window.innerWidth < 600 ? 16 : 32
}

window.addEventListener('resize', updateCollapsedWidth)

updateCollapsedWidth()

const collapsedIconSize = 22

const route = useRoute()
const router = useRouter()
const routeTree = getRouteTree(routes)
const routesSidebarTop = routeTree.children?.filter((route) => route.isSidebarTop)

const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const transformRoute = (routes: DocumentRouteTree[]): MenuOption[] => {
  return routes.map((route) => ({
    label: () => h(NEllipsis, null, { default: () => route.name }),
    key: route.path,
    icon: route.icon ? renderIcon(route.icon) : renderIcon(File),
    children: route.children?.length
      ? transformRoute(route.children.filter((child) => !child.hideInSidebar))
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

const routeHome = transformHome(routeTree)

const routesSidebar = transformRoute(routesSidebarTop ?? [])

const menuOptions = computed(() => [routeHome, divider, ...routesSidebar])

const activeKey = computed({
  get: () => route.path,
  set: (path: string) => router.push(path),
})

onUnmounted(() => {
  window.removeEventListener('resize', updateCollapsedWidth)
})
</script>

<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="collapsedWidth"
    :width="width"
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
      :indent="indent"
    />
  </n-layout-sider>
</template>
