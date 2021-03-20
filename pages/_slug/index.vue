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
  }
}
</script>

<style lang="scss" scoped>
.page {
  position: relative;
}
</style>
