<template>
  <div>
    <slot name="header"></slot>
    <button>{{ label }}</button>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "custom-button",
  props: {
    label: String,
  },
  data() {
    return {
      text: "button",
    };
  },
};
</script>

<style></style>
