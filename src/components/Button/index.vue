<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 20:56:14
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-20 13:56:48
 * @FilePath: /six-shop/src/components/Button/index.vue
-->
<template>
  <button
    class="button"
    :class="classes"
    :style="style"
    :disabled="disabled"
    @click="onClick"
    @touchstart="onTouchstart"
  >
    <div class="button__content">
      <slot v-if="$slots.default" />
      <template v-else>{{ text }}</template>
    </div>
  </button>
</template>

<script>
import { addUnit } from "@/utils";
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "plain",
    },
    size: {
      type: String,
      default: "normal",
    },
    radius: {
      type: [Number, String],
      default: "2px",
    },
    text: String,
    color: String,
    ghost: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: "button",
    },
    htmlType: String,
    block: {
      type: Boolean,
      default: false,
    },
    plain: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },
    hairline: {
      type: Boolean,
      default: false,
    },
    url: String,
    to: [String, Object],
    replace: {
      type: Boolean,
      default: false,
    },
    dashed: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      const { type, size, plain, disabled, ghost, block, dashed } = this;
      return [
        "button",
        `button--${type}`,
        `button--${size}`,
        { "button--plain": plain },
        { "button--disabled": disabled },
        { "button--ghost": ghost },
        { "button--block": block },
        { "button--dashed": dashed },
      ];
    },
    style() {
      const { radius, color, plain, ghost } = this;
      const style = { "border-radius": addUnit(radius) };

      if (!color) return style;

      if (ghost || plain) {
        style.color = color;
        style.borderColor = color;
      } else {
        style.color = "#fff";
        style.background = color;

        //如果为渐变色则隐藏边框
        if (color.indexOf("gradient") !== -1) {
          style.border = 0;
        } else {
          style.borderColor = color;
        }
      }

      return style;
    },
  },
  methods: {
    onClick(event) {
      this.$emit("click", event);
      const { to, url, replace, $router: router, $route: route } = this;
      if (to && router && route.path !== `/${to}`) {
        router[replace ? "replace" : "push"](to);
      } else if (url) {
        replace ? location.replace(url) : (location.href = url);
      }
    },
    onTouchstart(event) {
      this.$emit("touchstart", event);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
