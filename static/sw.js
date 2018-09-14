importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.514107640bc002f95244.js",
    "revision": "70c47ac6522264e05ac6e7611256599e"
  },
  {
    "url": "/_nuxt/layouts/default.3cf8f3f27c0e555273ea.js",
    "revision": "d76835e54f40c5921700cd9558870bf6"
  },
  {
    "url": "/_nuxt/manifest.021a3738b9c11f159f7c.js",
    "revision": "1431d2fff1e161b13d239a05381c55c3"
  },
  {
    "url": "/_nuxt/pages/index.da05afdc558eba9c6d5f.js",
    "revision": "271fa4a4a0d31f3ddd40460b6e745231"
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





