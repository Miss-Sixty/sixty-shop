<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 18:48:56
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-14 19:56:36
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
        <img :src="item" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <grid column-num="5" icon-size="30px" square style="padding:10px 0">
      <grid-item
        v-for="(item, index) in gridList1"
        :key="index"
        :icon="item.icon"
        :text="item.text"
      />
    </grid>

    <grid column-num="5" icon-size="18px">
      <grid-item
        v-for="(item, index) in gridList2"
        :key="index"
        :icon="item.icon"
        :text="item.text"
      />
    </grid>

    <count-down :time="time">
      <template v-slot="{ timeData }">
        <span class="home-time__block">{{ timeData.hours }}</span>
        <span class="home-time__colon">:</span>
        <span class="home-time__block">{{ timeData.minutes }}</span>
        <span class="home-time__colon">:</span>
        <span class="home-time__block">{{ timeData.seconds }}</span>
      </template>
    </count-down>
  </div>
</template>

<script>
import Search from "@/components/Search";
import Tag from "@/components/Tag";
import Grid from "@/components/Grid";
import GridItem from "@/components/Grid-item";
import CountDown from "@/components/CountDown";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: { Search, Tag, Swiper, SwiperSlide, Grid, GridItem, CountDown },
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
      gridList1: [
        {
          icon: "gourmet",
          text: "美食外卖",
        },
        {
          icon: "shop",
          text: "超时便利",
        },
        {
          icon: "envelope",
          text: "团购优惠",
        },
        {
          icon: "game",
          text: "快速自取",
        },
        {
          icon: "play",
          text: "休闲玩乐",
        },
      ],
      gridList2: [
        {
          icon: "chicken",
          text: "晚餐",
        },
        {
          icon: "fruit",
          text: "水果",
        },
        {
          icon: "drink",
          text: "甜品饮品",
        },
        {
          icon: "dish",
          text: "买菜",
        },
        {
          icon: "drug",
          text: "送药上门",
        },
        {
          icon: "woman",
          text: "丽人/医美",
        },
        {
          icon: "coupon",
          text: "省钱好券",
        },
        {
          icon: "takeaway",
          text: "配送减免",
        },
        {
          icon: "box",
          text: "跑腿代购",
        },
        {
          icon: "more",
          text: "全部分类",
        },
      ],
      time: 30 * 60 * 60 * 1000,
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

  &-time {
    &__colon {
      display: inline-block;
      margin: 0 2px;
      color: #fe4b32;
    }
    &__block {
      display: inline-block;
      width: 20px;
      color: #fff;
      font-size: 12px;
      text-align: center;
      background-color: #fe4b32;
      border-radius: $border-radius-md;
    }
  }
}
</style>
