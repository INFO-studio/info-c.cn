import type { DocumentRoute } from '@/router/interfaces'
import ChatteringIndex from '@/contents/posts/Chattering/ChatteringIndex.vue'
import { FolderCode } from 'lucide-vue-next'
import KatexVue from '@/contents/posts/Projects/KatexVue.vue'

export const routes: DocumentRoute = {
  path: 'projects',
  name: '小项目',
  component: ChatteringIndex,
  icon: FolderCode,
  isSidebarTop: true,
  children: [
    {
      path: 'katex_vue',
      name: '没有轮子？那造一个 - Katex Vue',
      component: KatexVue,
    },
  ],
}
