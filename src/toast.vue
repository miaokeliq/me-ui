<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
// 写轮子要考虑一个问题： 小概率事件必将发生
/* import Vue from "vue"; 
Vue.prototype.$toast = function () {
  // 侵入性太强，不好
  console.log("我是toast");
}; */
export default {
  name: "MeToast",
};
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  font-size: $font-size;
  height: $toast-height;
  display: flex;
  align-items: center;
  background: $toast-bg;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0 16px;
}
</style>