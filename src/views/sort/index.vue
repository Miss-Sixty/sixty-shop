<template>
  <div class="menu">
    <scroll bg-color="#f7f8fa" name="warp" ref="warp" click>
      <ul class="menu-warp" @click="onClickWarp">
        <li
          v-for="(item, index) in tabSelectList"
          :key="index"
          :data-index="index"
          :class="{ isActive: index == currentIndex }"
          ref="warpItem"
        >
          {{ item.title }}
        </li>
      </ul>
    </scroll>

    <scroll
      name="content"
      style="flex:1"
      :probeType="3"
      listenScroll
      @scroll="onScroll"
      ref="content"
    >
      <ul class="menu-content">
        <li
          v-for="(item, index) in tabSelectList"
          :key="index"
          ref="contentItem"
        >
          <p class="menu-content--title">2</p>
          <div
            class="menu-content--item van-hairline--bottom"
            v-for="children in item.children"
            :key="children.id"
          >
            <six-row type="flex" align="center">
              <img
                width="70px"
                height="70px"
                fit="fill"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                style="display:block;margin-right:10px"
              />
              <div class="menu-content--item__right">
                <p
                  class="menu-content--item__right--title van-multi-ellipsis--l2"
                >
                  超级无敌可爱奶茶
                </p>
                <six-row type="flex" justify="space-between" align="center">
                  <p class="menu-content--item__right--money">
                    <span>¥199</span>
                    <span>299</span>
                  </p>
                  <svg-icon icon-class="shopping-cart" size="16" color="#fff" />
                </six-row>
              </div>
            </six-row>
          </div>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/Wrapper";
import SixRow from "@/components/Row";
export default {
  components: {
    Scroll,
    SixRow,
  },
  data() {
    return {
      currentIndex: 0,
      warpLock: false,
      tabSelectList: [
        {
          id: 1,
          title: "活动1",
          children: [
            { id: 11, name: "蛋糕" },
            { id: 12, name: "蛋糕" },
            { id: 13, name: "蛋糕" },
            { id: 14, name: "蛋糕" },
            { id: 15, name: "蛋糕" },
            { id: 16, name: "蛋糕" },
            { id: 17, name: "蛋糕" },
            { id: 18, name: "蛋糕" },
          ],
        },
        {
          id: 2,
          title: "活动2",
          children: [
            { id: 21, name: "奶茶" },
            { id: 22, name: "奶茶" },
            { id: 23, name: "奶茶" },
            { id: 24, name: "奶茶" },
            { id: 25, name: "奶茶" },
            { id: 26, name: "奶茶" },
            { id: 27, name: "奶茶" },
            { id: 28, name: "奶茶" },
            { id: 29, name: "奶茶" },
            { id: 210, name: "奶茶" },
          ],
        },
        {
          id: 3,
          title: "活动3",
          children: [
            { id: 31, name: "水果" },
            { id: 32, name: "水果" },
            { id: 33, name: "水果" },
            { id: 34, name: "水果" },
            { id: 35, name: "水果" },
            { id: 36, name: "水果" },
            { id: 37, name: "水果" },
            { id: 38, name: "水果" },
            { id: 39, name: "水果" },
          ],
        },
        {
          id: 3,
          title: "活动4",
          children: [
            { id: 31, name: "水果" },
            { id: 32, name: "水果" },
            { id: 33, name: "水果" },
            { id: 34, name: "水果" },
            { id: 35, name: "水果" },
            { id: 36, name: "水果" },
            { id: 37, name: "水果" },
            { id: 38, name: "水果" },
            { id: 39, name: "水果" },
          ],
        },
        {
          id: 3,
          title: "活动5",
          children: [
            { id: 31, name: "水果" },
            { id: 32, name: "水果" },
            { id: 33, name: "水果" },
            { id: 34, name: "水果" },
            { id: 35, name: "水果" },
            { id: 36, name: "水果" },
            { id: 37, name: "水果" },
            { id: 38, name: "水果" },
            { id: 39, name: "水果" },
          ],
        },
      ],
    };
  },

  methods: {
    onClickWarp(e) {
      this.currentIndex = e.target.dataset.index;

      //滚动右边
      const contentDom = this.$refs.contentItem[this.currentIndex];
      this.$refs.content.scrollToElement(contentDom, 300, 0, 0);

      //防止右边滚动左边跟着滚动
      this.warpLock = true;
      setTimeout(() => (this.warpLock = false), 400);

      //滚动左边
      const warpDom = this.$refs.warpItem[this.currentIndex];
      this.$refs.warp.scrollToElement(warpDom, 300, 0, -200);
    },

    onScroll(pos) {
      if (this.warpLock) return;
      const index = this.getCurrentIndexOnScroll();
      this.currentIndex = index;
      const warpDom = this.$refs.warpItem[this.currentIndex];
      this.$refs.warp.scrollToElement(warpDom, 300, 0, -200);
    },

    getCurrentIndexOnScroll() {
      const children = this.$refs.contentItem;
      for (let index = 0; index < children.length; index++) {
        const top = children[index].getBoundingClientRect().top;
        if (top > 0) {
          return index === 0 ? 0 : index - 1;
        }
      }

      return children.length - 1;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/var.scss";
.menu {
  display: flex;
  height: calc(100vh - 50px);
  overflow: hidden;

  &-warp {
    width: 90px;
    li {
      padding: $padding-md 0;
      text-align: center;
      user-select: none;
      background-color: $gray-3;
      position: relative;
      &.isActive {
        background-color: $white;
        &::before {
          content: " ";
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 50%;
          border-radius: 2px 0 0 2px;
          background-color: #fbbd08;
        }
      }
    }
  }

  &-content {
    flex: 1;
    &--title {
      padding: $padding-xs $padding-md;
    }
    &--item {
      padding: 0 $padding-md $padding-xs;
      &__right {
        flex: 1;
        &--title {
          margin-bottom: 20px;
        }
        &--money {
          span:first-of-type {
            font-size: $font-size-lg;
            color: $red;
            font-weight: bold;
            margin-right: 10px;
          }
          span:last-of-type {
            font-size: 12px;
            color: $gray-5;
            text-decoration: line-through;
          }
        }
        .svg-icon {
          background-color: $red;
          border-radius: $border-radius-max;
          padding: 2px;
        }
      }
    }
  }
}
</style>
