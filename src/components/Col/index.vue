<!--
 * @Author: 张喜贺
 * @Date: 2020-08-14 21:11:33
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-14 23:18:28
 * @FilePath: /six-ele/src/components/Col/index.vue
-->
<template>
  <div class="col" :class="`col--${span}`" :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Col",
  props: {
    span: [Number, String],
  },
  computed: {
    style() {
      const { index } = this;
      const { spaces } = this.$parent || {};
      if (spaces && spaces[index]) {
        const { left, right } = spaces[index];
        return {
          paddingLeft: left ? `${left}px` : null,
          paddingRight: right ? `${right}px` : null,
        };
      } else {
        return null;
      }
    },
  },
  mounted() {
    this.$parent.children.push(this);
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
