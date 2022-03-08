/*
 * @Description: 数字匹配
 * @Author: Gleason
 * @Date: 2022-02-23 17:55:47
 * @LastEditors: Gleason
 * @LastEditTime: 2022-03-08 15:14:30
 */

/**
 * @description: 匹配正整数
 * @param {number} val 传入一个数字
 * @return {boolean} true 为正整数
 * @example isNegativeNum(9) => true
 */
export const isPositiveNum = (val: number): boolean => {
	return /^[1-9]d*$/.test(val.toString());
};

/**
 * @description: 匹配负整数
 * @param {number} val 传入一个数字
 * @return {boolean} true 为负整数
 * @example isNegativeNum(-9) => true
 */
export const isNegativeNum = (val: number): boolean => {
	return /^-[1-9]d*$/.test(val.toString());
};

/**
 * @description: 匹配整数
 * @param {number} val 传入一个数字
 * @return {boolean} true 整数
 * @example isInteger(2.2) => false
 */
export const isInteger = (val: number): boolean => {
	return /^(-|\+)?\d+$/.test(val.toString());
};

/**
 * @description: 匹配非负浮点数
 * @param {number} val 传入一个数字
 * @return {boolean}
 * @example isNotNegativeFloatNum(2.2) => true
 */
export const isNotNegativeFloatNum = (val: number): boolean => {
	return /^\d+(\.\d+)?$/.test(val.toString());
};

/**
 * @description: 金钱格式化，三位加逗号
 * @param {number} val 传入一个数字
 * @return {boolean}
 * @example isNotNegativeFloatNum(2.2) => true
 */
export const formatMoney = (num: number) => {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * @description: 截取字符串并加略号
 * @param {string}  字符串
 * @return {string} 增加省略号的字符串
 * @example isNotNegativeFloatNum(2.2) => true
 */
export const subText = (str: string, leg: number) => {
	if (str.length === 0) {
		return '';
	}
	if (str.length > leg) {
		return str.substr(0, leg) + "...";
	} else {
		return str;
	}
};
