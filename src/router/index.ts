import { createRouter, createWebHistory } from 'vue-router'
import { parseRoutes } from '@/router/utils/parseRoutes.ts'
import { routes } from '@/router/routes'
import { getRouteTree } from '@/router/utils/getRouteTree.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...parseRoutes(getRouteTree(routes)),
    {
      path: '/:pathMath(.*)',
      component: () => import('@/contents/posts/AppNotFound.vue'),
    },
  ],
})

export default router
