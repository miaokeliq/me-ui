<template>
  <div>
    <m-button @click="showToastUp">向上弹出</m-button>
    <m-button>中间弹出</m-button>
    <m-button>向下弹出</m-button>
  </div>
</template>

<script>
import Button from "../../../src/button.vue";
import Plugin from "../../../src/plugin";
export default {
  components: {
    "m-button": Button,
  },
  data() {
    return {};
  },
  methods: {
    showToastUp() {
      this.$toast("toast向上弹出", {
        position: "bottom",
        closeButton: {
          text: "关闭",
          callback() {
            console.log("用户说他知道了");
          },
        },
      });
    },
  },
  mounted() {},
};
</script>

<style></style>
