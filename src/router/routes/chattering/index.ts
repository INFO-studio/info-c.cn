import type { DocumentRoute } from '@/router/interfaces'
import ArticleIndex from '@/components/articleComponents/common/ArticleIndex.vue'
import HelloWorld from '@/contents/posts/Chattering/HelloWorld.vue'
import { MessageCircleMore } from 'lucide-vue-next'

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
      description: 'One small step for man, nothing for mankind.',
      tags: ['闲聊'],
      createDate: new Date(2025, 3, 2, 0, 57),
      modifyDate: new Date(2025, 3, 3, 11, 14)
    },
  ],
}
