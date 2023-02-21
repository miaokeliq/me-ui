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
  methods: {
    checkChildren() {
      if (this.$children.length === 0) {
        console &&
          console.warn &&
          console.warn(
            "tabs的子组件应该是tabs-head 和 tabs-body，但你没有写子组件"
          );
      }
    },
    selectTab() {
      //children 只能获取子组件，不能获取子元素
      this.$children.forEach((vm) => {
        if (vm.$options.name === "MeTabsHead") {
          vm.$children.forEach((childVm) => {
            if (
              childVm.$options.name === "MeTabsItem" &&
              childVm.name === this.selected
            ) {
              this.eventBus.$emit("update:selected", this.selected, childVm);
            }
          });
        }
      });
    },
  },
  mounted() {
    this.checkChildren();
    this.selectTab();
  },
};
</script>

<style scoped lang="scss">
.tabs {
}
</style>
