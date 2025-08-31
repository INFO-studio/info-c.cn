<script setup lang="ts">
import { NA, NH2, NLi, NP, NSpace, NText, NUl } from "naive-ui";
import { EmojiFaceWithMonocle } from "@/assets/emojis";
import { motionDiv } from "@/exports/motion.ts";

function mergeSort<T>(array: T[], compareFn?: (a: T, b: T) => number): T[] {
	const comparator =
		compareFn ||
		// biome-ignore lint/suspicious/noExplicitAny: unavoidable
		((a: any, b: any) => {
			if (a < b) return -1;
			if (a > b) return 1;
			return 0;
		});
	if (array.length <= 1) {
		return array;
	}
	const middle = Math.floor(array.length / 2);
	const left = array.slice(0, middle);
	const right = array.slice(middle);
	return merge<T>(mergeSort<T>(left, comparator), mergeSort<T>(right, comparator), comparator);
}

function merge<T>(left: T[], right: T[], compareFn: (a: T, b: T) => number): T[] {
	let result: T[] = [];
	let leftIndex = 0;
	let rightIndex = 0;
	while (leftIndex < left.length && rightIndex < right.length) {
		if (compareFn(left[leftIndex], right[rightIndex]) <= 0) {
			result.push(left[leftIndex]);
			leftIndex++;
		} else {
			result.push(right[rightIndex]);
			rightIndex++;
		}
	}
	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// 使用示例
const numbers = [3, 6, 8, 10, 1, 2, 1];
console.log(mergeSort(numbers)); // [1, 1, 2, 3, 6, 8, 10]

const strings = ["banana", "apple", "pear", "orange"];
console.log(mergeSort(strings)); // ['apple', 'banana', 'orange', 'pear']

// 使用自定义比较函数
const objects = [{ id: 3 }, { id: 1 }, { id: 2 }];
console.log(mergeSort(objects, (a, b) => a.id - b.id));
</script>

<template>
  <motion-div :initial="{ opacity: 0, y: 100 }" :animate="{ opacity: 1, y: 0 }" class="article">
    <n-h2 prefix="bar" align-text class="article-title">
      <n-text>
        <EmojiFaceWithMonocle />
        404 NOT FOUND
      </n-text>
    </n-h2>
    <n-space vertical size="large">
      <n-p>您访问了一个不存在的地址</n-p>
      <n-ul>
        <n-li>链接复制错误？可以查看一下地址栏</n-li>
        <n-li>
          点击跳转而来？
          <n-a
            href="https://github.com/INFO-studio/info-c.cn/issues/new/choose"
            target="_blank"
            class="link"
          >
            汇报给笨蛋版主
          </n-a>
        </n-li>
        <n-li>
          或许您想：
          <router-link to="/" class="link">
            <n-a>返回主页</n-a>
          </router-link>
        </n-li>
      </n-ul>
    </n-space>
  </motion-div>
</template>

<style scoped>
.link {
  text-decoration: none;
}
</style>
