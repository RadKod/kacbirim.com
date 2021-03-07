<template lang="pug">
.page.page--main
  template(v-if="$fetchState.pending")
    preloader-spinner
  template(v-else-if="$fetchState.error")
    p Bir hata oluştu...
  template(v-else)
    main-feed-post-list(:posts="post.items")
</template>

<script>
export default {
  layout: 'main',
  data() {
    return {
      post: {
        items: []
      }
    }
  },
  async fetch() {
    const result = await this.$axios.apis.post.fetchPosts()

    this.post.items = result.data
  }
}
</script>

<style lang="scss" scoped>
.page {
  position: relative;
}
</style>
