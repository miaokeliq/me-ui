const expert = chai.expect;
import Vue from "vue";
import Input from "../src/input";

Vue.config.productionTip = false;
Vue.config.devtools = false;

// 测试驱动开发    测试过了，开发也就结束了
describe("Input", () => {
  // TDD 测试驱动开发 Mocha
  it("存在.", () => {
    expect(Input).to.be.ok;
  });

  describe("props", () => {
    const Constructor = Vue.extend(Input); //使用基础 Vue 构造器，创建一个“子类”
    let vm;
    afterEach(() => {
      vm.$destroy();
    });

    it("接收 value", () => {
      // 动态生成一个按钮
      vm = new Constructor({
        propsData: {
          value: "1234",
        },
      }).$mount();
      let inputElement = vm.$el.querySelector("input");
      expect(inputElement.value).to.equal("1234");
    });

    it("接收 disabled", () => {
      // 动态生成一个按钮
      vm = new Constructor({
        propsData: {
          disabled: true,
        },
      }).$mount();
      let inputElement = vm.$el.querySelector("input");
      expect(inputElement.disabled).to.equal(true);
    });

    it("接收 readonly", () => {
      // 动态生成一个按钮
      vm = new Constructor({
        propsData: {
          readonly: true,
        },
      }).$mount();
      let inputElement = vm.$el.querySelector("input");
      expect(inputElement.readOnly).to.equal(true);
    });

    it("接收 readonly", () => {
      // 动态生成一个按钮
      vm = new Constructor({
        propsData: {
          readonly: true,
        },
      }).$mount();
      let inputElement = vm.$el.querySelector("input");
      expect(inputElement.readOnly).to.equal(true);
    });

    it("接收 error", () => {
      // 动态生成一个按钮
      vm = new Constructor({
        propsData: {
          error: "你错了",
        },
      }).$mount();
      let useElement = vm.$el.querySelector("use");
      let href = useElement.getAttribute("xlink:href");
      expect(href).to.equal("#i-error");
      const errorMessage = vm.$el.querySelector(".error-message");
      expect(errorMessage.innerText).to.equal("你错了");
    });
  });

  describe("事件", () => {
    const Constructor = Vue.extend(Input); //使用基础 Vue 构造器，创建一个“子类”
    let vm;
    afterEach(() => {
      vm.$destroy();
    });
    it("支持 change/input/focus/blue 事件", () => {
      ["change", "input", "focus", "blur"].forEach((eventName) => {
        vm = new Constructor({}).$mount();
        const callback = sinon.fake();
        // $on 监听当前实例上的自定义事件
        vm.$on(eventName, callback);
        // 触发input 的change 事件
        let event = new Event(eventName);
        // 破除只读属性
        Object.defineProperty(event, "target", {
          value: {
            value: "hi",
          },
          enumerable: true,
        });

        let inputElement = vm.$el.querySelector("input");
        // 手动触发 change 事件
        inputElement.dispatchEvent(event);
        expect(callback).to.have.been.calledWith("hi");
      });
    });
  });
});
