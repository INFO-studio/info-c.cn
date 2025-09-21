<script setup lang="ts">
import { NAlert, NLi, NOl, NP, NText, NUl } from "naive-ui";
import { ArticleCodeCard, ArticleContent, ArticleTitle } from "@/components";
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
	code_10,
	code_11,
	code_12,
	code_13,
	code_14,
} from "@/components/articleComponents/specific/learning/reactHooks";
</script>

<template>
  <article-content>
    <article-title :h="3" title="1. useState状态钩子">
      1.
      <n-text code>useState</n-text>
      状态钩子
    </article-title>
    <article-title :h="4" title="1.1 使用场景"/>
    <n-p>
      当一个数据需要响应式呈现到页面上时，需要使用
      <n-text code>useState</n-text>
      状态声明钩子来告知 React 监听数据，从而实现页面的数据动态更新
    </n-p>
    <article-title :h="4" title="1.2 使用示例"/>
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
    <article-title :h="4" title="1.3 注意事项"/>
    <article-title :h="5" title="1.3.1 修改状态会导致组件重新执行"/>
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
    <article-title :h="5" title="1.3.2 修改状态是异步操作"/>
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
    <article-title :h="5" title="1.3.3 状态具有缓存能力"/>
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
    <article-title :h="3" title="2. useEffect外部作用钩子">
      2.
      <n-text code>useEffect</n-text>
      外部作用钩子
    </article-title>
    <article-title :h="4" title="2.1 使用场景"/>
    <n-p>
      当需要在组件渲染后执行一些副作用操作时（如请求数据、DOM 操作、订阅事件、定时器等），使用
      <n-text code>useEffect</n-text>
      来声明副作用逻辑
    </n-p>
    <n-p>
      常见的使用场景包括：
    </n-p>
    <n-ul>
      <n-li>数据获取（API请求）</n-li>
      <n-li>订阅外部数据源</n-li>
      <n-li>手动操作DOM元素</n-li>
      <n-li>设置定时器或计时器</n-li>
      <n-li>记录日志或分析数据</n-li>
      <n-li>与第三方库集成</n-li>
    </n-ul>
    <article-title :h="4" title="2.2 使用示例"/>
    <article-code-card title="基本使用" language="TSX" :code="code_05" />
    <n-p>
      <n-text code>useEffect</n-text>
      接受两个参数：一个副作用函数
      <n-text code>effect</n-text>
      和一个依赖数组
      <n-text code>deps</n-text>
      。当
      <n-text code>deps</n-text>
      中的数据变化时，副作用函数会被重新执行
    </n-p>
    <n-p>
      依赖数组的不同情况：
    </n-p>
    <n-ul>
      <n-li>
        <n-text code>useEffect(fn, [])</n-text>
        ：仅在组件挂载时执行一次，组件卸载时执行清理函数
      </n-li>
      <n-li>
        <n-text code>useEffect(fn, [dep1, dep2])</n-text>
        ：在组件挂载和依赖项变化时执行
      </n-li>
      <n-li>
        <n-text code>useEffect(fn)</n-text>
        ：在每次渲染后都执行（不推荐，可能导致无限循环）
      </n-li>
    </n-ul>
    <article-title :h="4" title="2.3 注意事项"/>
    <article-title :h="5" title="2.3.1 清理副作用"/>
    <n-p>
      副作用函数可以返回一个清理函数
      <n-text code>cleanup</n-text>
      ，当组件卸载或依赖更新时，React 会执行清理逻辑
    </n-p>
    <article-code-card title="清理副作用" language="TSX" :code="code_06" />
    <n-p>
      常见的清理逻辑有取消订阅、清除定时器等，避免内存泄漏或重复注册
    </n-p>
    <article-title :h="5" title="2.3.2 依赖项缺失问题"/>
    <n-p>
      如果在副作用中使用了组件内的变量或状态，但没有将其添加到依赖数组中，可能会导致闭包陷阱，使用的是旧值而非最新值
    </n-p>
    <article-title :h="5" title="2.3.3 避免无限循环"/>
    <n-p>
      如果在副作用中更新了依赖数组中包含的状态，会导致无限循环：副作用执行 → 状态更新 → 组件重新渲染 → 副作用再次执行
    </n-p>
    <article-title :h="3" title="3. useContext上下文钩子">
      3.
      <n-text code>useContext</n-text>
      上下文钩子
    </article-title>
    <article-title :h="4" title="3.1 使用场景"/>
    <n-p>
      用于在组件树中跨层级传递数据，而不必层层通过 props 传递。适用于以下场景：
    </n-p>
    <n-ul>
      <n-li>全局主题设置（明/暗模式）</n-li>
      <n-li>用户认证信息共享</n-li>
      <n-li>语言偏好设置</n-li>
      <n-li>全局状态管理</n-li>
      <n-li>路由信息共享</n-li>
    </n-ul>
    <article-title :h="4" title="3.2 使用示例"/>
    <article-code-card title="主题切换示例" language="TSX" :code="code_07" />
    <n-p>
      使用 Context 需要三个步骤：
    </n-p>
    <n-ol>
      <n-li>
        通过
        <n-text code>createContext</n-text>
        创建上下文，可以提供默认值
      </n-li>
      <n-li>
        父组件使用
        <n-text code>Context.Provider</n-text>
        提供数据，通过 value 属性传递
      </n-li>
      <n-li>
        子组件通过
        <n-text code>useContext</n-text>
        钩子获取上下文数据
      </n-li>
    </n-ol>
    <article-title :h="4" title="3.3 注意事项"/>
    <article-title :h="5" title="3.3.1 性能考虑"/>
    <n-p>
      当 Provider 的 value 变化时，所有消费该 Context 的组件都会重新渲染，即使它们没有使用变化的部分。可以通过拆分 Context 或使用 memo 优化
    </n-p>
    <article-title :h="5" title="3.3.2 默认值的局限性"/>
    <n-p>
      Context 的默认值只有在组件树中没有匹配的 Provider 时才会使用。如果有 Provider 但 value 是 undefined，消费组件获取的值也是 undefined 而非默认值
    </n-p>
    <article-title :h="3" title="4. useReducer值管理钩子">
      4.
      <n-text code>useReducer</n-text>
      值管理钩子
    </article-title>
    <article-title :h="4" title="4.1 使用场景"/>
    <n-p>
      当状态逻辑较复杂或状态之间有依赖时，可以使用
      <n-text code>useReducer</n-text>
      来替代
      <n-text code>useState</n-text>
      。适用于以下场景：
    </n-p>
    <n-ul>
      <n-li>状态逻辑复杂，包含多个子值</n-li>
      <n-li>下一个状态依赖于之前的状态</n-li>
      <n-li>需要集中管理相关状态的更新逻辑</n-li>
      <n-li>状态更新涉及深层嵌套对象</n-li>
      <n-li>需要在多个组件间共享状态逻辑</n-li>
    </n-ul>
    <article-title :h="4" title="4.2 使用示例"/>
    <article-code-card title="计数器示例" language="TSX" :code="code_08" />
    <n-p>
      <n-text code>useReducer</n-text>
      接收三个参数：
    </n-p>
    <n-ol>
      <n-li>
        <n-text code>reducer</n-text>
        函数：接收当前状态和动作，返回新状态
      </n-li>
      <n-li>
        初始状态：可以是值或初始化函数
      </n-li>
      <n-li>
        初始化函数（可选）：用于惰性初始化状态
      </n-li>
     </n-ol>
    <n-p>
      返回当前状态和
      <n-text code>dispatch</n-text>
      方法。通过
      <n-text code>dispatch</n-text>
      触发状态更新，传入的动作会被传递给 reducer 函数
    </n-p>
    <article-title :h="4" title="4.3 注意事项"/>
    <article-title :h="5" title="4.3.1 与Redux的区别"/>
    <n-p>
      <n-text code>useReducer</n-text>
      是 Redux 模式的简化版，但不包含中间件、组合 reducer、时间旅行调试等高级功能
    </n-p>
    <article-title :h="5" title="4.3.2 性能优化"/>
    <n-p>
      与 useState 不同，如果 dispatch 的动作没有导致状态变化（返回相同的状态引用），React 不会触发重新渲染
    </n-p>
    <article-title :h="5" title="4.3.3 状态共享"/>
    <n-p>
      可以结合 useContext 实现跨组件的状态共享，作为简易的状态管理解决方案
    </n-p>
    <article-title :h="3" title="5. useCallback函数缓存钩子">
      5.
      <n-text code>useCallback</n-text>
      函数缓存钩子
    </article-title>
    <article-title :h="4" title="5.1 使用场景"/>
    <n-p>
      当一个函数在多次渲染间需要保持引用稳定时，可以使用
      <n-text code>useCallback</n-text>
      进行缓存。适用于以下场景：
    </n-p>
    <n-ul>
      <n-li>将回调函数传递给使用 React.memo 或 shouldComponentUpdate 优化的子组件</n-li>
      <n-li>避免因函数引用变化导致的不必要重新渲染</n-li>
      <n-li>函数作为其他 Hook 的依赖项时，避免无限循环</n-li>
      <n-li>需要保持函数引用稳定以便正确比较的场景</n-li>
    </n-ul>
    <article-title :h="4" title="5.2 使用示例"/>
    <article-code-card title="优化子组件渲染" language="TSX" :code="code_09" />
    <n-p>
      <n-text code>useCallback</n-text>
      接收两个参数：
    </n-p>
    <n-ol>
      <n-li>要缓存的回调函数</n-li>
      <n-li>依赖数组：只有当依赖项变化时，才会返回新的函数引用</n-li>
    </n-ol>
    <n-p>
      返回值是缓存的回调函数，在依赖不变的情况下，多次渲染时返回相同的函数引用
    </n-p>
    <article-title :h="4" title="5.3 注意事项"/>
    <article-title :h="5" title="5.3.1 与useMemo的区别"/>
    <n-p>
      <n-text code>useCallback(fn, deps)</n-text>
      等价于
      <n-text code>useMemo(() => fn, deps)</n-text>
      ，前者缓存函数本身，后者缓存函数的返回值
    </n-p>
    <article-title :h="5" title="5.3.2 过度优化问题"/>
    <n-p>
      不是所有函数都需要用
      <n-text code>useCallback</n-text>
      包装，只有在性能确实受到影响时才使用，否则可能导致代码复杂度增加而性能收益有限
    </n-p>
    <article-title :h="5" title="5.3.3 依赖项管理"/>
    <n-p>
      依赖数组应包含回调函数中使用的所有组件内的变量和状态，否则可能导致闭包陷阱，使用的是旧值
    </n-p>
    <article-title :h="3" title="6. useMemo值缓存钩子">
      6.
      <n-text code>useMemo</n-text>
      值缓存钩子
    </article-title>
    <article-title :h="4" title="6.1 使用场景"/>
    <n-p>
      当一个计算过程开销较大时，可以通过
      <n-text code>useMemo</n-text>
      缓存计算结果，避免每次渲染都重新计算。适用于以下场景：
    </n-p>
    <n-ul>
      <n-li>复杂计算或数据处理（如排序、过滤大型数组）</n-li>
      <n-li>昂贵的格式化操作</n-li>
      <n-li>需要保持对象引用稳定以避免子组件重新渲染</n-li>
      <n-li>作为其他 Hook 的依赖项时，避免不必要的重新计算</n-li>
    </n-ul>
    <article-title :h="4" title="6.2 使用示例"/>
    <article-code-card title="缓存计算结果" language="TSX" :code="code_10" />
    <n-p>
      <n-text code>useMemo</n-text>
      接收两个参数：
    </n-p>
    <n-ol>
      <n-li>创建值的工厂函数</n-li>
      <n-li>依赖数组：只有当依赖项变化时，才会重新计算值</n-li>
    </n-ol>
    <n-p>
      返回值是缓存的计算结果，在依赖不变的情况下，多次渲染时返回相同的值引用
    </n-p>
    <article-title :h="4" title="6.3 注意事项"/>
    <article-title :h="5" title="6.3.1 不要过度使用"/>
    <n-p>
      只有当计算真正昂贵或需要保持引用稳定时才使用
      <n-text code>useMemo</n-text>
      ，否则可能因为额外的记忆化开销而适得其反
    </n-p>
    <article-title :h="5" title="6.3.2 依赖项管理"/>
    <n-p>
      依赖数组应包含工厂函数中使用的所有组件内的变量和状态，确保在相关数据变化时重新计算
    </n-p>
    <article-title :h="5" title="6.3.3 与React.memo的区别"/>
    <n-p>
      <n-text code>useMemo</n-text>
      缓存组件内的计算结果，而
      <n-text code>React.memo</n-text>
      缓存整个组件的渲染结果
    </n-p>
    <article-title :h="3" title="7. useRef引用钩子">
      7.
      <n-text code>useRef</n-text>
      引用钩子
    </article-title>
    <article-title :h="4" title="7.1 使用场景"/>
    <n-p>
      <n-text code>useRef</n-text>
      有两个主要用途：
    </n-p>
    <n-ol>
      <n-li>获取组件内部的 DOM 节点引用</n-li>
      <n-li>在多次渲染之间存储一个不会触发重新渲染的值</n-li>
    </n-ol>
    <n-p>
      适用于以下场景：
    </n-p>
    <n-ul>
      <n-li>访问和操作 DOM 元素（如聚焦、测量尺寸）</n-li>
      <n-li>存储前一个状态值</n-li>
      <n-li>保存定时器 ID、动画帧 ID 等</n-li>
      <n-li>存储不需要触发重新渲染的数据</n-li>
      <n-li>计数器或标志（如渲染次数）</n-li>
    </n-ul>
    <article-title :h="4" title="7.2 使用示例"/>
    <article-code-card title="DOM引用和值存储" language="TSX" :code="code_11" />
    <n-p>
      <n-text code>useRef</n-text>
      接收一个初始值参数，返回一个可变的 ref 对象，其
      <n-text code>.current</n-text>
      属性被初始化为传入的参数
    </n-p>
    <n-p>
      返回的 ref 对象在组件的整个生命周期内保持不变，即使组件重新渲染，ref 对象也不会改变
    </n-p>
    <article-title :h="4" title="7.3 注意事项"/>
    <article-title :h="5" title="7.3.1 修改不会触发重新渲染"/>
    <n-p>
      修改
      <n-text code>ref.current</n-text>
      值不会导致组件重新渲染，这是它与 state 的主要区别
    </n-p>
    <article-title :h="5" title="7.3.2 DOM引用时机"/>
    <n-p>
      当用于引用 DOM 元素时，ref 对象的
      <n-text code>.current</n-text>
      属性在组件挂载时设置为对应的 DOM 元素，在卸载时设置为
      <n-text code>null</n-text>
    </n-p>
    <article-title :h="5" title="7.3.3 与状态的区别"/>
    <n-p>
      与
      <n-text code>useState</n-text>
      不同，
      <n-text code>useRef</n-text>
      是可变的，可以直接修改
      <n-text code>.current</n-text>
      属性，且修改不会触发重新渲染
    </n-p>
    <article-title :h="3" title="8. useTransition后台渲染钩子">
      8.
      <n-text code>useTransition</n-text>
      后台渲染钩子
    </article-title>
    <article-title :h="4" title="8.1 使用场景"/>
    <n-p>
      用于标记某些状态更新为非紧急更新，从而保持界面交互的流畅性。适用于以下场景：
    </n-p>
    <n-ul>
      <n-li>处理大型列表或表格的过滤和排序</n-li>
      <n-li>复杂数据可视化的更新</n-li>
      <n-li>需要区分高优先级和低优先级更新的场景</n-li>
      <n-li>避免因耗时计算阻塞用户输入</n-li>
    </n-ul>
    <article-title :h="4" title="8.2 使用示例"/>
    <article-code-card title="流畅的搜索体验" language="TSX" :code="code_12" />
    <n-p>
      <n-text code>useTransition</n-text>
      不接收任何参数，返回一个包含两个元素的数组：
    </n-p>
    <n-ol>
      <n-li>
        <n-text code>isPending</n-text>
        ：布尔值，表示是否有待处理的转换
      </n-li>
      <n-li>
        <n-text code>startTransition</n-text>
        ：函数，用于将状态更新标记为非紧急
      </n-li>
    </n-ol>
    <n-p>
      使用
      <n-text code>startTransition</n-text>
      包装的状态更新会被标记为低优先级，允许更紧急的更新（如用户输入）先执行
    </n-p>
    <article-title :h="4" title="8.3 注意事项"/>
    <article-title :h="5" title="8.3.1 与并发模式的关系"/>
    <n-p>
      <n-text code>useTransition</n-text>
      是 React 并发模式的一部分，允许 React 中断渲染以处理更高优先级的任务
    </n-p>
    <article-title :h="5" title="8.3.2 适用的状态更新类型"/>
    <n-p>
      只适用于 React 状态更新，不能用于 DOM 操作、网络请求等副作用
    </n-p>
    <article-title :h="5" title="8.3.3 与useDeferredValue的区别"/>
    <n-p>
      <n-text code>useTransition</n-text>
      用于包装状态更新逻辑，而
      <n-text code>useDeferredValue</n-text>
      用于延迟值本身的更新
    </n-p>
    <article-title :h="3" title="9. useOptimistic乐观更新钩子">
      9.
      <n-text code>useOptimistic</n-text>
      乐观更新钩子
    </article-title>
    <article-title :h="4" title="9.1 使用场景"/>
    <n-p>
      React 19 引入的新特性，用于在异步请求完成前，先在 UI 上显示乐观的更新结果，待请求完成后再进行回滚或确认。适用于以下场景：
    </n-p>
    <n-ul>
      <n-li>表单提交后立即显示成功状态</n-li>
      <n-li>点赞、评论等社交互动功能</n-li>
      <n-li>购物车添加/删除商品</n-li>
      <n-li>任何需要立即反馈但实际操作需要等待服务器响应的交互</n-li>
    </n-ul>
    <article-title :h="4" title="9.2 使用示例"/>
    <article-code-card title="待办事项乐观添加" language="TSX" :code="code_13" />
    <n-p>
      <n-text code>useOptimistic</n-text>
      接收两个参数：
    </n-p>
    <n-ol>
      <n-li>当前状态：通常是从服务器获取的实际数据</n-li>
      <n-li>更新函数：接收当前状态和乐观更新值，返回乐观更新后的状态</n-li>
    </n-ol>
    <n-p>
      返回一个包含两个元素的数组：
    </n-p>
    <n-ol>
      <n-li>乐观状态：可能包含尚未确认的乐观更新</n-li>
      <n-li>添加乐观更新的函数：调用此函数应用乐观更新</n-li>
    </n-ol>
    <article-title :h="4" title="9.3 注意事项"/>
    <article-title :h="5" title="9.3.1 自动回滚机制"/>
    <n-p>
      如果异步操作失败，乐观更新会自动回滚到实际状态，无需手动处理回滚逻辑
    </n-p>
    <article-title :h="5" title="9.3.2 与服务器状态同步"/>
    <n-p>
      乐观更新后，仍需更新实际状态以与服务器保持同步，否则下次状态变化时乐观更新会被丢弃
    </n-p>
    <article-title :h="5" title="9.3.3 与React Query等库的关系"/>
    <n-p>
      <n-text code>useOptimistic</n-text>
      提供了类似于 React Query、SWR 等库中乐观更新功能的原生实现，但更加轻量和集成
    </n-p>
    <article-title :h="3" title="10. useDeferredValue延迟更新钩子">
      10.
      <n-text code>useDeferredValue</n-text>
      延迟更新钩子
    </article-title>
    <article-title :h="4" title="10.1 使用场景"/>
    <n-p>
      用于延迟更新某个值，使得高优先级任务先完成，从而提升交互体验。适用于以下场景：
    </n-p>
    <n-ul>
      <n-li>搜索框输入时延迟更新结果列表</n-li>
      <n-li>处理大型数据集的渲染</n-li>
      <n-li>复杂可视化的更新</n-li>
      <n-li>任何需要保持输入响应性但可以延迟显示结果的场景</n-li>
    </n-ul>
    <article-title :h="4" title="10.2 使用示例"/>
    <article-code-card title="延迟搜索结果" language="TSX" :code="code_14" />
    <n-p>
      <n-text code>useDeferredValue</n-text>
      接收一个参数：
    </n-p>
    <n-ol>
      <n-li>需要延迟更新的值</n-li>
    </n-ol>
    <n-p>
      返回该值的延迟版本。在高负载情况下，返回的延迟值可能会"滞后"于原始值，直到浏览器有空闲时间进行更新
    </n-p>
    <article-title :h="4" title="10.3 注意事项"/>
    <article-title :h="5" title="10.3.1 与useTransition的区别"/>
    <n-p>
      <n-text code>useDeferredValue</n-text>
      用于延迟值本身，而
      <n-text code>useTransition</n-text>
      用于标记状态更新为低优先级
    </n-p>
    <article-title :h="5" title="10.3.2 不是简单的防抖或节流"/>
    <n-p>
      与传统的防抖/节流不同，
      <n-text code>useDeferredValue</n-text>
      不会固定延迟时间，而是根据设备性能和当前负载动态调整
    </n-p>
    <article-title :h="5" title="10.3.3 与并发渲染的关系"/>
    <n-p>
      <n-text code>useDeferredValue</n-text>
      是 React 并发渲染特性的一部分，允许 React 中断低优先级渲染以处理更高优先级的更新
    </n-p>
    <article-title :h="5" title="10.3.4 性能考虑"/>
    <n-p>
      为了获得最佳性能，应结合
      <n-text code>useMemo</n-text>
      使用延迟值，避免不必要的重新计算
    </n-p>
  </article-content>
</template>

<style scoped></style>
