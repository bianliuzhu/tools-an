/*
 * @Description:  rollup 配置文件
 * @Author: Gleason
 * @Date: 2022-02-23 10:47:40
 * @LastEditors: Gleason
 * @LastEditTime: 2022-03-08 21:49:24
 */
import noderesolve from "rollup-plugin-node-resolve";  // 帮助寻找node_modules里的包
import babel from 'rollup-plugin-babel' // rollup 的 babel 插件，ES6转ES5
import replace from 'rollup-plugin-replace' // 替换待打包文件里的一些变量，如process在浏览器端是不存在的，需要被替换
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript";
import pkg from "./package.json";

const env = process.env.NODE_ENV

export default {
	input: "tsc/lib/index.js", // 打包入口
	output: { // 打包出口
		file: 'dist/index.js', // 最终打包出来的文件路径和文件名，这里是在package.json的browser: 'dist/index.js'字段中配置的
		format: "umd", // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
		name: 'file'
	},
	plugins: [
		noderesolve(), // 查找和打包node_modules中的第三方模块
		commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
		typescript(), // 解析 TypeScript
    babel({
      exclude: 'node_modules/**' // 排除 node_modules 代码只编我们自己的写的代码
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    commonjs()
	],
};
