/*
 * @Author: 张喜贺
 * @Date: 2020-08-11 17:44:27
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-13 19:04:58
 * @FilePath: /six-ele/docs/.vuepress/config.js
 */
module.exports = {
  title: "饿了么外卖",
  base: "/six-ele-docs/",
  dest: "six-ele-docs",
  themeConfig: {
    nav: [
      { text: "指南", link: "/guide/" },
      { text: "组件", link: "/components/" },
      { text: "项目截图", link: "/images/" },
      {
        text: "项目地址",
        link: "https://github.com/Miss-Sixty/six-ele",
        target: "_blank",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "介绍",
          path: "/guide/",
        },
        {
          title: "更新日志",
          path: "/guide/changelog",
        },
      ],

      "/components/": [
        {
          title: "工具栏",
          path: "/components/",
        },
        {
          title: "分页",
          path: "/components/pagination",
        },
      ],
    },
    displayAllHeaders: true,
    smoothScroll: true,
    lastUpdated: "上次更新",
  },
};
