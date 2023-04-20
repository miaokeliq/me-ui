<template>
  <div>
    <div class="tab-container">
      <m-tabs :selected="selected">
        <m-tabs-head>
          <m-tabs-item name="1">财经</m-tabs-item>
          <m-tabs-item name="2">体育</m-tabs-item>
          <m-tabs-item name="3">游戏</m-tabs-item>
        </m-tabs-head>
        <m-tabs-body>
          <m-tabs-pane name="1">财经内容</m-tabs-pane>
          <m-tabs-pane name="2">体育内容</m-tabs-pane>
          <m-tabs-pane name="3">游戏内容</m-tabs-pane>
        </m-tabs-body>
      </m-tabs>
    </div>

    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Tabs from "../../../src/tabs.vue";
import TabsBody from "../../../src/tabs-body.vue";
import TabsHead from "../../../src/tabs-head.vue";
import TabsItem from "../../../src/tabs-item.vue";
import TabsPane from "../../../src/tabs-pane.vue";
export default {
  components: {
    "m-tabs": Tabs,
    "m-tabs-body": TabsBody,
    "m-tabs-head": TabsHead,
    "m-tabs-item": TabsItem,
    "m-tabs-pane": TabsPane,
  },
  data() {
    return {
      selected: "1",
      content: `
 <m-tabs :selected="selected">
      <m-tabs-head>
        <m-tabs-item name="1">财经</m-tabs-item>
        <m-tabs-item name="2">体育</m-tabs-item>
        <m-tabs-item name="3">游戏</m-tabs-item>
      </m-tabs-head>
      <m-tabs-body>
        <m-tabs-pane name="1">财经内容</m-tabs-pane>
        <m-tabs-pane name="2">体育内容</m-tabs-pane>
        <m-tabs-pane name="3">游戏内容</m-tabs-pane>
      </m-tabs-body>
 </m-tabs>
      `,
    };
  },
};
</script>

<style>
.tab-container {
  height: 100px;
}
</style>
