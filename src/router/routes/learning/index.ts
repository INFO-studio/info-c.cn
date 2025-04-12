import type { DocumentRoute } from '@/router/interfaces'
import { NotebookPen } from 'lucide-vue-next'

const ArticleIndex = () => import('@/components/articleComponents/common/ArticleIndex.vue')
const CanvasBasic = () => import('@/contents/posts/Learning/CanvasBasic.vue')

export const routes: DocumentRoute = {
  path: 'learning',
  name: '笔记本',
  component: ArticleIndex,
  title: '笔记本',
  icon: NotebookPen,
  indexContent: '学习一些技术的随手记录',
  isSidebarTop: true,
  isConformitiesHidden: true,
  children: [
    {
      path: 'canvas_basic',
      name: 'Canvas 从零开始',
      component: CanvasBasic,
      title: 'Canvas 从零开始',
      tags: ['前端', 'Canvas'],
      createDate: new Date(2025, 3, 10, 9, 15),
      modifyDate: new Date(2025, 3, 12, 12, 43)
    },
  ],
}
