<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 18:49:00
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-18 18:17:04
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
          icon: "home-line",
          title: "首页",
          to: "/home",
        },
        {
          icon: "apps-line",
          title: "分类",
          to: "/category",
        },
        {
          icon: "shopping-cart-line",
          title: "购物车",
          to: "/shoppingCart",
        },
        {
          icon: "user-line",
          title: "我的",
          to: "/me",
        },
      ],
    };
  },
};
</script>
