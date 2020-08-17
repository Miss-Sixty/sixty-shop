<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 18:48:56
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-18 00:40:44
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

    <grid column-num="5" icon-size="20">
      <grid-item
        v-for="(item, index) in gridList2"
        :key="index"
        :icon="item.icon"
        :text="item.text"
      />
    </grid>

    <six-row class="home-card">
      <six-col span="12">
        <card :title="killData.title" class="hairline--right">
          <template #title-right>
            <count-down :time="killData.time">
              <template v-slot="{ timeData }">
                <span class="home-time__block">
                  {{
                    10 > timeData.hours ? "0" + timeData.hours : timeData.hours
                  }}
                </span>
                <span class="home-time__colon">:</span>
                <span class="home-time__block">
                  {{
                    10 > timeData.minutes
                      ? "0" + timeData.minutes
                      : timeData.minutes
                  }}
                </span>
                <span class="home-time__colon">:</span>
                <span class="home-time__block">
                  {{
                    10 > timeData.seconds
                      ? "0" + timeData.seconds
                      : timeData.seconds
                  }}
                </span>
              </template>
            </count-down>
          </template>
          <div class="card-left-content">
            <div class="card-left-content__img">
              <img :src="killData.imgUrl" width="100%" height="100%" />
              <tag
                class="tag"
                :text="killData.tag"
                color="#fff"
                bg-color="#ff4b33"
                radius="10px 10px 10px 2px"
              />
            </div>
            <div class="card-left-content__text ellipsis">
              <span>¥{{ killData.discount }}</span>
              <span>¥{{ killData.money }}</span>
              <span>{{ killData.name }}</span>
            </div>
          </div>
        </card>
      </six-col>

      <six-col span="12">
        <card :title="recData.title">
          <template #title-right>
            <tag
              :text="recData.tag"
              color="#8800d6"
              bg-color="#f1e7fe"
              radius="4px"
            />
          </template>
          <six-row gutter="8">
            <six-col
              span="12"
              v-for="(item, index) in recData.goods"
              :key="index"
            >
              <div class="card-right-content">
                <div class="card-right-content__img">
                  <img :src="item.url" width="100%" height="100%" />
                  <p>{{ item.tag }}</p>
                </div>
                <p class="card-right-content__text ellipsis">{{ item.name }}</p>
              </div>
            </six-col>
          </six-row>
        </card>
      </six-col>
    </six-row>

    <div class="home-hotProducts">
      <p>最热商品</p>
      <six-row gutter="8">
        <six-col span="12">
          <hot-products-list />
        </six-col>
        <six-col span="12">
          <hot-products-list />
        </six-col>
        <six-col span="12">
          <hot-products-list />
        </six-col>
      </six-row>
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search";
import Tag from "@/components/Tag";
import Grid from "@/components/Grid";
import GridItem from "@/components/Grid-item";
import CountDown from "@/components/CountDown";
import Card from "./components/Card";
import SixCol from "@/components/Col";
import SixRow from "@/components/Row";
import HotProductsList from "./components/HotProductsList";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Search,
    Tag,
    Swiper,
    SwiperSlide,
    Grid,
    GridItem,
    CountDown,
    Card,
    SixRow,
    SixCol,
    HotProductsList,
  },
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
          text: "汉堡",
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
      killData: {
        title: "限时秒杀",
        time: 30 * 60 * 60 * 1000,
        imgUrl:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3728634894,1931124514&fm=26&gp=0.jpg",
        tag: "3.8折",
        money: "41.99",
        discount: "15.99",
        name: "干拌牛肉粉",
      },
      recData: {
        title: "有好店",
        tag: "专属晚餐",
        goods: [
          {
            url:
              "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3728634894,1931124514&fm=26&gp=0.jpg",
            tag: "猜你喜欢",
            name: "汉库麻辣香锅",
          },
          {
            url:
              "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3728634894,1931124514&fm=26&gp=0.jpg",
            tag: "猜你喜欢",
            name: "汉库麻辣香锅",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/var.scss";
.home {
  padding-bottom: 50px;
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
      background-color: #fff;
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
      margin: 0 1px;
      color: #fe4b32;
    }
    &__block {
      display: inline-block;
      width: 18px;
      height: 16px;
      line-height: 16px;
      color: #fff;
      font-size: 12px;
      text-align: center;
      background-color: #fe4b32;
      border-radius: $border-radius-sm;
    }
  }

  &-card {
    margin: 0 $padding-sm;
    box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.16);
    border-radius: $border-radius-lg;
    display: flex;
    .card-left-content {
      &__img {
        position: relative;
        border-radius: $border-radius-md;
        overflow: hidden;
        height: 95px;
        .tag {
          position: absolute;
          left: 3px;
          bottom: 3px;
        }
      }
      &__text {
        margin-top: 8px;
        line-height: 1;
        span {
          margin-right: 4px;
          &:nth-of-type(1) {
            color: $red;
            font-weight: $font-weight-bold;
          }
          &:nth-of-type(2) {
            color: $gray-3;
            font-size: $font-size-sm;
            text-decoration: line-through;
          }
        }
      }
    }
    .card-right-content {
      &__img {
        position: relative;
        border-radius: $border-radius-md;
        overflow: hidden;
        height: 95px;
        p {
          position: absolute;
          left: 0;
          bottom: 0;
          background-color: #2f1e11;
          color: #e8b457;
          right: 0;
          text-align: center;
          font-size: $font-size-sm;
          padding: 4px;
        }
      }
      &__text {
        margin-top: 8px;
        line-height: 1;
      }
    }
  }

  &-hotProducts {
    margin: $padding-sm;
    > p {
      margin-bottom: 5px;
    }
  }
}
</style>
