/*
 * @Author: 张喜贺
 * @Date: 2020-08-18 20:18:48
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-18 20:21:48
 * @FilePath: /six-ele/src/router/modules/me/index.ts
 */
export default [
  {
    path: "/about",
    name: "about",
    meta: {
      title: "关于",
    },
    component: () =>
      import(/* webpackChunkName: "me" */ "@/views/me/about/index.vue"),
  },
  {
    path: "/protocol",
    name: "protocol",
    meta: {
      title: "用户协议",
    },
    component: () =>
      import(/* webpackChunkName: "me" */ "@/views/me/protocol/index.vue"),
  },
];
