/*
 * @Author: 张喜贺
 * @Date: 2020-08-13 18:46:48
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-13 20:28:04
 * @FilePath: /six-ele/src/main.ts
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/style/reset.scss";
import "@/icons"; // icon

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
