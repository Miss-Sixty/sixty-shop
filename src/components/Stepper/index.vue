<!--
 * @Author: 张喜贺
 * @Date: 2020-08-18 08:34:30
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-18 10:49:16
 * @FilePath: /six-ele/src/components/Stepper/index.vue
-->
<template>
  <div class="stepper">
    <button
      type="button"
      :style="buttonStyle"
      class="stepper__minus"
      @click="onChange('minus')"
    />
    <input
      type="tel"
      :value="value"
      class="stepper__input"
      :style="inputStyle"
    />
    <button
      type="button"
      :style="buttonStyle"
      class="stepper__plus"
      @click="onChange('plus')"
    />
  </div>
</template>

<script>
export default {
  name: "Stepper",
  props: {
    value: null,
    buttonSize: [Number, String],
    inputWidth: [Number, String],
  },
  computed: {
    inputStyle() {
      const style = {};

      if (this.inputWidth) {
        style.width = this.inputWidth + "px";
      }

      if (this.buttonSize) {
        style.height = this.buttonSize + "px";
      }

      return style;
    },

    buttonStyle() {
      if (this.buttonSize) {
        const size = this.buttonSize + "px";

        return {
          width: size,
          height: size,
        };
      } else return null;
    },
  },

  methods: {
    onChange(type) {
      const diff = type === "minus" ? -1 : +1;
      const value = +this.value + diff;

      if (value <= 0) {
        return this.$emit("overlimit", type);
      }

      this.$emit("change", value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/var.scss";
.stepper {
  user-select: none;
  &__minus,
  &__plus {
    position: relative;
    width: $stepper-input-height;
    height: $stepper-input-height;
    margin: 0;
    padding: 0;
    vertical-align: middle;
    border: 0;
    cursor: pointer;
    border-radius: 100%;

    &::before {
      width: 50%;
      height: 1px;
    }

    &::after {
      width: 1px;
      height: 50%;
    }

    &::before,
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: currentColor;
      transform: translate(-50%, -50%);
      content: "";
    }

    &:active {
      opacity: $active-opacity;
    }
  }
  &__minus {
    color: $stepper-button-round-theme-color;
    background-color: $white;
    border: 1px solid $stepper-button-round-theme-color;
    &::after {
      display: none;
    }
  }
  &__plus {
    color: $white;
    background-color: $stepper-button-round-theme-color;
  }

  &__input {
    box-sizing: border-box;
    width: $stepper-input-width;
    height: $stepper-input-height;
    margin: 0 2px;
    padding: 0;
    color: $stepper-input-text-color;
    font-size: $stepper-input-font-size;
    line-height: $stepper-input-line-height;
    text-align: center;
    vertical-align: middle;
    background-color: transparent;
    border: 0;
    border-width: 1px 0;
    border-radius: 0;
    -webkit-appearance: none;

    &:read-only {
      cursor: default;
    }
  }
}
</style>
