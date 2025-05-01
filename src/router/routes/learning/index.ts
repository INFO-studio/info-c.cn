import { NotebookPen } from 'lucide-vue-next'
import type { DocumentRoute } from '@/router/interfaces'

const ArticleIndex = () => import('@/components/articleComponents/common/ArticleIndex.vue')
const CanvasBasic = () => import('@/contents/posts/Learning/CanvasBasic.vue')
const TypescriptKnowledge = () => import('@/contents/posts/Learning/TypescriptKnowledge.vue')
const TypescriptTypeChallenges = () => import('@/contents/posts/Learning/TypescriptTypeChallenges.vue')
const CrossDomain = () => import('@/contents/posts/Learning/CrossDomain.vue')
const ReactHooks = () => import('@/contents/posts/Learning/ReactHooks.vue')

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
      modifyDate: new Date(2025, 3, 12, 12, 43),
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
    {
      path: 'cross_domain',
      name: '跨域问题',
      component: CrossDomain,
      title: '跨域问题及其解决方案',
      tags: ['前端', '后端', '计算机网络'],
      createDate: new Date(2025, 3, 21, 22, 15),
      modifyDate: new Date(2025, 3, 22, 14, 10),
    },
    {
      path: 'react_hooks',
      name: 'React Hooks 细节',
      component: ReactHooks,
      title: '常见 React Hooks 的使用细节',
      tags: ['前端', 'React'],
      createDate: new Date(2025, 4, 1, 15, 58),
      modifyDate: new Date(2025, 4, 2, 0, 25),
    },
  ],
}
