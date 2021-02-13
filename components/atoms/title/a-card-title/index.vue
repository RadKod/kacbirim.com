<template lang="pug">
span.a-rk-card-title(v-if="title") {{ title }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.a-rk-card-title {
  position: relative;
  color: var(--color-text-01);
}
</style>
