import type { DocumentRoute } from '@/router/interfaces'
import { MessageCircleMore } from 'lucide-vue-next'

const ArticleIndex = () => import('@/components/articleComponents/common/ArticleIndex.vue')
const HelloWorld = () => import('@/contents/posts/Chattering/HelloWorld.vue')

export const routes: DocumentRoute = {
  path: 'chattering',
  name: '碎碎念',
  component: ArticleIndex,
  title: '碎碎念',
  icon: MessageCircleMore,
  indexContent: '叨叨一些大概率没啥用的东西',
  isSidebarTop: true,
  isConformitiesHidden: true,
  children: [
    {
      path: 'hello_world',
      name: 'HelloWorld',
      component: HelloWorld,
      title: 'Hello World!',
      description: 'One small step for a man, literally nothing for mankind.',
      tags: ['闲聊'],
      createDate: new Date(2025, 3, 2, 0, 57),
      modifyDate: new Date(2025, 3, 3, 11, 14)
    },
  ],
}
