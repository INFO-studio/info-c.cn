import { MessageCircleMore } from "lucide-vue-next";
import type { DocumentRoute } from "@/router/interfaces";

const ArticleIndex = () => import("@/components/articleComponents/common/ArticleIndex.vue");
const HelloWorld = () => import("@/contents/posts/Chattering/HelloWorld.vue");
const MisideReview = () => import("@/contents/posts/Chattering/MisideReview.vue");

export const routes: DocumentRoute = {
	path: "chattering",
	name: "碎碎念",
	component: ArticleIndex,
	title: "碎碎念",
	icon: MessageCircleMore,
	indexContent: "叨叨一些大概率没啥用的东西",
	isSidebarTop: true,
	isConformitiesHidden: true,
	children: [
		{
			path: "hello_world",
			name: "HelloWorld",
			component: HelloWorld,
			title: "Hello World!",
			description: "One small step for a man, literally nothing for mankind.",
			tags: ["闲聊"],
			createDate: new Date(2025, 3, 2, 0, 57),
			modifyDate: new Date(2025, 3, 3, 11, 14),
		},
		{
			path: "miside_review",
			name: "米塔 游玩体验",
			component: MisideReview,
			title: "米塔 游玩体验",
			tags: ["闲聊"],
			createDate: new Date(2025, 4, 14, 1, 13),
			modifyDate: new Date(2025, 4, 14, 1, 16),
		},
	],
};
