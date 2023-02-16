import Vue from "vue";
import Button from "./button.vue";
import Icon from "./icon.vue";
import ButtonGroup from "./button-group.vue";
import Input from "./input.vue";

Vue.component("m-button", Button);
Vue.component("m-icon", Icon);
Vue.component("m-button-group", ButtonGroup);
Vue.component("m-input", Input);

new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: true,
    loading3: true,
    message: 1,
  },
  methods: {
    inputChange(e) {
      console.log(e.target.value);
    },
  },
});
