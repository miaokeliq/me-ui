<template>
  <div class="popover" ref="popover" @click="onClick">
    <div
      ref="contentWrapper"
      class="content-wrapper"
      :class="{ [`position-${position}`]: true }"
      v-if="visible"
    >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "MePopover",
  data() {
    return {
      visible: false,
    };
  },
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      },
    },
  },
  methods: {
    /*
      总结遇到的三个bug
      1. 父元素设置 overflow：hidden 会造成 popover 隐藏，于是把组件放到body里面
        然后就会设置到是否加scrollX,scrollY 的问题。
      2. 关闭重复，点一次关闭，却被关闭了两次，解决方法：职责分开，document只管
        外面，popover只管里面，别交叉.
      3. 忘了取消监听document，visible改成false都要取消监听，因为之前代码结构不好，解决方法：将关于close的业务都收拢到一个函数里面 close()
    */
    positionContent() {
      const { contentWrapper, triggerWrapper } = this.$refs;
      document.body.appendChild(contentWrapper);
      // getBoundingClientRect 是根据视图来得到的，还需要加上body的差值部分
      const { top, left, height, width } =
        triggerWrapper.getBoundingClientRect();
      const { height: height2 } = contentWrapper.getBoundingClientRect();
      /*
        代码优化：表驱动编程
      */
      let positions = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX,
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX,
        },
        left: {
          top: top - window.scrollY + (height - height2) / 2,
          left: left + window.scrollX,
        },
        right: {
          top: top - window.scrollY + (height - height2) / 2,
          left: left + width + window.scrollX,
        },
      };

      // 根据positon调整样式
      contentWrapper.style.left = positions[this.position].left + "px";
      contentWrapper.style.top = positions[this.position].top + "px";
    },
    onClickDocument(e) {
      // 如果点击的是popover外的地方，就关闭，如果点击的popover，就不用管
      if (
        this.$refs.popover &&
        (this.$refs.popover === e.target ||
          this.$refs.popover.contains(e.target))
      ) {
        return;
      }
      if (
        this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === e.target ||
          this.$refs.contentWrapper.contains(e.target))
      ) {
        return;
      }
      this.close();
    },
    open() {
      // 如果想开启
      this.visible = true;
      this.$nextTick(() => {
        this.positionContent(); // 调整一下弹出内容的位置
        document.addEventListener("click", this.onClickDocument); //监听document
      });
    },
    close() {
      this.visible = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    onClick(event) {
      // 需要解决的问题，用户点击的到底是上面部分 还是 下面按钮
      // 看当前点击的东西是什么，如果点击的是按钮部分，就切换，如果不是按钮部分，就不管
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close();
        } else {
          this.open();
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}

.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: white;
  &::before,
  &::after {
    content: "";
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }

  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before,
    &::after {
      left: 10px;
    }

    &::before {
      border-top-color: black;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before,
    &::after {
      left: 10px;
    }

    &::before {
      border-bottom-color: black;
      bottom: 100%;
    }
    &::after {
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }

    &::before {
      border-left-color: black;
      left: 100%;
    }
    &::after {
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }

  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }

    &::before {
      border-right-color: black;
      right: 100%;
    }
    &::after {
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }
}
</style>
