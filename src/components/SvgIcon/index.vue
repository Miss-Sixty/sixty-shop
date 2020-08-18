<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 19:39:17
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-18 19:27:26
 * @FilePath: /six-ele/src/components/SvgIcon/index.vue
-->
<template>
  <img v-if="isImage" :src="name" :style="imageSize" />
  <svg
    v-else
    :class="svgClass"
    aria-hidden="true"
    v-on="$listeners"
    :style="{ fontSize: size }"
  >
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    size: String,
  },
  computed: {
    svgClass() {
      if (this.name) {
        return "svg-icon " + this.name;
      } else {
        return "svg-icon";
      }
    },
    isImage() {
      return this.name ? this.name.indexOf("/") !== -1 : false;
    },
    imageSize() {
      if (this.isImage) {
        return {
          width: this.size + "px",
          height: this.size + "px",
        };
      }
      return null;
    },
  },
};
</script>

<style scoped>
img,
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
