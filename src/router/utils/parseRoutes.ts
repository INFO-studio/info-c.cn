import type { RouteRecordRaw } from 'vue-router'
import type { DocumentRouteTree } from '@/router/interfaces'

export const parseRoutes = (routeTree: DocumentRouteTree): RouteRecordRaw[] => {
  const { path, name, component, children, ...meta } = routeTree
  const record: RouteRecordRaw = { path, name, component, meta }
  const childRecords = children ? children.flatMap((child) => parseRoutes(child)) : []
  return [record, ...childRecords]
}
