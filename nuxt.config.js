export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  ssr: true, // Enable Server Side rendering
  modern: 'server',

  // html global tag attrs
  htmlAttrs: {
    lang: 'ru'
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'confapp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/styles/app.styl'
  ],

  // autoimport
  styleResources: {
    stylus: [
      '@/styles/tools.styl'
    ]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/viewportSizeHandler', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-typed-vuex'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
    '@nuxtjs/sentry',
    '@nuxtjs/style-resources',
    ['nuxt-i18n', {
      vueI18nLoader: true,
      strategy: 'prefix_except_default',
      defaultLocale: 'ru',
      detectBrowserLanguage: {
        useCookie: true,
        alwaysRedirect: false, // англ только для англ!
      },
      locales: [
        {
          code: 'en',
          iso: 'en-US'
        },
        {
          code: 'ru',
          iso: 'ru-RU'
        }
      ]
    }]
  ],

  // server configs
  server: {
    port: 4242,
    host: '0.0.0.0'
  },

  // loading, set custom
  loading: false,

  // Sentry setup
  // https://sentry.nuxtjs.org/sentry/options
  sentry: {
    dsn: 'https://6b550a70d77a455bbcb3a3d5e3adb86f@o500249.ingest.sentry.io/5579810', // Enter your project's DSN here
    config: {} // Additional config
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  // axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [], // babel
    extend (config, { isClient }) {
      config.bail = true
      config.output.filename = '[name].[hash].js'
      config.output.chunkFilename = '[name].[chunkhash].js'

      if (process.env.NODE_ENV === 'development' && isClient) {
        config.devtool = 'eval-source-map'
      }
    },

    extractCSS: process.env.NODE_ENV === 'production',

    html: {
      minify: {
        collapseBooleanAttributes: false,
        decodeEntities: false,
        minifyCSS: false,
        minifyJS: false,
        processConditionalComments: true,
        removeEmptyAttributes: false,
        removeRedundantAttributes: false,
        trimCustomFragments: false,
        useShortDoctype: false
      }
    }
  }
}
