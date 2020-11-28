<template>
  <div>
    <slot name="header"></slot>
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
        this.$emit("valid", val && val.length <= 5 ? true : false);
      },
    },
  },
};
</script>
