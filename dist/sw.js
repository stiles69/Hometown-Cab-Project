importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.a4da1384188e00a09801.js",
    "revision": "c303f848778954653924700bc986524f"
  },
  {
    "url": "/_nuxt/layouts/default.5079dcd09febe74d44e9.js",
    "revision": "f10de37e03e3f8b75015a1f709d75531"
  },
  {
    "url": "/_nuxt/manifest.147ef567b55632da476d.js",
    "revision": "f791563e8cbd4b222dc279df04eaa98e"
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





