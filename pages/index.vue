<template lang="pug">
.page.page--main
  template(v-if="$fetchState.pending")
    template(v-for="i in 2")
      client-only
        post-card-skeleton
  template(v-else-if="$fetchState.error")
    p Bir hata oluştu <br>
      small {{ $fetchState.error.message }}
  template(v-else)
    template(v-if="post.items.length > 0")
      main-feed-post-list(:posts="post.items")
    template(v-else)
      p Henüz veri yok..
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
    const result = await this.$axios.apis.post.fetchPosts({
      requestQuery: null
    })

    this.post.items = result.data
  }
}
</script>

<style lang="scss" scoped>
.page {
  position: relative;

  .post-card-skeleton {
    margin-bottom: calc(var(--base-m-y) * 2);
  }
}
</style>
