<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Download, ClipboardCopy } from 'lucide-vue-next'
import { useMessage } from 'naive-ui'

const route = useRoute()
const message = useMessage()
const qrCodeRef = ref<HTMLElement | null>(null)

const fullUrl = computed(() => {
  return window.location.origin + route.fullPath
})

const handleDownload = () => {
  const canvas = qrCodeRef.value?.$el.querySelector('canvas')
  if (canvas) {
    const url = canvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.href = url
    a.download = `qrcode-${Date.now()}.png`
    a.click()
  } else {
    message.error('无法生成二维码')
  }
}

const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(fullUrl.value)
    message.success('链接已复制')
  } catch (err) {
    const textarea = document.createElement('textarea')
    textarea.value = fullUrl.value
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    const success = document.execCommand('copy')
    document.body.removeChild(textarea)
    success ? message.success('链接已复制') : message.error('复制失败')
  }
}
</script>

<template>
  <n-space vertical align="center" justify="center">
    <n-qr-code :value="fullUrl" ref="qrCodeRef" />
    <n-code>{{ fullUrl }}</n-code>
    <n-flex>
      <n-button @click="handleDownload">
        <n-icon><Download /></n-icon>
      </n-button>
      <n-button @click="handleCopy">
        <n-icon><ClipboardCopy /></n-icon>
      </n-button>
    </n-flex>
  </n-space>
</template>
