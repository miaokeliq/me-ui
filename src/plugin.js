import Toast from "./toast.vue";

let currentToast;
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      if (currentToast) {
        currentToast.close();
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions,
        onClose: () => {
          currentToast = null;
        },
      });
    };
  },
};

/*
 * helper
 * */
function createToast({ Vue, message, propsData, onClose }) {
  // 生成一个toast组件，然后放到body里面
  let Constructor = Vue.extend(Toast);
  let toast = new Constructor({
    propsData,
  });
  toast.$slots.default = [message];
  toast.$mount();
  toast.$on("close", onClose);
  document.body.appendChild(toast.$el);
  return toast;
}
