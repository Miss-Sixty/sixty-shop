/*
 * @Author: 张喜贺
 * @Date: 2020-08-14 15:51:52
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-14 19:23:44
 * @FilePath: /six-ele/src/components/CountDown/utils.ts
 */
export type TimeData = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

export function parseTimeData(time: number): TimeData {
  const days = Math.floor(time / DAY);
  const hours = Math.floor((time % DAY) / HOUR);
  const minutes = Math.floor((time % HOUR) / MINUTE);
  const seconds = Math.floor((time % MINUTE) / SECOND);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

export function parseFormat(format: string, timeData: TimeData): string {
  const { days, hours, minutes, seconds } = timeData;

  const o = {
    "D+": days, //日
    "H+": hours, //小时
    "m+": minutes, //分
    "s+": seconds, //秒
  };

  for (const k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return format;
}

let prev = Date.now();
/* istanbul ignore next */
function fallback(fn: FrameRequestCallback) {
  const curr = Date.now();
  const ms = Math.max(0, 16 - (curr - prev));
  const id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}

const iRaf = window.requestAnimationFrame || fallback;
export function raf(fn: FrameRequestCallback) {
  return iRaf.call(window, fn);
}

const iCancel = window.cancelAnimationFrame || window.clearTimeout;
export function cancelRaf(id: number) {
  iCancel.call(window, id);
}

export function isSameSecond(time1: number, time2: number): boolean {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
}
