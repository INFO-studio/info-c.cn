import { defineStore } from "pinia";
import { ref } from "vue";

export const useSidebarStore = defineStore("sidebar", () => {
	const isCollapsed = ref<boolean>(true);
	const toggleCollapsed = () => {
		isCollapsed.value = !isCollapsed.value;
	};
	const handleCollapse = () => {
		isCollapsed.value = true;
	};
	const handleExpand = () => {
		isCollapsed.value = false;
	};

	return { isCollapsed, toggleCollapsed, handleCollapse, handleExpand };
});
