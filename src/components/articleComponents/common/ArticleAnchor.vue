<script setup lang="ts">
import { computed, ref, onMounted, type CSSProperties } from 'vue'
import { type AnchorItem, useAnchorStore } from '@/stores/anchor.ts'
import { useSidebarStore } from '@/stores/sidebar.ts'
import { useWindowStore } from '@/stores/window.ts'
import { motion } from 'motion-v'

const props = defineProps<{
  mode: 'fixed' | 'inline'
}>()

const isFixed = computed(() => props.mode === 'fixed')

const anchor = ref()
const scrollElement = ref()
onMounted(() => {
  if (isFixed.value) scrollElement.value = anchor.value?.$el.parentElement.parentElement.parentElement
})

const sidebarStore = useSidebarStore()
const windowStore = useWindowStore()

const anchorMode = computed(() => windowStore.width > 1200 && sidebarStore.isCollapsed)
const style = computed(
  (): CSSProperties => ({
    zIndex: 1,
    position: 'fixed',
    top: '20px',
    left: '50px',
  }),
)

const anchorStore = useAnchorStore()

interface AnchorTreeNode extends AnchorItem {
  children: AnchorTreeNode[]
}

const buildAnchorTree = (items: AnchorItem[]) => {
  if (!items.length) return []

  const result: AnchorTreeNode[] = []
  const stack: AnchorTreeNode[] = []

  for (const item of items) {
    const node = { ...item, children: [] }
    while (stack.length > 0 && stack[stack.length - 1].level >= node.level) {
      stack.pop()
    }
    if (stack.length === 0) {
      result.push(node)
    } else {
      stack[stack.length - 1].children.push(node)
    }
    stack.push(node)
  }

  return result
}

const anchorTree = computed(() => buildAnchorTree(anchorStore.anchorList))
</script>

<template>
  <motion.div
    v-if="isFixed"
    :animate="anchorMode ? { opacity: 1 } : { opacity: 0 }"
    :style="{ pointerEvents: isFixed ? (anchorMode ? 'auto' : 'none') : 'auto' }"
  >
    <n-anchor
      :listen-to="scrollElement"
      ref="anchor"
      :style="style"
      :offset-target="scrollElement"
      ignore-gap
      :show-background="isFixed"
    >
      <n-anchor-link v-for="node1 in anchorTree" :title="node1.title" :href="`#${node1.href}`">
        <n-anchor-link
          v-for="node2 in node1.children"
          :title="node2.title"
          :href="`#${node2.href}`"
        >
          <n-anchor-link
            v-for="node3 in node2.children"
            :title="node3.title"
            :href="`#${node3.href}`"
          >
          </n-anchor-link>
        </n-anchor-link>
      </n-anchor-link>
    </n-anchor>
  </motion.div>
  <n-anchor
    v-else
    ref="anchor"
    :show-background="false"
  >
    <n-anchor-link v-for="node1 in anchorTree" :title="node1.title" :href="`#${node1.href}`">
      <n-anchor-link
        v-for="node2 in node1.children"
        :title="node2.title"
        :href="`#${node2.href}`"
      >
        <n-anchor-link
          v-for="node3 in node2.children"
          :title="node3.title"
          :href="`#${node3.href}`"
        >
        </n-anchor-link>
      </n-anchor-link>
    </n-anchor-link>
  </n-anchor>
</template>

<style scoped></style>
