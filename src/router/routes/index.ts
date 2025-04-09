import type { DocumentRoute } from '@/router/interfaces'
import AppHome from '@/contents/posts/AppHome.vue'
import { routes as routesChattering } from '@/router/routes/chattering'
import { routes as routesProjects } from '@/router/routes/projects'
import { routes as routesConformities } from '@/router/routes/conformities'
import { routes as routesLinkExchange } from '@/router/routes/linkExchange'
import { House } from 'lucide-vue-next'

export const routes: DocumentRoute = {
  path: '/',
  name: '首页',
  component: AppHome,
  icon: House,
  isSidebarHome: true,
  isConformitiesHidden: true,
  children: [routesChattering, routesProjects, routesConformities, routesLinkExchange],
}
