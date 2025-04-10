<script setup lang="ts">
import { h } from 'vue'
import ArticleContent from '@/components/articleComponents/common/ArticleContent.vue'
import ArticleTitle from '@/components/articleComponents/common/ArticleTitle.vue'
import ArticleCodeCard from '@/components/articleComponents/common/ArticleCodeCard.vue'
import Canvas01 from '@/components/articleComponents/specific/learning/canvasBasic/canvas01.vue'
import {
  code_01,
  code_02,
  code_03_vue3,
  code_03_html,
  code_03_javascript,
} from '@/components/articleComponents/specific/learning/canvasBasic/codes'
import { NText, NButton, NIcon } from 'naive-ui'
import { Link } from 'lucide-vue-next'

const renderCode = (code: string) => h(NText, { code: true }, () => code)
const renderLink = (href: string) =>
  h(
    NButton,
    {
      text: true,
      onClick: () => window.open(href, '_blank'),
    },
    {
      default: () => h(NIcon, null, { default: () => h(Link) }),
    },
  )
</script>

<template>
  <article-content>
    <n-p>
      <n-alert title="提醒" type="warning">目前文章尚未完成</n-alert>
    </n-p>
    <article-title :h="3" href="1_背景">1. 背景</article-title>
    <n-p>
      <n-text code>Canvas</n-text>
      是
      <n-text code>HTML5</n-text>
      标准引入的核心绘图标签，它通过
      <n-text code>JavaScript</n-text>
      脚本在网页上创建动态渲染的位图画布，突破了传统
      <n-text code>HTML</n-text>
      /
      <n-text code>CSS</n-text>
      在图形处理上的局限。
    </n-p>
    <n-p>
      作为浏览器原生的绘图
      <n-text code>API</n-text>
      载体，
      <n-text code>Canvas</n-text>
      广泛应用于数据可视化、游戏开发、图像处理以及交互式图形界面设计，其像素级控制特性特别适合需要高频重绘的场景。
    </n-p>
    <n-p>
      但不同于
      <n-text code>SVG</n-text>
      矢量图形的无损缩放特性，
      <n-text code>Canvas</n-text>
      绘制的图像属于位图格式，放大时可能产生锯齿。
    </n-p>
    <article-title :h="3" href="2_基础">2. 基础</article-title>
    <n-p>
      <n-alert title="约定" type="info">
        未进行特殊提示时，本文以下所有
        <n-text code>API</n-text>
        与
        <n-text code>Prop</n-text>
        均以
        <n-text code>ctx</n-text>
        为对象
      </n-alert>
    </n-p>
    <article-title :h="4" href="2_1_渲染上下文">2.1 渲染上下文</article-title>
    <article-code-card title="定义标签" language="HTML" :code="code_01" />
    <article-code-card title="获取画板" language="JavaScript" :code="code_02" />
    <article-title :h="4" href="2_2_坐标系">2.2 坐标系</article-title>
    <n-p>
      <n-text code>canvas</n-text>
      的坐标系以左上角为原点
      <n-text code>(0, 0)</n-text>
      ，横轴为
      <n-text code>x</n-text>
      轴，纵轴为
      <n-text code>y</n-text>
      轴
    </n-p>
    <article-title :h="4" href="2_3_绘制线段">2.3 绘制线段</article-title>
    <n-p>
      <n-data-table
        :columns="[
          { title: 'Prop', key: 'prop' },
          { title: '类型', key: 'type' },
          { title: '默认', key: 'default' },
          { title: '描述', key: 'description' },
          { title: '文档', key: 'docs', align: 'center' },
        ]"
        :data="[
          {
            prop: renderCode('lineWidth'),
            type: renderCode('number'),
            default: renderCode('1'),
            description: '绘制线段的宽度',
            docs: renderLink(
              'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth',
            ),
          },
          {
            prop: renderCode('strokeStyle'),
            type: renderCode('color'),
            default: renderCode('#000'),
            description: '绘制线段的颜色',
            docs: renderLink(
              'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle',
            ),
          },
        ]"
        :pagination="false"
        :bordered="false"
      />
    </n-p>
    <n-p>
      <n-data-table
        :columns="[
          { title: 'API', key: 'api' },
          { title: '作用', key: 'effect' },
          { title: '文档', key: 'docs', align: 'center' },
        ]"
        :data="[
          {
            api: renderCode('beginPath()'),
            effect: '声明目前部分开始绘制',
            docs: renderLink(
              'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath',
            ),
          },
          {
            api: renderCode('moveTo(x: number, y: number)'),
            effect: ['「绘制初始位置」移动至 ', renderCode('(x, y)')],
            docs: renderLink(
              'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo',
            ),
          },
          {
            api: renderCode('lineTo(x: number, y: number)'),
            effect: ['绘制直线至 ', renderCode('(x, y)')],
            docs: renderLink(
              'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo',
            ),
          },
          {
            api: renderCode('closePath() '),
            effect: '绘制闭合直线至「绘制初始位置」',
            docs: renderLink(
              'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/closePath',
            ),
          },
        ]"
        :pagination="false"
        :bordered="false"
      />
    </n-p>
    <n-flex justify="center">
      <canvas01 />
    </n-flex>
    <n-p>
      <n-tabs type="line" animated>
        <n-tab-pane name="Vue3" tab="Vue3">
          <article-code-card title="绘制线段" language="Vue" :code="code_03_vue3" />
        </n-tab-pane>
        <n-tab-pane name="HTML+JavaScript" tab="HTML + JavaScript">
          <article-code-card title="绘制线段 HTML部分" language="HTML" :code="code_03_html" />
          <article-code-card
            title="绘制线段 JS部分"
            language="JavaScript"
            :code="code_03_javascript"
          />
        </n-tab-pane>
      </n-tabs>
    </n-p>
  </article-content>
</template>

<style scoped></style>
