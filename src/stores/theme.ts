import { darkTheme, lightTheme } from "naive-ui";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useThemeStore = defineStore(
	"theme",
	() => {
		const isDarkTheme = ref<boolean>(true);
		const theme = computed(() => (isDarkTheme.value ? darkTheme : lightTheme));
		const changeTheme = () => {
			isDarkTheme.value = !isDarkTheme.value;
		};

		return { isDarkTheme, theme, changeTheme };
	},
	{
		persist: {
			pick: ["isDarkTheme"],
		},
	},
);
