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
    ['@nuxtjs/google-tag-manager', { id: 'GTM-K2PTPX5' }]
  ],

  //Workbox
  workbox: {
    // Workbox options
  },

  //Meta
  meta: {
    charset: 'utf-8',
    viewport: 'width=device - width, initial-scale=1',
    mobileApp: true,
    favicon: true,
    name: 'Hometown Cab',
    author: 'admin@roguedesigns.us',
    description:
      'Hometown Cab Taxi Newton Iowa 50208 Jasper County Iowa 515-210-4111 641-275-9501',
    theme_color: '#efe79c',
    lang: 'en',
    ogType: 'website',
    ogSiteName: 'Hometown Cab',
    ogTitle: 'Hometown Cab Newton, Iowa 50208',
    ogDescription:
      'Hometown Cab Taxi Newton Iowa 50208 Jasper County Iowa 515-210-4111 641-275-9501',
    ogHost: 'https://hometown.cab',
    ogImage: true,
    ogUrl: 'https://hometown.cab'
  },

  // Manifest
  manifest: {
    name: 'Hometown Cab',
    shortname: 'HometownCab',
    display: 'standalone',
    start_url: '.',
    background_color: '#efe79c',
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

  /* icon: {
    // Icon options
  }, */

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
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2018-09-13T13:30:00.000Z'
      }
    ]
  },

  //Vuetify
  vuetify: {
    materialIcons: true,
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
      { name: 'robots', content: 'noimageindex' },
      { name: 'googlebot', content: 'noimageindex' },
      { name: 'msvalidate.01', content: '72C489E3AD71ECCCBF1CE821FAB81C3F' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#efe79c' },

  /*
 ** Global CSS
 */
  css: ['vuetify/src/stylus/main.styl'],

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
