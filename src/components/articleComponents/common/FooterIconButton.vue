<script setup lang="ts">
import { NButton, NIcon, NTooltip } from 'naive-ui'
import { useAttrs } from 'vue'

const props = defineProps<{
  link?: string
  tooltip: string
}>()

const attrs = useAttrs()
</script>

<template>
  <n-tooltip :show-arrow="false" trigger="hover">
    <template #trigger>
      <n-button
        circle
        quaternary
        v-bind="attrs"
        :tag="attrs.onClick ? 'button' : 'a'"
        :href="attrs.onClick ? undefined : link"
        :target="attrs.onClick ? undefined : '_blank'"
      >
        <n-icon size="24">
          <slot />
        </n-icon>
      </n-button>
    </template>
    <span>{{ tooltip }}</span>
  </n-tooltip>
</template>

<style scoped></style>
