<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 18:48:56
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-13 22:42:52
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

    <swiper :options="swiperOptions" class="swiper">
      <swiper-slide
        class="swiper-slide"
        v-for="(item, index) in swiperList"
        :key="index"
      >
        <img :src="item" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    home
  </div>
</template>

<script>
import Search from "@/components/Search";
import Tag from "@/components/Tag";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: { Search, Tag, Swiper, SwiperSlide },
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
      swiperList: [
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3376774905,3835988815&fm=26&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597338557815&di=f1b0222aa41ab0b67eef340d55fc3064&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-01-12%2F5a581ea16220d.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597338557819&di=19959ec2b012dbec53a863616c1717fc&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-01-30%2F5a6fe1a45bd72.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597338557818&di=ee1c344e735fb2c694de05810d933b5a&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F5%2F5916758468796.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597338557818&di=27c3917e22963e3549111637d96ef23f&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F0%2F59929c0367397.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3728634894,1931124514&fm=26&gp=0.jpg",
      ],
      swiperOptions: {
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "ele-bullet", //需设置.my-bullet样式
          bulletActiveClass: "ele-bullet-active",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/var.scss";
.home {
  &-tag {
    padding: 0 12px;
    > * {
      margin: 0 6px 6px 0;
    }
  }
  .swiper {
    &-slide {
      padding: 0 12px;
      img {
        border-radius: $border-radius-lg;
        height: 100px;
        width: 100%;
      }
    }
    /deep/.ele-bullet {
      width: 14px;
      height: 2px;
      display: inline-block;
      border-radius: $border-radius-max;
      background: #fff;
      opacity: 0.2;
      margin: 0 2px;
    }
    /deep/.ele-bullet-active {
      opacity: 1;
    }
    /deep/.swiper-pagination {
      bottom: 0;
    }
  }
}
</style>
