<template lang="pug">
.page.page--main
  template(v-if="fetchState.pending")
    template(v-for="i in 4")
      client-only
        post-card-skeleton
  template(v-else-if="fetchState.error")
    p Bir hata oluştu <br>
      small {{ fetchState.error.message }}
  template(v-else)
    main-feed-post-list(:posts="post.items")
    // Infinite Loading
    client-only
      template(v-if="windowScrollY > 800")
        infinite-loading(v-if="post.items.length >= post.limit" @infinite="loadMore")
          template(v-slot:spinner)
            post-card-skeleton
          template(v-slot:no-more)
            p.my-base Daha fazla post yok..
</template>

<script>
import { useWindowScroll } from '@vueuse/core'
import { defineComponent, useFetch, reactive, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'main',
  setup() {
    const context = useContext()

    const { x, y } = useWindowScroll()

    const post = reactive({
      page: 1,
      limit: 10,
      items: []
    })

    const { fetch, fetchState } = useFetch(async () => {
      const result = await context.$axios.apis.post.fetchPosts({
        requestQuery: {
          page: post.page,
          limit: post.limit
        }
      })
      post.items = result.data
    })

    async function loadMore($state) {
      const result = await context.$axios.apis.post.fetchPosts({
        requestQuery: {
          page: (post.page += 1),
          limit: post.limit
        }
      })
      post.items.push(...result.data)
      $state.loaded()

      if (result && result.data.length <= 0) {
        $state.complete()
      }
    }

    return { windowScrollX: x, windowScrollY: y, post, fetchState, loadMore }
  }
})
</script>

<style lang="scss" scoped>
.page {
  position: relative;

  .post-card-skeleton {
    margin-bottom: calc(var(--base-m-y) * 2);
  }
}
</style>
