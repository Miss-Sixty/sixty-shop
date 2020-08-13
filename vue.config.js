/*
 * @Author: 张喜贺
 * @Date: 2020-08-13 18:47:42
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-13 19:57:00
 * @FilePath: /six-ele/vue.config.js
 */
const { resolve } = require("path");
module.exports = {
  // publicPath: "./",

  chainWebpack(config) {
    // set svg-sprite-loader
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  },
};
