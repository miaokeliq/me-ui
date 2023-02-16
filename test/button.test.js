const expert = chai.expect;
import Vue from "vue";
import Button from "../src/button";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Button", () => {
  // BDD 行为驱动测试 Mocha

  it("存在.", () => {
    expect(Button).to.be.ok;
  });

  it("可以设置icon", () => {
    // 动态生成一个按钮
    const Constructor = Vue.extend(Button); //使用基础 Vue 构造器，创建一个“子类”
    const vm = new Constructor({
      propsData: {
        icon: "settings",
      },
    }).$mount();
    let useElement = vm.$el.querySelector("use");
    let href = useElement.getAttribute("xlink:href");
    expect(href).to.equal("#i-settings");
    vm.$destroy();
  });

  it("可以设置loading.", () => {
    const Constructor = Vue.extend(Button); //使用基础 Vue 构造器，创建一个“子类”
    const vm = new Constructor({
      propsData: {
        icon: "settings",
        loading: true,
      },
    }).$mount();
    let useElements = vm.$el.querySelectorAll("use");
    expect(useElements.length).to.equal(1);
    let href = useElements[0].getAttribute("xlink:href");
    expect(href).to.equal("#i-loading");
    vm.$destroy();
  });

  it("icon 默认的 order 是 1", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button); //使用基础 Vue 构造器，创建一个“子类”
    const vm = new Constructor({
      propsData: {
        icon: "settings",
      },
    }).$mount(div);
    let svg = vm.$el.querySelector("svg");
    let { order } = window.getComputedStyle(svg);
    expect(order).to.eq("1");
    vm.$el.remove();
    vm.$destroy();
  });

  it("设置 iconPosition 可以改变 order", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button); //使用基础 Vue 构造器，创建一个“子类”
    const vm = new Constructor({
      propsData: {
        icon: "settings",
        iconPosition: "right",
      },
    }).$mount(div);
    let svg = vm.$el.querySelector("svg");
    let { order } = window.getComputedStyle(svg);
    expect(order).to.eq("2");
    vm.$el.remove();
    vm.$destroy();
  });

  it("点击 button 触发 click 事件", () => {
    // mock
    const Constructor = Vue.extend(Button); //使用基础 Vue 构造器，创建一个“子类”
    const vm = new Constructor({
      propsData: {
        icon: "settings",
      },
    }).$mount();
    /*
    在Sinon中， fake is 一个 Function ，它记录了调用它的参数，返回值，this 值和抛出的异常。
    你可以选择和不选择创建带有行为；fake可以包装一个已存在的函数。
    一个fake是不可变的：一旦创建，它的行为不会改变。
    */
    const callback = sinon.fake();
    vm.$on("click", callback);
    vm.$el.click();

    expect(callback).to.have.been.called;
  });
});
