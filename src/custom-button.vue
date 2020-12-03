<template>
  <div>
    <slot><p>[header]</p></slot>
    <button>{{ label }}</button>
    <slot><p>[footer]</p></slot>
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
