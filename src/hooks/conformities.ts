import type { DocumentRouteTree } from '@/router/interfaces'
import { getRouteTree } from '@/router/utils/getRouteTree.ts'
import { routes } from '@/router/routes'

const useConformities = () => {
  type ArticleList = {
    key: string
    articles: DocumentRouteTree[]
  }[]

  const getArticleListConformitied = (
    key: keyof DocumentRouteTree,
    getGroup: (val: any) => string = (v) => String(v),
  ): ArticleList => {
    const routeTree = getRouteTree(routes)

    const allArticles: DocumentRouteTree[] = []
    const walk = (nodes: DocumentRouteTree[]) => {
      nodes.forEach((node) => {
        allArticles.push(node)
        if (node.children) walk(node.children)
      })
    }
    walk([routeTree])

    const groupMap: Record<string, DocumentRouteTree[]> = {}
    const DEFAULT_GROUP = '未分类'

    allArticles.forEach((article) => {
      if (!article.isConformitiesHidden) {
        const raw = (article as any)[key]

        if (Array.isArray(raw)) {
          if (raw.length > 0) {
            raw.forEach((item) => {
              const g = getGroup(item) || DEFAULT_GROUP
              ;(groupMap[g] ??= []).push(article)
            })
          } else {
            ;(groupMap[DEFAULT_GROUP] ??= []).push(article)
          }
        } else if (raw != null) {
          const g = getGroup(raw) || DEFAULT_GROUP
          ;(groupMap[g] ??= []).push(article)
        } else {
          ;(groupMap[DEFAULT_GROUP] ??= []).push(article)
        }
      }
    })

    return Object.entries(groupMap).map(([groupKey, arts]) => ({
      key: groupKey,
      articles: arts,
    }))
  }

  return {
    getArticleListConformitied,
  }
}

export { useConformities }
