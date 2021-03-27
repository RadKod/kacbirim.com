export default {
  env: {
    DOMAIN: 'localhost:3000',
    API: 'https://api.radkod.com/kacbirim/api/v1'
  },

  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',

  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Global Styles (Do not import actual styles)
   ** https://www.npmjs.com/package/@nuxtjs/style-resources
   */
  styleResources: {
    scss: [
      // Plugins
      '~/assets/style/scss/plugins/_breakpoint.scss',
      '~/assets/style/scss/plugins/_mq.scss', // Doc: https://github.com/sass-mq/sass-mq
      // Functions
      '~/assets/style/scss/functions/_center.scss',
      '~/assets/style/scss/functions/_triangle.scss',
      // Mixins
      '~/assets/style/scss/mixins/_font.scss',
      '~/assets/style/scss/mixins/_gradient.scss'
    ]
  },

  /*
   ** Global Styles (Actual styles)
   */
  css: [
    // Actual styles entry point (as import management)
    '~/assets/style/scss/app.scss',
    // 3rd
    'remixicon/fonts/remixicon.css'
  ],

  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    {
      src: '@/plugins/vuesax.js' // https://lusaxweb.github.io/vuesax
    },
    {
      src: '@/plugins/vue-sticky-directive.js', // https://www.npmjs.com/package/vue-sticky-directive
      ssr: false
    },
    {
      src: '@/plugins/vue-clipboard2.js', // https://www.npmjs.com/package/vue-clipboard2
      ssr: false
    },
    { src: '~/plugins/app/app-axios.js' },
    { src: '~/plugins/app/api-register.js' }
  ],

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: [
    '~/components',
    '~/components/card',
    '~/components/footer',
    '~/components/header',
    '~/components/loader',
    '~/components/logo',
    '~/components/post-list',
    '~/components/spinner',
    '~/components/widget',
    '~/components/nav',
    '~/components/tabbar',
    '~/components/state-block',
    '~/components/cover',
    '~/components/list',
    '~/components/skeleton'
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/eslint-module',
      {
        // eslint module options
      }
    ],
    [
      '@nuxtjs/stylelint-module',
      {
        // stylelint module options
        files: ['{assets/style,components,layouts,pages}/**/*.{css,sass,scss,less,stylus,vue}']
      }
    ],
    // https://www.npmjs.com/package/@nuxtjs/moment
    ['@nuxtjs/moment', { defaultLocale: 'tr', locales: ['tr'] }]
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ['@nuxtjs/axios'], // https://axios.nuxtjs.org
    ['@nuxt/content'], // https://content.nuxtjs.org
    // Doc: https://www.npmjs.com/package/nuxt-izitoast
    [
      'nuxt-izitoast',
      {
        class: 'kb-toast kb-toast-default',
        close: true,
        color: '#222',
        pauseOnHover: true,
        layout: 2,
        closeOnEscape: true,
        theme: 'dark',
        timeout: 4000,
        progressBar: true,
        transitionIn: 'fadeInUp',
        transitionOut: 'fadeOut',
        transitionInMobile: 'fadeInUp',
        transitionOutMobile: 'fadeOutDown',
        position: 'bottomCenter',
        progressBarColor: '#666'
      }
    ]
  ],

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extractCSS: process.env.NODE_ENV === 'production'
  },

  /*
   ** Server configuration
   ** See https://nuxtjs.org/api/configuration-server/
   */
  server: {
    host: '0.0.0.0', // default: localhost,
    timing: false,
    port: 80
  }
}
