<template>
  <div class="wrapper" :class="{ error: error }">
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
    />
    <template v-if="error">
      <m-icon name="error" class="icon-error"></m-icon>
      <span class="error-message">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from "./icon.vue";
export default {
  components: { "m-icon": Icon },
  name: "MeInput",
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
/*
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #999;
        --border-color: #999;
        --border-color-hover: #666;
        */

$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.wrapper {
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
  }
  .icon-error {
    fill: red;
  }
  .error-message {
    color: red;
  }
}
</style>
