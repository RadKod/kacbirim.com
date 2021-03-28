export const postApi = appAxios => ({
  fetchPosts({ requestQuery }) {
    const defaults = { sort: 'id,desc' }

    return appAxios({
      method: 'get',
      path: `posts`,
      query: {
        ...defaults,
        ...requestQuery
      }
    })
  },
  fetchPost({ slug }) {
    return appAxios({
      method: 'get',
      path: `posts/${slug}`
    })
  }
})
