<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 19:09:11
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-18 18:57:57
 * @FilePath: /six-ele/src/components/Tabbar-item/index.vue
-->
<template>
  <router-link :to="to" class="tabbar-item" active-class="tabbar-item--active">
    <svg-icon class="tabbar-item__icon" :name="icon" size="22px" />
    <p>{{ title }}</p>
  </router-link>
</template>

<script>
export default {
  props: {
    title: String,
    icon: String,
    to: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/var.scss";

.tabbar-item {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: $tabbar-item-text-color;
  font-size: $tabbar-item-font-size;
  line-height: $tabbar-item-line-height;

  &__icon {
    position: relative;
    margin-bottom: $tabbar-item-margin-bottom;
    font-size: $tabbar-item-icon-size;
  }
  &--active {
    color: $tabbar-item-active-color;
  }
}
</style>
