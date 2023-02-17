<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = (value) => {
  let keys = Object.key(value);
  let valid = true;
  // 查找数组里是否包含另一个数组里所有的元素的算法，在这里不用优化也可以，因为数组的值没多少
  keys.forEach((key) => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};

export default {
  name: "MeCol",
  props: {
    span: { type: [Number, String] },
    offset: {
      type: [Number, String],
    },
    pad: {
      type: Object,
      validator,
    },
    narrowPc: {
      type: Object,
      validator,
    },

    pc: {
      type: Object,
      validator(value) {
        let keys = Object.key(value);
        let valid = true;
        // 查找数组里是否包含另一个数组里所有的元素的算法，在这里不用优化也可以，因为数组的值没多少
        keys.forEach((key) => {
          if (!["span", "offset"].includes(key)) {
            valid = false;
          }
        });
        return valid;
      },
    },
    widePc: {
      type: Object,
      validator(value) {
        let keys = Object.key(value);
        let valid = true;
        // 查找数组里是否包含另一个数组里所有的元素的算法，在这里不用优化也可以，因为数组的值没多少
        keys.forEach((key) => {
          if (!["span", "offset"].includes(key)) {
            valid = false;
          }
        });
        return valid;
      },
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px",
      };
    },
    colClass() {
      let { span, offset, pad, narrowPc, pc, widePc } = this;
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...(pad && [`col-pad-${pad.span}`, `offset-pad-${pad.offset}`]),
        ...(narrowPc && [
          `col-narrowPc-${narrowPc.span}`,
          `offset-narrowPc-${narrowPc.offset}`,
        ]),
        ...(pc && [`col-pc-${pc.span}`, `offset-pc-${pc.offset}`]),
        ...(widePc && [
          `col-widePc-${widePc.span}`,
          `offset-widePc-${widePc.offset}`,
        ]),
      ];
    },
  },
};
</script>

<style scoped lang="scss">
.col {
  height: 100px;
  width: 50%;
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
  @media (min-width: 577px) and (max-width: 768px) {
    $class-prefix: col-pad;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: calc($n / 24) * 100%;
      }
    }

    $class-prefix: offset-pad;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: calc($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: calc($n / 24) * 100%;
      }
    }

    $class-prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: calc($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: calc($n / 24) * 100%;
      }
    }

    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: calc($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: calc($n / 24) * 100%;
      }
    }

    $class-prefix: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: calc($n / 24) * 100%;
      }
    }
  }
}
</style>
