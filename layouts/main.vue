<template lang="pug">
.layout.layout--main-layout
  // APP Preloader
  app-preloader
  // Header
  app-header
  .container
    .layout__columnsWrapper
      vs-row
        vs-col(vs-lg="8")
          // Router View
          main.layout__routerViewWrapper
            nuxt
        vs-col(vs-lg="4")
          filter-widget
</template>

<script>
export default {}
</script>

<style lang="scss">
.layout {
  $bcn: &;

  &--main-layout {
    position: relative;

    #{$bcn}__routerViewWrapper {
      margin-right: 2rem;
    }
  }
}
</style>
