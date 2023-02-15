import Vue from "vue";
import Button from "./button.vue";
import Icon from "./Icon.vue";
Vue.component("m-button", Button);
Vue.component("m-icon", Icon);

new Vue({
  el: "#app",
});
