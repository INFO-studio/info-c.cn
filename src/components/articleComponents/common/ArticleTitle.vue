<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import { useThemeVars, NH1, NH2, NH3, NH4, NH5, NH6 } from 'naive-ui'
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
})

onBeforeUnmount(() => {
  if (anchorItem.value) {
    anchorStore.removeAnchor(anchorItem.value.id)
  }
})
</script>

<template>
  <n-h1
    v-if="props.h === 1"
    :id="anchorId"
    class="article-h1"
    ref="titleRef">
    <slot />
  </n-h1>
  <n-h2
    v-else-if="props.h === 2"
    :id="anchorId"
    class="article-h2"
    ref="titleRef">
    <slot />
  </n-h2>
  <n-h3
    v-else-if="props.h === 3"
    :id="anchorId"
    class="article-h3"
    ref="titleRef">
    <slot />
  </n-h3>
  <n-h4
    v-else-if="props.h === 4"
    prefix="bar"
    :id="anchorId"
    class="article-h4"
    ref="titleRef">
    <slot />
  </n-h4>
  <n-h5
    v-else-if="props.h === 5"
    :id="anchorId"
    class="article-h5"
    ref="titleRef">
    <slot />
  </n-h5>
  <n-h6
    v-else-if="props.h === 6"
    :id="anchorId"
    class="article-h6"
    ref="titleRef">
    <slot />
  </n-h6>
</template>

<style scoped>
.article-h3 {
  font-size: 1.8em;
  border-bottom: 2px dashed v-bind(decorationColor);
  padding-bottom: 0.5em;
}

.article-h4 {
  font-size: 1.5em;
  &:before {
    background-color: v-bind(decorationColor);
  }
}

.article-h5 {
  font-size: 1.3em;
  &:before {
    background-color: v-bind(decorationColor);
  }
}
</style>
