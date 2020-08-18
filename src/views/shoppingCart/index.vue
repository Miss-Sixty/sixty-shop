<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 18:52:26
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-18 10:31:11
 * @FilePath: /six-ele/src/views/shoppingCart/index.vue
-->
<template>
  <div class="shopping-cart">
    <div class="shopping-cart-content">
      <six-row
        class="shopping-cart-content-item"
        type="flex"
        align="center"
        v-for="item in 2"
        :key="item"
      >
        <svg-icon icon-class="passed" size="20" />
        <six-row class="card" type="flex" align="center">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597338557818&di=27c3917e22963e3549111637d96ef23f&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F0%2F59929c0367397.jpg"
            width="80px"
            height="70px"
          />
          <div class="text">
            <p class="text__title">名字</p>
            <p class="text__type">规格</p>
            <six-row
              class="text__money"
              type="flex"
              justify="space-between"
              align="center"
            >
              <p>
                <span>¥55</span>
                <span>¥75</span>
              </p>
              <stepper
                v-model="stepperValue"
                @change="onChange"
                button-size="22"
                @overlimit="overlimit"
              />
            </six-row>
          </div>
        </six-row>
      </six-row>
    </div>

    <submit-bar />
  </div>
</template>

<script>
import SixRow from "@/components/Row";
import SubmitBar from "@/components/SubmitBar";
import Stepper from "@/components/Stepper";
export default {
  name: "ShoppingCart",
  components: { SixRow, SubmitBar, Stepper },
  data() {
    return {
      stepperValue: 1,
    };
  },
  methods: {
    onChange(value) {
      this.stepperValue = value;
      console.log(value);
    },

    overlimit() {
      console.log(22);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/var.scss";
.shopping-cart {
  padding: $padding-sm;
  padding-bottom: 100px;
  background-color: $gray-1;
  height: 100vh;
  &-content {
    box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.16);
    padding: $padding-xs $padding-sm;
    border-radius: $border-radius-lg;
    background-color: $white;
    &-item {
      padding: $padding-xs 0;

      .svg-icon {
        margin-right: 10px;
      }
      .card {
        flex: 1;

        img {
          border-radius: $border-radius-sm;
          margin-right: 6px;
        }
        .text {
          flex: 1;
          &__title {
            font-size: $font-size-lg;
            font-weight: $font-weight-bold;
          }
          &__type {
            font-size: $font-size-sm;
            color: $gray-7;
          }
          &__money {
            margin-top: 6px;
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
          }
        }
      }
    }
  }
}
</style>
