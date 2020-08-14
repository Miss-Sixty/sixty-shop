<!--
 * @Author: 张喜贺
 * @Date: 2020-08-14 15:41:16
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-14 19:59:00
 * @FilePath: /six-ele/src/components/CountDown/index.vue
-->
<template>
  <div class="count-down">
    <!-- <template v-if="!$slots.default">
      {{ formattedTime }}
    </template> -->
    <slot :timeData="{ ...timeData }" />
  </div>
</template>

<script>
import {
  parseTimeData,
  parseFormat,
  raf,
  isSameSecond,
  cancelRaf,
} from "./utils";
export default {
  name: "CountDown",
  props: {
    time: {
      type: [Number, String],
      default: 0,
    },
    format: {
      type: String,
      default: "HH:mm:ss",
    },
  },
  computed: {
    timeData() {
      return parseTimeData(this.remain);
    },
    formattedTime() {
      return parseFormat(this.format, this.timeData);
    },
  },
  data() {
    return {
      remain: 0,
    };
  },
  watch: {
    time: {
      immediate: true,
      handler: "start",
    },
  },
  methods: {
    start() {
      this.remain = +this.time;
      this.endTime = Date.now() + this.remain;
      this.macroTick();
    },

    macroTick() {
      this.rafId = raf(() => {
        const remain = this.getRemain();

        if (!isSameSecond(remain, this.remain) || remain === 0) {
          this.setRemain(remain);
        }

        if (this.remain > 0) {
          this.macroTick();
        }
      });
    },

    setRemain(remain) {
      this.remain = remain;

      if (remain === 0) {
        this.pause();
        this.$emit("finish");
      }
    },

    getRemain() {
      return Math.max(this.endTime - Date.now(), 0);
    },

    // @exposed-api
    pause() {
      cancelRaf(this.rafId);
    },
  },

  beforeDestroy() {
    this.pause();
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/var.scss";
.count-down {
  color: $count-down-text-color;
  font-size: $count-down-font-size;
  line-height: $count-down-line-height;
}
</style>
