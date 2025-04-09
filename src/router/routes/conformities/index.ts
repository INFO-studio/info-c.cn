import type { DocumentRoute } from '@/router/interfaces'
import ArticleIndex from '@/components/articleComponents/common/ArticleIndex.vue'
import ConformitiesByTag from '@/contents/posts/Conformities/ConformitiesByTag.vue'
import ConformitiesByCreateDate from '@/contents/posts/Conformities/ConformitiesByCreateDate.vue'
import ConformitiesByModifyDate from '@/contents/posts/Conformities/ConformitiesByModifyDate.vue'
import { PackageSearch, Tag, PencilLine, Eraser } from 'lucide-vue-next'

export const routes: DocumentRoute = {
  path: 'conformities',
  name: '整合',
  component: ArticleIndex,
  title: '整合',
  icon: PackageSearch,
  indexContent: '对博客中所有文章的整合',
  isSidebarEnd: true,
  isConformitiesHidden: true,
  children: [
    {
      path: 'by_tag',
      name: '标签 整合',
      component: ConformitiesByTag,
      title: '根据「标签」进行整合',
      icon: Tag,
      isConformitiesHidden: true,
    },
    {
      path: 'by_create_date',
      name: '创作日期 整合',
      component: ConformitiesByCreateDate,
      title: '根据「创作日期」进行整合',
      icon: PencilLine,
      isConformitiesHidden: true,
    },
    {
      path: 'by_modify_date',
      name: '修改日期 整合',
      component: ConformitiesByModifyDate,
      title: '根据「修改日期」进行整合',
      icon: Eraser,
      isConformitiesHidden: true,
    },
  ],
}
