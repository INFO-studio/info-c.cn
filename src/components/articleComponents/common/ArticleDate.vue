<script setup lang="ts">
const props = defineProps<{
  category: 'create' | 'modify'
  date: Date
}>()
const category = props.category == 'create' ? '创建于' : '修改于'
</script>

<template>
  <div>
    {{ category }}：
    <n-time :time="props.date" format="yyyy-MM-dd HH:mm" />
  </div>
</template>

<style scoped></style>
