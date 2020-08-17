<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 18:49:00
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-18 00:50:34
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
          icon: "home",
          title: "首页",
          to: "/home",
        },
        {
          icon: "order",
          title: "分类",
          to: "/sort",
        },
        {
          icon: "rec",
          title: "购物车",
          to: "/shoppingCart",
        },
        {
          icon: "me",
          title: "我的",
          to: "/me",
        },
      ],
    };
  },
};
</script>
