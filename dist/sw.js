importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.514107640bc002f95244.js",
    "revision": "70c47ac6522264e05ac6e7611256599e"
  },
  {
    "url": "/_nuxt/layouts/default.33fb3612845fe5d35293.js",
    "revision": "6d364acd9867cd99e3784f6bb0c4b9e6"
  },
  {
    "url": "/_nuxt/manifest.f8f9fadb9550ff17948d.js",
    "revision": "2b87bb9a027fb8440b62d69b64d51788"
  },
  {
    "url": "/_nuxt/pages/index.671a126315a67dff2c73.js",
    "revision": "49ef7c9adfe4de0cf3082cbad87846d9"
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





