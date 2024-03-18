import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  /**
   * 这里不使用github page要求的配置了 会影响其他域名的访问。
   * - https://vuejs.press/zh/guide/deployment.html#github-pages
   */
  // base: "/java-pilot-base-doc/",
  base: "/",

  lang: "zh-CN",
  title: "文档演示",
  description: "vuepress-theme-hope 的文档演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
