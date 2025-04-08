import type { DocumentRoute } from '@/router/interfaces'
import { Link } from 'lucide-vue-next'
import LinkExchange from '@/contents/posts/LinkExchange.vue'

export const routes: DocumentRoute = {
  path: 'link_exchange',
  name: '友情链接',
  component: LinkExchange,
  title: '友情链接',
  icon: Link,
  hideInSidebar: true
}
