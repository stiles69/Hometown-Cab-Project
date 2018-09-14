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
    // Google Tag Manager
    ['@nuxtjs/google-tag-manager', { id: 'GTM-K2PTPX5' }],
    [
      'nuxt-imagemin',
      {
        optipng: { optimizationLevel: 5 }
      }
    ]
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

  // Manifest
  manifest: {
    name: 'Hometown Cab',
    shortname: 'HometownCab',
    display: 'standalone',
    start_url: '.',
    background_color: '#FDF3D5',
    icons: [
      {
        src: '/icons/icon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        src: '/icons/icon-48x48.png',
        sizes: '48x48',
        type: 'image/png'
      },
      {
        src: '/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png'
      },
      {
        src: '/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png'
      },
      {
        src: '/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png'
      },
      {
        src: '/icons/icon-168x168.png',
        sizes: '168x168',
        type: 'image/png'
      },
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icons/icon-256x256.png',
        sizes: '256x256',
        type: 'image/png'
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },

  //Sitemap
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.hometown.cab',
    cacheTime: 1000 * 60 * 15,
    gzip: false,
    generate: true, // Enable me when using nuxt generate
    routes: [
      '/',
      {
        url: '/index.html',
        changefreq: 'monthly',
        priority: 1,
        lastmodISO: '2018-09-13T13:30:00.000Z'
      }
    ]
  },

  // Vuetify
  vuetify: {
    materialIcons: true,
    css: true,
    theme: {
      primary: '#FDD835',
      secondary: '#FFECB3',
      accent: '#F9A825',
      error: '#f44336',
      warning: '#FFAB91',
      info: '#2196f3',
      success: '#4caf50'
    }
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Hometown Cab',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Hometown Cab Taxi Newton Iowa 50208 515-210-4111 Jasper County Iowa'
      },
      { name: 'robots', content: 'noimageindex' },
      { name: 'googlebot', content: 'noimageindex' },
      { name: 'title', content: 'Hometown Cab' },
      { name: 'author', content: 'Rogue Designs <admin@roguedesigns.us>' },
      { name: 'theme_color', content: '#FDD835' },
      { name: 'lang', content: 'en' },
      { name: 'og:title', content: 'Hometown Cab' },
      { name: 'og:url', content: 'https://www.hometown.cab' },
      {
        name: 'og:description',
        content:
          'Hometown Cab Taxi Newton Iowa 50208 Jasper County Iowa Taxi Cab Newton Iowa Area'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: ['./assets/style/app.styl'],
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
    extend(config, { isDev, isClient }) {
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
