importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.a4da1384188e00a09801.js",
    "revision": "c303f848778954653924700bc986524f"
  },
  {
    "url": "/_nuxt/layouts/default.e4a06ffd503df8494031.js",
    "revision": "22088cf9b3fd27e8f4e1edaff3f992bd"
  },
  {
    "url": "/_nuxt/manifest.86e9d3688d3a9d677b94.js",
    "revision": "db5c22bfcb626e6ecb73a484e5edb213"
  },
  {
    "url": "/_nuxt/pages/index.a37612dbf16caf577c88.js",
    "revision": "e3653bd669f584c91f86ea06a6928dfd"
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





