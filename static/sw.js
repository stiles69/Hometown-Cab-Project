importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.ed6514c97cc395311321.js",
    "revision": "0bee1d7fef83692edbbb636721cdaa15"
  },
  {
    "url": "/_nuxt/layouts/default.12b063495881b6a79184.js",
    "revision": "8162cc0b0e56a731ab68517d23b5c860"
  },
  {
    "url": "/_nuxt/manifest.d94428ca9648c441d7b8.js",
    "revision": "532a436fc5fa8b5e8a6cc0943ef1b231"
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





