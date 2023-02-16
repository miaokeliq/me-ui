<template>
  <svg class="m-icon">
    <!-- 使用模板字符串 -->
    <use v-bind:xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import "./svg";
export default {
  name: "MeIcon",
  props: ["name"],
};
</script>

<style lang="scss" scoped>
.m-icon {
  width: 1em; /* 相对于当前对象内文本的字体尺寸 */
  height: 1em;
}
</style>
