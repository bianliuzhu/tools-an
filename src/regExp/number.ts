/*
 * @Description: 数字匹配
 * @Author: Gleason
 * @Date: 2022-02-23 17:55:47
 * @LastEditors: Gleason
 * @LastEditTime: 2022-02-23 18:11:58
 */

/**
 * @description: 匹配正整数
 * @param {number} val 传入一个数字
 * @return {boolean} true 为正整数
 * @example isNegativeNum(9) => true
 */
const isPositiveNum = (val:number):boolean => {
	return /^[1-9]d*$/.test(val.toString());
};

/**
 * @description: 匹配负整数
 * @param {number} val 传入一个数字
 * @return {boolean} true 为负整数
 * @example isNegativeNum(-9) => true
 */
const isNegativeNum = (val:number):boolean => {
	return /^-[1-9]d*$/.test(val.toString());
};

/**
 * @description: 匹配整数
 * @param {number} val 传入一个数字
 * @return {boolean} true 整数
 * @example isInteger(2.2) => false
 */
const isInteger = (val:number):boolean => {
	return /^(-|\+)?\d+$/.test(val.toString());
};

/**
 * @description: 匹配非负浮点数
 * @param {number} val 传入一个数字
 * @return {boolean}
 * @example isNotNegativeFloatNum(2.2) => true
 */
const isNotNegativeFloatNum =(val:number):boolean => {
	return /^\d+(\.\d+)?$/.test(val.toString());
};

