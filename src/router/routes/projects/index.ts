import { FolderCode } from "lucide-vue-next";
import type { DocumentRoute } from "@/router/interfaces";

const ArticleIndex = () => import("@/components/articleComponents/common/ArticleIndex.vue");
const KatexVue = () => import("@/contents/posts/Projects/KatexVue.vue");

export const routes: DocumentRoute = {
	path: "projects",
	name: "小项目",
	component: ArticleIndex,
	title: "小项目",
	icon: FolderCode,
	indexContent: "这里是我写过的一些项目",
	isSidebarTop: true,
	isConformitiesHidden: true,
	children: [
		{
			path: "katex_vue",
			name: "Katex Vue",
			component: KatexVue,
			title: "没有轮子？那造一个 - Katex Vue",
			tags: ["前端", "Vue", "LaTeX", "开源项目"],
			createDate: new Date(2025, 3, 7, 20, 8),
			modifyDate: new Date(2025, 3, 8, 22, 14),
		},
	],
};
