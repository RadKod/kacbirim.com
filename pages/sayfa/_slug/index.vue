<template lang="pug">
.page.page--internal
  template(v-if="$fetchState.pending")
    preloader-spinner
  template(v-else-if="$fetchState.error")
    p Bir hata oluştu...
  template(v-else)
    nuxt-content(:document="page")
</template>

<script>
export default {
  layout: 'internal',
  data() {
    return {
      page: {}
    }
  },
  async fetch() {
    const page = await this.$content(`sayfa/${this.$route.params.slug}`).fetch()
    this.page = page
  }
}
</script>

<style lang="scss" scoped>
.page {
  position: relative;
}
</style>
