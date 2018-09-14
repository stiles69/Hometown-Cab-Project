importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.88dc9e49849e6beda123.js",
    "revision": "9d42a305f6d8af6a3cb98f50457be68a"
  },
  {
    "url": "/_nuxt/layouts/default.013c4ec29135426178aa.js",
    "revision": "648bcbd2c8a588cfe2a979683bd5ffac"
  },
  {
    "url": "/_nuxt/manifest.df86990cf7417c7e636e.js",
    "revision": "bfc5b37f178e3b05b2d5f81549432274"
  },
  {
    "url": "/_nuxt/pages/index.66d1137a19bbf605389d.js",
    "revision": "f78d9f3506481d2172f61be80e433362"
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





