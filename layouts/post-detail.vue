<template lang="pug">
.layout.layout--main-layout
  // APP Preloader
  app-preloader
  // Header
  app-header
  .container
    .layout__columnsWrapper
      vs-row
        // Router View
        main.layout__routerViewWrapper
          nuxt
</template>

<script>
export default {}
</script>

<style lang="scss">
.layout {
  $bcn: &;

  &--post-detail-layout {
    position: relative;
  }
}
</style>
