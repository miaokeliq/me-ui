import Toast from "./toast.vue";
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOption) {
      // 生成一个toast组件，然后放到body里面
      let Constructor = Vue.extend(Toast);
      let toast = new Constructor({
        propsData: {
          position: toastOption.position,
          closeButton: toastOption.closeButton,
        },
      });
      toast.$slots.default = [message];
      toast.$mount();
      document.body.appendChild(toast.$el);
    };
  },
};
