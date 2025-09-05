<script setup lang="ts">
import { ArrowRightLeft, CircleCheckBig, CircleOff } from "lucide-vue-next";
import { NA, NAlert, NLi, NP, NSpace, NText, NUl, useThemeVars } from "naive-ui";
import { ArticleCodeCard, ArticleContent, ArticleMermaid, ArticleTextIcon, ArticleTitle } from "@/components";
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
	code_15,
	code_16,
	code_17,
	code_18,
	code_19,
	code_20,
	mermaid_01,
} from "@/components/articleComponents/specific/learning/crossDomain";

const ThemeVars = useThemeVars();
</script>

<template>
  <article-content>
    <n-p>
      <n-alert title="提醒" type="warning">目前文章尚未完成</n-alert>
    </n-p>
    <article-title :h="3" title="1. 何时会发生跨域问题"/>
    <n-p> 定义「源」为「协议 + 根域名 + 端口号」 </n-p>
    <n-p>
      若一个请求的客户端与服务端的源的三部分均完全相同，则称其为同源请求，否则称其为非同源（异源、跨域）
    </n-p>
    <n-p>
      <n-space>
        <n-text code><n-text type="warning">http</n-text>://www.a.com:80/p</n-text>
        <article-text-icon :component="ArrowRightLeft" />
        <n-text code><n-text type="warning">sftp</n-text>://www.a.com:80/p</n-text>
        <span>
          <article-text-icon :component="CircleOff" :color="ThemeVars.errorColor" />
          <n-text type="error">跨域</n-text>
        </span>
      </n-space>
    </n-p>
    <n-p>
      <n-space>
        <n-text code>http://<n-text type="warning">www.a.com</n-text>:80/p</n-text>
        <article-text-icon :component="ArrowRightLeft" />
        <n-text code>http://<n-text type="warning">www.b.com</n-text>:80/p</n-text>
        <span>
          <article-text-icon :component="CircleOff" :color="ThemeVars.errorColor" />
          <n-text type="error">跨域</n-text>
        </span>
      </n-space>
    </n-p>
    <n-p>
      <n-space>
        <n-text code>http://www.a.com:<n-text type="warning">80</n-text>/p</n-text>
        <article-text-icon :component="ArrowRightLeft" />
        <n-text code>http://www.a.com:<n-text type="warning">81</n-text>/p</n-text>
        <span>
          <article-text-icon :component="CircleOff" :color="ThemeVars.errorColor" />
          <n-text type="error">跨域</n-text>
        </span>
      </n-space>
    </n-p>
    <n-p>
      <n-space>
        <n-text code>http://<n-text type="warning">127.0.0.1</n-text>:80/p</n-text>
        <article-text-icon :component="ArrowRightLeft" />
        <n-text code>http://<n-text type="warning">localhost</n-text>:80/p</n-text>
        <span>
          <article-text-icon :component="CircleOff" :color="ThemeVars.errorColor" />
          <n-text type="error">跨域</n-text>
        </span>
      </n-space>
    </n-p>
    <n-p>
      <n-space>
        <n-text code>http://www.a.com:80/<n-text type="warning">p</n-text>
        </n-text>
        <article-text-icon :component="ArrowRightLeft" />
        <n-text code>http://www.a.com:80/<n-text type="warning">q</n-text>
        </n-text>
        <span>
          <article-text-icon :component="CircleCheckBig" :color="ThemeVars.successColor" />
          <n-text type="success">同源</n-text>
        </span>
      </n-space>
    </n-p>
    <article-title :h="3" title="2. 跨域的限制"/>
    <article-title :h="4" title="2.1 限制 DOM 访问"/>
    <article-code-card title="限制 DOM 访问" language="HTML" :code="code_01" />
    <article-code-card title="点击时报错" language="plaintext" language-name="ErrorLog" :code="code_02" />
    <article-title :h="4" title="2.2 限制 Cookie 获取"/>
    <article-code-card title="限制 Cookie 获取" language="HTML" :code="code_03" />
    <article-title :h="4" title="2.3 限制网络请求"/>
    <article-mermaid :chart="mermaid_01" />
    <article-title :h="3" title="3. 特征"/>
    <article-title :h="4" title="3.1 仅存在于浏览器端"/>
    <n-p>跨域限制仅在浏览器端生效，服务器端不存在跨域限制</n-p>
    <article-title :h="4" title="3.2 发出请求正常"/>
    <n-p>即使发出跨域请求，该请求会从浏览器正常发出，浏览器也会正常接收返回数据，但不会将违反跨域限制的响应返回给 JavaScript</n-p>
    <n-p>
      详见
      <n-a href="#2_3_限制网络请求">2.3</n-a>
      图表
    </n-p>
    <article-title :h="4" title="3.3 部分标签请求正常"/>
    <n-p>
      如果是
      <n-text code>&lt;link&gt;</n-text>
      、
      <n-text code>&lt;script&gt;</n-text>
      、
      <n-text code>&lt;img&gt;</n-text>
      等标签发出的
      <n-text code>src GET</n-text>
      请求，则一般不会受跨域限制影响
    </n-p>
    <n-p>
      可以通过
      <n-a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Guides/CSP">CSP 内容安全策略</n-a>
      进行限制
    </n-p>
    <article-title :h="3" title="4. 修改服务器解决跨域问题"/>
    <article-title :h="4" title="4.1 原生 CORS"/>
    <n-p>
      可以通过 CORS 跨域资源共享
      <n-text code>Cross-Origin Resource Sharing</n-text>
      解决跨域问题
    </n-p>
    <n-p>
      CORS 是用于控制浏览器校验跨域请求的一套规范，服务器依照 CORS 规范添加特定响应头来控制浏览器校验
    </n-p>
    <article-title :h="5" title="4.1.1 区分简单请求与复杂请求"/>
    <n-p>
      Fetch 规范将请求分为了简单请求与复杂请求，简单请求即不会触发 CORS 预检请求 的请求，详见
      <n-a href="#4_1_3_解决复杂请求">4.1.3</n-a>
      内容
    </n-p>
    <n-p>
      简单请求满足了以下几点
      <n-ul>
        <n-li>
          请求方法为
          <n-text code>GET</n-text>
          、
          <n-text code>HEAD</n-text>
          、
          <n-text code>POST</n-text>
        </n-li>
        <n-li>
          请求头符合
          <n-a href="https://fetch.spec.whatwg.org/#cors-safelisted-request-header" target="_blank">Fetch 规范</n-a>
        </n-li>
        <n-li>
          请求头中的字段
          <n-text code>Content-Type</n-text>
          为以下三者之一
          <n-ul>
            <n-li>
              <n-text code>text/plain</n-text>
            </n-li>
            <n-li>
              <n-text code>multipart/form-data</n-text>
            </n-li>
            <n-li>
              <n-text code>application/x-www-form-urlencoded</n-text>
            </n-li>
          </n-ul>
        </n-li>
      </n-ul>
    </n-p>
    <n-p>
      除简单请求的所有请求均为复杂请求
    </n-p>
    <article-title :h="5" title="4.1.2 解决简单请求"/>
    <n-p>
      在响应头中，设置字段
      <n-text code>Access-Control-Allow-Origin</n-text>
      为请求源，若设置为
      <n-text code>*</n-text>
      则允许任何简单跨域请求
    </n-p>
    <article-code-card title="客户端" language="JavaScript" :code="code_04" />
    <article-code-card title="服务端" language="JavaScript" language-name="Node.js" :code="code_05" />
    <article-title :h="5" title="4.1.3 解决复杂请求"/>
    <n-p>在发送复杂请求前，浏览器会先发送一次预检请求，用于向服务端确认是否允许接下来的复杂跨域请求</n-p>
    <n-p>
      预检请求是一个
      <n-text code>Type</n-text>
      为
      <n-text code>preflight</n-text>
      的
      <n-text code>OPTIONS</n-text>
      请求，请求体有一些特殊字段
      <n-ul>
        <n-li>
          请求头字段
          <n-text code>Origin</n-text>
          表示发起请求的源
        </n-li>
        <n-li>
          请求头字段
          <n-text code>Access-Control-Request-Method</n-text>
          表示即将发起的跨域请求的 HTTP 方法
        </n-li>
        <n-li>
          请求头字段
          <n-text code>Access-Control-Request-Headers</n-text>
          表示即将发起的跨域请求的自定义请求头
        </n-li>
      </n-ul>
    </n-p>
    <n-p>
      预检请求需要响应头内包含几个字段
      <n-ul>
        <n-li>
          响应头字段
          <n-text code>Access-Control-Allow-Origin</n-text>
          表示同意跨域请求的源
        </n-li>
        <n-li>
          响应头字段
          <n-text code>Access-Control-Allow-Methods</n-text>
          表示同意跨域请求的方法
        </n-li>
        <n-li>
          响应头字段
          <n-text code>Access-Control-Allow-Headers</n-text>
          表示同意跨域请求的自定义请求头
        </n-li>
        <n-li>
          响应头字段
          <n-text code>Access-Control-Max-Age</n-text>
          （可选）表示同意跨域请求的缓存时间，以秒为单位，在这段时间内，符合本次预检请求的所有跨域请求都不再发送预检请求
        </n-li>
      </n-ul>
    </n-p>
    <article-code-card title="客户端" language="JavaScript" :code="code_06" />
    <article-code-card title="服务端" language="JavaScript" language-name="Node.js" :code="code_07" />
    <article-title :h="4" title="4.2 后端中间件"/>
    <article-title :h="5" title="4.2.1 cors 库 - Node.js"/>
    <article-code-card title="安装 cors" language="Bash" :code="code_08" />
    <article-code-card title="配置 cors" language="JavaScript" language-name="Node.js" :code="code_09" />
    <article-title :h="5" title="4.2.2 SpringBoot自带 - Java"/>
    <article-code-card title="全局配置" language="Java" :code="code_10" />
    <article-code-card title="单 Controller 配置" language="Java" :code="code_11" />
    <article-title :h="5" title="4.2.3 Gin自带 - Go"/>
    <article-code-card title="安装" language="Bash" :code="code_12" />
    <article-code-card title="配置" language="Go" :code="code_13" />
    <article-title :h="4" title="4.3 JSONP"/>
    <n-alert type="warning">
      JSONP 是过期技术，不建议任何情况下使用
    </n-alert>
    <n-p>
      即使用
      <n-a href="#3_3_部分标签请求正常">3.3</n-a>
      的性质，使用
      <n-text code>&lt;script&gt;</n-text>
      标签发送
      <n-text code>GET</n-text>
      请求来避免跨域问题
    </n-p>
    <article-title :h="5" title="4.3.1 JSONP的原理"/>
    <n-p>
      浏览器在读取到
      <n-text code>&lt;script src="abc"&gt;&lt;/script&gt;</n-text>
      时，会向
      <n-text code>abc</n-text>
      发送一个不会触发跨域限制的
      <n-text code>GET</n-text>
      请求，将请求体作为
      <n-text code>JavaScript</n-text>
      脚本执行
    </n-p>
    <article-code-card title="客户端" language="HTML" :code="code_14" />
    <article-code-card title="服务端" language="JavaScript" language-name="Node.js" :code="code_15" />
    <article-title :h="5" title="4.3.2 原生 JSONP"/>
    <article-code-card title="客户端" language="HTML" :code="code_16" />
    <article-code-card title="服务端" language="JavaScript" language-name="Node.js" :code="code_17" />
    <article-title :h="5" title="4.3.3 jQuery 封装的 JSONP"/>
    <article-code-card title="客户端" language="HTML" :code="code_18" />
    <article-title :h="3" title="5. 配置代理服务器解决跨域问题"/>
    <n-p>
      根据
      <n-a href="#3_1_仅存在于浏览器端">3.1</n-a>
      的性质，发送跨域请求到同源服务器上，并由服务器进行转发即可解决跨域问题
    </n-p>
    <article-title :h="4" title="5.1 使用代理中间件"/>
    <article-code-card title="安装代理中间件" language="Bash" :code="code_19" />
    <article-code-card title="配置代理中间件" language="JavaScript" language-name="Node.js" :code="code_20" />
    <n-p>
      此时，客户端使用
      <n-text code>https://www.a.com/api/aaa</n-text>
      ，即可通过代理服务器发送请求至
      <n-text code>https://www.b.com/aaa</n-text>
    </n-p>
    <article-title :h="4" title="5.1 使用 Nginx"/>
    <n-p>还没写</n-p>
    <article-title :h="4" title="5.1 使用脚手架"/>
    <n-p>还没写</n-p>
  </article-content>
</template>

<style scoped></style>
