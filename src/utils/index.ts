/*
 * @Author: 张喜贺
 * @Date: 2020-08-20 13:02:41
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-20 13:06:01
 * @FilePath: /six-shop/src/utils/index.ts
 */
export function isDef(val: unknown): boolean {
  return val !== undefined && val !== null;
}

export function isNumeric(val: string): boolean {
  return /^\d+(\.\d+)?$/.test(val);
}

export function addUnit(value?: string | number): string | undefined {
  if (!isDef(value)) {
    return undefined;
  }

  value = String(value);
  return isNumeric(value) ? `${value}px` : value;
}
