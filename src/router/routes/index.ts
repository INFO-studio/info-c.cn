import type { DocumentRoute } from '@/router/interfaces'
import AppHome from '@/contents/posts/AppHome.vue'
import { House } from 'lucide-vue-next'
import { routes as routesChattering } from '@/router/routes/chattering'

export const routes: DocumentRoute = {
  path: '/',
  name: '首页',
  component: AppHome,
  icon: House,
  isSidebarHome: true,
  children: [routesChattering],
}
