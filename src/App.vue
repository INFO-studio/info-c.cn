<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import { NConfigProvider, NDialogProvider, NLayout, NLayoutFooter, NLayoutHeader, NMessageProvider } from "naive-ui";
import { type CSSProperties, computed, onMounted } from "vue";
import { RouterView } from "vue-router";
import { themeOverrides } from "@/assets/theme";
import { ArticleFloatButton, ArticleParticleBackground } from "@/components";
import AppBreadcrumb from "@/components/viewComponents/AppBreadcrumb.vue";
import AppFooter from "@/components/viewComponents/AppFooter.vue";
import AppHeader from "@/components/viewComponents/AppHeader.vue";
import AppSidebar from "@/components/viewComponents/AppSidebar.vue";
import { useThemeStore } from "@/stores/theme.ts";

const themeStore = useThemeStore();
const windowSize = useWindowSize();

const LayoutStyle: CSSProperties = {
	minHeight: "100vh",
	maxHeight: "100vh",
	display: "flex",
	flexDirection: "column",
};
const BodyStyle: CSSProperties = {
	flex: 1,
};
const MainStyle: CSSProperties = {
	height: "100%",
	display: "flex",
	flexDirection: "column",
	position: "relative",
};
const ContentStyle = computed(
	(): CSSProperties => ({
		padding: "0 2rem 2rem 2rem",
		width: "100%",
		maxWidth: windowSize.width.value < 1800 ? "800px" : "1200px",
		minWidth: "200px",
		margin: "1rem auto 0 auto",
		position: "relative",
		zIndex: 1,
	}),
);

hljs.registerLanguage("vue", xml);

onMounted(() => {
	console.log(
		"%c欢迎光临「浮音华章」，您已打开控制台，%c请遵守 MIT 协议",
		`color: black;
     background-color: ${themeOverrides.common.primaryColor};
     padding: 2px 0 2px 4px;
     border-radius: 6px 0 0 6px;
     font-family: sans-serif;`,
		`color: maroon;
     background-color: ${themeOverrides.common.primaryColor};
     padding: 2px 4px 2px 0;
     border-radius: 0 6px 6px 0;
     font-family: sans-serif;
     font-weight: bold`,
	);
});
</script>

<template>
  <n-config-provider :theme="themeStore.theme" :theme-overrides="themeOverrides" :hljs="hljs">
    <n-message-provider>
      <n-dialog-provider>
        <n-layout vertical :content-style="LayoutStyle">
          <n-layout-header bordered>
            <app-header />
          </n-layout-header>
          <n-layout has-sider class="body" :content-style="BodyStyle">
            <app-sidebar />
            <n-layout :content-style="MainStyle">
              <article-particle-background :quantity="50" :staticity="30" :ease="40" />
              <n-layout-header class="breadcrumb-container">
                <app-breadcrumb />
              </n-layout-header>
              <n-layout
                :native-scrollbar="false"
                class="content-layout"
                :content-style="ContentStyle"
              >
                <router-view />
                <article-float-button />
              </n-layout>
            </n-layout>
          </n-layout>
          <n-layout-footer bordered>
            <app-footer />
          </n-layout-footer>
        </n-layout>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
}

.content-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translate(0);
  background: transparent;
}

.breadcrumb-container {
  background-color: transparent;
  position: relative;
  z-index: 1;
}
</style>
