import { postApi } from '@/services/api'

export default function ({ $axios, app }) {
  $axios.apis = {
    post: postApi(app.$appAxios)
  }

  $axios.onRequest(config => {
    if (config.headers.common['Content-Type']) {
      config.headers.common['Content-Type'] = 'application/json'
    }

    config.headers.common['Accept-Language'] = 'tr'
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)

    switch (code) {
      case 401:
        break
      case 404:
        this.$nuxt.error({ statusCode: 404, message: '404 Not Found.' })
        break
      case 500:
        this.$nuxt.error({ statusCode: 500, message: 'Server Error.' })
        break
      default:
        break
    }
  })
}
