import { createApp, h } from "vue";
import wrapper from "vue3-webcomponent-wrapper";

import App from "./App.vue";

const CustomElement = wrapper(App, createApp, h);

window.customElements.define("data-table", CustomElement);
