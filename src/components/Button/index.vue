<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 20:56:14
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-16 14:20:00
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
@import "@/style/dark.scss";
.button {
  height: 28px;
  padding: 0 14px;
  @include dark-filter();
  &.round {
    border-radius: $border-radius-max;
  }
}
</style>
