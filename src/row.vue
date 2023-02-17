<template>
  <div
    class="row"
    :style="{ marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MeRow",
  props: {
    gutter: {
      type: [Number, String],
    },
  },
  created() {
    // this.$children;
    // 没有儿子
  },
  mounted() {
    console.log(this.$children);
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
    });
  },
};

/* var div = document.createElement("div"); // created
var childDiv = document.createElement('div')
div.appendChild((childDiv)) // child mounted 
document.body.appendChild(div); // mounted */
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>
