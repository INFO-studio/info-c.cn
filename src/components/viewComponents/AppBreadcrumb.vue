<script setup lang="ts">
import { File } from "lucide-vue-next";
import { NBreadcrumb, NBreadcrumbItem, NIcon } from "naive-ui";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { routes } from "@/router/routes";
import { getRoutePath } from "@/router/utils/getRoutePath.ts";
import { getRouteTree } from "@/router/utils/getRouteTree.ts";

const route = useRoute();
const router = useRouter();
const breadcrumbs = computed(() => {
	return getRoutePath(route.path, getRouteTree(routes)).map((item) => ({
		path: item.path,
		name: item.name,
		icon: item?.icon || File,
	}));
});
const handleBreadcrumbClick = (path: string) => {
	router.push(path);
};
</script>

<template>
  <n-breadcrumb class="p-8">
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
