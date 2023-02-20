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

describe("TabsItem", () => {
  // BDD 行为驱动测试 Mocha

  it("存在.", () => {
    expect(TabsItem).to.be.ok;
  });

  it("接收 name 属性", () => {
    const Constructor = Vue.extend(TabsItem); //使用基础 Vue 构造器，创建一个“子类”
    const vm = new Constructor({
      propsData: {
        name: "xxx",
      },
    }).$mount();
    expect(vm.$el.getAttribute("data-name")).to.eq("xxx");
  });

  it("可以接收 disabled 属性", () => {
    const Constructor = Vue.extend(TabsItem); //使用基础 Vue 构造器，创建一个“子类”
    const vm = new Constructor({
      propsData: {
        disabled: true,
      },
    }).$mount();
    expect(vm.$el.classList.contains("disabled")).to.be.true;
    const callback = sinon.fake();

    vm.$on("click", callback);
    vm.$el.click();
    expect(callback).to.have.not.been.called;
  });
});
