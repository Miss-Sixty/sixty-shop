<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 20:56:42
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-16 14:19:36
 * @FilePath: /six-ele/src/components/Search/index.vue
-->
<template>
  <div style="padding:10px 12px">
    <div class="search">
      <svg-icon icon-class="search" />
      <input type="text" class="search-input" :placeholder="placeholder" />
      <Button
        text="搜索"
        round
        bg-color="linear-gradient(to right, #2DC8FE, #02ACF5)"
        color="#fff"
      />
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
@import "@/style/dark.scss";
.search {
  display: flex;
  align-items: center;
  @include dark-layer();
  border-radius: $border-radius-max;
  padding-right: 4px;
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
