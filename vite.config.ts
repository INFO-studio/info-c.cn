import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import svgLoader from 'vite-svg-loader'
import Components from 'unplugin-vue-components/vite'
import MotionResolver from 'motion-v/resolver'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    svgLoader({
      defaultImport: 'url' // or 'raw'
    }),
    Components({
      dts: true,
      resolvers: [
        MotionResolver()
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'naive-ui': ['naive-ui'],
          'highlight': ['highlight.js'],
          'katex': ['katex', 'katex-vue'],
          'mermaid': ['mermaid'],
          'vue-core': ['vue', 'vue-router', 'pinia'],
          'utils': ['@vueuse/core', 'lucide-vue-next']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
