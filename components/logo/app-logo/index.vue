<template lang="pug">
img.app-logo(src="@/assets/img/core/logo.png" alt="kacbirim.com" :width="width" :height="height")
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      required: false,
      default: 60
    },
    height: {
      type: Number,
      required: false,
      default: 60
    }
  }
}
</script>

<style lang="scss" scoped>
.app-logo {
  position: relative;
}
</style>
