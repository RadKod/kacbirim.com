<template lang="pug">
.layout.layout--main-layout
  // APP Preloader
  app-preloader
  // Header
  app-header
  .container
    .layout__columnsWrapper
      .row
        .col-12.col-lg-8.pr-lg-0
          // Router View
          main.layout__routerViewWrapper
            nuxt
        .col-4.layout__sidebar.d-none.d-lg-block(sticky-container)
          filter-widget
          github-widget
          .sticky(v-sticky sticky-offset="{top: 80}")
            discord-widget
            footer-widget
  // App Tabbar
  app-tabbar.d-lg-none
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
        @include mq($from: desktop) {
          margin-right: var(--base-m-x);
        }
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
