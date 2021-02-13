<template lang="pug">
.layout.default-layout
  // APP Preloader
  o-app-preloader
  // Header
  o-app-header
  // Router View
  main.router-view-wrapper
    nuxt
</template>

<script>
export default {}
</script>

<style lang="scss">
.default-layout {
  position: relative;
}
</style>
