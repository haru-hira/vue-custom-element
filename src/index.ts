import Vue from "vue";
import vueCustomElement from "vue-custom-element";
import Button from "./button.vue";

Vue.config.ignoredElements = ["vce-button"];
Vue.use(vueCustomElement);
Vue.customElement("vce-button", Button, {
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
