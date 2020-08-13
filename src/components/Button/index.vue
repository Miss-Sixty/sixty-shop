<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 20:56:14
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-13 21:33:21
 * @FilePath: /six-ele/src/components/Button/index.vue
-->
<template>
  <button
    class="button"
    :class="{ round: round }"
    :style="`background:${bgColor};color:${color}`"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    round: Boolean,
    color: String,
    bgColor: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/var.scss";
.button {
  height: 28px;
  padding: 0 14px;
  &.round {
    border-radius: $border-radius;
  }
}
</style>
