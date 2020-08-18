<!--
 * @Author: 张喜贺
 * @Date: 2020-08-18 12:15:22
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-18 20:17:44
 * @FilePath: /six-ele/src/components/Cell/index.vue
-->
<template>
  <div
    class="cell"
    :class="clickable ? 'cell--clickable' : ''"
    @click="onChange"
  >
    <svg-icon class="cell__left-icon" v-if="icon" :name="icon" />
    <div v-if="title" class="cell__title">
      <span>{{ title }}</span>
      <div class="cell__label" v-if="label">
        {{ label }}
      </div>
    </div>

    <div class="cell__value" v-if="value">
      <span>{{ value }}</span>
    </div>

    <svg-icon class="cell__right-icon" v-if="isLink" name="arrow-right-line" />
  </div>
</template>

<script>
export default {
  name: "Cell",
  props: {
    icon: String,
    title: [Number, String],
    value: [Number, String],
    label: [Number, String],
    isLink: Boolean,
    clickable: Boolean,
    to: String,
  },
  methods: {
    onChange(e) {
      this.$emit("click", e);
      if (this.to) {
        this.$router.push({ path: this.to });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/var.scss";
.cell {
  position: relative;
  display: flex;
  width: 100%;
  padding: $cell-vertical-padding $cell-horizontal-padding;
  overflow: hidden;
  color: $cell-text-color;
  font-size: $cell-font-size;
  line-height: $cell-line-height;
  background-color: $cell-background-color;

  &__label {
    margin-top: $cell-label-margin-top;
    color: $cell-label-color;
    font-size: $cell-label-font-size;
    line-height: $cell-label-line-height;
  }

  &__title,
  &__value {
    flex: 1;
  }

  &__value {
    position: relative;
    overflow: hidden;
    color: $cell-value-color;
    text-align: right;
    vertical-align: middle;
    word-wrap: break-word;
  }

  &__left-icon,
  &__right-icon {
    min-width: 1em;
    height: $cell-line-height;
    font-size: $cell-icon-size;
    line-height: $cell-line-height;
  }

  &__left-icon {
    margin-right: $padding-base;
  }
  &__right-icon {
    margin-left: $padding-base;
    color: $cell-right-icon-color;
  }

  &--clickable {
    cursor: pointer;

    &:active {
      background-color: $cell-active-color;
    }
  }

  &--center {
    align-items: center;
  }
}
</style>
