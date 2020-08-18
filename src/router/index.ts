/*
 * @Author: 张喜贺
 * @Date: 2020-08-13 18:46:48
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-18 20:33:32
 * @FilePath: /six-ele/src/router/index.ts
 */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Index from "@/views/index.vue";
import Me from "./modules/me";
import Login from "./modules/login";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "index",
    component: Index,
    redirect: "home",
    children: [
      //首页
      {
        path: "/home",
        name: "home",
        meta: {
          title: "首页",
        },
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/home/index.vue"),
      },
      {
        path: "/category",
        name: "Category",
        meta: {
          title: "分类",
        },
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/category/index.vue"),
      },
      {
        path: "/shoppingCart",
        name: "shoppingCart",
        meta: {
          title: "购物车",
        },
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/views/shoppingCart/index.vue"
          ),
      },
      {
        path: "/me",
        name: "me",
        meta: {
          title: "我的",
        },
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/me/index.vue"),
      },
    ],
  },
  ...Me,
  ...Login,
];

const router = new VueRouter({
  routes,
});

export default router;
