import type { RouteComponent } from "vue-router"
import type { Component } from 'vue'

export interface DocumentRoute {
  path: string;
  name: string;
  component: RouteComponent;
  icon?: Component
  isSidebarHome?: boolean;
  isSidebarTop?: boolean;
  children?: DocumentRoute[]
  hideInSidebar?: boolean;
}
