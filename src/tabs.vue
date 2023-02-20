<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "MeTabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      },
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === "MeTabsHead") {
<<<<<<< HEAD
        vm.$children.forEach((childVm) => {
          if (
            childVm.$options.name === "MeTabsItem" &&
            childVm.name === this.selected
          ) {
            this.eventBus.$emit("update:selected", this.selected, childVm);
=======
        vm.$children.forEach((item) => {
          if (
            item.$options.name === "MeTabsItem" &&
            item.name === this.selected
          ) {
            this.eventBus.$emit("update:selected", this.selected, item);
>>>>>>> f69c9aad0a3ec7527b4c17a342be5edf1c26cce7
          }
        });
      }
    });
  },
};
</script>

<style scoped lang="scss">
.tabs {
}
</style>
