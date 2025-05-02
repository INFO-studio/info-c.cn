<script setup lang="ts">
import {
  NText,
  NP
} from 'naive-ui'
import {
  code_01,
  code_02,
  code_03,
  code_04,
  code_05,
  code_06,
  code_07,
  code_08,
  code_09,
} from '@/components/articleComponents/specific/learning/typescriptKnowledge'
import { ArticleCodeCard, ArticleContent, ArticleTitle } from '@/components'
</script>

<template>
  <article-content>
    <article-title :h="3" href="1_类型声明函数返回值void的特殊情况">
      1. 类型声明函数返回值
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
    <n-p> 比如如下代码</n-p>
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
    <article-title :h="3" href="2_装饰器的执行顺序">2. 装饰器的执行顺序</article-title>
    <n-p>当具有多个装饰器时，会先从上到下执行装饰器工厂，后从下到上执行装饰器</n-p>
    <article-code-card title="示例" language="TypeScript" :code="code_04" />
    <n-p>执行结果如下</n-p>
    <article-code-card title="执行结果" language="text" :code="code_05" />
    <article-title :h="3" href="3_类内函数的两种声明方式的差异">3. 函数的两种声明方式的差异</article-title>
    <n-p>
      函数有两种声明方式，分别为
      <n-text code>method</n-text>
      方式和
      <n-text code>property</n-text>
      方式
    </n-p>
    <article-code-card title="两种函数声明方式" language="TypeScript" :code="code_06" />
    <n-p>
      其中，
      <n-text code>method</n-text>
      方式的参数是可以扩宽也可以收窄的
    </n-p>
    <article-code-card title="method 声明示例" language="TypeScript" :code="code_07" />
    <n-p>
      但
      <n-text code>property</n-text>
      方式的参数不可收窄
    </n-p>
    <article-code-card title="property 声明示例" language="TypeScript" :code="code_08" />
    <n-p>
      于是使用
      <n-text code>method</n-text>
      方式定义的参数在使用时会出现如下问题：
    </n-p>
    <n-p>
      一个子类继承了父类，函数接收子类实例对象，并且调用了子类的独有内容，但当调用此函数并传递父类实例对象时，即使父类不具有此内容，TypeScript 也不会察觉并报错
    </n-p>
    <n-p>
      该问题可以使用
      <n-text code>ESLint</n-text>
      规避
    </n-p>
    <article-code-card title="ESLint 配置" language="JSON" language-name="eslint.config.ts" :code="code_09" />
    <n-p>
      该配置项规定了只能使用
      <n-text code>property</n-text>
      方式声明方法
    </n-p>
  </article-content>
</template>

<style scoped></style>
