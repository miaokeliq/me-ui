<template>
  <div>
    <m-collapse :selected.sync="selectedTab">
      <m-collapse-item title="标题1" name="1">
        内容111111111111111</m-collapse-item
      >
      <m-collapse-item title="标题2" name="2">
        内容222222222222222</m-collapse-item
      >
      <m-collapse-item title="标题3" name="3">
        内容333333333333333</m-collapse-item
      >
    </m-collapse>

    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Collapse from "../../../src/collapse.vue";
import CollapseItem from "../../../src/collapse-item.vue";
export default {
  components: {
    "m-collapse": Collapse,
    "m-collapse-item": CollapseItem,
  },
  data() {
    return {
      selectedTab: [],
      content: `
    <m-collapse :selected.sync="selectedTab">
      <m-collapse-item title="标题1" name="1">
        内容111111111111111
        </m-collapse-item>
      <m-collapse-item title="标题2" name="2">
        内容222222222222222
        </m-collapse-item>
      <m-collapse-item title="标题3" name="3">
        内容333333333333333
        </m-collapse-item>
    </m-collapse>
      `,
    };
  },
};
</script>

<style></style>
