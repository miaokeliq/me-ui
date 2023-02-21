<template>
  <div class="popover" ref="popover" @click="onClick">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
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
      document.body.appendChild(this.$refs.contentWrapper);
      // getBoundingClientRect 是根据视图来得到的，还需要加上body的差值部分
      let { top, left } = this.$refs.triggerWrapper.getBoundingClientRect();
      this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
      this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
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
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}

.content-wrapper {
  position: absolute;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>
