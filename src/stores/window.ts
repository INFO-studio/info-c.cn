import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWindowStore = defineStore('window', () => {
  const width = ref(window.innerWidth)
  const height = ref(window.innerHeight)

  function updateWindow() {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  return { width, height, updateWindow }
})
