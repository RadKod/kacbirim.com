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
        vs-col.layout__sidebar(vs-lg="4" sticky-container)
          filter-widget
          github-widget
          .sticky(v-sticky sticky-offset="{top: 80}")
            discord-widget
            footer-widget
</template>

<script>
export default {}
</script>

<style lang="scss">
.layout {
  $bcn: &;

  &--main-layout {
    position: relative;

    #{$bcn} {
      &__routerViewWrapper {
        margin-right: 2rem;
      }

      &__sidebar {
        position: relative;
        min-height: 100vh;

        .widget {
          margin-bottom: calc(var(--base-m-y) * 2.5);
        }

        .footer-widget {
          margin-top: calc(var(--base-m-y) * 2.5);
        }
      }
    }
  }
}
</style>
