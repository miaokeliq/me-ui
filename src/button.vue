<template>
  <button class="m-button" :class="{ [`icon-${iconPosition}`]: true }">
    <svg class="icon" v-if="icon">
      <!-- 使用模板字符串 -->
      <use v-bind:xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="content">
      <slot> </slot>
    </div>
  </button>
</template>

<script>
export default {
  props: ["icon", "iconPosition"], // left, right
};
</script>

<style lang="scss">
.m-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  > .icon {
    order: 1;
    margin-right: 0.1em;
    margin-left: 0;
  }

  > .content {
    order: 2;
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.1em;
      margin-right: 0;
    }
    > .content {
      order: 1;
    }
  }
}
</style>
