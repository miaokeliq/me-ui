<template>
  <button
    class="m-button"
    :class="{ [`icon-${iconPosition}`]: true }"
    @click="$emit('click')"
  >
    <m-icon class="icon" v-if="icon && !loading" :name="icon"></m-icon>
    <m-icon name="loading" class="loading icon" v-if="loading"></m-icon>
    <div class="content">
      <slot> </slot>
    </div>
  </button>
</template>

<script>
import Icon from "./icon.vue";
export default {
  name: "MeIcon",
  components: {
    "m-icon": Icon,
  },
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      // 属性检查器，让 其只能接收left和right
      validator(value) {
        // value为输入的值
        return value == "left" || value == "right";
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$button-height: 32px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.m-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color-hover;
  }

  &:active {
    background-color: $button-active-bg;
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

  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>
