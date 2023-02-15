import Vue from "vue";
import Button from "./button.vue";
import Icon from "./icon.vue";
import ButtonGroup from "./button-group.vue";
Vue.component("m-button", Button);
Vue.component("m-icon", Icon);
Vue.component("m-button-group", ButtonGroup);

new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: true,
    loading3: true,
  },
});

import chai from "chai";
import spies from "chai-spies";
chai.use(spies);

const expect = chai.expect;
// 单元测试
{
  // 动态生成一个按钮
  const Constructor = Vue.extend(Button); //使用基础 Vue 构造器，创建一个“子类”
  const vm = new Constructor({
    propsData: {
      icon: "settings",
    },
  });
  vm.$mount(); // 将button挂载到test元素上
  let useElement = vm.$el.querySelector("use");
  let href = useElement.getAttribute("xlink:href");
  expect(href).to.eq("#i-settings");
  vm.$el.remove();
  vm.$destroy();
}

// 当同时传入 icon 和 loading 时，图标就只有一个loading
{
  const Constructor = Vue.extend(Button); //使用基础 Vue 构造器，创建一个“子类”
  const vm = new Constructor({
    propsData: {
      icon: "settings",
      loading: true,
    },
  });
  vm.$mount();
  let useElement = vm.$el.querySelector("use");
  let href = useElement.getAttribute("xlink:href");
  expect(href).to.eq("#i-loading");
  vm.$el.remove();
  vm.$destroy();
}

// 测试 图标应该默认在左边，也就是 order:1
{
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button); //使用基础 Vue 构造器，创建一个“子类”
  const vm = new Constructor({
    propsData: {
      icon: "settings",
    },
  });
  vm.$mount(div);
  let svg = vm.$el.querySelector("svg");
  let { order } = window.getComputedStyle(svg);
  expect(order).to.eq("1");
  vm.$el.remove();
  vm.$destroy();
}

// 测试 图标设置在右边，也就是 order:2
{
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button); //使用基础 Vue 构造器，创建一个“子类”
  const vm = new Constructor({
    propsData: {
      icon: "settings",
      iconPosition: "right",
    },
  });
  vm.$mount(div);
  let svg = vm.$el.querySelector("svg");
  let { order } = window.getComputedStyle(svg);
  expect(order).to.eq("2");
  vm.$el.remove();
  vm.$destroy();
}

{
  // mock
  const Constructor = Vue.extend(Button); //使用基础 Vue 构造器，创建一个“子类”
  const gButton = new Constructor({
    propsData: {
      icon: "settings",
      iconPosition: "right",
    },
  });
  gButton.$mount();
  let spy = chai.spy(function () {});
  gButton.$on("click", spy);
  // 期望这个函数被执行
  let button = gButton.$el;
  button.click();
  expect(spy).to.have.been.called();
}
