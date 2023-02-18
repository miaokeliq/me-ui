const expect = chai.expect;
import Vue from "vue";
import Col from "../src/col.vue";
Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Col", () => {
  // BDD 行为驱动测试 Mocha

  it("存在.", () => {
    expect(Col).to.be.ok;
  });

  it("接收 span 属性", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        span: 12,
      },
    }).$mount(div);
    expect(vm.$el.classList.contains("col-12")).to.eq(true);
    div.remove();
    vm.$destroy();
  });

  it("接收 offset 属性", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        offset: 12,
      },
    }).$mount(div);
    expect(vm.$el.classList.contains("offset-12")).to.eq(true);
    div.remove();
    vm.$destroy();
  });

  it("接收 pad 属性", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        pad: { span: 1, offset: 2 },
      },
    }).$mount(div);
    expect(vm.$el.classList.contains("col-pad-1")).to.eq(true);
    expect(vm.$el.classList.contains("offset-pad-2")).to.eq(true);
    div.remove();
    vm.$destroy();
  });

  it("接收 narrowPc 属性", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        narrowPc: { span: 1, offset: 2 },
      },
    }).$mount(div);
    expect(vm.$el.classList.contains("col-narrow-pc-1")).to.eq(true);
    expect(vm.$el.classList.contains("offset-narrow-pc-2")).to.eq(true);
    div.remove();
    vm.$destroy();
  });

  it("接收 pc 属性", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        pc: { span: 1, offset: 2 },
      },
    }).$mount(div);
    expect(vm.$el.classList.contains("col-pc-1")).to.eq(true);
    expect(vm.$el.classList.contains("offset-pc-2")).to.eq(true);
    div.remove();
    vm.$destroy();
  });

  it("接收 widePc 属性", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        widePc: { span: 1, offset: 2 },
      },
    }).$mount(div);
    expect(vm.$el.classList.contains("col-wide-pc-1")).to.eq(true);
    expect(vm.$el.classList.contains("offset-wide-pc-2")).to.eq(true);
    div.remove();
    vm.$destroy();
  });
});
