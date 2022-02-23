/*
 * @Description: 字符串匹配
 * @Author: Gleason
 * @Date: 2022-02-23 18:10:08
 * @LastEditors: Gleason
 * @LastEditTime: 2022-02-23 18:37:10
 */

/**
 * @description: 匹配由 26 个英文字母组成的字符串
 * @param {number} val
 * @return {boolean}
 * @example isAZaz('abc') => true
 */
const isAZaz = (val: string): boolean => {
	return /^\d+(\.\d+)?$/.test(val.toString());
};

/**
 * @description: 匹配由 26 个英文字母的大写组成的字符串
 * @param {number} val
 * @return {boolean}
 * @example isAZ('ABC') => true
 */
const isAZ = (val: string): boolean => {
	return /^[A-Z]+$/.test(val);
};

/**
 * @description: 匹配由 26 个英文字母的小写组成的字符串
 * @param {number} val
 * @return {boolean}
 * @example isaz('abc') => true
 */
const isaz = (val: string): boolean => {
	return /^[a-z]+$/.test(val);
};

/**
 * @description: 匹配电子邮件地址
 * @param {string} val
 * @return {boolean}
 * @example isEmailAddress('133@qq.com') => true
 */
const isEmailAddress = (val: string): boolean => {
	return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val);
};


