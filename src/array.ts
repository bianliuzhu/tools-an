/*
 * @Description:
 * @Author: Gleason
 * @Date: 2022-02-23 18:19:04
 * @LastEditors: Gleason
 * @LastEditTime: 2022-02-24 10:00:07
 */

/**
 * @description: 返回数组中的最大值
 * @param {number[]} val
 * @return {number}
 * @example arrayMax([1,2,6]) => 6
 */
export const arrayMax = (val: number[]): number => {
	return Math.max(...val)
};

/**
 * @description: 返回数组中的最小值
 * @param {number[]} val
 * @return {number}
 * @example arrayMin([1,2,6]) => 1
 */
export const arrayMin = (val: number[]): number => {
	return Math.min(...val)
};

/**
 * @description: 从数组中移除 falsey 值(false、null、0、""、undefined、NaN)
 * @param {never[]} val 仅限单位数组
 * @return {never[]}
 * @example compact([false,null,0,"",undefined,NaN,1]) => [ 1 ]
 */
export const compact = (val: never[]): never[] => {
	return val.filter(Boolean);
};

/**
 * @description: 计算数组中值的出现次数
 * @param {never[]} arr 仅限单位数组
 * @return {number}
 * @example countOccurrences([1,2,1,2,3,3,3,3],3) => 4
 */
type countOccurrencesparam = number | string | null | undefined
export const countOccurrences = (arr: never[], val: countOccurrencesparam): number => {
	return arr.reduce((a, v) => v === val ? a + 1 : a + 0, 0);
};
