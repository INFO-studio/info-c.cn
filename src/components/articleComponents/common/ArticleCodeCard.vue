<script setup lang="ts">
import { Copy } from 'lucide-vue-next'
import { useMessage } from 'naive-ui'

interface Props {
  code?: string
  language?: string
  languageName?: string
  title?: string
  copiable?: boolean | undefined
  showLineNumbers?: boolean | undefined
}

const props = withDefaults(defineProps<Props>(), {
  copiable: true,
  showLineNumbers: false
})

const message = useMessage()
const handleCopy = async () => {
  if (props.code?.trim()) {
    try {
      await navigator.clipboard.writeText(props.code.trim())
      message.success('源码已复制')
    } catch (err) {
      const textarea = document.createElement('textarea')
      textarea.value = props.code.trim()
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      const success = document.execCommand('copy')
      document.body.removeChild(textarea)
      success ? message.success('源码已复制') : message.error('复制失败')
    }
  }
}
</script>

<template>
  <n-card embedded class="article-code-card">
    <n-space vertical>
      <n-grid cols="3">
        <n-grid-item>
          <n-flex justify="left">
            <n-text code>{{ props.languageName ?? props.language }}</n-text>
          </n-flex>
        </n-grid-item>
        <n-grid-item>
          <n-flex justify="center">
            <n-text>{{ props.title }}</n-text>
          </n-flex>
        </n-grid-item>
        <n-grid-item>
          <n-flex v-if="props.copiable ?? true" justify="right">
            <n-button text @click="handleCopy">
              <n-icon>
                <Copy />
              </n-icon>
            </n-button>
          </n-flex>
        </n-grid-item>
      </n-grid>
      <n-scrollbar x-scrollable>
        <n-code
          :code="props.code"
          :language="props.language"
          :show-line-numbers="props.showLineNumbers"
          class="article-code-display"
        />
      </n-scrollbar>
    </n-space>
  </n-card>
</template>

<style scoped>
.article-code-card {
  margin: 16px 0;
}

.article-code-display {
  padding-bottom: 16px;
}
</style>
