<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 18:52:30
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-18 20:22:13
 * @FilePath: /six-ele/src/views/me/index.vue
-->
<template>
  <div class="me">
    <div class="me-login">
      <img
        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3728634894,1931124514&fm=26&gp=0.jpg"
        width="50px"
        height="50px"
        style="border-radius:50%"
      />
      <p class="me-login__text">
        立即登陆
        <svg-icon name="arrow-right-line" />
      </p>
    </div>

    <div class="me-cell">
      <cell
        v-for="(item, index) in cellList"
        :key="index"
        :title="item.title"
        isLink
        clickable
        :to="item.to"
      />
    </div>
  </div>
</template>

<script>
import Cell from "@/components/Cell";
export default {
  name: "Me",
  components: { Cell },
  data() {
    return {
      cellList: [
        {
          title: "关于",
          to: "about",
        },
        {
          title: "用户协议",
          to: "protocol",
        },
      ],
    };
  },
  methods: {},
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
    overflow: hidden;
    margin: $me-cell-margin;
    background-color: $me-cell-background-color;
    box-shadow: $me-cell-box-shadow;
    border-radius: $me-cell-border-radius;
  }
}
</style>
