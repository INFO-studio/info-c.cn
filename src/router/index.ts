import { createRouter, createWebHistory } from 'vue-router'
import { Home, Code } from '@vicons/fa'
import HelloWorld from '@/contents/posts/Chattering/HelloWorld.vue'
import AppHome from '@/contents/posts/AppHome.vue'
import ChatteringIndex from '@/contents/posts/Chattering/ChatteringIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '首页',
      component: AppHome,
      meta: {
        icon: Home,
        isSidebarHome: true,
      },
      children: [
        {
          path: '/chattering',
          name: '碎碎念',
          component: ChatteringIndex,
          meta: {
            icon: Code,
            isSidebarTop: true,
          },
          children: [
            {
              path: '/chattering/hello_world',
              name: 'HelloWorld',
              component: HelloWorld,
            },
          ],
        },
      ],
    },
  ],
})

export default router
