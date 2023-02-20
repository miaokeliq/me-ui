<template>
  <div class="tabs-item" :class="classes" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MeTabsItem",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String | Number,
      required: true,
    },
  },
  inject: ["eventBus"],
  data() {
    return {
      active: false,
    };
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled,
      };
    },
  },

  created() {
    this.eventBus.$on("update:selected", (name, vm) => {
      this.active = name === this.name;
    });
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      this.eventBus.$emit("update:selected", this.name, this);
    },
  },
};
</script>

<style scoped lang="scss">
$blue: blue;
$disabled-text-color: grey;
.tabs-item {
  padding: 0 2em;
  flex-shrink: 0;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    color: $blue;
  }
  &.disabled {
    color: $disabled-text-color;
  }
}
</style>
