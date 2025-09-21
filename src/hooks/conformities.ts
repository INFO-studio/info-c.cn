import { isArray, sortBy as lSortBy } from "lodash";

import type { DocumentRouteTree } from "@/router/interfaces";
import { routes } from "@/router/routes";
import { getRouteTree } from "@/router/utils/getRouteTree.ts";

const useConformities = () => {
	type ArticleList = {
		key: string;
		articles: DocumentRouteTree[];
	}[];

	type UnwrapArray<T> = T extends Array<infer U> ? U : T;

	const getArticleListConformitied = <T extends keyof DocumentRouteTree>(
		key: T,
		getGroup: (val: Exclude<UnwrapArray<DocumentRouteTree[T]>, undefined>) => string = (val) => String(val),
		sortBy: (val: string) => string | string[] = (val) => val,
		defaultGroup: string = "未分类",
	): ArticleList => {
		const routeTree = getRouteTree(routes);

		const allArticles: DocumentRouteTree[] = [];
		const walk = (nodes: DocumentRouteTree[]) => {
			nodes.forEach((node) => {
				allArticles.push(node);
				if (node.children) walk(node.children);
			});
		};
		walk([routeTree]);

		const groupMap: Record<string, DocumentRouteTree[]> = {};

		const pushArticle = (group: string, article: DocumentRouteTree) => {
			if (!isArray(groupMap[group])) {
				groupMap[group] = [];
			}
			groupMap[group].push(article);
		};

		allArticles.forEach((article) => {
			if (!article.isConformitiesHidden) {
				const raw = article[key];

				if (raw !== null && raw !== undefined) {
					if (isArray(raw)) {
						if (raw.length > 0) {
							raw.forEach((item) => {
								const group = getGroup(item as unknown as Exclude<UnwrapArray<DocumentRouteTree[T]>, undefined>) || defaultGroup;
								pushArticle(group, article);
							});
						} else {
							pushArticle(defaultGroup, article);
						}
					} else {
						const group = getGroup(raw as unknown as Exclude<UnwrapArray<DocumentRouteTree[T]>, undefined>) || defaultGroup;
						pushArticle(group, article);
					}
				} else {
					pushArticle(defaultGroup, article);
				}
			}
		});

		return lSortBy(Object.entries(groupMap), ([groupName]) => sortBy(groupName)).map(([groupName, groupArticles]) => ({
			key: groupName,
			articles: groupArticles,
		}));
	};

	return {
		getArticleListConformitied,
	};
};

export { useConformities };
