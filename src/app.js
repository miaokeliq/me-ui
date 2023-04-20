import Vue from "vue";
import Button from "./button.vue";
import Icon from "./icon.vue";
import ButtonGroup from "./button-group.vue";
import Input from "./input.vue";
import Row from "./row.vue";
import Col from "./col.vue";
import Layout from "./layout.vue";
import Header from "./header.vue";
import Sider from "./sider.vue";
import Content from "./content.vue";
import Footer from "./footer.vue";
import plugin from "./plugin";
import Tabs from "./tabs.vue";
import TabsHead from "./tabs-head.vue";
import TabsBody from "./tabs-body.vue";
import TabsItem from "./tabs-item.vue";
import TabsPane from "./tabs-pane.vue";
import Popover from "./popover.vue";
import Collapse from "./collapse.vue";
import CollapseItem from "./collapse-item.vue";
Vue.component("m-button", Button);
Vue.component("m-icon", Icon);
Vue.component("m-button-group", ButtonGroup);
Vue.component("m-input", Input);
Vue.component("m-row", Row);
Vue.component("m-col", Col);
Vue.component("m-layout", Layout);
Vue.component("m-header", Header);
Vue.component("m-sider", Sider);
Vue.component("m-content", Content);
Vue.component("m-footer", Footer);
Vue.component("m-tabs", Tabs);
Vue.component("m-tabs-head", TabsHead);
Vue.component("m-tabs-body", TabsBody);
Vue.component("m-tabs-item", TabsItem);
Vue.component("m-tabs-pane", TabsPane);
Vue.component("m-popover", Popover);
Vue.component("m-collapse", Collapse);
Vue.component("m-collapse-item", CollapseItem);

Vue.use(plugin); // 掉用 plugin 里面的install方法
new Vue({
  el: "#app",
  data: {
    selectedTab: ["2"],
    selected: "",
  },

  methods: {
    inputChange(e) {
      console.log(e.target.value);
    },
    xx() {
      console.log("yyy");
    },
    showToast() {
      this.$toast("toast弹出", {
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
});
