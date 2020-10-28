<template>
  <div>
    <button>{{ text }} {{ message }}</button>
  </div>
</template>

<script>
export default {
  name: "button",
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
