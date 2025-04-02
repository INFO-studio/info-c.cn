<script setup lang="ts">
import { FileAltRegular } from '@vicons/fa'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const breadcrumbs = computed(() => {
  return route.matched.map((item) => ({
    path: item.path,
    name: item.name,
    icon: item.meta?.icon || FileAltRegular,
  }))
})
const handleBreadcrumbClick = (path: string) => {
  router.push(path)
}
</script>

<template>
  <n-breadcrumb class="breadcrumb">
    <n-breadcrumb-item v-for="item in breadcrumbs" :key="item.path" @click="handleBreadcrumbClick(item.path)" class="breadcrumb-item">
        <n-icon :component="item.icon" />
        {{ item.name }}
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<style>
.breadcrumb {
  padding: .5rem;
}
</style>


