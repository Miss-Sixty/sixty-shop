<!--
 * @Author: 张喜贺
 * @Date: 2020-08-18 01:45:18
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-18 19:06:42
 * @FilePath: /six-ele/src/components/SubmitBar/index.vue
-->
<template>
  <div class="submit-bar hairline--top">
    <checkbox v-model="checked" text="全选" />

    <div class="submit-bar__text">
      <span>合计：</span>
      <span class="submit-bar__price">
        ¥<span class="submit-bar__price--integer">30</span>.50
      </span>
    </div>
    <Button text="提交订单" class="submit-bar__button" round />
  </div>
</template>

<script>
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
export default {
  name: "SubmitBar",
  components: { Button, Checkbox },
  data() {
    return {
      checked: true,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/var.scss";
.submit-bar {
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  height: $submit-bar-height;
  z-index: $submit-bar-z-index;
  background-color: $submit-bar-background-color;
  padding-bottom: constant(safe-area-inset-bottom); /* 兼容 iOS < 11.2 */
  padding-bottom: env(safe-area-inset-bottom); /* 兼容 iOS >= 11.2 */

  display: flex;
  user-select: none;
  align-items: center;
  padding: $submit-bar-padding;
  font-size: $submit-bar-text-font-size;

  .select-all {
    display: flex;
    align-items: center;
    overflow: hidden;
    user-select: none;
    .svg-icon {
      margin-right: 5px;
    }
  }

  &__text {
    flex: 1;
    text-align: right;
    padding-right: $padding-sm;
    color: $submit-bar-text-color;
    span {
      display: inline-block;
    }
  }

  &__price {
    color: $submit-bar-price-color;
    font-weight: $font-weight-bold;
    font-size: $font-size-sm;

    &--integer {
      font-size: $submit-bar-price-integer-font-size;
      font-family: $submit-bar-price-font-family;
    }
  }

  &__button {
    width: $submit-bar-button-width;
    height: $submit-bar-button-height;
    font-weight: $font-weight-bold;
    background: $goods-action-button-danger-color;
    color: $white;
  }
}
</style>
