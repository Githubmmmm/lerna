/*
 * @Description:
 * @Author: zouxm
 * @Date: 2021-05-19 10:10:23
 * @LastEditTime: 2021-05-19 11:31:51
 * @LastEditors: zouxm
 */
import hello from '../component/hello'
function install(Vue) {
    Vue.use(hello)
}
export { hello }
export default install
