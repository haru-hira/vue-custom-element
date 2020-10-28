import Vue from "vue";
import vueCustomElement from "vue-custom-element";
import CustomButton from "./custom-button.vue";
import CustomTextField from "./custom-text-field.vue";

Vue.config.ignoredElements = ["custom-button", "custom-text-field"];
Vue.use(vueCustomElement);
Vue.customElement("custom-button", CustomButton, {
  // shadowDOM化すると中のCSSが効かず、ここで指定したCSSが効く
  shadow: true,
  shadowCss: `
      button {
      font-size: 8px;
      cursor: pointer;
      color: magenta;
      padding: 1em 1em;
      background: PaleGreen;
    `,
});
Vue.customElement("custom-text-field", CustomTextField);
