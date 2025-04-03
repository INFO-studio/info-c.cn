import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { lightTheme, darkTheme } from 'naive-ui'

export const useThemeStore = defineStore('theme', () => {
  const isDarkTheme = ref<boolean>(true)
  const theme = computed(() => (isDarkTheme.value ? darkTheme : lightTheme))
  const changeTheme = () => {
    isDarkTheme.value = !isDarkTheme.value
  }

  return { isDarkTheme, theme, changeTheme }
})
