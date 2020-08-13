<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 20:56:42
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-13 21:20:26
 * @FilePath: /six-ele/src/components/Search/index.vue
-->
<template>
  <div class="search">
    <svg-icon icon-class="search" />
    <input type="text" class="search-input" :placeholder="placeholder" />
    <button>搜索</button>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    icon: String,
    placeholder: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/var.scss";
.search {
  margin: 10px 12px;
  display: flex;
  align-items: center;
  background-color: $gray-3;
  border-radius: $border-radius;
  padding-right: 4px;
  font-size: 14px;
  .svg-icon {
    margin: 0 10px 0 12px;
  }
  &-input {
    height: 36px;
    flex: 1;
    background-color: initial;
  }
}
</style>
