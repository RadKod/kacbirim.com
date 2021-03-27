<template lang="pug">
.layout.layout--full-layout
  // APP Preloader
  app-preloader
  // Header
  app-header
  .layout__columnsWrapper
    // Router View
    main.layout__routerViewWrapper
      nuxt
  // App Tabbar
  app-tabbar.d-lg-none
  // Footer
  app-footer.d-none.d-lg-flex
</template>

<script>
export default {}
</script>

<style lang="scss">
.layout {
  $bcn: &;

  &--full-layout {
    position: relative;
    #{$bcn} {
      &__columnsWrapper {
        padding-top: var(--header-height);
      }
    }
  }
}
</style>
