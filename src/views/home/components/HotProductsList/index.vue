<!--
 * @Author: 张喜贺
 * @Date: 2020-08-17 23:59:16
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-18 19:04:20
 * @FilePath: /six-ele/src/views/home/components/HotProductsList/index.vue
-->
<template>
  <div class="hot-products-list">
    <img
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597338557818&di=ee1c344e735fb2c694de05810d933b5a&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F5%2F5916758468796.jpg"
      height="100%"
      width="100%"
    />
    <div class="bottom-content">
      <p class="hot-products-list__title ellipsis">
        商品商品商品商品商品商品商品商品
      </p>

      <six-row
        type="flex"
        justify="space-between"
        class="hot-products-list__money"
        align="center"
      >
        <p>
          <span>¥230</span>
          <span>¥330</span>
        </p>
        <svg-icon name="shopping-cart-line" size="16" color="#fff" />
      </six-row>
    </div>
  </div>
</template>

<script>
import SixRow from "@/components/Row";
export default {
  name: "HotProductsList",
  components: {
    SixRow,
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/var.scss";
.hot-products-list {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  margin-bottom: 10px;
  border-radius: $border-radius-md;
  overflow: hidden;

  .bottom-content {
    padding: $padding-base;
  }
  &__title {
    font-size: $font-size-lg;
  }

  &__money {
    margin-top: 5px;
    p {
      span {
        &:first-of-type {
          font-size: 15px;
          color: $red;
          margin-right: 5px;
        }
        &:last-of-type {
          font-size: $font-size-sm;
          color: $gray-6;
          text-decoration: line-through;
        }
      }
    }
    .svg-icon {
      background-color: $red;
      border-radius: $border-radius-max;
      padding: 2px;
    }
  }
}
</style>
