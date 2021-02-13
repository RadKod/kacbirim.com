<template lang="pug">
img.a-rk-post-image(:src="src" :alt="altText")
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: false,
      default: null
    },
    altText: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.a-rk-post-image {
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
