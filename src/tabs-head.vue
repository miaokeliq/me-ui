<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  name: "MeTabsHead",
};
</script>

<style scoped lang="scss">
.tabs-head {
}
</style>
