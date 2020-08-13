<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 21:38:28
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-13 22:50:04
 * @FilePath: /six-ele/src/components/Tag/index.vue
-->
<template>
  <div class="tag" :style="`color:${color};background:${bgColor}`">
    <svg-icon v-if="icon" :icon-class="icon" />
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    text: String,
    color: String,
    bgColor: String,
    icon: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/var.scss";
.tag {
  font-size: 11px;
  padding: 0 10px;
  background-color: $gray-3;
  display: inline-block;
  border-radius: $border-radius-max;
  line-height: 18px;
  text-align: center;
}
</style>
