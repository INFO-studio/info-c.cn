<script setup lang="ts">
import { ArrowRight, Link } from "lucide-vue-next";
import { NAlert, NButton, NDataTable, NFlex, NIcon, NP, NTabPane, NTabs, NText } from "naive-ui";
import { type Component, h } from "vue";
import { ArticleCodeCard, ArticleContent, ArticleTitle } from "@/components";
import {
	Canvas01,
	Canvas02,
	Canvas03,
	Canvas04,
	Canvas05,
	Canvas06,
	Canvas07,
	code_01_html,
	code_01_javascript,
	code_01_react,
	code_01_vue3,
	code_02,
	code_03,
	code_04,
	code_05,
	code_06,
	code_07,
	code_08,
} from "@/components/articleComponents/specific/learning/canvasBasic";

const renderCode = (code: string) => h(NText, { code: true }, () => code);
const renderLink = (href: string) =>
	h(
		NButton,
		{
			text: true,
			onClick: () => window.open(href, "_blank"),
		},
		{
			default: () => h(NIcon, { style: "vertical-align: middle;" }, { default: () => h(Link) }),
		},
	);
const renderIcon = (icon: Component) => h(NIcon, { size: 12 }, { default: () => h(icon) });
</script>

<template>
  <article-content>
    <n-p>
      <n-alert title="提醒" type="warning">目前文章尚未完成</n-alert>
    </n-p>
    <article-title :h="3" title="1. 背景"/>
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
    <article-title :h="3" title="2. 基础"/>
    <article-title :h="4" title="2.1 渲染上下文"/>
    <n-p>
      <n-alert title="约定" type="info">
        未进行特殊提示时，本文以下所有关于
        <n-text code>Canvas</n-text>
        操作的
        <n-text code>JavaScript</n-text>
        代码均应嵌入至以下模板中
      </n-alert>
    </n-p>
    <n-p>
      <n-tabs type="line" animated>
        <n-tab-pane name="Vue3" tab="Vue3">
          <article-code-card title="定义标签 + 获取面板" language="Vue" :code="code_01_vue3" />
        </n-tab-pane>
        <n-tab-pane name="React" tab="React">
          <article-code-card title="定义标签 + 获取面板" language="TSX" :code="code_01_react" />
        </n-tab-pane>
        <n-tab-pane name="HTML+JavaScript" tab="HTML + JavaScript">
          <article-code-card title="定义标签" language="HTML" :code="code_01_html" />
          <article-code-card title="获取画板" language="JavaScript" :code="code_01_javascript" />
        </n-tab-pane>
      </n-tabs>
    </n-p>
    <n-p>
      <n-alert title="约定" type="info">
        未进行特殊提示时，本文以下所有
        <n-text code>Prop</n-text>
        与
        <n-text code>API</n-text>
        均以模板中
        <n-text code>ctx</n-text>
        为对象
      </n-alert>
    </n-p>
    <article-title :h="4" title="2.2 坐标系"/>
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
    <article-title :h="4" title="2.3 绘制线段"/>
    <n-p>
      <n-data-table
        :columns="[
          { title: 'Prop', key: 'prop' },
          { title: '类型', key: 'type' },
          { title: '默认', key: 'default' },
          { title: '描述', key: 'description' },
          { title: '文档', key: 'docs', align: 'center', width: '5em' },
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
          { title: '文档', key: 'docs', align: 'center', width: '5em' },
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
            effect: ['绘制线段至 ', renderCode('(x, y)')],
            docs: renderLink(
              'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo',
            ),
          },
          {
            api: renderCode('closePath() '),
            effect: '绘制闭合线段至「绘制初始位置」',
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
      <Canvas01 />
    </n-flex>
    <n-p>
      <article-code-card title="绘制线段" language="JavaScript" :code="code_02" />
    </n-p>
    <article-title :h="4" title="2.4 绘制封闭多边形"/>
    <n-p>
      <n-data-table
        :columns="[
          { title: 'Prop', key: 'prop' },
          { title: '类型', key: 'type' },
          { title: '默认', key: 'default' },
          { title: '描述', key: 'description' },
          { title: '文档', key: 'docs', align: 'center', width: '5em' },
        ]"
        :data="[
          {
            prop: renderCode('fillStyle'),
            type: renderCode('color'),
            default: renderCode('#000'),
            description: '填充面积的颜色',
            docs: renderLink(
              'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle',
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
          { title: '文档', key: 'docs', align: 'center', width: '5em' },
        ]"
        :data="[
          {
            api: renderCode('fill()'),
            effect: '填充以上封闭面积',
            docs: renderLink(
              'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath',
            ),
          },
        ]"
        :pagination="false"
        :bordered="false"
      />
    </n-p>
    <n-flex justify="center">
      <Canvas02 />
    </n-flex>
    <n-p>
      <article-code-card title="绘制封闭多边形" language="JavaScript" :code="code_03" />
    </n-p>
    <article-title :h="4" title="2.5 绘制矩形"/>
    <n-p>
      <n-data-table
        :columns="[
          { title: 'API', key: 'api' },
          { title: '作用', key: 'effect' },
          { title: '文档', key: 'docs', align: 'center', width: '5em' },
        ]"
        :data="[
          {
            api: renderCode('rect(x, y, w, h)'),
            effect: [
              '创建起始坐标',
              renderCode('(x, y)'),
              '，宽为',
              renderCode('w'),
              '高为',
              renderCode('h'),
              '的矩形',
            ],
            docs: renderLink(
              'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rect',
            ),
          },
          {
            api: renderCode('strokeRect(x, y, w, h)'),
            effect: ['创建矩形', renderCode('rect(x, y, w, h)'), '并绘制线段'],
            docs: renderLink(
              'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeRect',
            ),
          },
          {
            api: renderCode('fillRect(x, y, w, h)'),
            effect: ['创建矩形', renderCode('rect(x, y, w, h)'), '并填充面积'],
            docs: renderLink(
              'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect',
            ),
          },
        ]"
        :pagination="false"
        :bordered="false"
      />
    </n-p>
    <n-flex justify="center">
      <Canvas03 />
    </n-flex>
    <n-p>
      <article-code-card title="绘制矩形" language="JavaScript" :code="code_04" />
    </n-p>
    <article-title :h="4" title="2.6 绘制弧线"/>
    <n-p>
      <n-data-table
        :columns="[
          { title: 'API', key: 'api' },
          { title: '作用', key: 'effect' },
          { title: '文档', key: 'docs', align: 'center', width: '5em' },
        ]"
        :data="[
          {
            api: renderCode('arcTo(x1, y1, x2, y2, r)'),
            effect: [
              '创建当前点 ',
              renderIcon(ArrowRight),
              ' 点1 ',
              renderIcon(ArrowRight),
              ' 点2 两线的内切弧路径，半径 ',
              renderCode('r'),
            ],
            docs: renderLink(
              'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arcTo',
            ),
          },
          {
            api: renderCode('arc(x, y, r, sa: rad, ea: rad, acw: boolean)'),
            effect: [
              '创建点 ',
              renderCode('(x, y)'),
              ' 为圆心 ',
              renderCode('r'),
              ' 为半径的弧路径，起始角度 ',
              renderCode('sa'),
              '，终止角度 ',
              renderCode('ea'),
              '，',
              renderCode('acw'),
              ' 控制方向，默认为 ',
              renderCode('false'),
              ' 顺时针',
            ],
            docs: renderLink(
              'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc',
            ),
          },
        ]"
        :pagination="false"
        :bordered="false"
      />
    </n-p>
    <n-flex justify="center">
      <Canvas04 />
    </n-flex>
    <n-p>
      <article-code-card title="绘制弧线 arcTo" language="JavaScript" :code="code_05" />
    </n-p>
    <n-flex justify="center">
      <Canvas05 />
    </n-flex>
    <n-p>
      <article-code-card title="绘制弧线 arc" language="JavaScript" :code="code_06" />
    </n-p>
    <article-title :h="4" title="2.7 绘制贝塞尔曲线"/>
    <n-p>
      <n-data-table
        :columns="[
          { title: 'API', key: 'api' },
          { title: '作用', key: 'effect' },
          { title: '文档', key: 'docs', align: 'center', width: '5em' },
        ]"
        :data="[
          {
            api: renderCode('quadraticCurveTo(cpx, cpy, x, y)'),
            effect: [
              '创建当前点 ',
              renderIcon(ArrowRight),
              ' 控制点 ',
              renderIcon(ArrowRight),
              ' 终点的二阶贝塞尔曲线'
            ],
            docs: renderLink(
              'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo',
            ),
          },
          {
            api: renderCode('bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)'),
            effect: [
              '创建当前点 ',
              renderIcon(ArrowRight),
              ' 控制点1 ',
              renderIcon(ArrowRight),
              ' 控制点2 ',
              renderIcon(ArrowRight),
              ' 终点的三阶贝塞尔曲线'
            ],
            docs: renderLink(
              'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo',
            ),
          },
        ]"
        :pagination="false"
        :bordered="false"
      />
    </n-p>
    <n-flex justify="center">
      <Canvas06 />
    </n-flex>
    <n-p>
      <article-code-card title="绘制二阶贝塞尔曲线" language="JavaScript" :code="code_07" />
    </n-p>
    <n-flex justify="center">
      <Canvas07 />
    </n-flex>
    <n-p>
      <article-code-card title="绘制三阶贝塞尔曲线" language="JavaScript" :code="code_08" />
    </n-p>
  </article-content>
</template>

<style scoped></style>
