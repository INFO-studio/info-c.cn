<script setup lang="ts">
import { onMounted, watch, ref } from 'vue'
import mermaid from 'mermaid'
import { useThemeVars } from 'naive-ui'

const props = defineProps<{
  chart: string
}>()

const mermaidContainer = ref(null)
const themeVars = useThemeVars()

function renderChart() {
  if (!props.chart || !mermaidContainer.value) return

  const elementId = `mermaid-${Date.now()}`

  const config = {
    startOnLoad: false,
    themeVariables: {
      primaryColor: themeVars.value.primaryColor,
      secondaryColor: themeVars.value.infoColor,
      tertiaryColor: themeVars.value.successColor,
      errorColor: themeVars.value.errorColor,
      warningColor: themeVars.value.warningColor,
      background: themeVars.value.bodyColor,
      textColor: themeVars.value.textColor1
    }
  }

  mermaid.initialize(config)

  mermaid
    .render(elementId, props.chart)
    .then(({ svg, bindFunctions }) => {
      mermaidContainer.value.innerHTML = svg
      if (bindFunctions) bindFunctions(mermaidContainer.value)
    })
    .catch(err => {
      console.error('Mermaid render error:', err)
    })
}

onMounted(() => {
  renderChart()
})

watch(
  [() => props.chart, () => themeVars.value],
  () => {
    renderChart()
  },
  { deep: true }
)
</script>

<template>
  <div ref="mermaidContainer" class="mermaid"></div>
</template>
