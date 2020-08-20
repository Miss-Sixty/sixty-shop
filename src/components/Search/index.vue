<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 20:56:42
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-20 13:54:22
 * @FilePath: /six-shop/src/components/Search/index.vue
-->
<template>
  <div style="padding:10px 12px">
    <div class="search">
      <svg-icon name="search" size="20" />
      <input type="text" class="search-input" :placeholder="placeholder" />
      <Button text="搜索" type="primary" size="small" radius="999" />
    </div>
  </div>
</template>

<script>
import Button from "../Button";
export default {
  name: "Search",
  components: { Button },
  props: {
    icon: String,
    placeholder: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/var.scss";
.search {
  display: flex;
  align-items: center;
  background-color: $gray-3;
  border-radius: $border-radius-max;
  padding-right: 2px;
  .svg-icon {
    margin: 0 8px 0 12px;
  }
  &-input {
    height: 36px;
    flex: 1;
    background-color: initial;
  }
}
</style>
