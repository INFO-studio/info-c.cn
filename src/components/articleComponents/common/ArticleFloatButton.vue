<script setup lang="ts">
import { onMounted, onUnmounted, ref, h } from 'vue'
import {
  useDialog,
  NFloatButtonGroup,
  NFloatButton,
  NIcon
} from 'naive-ui'
import { ChevronUp, CircleArrowOutUpRight } from 'lucide-vue-next'
import { motion } from 'motion-v'
import ArticleShare from '@/components/articleComponents/common/ArticleShare.vue'

const isBackTopShow = ref<boolean>(false)
const floatButtonGroup = ref()
const parent = ref<HTMLElement>()
let scrollHandler: () => void

const dialog = useDialog()

const handleShare = () => {
  dialog.create({
    title: '分享给朋友',
    content: () => h(ArticleShare),
    icon: () => h(NIcon, { size: 24 }, { default: () => h(CircleArrowOutUpRight) }),
    iconPlacement: 'top'
  })
}

const handleBackTop = () => {
  parent.value?.scrollTo({ top: 0, behavior: 'smooth' })
}

const throttle = (fn: Function, delay: number) => {
  let lastCall = 0
  return (...args: any[]) => {
    const now = Date.now()
    if (now - lastCall < delay) return
    lastCall = now
    fn(...args)
  }
}

onMounted(() => {
  parent.value =
    floatButtonGroup.value?.$el?.closest('.n-scrollbar-container') || document.documentElement
  scrollHandler = throttle(() => {
    isBackTopShow.value = (parent.value?.scrollTop ?? 0) >= 200
  }, 100)

  parent.value?.addEventListener('scroll', scrollHandler)
})

onUnmounted(() => {
  parent.value?.removeEventListener('scroll', scrollHandler)
})
</script>

<template>
  <n-float-button-group
    ref="floatButtonGroup"
    :right="20"
    :bottom="20"
    style="transform: translateZ(0)"
  >
    <motion.div
      :initial="{ y: 56 }"
      :animate="{
        y: isBackTopShow ? 0 : 56,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 20,
          mass: 0.5,
        },
      }"
      style="will-change: transform, opacity"
    >
      <n-float-button @click="handleShare" class="article-float-button">
        <n-icon>
          <CircleArrowOutUpRight />
        </n-icon>
      </n-float-button>
    </motion.div>
    <motion.div
      :initial="{ opacity: 0, scale: 0.5, y: 50 }"
      :animate="{
        opacity: isBackTopShow ? 1 : 0,
        scale: isBackTopShow ? 1 : 0.5,
        y: isBackTopShow ? 0 : 50,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 20,
          mass: 0.5,
        },
      }"
      style="will-change: transform, opacity"
    >
      <n-float-button @click="handleBackTop" class="article-float-button">
        <n-icon>
          <ChevronUp />
        </n-icon>
      </n-float-button>
    </motion.div>
  </n-float-button-group>
</template>

<style scoped>
.article-float-button {
  backface-visibility: hidden;
  transform-style: preserve-3d;
}
</style>
