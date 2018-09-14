importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.91a4adb8937bd6fb2adf.js",
    "revision": "a8ff817c486e7753c7cdd8e1723b69d1"
  },
  {
    "url": "/_nuxt/layouts/default.0803a0d3358f73ad4bc6.js",
    "revision": "b9e1f5af81454d2c52a1bdc2489f4c8f"
  },
  {
    "url": "/_nuxt/manifest.56ab42b2e005b4e38c6f.js",
    "revision": "b902ee4baaa22763b8b581ba609b8619"
  },
  {
    "url": "/_nuxt/pages/index.2402c301770901d5fccb.js",
    "revision": "10c4735cd7fb95bdf04fc3d4ace12d23"
  },
  {
    "url": "/_nuxt/vendor.2c3d29cb6a98c7a198df.js",
    "revision": "bd4f43ca6f6fa1b5ff7732bffedeeb18"
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





