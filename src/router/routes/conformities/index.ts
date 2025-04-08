import type { DocumentRoute } from '@/router/interfaces'
import { PackageSearch, Tag, PencilLine, Eraser } from 'lucide-vue-next'
import BlankPage from '@/contents/posts/Conformities/BlankPage.vue'

export const routes: DocumentRoute = {
  path: 'conformities',
  name: '整合',
  component: BlankPage,
  title: '整合',
  icon: PackageSearch,
  isSidebarEnd: true,
  children: [
    {
      path: 'by_tag',
      name: '标签 整合',
      component: BlankPage,
      icon: Tag
    },
    {
      path: 'by_create_date',
      name: '创作日期 整合',
      component: BlankPage,
      icon: PencilLine
    },
    {
      path: 'by_modify_date',
      name: '修改日期 整合',
      component: BlankPage,
      icon: Eraser
    },
  ],
}
