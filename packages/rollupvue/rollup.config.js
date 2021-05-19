/*
 * @Description:
 * @Author: zouxm
 * @Date: 2021-05-18 16:37:14
 * @LastEditTime: 2021-05-19 11:38:01
 * @LastEditors: zouxm
 */
//https://juejin.cn/post/6901565843348881416
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import image from '@rollup/plugin-image'
import babel from 'rollup-plugin-babel'
export default {
    input: 'modules/index.js',
    output: [
        {
            file: 'lib/bundle.cjs.js',
            format: 'cjs'
        },
        {
            file: 'lib/bundle.esm.js',
            format: 'es'
        },
        {
            file: 'lib/bundle.umd.js',
            format: 'umd',
            name: 'mylib'
        }
    ],
    plugins: [
        commonjs(),
        vue(),
        image(),
        babel({
            exclude: 'node_modules/**'
        }),
        serve({
            contentBase: '', //服务器启动的文件夹，默认是项目根目录，需要在该文件下创建index.html
            port: 8020 //端口号，默认10001
        }),
        livereload('lib') //watch dist目录，当目录中的文件发生变化时，刷新页面
    ],
    external: [
        //外部库， 使用'umd'文件时需要先引入这个外部库
        'vue'
    ]
}
