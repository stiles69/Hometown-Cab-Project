importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.514107640bc002f95244.js",
    "revision": "70c47ac6522264e05ac6e7611256599e"
  },
  {
    "url": "/_nuxt/layouts/default.f5242e8a39775c8a90d0.js",
    "revision": "64a5e07ba91c75e4dcd7097f08bf178a"
  },
  {
    "url": "/_nuxt/manifest.b1c6b3e94fb0c62b2376.js",
    "revision": "12c39eb36e66e574571adc6b4298cca4"
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





