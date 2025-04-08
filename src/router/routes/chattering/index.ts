import type { DocumentRoute } from '@/router/interfaces'
import ChatteringIndex from '@/contents/posts/Chattering/ChatteringIndex.vue'
import { MessageCircleMore } from 'lucide-vue-next'
import HelloWorld from '@/contents/posts/Chattering/HelloWorld.vue'

export const routes: DocumentRoute = {
  path: 'chattering',
  name: '碎碎念',
  component: ChatteringIndex,
  title: '碎碎念',
  icon: MessageCircleMore,
  isSidebarTop: true,
  children: [
    {
      path: 'hello_world',
      name: 'HelloWorld',
      component: HelloWorld,
      title: 'Hello World!',
      tags: ['闲聊'],
      createDate: new Date(2025, 3, 2, 0, 57),
      modifyDate: new Date(2025, 3, 3, 11, 14)
    },
  ],
}
