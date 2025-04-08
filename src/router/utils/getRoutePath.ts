import type { DocumentRouteTree } from '@/router/interfaces'

const generateParentPaths = (currentPath: string): string[] => {
  const segments = currentPath.split('/').filter((s) => s !== '')
  const paths: string[] = ['/'] // 包含根路径
  let currentSegments: string[] = []
  for (const segment of segments) {
    currentSegments.push(segment)
    paths.push(`/${currentSegments.join('/')}`)
  }
  return paths
}

const collectAllNodes = (
  node: DocumentRouteTree,
  nodes: DocumentRouteTree[] = [],
): DocumentRouteTree[] => {
  nodes.push(node)
  if (node.children) {
    node.children.forEach((child) => collectAllNodes(child, nodes))
  }
  return nodes
}

export const getRoutePath = (
  currentPath: string,
  routeTree: DocumentRouteTree,
): DocumentRouteTree[] => {
  const parentPaths = generateParentPaths(currentPath)
  const allNodes = collectAllNodes(routeTree)
  const matchedNodes: DocumentRouteTree[] = []
  parentPaths.forEach((path) => {
    const node = allNodes.find((n) => n.path === path)
    if (node) {
      matchedNodes.push(node)
    }
  })
  return matchedNodes
}

export const getRouteData = (
  currentPath: string,
  routeTree: DocumentRouteTree,
) => {
  const routePath = getRoutePath(currentPath, routeTree)
  return routePath[routePath.length - 1]
}
