<!--
 * @Author: 张喜贺
 * @Date: 2020-08-14 21:11:33
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-14 23:18:20
 * @FilePath: /six-ele/src/components/Row/index.vue
-->
<template>
  <div
    class="row "
    :class="{
      'row--flex': flex,
      [`row--align-${align}`]: flex && align,
      [`row--justify-${justify}`]: flex && justify,
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "Row",
  props: {
    type: String,
    align: String,
    justify: String,
    gutter: {
      type: [Number, String],
      default: 0,
    },
  },
  data() {
    return {
      children: [],
    };
  },
  watch: {
    children(val) {
      val.forEach((item, index) => (item.index = index));
    },
  },
  computed: {
    flex() {
      return this.type === "flex";
    },

    spaces() {
      const gutter = Number(this.gutter);
      if (!gutter) return;

      const spaces = [];
      const groups = [[]];
      let totalSpan = 0;
      this.children.forEach((item, index) => {
        totalSpan += Number(item.span);

        if (totalSpan > 24) {
          groups.push([index]);
          totalSpan -= 24;
        } else {
          groups[groups.length - 1].push(index);
        }
      });

      groups.forEach((group) => {
        const averagePadding = (gutter * (group.length - 1)) / group.length;
        group.forEach((item, index) => {
          if (index === 0) {
            spaces.push({ right: averagePadding });
          } else {
            const left = gutter - spaces[item - 1].right;
            const right = averagePadding - left;
            spaces.push({ left, right });
          }
        });
      });

      return spaces;
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  &--flex {
    display: flex;

    &::after {
      display: none;
    }
  }
  &--justify-center {
    justify-content: center;
  }

  &--justify-end {
    justify-content: flex-end;
  }

  &--justify-space-between {
    justify-content: space-between;
  }

  &--justify-space-around {
    justify-content: space-around;
  }

  &--align-center {
    align-items: center;
  }

  &--align-bottom {
    align-items: flex-end;
  }
}
</style>
