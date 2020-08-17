<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 22:44:59
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-17 23:43:08
 * @FilePath: /six-ele/src/components/Grid/index.vue
-->
<template>
  <div class="grid">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Grid",
  props: {
    columnNum: {
      type: [Number, String],
      default: 4
    },
    iconSize: String,
    square: Boolean
  }
};
</script>

<style lang="scss" scoped>
.grid {
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
}
</style>
