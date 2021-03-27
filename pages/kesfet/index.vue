<template lang="pug">
.page.page--discover
  footer-widget
  github-widget
  discord-widget
  sponsor-widget
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
    margin-bottom: calc(var(--base-m-y) * 4);
  }
}
</style>
