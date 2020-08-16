<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 21:38:28
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-16 14:11:18
 * @FilePath: /six-ele/src/components/Tag/index.vue
-->
<template>
  <span
    class="tag"
    :style="
      `color:${color};background:${bgColor};
      border-radius:${radius}`
    "
  >
    <svg-icon v-if="icon" :icon-class="icon" size="10px" />
    {{ text }}
  </span>
</template>

<script>
export default {
  name: "Tag",
  props: {
    text: String,
    color: String,
    bgColor: String,
    icon: String,
    radius: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/var.scss";
@import "@/style/dark.scss";
.tag {
  font-size: 12px;
  padding: 2px 8px;
  background-color: $gray-3;
  @include dark-filter();
  border-radius: $border-radius-max;
  position: relative;
  display: inline-flex;
  align-items: center;
  line-height: 16px;
  vertical-align: middle;
  .svg-icon {
    margin-right: 4px;
  }
}
</style>
