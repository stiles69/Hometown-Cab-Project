const nodeExternals = require('webpack-node-externals')
const resolve = srcDir => require('path').join(__dirname, dir)

module.exports = {
  /* Modules
  **
  */

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',    
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics',
    ['nuxt-imagemin', {
      optipng: { optimizationLevel: 5},
      gifsicle: { optimationLevel: 2}
      }
    ],
  ],

  //Workbox
  workbox: {
    importScripts: [
      'https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js'
    ],
    runtimeCaching: [
      {
      urlPattern: 'https://hometown.cab/.*',
      // Defaults to networkFirst if omitted
      handler: 'networkFirst',
      // Defaults to GET if omitted
      method: 'GET'
      }
    ]
  },

  //Manifest
  manifest: {
    name: 'Hometown Cab App',
    lang: 'en'
  },

  //Icon
  icon: {
    //iconSrc: '/static/icon.png',
    sizes: [16, 120, 144, 152, 192, 384, 512]
  },

  //Sitemap
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://hometown.cab',
    cacheTime: 1000 * 60 * 15,
    gzip: false,
    generate: true, // Enable me when using nuxt generate    
    routes: [
      '/',
      {
        url: '/index.html',
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2017-06-30T13:30:00.000Z'
      }
    ]
  },

  // Vuetify
  vuetify: {
    materialIcons: true,
    theme: {
      primary: "#FDD835",
      secondary: "#FFECB3",
      accent: "#F9A825",
      error: "#f44336",
      warning: "#FFAB91",
      info: "#2196f3",
      success: "#4caf50"
    }
  },

  // Google Analytics
  'google-analytics': {
    id: 'US-107490220-1'
  },

  
  /*
  ** Headers of the page
  */
  head: {
    title: 'Hometown Cab App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hometown Cab Newton Iowa 50208 Jasper County Iowa' },
      { name: 'title', content: 'Hometown Cab App' },
      { name: 'author', content: 'Rogue Designs <admin@roguedesigns.us>' },
      { name: 'theme_color', content: '#FDD835' },
      { name: 'lang', content: 'en' },
      { name: 'og:url', content: 'https://hometown.cab' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#FFECB3' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

