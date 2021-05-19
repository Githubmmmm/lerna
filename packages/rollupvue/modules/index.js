/*
 * @Description:
 * @Author: zouxm
 * @Date: 2021-05-19 10:10:23
 * @LastEditTime: 2021-05-19 15:47:12
 * @LastEditors: zouxm
 */
import hello from '../component/hello'
import canlendar from '../component/canlendar'
function install(Vue) {
    Vue.use(hello)
    Vue.use(canlendar)
}
export { hello, canlendar }
export default install
