<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 19:07:01
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-13 20:49:15
 * @FilePath: /six-ele/src/components/Tabbar/index.vue
-->
<template>
  <div class="tabbar hairline--top">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tabbar {
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
}
</style>
