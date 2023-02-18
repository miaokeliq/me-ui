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
Vue.use(plugin); // 掉用 plugin 里面的install方法
new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: true,
    loading3: true,
    message: "1",
  },
  methods: {
    inputChange(e) {
      console.log(e.target.value);
    },
    showToast() {
      this.$toast(
        "我我是缪克立我是缪克立我是缪克立我是缪克立我是缪克立我是缪克立是缪克我是缪克立我是缪克立我是缪克立我是缪克立我是缪克立我是缪克立立",
        {
          closeButton: {
            text: "关闭",
            callback() {
              console.log("用户说他知道了");
            },
          },
        }
      );
    },
  },
});
