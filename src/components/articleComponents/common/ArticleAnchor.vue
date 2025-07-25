<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import {
  NAnchor,
  NAnchorLink,
  NCard,
  NCollapse,
  NCollapseItem
} from 'naive-ui'
import { type AnchorItem, useAnchorStore } from '@/stores/anchor.ts'
import { useSidebarStore } from '@/stores/sidebar.ts'
import { useWindowSize } from '@vueuse/core'
import { motionDiv } from '@/exports/motion.ts'

const props = defineProps<{
  mode: 'fixed' | 'inline'
}>()

const isFixed = computed(() => props.mode === 'fixed')

const anchor = ref()
const scrollElement = ref()
onMounted(() => {
  if (isFixed.value)
    scrollElement.value = anchor.value?.$el.parentElement.parentElement.parentElement.parentElement
})

const sidebarStore = useSidebarStore()
const windowSize = useWindowSize()

const anchorMode = computed(() => windowSize.width.value > 1200 && sidebarStore.isCollapsed)

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
  <div v-if="anchorTree.length">
    <motion-div
      v-if="isFixed"
      :animate="anchorMode ? { opacity: 1 } : { opacity: 0 }"
      :style="{ pointerEvents: isFixed ? (anchorMode ? 'auto' : 'none') : 'auto' }"
    >
      <n-anchor
        :listen-to="scrollElement"
        ref="anchor"
        :offset-target="scrollElement"
        ignore-gap
        :bound="180"
        class="article-anchor-fixed"
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
    </motion-div>
    <motion-div
      v-else
      :animate="
        windowSize.width.value <= 1200 ? { height: 'unset', opacity: 1 } : { height: 0, opacity: 0 }
      "
    >
      <n-card size="small">
        <n-collapse>
          <n-collapse-item title="目录" name="1">
            <n-anchor ref="anchor" :show-background="false">
              <n-anchor-link
                v-for="node1 in anchorTree"
                :title="node1.title"
                :href="`#${node1.href}`"
              >
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
          </n-collapse-item>
        </n-collapse>
      </n-card>
    </motion-div>
  </div>
</template>

<style scoped>
.article-anchor-fixed {
  z-index: 1;
  position: fixed;
  top: 20px;
  left: 50px;
  max-width: calc(50vw - 480px);
  @media (min-width: 1800px) {
    max-width: calc(50vw - 660px);
  }
}
</style>
