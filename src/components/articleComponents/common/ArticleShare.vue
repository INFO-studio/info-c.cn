<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Download, ClipboardCopy } from 'lucide-vue-next'
import { useMessage } from 'naive-ui'
import { getRouteData } from '@/router/utils/getRoutePath.ts'
import { getRouteTree } from '@/router/utils/getRouteTree.ts'
import { routes } from '@/router/routes'

const route = useRoute()
const routeData = getRouteData(route.path, getRouteTree(routes))
const message = useMessage()
const qrCodeRef = ref()

const fullUrl = computed(() => {
  return window.location.origin + route.path
})

const handleDownload = () => {
  const canvas = qrCodeRef.value?.$el?.querySelector('canvas')
  const borderSize = 20
  const newCanvas = document.createElement('canvas')
  newCanvas.width = canvas.width + borderSize * 2
  newCanvas.height = canvas.height + borderSize * 2
  const ctx = newCanvas.getContext('2d')
  if (ctx) {
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, newCanvas.width, newCanvas.height)
    ctx.drawImage(canvas, borderSize, borderSize)
  }
  if (canvas) {
    const url = newCanvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.href = url
    a.download = `浮音华章-${routeData.title}.png`
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
    <n-text code class="article-share-url">{{ fullUrl }}</n-text>
    <n-flex>
      <n-button @click="handleDownload">
        <n-icon>
          <Download />
        </n-icon>
      </n-button>
      <n-button @click="handleCopy">
        <n-icon>
          <ClipboardCopy />
        </n-icon>
      </n-button>
    </n-flex>
  </n-space>
</template>

<style scoped>
.article-share-url {
  word-break: break-all;
}
</style>
