import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMouseStore = defineStore('mouse', () => {
  const x = ref(0)
  const y = ref(0)

  function updateMouse(e: MouseEvent) {
    x.value = e.clientX
    y.value = e.clientY
  }

  return { x, y, updateMouse }
})
