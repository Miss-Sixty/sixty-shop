<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 18:52:30
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-18 13:12:19
 * @FilePath: /six-ele/src/views/me/index.vue
-->
<template>
  <div class="me">
    <div class="me-login">
      <img
        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3728634894,1931124514&fm=26&gp=0.jpg"
        alt=""
        width="50px"
        height="50px"
        style="border-radius:50%"
      />
      <p class="me-login__text">
        立即登陆
        <svg-icon icon-class="success" />
      </p>
    </div>

    <div class="me-cell">
      <cell title="单元格" isLink clickable @click="onClick" />
    </div>
  </div>
</template>

<script>
import Cell from "@/components/Cell";
export default {
  name: "Me",
  components: { Cell },
  methods: {
    onClick(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/var.scss";
.me {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  &::after {
    content: " ";
    background-color: #fbbd08;
    height: 120px;
    width: 150%;
    border-radius: 0 0 50% 50%;
    position: absolute;
    left: -25%;
    top: 0;
    z-index: -1;
  }
  &-login {
    display: flex;
    align-items: center;
    padding: $me-login-padding;
    &__text {
      margin-left: $me-login-text-left;
      font-size: $me-login-text-font-size;
      color: $me-login-text-color;
      font-weight: $font-weight-bold;
    }
  }

  &-cell {
    margin: $me-cell-margin;
    background-color: $me-cell-background-color;
    box-shadow: $me-cell-box-shadow;
    border-radius: $me-cell-border-radius;
  }
}
</style>
