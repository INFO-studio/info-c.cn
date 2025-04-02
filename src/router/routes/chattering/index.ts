import type { DocumentRoute } from '@/router/interfaces'
import ChatteringIndex from '@/contents/posts/Chattering/ChatteringIndex.vue'
import { MessageCircleMore } from 'lucide-vue-next'
import HelloWorld from '@/contents/posts/Chattering/HelloWorld.vue'

export const routes: DocumentRoute = {
  path: 'chattering',
  name: '碎碎念',
  component: ChatteringIndex,
  icon: MessageCircleMore,
  isSidebarTop: true,
  children: [
    {
      path: 'hello_world',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
}
