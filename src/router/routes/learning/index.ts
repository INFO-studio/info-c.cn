import type { DocumentRoute } from '@/router/interfaces'
import { NotebookPen } from 'lucide-vue-next'

const ArticleIndex = () => import('@/components/articleComponents/common/ArticleIndex.vue')
const CanvasBasic = () => import('@/contents/posts/Learning/CanvasBasic.vue')
const TypescriptKnowledge = () => import('@/contents/posts/Learning/TypescriptKnowledge.vue')
const TypescriptTypeChallenges = () => import('@/contents/posts/Learning/TypescriptTypeChallenges.vue')

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
    {
      path: 'typescript_knowledge',
      name: 'TypeScript 细碎知识点',
      component: TypescriptKnowledge,
      title: 'TypeScript 细碎知识点',
      tags: ['前端', 'TypeScript'],
      createDate: new Date(2025, 3, 13, 19, 1),
      modifyDate: new Date(2025, 3, 14, 1, 30),
    },
    {
      path: 'typescript_type_challenges',
      name: 'TypeScript 类型体操',
      component: TypescriptTypeChallenges,
      title: 'TypeScript 类型体操',
      tags: ['前端', 'TypeScript'],
      createDate: new Date(2025, 3, 19, 10, 21),
    },
  ],
}
