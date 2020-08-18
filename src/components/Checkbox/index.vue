<!--
 * @Author: 张喜贺
 * @Date: 2020-08-18 10:53:34
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-18 11:55:17
 * @FilePath: /six-ele/src/components/Checkbox/index.vue
-->
<template>
  <div
    class="checkbox "
    role="checked"
    aria-checked="true"
    @click="$emit('input', !value)"
  >
    <div
      class="checkbox__icon "
      :class="value ? 'checkbox__icon--checked' : ''"
    >
      <svg-icon icon-class="success" :size="iconSize" />
    </div>

    <span class="checkbox__label" v-if="text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    value: Boolean,
    iconSize: [Number, String],
    text: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/var.scss";
.checkbox {
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  &__icon {
    flex: none;
    height: 1em;
    font-size: $checkbox-size;
    line-height: 1em;
    cursor: pointer;

    .svg-icon {
      display: block;
      width: 1.25em;
      height: 1.25em;
      color: transparent;
      font-size: 0.8em;
      line-height: 1.25;
      text-align: center;
      border: 1px solid $checkbox-border-color;
      transition-duration: $checkbox-transition-duration;
      transition-property: color, border-color, background-color;
      border-radius: 100%;
    }

    &--checked {
      .svg-icon {
        color: $white;
        background-color: $checkbox-checked-icon-color;
        border-color: $checkbox-checked-icon-color;
      }
    }
  }

  &__label {
    margin-left: $checkbox-label-margin;
    color: $checkbox-label-color;
    line-height: $checkbox-size;
  }
}
</style>
