<script setup lang="ts">
import { NAlert, NP, NText } from "naive-ui";
import { ArticleCodeCard, ArticleContent, ArticleTitle } from "@/components";
import { code_01, code_02, code_03, code_04 } from "@/components/articleComponents/specific/learning/reactHooks";
</script>

<template>
  <article-content>
    <n-p>
      <n-alert title="提醒" type="warning">目前文章尚未完成</n-alert>
    </n-p>
    <article-title :h="3" href="1_useState状态钩子">
      1.
      <n-text code>useState</n-text>
      状态钩子
    </article-title>
    <article-title :h="4" href="1_1_使用场景">1.1 使用场景</article-title>
    <n-p>
      当一个数据需要响应式呈现到页面上时，需要使用
      <n-text code>useState</n-text>
      状态声明钩子来告知 React 监听数据，从而实现页面的数据动态更新
    </n-p>
    <article-title :h="4" href="1_2_使用方式">1.2 使用示例</article-title>
    <article-code-card title="使用方式" language="TSX" :code="code_01" />
    <n-p>
      声明方法为
      <n-text code>const [val, setVal] = useState&lt;T&gt;(default)</n-text>
      ，该方法会使用泛型
      <n-text code>T</n-text>
      作为限制，
      <n-text code>default</n-text>
      作为初始值，返回的
      <n-text code>val</n-text>
      为数据本身，而
      <n-text code>setVal</n-text>
      为更新数据的方法
    </n-p>
    <n-p>
      当状态改变时，直接改动
      <n-text code>val</n-text>
      是无效的，需要把新的
      <n-text code>val</n-text>
      通过
      <n-text code>setVal</n-text>
      作为参数发送，从而达到改变数据的效果
    </n-p>
    <n-p>
      <n-text code>setVal</n-text>
      函数也可以接受一个函数
      <n-text code>func</n-text>
      作为参数，React 会调用
      <n-text code>func</n-text>
      并将原有的
      <n-text code>val</n-text>
      作为参数传递，将
      <n-text code>func</n-text>
      的返回值作为新的数据
    </n-p>
    <article-title :h="4" href="1_3_注意事项">1.3 注意事项</article-title>
    <article-title :h="5" href="1_3_1_修改状态会导致组件重新执行">1.3.1 修改状态会导致组件重新执行</article-title>
    <n-p>当组件的一个状态被修改时，React 会调用方法重新渲染组件</n-p>
    <article-code-card title="举例" language="TSX" :code="code_02" />
    <n-p>
      每当按钮被点击时，状态更改，组件重新渲染，控制台输出
      <n-text code>render</n-text>
      ，按钮内部的数据变更
    </n-p>
    <n-p>
      若
      <n-text code>handleClick</n-text>
      函数未使用
      <n-text code>setCount</n-text>
      而是直接修改
      <n-text code>count</n-text>
      本身，则当点击按钮时，不会触发重新渲染，控制台不会再次输出
      <n-text code>render</n-text>
      ，按钮内部的数据也不会变更，但
      <n-text code>count</n-text>
      变量本身是已经改变了的
    </n-p>
    <article-title :h="5" href="1_3_2_修改状态是异步操作">1.3.2 修改状态是异步操作</article-title>
    <n-p>
      <n-text code>setVal</n-text>
      函数会将内容存放于微队列中，在同步代码执行结束后再执行
    </n-p>
    <n-p>
      同时，
      <n-text code>setVal</n-text>
      函数会自动合并，多次调用一次执行，执行后再进行重新渲染，以防多次不必要的重新渲染
    </n-p>
    <article-code-card title="举例" language="TSX" :code="code_03" />
    <n-p>
      如上代码，在按钮点击时，虽然执行了三次
      <n-text code>setCount</n-text>
      ，但由于
      <n-text code>JavaScript</n-text>
      的预先计算，若本次
      <n-text code>count</n-text>
      为
      <n-text code>0</n-text>
      ，则等效于执行了三次
      <n-text code>setCount(1)</n-text>
      ，故每次点击按钮，
      <n-text code>count</n-text>
      的值只会自增
      <n-text code>1</n-text>
      ，而非预想中的自增
      <n-text code>3</n-text>
    </n-p>
    <n-p>
      同时，由于
      <n-text code>setVal</n-text>
      函数的异步性，
      <n-text code>console.log(count)</n-text>
      在控制台的输出也是先前而非更新后的
      <n-text code>count</n-text>
      值
    </n-p>
    <n-p>
      对于上述代码，符合预期的解决方式是使用
      <n-text code>setVal</n-text>
      函数的回调函数参数
    </n-p>
    <article-code-card title="解决方案" language="TSX" :code="code_04" />
    <n-p>
      由于
      <n-text code>setVal</n-text>
      函数的回调函数参数也是异步调用的，回调函数参数接收参数
      <n-text code>pre</n-text>
      时，状态
      <n-text code>count</n-text>
      已被上一次状态修改函数修改完毕，故取到的是新值，理所当然地，控制台输出等操作也会输出正确的新值
    </n-p>
    <article-title :h="5" href="1_3_3_状态具有缓存能力">1.3.3 状态具有缓存能力</article-title>
    <n-p>
      每一个状态都被缓存在 Fiber 节点的
      <n-text code>memoizedState</n-text>
      属性中，而非组件内部
    </n-p>
    <n-p>
      不然每次组件重新渲染时
      <n-text code>useState</n-text>
      钩子接收到的默认值就会覆盖原有状态，此钩子就无任何意义了
    </n-p>
    <article-title :h="3" href="2_useEffect外部作用钩子">
      2.
      <n-text code>useEffect</n-text>
      外部作用钩子
    </article-title>
    <n-p>
      还没写
    </n-p>
    <article-title :h="3" href="3_useContext上下文钩子">
      3.
      <n-text code>useContext</n-text>
      上下文钩子
    </article-title>
    <n-p>
      还没写
    </n-p>
    <article-title :h="3" href="4_useReducer值管理钩子">
      4.
      <n-text code>useReducer</n-text>
      值管理钩子
    </article-title>
    <n-p>
      还没写
    </n-p>
    <article-title :h="3" href="5_useCallback函数缓存钩子">
      5.
      <n-text code>useCallback</n-text>
      函数缓存钩子
    </article-title>
    <n-p>
      还没写
    </n-p>
    <article-title :h="3" href="6_useMemo值缓存钩子">
      6.
      <n-text code>useMemo</n-text>
      值缓存钩子
    </article-title>
    <n-p>
      还没写
    </n-p>
    <article-title :h="3" href="7_useRef引用钩子">
      7.
      <n-text code>useRef</n-text>
      引用钩子
    </article-title>
    <n-p>
      还没写
    </n-p>
    <article-title :h="3" href="8_useTransition后台渲染钩子">
      8.
      <n-text code>useTransition</n-text>
      后台渲染钩子
    </article-title>
    <n-p>
      还没写
    </n-p>
    <article-title :h="3" href="9_useOptimistic乐观更新钩子">
      9.
      <n-text code>useOptimistic</n-text>
      乐观更新钩子
    </article-title>
    <n-p>
      还没写
    </n-p>
    <article-title :h="3" href="10_useDeferredValue延迟更新钩子">
      10.
      <n-text code>useDeferredValue</n-text>
      延迟更新钩子
    </article-title>
    <n-p>
      还没写
    </n-p>
  </article-content>
</template>

<style scoped></style>
