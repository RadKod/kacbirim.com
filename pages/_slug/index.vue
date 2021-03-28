<template lang="pug">
.page.page--post-detail
  template.pw-100(v-if="$fetchState.pending")
    preloader-spinner.d-block.mx-auto
  template(v-else-if="$fetchState.error")
    p Bir hata oluştu...
  template(v-else)
    post-card(:post="post.detail")
</template>

<script>
import { TITLE, DESCRIPTION } from '@/system/constants'

export default {
  layout: 'post-detail',
  data() {
    return {
      post: {
        detail: {}
      }
    }
  },
  async fetch() {
    const result = await this.$axios.apis.post.fetchPost({
      slug: this.$route.params.slug
    })

    if (result.success) {
      this.post.detail = result.data
    } else {
      this.$izitoast.error({ title: result.message })
    }
  },
  head() {
    return {
      title: `${this.post.detail.title} - ${TITLE} - ${DESCRIPTION}` || `${TITLE} - ${DESCRIPTION}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.post.detail.title} - ${this.post.detail.description}` || `${TITLE} - ${DESCRIPTION}`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.post.detail.image}` || `/preview/social-media-preview.jpg`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `${this.post.detail.title} - ${this.post.detail.description}` || `${TITLE} - ${DESCRIPTION}`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  position: relative;
}
</style>
