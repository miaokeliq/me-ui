<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MeTabsPane",
  inject: ["eventBus"],
  data() {
    return {
      active: false,
    };
  },
  props: {
    name: {
      type: String | Number,
      required: true,
    },
  },
  created() {
    this.eventBus.$on("update:selected", (name, vm) => {
      this.active = name === this.name;
    });
  },
  computed: {
    classes() {
      return {
        active: this.active,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.tabs-pane {
  padding: 1em;
  &.active {
  }
}
</style>
