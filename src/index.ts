import Vue from "vue";
import vueCustomElement from "vue-custom-element";
import CustomButton from "./custom-button.vue";
import CustomTextField from "./custom-text-field.vue";
import wrap from "@vue/web-component-wrapper";

Vue.config.ignoredElements = ["custom-text-field"];
Vue.use(vueCustomElement);
Vue.customElement("custom-text-field", CustomTextField);

const CustomButtonElement = wrap(Vue, CustomButton);
window.customElements.define("custom-button", CustomButtonElement);
