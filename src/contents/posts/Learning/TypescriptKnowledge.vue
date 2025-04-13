<script setup lang="ts">
import ArticleContent from '@/components/articleComponents/common/ArticleContent.vue'
import ArticleTitle from '@/components/articleComponents/common/ArticleTitle.vue'
import ArticleCodeCard from '@/components/articleComponents/common/ArticleCodeCard.vue'
import { code_01, code_02, code_03 } from '@/components/articleComponents/specific/learning/typescriptKnowledge'
</script>

<template>
  <article-content>
    <article-title :h="3" href="1_类型声明函数返回值void的特殊情况"
      >1. 类型声明函数返回值
      <n-text code>void</n-text>
      的特殊情况
    </article-title>
    <n-p
      >使用类型声明限制函数返回值为
      <n-text code>void</n-text>
      时，
      <n-text code>TypeScript</n-text>
      不会严格限制返回值类型
    </n-p>
    <n-p> 比如如下代码 </n-p>
    <article-code-card title="示例" language="TypeScript" :code="code_01" />
    <n-p>
      为了单行箭头函数的去大括号简写可以成立，
      <n-text code>TypeScript</n-text>
      做了如此取舍，如
    </n-p>
    <article-code-card title="示例" language="TypeScript" :code="code_02" />
    <n-p>
      这里的
      <n-text code>list2.push(item)</n-text>
      具有非
      <n-text code>void</n-text>
      返回值，并由于单行箭头函数简写形式，该返回值被再次返回
    </n-p>
    <n-p>
      而
      <n-text code>forEach</n-text>
      函数接受的参数的返回值类型为
      <n-text code>void</n-text>
      ，如果不做如此取舍，则此处必须在函数体两侧加入大括号以保证默认返回
      <n-text code>undefined</n-text>
    </n-p>
    <n-p>
      但
      <n-text code>TypeScript</n-text>
      解释器会对
      <n-text code>void</n-text>
      返回做进一步处理，以保证返回的内容不会作为行为判据
    </n-p>
    <article-code-card title="示例" language="TypeScript" :code="code_03" />
  </article-content>
</template>

<style scoped></style>
