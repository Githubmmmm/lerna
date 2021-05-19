<!--
 * @Description: 
 * @Author: zouxm
 * @Date: 2021-05-19 10:14:48
 * @LastEditTime: 2021-05-19 16:40:58
 * @LastEditors: zouxm
-->
<template>
    <div>
        hello {{ name }}
        <img src="../../assets/images/hh.png" />
    </div>
</template>
<script>
export default {
    name: 'hello',
    props: {
        name: {
            type: String,
            default: 'world'
        }
    }
}
</script>
<style scoped>
img {
    width: 120px;
}
</style>
