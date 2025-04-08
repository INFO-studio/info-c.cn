import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
  const isCollapsed = ref<boolean>(true)
  const toggleCollapsed = () => {
    isCollapsed.value = !isCollapsed.value
  }
  const handleCollapse = () => {
    isCollapsed.value = true
  }
  const handleExpand = () => {
    isCollapsed.value = false
  }

  return { isCollapsed, toggleCollapsed, handleCollapse, handleExpand }
})
