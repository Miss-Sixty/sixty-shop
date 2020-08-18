/*
 * @Author: 张喜贺
 * @Date: 2020-08-18 20:32:50
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-18 20:33:11
 * @FilePath: /six-ele/src/router/modules/login/index.ts
 */
export default [
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登陆",
    },
    component: () =>
      import(/* webpackChunkName: "me" */ "@/views/login/index.vue"),
  },
];
