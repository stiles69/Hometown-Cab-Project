importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.514107640bc002f95244.js",
    "revision": "70c47ac6522264e05ac6e7611256599e"
  },
  {
    "url": "/_nuxt/layouts/default.9015f3677e0c0f278516.js",
    "revision": "36fb9a0bd2c3bbdffd81117816ce89fb"
  },
  {
    "url": "/_nuxt/manifest.a332d16aba0bfdb35c9f.js",
    "revision": "e6bd97c55903d4ff1302f3ebfb6cfe00"
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





