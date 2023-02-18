const expect = chai.expect;
import Vue from "vue";
import Row from "../src/row.vue";
import Col from "../src/col.vue";
Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Row", () => {
  // BDD 行为驱动测试 Mocha

  it("存在.", () => {
    expect(Row).to.be.ok;
  });

  // 如果不加参数done，就会认为全部是同步代码
  // 加上done，就会等异步执行完，最多等2秒, 要再调用done
  it("接受 gutter 属性", (done) => {
    Vue.component("m-row", Row);
    Vue.component("m-col", Col);
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
      <m-row gutter="20">
        <m-col span="12"></m-col>
        <m-col span="12"></m-col>
      </m-row>
    `;
    const vm = new Vue({
      el: div,
    });
    setTimeout(() => {
      const row = vm.$el.querySelector(".row");
      expect(getComputedStyle(row).marginLeft).to.eq("-10px");
      expect(getComputedStyle(row).marginRight).to.eq("-10px");
      const col = vm.$el.querySelectorAll(".col");
      expect(getComputedStyle(col[0]).paddingRight).to.eq("10px");
      expect(getComputedStyle(col[1]).paddingLeft).to.eq("10px");
      done();
      vm.$el.remove();
      vm.$destroy();
    });
  });

  it("接受 align 属性", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Row);
    const vm = new Constructor({
      propsData: {
        align: "right",
      },
    }).$mount(div);
    const element = vm.$el;
    expect(getComputedStyle(element).justifyContent).to.eq("flex-end");
    vm.$destroy();
  });
});
