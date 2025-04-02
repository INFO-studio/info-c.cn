export const joinRoutePath = (parentPath: string, childPath: string): string => {
  if (parentPath !== '/' && parentPath.endsWith('/')) {
    parentPath = parentPath.slice(0, -1)
  }
  if (childPath.startsWith('/')) {
    childPath = childPath.substring(1)
  }
  return parentPath === '/' ? `/${childPath}` : `${parentPath}/${childPath}`
}
