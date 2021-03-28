<template lang="pug">
.page.page--discover
  site-nav-widget
  github-widget
  discord-widget
  sponsor-widget
  footer-widget
</template>

<script>
export default {
  layout: 'internal'
}
</script>

<style lang="scss" scoped>
.page {
  position: relative;

  .widget {
    margin-bottom: calc(var(--base-m-y) * 2);
  }
}
</style>
