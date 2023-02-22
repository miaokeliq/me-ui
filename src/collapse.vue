<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "MeCollapse",
  props: {
    single: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Array,
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
    // 一开始通知所有儿子们，该选中的选中，  也就是一开始的出事状态
    this.eventBus.$emit("update:selected", this.selected);

    // 通知儿子们该更新的更新，该移除的移除
    this.eventBus.$on("update:addSelected", (name) => {
      // 深拷贝   因为不允许直接修改props
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));
      if (this.single) {
        selectedCopy = [name];
      } else {
        selectedCopy.push(name);
      }
      this.eventBus.$emit("update:selected", selectedCopy);
      this.$emit("update:selected", selectedCopy);
    });

    this.eventBus.$on("update:removeSelected", (name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));
      let index = this.selected.indexOf(name);
      selectedCopy.splice(index, 1);
      this.eventBus.$emit("update:selected", selectedCopy);
      this.$emit("update:selected", selectedCopy);
    });
  },
};
</script>

<style scoped lang="scss">
$grey: #ddd;
$border-radius: 4px;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
  overflow: hidden;
}
</style>
