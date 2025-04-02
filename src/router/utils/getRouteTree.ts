import type { DocumentRoute, DocumentRouteTree } from '@/router/interfaces'
import { joinRoutePath } from '@/router/utils/joinRoutePath.ts'

export const getRouteTree = (route: DocumentRoute, parentPath: string = '/'): DocumentRouteTree => {
  const currentPath = joinRoutePath(parentPath, route.path)
  return {
    ...route,
    path: currentPath,
    children: route.children
      ? route.children.map((child) => getRouteTree(child, currentPath))
      : undefined,
  }
}
