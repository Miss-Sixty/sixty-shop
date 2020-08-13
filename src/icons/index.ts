/*
 * @Author: 张喜贺
 * @Date: 2020-08-13 19:39:08
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-13 19:48:16
 * @FilePath: /six-ele/src/icons/index.ts
 */
import Vue from "vue";
import SvgIcon from "@/components/SvgIcon/index.vue";

// register globally
Vue.component("svg-icon", SvgIcon);

const req = require.context("./svg", false, /\.svg$/);
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().map(requireContext);
requireAll(req);
