<template lang="pug">
.layout.layout--internal-layout
  // APP Preloader
  app-preloader
  // Header
  app-header
  .container
    .layout__columnsWrapper
      // Router View
      main.layout__routerViewWrapper
        nuxt
  // Footer
  app-footer
</template>

<script>
export default {}
</script>

<style lang="scss">
.layout {
  $bcn: &;

  &--internal-layout {
    position: relative;
  }
}
</style>
