<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MeLayout",
  data() {
    return {
      layoutClass: {
        hasSider: false,
      },
    };
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === "MeSider") {
        this.layoutClass.hasSider = true;
      }
    });
  },
  created() {},
};
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  flex-grow: 1;
  &.hasSider {
    flex-direction: row;
  }
}
</style>
