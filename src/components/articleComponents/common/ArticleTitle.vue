<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import { useThemeVars } from 'naive-ui'
import { type AnchorItem, useAnchorStore } from '@/stores/anchor'

const props = defineProps({
  h: { type: Number, default: 3 },
  href: { type: String },
})

const themeVars = useThemeVars()
const decorationColor = computed(() => (themeVars.value.primaryColor.substring(0, 7) + '66'))

const titleRef = ref()
const anchorItem = ref<AnchorItem>()
const anchorId = computed(() => anchorItem.value?.href || '')

const anchorStore = useAnchorStore()

onMounted(() => {
  const titleText = titleRef.value?.$el.textContent
  anchorItem.value = anchorStore.addAnchor(titleText, props.h, props.href)
  console.log(decorationColor)
})

onBeforeUnmount(() => {
  if (anchorItem.value) {
    anchorStore.removeAnchor(anchorItem.value.id)
  }
})
</script>

<template>
  <component
    :is="`n-h${props.h}`"
    :prefix="props.h === 4 ? 'bar' : undefined"
    :id="anchorId"
    :class="`article-h${props.h}`"
    ref="titleRef">
    <slot />
  </component>
</template>

<style scoped>
.article-h3 {
  font-size: 1.5em;
  border-bottom: 2px dashed v-bind(decorationColor);
  padding-bottom: 0.5em;
}

.article-h4 {
  &:before {
    background-color: v-bind(decorationColor);
  }
}
</style>
