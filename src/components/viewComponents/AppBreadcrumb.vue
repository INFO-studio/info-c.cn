<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  NBreadcrumb,
  NBreadcrumbItem,
  NIcon
} from 'naive-ui'
import { File } from 'lucide-vue-next'
import { routes } from '@/router/routes'
import { getRoutePath } from '@/router/utils/getRoutePath.ts'
import { getRouteTree } from '@/router/utils/getRouteTree.ts'

const route = useRoute()
const router = useRouter()
const breadcrumbs = computed(() => {
  return getRoutePath(route.path, getRouteTree(routes)).map((item) => ({
    path: item.path,
    name: item.name,
    icon: item?.icon || File,
  }))
})
const handleBreadcrumbClick = (path: string) => {
  router.push(path)
}
</script>

<template>
  <n-breadcrumb class="breadcrumb">
    <n-breadcrumb-item
      v-for="item in breadcrumbs"
      :key="item.path"
      @click="handleBreadcrumbClick(item.path)"
      class="breadcrumb-item"
    >
      <n-icon :component="item.icon" />
      {{ item.name }}
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<style>
.breadcrumb {
  padding: 2rem;
}
</style>
