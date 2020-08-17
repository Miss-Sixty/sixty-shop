<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 02:58:00
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-13 15:57:17
 * @FilePath: /six-shop/src/components/wrapper/index.vue
-->
<template>
  <div :id="name" :style="`backgroundColor: ${bgColor}`">
    <slot />
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    bgColor: String,
    name: {
      type: String,
      default: "wrapper",
    },
    probeType: Number,
    listenScroll: {
      //是否派发滚动事件
      type: Boolean,
      default: false,
    },
    click: Boolean,
    /**
     * 是否派发滚动到底部的事件，用于上拉加载
     */
    pullup: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      if (!this.$el) return;

      this.scroll = new BScroll(this.$el, {
        probeType: this.probeType,
        click: this.click,
      });

      // 是否派发滚动事件
      if (this.listenScroll) {
        this.scroll.on("scroll", (pos) => {
          this.$emit("scroll", pos);
        });
      }

      // 是否派发滚动到底部事件，用于上拉加载
      if (this.pullup) {
        this.scroll.on("scrollEnd", () => {
          // 滚动到底部
          if (this.scroll.y <= this.scroll.maxScrollY) {
            this.$emit("scrollToEnd");
          }
        });
      }
    },

    scrollTo(...args) {
      console.log(args);
      // 代理better-scroll的scrollTo方法
      this.scroll && this.scroll.scrollTo(...args);
    },
    scrollToElement(...args) {
      this.scroll && this.scroll.scrollToElement(...args);
    },
  },
};
</script>
