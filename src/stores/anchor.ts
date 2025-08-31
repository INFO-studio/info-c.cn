import { defineStore } from "pinia";
import { ref } from "vue";

export interface AnchorItem {
	id: number;
	href: string;
	title: string;
	level: number;
}

const idCounter = ref<number>(0);

export const useAnchorStore = defineStore("anchor", () => {
	const anchorList = ref<AnchorItem[]>([]);

	function addAnchor(title: string, level: number, hrefOrigin?: string): AnchorItem {
		const id = ++idCounter.value;
		const href = hrefOrigin !== undefined ? hrefOrigin : id.toString();
		const anchorItem: AnchorItem = { id, href, title, level };
		anchorList.value.push(anchorItem);
		return anchorItem;
	}

	function updateAnchor(id: number, title?: string, href?: string): void {
		const anchor = anchorList.value.find((item) => item.id === id);
		if (anchor) {
			if (title !== undefined) anchor.title = title;
			if (href !== undefined) anchor.href = href;
		}
	}

	function removeAnchor(id: number): void {
		anchorList.value = anchorList.value.filter((item) => item.id !== id);
	}

	return { anchorList, addAnchor, updateAnchor, removeAnchor };
});
