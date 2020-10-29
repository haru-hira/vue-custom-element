<template>
  <div>
    <input type="text" v-model="innerValue" />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  computed: {
    innerValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>
