<template lang="pug">
.page.page--tag
  template(v-if="$fetchState.pending")
    template(v-for="i in 2")
      client-only
        post-card-skeleton
  template(v-else-if="$fetchState.error")
    p Bir hata oluştu...
  template(v-else)
    template(v-if="post.items.length > 0")
      p.mb-2 <strong>{{ $route.params.slug }}</strong> etiketine ait içerikleri görüntülüyorsun.
      main-feed-post-list(:posts="post.items")
    template(v-else)
      p Henüz veri yok..
</template>

<script>
import { TITLE, DESCRIPTION } from '@/system/constants'

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
      requestQuery: {
        tags_like: `slug,${this.$route.params.slug}`
      }
    })

    this.post.items = result.data
  },
  head() {
    return {
      title: `${this.$route.params.slug} etiketine ait içerikler. ${TITLE} - ${DESCRIPTION}` || `${TITLE} - ${DESCRIPTION}`
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  position: relative;
}
</style>
