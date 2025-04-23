<script setup lang="ts">
import { onMounted, watch, ref } from 'vue'
import mermaid, {type MermaidConfig} from 'mermaid'
import { useThemeVars } from 'naive-ui'

const props = defineProps<{
  chart: string
}>()

const mermaidContainer = ref<Element>()
const themeVars = useThemeVars()

function renderChart() {
  if (!props.chart || !mermaidContainer.value) return

  const elementId = `mermaid-${Date.now()}`

  const config: MermaidConfig = {
    startOnLoad: false,
    theme: 'dark',
    themeVariables: {
      primaryColor: themeVars.value.primaryColor,
      secondaryColor: themeVars.value.infoColor,
      tertiaryColor: themeVars.value.successColor,
      errorColor: themeVars.value.errorColor,
      warningColor: themeVars.value.warningColor,
      background: themeVars.value.cardColor,
      textColor: themeVars.value.textColor1,
      actorBorder: themeVars.value.borderColor,
      actorBkg: themeVars.value.cardColor,
      actorLineColor: themeVars.value.borderColor,
      signalColor: themeVars.value.primaryColor,
      labelBoxBorderColor: themeVars.value.borderColor,
      activationBorderColor: themeVars.value.borderColor,
      activationBkgColor: themeVars.value.primaryColor
    }
  }

  mermaid.initialize(config)

  mermaid
    .render(elementId, props.chart)
    .then(({ svg, bindFunctions }) => {
      if(mermaidContainer.value) {
        mermaidContainer.value.innerHTML = svg
        if (bindFunctions) bindFunctions(mermaidContainer.value)
      }
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
