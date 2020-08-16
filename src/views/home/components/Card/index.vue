<template>
  <div class="card">
    <div class="card-title">
      <p>{{ title }}</p>
      <slot name="title-right" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/var.scss";
.card {
  padding: $padding-xs $padding-sm;
  &-title {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    p {
      margin-right: 6px;
      font-weight: $font-weight-bold;
      font-size: $font-size-lg;
    }
  }
}
</style>
