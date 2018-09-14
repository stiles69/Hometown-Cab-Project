importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.514107640bc002f95244.js",
    "revision": "70c47ac6522264e05ac6e7611256599e"
  },
  {
    "url": "/_nuxt/layouts/default.bbd235c98d57297c69e7.js",
    "revision": "8ef7d01d29a847d85fbe335165b1693a"
  },
  {
    "url": "/_nuxt/manifest.037b37d77686a4339b5a.js",
    "revision": "6ebc16bd8a13db221d8d0e982aa4ade4"
  },
  {
    "url": "/_nuxt/pages/index.7f8c300233a11c12efc4.js",
    "revision": "7fb52e9e5d28bf186dd1d0a410820b05"
  },
  {
    "url": "/_nuxt/vendor.a287b8957aa73de415dd.js",
    "revision": "e52306f5ba911427928f7cf63a4d97e7"
  }
], {
  "cacheId": "hometown-cab",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





