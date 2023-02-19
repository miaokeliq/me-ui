const expect = chai.expect;
import Vue from "vue";
import Toast from "../src/toast.vue";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Toast", () => {
  // BDD 行为驱动测试 Mocha

  it("存在.", () => {
    expect(Toast).to.be.ok;
  });

  describe("props", () => {
    it("接收 autoclose", (done) => {
      let div = document.createElement("div");
      document.body.appendChild(div);
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          autoClose: 1,
        },
      }).$mount(div);
      vm.$on("close", () => {
        expect(document.body.contains(vm.$el)).to.eq(false);
        done();
      });
    });
    it("接收 closeButton", () => {
      const callback = sinon.fake();
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: "关闭吧",
            callback,
          },
        },
      }).$mount();
      let closeButton = vm.$el.querySelector(".close");
      // trim() 去除字符串的头尾空格
      expect(closeButton.textContent.trim()).to.eq("关闭吧");
      closeButton.click();
      expect(callback).to.have.been.called;
    });

    it("接收 enableHtml", () => {
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          enableHtml: true,
        },
      });
      vm.$slots.default = ['<strong id="hi">hi</strong>'];
      vm.$mount();
      let strong = vm.$el.querySelector("#hi");
      expect(strong).to.exist;
    });

    it("接收position", () => {
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          position: "bottom",
        },
      }).$mount();
      expect(vm.$el.classList.contains("position-bottom")).to.eq(true);
    });
  });
});
