<!--
 * @Author: 张喜贺
 * @Date: 2020-08-14 21:11:33
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-14 21:43:30
 * @FilePath: /six-ele/src/components/Col/index.vue
-->
<template>
  <div class="col" :class="`col--${span}`">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Col",
  props: {
    span: [Number, String],
  },
};
</script>

<style lang="scss" scoped>
.col {
  float: left;
  min-height: 1px;
}
@for $i from 1 through 24 {
  .col--#{$i} {
    width: $i * 100% / 24;
  }
}
</style>
