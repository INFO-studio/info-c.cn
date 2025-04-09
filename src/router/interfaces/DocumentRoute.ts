import type { RouteComponent } from "vue-router"
import type { Component } from 'vue'

export interface DocumentRoute {
  path: string;
  name: string;
  component: RouteComponent;
  title?: string;
  icon?: Component
  tags?: string[]
  description?: string
  indexContent?: string
  createDate?: Date
  modifyDate?: Date
  changelog?: [{date: Date, changeLog: string}]
  isSidebarHome?: boolean;
  isSidebarTop?: boolean;
  isSidebarEnd?: boolean;
  isSidebarHidden?: boolean;
  isConformitiesHidden?: boolean;
  children?: DocumentRoute[]
}
