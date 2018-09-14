importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.514107640bc002f95244.js",
    "revision": "70c47ac6522264e05ac6e7611256599e"
  },
  {
    "url": "/_nuxt/layouts/default.50ca524718b1faf6c0dd.js",
    "revision": "f5d11177fa10652b9264f5506e983553"
  },
  {
    "url": "/_nuxt/manifest.20077ac4906acda39444.js",
    "revision": "75b74fc086f9639f8e897976d5c16ba4"
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





