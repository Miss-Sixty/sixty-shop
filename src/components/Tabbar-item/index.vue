<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 19:09:11
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-13 19:52:55
 * @FilePath: /six-ele/src/components/Tabbar-item/index.vue
-->
<template>
  <router-link :to="to" class="tabbar-item" active-class="active">
    <svg-icon icon-class="lingshi" />
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
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 12px;
  }
}
.active {
  color: $yellow;
}
</style>
