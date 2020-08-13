<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 18:48:56
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-13 22:02:30
 * @FilePath: /six-ele/src/views/home/index.vue
-->
<template>
  <div class="home">
    <search placeholder="请搜索" />
    <div class="home-tag">
      <tag
        v-for="(item, index) in tagList"
        :key="index"
        :text="item.text"
        :color="item.color"
        :bg-color="item.bgColor"
        :icon="item.icon"
      />
    </div>

    home
  </div>
</template>

<script>
import Search from "@/components/Search";
import Tag from "@/components/Tag";
export default {
  components: { Search, Tag },
  data() {
    return {
      tagList: [
        {
          text: "88金粉节",
          color: "#FF5028",
          bgColor: "#FDEFED",
          icon: "hot",
        },
        {
          text: "麻辣烫",
        },
        {
          text: "麻辣香锅",
        },
        {
          text: "华莱士",
        },
        {
          text: "CoCo",
        },
        {
          text: "奶茶",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  &-tag {
    padding: 0 12px;
    > * {
      margin: 0 6px 6px 0;
    }
  }
}
</style>
