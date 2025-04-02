import type { DocumentRoute } from '@/router/interfaces'

export interface DocumentRouteTree extends DocumentRoute {
  children?: DocumentRouteTree[]
}
