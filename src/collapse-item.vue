<template>
  <div class="collapse-item">
    <div class="title" @click="toggle">{{ title }}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeCollapseItem",
  props: {
    title: { type: String, required: true },
    name: {
      type: String,
      required: true,
    },
  },
  inject: ["eventBus"],
  data() {
    return {
      open: false,
    };
  },
  mounted() {
    this.eventBus &&
      this.eventBus.$on("update:selected", (names) => {
        if (names.indexOf(this.name) >= 0) {
          this.open = true;
        } else {
          this.open = false;
        }
      });
  },
  methods: {
    toggle() {
      if (this.open) {
        this.eventBus &&
          this.eventBus.$emit("update:removeSelected", this.name);
      } else {
        console.log("111");
        this.eventBus && this.eventBus.$emit("update:addSelected", this.name);
      }
    },
  },
};
</script>

<style scoped lang="scss">
$grey: #ddd;
$border-radius: 4px;
.collapse-item {
  > .title {
    border: 1px solid $grey;
    border-radius: $border-radius;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }

  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  > .content {
    padding: 8px;
  }
}
</style>
