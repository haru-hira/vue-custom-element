<template>
  <div>
    <input type="text" v-model="message" />
  </div>
</template>

<script>
export default {
  name: "custom-text-field",
  props: {
    message: String,
  },
  data() {
    return {
      text: "button",
    };
  },
};
</script>

<style></style>
