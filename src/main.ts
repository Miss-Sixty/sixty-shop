/*
 * @Author: 张喜贺
 * @Date: 2020-08-13 18:46:48
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-14 21:57:04
 * @FilePath: /six-ele/src/main.ts
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/style/index.scss";
import "@/icons"; // icon

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
