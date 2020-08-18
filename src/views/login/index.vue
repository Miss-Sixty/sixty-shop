<!--
 * @Author: 张喜贺
 * @Date: 2020-08-18 20:25:24
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-19 00:22:51
 * @FilePath: /six-ele/src/views/login/index.vue
-->
<template>
  <div class="login">
    <img
      class="login__logo"
      :src="require('@/assets/imgs/logo.png')"
      width="80px"
      height="80px"
    />
    <div class="login__form">
      <field
        v-model="username"
        placeholder="请输入用户名"
        type="tel"
        left-icon="user-line"
      >
        <template #button>
          <Button text="发送验证码" bg-color="#fff" color="#fbbd08" />
        </template>
      </field>
      <field
        v-model="password"
        placeholder="请输入验证码"
        type="tel"
        left-icon="lock-line"
      />
    </div>
    <div class="login__button">
      <Button text="登陆" block round bg-color="#fbbd08" color="#fff" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import Field from "@/components/Field";
export default {
  name: "Login",
  components: { Button, Field },
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/var.scss";
.login {
  &__logo {
    border-radius: 50%;
    margin: 40px auto;
  }

  &__button {
    padding: $padding-xl $padding-sm;
  }
}
</style>
