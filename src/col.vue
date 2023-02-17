<template>
  <div
    class="col"
    :class="[span && `col-${span}`, offset && `offset-${offset}`]"
    :style="{ paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 + 'px' }"
  >
    <div style="border: 1px solid green; height: 100px">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeCol",
  props: {
    span: { type: [Number, String] },
    offset: {
      type: [Number, String],
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },
};
</script>

<style scoped lang="scss">
.col {
  height: 100px;
  background: grey;
  width: 50%;
  border: 1px solid red;
  $class-prefix: col-;

  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: calc($n / 24) * 100%;
    }
  }

  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: calc($n / 24) * 100%;
    }
  }
}
</style>
