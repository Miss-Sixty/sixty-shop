<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 18:49:00
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-13 19:20:40
 * @FilePath: /six-ele/src/views/index.vue
-->
<template>
  <div>
    <router-view />

    <tabbar>
      <tabbar-item
        v-for="item in tabbarItems"
        :key="item.to"
        :icon="item.icon"
        :to="item.to"
        :title="item.title"
      />
    </tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar";
import TabbarItem from "@/components/Tabbar-item";
export default {
  components: { Tabbar, TabbarItem },
  data() {
    return {
      tabbarItems: [
        {
          icon: "wap-home-o",
          title: "外卖",
          to: "/home",
        },
        {
          icon: "comment-o",
          title: "真香",
          to: "/rec",
        },
        {
          icon: "cart-o",
          title: "订单",
          to: "/order",
        },
        {
          icon: "contact",
          title: "我的",
          to: "/me",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
