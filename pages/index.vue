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
    main-feed-post-list(:posts="posts")
    // Infinite Loading
    client-only
      template(v-if="windowScrollY.value > 800")
        infinite-loading(v-if="posts.length >= post.limit" @infinite="loadMore")
          template(v-slot:spinner)
            post-card-skeleton
          template(v-slot:no-more)
            p.my-base Daha fazla post yok..
</template>

<script>
import { useWindowScroll } from '@vueuse/core'
import { defineComponent, useFetch, ref, reactive, useContext, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'main',
  setup() {
    const context = useContext()
    let windowScrollX = ref(0)
    let windowScrollY = ref(0)

    onMounted(() => {
      const { x, y } = useWindowScroll()
      windowScrollX.value = x
      windowScrollY.value = y
    })

    const post = reactive({
      page: 1,
      limit: 10
    })

    const posts = ref([])

    const { fetch, fetchState } = useFetch(async () => {
      const result = await context.$axios.apis.post.fetchPosts({
        requestQuery: {
          page: post.page,
          limit: post.limit
        }
      })
      posts.value = result.data
    })

    async function loadMore($state) {
      const result = await context.$axios.apis.post.fetchPosts({
        requestQuery: {
          page: (post.page += 1),
          limit: post.limit
        }
      })
      posts.value.push(...result.data)
      $state.loaded()

      if (result && result.data.length <= 0) {
        $state.complete()
      }
    }

    return { windowScrollX, windowScrollY, post, posts, fetchState, loadMore }
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
