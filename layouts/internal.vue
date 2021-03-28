<template lang="pug">
.layout.layout--internal-layout
  // APP Preloader
  app-preloader
  // Header
  app-header
  .container
    .layout__columnsWrapper
      .row
        .col-12.d-none-lg
          site-nav-widget
        .col-12.col-lg-8
          // Router View
          main.layout__routerViewWrapper
            nuxt
        .col-4.layout__sidebar.d-none.d-lg-block(sticky-container)
          .sticky(v-sticky sticky-offset="{top: 80}")
            site-nav-widget
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

  &--internal-layout {
    position: relative;

    .site-nav-widget {
      .block-nav {
        flex-direction: row;

        &__link {
          flex: 1;
          justify-content: center;
        }
      }
    }
  }
}
</style>
