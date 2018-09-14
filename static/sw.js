importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.93bbc787a2ecc9544658.js",
    "revision": "cbb3bb7c7bc439561b98c7e5ccabd40c"
  },
  {
    "url": "/_nuxt/layouts/default.9acfc1dad4acbe0ffa65.js",
    "revision": "d8b75cb4b8f591a9b1b3ebd024fb1b35"
  },
  {
    "url": "/_nuxt/manifest.04f66c1c195eb90089c9.js",
    "revision": "b0e6b1ed2d8da1b5e4058e6c26bad0b4"
  },
  {
    "url": "/_nuxt/pages/index.dc55c919886a81f43249.js",
    "revision": "6362eb06fa65f1edd1f6b739c2aeef01"
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





