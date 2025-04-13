<script setup lang="ts">
import { type Component, ref } from 'vue'
import { motion } from 'motion-v'

const props = defineProps<{
  title: string
  color?: string
  icon: Component
}>()

const isHover = ref(false)
</script>

<template>
  <n-space
    :size="0"
    style="position: relative"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <n-icon :color="props.color" size="24">
      <component :is="props.icon" />
    </n-icon>
<!--    <motion.div-->
<!--      :initial="{-->
<!--        opacity: 0,-->
<!--        x: '-100%',-->
<!--      }"-->
<!--      :animate="-->
<!--        isHover-->
<!--          ? {-->
<!--              opacity: 1,-->
<!--              x: 0,-->
<!--              userSelect: 'text',-->
<!--            }-->
<!--          : {-->
<!--              opacity: 0,-->
<!--              x: -24,-->
<!--              userSelect: 'none',-->
<!--            }-->
<!--      "-->
<!--      class="tech-stack-icon-title"-->
<!--    >-->
<!--      {{ props.title }}-->
<!--    </motion.div>-->
<!--    <motion.div-->
<!--      :initial="{-->
<!--        opacity: 0,-->
<!--        x: -24,-->
<!--        width: 0,-->
<!--      }"-->
<!--      :animate="-->
<!--        isHover-->
<!--          ? {-->
<!--              x: 0,-->
<!--              width: 'unset',-->
<!--              marginRight: '0.5rem'-->
<!--            }-->
<!--          : {-->
<!--              x: -24,-->
<!--              width: 0,-->
<!--              marginRight: 0-->
<!--            }-->
<!--      "-->
<!--      class="tech-stack-icon-title-background"-->
<!--    >-->
<!--      {{ props.title }}-->
<!--    </motion.div>-->
  </n-space>
</template>

<style scoped>
.tech-stack-icon-title {
  position: absolute;
  margin: 0 0 0 0.5rem;
  white-space: nowrap;
}

.tech-stack-icon-title-background {
  position: relative;
  white-space: nowrap;
  user-select: none;
}
</style>
