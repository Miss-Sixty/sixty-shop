<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 22:45:16
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-17 23:38:38
 * @FilePath: /six-ele/src/components/Grid-item/index.vue
-->
<template>
  <div class="grid-item" :class="{ 'grid-item--square': this.$parent.square }" :style="style">
    <div class="grid-item__content" :class="{ 'grid-item__content--square': this.$parent.square }">
      <svg-icon class="grid-item__icon" :icon-class="icon" :size="this.$parent.iconSize" />
      <span class="grid-item__text">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridItem",
  props: {
    icon: String,
    text: String
  },
  computed: {
    style() {
      const { columnNum, square } = this.$parent;
      const percent = `${100 / columnNum}%`;

      const style = {
        flexBasis: percent
      };

      if (square) {
        style.paddingTop = percent;
      }

      return style;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/var.scss";
@import "@/style/dark.scss";
.grid-item {
  position: relative;
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: $grid-item-content-padding;
    background-color: $grid-item-content-background-color;
    &--square {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
    }
  }
  &__icon {
    font-size: $grid-item-icon-size;
  }

  &__text {
    line-height: 1.5;
    word-wrap: break-word;
    color: $grid-item-text-color;
    font-size: $grid-item-text-font-size;
  }
  &__icon + &__text {
    margin-top: $padding-xs;
  }

  &--square {
    height: 0;
  }
}
</style>
