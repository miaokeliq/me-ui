const expect = chai.expect;
import Vue from "vue";
import Tabs from "../src/tabs";
import TabsBody from "../src/tabs-body.vue";
import TabsItem from "../src/tabs-item.vue";
import TabsPane from "../src/tabs-pane.vue";
import TabsHead from "../src/tabs-head.vue";
Vue.component("m-tabs", Tabs);
Vue.component("m-tabs-head", TabsHead);
Vue.component("m-tabs-body", TabsBody);
Vue.component("m-tabs-item", TabsItem);
Vue.component("m-tabs-pane", TabsPane);

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Tabs", () => {
  // BDD 行为驱动测试 Mocha

  it("存在.", () => {
    expect(Tabs).to.be.ok;
  });

  it("接收  selected prop", (done) => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
       <m-tabs selected="finance">
        <m-tabs-head>
          <m-tabs-item name="woman">
            美女</m-tabs-item>
          <m-tabs-item name="finance">财经</m-tabs-item>
          <m-tabs-item name="sports">体育</m-tabs-item>
        </m-tabs-head>
        <m-tabs-body>
          <m-tabs-pane name="woman">美女相关咨询</m-tabs-pane>
          <m-tabs-pane name="finance">财经相关咨询</m-tabs-pane>
          <m-tabs-pane name="sports">体育相关咨询</m-tabs-pane>
        </m-tabs-body>
      </m-tabs>
`;
    let vm = new Vue({
      el: div,
    });
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(".tabs-item[data-name='finance']");
      expect(x.classList.contains("active")).to.be.true;
      done();
    });
  });

  it("可以接收 direction prop", () => {});
});
