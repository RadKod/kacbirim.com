module.exports = {
  env: {
    DOMAIN: 'kacbirim.com',
    API: 'https://api.radkod.com/kacbirim/api/v1',
    TITLE: 'Kaç Birim?',
    DESCRIPTION: 'Uluslararası birim fiyat karşılaştırması.'
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
    title: `Kaç Birim? - Uluslararası birim fiyat karşılaştırması.`,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: `Kaç Birim? - Uluslararası birim fiyat karşılaştırması.`
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/preview/social-media-preview.jpg'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: `Kaç Birim? - Uluslararası birim fiyat karşılaştırması.`
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `kacbirim.com`
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: `summary_large_image`
      },
      {
        hid: 'twitter:creator',
        property: 'twitter:creator',
        content: `@kacbirim`
      },
      {
        hid: 'Publisher',
        property: 'Publisher',
        content: `RadKod`
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/icon/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/icon/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/icon/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/icon/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/icon/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/icon/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/icon/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/icon/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icon/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icon/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icon/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' }
    ],
    script: [
      {
        src: 'https://cusdis.com/js/widget/lang/tr.js',
        defer: true
      }
    ]
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
    { src: '@/plugins/vue-infinite-loading.js', ssr: false }, // Doc: https://peachscript.github.io/vue-infinite-loading/guide
    { src: '@/plugins/v-dropdown-menu.js' }, // https://github.com/RadKod/v-dropdown-menu
    { src: '@/plugins/v-lazy-component.js', ssr: false }, // https://github.com/RadKod/v-lazy-component
    { src: '@/plugins/vue-observe-visibility.js', ssr: false }, // https://github.com/Akryum/vue-observe-visibility
    { src: '@/plugins/app/app-axios.js' },
    { src: '@/plugins/app/api-register.js' }
  ],

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/composition-api',
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
    ['@nuxtjs/moment', { defaultLocale: 'tr', locales: ['tr'] }],
    // https://google-analytics.nuxtjs.org
    '@nuxtjs/google-analytics'
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

  // GA
  googleAnalytics: {
    id: 'UA-72581578-4'
  },

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
    host: '0.0.0.0', // default: localhost
    port: 8080
  }
}
