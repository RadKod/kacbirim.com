export const postApi = appAxios => ({
  fetchPosts() {
    return appAxios({
      method: 'get',
      path: `posts`
    })
  },
  fetchPost({ slug }) {
    return appAxios({
      method: 'get',
      path: `posts/${slug}`
    })
  }
})
