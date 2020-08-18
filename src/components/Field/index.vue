<!--
 * @Author: 张喜贺
 * @Date: 2020-08-18 22:06:33
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-19 00:08:17
 * @FilePath: /six-ele/src/components/Field/index.vue
-->
<template>
  <div class="field">
    <div class="field--content hairline--bottom">
      <svg-icon class="field__icon" :name="leftIcon" size="16" />
      <input
        class="field__input"
        type="text"
        :value="value"
        :placeholder="placeholder"
      />
      <slot name="button" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Field",
  props: {
    leftIcon: String,
    value: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/var.scss";
.field {
  padding: 0 $padding-md;
  color: $gray-8;
  background-color: $white;
  &--content {
    display: flex;
    align-items: center;
  }

  &__icon {
    margin-right: 4px;
  }

  &__input {
    flex: 1;
    display: block;
    width: 100%;
    padding: $padding-sm 0;
    background-color: transparent;
    &::placeholder {
      color: $field-placeholder-text-color;
    }
  }
}
</style>
