import Vue from "vue";
import VeeValidate from "vee-validate";
import wrap from "@vue/web-component-wrapper";

import App from "./App.vue";

Vue.use(VeeValidate);

const wrappedElement = wrap(Vue, App);

window.customElements.define("v-card", wrappedElement);