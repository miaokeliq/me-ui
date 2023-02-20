<template>
  <div class="tabs-item" :class="classes" @click="xxx">
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
      };
    },
  },

  created() {
    this.eventBus.$on("update:selected", (name) => {
      this.active = name === this.name;
    });
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name);
    },
  },
};
</script>

<style scoped lang="scss">
.tabs-item {
  padding: 0 2em;
  flex-shrink: 0;
  cursor: pointer;
  border: 1px solid green;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    background: red;
  }
}
</style>
