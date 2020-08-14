<!--
 * @Author: 张喜贺
 * @Date: 2020-08-14 21:11:33
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-14 21:30:35
 * @FilePath: /six-ele/src/components/Row/index.vue
-->
<template>
  <div
    class="row "
    :class="{
      'row--flex': flex,
      [`row--align-${align}`]: flex && align,
      [`row--justify-${justify}`]: flex && justify,
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "Row",
  props: {
    type: String,
    align: String,
    justify: String,
  },
  computed: {
    flex() {
      return this.type === "flex";
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  &--flex {
    display: flex;

    &::after {
      display: none;
    }
  }
  &--justify-center {
    justify-content: center;
  }

  &--justify-end {
    justify-content: flex-end;
  }

  &--justify-space-between {
    justify-content: space-between;
  }

  &--justify-space-around {
    justify-content: space-around;
  }

  &--align-center {
    align-items: center;
  }

  &--align-bottom {
    align-items: flex-end;
  }
}
</style>
