<template lang="pug">
.layout.layout--post-detail-layout
  // APP Preloader
  app-preloader
  // Header
  app-header
  .container
    .layout__columnsWrapper
      .row.d-flex.justify-content-center
        .col-md-8
          // Router View
          main.layout__routerViewWrapper
            nuxt
  // App Tabbar
  app-tabbar.d-lg-none
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
