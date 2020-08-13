import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Index from "@/views/index.vue";

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
          title: "外卖"
        },
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/home/index.vue")
      },
      {
        path: "/rec",
        name: "rec",
        meta: {
          title: "真香"
        },
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/rec/index.vue")
      },
      {
        path: "/order",
        name: "order",
        meta: {
          title: "订单"
        },
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/order/index.vue")
      },
      {
        path: "/me",
        name: "me",
        meta: {
          title: "我的"
        },
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/me/index.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
