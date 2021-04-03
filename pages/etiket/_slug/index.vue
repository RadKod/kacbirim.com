<template lang="pug">
.page.page--tag
  template(v-if="fetchState.pending")
    template(v-for="i in 4")
      client-only
        post-card-skeleton
  template(v-else-if="fetchState.error")
    p Bir hata oluştu <br>
      small {{ fetchState.error.message }}
  template(v-else)
    p.mb-2 <strong>{{ $route.params.slug }}</strong> etiketine ait içerikleri görüntülüyorsun.
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
import { TITLE, DESCRIPTION } from '@/system/constants'
import { useWindowScroll } from '@vueuse/core'
import { defineComponent, useFetch, reactive, ref, useContext, useRoute, onMounted, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'main',
  setup() {
    const context = useContext()
    const route = useRoute()

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
          limit: post.limit,
          tags_like: `slug,${route.value.params.slug}`
        }
      })
      posts.value = result.data
    })

    async function loadMore($state) {
      const result = await context.$axios.apis.post.fetchPosts({
        requestQuery: {
          page: (post.page += 1),
          limit: post.limit,
          tags_like: `slug,${route.value.params.slug}`
        }
      })
      posts.value.push(...result.data)
      $state.loaded()

      if (result && result.data.length <= 0) {
        $state.complete()
      }
    }

    useMeta({ title: `${route.value.params.slug} etiketine ait içerikler. ${TITLE} - ${DESCRIPTION}` || `${TITLE} - ${DESCRIPTION}` })

    return { windowScrollX, windowScrollY, post, posts, fetchState, loadMore }
  },
  head: {}
})
</script>

<style lang="scss" scoped>
.page {
  position: relative;
}
</style>
